import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AddNewDeckScreen from "../screens/AddNewDeckScreen";
import DebugScreen from "../debug/DebugScreen";
import DeckNavigator from "./DeckNavigator";
import { colors } from "./../utils/defaultStyles";
import NotificationsScreen from "./../utils/NotificationsScreen";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{ activeTintColor: colors.primary }}
      // initialRouteName="Debug"
    >
      <Tab.Screen
        name="Decks"
        component={DeckNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="cards-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Add New Deck"
        component={AddNewDeckScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="plus-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Debug"
        component={DebugScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="bug-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
