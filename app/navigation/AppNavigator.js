import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddNewDeckScreen from "../screens/AddNewDeckScreen";
import DebugScreen from "../debug/DebugScreen";
import DeckNavigator from "./DeckNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Decks" component={DeckNavigator} />
      <Tab.Screen name="Add New Deck" component={AddNewDeckScreen} />
      <Tab.Screen name="Debug" component={DebugScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
