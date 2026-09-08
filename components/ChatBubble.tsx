import { fontFamily, radius } from "@/constants/theme";
import { enterSide } from "@/lib/motion";
import { useTheme } from "@/lib/useTheme";
import { StyleSheet, Text } from "react-native";
import Animated from "react-native-reanimated";

type ChatBubbleProps = {
  message: string;
  isUser: boolean;
  senderName?: string;
  index?: number;
};

export function ChatBubble({
  message,
  isUser,
  senderName,
  index = 0,
}: ChatBubbleProps) {
  const { colors } = useTheme();

  return (
    <Animated.View
      entering={enterSide(isUser, index)}
      style={[
        styles.wrap,
        isUser ? styles.userAlign : styles.assistantAlign,
      ]}
    >
      {!isUser && senderName ? (
        <Text
          style={[styles.sender, { color: colors.neutral.textSecondary }]}
        >
          {senderName}
        </Text>
      ) : null}
      <Animated.View
        style={[
          styles.bubble,
          isUser
            ? {
                backgroundColor: colors.primary.blue,
                borderBottomRightRadius: 4,
              }
            : {
                backgroundColor: colors.neutral.surface,
                borderBottomLeftRadius: 4,
              },
        ]}
      >
        <Text
          style={[
            styles.message,
            {
              color: isUser ? "#fff" : colors.neutral.textPrimary,
            },
          ]}
        >
          {message}
        </Text>
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    maxWidth: "85%",
    marginBottom: 12,
  },
  userAlign: {
    alignSelf: "flex-end",
    alignItems: "flex-end",
  },
  assistantAlign: {
    alignSelf: "flex-start",
    alignItems: "flex-start",
  },
  sender: {
    fontFamily: fontFamily.regular,
    fontSize: 11,
    marginBottom: 4,
    marginLeft: 4,
  },
  bubble: {
    borderRadius: radius.md,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  message: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    lineHeight: 22,
  },
});
