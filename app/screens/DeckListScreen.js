import React, { useEffect } from "react";
import { FlatList, Text } from "react-native";

import { connect } from "react-redux";

import AppScreen from "./../components/AppScreen";
import AppButton from "./../components/AppButton";

import defaultStyles from "../utils/defaultStyles";
import {
  sampleDecksLoaded,
  cachedDecksLoaded,
  checkCachedDecks,
} from "../store/decks";
import DeckListItem from "../components/DeckListItem";

const DeckListScreen = (props) => {
  const { navigation, dispatch, decks } = props;

  useEffect(() => {
    if (decks.length === 0) checkCache();
  }, []);

  const checkCache = async () => {
    const cachedDecks = await checkCachedDecks();
    if (!cachedDecks) return;
    dispatch(cachedDecksLoaded(cachedDecks));
  };

  if (decks.length === 0)
    return (
      <AppScreen>
        <Text style={defaultStyles.screenTitle}>No Decks 😢</Text>
        <AppButton
          title="Load Sample Decks"
          onPress={() => dispatch(sampleDecksLoaded())}
        />
        <AppButton
          title="Add a New Deck"
          onPress={() => navigation.navigate("Add New Deck")}
        />
      </AppScreen>
    );
  return (
    <AppScreen>
      <Text style={defaultStyles.screenTitle}>Deck List</Text>
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

const mapStateToProps = (store) => ({
  decks: store.decks,
});

export default connect(mapStateToProps)(DeckListScreen);
