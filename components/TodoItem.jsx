import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, Alert } from "react-native";

const TodoItem = ({ item, removeTodo }) => {
  const { text, id } = item;
  const [strikeThrough, setStrikeThrough] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => setStrikeThrough(!strikeThrough)}
      onLongPress={() => removeTodo(id)}
    >
      <Text style={[styles.item, strikeThrough ? styles.strikeThrough : null]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    marginBottom: 16,
    borderColor: "darkslateblue",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    color: "black",
  },
  strikeThrough: {
    textDecorationLine: "line-through",
    borderColor: "gray",
    color: "gray",
  },
});

export default TodoItem;
