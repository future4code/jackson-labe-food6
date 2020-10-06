import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './constants/theme';
const App = () => {
  return (
    <ThemeProvider theme={theme}> 
    <BrowserRouter>
        <Router/>
    </BrowserRouter>
    </ThemeProvider>
// =======

// import ProgressPage from "./screens/ProgressPage";
// import ErrorPage from "./screens/Errors/index";

// const App = () => {
//   return (
//     <>
//       <ProgressPage/>
//       {/* <ErrorPage /> */}
//     </>
// >>>>>>> master
  );
};

export default App;
