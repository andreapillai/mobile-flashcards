import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import DeckListScreen from "./../screens/DeckListScreen";
import DeckDetailsScreen from "./../screens/DeckDetailsScreen";

const Stack = createStackNavigator();

const DeckNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Deck List" component={DeckListScreen} />
      <Stack.Screen name="Deck Details" component={DeckDetailsScreen} />
    </Stack.Navigator>
  );
};

export default DeckNavigator;
