import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import NotificationsScreen from "./../debug/NotificationsScreen";
import CacheScreen from "../debug/CacheScreen";
import FetchScreen from "../debug/FetchScreen";
import ScoreScreen from "../debug/ScoreScreen";

const Tab = createBottomTabNavigator();

const DebugNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Cache" component={CacheScreen} />
      <Tab.Screen name="Fetch" component={FetchScreen} />
      <Tab.Screen name="Score" component={ScoreScreen} />
    </Tab.Navigator>
  );
};

export default DebugNavigator;
