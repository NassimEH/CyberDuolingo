import { Ionicons } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ChatBubble } from "@/components/ChatBubble";
import { SectionHeader } from "@/components/SectionHeader";
import { colors } from "@/constants/theme";
import { ChatTopic, getChatTopicsForLanguage } from "@/data/chatTopics";
import { posthog } from "@/lib/posthog";
import { useLanguageStore } from "@/store/languageStore";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  text: string;
}

export default function ChatScreen() {
  const { selectedLanguage } = useLanguageStore();
  const topics = getChatTopicsForLanguage(selectedLanguage);
  const [selectedTopic, setSelectedTopic] = useState<ChatTopic | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [responseIndex, setResponseIndex] = useState(0);
  const listRef = useRef<FlatList<ChatMessage>>(null);

  useEffect(() => {
    posthog.capture("chat_viewed", {
      language: selectedLanguage,
      topics_count: topics.length,
    });
  }, [selectedLanguage, topics.length]);

  function openTopic(topic: ChatTopic) {
    setSelectedTopic(topic);
    setMessages([
      {
        id: "intro",
        role: "assistant",
        text: topic.introMessage,
      },
    ]);
    setResponseIndex(0);
    setInput("");
    posthog.capture("chat_topic_opened", {
      topic_id: topic.id,
      language: topic.languageCode,
    });
  }

  function closeTopic() {
    setSelectedTopic(null);
    setMessages([]);
    setInput("");
  }

  function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || !selectedTopic) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      text: trimmed,
    };

    const tutorText =
      selectedTopic.tutorResponses[
        responseIndex % selectedTopic.tutorResponses.length
      ];

    const assistantMessage: ChatMessage = {
      id: `assistant-${Date.now()}`,
      role: "assistant",
      text: tutorText,
    };

    setMessages((prev) => [...prev, userMessage, assistantMessage]);
    setResponseIndex((prev) => prev + 1);
    setInput("");
    posthog.capture("chat_message_sent", {
      topic_id: selectedTopic.id,
      message_length: trimmed.length,
    });
  }

  if (selectedTopic) {
    return (
      <SafeAreaView
        style={{ flex: 1, backgroundColor: colors.neutral.background }}
      >
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View className="flex-row items-center px-5 pt-2 pb-3 border-b border-border bg-white">
            <TouchableOpacity
              onPress={closeTopic}
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            >
              <Ionicons
                name="chevron-back"
                size={24}
                color={colors.neutral.textPrimary}
              />
            </TouchableOpacity>
            <View className="flex-1 ml-2">
              <Text
                className="font-poppins-semibold text-base text-text-primary"
                numberOfLines={1}
              >
                {selectedTopic.title}
              </Text>
              <Text className="caption">{selectedTopic.subtitle}</Text>
            </View>
            <Text className="text-xl">{selectedTopic.emoji}</Text>
          </View>

          <FlatList
            ref={listRef}
            data={messages}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.messagesContent}
            onContentSizeChange={() =>
              listRef.current?.scrollToEnd({ animated: true })
            }
            renderItem={({ item }) => (
              <ChatBubble
                message={item.text}
                isUser={item.role === "user"}
                senderName={item.role === "assistant" ? "Tutor" : undefined}
              />
            )}
            ListFooterComponent={
              selectedTopic.suggestedReplies.length > 0 ? (
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.suggestionsRow}
                >
                  {selectedTopic.suggestedReplies.map((reply) => (
                    <TouchableOpacity
                      key={reply}
                      style={styles.suggestionChip}
                      activeOpacity={0.8}
                      onPress={() => sendMessage(reply)}
                    >
                      <Text className="font-poppins-medium text-xs text-lingua-purple">
                        {reply}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              ) : null
            }
          />

          <View className="flex-row items-end px-4 pt-2 pb-3 gap-2 bg-white border-t border-border">
            <TextInput
              value={input}
              onChangeText={setInput}
              placeholder="Type your message..."
              placeholderTextColor={colors.neutral.textSecondary}
              multiline
              style={styles.input}
            />
            <TouchableOpacity
              style={[
                styles.sendButton,
                !input.trim() && styles.sendButtonDisabled,
              ]}
              activeOpacity={0.85}
              disabled={!input.trim()}
              onPress={() => sendMessage(input)}
            >
              <Ionicons name="send" size={18} color="#fff" />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.neutral.background }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Text className="h2 mb-1">Chat</Text>
        <Text className="body-md text-text-secondary mb-5">
          Text conversations with your AI language tutor
        </Text>

        <View className="flex-row items-center bg-surface rounded-2xl px-4 py-3 mb-5">
          <Ionicons
            name="search-outline"
            size={18}
            color={colors.neutral.textSecondary}
          />
          <Text className="body-md text-text-secondary ml-2">
            Search conversations
          </Text>
        </View>

        <SectionHeader title="Suggested topics" />
        <View className="gap-3 mb-6">
          {topics.map((topic) => (
            <TouchableOpacity
              key={topic.id}
              activeOpacity={0.8}
              onPress={() => openTopic(topic)}
              className="flex-row items-center bg-white rounded-2xl border border-border p-4"
              style={styles.topicCard}
            >
              <View className="w-12 h-12 rounded-2xl bg-surface items-center justify-center">
                <Text className="text-2xl">{topic.emoji}</Text>
              </View>
              <View className="flex-1 ml-3">
                <Text className="font-poppins-semibold text-sm text-text-primary mb-0.5">
                  {topic.title}
                </Text>
                <Text className="body-sm text-text-secondary" numberOfLines={1}>
                  {topic.subtitle}
                </Text>
              </View>
              <Ionicons
                name="chevron-forward"
                size={18}
                color={colors.neutral.textSecondary}
              />
            </TouchableOpacity>
          ))}
        </View>

        {topics.length === 0 ? (
          <View className="items-center py-8">
            <Text className="body-md text-text-secondary text-center">
              No chat topics for your selected language yet.
            </Text>
          </View>
        ) : null}

        <SectionHeader title="Tips" />
        <View
          className="bg-[#FFF5E8] rounded-2xl p-4 flex-row items-start gap-3"
          style={styles.tipsCard}
        >
          <Ionicons name="bulb-outline" size={22} color={colors.semantic.streak} />
          <View className="flex-1">
            <Text className="font-poppins-semibold text-sm text-text-primary mb-1">
              Practice every day
            </Text>
            <Text className="body-sm text-text-secondary">
              Short chat sessions build confidence faster than long study
              sessions. Try one topic per day!
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 100,
  },
  topicCard: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  tipsCard: {
    marginBottom: 8,
  },
  messagesContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  suggestionsRow: {
    gap: 8,
    paddingVertical: 8,
  },
  suggestionChip: {
    backgroundColor: "#EDE9FE",
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
    maxWidth: 260,
  },
  input: {
    flex: 1,
    minHeight: 44,
    maxHeight: 100,
    backgroundColor: colors.neutral.surface,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: colors.neutral.textPrimary,
  },
  sendButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.primary.purple,
    alignItems: "center",
    justifyContent: "center",
  },
  sendButtonDisabled: {
    opacity: 0.45,
  },
});
