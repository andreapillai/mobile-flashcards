import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { colors } from "../utils/defaultStyles";

const AppButton = ({
  title,
  onPress,
  color = colors.primary,
  disabled = false,
}) => {
  const btnColor = disabled ? "lightsteelblue" : color;
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: btnColor }]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    minWidth: 100,
    maxWidth: "80%",
    marginVertical: 10,
    alignSelf: "center",
  },
  text: {
    color: colors.light,
    fontSize: 14,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
