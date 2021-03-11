import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Text, View, StyleSheet, Button, Alert, TextInput, Modal, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function TaskItem({ item , deleteHandler }) {
  const [ text , setText ] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const navigation = useNavigation()

  const AlertMessage = () => {
     Alert.alert('', 'Are you sure you want to delete this task ?', [
        { 
         text: 'Yes', onPress: deleteHandler 
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
     ],{ cancelable: false })
  }

  return (
    <View>
      <Text style={styles.taskItem}><Text style={styles.taskContent}>Task Title:</Text> {item.item.task}</Text>
      <Text style={styles.taskItem}><Text style={styles.taskContent}>Status:</Text> {item.item.completed}</Text>
      <View style={styles.fixToText}>
      <View style={styles.deleteButton}>
        <Button 
          title="Delete" 
          color="#d11a2a"
          onPress={AlertMessage} 
        />
      </View>
      <View>
        <Button 
          title="Update task" 
          onPress={() => {
            navigation.navigate('UpdateTask', {
              oldTask: item
            })
          }}
          style={styles.updateButton} 
          color="#4CAF50"
        />
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  taskItem: {
    padding: 8,
    marginTop: 8,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
  taskContent: {
    fontWeight: 'bold'
  },
  fixToText: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})


export default TaskItem