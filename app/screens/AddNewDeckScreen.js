import React, { useEffect, useState } from "react";
import { FlatList, Modal, Text } from "react-native";
import AppButton from "../components/AppButton";
import AppScreen from "../components/AppScreen";
import { connect } from "react-redux";
import { deckAdded, getDeckByTitle } from "../store/decks";
import defaultStyles from "../utils/defaultStyles";
import AppInput from "../components/AppInput";

const AddNewDeckScreen = (props) => {
  const [newDeckName, setNewDeckName] = useState("");
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const { dispatch, decks, navigation } = props;

  const handleSubmit = () => {
    // TODO check that deck doesn't already exist. if it does, redirect to it
    dispatch(deckAdded({ title: newDeckName }));
    setConfirmModalVisible(true);
  };

  const addAnotherDeck = () => {
    setNewDeckName("");
    setConfirmModalVisible(false);
  };

  useEffect(() => {
    setNewDeckName("");
  }, []);

  return (
    <AppScreen>
      <Text style={defaultStyles.screenTitle}>Add New Deck</Text>
      <AppInput
        placeholder="New Deck Name"
        value={newDeckName}
        onChangeText={setNewDeckName}
      />
      <AppButton
        title="Add Deck"
        onPress={handleSubmit}
        disabled={newDeckName.length < 4}
      />
      <FlatList
        data={decks}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
      <Modal visible={confirmModalVisible}>
        <Text style={defaultStyles.screenTitle}>Deck Added!</Text>
        <AppButton title="Add Another Deck" onPress={addAnotherDeck} />
        <AppButton
          title="View Newly Added Deck"
          onPress={() =>
            navigation.navigate("Decks", {
              screen: "Deck Details",
              params: { title: newDeckName },
            })
          }
        />
      </Modal>
    </AppScreen>
  );
};

const mapStateToProps = (store) => ({
  decks: store.decks,
});

export default connect(mapStateToProps)(AddNewDeckScreen);
