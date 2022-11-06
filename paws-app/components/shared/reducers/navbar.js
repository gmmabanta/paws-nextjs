// import { createSlice } from '@reduxjs/toolkit';

// const navbarSlice = createSlice({
//   name: 'navbar',
//   initialState: {
//     title: '',
//     history: [
//       {
//         title: '',
//         url: '/mobile',
//       },
//     ],
//   },
//   reducers: {
//     setNavbarTitle: (state, action) => {
//       state.title = action.payload;
//     },
//     addRouteHistory: (state, action) =>
//       void {
//         ...state,
//         history: state.history.push({
//           title: action.payload.title,
//           url: action.payload.url,
//         }),
//       },
//     removeRouteHistory: (state, action) => ({
//       ...state,
//       history: state.history.filter((h) => h.url !== action.payload),
//     }),
//     goBack: (state) => ({
//       ...state,
//       history: state.history.filter(
//         (h, idx) => idx !== state.history.length - 1
//       ),
//       title: state.history[state.history.length - 1].title,
//     }),
//   },
// });

// export const { setNavbarTitle, addRouteHistory, removeRouteHistory, goBack } =
//   navbarSlice.actions;

// export const selectNavbar = (state) => state.navbar;
// export const selectNavbarTitle = (state) => state.navbar.title;
// export const selectRouteHistory = (state) => state.navbar.history;

// export default navbarSlice.reducer;
