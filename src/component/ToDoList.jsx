import React from 'react';

import {
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
} from 'react-native';


function ToDoList() {
  return (
      <ScrollView>
        <Pressable>
          <View style={[styles.task, styles.completed]}>
            <Text style={styles.taskText}>Work on Lab 2 To Do List</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={[styles.task]}>
            <Text style={styles.taskText}>Visit Walk-In Clinic</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={[styles.task, styles.completed]}>
            <Text style={styles.taskText}>Take 1 capsule of antibiotic every 8 hours for 7 days</Text>
          </View>
        </Pressable>
      </ScrollView>      
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  }  
});

export default ToDoList;
