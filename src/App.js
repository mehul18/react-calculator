import React from 'react';

import Header from './components/Header';
import Calculator from './components/Calculator';


function App() {
  return (
    <div className="app_wrapper">
        <Header title='Calculator' />
        <Calculator />
    </div>
  );
}

export default App;
