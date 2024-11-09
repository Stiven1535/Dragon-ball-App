import React, { useEffect, useState } from 'react';
import { Grid, Container, CircularProgress } from '@mui/material';
import CharacterCard from '../components/CharacterCard';
import { getCharacters } from '../api';

const HomePage = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await getCharacters();
      setCharacters(data);
      setLoading(false);
    };
    fetchCharacters();
  }, []);

  if (loading) return <CircularProgress />;

  return (
    <Container sx={{ marginLeft: '250px', paddingTop: '20px' }}>
      <Grid container spacing={2}>
        {characters.map((character) => (
          <Grid item xs={12} sm={6} md={4} key={character.id}>
            <CharacterCard character={character} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
