import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";

import { connect } from "react-redux";

import AppScreen from "./../components/AppScreen";
import AppButton from "./../components/AppButton";

import defaultStyles from "../utils/defaultStyles";
import { sampleDecksLoaded } from "../store/decks";
import DeckListItem from "../components/DeckListItem";

const DeckListScreen = (props) => {
  const { navigation, dispatch, decks } = props;

  // todo read from cache

  if (decks.length === 0)
    return (
      <AppScreen>
        <Text style={styles.title}>No Decks 😢</Text>
        <AppButton
          title="Load Sample Decks"
          onPress={() => dispatch(sampleDecksLoaded())}
        />
      </AppScreen>
    );
  return (
    <AppScreen>
      <Text style={styles.title}>Deck List</Text>
      <FlatList
        data={decks}
        renderItem={({ item }) => (
          <DeckListItem
            deck={item}
            onPress={() => navigation.navigate("Deck Details", { id: item.id })}
          />
        )}
      />
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
