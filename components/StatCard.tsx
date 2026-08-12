import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

import { colors } from "@/constants/theme";

type StatCardProps = {
  icon: keyof typeof Ionicons.glyphMap;
  iconColor: string;
  iconBg: string;
  label: string;
  value: string | number;
};

export function StatCard({
  icon,
  iconColor,
  iconBg,
  label,
  value,
}: StatCardProps) {
  return (
    <View style={styles.card}>
      <View
        className="w-10 h-10 rounded-xl items-center justify-center mb-2"
        style={{ backgroundColor: iconBg }}
      >
        <Ionicons name={icon} size={20} color={iconColor} />
      </View>
      <Text className="font-poppins-bold text-xl text-text-primary">
        {value}
      </Text>
      <Text className="caption mt-0.5">{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: colors.neutral.border,
    alignItems: "center",
  },
});
