import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "./../utils/defaultStyles";

const AppInput = ({ ...otherProps }) => {
  return (
    <View style={styles.container}>
      <TextInput {...otherProps} />
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    borderColor: colors.primary,
    borderWidth: 0.3,
    flexDirection: "row",
    padding: 10,
    marginVertical: 5,
  },
});
