import React from 'react';
import './App.css';
import { Box, Container, CssBaseline, Typography } from '@mui/material';
import CountryList from './components/CountryList';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Container>
        <Box p={'20px 5px'}>
          <Typography component={'h1'} variant='h3' mb={'20px'}>
            Countries
          </Typography>
          <CountryList />
        </Box>
      </Container>
    </>
  );
}

export default App;