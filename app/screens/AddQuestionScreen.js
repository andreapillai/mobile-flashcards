import React, { useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import AppScreen from "../components/AppScreen";
import defaultStyles from "../utils/defaultStyles";
import AppInput from "./../components/AppInput";
import AppButton from "./../components/AppButton";
import { connect } from "react-redux";
import { questionAdded } from "../store/decks";

const AddQuestionScreen = (props) => {
  const { navigation, dispatch, deck } = props;
  const { id } = props.route.params;
  const [questionText, setQuestionText] = useState("");
  const [answerText, setAnswerText] = useState("");

  const handleSubmit = () => {
    dispatch(
      questionAdded({
        id: deck.id,
        question: {
          questionText,
          answerText,
        },
      })
    );
    setQuestionText("");
    setAnswerText("");
  };

  if (!deck) return null;
  return (
    <AppScreen>
      <Text style={defaultStyles.screenTitle}>Add Question - {deck.title}</Text>
      <AppInput
        placeholder="Question Text"
        value={questionText}
        onChangeText={setQuestionText}
      />
      <AppInput
        placeholder="Answer Text"
        value={answerText}
        onChangeText={setAnswerText}
      />
      <AppButton
        title="Submit"
        onPress={handleSubmit}
        disabled={questionText.length < 3 || answerText.length < 3}
      />
      <FlatList
        data={Object.keys(deck.questions)}
        keyExtractor={(item) => item}
        renderItem={({ index }) => (
          <Text>{deck.questions[index].questionText}</Text>
        )}
      />
      <AppButton title="Go Back to Deck" onPress={() => navigation.pop()} />
    </AppScreen>
  );
};

const mapStateToProps = (store, ownProps) => {
  const { id } = ownProps.route.params;
  return { deck: store.decks.filter((d) => d.id === id)[0] };
};

export default connect(mapStateToProps)(AddQuestionScreen);

const styles = StyleSheet.create({});
