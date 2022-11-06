import { createSlice } from '@reduxjs/toolkit';

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    title: '',
    history: [
      {
        title: '',
        url: '/shelter',
      },
    ],
  },
  reducers: {
    setSidebarTitle: (state, action) => {
      state.title = action.payload;
    },
    addRouteHistory: (state, action) =>
      void {
        ...state,
        history: state.history.push({
          title: action.payload.title,
          url: action.payload.url,
        }),
      },
  },
});

export const { setNavbarTitle, addRouteHistory } =
  sidebarSlice.actions;

export const selectSidebar = (state) => state.sidebar;
export const selectSidebarTitle = (state) => state.sidebar.title;

export default sidebarSlice.reducer;
