import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import AppScreen from "../components/AppScreen";
import defaultStyles from "../utils/defaultStyles";
import { connect } from "react-redux";
import AppButton from "../components/AppButton";
import { colors } from "./../utils/defaultStyles";
import { scoreIncreased } from "../store/score";
import FlipCard from "react-native-flip-card";

const QuizScreen = (props) => {
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const { deck, navigation, score, dispatch } = props;
  const { questions } = deck;
  const { questionIndex } = props.route.params;
  const questionNumber = questionIndex + 1;
  const isLastQuestion = questionNumber === questions.length;
  const currentQuestion = questions[questionIndex];

  const goToNextQuestion = () => {
    flipCard();
    if (isLastQuestion) return endQuiz();
    navigation.navigate("Quiz Screen", {
      id: deck.id,
      questionIndex: questionIndex + 1,
    });
  };

  const increaseScore = () => {
    dispatch(scoreIncreased());
    goToNextQuestion();
  };

  const flipCard = () => {
    setIsCardFlipped(!isCardFlipped);
  };

  const endQuiz = () => {
    navigation.navigate("Quiz Result");
  };

  if (!deck) return null;

  return (
    <AppScreen>
      <Text style={defaultStyles.screenTitle}>{deck.title}</Text>
      <Text>
        Question {questionNumber} of {questions.length}
      </Text>
      <Text>
        Current Score: {score} / {questions.length}
      </Text>
      <View style={styles.cardContainer}>
        <TouchableWithoutFeedback onPress={flipCard}>
          <FlipCard
            style={styles.card}
            friction={50}
            flipVertical={true}
            flip={isCardFlipped}
            clickable={false}
          >
            <View style={styles.cardContents}>
              <Text style={styles.cardTitle}>Question</Text>
              <Text style={styles.cardText}>
                {currentQuestion.questionText}
              </Text>
            </View>
            <View style={styles.cardContents}>
              <Text style={styles.cardTitle}>Answer</Text>
              <Text style={styles.cardText}>{currentQuestion.answerText}</Text>
              <View style={defaultStyles.buttonRow}>
                <AppButton
                  title="Incorrect"
                  onPress={goToNextQuestion}
                  color={colors.danger}
                />
                <AppButton
                  title="Correct"
                  onPress={increaseScore}
                  color={colors.green}
                />
              </View>
            </View>
          </FlipCard>
        </TouchableWithoutFeedback>
      </View>

      <AppButton title="Exit Quiz" onPress={() => navigation.pop()} />
    </AppScreen>
  );
};

const mapStateToProps = (store, ownProps) => {
  const { id } = ownProps.route.params;
  return {
    deck: store.decks.filter((d) => d.id === id)[0],
    score: store.score,
  };
};

export default connect(mapStateToProps)(QuizScreen);

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },
  card: {
    backgroundColor: colors.primary,
    width: "80%",
    height: 200,
    borderRadius: 20,
    justifyContent: "space-evenly",
    overflow: "hidden",
    alignItems: "center",
    padding: 5,
  },
  cardTitle: {
    fontSize: 20,
    color: colors.light,
  },
  cardText: {
    fontSize: 15,
    color: colors.light,
  },
  cardContents: {
    height: "100%",
    minWidth: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
