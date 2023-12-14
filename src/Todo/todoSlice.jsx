import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    value: [],
  },
  reducers: {
    addToTodo: (state,action) => {
        state.value.push(action.payload)
      },
  
  },
})


export const { addToTodo } = todoSlice.actions

export default todoSlice.reducer