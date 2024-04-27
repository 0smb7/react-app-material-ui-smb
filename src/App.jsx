import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './components/title.jsx';
import Data from './data/data.js';
import MediaCard from './components/employeeCard.jsx';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';

function App() {
  const [showOnLeave, setShowOnLeave] = useState(false);
  console.log(showOnLeave);

  const filteredData = showOnLeave ? Data.filter((employee) =>  employee.onLeave) : Data;

  const toggleOnLeave = (event) => { if(showOnLeave) {setShowOnLeave(false)} else setShowOnLeave(true) };
  
  return (
    <Container fixed>
      <Box>
        <Typography variant="h4" component="h1">
          Employee Dashboard
        </Typography>
      </Box>
      <Box mt={4} mb={4}>  {/* Added bottom margin here */}
        <Stack spacing={2} direction="row" justifyContent="center">
          <Switch onChange={toggleOnLeave} />
        </Stack>
      </Box>
      <Box mt={4}>  {/* Added top margin here */}
        <MediaCard data={filteredData}/>
      </Box>
    </Container>
  );
}

export default App;
