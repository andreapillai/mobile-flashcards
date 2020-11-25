import React, { useState } from "react";
import { StyleSheet, Text, TextInput } from "react-native";
import AppButton from "../components/AppButton";
import AppScreen from "../components/AppScreen";
import { connect } from "react-redux";
import { deckAdded } from "../store/decks";
import defaultStyles from "../utils/defaultStyles";
import AppInput from "../components/AppInput";

const AddNewDeckScreen = (props) => {
  const [newDeckName, setNewDeckName] = useState("");
  const { dispatch } = props;

  const handleSubmit = () => {
    dispatch(deckAdded({ title: newDeckName }));
  };

  return (
    <AppScreen>
      <Text style={styles.title}>Add New Deck</Text>
      <AppInput
        placeholder="New Deck Name"
        value={newDeckName}
        onChangeText={setNewDeckName}
      />
      <AppButton title="Add Deck" onPress={handleSubmit} />
      {/* todo check that deck name doesn't already exist. use formik for
      validation? */}
    </AppScreen>
  );
};

export default connect()(AddNewDeckScreen);

const styles = StyleSheet.create({
  title: defaultStyles.screenTitle,
});
