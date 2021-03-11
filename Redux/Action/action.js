import { ADD_TASK, DELETE_TASK, UPDATE_TASK } from './actionTypes'

let taskId = 0

export const addTask = task => ({
  type: 'ADD_TASK',
  payload: {
    id: taskId++,
    task
  }
})

export const deleteTask = id => ({
  type: 'DELETE_TASK',
  payload: {
    id
  }
})

export const updateTask = (oldTask, newTask, status) => ({
  type: 'UPDATE_TASK',
  payload: {
    oldTask: oldTask,
    newTask: newTask,
    status: status
  },
})
