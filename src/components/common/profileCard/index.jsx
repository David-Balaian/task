import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Chip } from '@mui/material';

export default function ProfileCard({ data }) {

  const userInfo = [
    { label: 'Gender', value: data.gender },
    { label: 'Natioanality', value: data.nat },
    { label: 'Age', value: data.registered.age },
    { label: 'City', value: data.location.city },
    { label: 'Phone', value: data.phone },

  ]

  return (
    <Card sx={{ display: 'flex' }}>
      <CardMedia
        component="img"
        sx={{ width: 150 }}
        image={data?.picture?.large}
        alt={data?.name?.first}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent >
          <Typography component="div" variant="h5">
            {`${data?.name?.first} ${data?.name?.last}`}
          </Typography>
          <Box sx={{display:'flex', flexDirection:'column', width: 'fit-content'}}>
            {userInfo.map(({ label, value }) => (
              <Chip key={label} label={`${label}: ${value}`} />
            )
            )}
            </Box>
        </CardContent>
      </Box>
    </Card>
  );
}
