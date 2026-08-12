import { Text, View } from "react-native";

type ChatBubbleProps = {
  message: string;
  isUser: boolean;
  senderName?: string;
};

export function ChatBubble({ message, isUser, senderName }: ChatBubbleProps) {
  return (
    <View
      className={`max-w-[85%] mb-3 ${isUser ? "self-end items-end" : "self-start items-start"}`}
    >
      {!isUser && senderName ? (
        <Text className="caption mb-1 ml-1">{senderName}</Text>
      ) : null}
      <View
        className={`rounded-2xl px-4 py-3 ${
          isUser ? "bg-lingua-purple rounded-br-sm" : "bg-surface rounded-bl-sm"
        }`}
      >
        <Text
          className={`body-md ${isUser ? "text-white" : "text-text-primary"}`}
        >
          {message}
        </Text>
      </View>
    </View>
  );
}
