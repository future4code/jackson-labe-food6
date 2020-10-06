import React from "react";



import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Router';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './constants/theme';
const App = () => {
  return (
    <ThemeProvider theme={theme}> 
    <BrowserRouter>
        <Routes/>
    </BrowserRouter>
    </ThemeProvider>

  )
};

export default App;
