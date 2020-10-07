import React from "react";

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Router';

const App = () => {
  return (

    <>
      <BrowserRouter>
          <Routes/>
      </BrowserRouter>
    </>


  )
};

export default App;
