import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import AppScreen from "../components/AppScreen";
import defaultStyles from "../utils/defaultStyles";
import AppButton from "./../components/AppButton";
import { deckDeleted } from "../store/decks";
import { connect } from "react-redux";
import { colors } from "./../utils/defaultStyles";

const DeckDetailsScreen = (props) => {
  const { navigation, dispatch, deck } = props;
  const { title, questions } = deck;
  const noQuestions = questions.length === 0;

  const handleDeleteDeck = () => {
    dispatch(deckDeleted({ id: deck.id }));
    navigation.pop();
  };

  if (!deck) return null;

  return (
    <AppScreen>
      <Text style={styles.title}>{title}</Text>
      {noQuestions && (
        <View>
          <Text>There are no questions in this deck.</Text>
          <AppButton
            title="Add Question"
            onPress={() => console.log("Add Question")}
          />
        </View>
      )}
      <FlatList
        data={Object.keys(questions)}
        keyExtractor={(item) => item}
        renderItem={({ index }) => <Text>{questions[index].questionText}</Text>}
      />
      <AppButton
        title="Delete Deck"
        onPress={handleDeleteDeck}
        color={colors.danger}
      />
      <AppButton
        title="log props"
        onPress={() => {
          console.clear();
          console.log(props);
        }}
      />
    </AppScreen>
  );
};

const mapStateToProps = (decks, ownProps) => {
  const { deckId, title } = ownProps.route.params;
  if (deckId) {
    return { deck: decks.filter((d) => d.id === deckId)[0] };
  }
  if (title) {
    return { deck: decks.filter((d) => d.title === title)[0] };
  }
};

export default connect(mapStateToProps)(DeckDetailsScreen);

const styles = StyleSheet.create({
  title: defaultStyles.screenTitle,
});
