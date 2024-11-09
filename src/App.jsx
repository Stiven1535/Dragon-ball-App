import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import HumansPage from './pages/HumansPage';
import NonHumansPage from './pages/NonHumansPage';
import AboutPage from './pages/AboutPage';
import CharacterDetail from './components/CharacterDetail';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff9800',
    },
    secondary: {
      main: '#2196f3',
    },
    background: {
      default: '#333333', 
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
          <Route path="/Humanos" element={<HumansPage />} />
          <Route path="/No Humanos" element={<NonHumansPage />} />
          <Route path="/Acerca de" element={<AboutPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
