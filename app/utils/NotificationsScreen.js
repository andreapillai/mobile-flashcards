import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Notifications from "expo-notifications";
import AppScreen from "../components/AppScreen";
import AppButton from "../components/AppButton";

import defaultStyles, { colors } from "../utils/defaultStyles";

import activityCache from "./activityCache";

export default function NotificationsScreen() {
  const [cachedData, setCachedData] = useState();

  Notifications.setNotificationHandler({
    handleNotification: async () => {
      return {
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
      };
    },
  });

  const content = {
    title: "Mobile-Flashcards",
    body: "Don't forget to study!!!",
  };

  const showNotification = () => {
    Notifications.scheduleNotificationAsync({ content, trigger: null });
  };

  const readCache = async () => {
    const result = await activityCache.get();
    setCachedData(result);
  };
  const setCache = () => {
    activityCache.store({ lastActivity: Date.now() });
    readCache();
  };
  const clearCache = () => {
    activityCache.clear();
    readCache();
  };

  return (
    <AppScreen>
      <AppButton title="Tap Me!" onPress={showNotification} />
      <View style={styles.section}>
        <Text style={styles.title}>Cache</Text>
        <View style={styles.buttonRow}>
          <AppButton title="Read" onPress={readCache} color={colors.green} />
          <AppButton title="Set" onPress={setCache} />
          <AppButton title="Clear" onPress={clearCache} color={colors.danger} />
        </View>
        <AppButton title="log cache" onPress={() => console.log(cachedData)} />
        <Text>
          Last Activity: {(cachedData && cachedData.lastActivity) || "none"}
        </Text>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  title: defaultStyles.sscreenTitle,
  section: {
    borderColor: colors.primary,
    borderTopWidth: 2,
    marginBottom: 10,
  },
  buttonRow: defaultStyles.buttonRow,
});
