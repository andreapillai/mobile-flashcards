import * as React from "react";
import { Provider } from "react-redux";
import configureStore from "./app/store/configureStore";
import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {
  return (
    <Provider store={configureStore()}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
}
