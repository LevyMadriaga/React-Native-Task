import { ADD_TASK, DELETE_TASK, UPDATE_TASK } from '../Action/actionTypes'

const initialState = {
  task_list: []
}

export default function taskReducers(state = initialState, action) {
  switch(action.type) {
    case 'ADD_TASK': {
      const { id, task } = action.payload
      return {
        ...state,
        task_list: [ ...state.task_list, { id, task, completed: 'Not Done' } ],
      }
    }

    case 'DELETE_TASK': {
      const { id } = action.payload
      return {
        ...state,
        task_list: state.task_list.filter((todo) => todo.id !== id)
      }
    }
    
    case 'UPDATE_TASK': {
      const { oldTask, newTask, status } = action.payload
      return {
        ...state,
        task_list: state.task_list.map(data => {
          if (data.id === oldTask.item.id) {
            return {
              ...data,
              task: newTask,
              completed: status
            }
          }
          return data
        })
      }
    }
    
    default:
      return state
  }
}