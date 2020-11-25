import React from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";
import AppScreen from "../components/AppScreen";
import defaultStyles, { colors } from "../utils/defaultStyles";
import { connect } from "react-redux";
import AppButton from "../components/AppButton";
import { decksCleared, sampleDecksLoaded } from "../store/decks";

const DebugScreen = (props) => {
  const { decks, dispatch } = props;
  return (
    <AppScreen>
      <Text style={[styles.title, { marginBottom: 10 }]}>Debug Screen</Text>
      <View style={styles.section}>
        <Text style={styles.title}>Redux</Text>
        <Text>Decks in store: {decks.length}</Text>
        <View style={styles.buttonRow}>
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
        <AppButton
          title="Log Decks in Store"
          onPress={() => console.log(decks)}
        />
      </View>
      <AppButton
        title="Log Props"
        onPress={() => console.log(props)}
        color="darkslateblue"
      />
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
    borderBottomWidth: 2,
  },
  buttonRow: defaultStyles.buttonRow,
});
