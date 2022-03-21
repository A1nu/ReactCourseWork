import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Civilizations from "./components/Civilizations";
import Units from "./components/Units";
import NavBar from "./components/NavBar";

function App() {
  return (
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/civilizations' element={<Civilizations />} />
          <Route path='/units' element={<Units />} />
        </Routes>
      </div>
  );
}

export default App;