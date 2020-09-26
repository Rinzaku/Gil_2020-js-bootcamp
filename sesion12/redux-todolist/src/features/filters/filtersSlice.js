import { createSlice } from '@reduxjs/toolkit' 

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETE: 'SHOW_COMPLETE',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

const filersSlice = createSlice({
  name: 'visibilityFilters',
  initialState: VisibilityFilters.SHOW_ALL,
  reducers: {
    setVisibilityFilter(state,action){
      return action.payload
    }
  }
})

export const { setVisibilityFilter } = filersSlice.actions
export default filersSlice.reducer