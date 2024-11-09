import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CharacterCard = ({ character }) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        maxWidth: 280,
        m: 2,
        borderRadius: 2,
        boxShadow: 3, 
        transition: 'transform 0.3s ease, box-shadow 0.3s ease', 
        '&:hover': {
          transform: 'scale(1.05)', 
          boxShadow: 6, 
        },
      }}
    >
      <CardActionArea onClick={() => navigate(`/character/${character.id}`)}>
        <CardMedia
          component="img"
          image={character.image}
          alt={character.name}
          sx={{
            height: 240, 
            width: '100%', 
            objectFit: 'contain',
            borderTopLeftRadius: 2,
            borderTopRightRadius: 2,
          }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              fontWeight: 'bold', 
              color: 'primary.main', 
              textAlign: 'center', 
            }}
          >
            {character.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
            Race: {character.race}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CharacterCard;
