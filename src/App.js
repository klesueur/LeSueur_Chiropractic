import React from 'react';
import './App.scss';
import routes from './routes';
import NavBar from './components/NavBar/NavBar';


function App() {

  return (
    <div className="App">
      <NavBar />
      { routes }
    </div>
  );
}

export default App;
