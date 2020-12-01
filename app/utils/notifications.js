import * as Notifications from "expo-notifications";
import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Permissions from "expo-permissions";

const STORAGE_KEY = "mobile-flashcards:notifications";

export const setHandler = () => {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });
};

const getStoredData = async () => {
  try {
    return await AsyncStorage.getItem(STORAGE_KEY);
  } catch (error) {
    console.log(error);
  }
};

const getPermissions = async () => {
  try {
    const permissions = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    return permissions;
  } catch (error) {
    console.log(error);
  }
};

export const clearNotifications = async () => {
  try {
    await Notifications.cancelAllScheduledNotificationsAsync();
  } catch (error) {
    console.log(error);
  }
  AsyncStorage.removeItem(STORAGE_KEY);
};

export const setLocalNotification = async () => {
  console.log("setting local notification");
  const storedData = await getStoredData();

  if (storedData) return console.log(storedData);

  const permissions = await getPermissions();
  if (permissions.granted) {
    await clearNotifications();
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(20);
    tomorrow.setMinutes(0);

    console.log("OS: ", Platform.OS);

    Notifications.scheduleNotificationAsync({
      content: {
        title: "Mobile Flashcards",
        body: "Don't forget to study!!!",
      },
      trigger: {
        hour: 20,
        minute: 0,
        repeats: true,
      },
    });

    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tomorrow));
  }
};

export const getNotifications = async () => {
  return await Notifications.getAllScheduledNotificationsAsync();
};
