import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './components/title.jsx';
import Data from './data/data.js';
import MediaCard from './components/employeeCard.jsx';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';


function App() {
  const [onLeave, setLeave] = useState(true);
  console.log(onLeave);
  /* console.log(Data); */
  return (
    <Container fixed>
    <Button variant="contained">Active</Button>
    <Button variant="outlined">On Leave</Button>
    <MediaCard data={Data}/>
    </Container>
  );
}

export default App
