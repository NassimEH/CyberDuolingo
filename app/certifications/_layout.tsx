import { Stack } from "expo-router";

import { RequireAuth } from "@/components/RequireAuth";

export default function CertificationsLayout() {
  return (
    <RequireAuth>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="[id]" />
        <Stack.Screen name="finder" />
      </Stack>
    </RequireAuth>
  );
}
