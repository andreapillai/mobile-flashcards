import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppScreen from "../components/AppScreen";
import defaultStyles from "../utils/defaultStyles";
import AppButton from "./../components/AppButton";

const QuizResultScreen = (props) => {
  const { navigation } = props;
  return (
    <AppScreen>
      <Text style={defaultStyles.screenTitle}>Quiz Result</Text>
      <AppButton
        title="Return to Deck List"
        onPress={() => navigation.navigate("Deck List")}
      />
    </AppScreen>
  );
};

export default QuizResultScreen;

const styles = StyleSheet.create({});
