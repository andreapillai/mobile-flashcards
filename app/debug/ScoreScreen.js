import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppScreen from "../components/AppScreen";
import defaultStyles, { colors } from "../utils/defaultStyles";
import { connect } from "react-redux";
import AppButton from "../components/AppButton";
import { scoreIncreased, scoreReset } from "../store/score";

const DebugScreen = (props) => {
  const { dispatch, score } = props;

  return (
    <AppScreen style={{ position: "relative" }}>
      <View style={styles.section}>
        <Text style={defaultStyles.screenTitle}>Score</Text>
        <Text>Current Score: {score}</Text>
        <View style={styles.buttonRow}>
          <AppButton
            title="Increase"
            onPress={() => dispatch(scoreIncreased())}
          />
          <AppButton title="Reset" onPress={() => dispatch(scoreReset())} />
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
