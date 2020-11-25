import React from "react";
import { Button, StyleSheet, Text } from "react-native";

import { connect } from "react-redux";
import { deckAdded } from "../store/decks";

import AppScreen from "./../components/AppScreen";
import AppButton from "./../components/AppButton";

const DeckListScreen = (props) => {
  const { dispatch, decks } = props;
  return (
    <AppScreen>
      <Text>Deck List</Text>
      <Text>{decks.length} decks</Text>
      <AppButton
        title="dispatch test deck"
        onPress={() => dispatch(deckAdded({ title: "test" }))}
      />
      <AppButton title="log decks" onPress={() => console.log(decks)} />
    </AppScreen>
  );
};
const mapStateToProps = (decks) => ({
  decks,
});

export default connect(mapStateToProps)(DeckListScreen);

const styles = StyleSheet.create({});
