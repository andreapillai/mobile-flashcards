import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppScreen from "../components/AppScreen";
import defaultStyles from "../utils/defaultStyles";
import { connect } from "react-redux";
import AppButton from "../components/AppButton";
import { colors } from "./../utils/defaultStyles";

const QuizScreen = (props) => {
  const { deck, navigation } = props;
  const { questions } = deck;
  const { questionIndex } = props.route.params;
  const questionNumber = questionIndex + 1;
  const isLastQuestion = questionNumber === questions.length;
  const currentQuestion = questions[questionIndex];

  if (isLastQuestion) {
    console.log("last");
  }

  const goToNextQuestion = () => {
    if (isLastQuestion) return endQuiz();
    navigation.navigate("Quiz Screen", {
      id: deck.id,
      questionIndex: questionIndex + 1,
    });
  };

  const endQuiz = () => {
    navigation.navigate("Quiz Result");
  };

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
          onPress={goToNextQuestion}
          color={colors.danger}
        />
        <AppButton
          title="Correct"
          onPress={goToNextQuestion}
          color={colors.green}
        />
      </View>
      <AppButton title="Next" onPress={goToNextQuestion} color="gold" />
      <AppButton title="Exit Quiz" onPress={() => navigation.pop()} />
    </AppScreen>
  );
};

const mapStateToProps = (decks, ownProps) => {
  const { id } = ownProps.route.params;
  return { deck: decks.filter((d) => d.id === id)[0] };
};

export default connect(mapStateToProps)(QuizScreen);

const styles = StyleSheet.create({});
