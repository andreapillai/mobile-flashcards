import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import QuizStartScreen from "../screens/QuizStartScreen";
import QuizScreen from "./../screens/QuizScreen";
import QuizResultScreen from "./../screens/QuizResultScreen";

const Stack = createStackNavigator();

const QuizNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Quiz Start" component={QuizStartScreen} />
      <Stack.Screen name="Quiz Screen" component={QuizScreen} />
      <Stack.Screen name="Quiz Result" component={QuizResultScreen} />
    </Stack.Navigator>
  );
};

export default QuizNavigator;

const styles = StyleSheet.create({});
