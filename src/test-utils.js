import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./features/store";

function render(children) {
  return rtlRender(<Provider store={store}>{children}</Provider>);
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };

// import React from "react";
// import { render as rtlRender } from "@testing-library/react";
// import { configureStore } from "@reduxjs/toolkit";
// import { Provider } from "react-redux";
// // Import your own reducer
// import movieReducer from "./features/Movies/MovieSlice";

// function render(
//   ui,
//   {
//     preloadedState,
//     store = configureStore({
//       reducer: { movieReducer },
//       preloadedState,
//     }),
//     ...renderOptions
//   } = {}
// ) {
//   function Wrapper({ children }) {
//     return <Provider store={store}>{children}</Provider>;
//   }
//   return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
// }

// // re-export everything
// export * from "@testing-library/react";
// // override render method
// export { render };
