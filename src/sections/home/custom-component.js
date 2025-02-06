import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            ABOUT US
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Juelle Empire is a brand dedicated to give you the best experience. Satisfaction and happiness
            is assured.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
