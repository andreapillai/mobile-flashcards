import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput } from "react-native";
import AppButton from "../components/AppButton";
import AppScreen from "../components/AppScreen";
import { connect } from "react-redux";
import { deckAdded } from "../store/decks";
import defaultStyles from "../utils/defaultStyles";
import AppInput from "../components/AppInput";

const AddNewDeckScreen = (props) => {
  const [newDeckName, setNewDeckName] = useState("");
  const { dispatch, decks } = props;

  const handleSubmit = () => {
    dispatch(deckAdded({ title: newDeckName })); // TODO check that deck doesn't already exist. if it does, redirect to it
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
      <FlatList
        data={decks}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </AppScreen>
  );
};

const mapStateToProps = (store) => ({
  decks: store.decks,
});

export default connect(mapStateToProps)(AddNewDeckScreen);

const styles = StyleSheet.create({
  title: defaultStyles.screenTitle,
});
