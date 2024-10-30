import React from 'react';
import './App.css';
import { Button, Container, CssBaseline } from '@mui/material';
import CountryList from './components/CountryList';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Container>
        <CountryList />
      </Container>
    </>
  );
}

export default App;