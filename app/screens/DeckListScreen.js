import React from "react";
import { Button, StyleSheet, Text } from "react-native";
import AppScreen from "./../components/AppScreen";

import { connect } from "react-redux";
import { deckAdded } from "../store/decks";

const DeckListScreen = (props) => {
  const { dispatch } = props;
  return (
    <AppScreen>
      <Text>Deck List</Text>
      <Button title="dispatch" onPress={() => dispatch(deckAdded("test"))} />
      <Button
        title="log props"
        onPress={() => {
          console.clear();
          console.log(props);
        }}
      />
    </AppScreen>
  );
};

export default connect()(DeckListScreen);

const styles = StyleSheet.create({});
