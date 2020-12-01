import * as Notifications from "expo-notifications";
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
    await AsyncStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.log(error);
  }
};

export const setLocalNotification = async () => {
  console.log("setting local notification");
  const storedData = await getStoredData();

  if (storedData) return console.log(storedData); // avoid creating duplicate notification

  const permissions = await getPermissions();
  if (permissions.granted) {
    await clearNotifications();
    // let tomorrow = new Date();
    // let minutes = Math.floor(Math.random() * 59 + 1);
    // tomorrow.setDate(tomorrow.getDate() + 1);
    // tomorrow.setHours(20);
    // tomorrow.setMinutes(minutes);

    // console.log("TOMORROW: ", tomorrow);

    const trigger = {
      hour: 20,
      minute: Math.floor(Math.random() * 59 + 1),
      repeats: true,
    };

    Notifications.scheduleNotificationAsync({
      content: {
        title: "Mobile Flashcards",
        body: "Don't forget to study!!!",
      },
      trigger,
    });

    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(trigger));
  }
};

export const getNotifications = async () => {
  return await Notifications.getAllScheduledNotificationsAsync();
};
