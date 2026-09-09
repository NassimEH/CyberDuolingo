import { Tabs } from "expo-router";

import { RequireAuth } from "@/components/RequireAuth";
import { TabBar } from "@/components/TabBar";

export default function TabsLayout() {
  return (
    <RequireAuth>
      <Tabs
        tabBar={(props) => <TabBar {...props} />}
        screenOptions={{ headerShown: false }}
      >
        <Tabs.Screen name="index" />
        <Tabs.Screen name="learn" />
        <Tabs.Screen name="challenges" />
        <Tabs.Screen name="lab" />
        <Tabs.Screen name="profile" />
      </Tabs>
    </RequireAuth>
  );
}
