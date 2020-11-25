import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import DeckListScreen from "./../screens/DeckListScreen";
import DeckDetailsScreen from "./../screens/DeckDetailsScreen";
import QuizNavigator from "./QuizNavigator";
import AddQuestionScreen from "./../screens/AddQuestionScreen";

const Stack = createStackNavigator();

const DeckNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Deck List" component={DeckListScreen} />
      <Stack.Screen
        name="Deck Details"
        component={DeckDetailsScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen name="Add Question" component={AddQuestionScreen} />
      <Stack.Screen
        name="Quiz"
        component={QuizNavigator}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};

export default DeckNavigator;
