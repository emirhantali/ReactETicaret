import { configureStore } from '@reduxjs/toolkit'

import modalSlice from './modalSlice'
import DataSlice from './DataSlice'


export const store = configureStore({
  reducer: {
    data :DataSlice ,
    modal :modalSlice
  },
  
})