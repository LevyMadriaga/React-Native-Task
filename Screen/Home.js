import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, TextInput, Button, FlatList, Alert, Picker } from 'react-native';
import { connect } from 'react-redux';
import ListTask from './ListTaskScreen'
import { deleteTask, updateTask } from '../Redux/Action/action'
import { useNavigation } from '@react-navigation/native';

function TaskApp({ task_list, deleteTask, updateTask }) {
  const [ task, setTask ] = useState('')
  const [ filterTask, setFilterTask ] = useState('')
  const navigation = useNavigation()
  const filteredData = filterTask
      ? task_list.filter(x =>
          x.completed.toLowerCase().includes(filterTask.toLowerCase())
        )
      : task_list ;

  const handleDeleteTask = (id) => {
    deleteTask(id)
  }

  useEffect(() => {
    let unmounted = false
    console.log('Running Affect to Fetch Data')

    setTimeout(() => {
      console.log('Data Loaded for page')
      
      if(!unmounted) {
        task_list
      }
    }, 3000)

    return  () => {
      unmounted = true
    }
  }, [task_list, task])

  return( 
    <View style={style.container}>
      <View style={style.content}>
        <Text>Filter Task</Text>
        <Picker
          selectedValue={filterTask} 
          onValueChange={(itemValue, itemIndex) => setFilterTask(itemValue)}
        >
          <Picker.Item label="All" />
          <Picker.Item label="Done" value={filteredData,'Done'} />
          <Picker.Item label="Not Done" value={filteredData,'Not'} />
        </Picker>
        <Button 
          title="Add Task"
          onPress={() => {
            navigation.navigate('AddTask')
          }}
          style={style.addButton}
          color="#4CAF50"
        />
        <View style={style.list}>
          <FlatList 
            data={filteredData}
            renderItem={( item ) =>  {
              return (
                <ListTask
                  item={item} 
                  deleteHandler={() => handleDeleteTask(item.item.id)}
                />
              )
            }}
          />
        </View>
      </View>
    </View>
  )
}


const style = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  search: {
    marginBottom: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },
  addButton: {
    color: "black"
  },
  list: {
    marginTop: 40
  }
})

const mapStateToProps = (state, ownProps) => {
  return{ 
    task_list: state.task_list
  }
}


const mapDispatchToProps = dispatch => {
  return {
    deleteTask: e => dispatch(deleteTask(e))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskApp)