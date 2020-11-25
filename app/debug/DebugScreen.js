import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppScreen from "../components/AppScreen";
import defaultStyles, { colors } from "../utils/defaultStyles";
import { connect } from "react-redux";
import AppButton from "../components/AppButton";
import { decksCleared, sampleDecksLoaded } from "../store/decks";
import cache from "../utils/cache";

const DebugScreen = (props) => {
  const [cachedData, setCachedData] = useState();
  const { decks, dispatch } = props;

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
  return (
    <AppScreen style={{ position: "relative" }}>
      <Text style={[styles.title, { marginBottom: 10 }]}>Debug Screen</Text>
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
          />
          <AppButton
            title="Clear Store"
            onPress={() => dispatch(decksCleared())}
            color={colors.danger}
          />
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Cache</Text>
        <Text>{cachedData ? cachedData.length : "No"} cached decks</Text>
        <View style={styles.buttonRow}>
          <AppButton title="Read" onPress={readCache} color={colors.green} />
          <AppButton title="Set" onPress={setCache} />
          <AppButton title="Clear" onPress={clearCache} color={colors.danger} />
        </View>
      </View>
      <View
        style={[
          styles.section,
          { position: "absolute", bottom: 10, width: "100%" },
        ]}
      >
        <AppButton
          title="Log Props"
          onPress={() => console.log(props)}
          color="darkslateblue"
        />
      </View>
    </AppScreen>
  );
};

const mapStateToProps = (decks) => ({
  decks,
});

export default connect(mapStateToProps)(DebugScreen);

const styles = StyleSheet.create({
  title: defaultStyles.screenTitle,
  section: {
    borderColor: colors.primary,
    borderTopWidth: 2,
    marginBottom: 10,
  },
  buttonRow: defaultStyles.buttonRow,
});
