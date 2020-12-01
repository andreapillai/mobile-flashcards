import React, { useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import AppScreen from "../components/AppScreen";
import defaultStyles from "../utils/defaultStyles";
import AppButton from "./../components/AppButton";
import { connect } from "react-redux";
import { scoreReset } from "../store/score";
import * as Notifications from "../utils/notifications";

const QuizResultScreen = (props) => {
  const { navigation, score, dispatch } = props;
  const { totalQuestions, deck } = props.route.params;

  useEffect(() => {
    resetNotification();
  }, []);

  const resetNotification = async () => {
    try {
      const clear = await Notifications.clearNotifications();
    } catch (error) {
      console.log(error);
    }
    Notifications.setLocalNotification();
  };

  const goBackToList = () => {
    dispatch(scoreReset());
    navigation.navigate("Deck List");
  };

  const goBackToDeckDetails = () => {
    dispatch(scoreReset());
    navigation.navigate("Deck Details", { id: deck.id });
  };

  const startQuizAgain = () => {
    dispatch(scoreReset());
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
      <AppButton
        title="Go Back to Deck Details"
        onPress={goBackToDeckDetails}
      />
      <AppButton title="Return to Deck List" onPress={goBackToList} />
    </AppScreen>
  );
};

const mapStateToProps = (store) => ({
  score: store.score,
});

export default connect(mapStateToProps)(QuizResultScreen);

const styles = StyleSheet.create({});
