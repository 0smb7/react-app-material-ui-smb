import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function MediaCard( { data }) {
  return (
    <>{data.map((item, index) => (
      <Card sx={{ maxWidth: 345, padding: 7 }}>
        <Box sx={{ paddingTop: 2, paddingBottom: 2 }}>
          <CardMedia
            sx={{ 
              height: 300, 
              width: 300, 
              backgroundSize: "contain", 
              margin: "auto" }}
              image={`/react-app-material-ui-smb/${item.image}`}
            title="profile image"
          />
        </Box>

        <AccountBalanceIcon />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.firstName} {item.lastName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Department: {item.department}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Position: {item.position}
          </Typography>
        </CardContent>
        <Stack 
        
        direction="row" 
        flexWrap="wrap"
        spacing={1} 
        sx={{ marginTop: 2, 
        justifyContent: "center" }}>
        {item.skills.map((skill, skillIndex) => (
          <Chip key={skillIndex} label={skill} variant="outlined" />
          ))}
        </Stack>

        <CardActions sx={{ justifyContent: "center" }}>
          <Stack direction="row" spacing={1} sx={{ marginTop: 2, justifyContent: "center" }}>


            <Chip label={item.onLeave ? "Inactive" : "Active"} variant="outlined" />
            <Chip label={`Hours: ${item.hoursLoggedThisWeek}`} variant="outlined" />
          </Stack>
        </CardActions>
      </Card>
    ))}
  </>
  );
}