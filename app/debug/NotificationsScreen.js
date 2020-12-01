import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Notifications from "../utils/notifications";
import * as ExpoNotifications from "expo-notifications";

import AppScreen from "../components/AppScreen";
import AppButton from "../components/AppButton";
import defaultStyles, { colors } from "../utils/defaultStyles";

const content = {
  title: "Mobile-Flashcards",
  body: "Don't forget to study!!!",
};

export default function NotificationsScreen() {
  const getStoredNotifications = async () => {
    const result = await Notifications.getNotifications();
    console.log(result);
  };

  return (
    <AppScreen>
      <View style={styles.section}>
        <Text style={defaultStyles.screenTitle}>Scheduling</Text>

        <View style={styles.buttonRow}>
          <AppButton
            title="Set Notification"
            onPress={() => Notifications.setLocalNotification()}
          />
          <AppButton
            title="Get Notifications"
            onPress={getStoredNotifications}
          />
          <AppButton
            title="Clear Notifications"
            onPress={() => Notifications.clearNotifications()}
          />
        </View>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  title: defaultStyles.screenTitle,
  section: {
    borderColor: colors.primary,
    borderTopWidth: 2,
    marginBottom: 10,
  },
  buttonRow: defaultStyles.buttonRow,
});
