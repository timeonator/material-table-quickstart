import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Resources from './resources';
import Button from '@material-ui/core/Button';
const App = () => {
  return (
    <>
      <Button variant="contained" color="primary">
        Open Data PDX
      </Button>
      <Resources />
    </>
  );
};

export default App;
