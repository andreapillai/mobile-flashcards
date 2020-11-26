import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppScreen from "../components/AppScreen";
import defaultStyles from "../utils/defaultStyles";
import { connect } from "react-redux";
import AppButton from "../components/AppButton";
import { colors } from "./../utils/defaultStyles";

const QuizScreen = (props) => {
  const { deck } = props;
  const { questions } = deck;
  const { questionIndex } = props.route.params;
  const questionNumber = questionIndex + 1;
  const currentQuestion = questions[questionIndex];
  return (
    <AppScreen>
      <Text style={defaultStyles.screenTitle}>{deck.title}</Text>
      <Text>
        Question {questionNumber} of {questions.length}
      </Text>
      <Text>{currentQuestion.questionText}</Text>
      <Text>{currentQuestion.answerText}</Text>
      <View style={defaultStyles.buttonRow}>
        <AppButton
          title="Incorrect"
          onPress={() => console.log("Incorrect")}
          color={colors.danger}
        />
        <AppButton
          title="Correct"
          onPress={() => console.log("Correct")}
          color={colors.green}
        />
      </View>
      <AppButton title="Exit Quiz" onPress={() => console.log("Exit Quiz")} />
    </AppScreen>
  );
};

const mapStateToProps = (decks, ownProps) => {
  const { id } = ownProps.route.params;
  return { deck: decks.filter((d) => d.id === id)[0] };
};

export default connect(mapStateToProps)(QuizScreen);

const styles = StyleSheet.create({});
