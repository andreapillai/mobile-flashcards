import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DeckListScreen from "../screens/DeckListScreen";
import AddNewDeckScreen from "../screens/AddNewDeckScreen";
import DebugScreen from "../debug/DebugScreen";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Deck List" component={DeckListScreen} />
      <Tab.Screen name="Add New Deck" component={AddNewDeckScreen} />
      <Tab.Screen name="Debug" component={DebugScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
