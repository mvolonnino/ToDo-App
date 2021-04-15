import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";

export default function App() {
  const [todos, setTodos] = useState([
    {
      text: "buy coffee",
      id: "1",
    },
    {
      text: "create an app",
      id: "2",
    },
    {
      text: "play on the switch",
      id: "3",
    },
  ]);

  const removeTodo = (id) => {
    const removeTodo = todos.find((todo) => todo.id === id);
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id != id);
    });
    Alert.alert("Congrats!", `'${removeTodo.text}' has been removed.`);
  };

  const addTodo = (text) => {
    if (!text) {
      return Alert.alert("Error", "Todo can not be blank");
    } else if (text.length <= 3) {
      return Alert.alert("Error", "Todo must be more than 3 characters");
    } else if (text.length > 25) {
      return Alert.alert("Error", "Todo must be less than 25 characters");
    }
    const todo = {
      text,
      id: Math.random().toString(),
    };
    setTodos((prevTodos) => {
      return [todo, ...prevTodos];
    });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header title="My Todos" />
        <View style={styles.content}>
          <AddTodo addTodo={addTodo} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} removeTodo={removeTodo} />
              )}
            />
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>
            tap once to mark it complete or hold to remove it
          </Text>
          <Text style={styles.infoRemaining}>
            todos remaining: {todos.length}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 20,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
  infoContainer: {
    borderTopColor: "darkslateblue",
    borderTopWidth: 1,
    backgroundColor: "#eee",
    padding: 16,
  },
  infoText: {
    textAlign: "center",
  },
  infoRemaining: {
    textAlign: "center",
  },
});
