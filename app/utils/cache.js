import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "mobile-flashcards:decks";

const store = async (value) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
};

const get = async () => {
  try {
    const value = await AsyncStorage.getItem(STORAGE_KEY);
    const item = JSON.parse(value);
    if (!item) return null;
    return item;
  } catch (error) {
    console.log(error);
  }
};

const clear = async () => {
  try {
    return await AsyncStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.log(error);
  }
};

export default {
  store,
  get,
  clear,
};
