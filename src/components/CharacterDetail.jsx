import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Container, 
  CircularProgress, 
  Box, 
  Chip 
} from '@mui/material';
import { getCharacterById } from '../api';

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacter = async () => {
      const data = await getCharacterById(id);
      setCharacter(data);
      setLoading(false);
    };
    fetchCharacter();
  }, [id]);

  if (loading) return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
      <CircularProgress size={60} />
    </Box>
  );
  
  if (!character) return <Typography>Character not found</Typography>;

  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
      <Card 
        sx={{
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-10px)',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
          },
        }}
      >
        <CardMedia
          component="img"
          image={character.image}
          alt={character.name}
          sx={{
            width: '100%',
            maxHeight: '300px',
            objectFit: 'contain',
            borderTopLeftRadius: '12px',
            borderTopRightRadius: '12px',
          }}
        />
        <CardContent sx={{ padding: 3 }}>
          <Typography 
            variant="h4" 
            gutterBottom 
            sx={{ 
              fontWeight: 'bold', 
              color: 'orange', 
              textAlign: 'center' 
            }}
          >
            {character.name}
          </Typography>

          
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'black' }}>
              Descripción
            </Typography>
            <Typography variant="body1" sx={{ color: '#666' }}>
              {character.description}
            </Typography>
          </Box>

       
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'black' }}>
              Información General
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography variant="body1">
                <strong>Raza:</strong> {character.race}
              </Typography>
              {character.gender && (
                <Typography variant="body1">
                  <strong>Género:</strong> {character.gender}
                </Typography>
              )}
            </Box>
          </Box>

         
          {character.transformations && character.transformations.length > 0 && (
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'black' }}>
                Transformaciones
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {character.transformations.map((transformation, index) => (
                  <Chip 
                    key={index} 
                    label={transformation.name} 
                    sx={{ fontWeight: 'bold', color: 'black', border: 'none' }} 
                  />
                ))}
              </Box>
            </Box>
          )}

   
          {character.affiliation && (
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'black' }}>
                Afiliación
              </Typography>
              <Typography variant="body1" sx={{ color: '#666' }}>
                {character.affiliation}
              </Typography>
            </Box>
          )}
        </CardContent>
      </Card>
    </Container>
  );
};

export default CharacterDetail;
