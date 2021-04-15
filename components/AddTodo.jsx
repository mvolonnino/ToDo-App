import React, { useState } from "react";
import { StyleSheet, TextInput, Button, View } from "react-native";

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState("");

  const changeHandler = (value) => {
    setText(value);
  };

  return (
    <View>
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        placeholder="add todo..."
        onChangeText={changeHandler}
        value={text}
      />
      <Button
        onPress={() => {
          addTodo(text);
          setText("");
        }}
        title="Add"
        color="coral"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "darkslateblue",
  },
});

export default AddTodo;
