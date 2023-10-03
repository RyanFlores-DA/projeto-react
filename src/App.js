import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function teste(n1){
  const ver = n1 > 1 ? 'Maior que um' : 'Igual a um';
  return (
    <div>{ver}</div>
  )
}

function App() {
    const [dados, setDados] = useState([]);
    useEffect(() => {
      fetch('http://localhost:6000/priori/')
        .then(response => response.json())
        .then(data => setDados(data)); 
    }, []); 
  
    return (
      <div>
        {teste(2)}
        {/* <div>{dados.id}</div>
        <div>{dados.title}</div> APENAS QUANDO FOR UM ITEM UNITÁRIO*/}
        {dados.map(item => (
          <div key={item.id}>{item.id}</div>,
          <div key={item.id}>{item.priori}</div>
        ))}
      </div>
    );
}

export default App;
