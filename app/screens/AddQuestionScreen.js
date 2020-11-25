import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import AppScreen from "../components/AppScreen";
import defaultStyles from "../utils/defaultStyles";
import AppInput from "./../components/AppInput";
import AppButton from "./../components/AppButton";

const AddQuestionScreen = (props) => {
  const { navigation } = props;
  const [questionText, setQuestionText] = useState("");
  const [answerText, setAnswerText] = useState("");
  return (
    <AppScreen>
      <Text style={defaultStyles.screenTitle}>Add Question</Text>
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
      <AppButton title="Submit" onPress={() => console.log("Submit")} />
      <AppButton title="Go Back to Deck" onPress={() => navigation.pop()} />
    </AppScreen>
  );
};

export default AddQuestionScreen;

const styles = StyleSheet.create({});
