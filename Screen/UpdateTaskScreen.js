import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, TextInput, Button, Alert, Picker  } from 'react-native';
import { connect } from 'react-redux';
import { updateTask } from '../Redux/Action/action'
import { useNavigation } from '@react-navigation/native';

function UpdateTask({ updateTask , route }) {
  const [ task , setTask ] = useState('')
  const [ selectedValue , setSelectedValue ] = useState('')
  const navigation = useNavigation()
  const { oldTask } = route.params;

  const handleSubmit = (oldTask, task, status) => {
    if(task === "" || selectedValue === '') {
      //  console.log(selectedValue)
      Alert.alert('Required !','Task Field and Status is Required') 
    } else {
      updateTask(oldTask, task, status)
      navigation.navigate('Home')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.fixToText}>
        <Text><Text style={styles.textContent}>Task Title:</Text> {oldTask.item.task}</Text>
        <Text><Text style={styles.textContent}>Status:</Text> {oldTask.item.completed}</Text>
      </View>
      <TextInput
        onChangeText={(text) => setTask(text)}
        placeholder="Enter New Task Title"
        style={styles.textInput}
      />
      <View>
        <Picker
          selectedValue={selectedValue}
          style={styles.picker} 
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Select Status"  disabled={true} />
          <Picker.Item label="Done" value="Done" />
          <Picker.Item label="Not Done" value="Not Done" />
        </Picker>
      </View>
      <View style={styles.buttonSubmit}>
        <Button
          title="Submit" 
          onPress={() => handleSubmit(oldTask , task, selectedValue)}
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
  fixToText: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  textContent: {
    fontWeight: 'bold'
  },
  picker: {
    height: 20, 
    marginTop: 10,
    marginBottom: 10
  },
  buttonSubmit: {
    marginTop: 10
  }
})

const mapDispatchToProps = dispatch => {
  return {
    updateTask: (e,val,status) => dispatch(updateTask(e,val,status))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(UpdateTask)