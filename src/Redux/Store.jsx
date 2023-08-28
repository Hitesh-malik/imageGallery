import { configureStore } from '@reduxjs/toolkit'
import { ImageSlice } from './slices/ImageData'

export const store = configureStore({
  reducer: {
    ImageSlice : ImageSlice
  },
})