// src/pages/AboutPage.jsx
import React from 'react';
import { Container, Typography, Paper, Divider, Box } from '@mui/material';

const AboutPage = () => {
  return (
    <Container 
      maxWidth="md" 
      sx={{ 
        mt: 4, 
        display: 'flex', 
        justifyContent: 'flex-start',  
      }}
    >
      <Paper 
        sx={{ 
          p: 4, 
          mt: 3, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'flex-start', 
          width: '100%', 
        }}
      >
        <Typography 
          variant="h4" 
          gutterBottom 
          sx={{ 
            fontWeight: 'bold', 
            textAlign: 'left', 
            color: 'orange', 
            mb: 2 
          }}
        >
          Acerca de la Aplicación Dragon Ball APP
        </Typography>
        <Divider sx={{ width: '60%', marginBottom: 2 }} />
        
        <Typography variant="body1" paragraph sx={{ textAlign: 'justify', lineHeight: 1.6 }}>
          Dragon Ball APP es una aplicación interactiva para todos los fanáticos del universo Dragon Ball. 
          Permite explorar y conocer a los personajes de la serie, proporcionando información detallada sobre cada uno.
          Desde sus transformaciones hasta sus afiliaciones.
        </Typography>
      </Paper>
    </Container>
  );
};

export default AboutPage;
