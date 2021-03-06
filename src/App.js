import React, { useEffect } from 'react';

import Header from './components/Header';
import Calculator from './components/Calculator';


function App() {
  
  useEffect(() => {
    window.addEventListener("resize", function() {
      document.getElementById('brk_room-name').scrollIntoView();
    }, false);
  }, [])
  
  return (
    <div className="app_wrapper">
        <Header title='Calculator' />
    <h2 id="brk_room-name"> Test11233 </h2>
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
