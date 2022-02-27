import React from 'react';
import './App.css';
import './Reset.css';
import routes from './routes';
import NavBar from './components/NavBar/NavBar';


function App() {

  return (
    <div className="App">
      <div className="header">
        <NavBar />
      </div>
      <div className="routes-view">
        { routes }
      </div>
    </div>
  );
}

export default App;
