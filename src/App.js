import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    // <h1 className="text-3xl font-bold underline">
    //   Hello world!
    // </h1>
    <div>
      <Navbar />
      <Home/>
    </div>
  );
}

export default App;
