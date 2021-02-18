import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import AddTodo from './components/AddTodo'


export default function App() {

  const [todos, setTodos] = useState([
    {text: 'Pick up car', key: '1'},
    {text: 'Drive to Orlando', key: '2'},
    {text: 'Party at Universal Studios', key: '3'},
  ])

  const pressHandler = (key) => {
    setTodos((previousTodos) => {
      return previousTodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (text) => {
    if(text.length > 3) {
      setTodos((previousTodos) => {
      return [
        {text: text, key: Math.random().toString()},
        ...previousTodos
        ]
      })
    } else {
      Alert.alert('Whoops', 'Todos must be over three characters long', [
        {text: 'Gotcha', onPress: () => console.log('alert closed')}
      ])
    }

    
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
    }}>
      <View style={styles.container} >
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler}/>
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#444444',
  },
  content: {
    padding: 40,
    backgroundColor: '#444444',
    flex: 1
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
  textItem: {
    color: '#fff',
  }
});
