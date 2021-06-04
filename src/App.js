import React from 'react';

import Header from './components/Header';
import Calculator from './components/Calculator';


function App() {
  return (
    <div className="app_wrapper">
        <Header title='Calculator' />
        <Calculator />
    
        <select name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
    </div>
  );
}

export default App;
