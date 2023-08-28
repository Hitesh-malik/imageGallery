import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  Imagedata: [],
}

export const ImageSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    ImagedataUpdate: (state, action) => {
        console.log(action.payload)
      state.Imagedata.push(action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const {ImagedataUpdate} = ImageSlice.actions

export default ImageSlice.reducer