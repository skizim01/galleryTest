import { combineReducers, configureStore } from '@reduxjs/toolkit'
import imgSlice from './imgSlice'


export const store = configureStore({
  reducer:{
    imgReducer: imgSlice
  },
})