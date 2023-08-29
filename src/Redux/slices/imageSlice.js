import { createSlice } from '@reduxjs/toolkit'

export const imageSlice = createSlice({
  name: 'counter',
  initialState :{
    Imagedata: [],
  },
  reducers: {
    imagedataUpdate: (state, action) => {
      console.log(action.payload)
      state.Imagedata = action.payload 
    }
  },
})

// Action creators are generated for each case reducer function
export const {imagedataUpdate} = imageSlice.actions
export default imageSlice.reducer;
