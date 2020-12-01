import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppScreen from "../components/AppScreen";
import defaultStyles from "../utils/defaultStyles";
import AppButton from "./../components/AppButton";
import { connect } from "react-redux";
import { scoreReset } from "../store/score";

const QuizResultScreen = (props) => {
  const { navigation, score, dispatch } = props;
  const { totalQuestions, deck } = props.route.params;

  const goBackToList = () => {
    dispatch(scoreReset());
    navigation.navigate("Deck List");
  };

  const startQuizAgain = () => {
    navigation.navigate("Quiz", {
      screen: "Quiz Start",
      params: {
        deck,
      },
    });
  };

  return (
    <AppScreen>
      <Text style={defaultStyles.screenTitle}>Quiz Result</Text>
      <Text>
        SCORE: {score} / {totalQuestions}
      </Text>
      <AppButton title="Start Quiz Again" onPress={startQuizAgain} />
      <AppButton title="Return to Deck List" onPress={goBackToList} />
    </AppScreen>
  );
};

const mapStateToProps = (store) => ({
  score: store.score,
});

export default connect(mapStateToProps)(QuizResultScreen);

const styles = StyleSheet.create({});
