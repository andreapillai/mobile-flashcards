import * as React from "react";
import "react-native-get-random-values";
import { Provider } from "react-redux";
import configureStore from "./app/store/configureStore";
import { NavigationContainer } from "@react-navigation/native";

import * as Notifications from "./app/utils/notifications";

import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {
  React.useEffect(() => {
    Notifications.setHandler();
    Notifications.setLocalNotification();
  }, []);

  return (
    <Provider store={configureStore()}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
}
