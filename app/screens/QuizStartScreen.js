import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";
import AppScreen from "../components/AppScreen";
import defaultStyles from "../utils/defaultStyles";
import { colors } from "./../utils/defaultStyles";

const QuizStartScreen = (props) => {
  const { navigation } = props;
  const { deck } = props.route.params;
  return (
    <AppScreen>
      <Text style={defaultStyles.screenTitle}>Quiz Start - {deck.title}</Text>
      <Text>
        This deck contains {deck.questions.length} cards. If you exit the quiz
        at any point, you will have to start again.
      </Text>
      <AppButton
        title="Start"
        onPress={() => console.log("Start Quiz")}
        color={colors.green}
      />
      <AppButton title="Return to Deck" onPress={() => navigation.pop()} />
    </AppScreen>
  );
};

export default QuizStartScreen;

const styles = StyleSheet.create({});
