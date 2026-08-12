import { Text, TouchableOpacity, View } from "react-native";

type SectionHeaderProps = {
  title: string;
  actionLabel?: string;
  onActionPress?: () => void;
};

export function SectionHeader({
  title,
  actionLabel,
  onActionPress,
}: SectionHeaderProps) {
  return (
    <View className="flex-row items-center justify-between mb-3">
      <Text className="font-poppins-semibold text-[17px] text-text-primary">
        {title}
      </Text>
      {actionLabel && onActionPress ? (
        <TouchableOpacity activeOpacity={0.7} onPress={onActionPress}>
          <Text className="font-poppins-medium text-[13px] text-lingua-blue">
            {actionLabel}
          </Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}
