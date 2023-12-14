import { createSlice } from '@reduxjs/toolkit'

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {
    value: 0,
  },
  reducers: {
    calc: () => {
       
      },
  
  },
})


export const { addToTodo } = todoSlice.actions

export default todoSlice.reducer