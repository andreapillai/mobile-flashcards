import React from "react";
import { Button, StyleSheet, Text } from "react-native";

import { connect } from "react-redux";
import { deckAdded } from "../store/decks";

import AppScreen from "./../components/AppScreen";
import AppButton from "./../components/AppButton";

import defaultStyles from "../utils/defaultStyles";

const DeckListScreen = (props) => {
  const { dispatch, decks } = props;

  if (decks.length === 0)
    return (
      <AppScreen>
        <Text style={styles.title}>No Decks 😢</Text>
        <AppButton
          title="Load Sample Decks"
          onPress={() => console.log("load sample decks")}
        />
      </AppScreen>
    );
  return (
    <AppScreen>
      <Text style={styles.title}>Deck List</Text>
      <Text>{decks.length} decks</Text>
    </AppScreen>
  );
};
const mapStateToProps = (decks) => ({
  decks,
});

export default connect(mapStateToProps)(DeckListScreen);

const styles = StyleSheet.create({
  title: defaultStyles.screenTitle,
});
