import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,incrementByAmount } from './counterSlice'


export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className='salam'>
      <div>
        <button
         
          onClick={() => dispatch(incrementByAmount(100))}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          onClick={() => dispatch(incrementByAmount(-100))}
        >
          Decrement
        </button>Q
      </div>
    </div>
  )
}