import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const DeckListItem = (props) => {
  const { deck, onPress } = props;
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <MaterialCommunityIcons name="cards-outline" size={45} />
        <View style={styles.cardText}>
          <Text style={styles.deckTitle}>{deck.title}</Text>
          <Text style={styles.questions}>
            {deck.questions.length} questions
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default DeckListItem;

const styles = StyleSheet.create({
  card: {
    padding: 3,
    marginVertical: 5,
    flexDirection: "row",
  },
  cardText: {
    paddingLeft: 20,
    justifyContent: "center",
  },
  deckTitle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  questions: {
    paddingLeft: 10,
    color: "darkgray",
  },
});
