import React, { useState } from "react";
import { FlatList, Modal, StyleSheet, Text, View } from "react-native";
import AppScreen from "../components/AppScreen";
import defaultStyles from "../utils/defaultStyles";
import AppButton from "./../components/AppButton";
import { deckDeleted } from "../store/decks";
import { connect } from "react-redux";
import { colors } from "./../utils/defaultStyles";

const DeckDetailsScreen = (props) => {
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const { navigation, dispatch, deck } = props;
  const hasQuestions = deck && deck.questions.length !== 0;

  const handleDeleteDeck = () => {
    dispatch(deckDeleted({ id: deck.id }));
    navigation.pop();
  };

  if (!deck)
    return (
      <View>
        <Text style={defaultStyles.screenTitle}>No Deck Found! 😖</Text>
        <Text></Text>
        <AppButton
          title="Deck List"
          onPress={() => navigation.navigate("Deck List")}
        />
      </View>
    );

  return (
    <AppScreen>
      <Text style={defaultStyles.screenTitle}>{deck.title}</Text>
      {!hasQuestions && (
        <View>
          <Text>There are no questions in this deck.</Text>
        </View>
      )}
      {hasQuestions && (
        <AppButton
          title="Start Quiz"
          onPress={() =>
            navigation.navigate("Quiz", {
              screen: "Quiz Start",
              params: {
                deck,
              },
            })
          }
          color={colors.green}
        />
      )}
      <Text>This deck contains {deck.questions.length} questions</Text>
      {/* <FlatList
        data={Object.keys(deck.questions)}
        keyExtractor={(item) => item}
        renderItem={({ index }) => (
          <Text>{deck.questions[index].questionText}</Text>
        )}
      /> */}
      <AppButton
        title="Add Question"
        onPress={() => navigation.navigate("Add Question", { id: deck.id })}
      />
      <AppButton
        title="Delete Deck"
        onPress={() => setDeleteModalVisible(true)}
        color={colors.danger}
      />
      <Modal visible={deleteModalVisible}>
        <View style={{ justifyContent: "center", flex: 1 }}>
          <Text style={defaultStyles.screenTitle}>Delete Deck</Text>
          <Text
            style={{
              alignSelf: "center",
              fontWeight: "bold",
              fontSize: 20,
              color: colors.danger,
            }}
          >
            ⚠ This action cannot be undone ⚠
          </Text>
          <View style={defaultStyles.buttonRow}>
            <AppButton
              title="cancel"
              onPress={() => setDeleteModalVisible(false)}
            />
            <AppButton
              title="Delete"
              onPress={handleDeleteDeck}
              color={colors.danger}
            />
          </View>
        </View>
      </Modal>
    </AppScreen>
  );
};

const mapStateToProps = (store, ownProps) => {
  const { id, title } = ownProps.route.params;
  if (id) {
    return { deck: store.decks.filter((d) => d.id === id)[0] };
  }
  if (title) {
    return { deck: store.decks.filter((d) => d.title === title)[0] };
  }
  return { deck: null };
};

export default connect(mapStateToProps)(DeckDetailsScreen);

const styles = StyleSheet.create({
  title: defaultStyles.sscreenTitle,
});
