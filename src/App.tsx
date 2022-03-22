import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Civilizations from "./components/Civilizations";
import Units from "./components/Units";
import NavBar from "./components/NavBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CivilizationDetails from "./components/CivilizationDetails";

function App() {
  return (
      <div className="App">
        <NavBar />
        <Container maxWidth="md">
            <Box sx={{my: 2}}>
                <Routes>
                    <Route path='/civilizations' element={<Civilizations />} />
                    <Route path='/civilizations/:id' element={<CivilizationDetails />} />
                    <Route path='/units' element={<Units />} />
                </Routes>
            </Box>
        </Container>
      </div>
  );
}

export default App;