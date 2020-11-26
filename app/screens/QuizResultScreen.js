import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppScreen from "../components/AppScreen";
import defaultStyles from "../utils/defaultStyles";
import AppButton from "./../components/AppButton";
import { connect } from "react-redux";
import { scoreReset } from "../store/score";

const QuizResultScreen = (props) => {
  const { navigation, score, dispatch } = props;

  const goBackToList = () => {
    dispatch(scoreReset());
    navigation.navigate("Deck List");
  };

  return (
    <AppScreen>
      <Text style={defaultStyles.sscreenTitle}>Quiz Result</Text>
      <Text>SCORE: {score} </Text>
      <AppButton title="Return to Deck List" onPress={goBackToList} />
    </AppScreen>
  );
};

const mapStateToProps = (store) => ({
  score: store.score,
});

export default connect(mapStateToProps)(QuizResultScreen);

const styles = StyleSheet.create({});
