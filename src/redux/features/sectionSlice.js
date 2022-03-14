import { createSlice } from '@reduxjs/toolkit';

export const sectionSlice = createSlice({
  name: 'section',
  initialState: {
    activeSection: 'shop'
  },
  reducers: {
    changeSection: (state, action) => {
      const { path } = action.payload;

      state.activeSection = path;
    }
  }
});

// States
export const sectionValue = (state) => state.section.activeSection;

// Action creators are generated for each case reducer function
export const { changeSection } = sectionSlice.actions;

export default sectionSlice.reducer;
