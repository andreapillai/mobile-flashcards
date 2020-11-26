import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppScreen from "../components/AppScreen";
import defaultStyles, { colors } from "../utils/defaultStyles";
import { connect } from "react-redux";
import AppButton from "../components/AppButton";
import { getDeckById, getDeckByTitle } from "../store/decks";
import AppInput from "../components/AppInput";

const DebugScreen = (props) => {
  const [idToFetch, setIdToFetch] = useState("");
  const [titleToFetch, setTitleToFetch] = useState("");
  const [fetchedDeck, setFetchedDeck] = useState("");
  const { decks } = props;

  const fetchById = (id) => {
    const result = getDeckById(id)(decks);
    console.log(result[0]);
    if (result.length !== 0) setFetchedDeck(result[0]);
  };

  const fetchByName = (title) => {
    const result = getDeckByTitle(title)(decks);
    console.log(result[0]);
    if (result.length !== 0) return setFetchedDeck(result[0]);
    setFetchedDeck({ title: "none" });
  };

  return (
    <AppScreen style={{ position: "relative" }}>
      <View style={styles.section}>
        <Text style={defaultStyles.screenTitle}>Selectors</Text>
        <Text>Get Deck By ID</Text>
        <AppInput
          placeholder="Deck ID"
          onChangeText={setIdToFetch}
          value={idToFetch}
        />
        <AppButton title="Fetch by ID" onPress={() => fetchById(idToFetch)} />
        <Text>Get Deck By Name</Text>
        <AppInput
          placeholder="Deck Name"
          onChangeText={setTitleToFetch}
          value={titleToFetch}
        />
        <AppButton
          title="Fetch by Name"
          onPress={() => fetchByName(titleToFetch)}
        />
        <Text>Fetched Deck: {fetchedDeck.title || "none"}</Text>
        <Text>Fetched ID: {fetchedDeck.id || "none"}</Text>
      </View>
    </AppScreen>
  );
};

const mapStateToProps = (store) => ({
  decks: store.decks,
  score: store.score,
});

export default connect(mapStateToProps)(DebugScreen);

const styles = StyleSheet.create({
  section: {
    borderColor: colors.primary,
    borderTopWidth: 2,
    marginBottom: 10,
  },
  buttonRow: defaultStyles.buttonRow,
});
