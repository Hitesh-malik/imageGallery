import { configureStore } from '@reduxjs/toolkit'
import  imageSlice  from './slices/imageSlice'

export default configureStore({
  reducer: {
    imageSlice,
  }
})
