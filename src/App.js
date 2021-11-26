import React from 'react';
import Provider from './context/provider';
import Login from './pages/login/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App(){
  return(
    <BrowserRouter>
      <Provider>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
