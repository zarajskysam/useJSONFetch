import logo from './logo.svg';
import './App.css';
import Test from './components/Test';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <h2>True request</h2>
      <Test url='http://localhost:7070/data'/>
      <h2>Error request</h2>
      <Test url='http://localhost:7070/error'/>
      <h2>Request with timeout(loading Test)</h2>
      <Test url='http://localhost:7070/loading'/>
    </React.Fragment>
  );
}

export default App;
