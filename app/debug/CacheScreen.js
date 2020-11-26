import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppScreen from "../components/AppScreen";
import defaultStyles, { colors } from "../utils/defaultStyles";
import { connect } from "react-redux";
import AppButton from "../components/AppButton";

import cache from "../utils/cache";

const DebugScreen = (props) => {
  const [cachedData, setCachedData] = useState();
  const { decks } = props;

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
      <View style={styles.section}>
        <Text style={defaultStyles.screenTitle}>Cache</Text>
        <Text>{cachedData ? cachedData.length : "No"} cached decks</Text>
        <View style={styles.buttonRow}>
          <AppButton title="Read" onPress={readCache} color={colors.green} />
          <AppButton title="Set" onPress={setCache} />
          <AppButton title="Clear" onPress={clearCache} color={colors.danger} />
        </View>
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
