import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants/images";
import { colors } from "@/constants/theme";
import { LESSONS } from "@/data/lessons";

type ExpoGoLessonFallbackProps = {
  lessonId: string;
};

export function ExpoGoLessonFallback({ lessonId }: ExpoGoLessonFallbackProps) {
  const router = useRouter();
  const lesson = LESSONS.find((item) => item.id === lessonId);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 20,
          paddingTop: 8,
          paddingBottom: 6,
        }}
      >
        <TouchableOpacity
          onPress={() => router.back()}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <Ionicons
            name="chevron-back"
            size={24}
            color={colors.neutral.textPrimary}
          />
        </TouchableOpacity>

        <Text
          style={{
            flex: 1,
            textAlign: "center",
            fontFamily: "Poppins-SemiBold",
            fontSize: 16,
            color: colors.neutral.textPrimary,
          }}
        >
          AI Teacher
        </Text>

        <View style={{ width: 24 }} />
      </View>

      <View
        style={{
          flex: 1,
          marginHorizontal: 16,
          marginTop: 12,
          borderRadius: 24,
          backgroundColor: "#F4F2FF",
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 24,
          gap: 20,
        }}
      >
        <Image
          source={images.mascotWelcome}
          contentFit="contain"
          style={{ width: 180, height: 180 }}
        />

        <Text
          style={{
            fontFamily: "Poppins-SemiBold",
            fontSize: 20,
            color: colors.neutral.textPrimary,
            textAlign: "center",
          }}
        >
          {lesson?.title ?? "Leçon"}
        </Text>

        <Text
          style={{
            fontFamily: "Poppins-Regular",
            fontSize: 15,
            color: colors.neutral.textSecondary,
            textAlign: "center",
            lineHeight: 22,
          }}
        >
          Les leçons vidéo avec l&apos;IA nécessitent un development build.
          Expo Go ne supporte pas les modules natifs Stream WebRTC.
        </Text>

        <View
          style={{
            backgroundColor: "#fff",
            borderRadius: 16,
            paddingHorizontal: 16,
            paddingVertical: 14,
            width: "100%",
            gap: 8,
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins-SemiBold",
              fontSize: 14,
              color: colors.neutral.textPrimary,
            }}
          >
            Pour tester sur téléphone :
          </Text>
          <Text
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: 13,
              color: colors.neutral.textSecondary,
              lineHeight: 20,
            }}
          >
            1. Connectez un appareil Android{"\n"}
            2. Lancez{" "}
            <Text style={{ fontFamily: "Poppins-Medium" }}>
              npx expo run:android
            </Text>
            {"\n"}
            3. Ouvrez l&apos;app de développement générée
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
