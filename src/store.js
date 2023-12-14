import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Counter/counterSlice'
import todoReducer from './Todo/todoSlice'


export default configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    
  },
})