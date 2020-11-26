import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppScreen from "../components/AppScreen";
import defaultStyles, { colors } from "../utils/defaultStyles";
import { connect } from "react-redux";
import AppButton from "../components/AppButton";
import {
  decksCleared,
  sampleDecksLoaded,
  getDeckById,
  getDeckByTitle,
} from "../store/decks";
import cache from "../utils/cache";
import { scoreIncreased, scoreReset } from "../store/score";
import AppInput from "./../components/AppInput";

const DebugScreen = (props) => {
  const [cachedData, setCachedData] = useState();
  const [idToFetch, setIdToFetch] = useState("");
  const [titleToFetch, setTitleToFetch] = useState("");
  const [fetchedDeck, setFetchedDeck] = useState("");
  const { decks, dispatch, score } = props;

  const readCache = async () => {
    const result = await cache.get();
    setCachedData(result);
  };
  const setCache = () => {
    cache.store(decks);
    readCache();
  };
  const clearCache = () => {
    cache.clear();
    readCache();
  };

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
      <Text style={[styles.title, { marginBottom: 20 }]}>Debug Screen</Text>
      <View style={styles.section}>
        <Text style={styles.title}>Redux</Text>
        <Text>Decks in store: {decks.length}</Text>
        <View style={styles.buttonRow}>
          <AppButton
            title="Log Store"
            onPress={() => console.log(decks)}
            color={colors.green}
          />
          <AppButton
            title="Load Sample"
            onPress={() => dispatch(sampleDecksLoaded())}
            disabled={decks.length > 0}
          />
          <AppButton
            title="Clear Store"
            onPress={() => dispatch(decksCleared())}
            color={colors.danger}
          />
        </View>
      </View>
      {/* <View style={styles.section}>
        <Text style={styles.title}>Score</Text>
        <Text>Current Score: {score}</Text>
        <View style={styles.buttonRow}>
          <AppButton
            title="Increase"
            onPress={() => dispatch(scoreIncreased())}
          />
          <AppButton title="Reset" onPress={() => dispatch(scoreReset())} />
        </View>
      </View> */}
      <View style={styles.section}>
        <Text style={styles.title}>Selectors</Text>
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
      {/* <View style={styles.section}>
        <Text style={styles.title}>Cache</Text>
        <Text>{cachedData ? cachedData.length : "No"} cached decks</Text>
        <View style={styles.buttonRow}>
          <AppButton title="Read" onPress={readCache} color={colors.green} />
          <AppButton title="Set" onPress={setCache} />
          <AppButton title="Clear" onPress={clearCache} color={colors.danger} />
        </View>
      </View> */}
      {/* <View style={styles.section}>
        <AppButton
          title="Log Props"
          onPress={() => console.log(props)}
          color="darkslateblue"
        />
      </View> */}
    </AppScreen>
  );
};

const mapStateToProps = (store) => ({
  decks: store.decks,
  score: store.score,
});

export default connect(mapStateToProps)(DebugScreen);

const styles = StyleSheet.create({
  title: defaultStyles.sscreenTitle,
  section: {
    borderColor: colors.primary,
    borderTopWidth: 2,
    marginBottom: 10,
  },
  buttonRow: defaultStyles.buttonRow,
});
