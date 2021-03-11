import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, TextInput, Button, FlatList, Alert } from 'react-native';
import { connect } from 'react-redux';
import { addTask } from '../Redux/Action/action'
import { useNavigation } from '@react-navigation/native';

function AddTask({ addTask }) {
  const [ task , setTask ] = useState('')
  const navigation = useNavigation()

  const handleSubmit = () => {
    if(task === "") {
      Alert.alert('Required !','Add Task Field is Required') 
    } else {
      addTask(task)
      navigation.navigate('Home')
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(text) => setTask(text)}
        placeholder="Task Title"
        style={styles.textInput}
      />
      <View style={styles.buttonSubmit}>
        <Button
          title="Submit" 
          onPress={() => handleSubmit(task)}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 40
  },
  textInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },
  buttonSubmit: {
    marginTop: 10
  }
})

const mapStateToProps = (state, ownProps) => {
  return{ 
    task_list: state.task_list
  }
}


const mapDispatchToProps = dispatch => {
  return {
    addTask: e => dispatch(addTask(e))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTask)