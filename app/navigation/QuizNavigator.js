import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import QuizStartScreen from "../screens/QuizStartScreen";

const Stack = createStackNavigator();

const QuizNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Quiz Start" component={QuizStartScreen} />
    </Stack.Navigator>
  );
};

export default QuizNavigator;

const styles = StyleSheet.create({});
