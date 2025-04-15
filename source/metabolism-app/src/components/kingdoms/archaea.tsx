import React, { useState } from 'react';
import {
  Box,
  Typography,
  Chip,
  Grid,
  Card,
  CardContent
} from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Post from './bricks/post';
import AvatarKingdom from './bricks/avatar';


const posts = [
  {
    user: 'Archaea',
    username: 'Halobacteria',
    image: '/img/post1.jpg',
    caption: 'Las archaeas prosperan en ambientes extremos como salinas y aguas termales.',
  },
  {
    user: 'Archaea',
    username: 'Halobacteria',
    image: 'pstGallery', // Usado solo en galería
    isGallery: true,
    caption:
      'Las arqueas son microorganismos antiguos que han estado en la Tierra desde hace más de 3.500 millones de años.',
  },
  {
    user: 'Archaea',
    username: 'Halobacteria',
    image: '/img/post1.jpg',
    caption: 'Las archaeas prosperan en ambientes extremos como salinas y aguas termales.',
  },
  {
    user: 'Archaea',
    username: 'Halobacteria',
    image: '/img/post2.jpg',
    caption: 'Algunas archaeas generan metano y contribuyen al ciclo del carbono.',
  },
  {
    user: 'Archaea',
    username: 'Halobacteria',
    image: '/img/post3.jpg',
    caption: 'Su estudio nos ayuda a comprender los primeros pasos de la vida en la Tierra.',
  },
  {
    user: 'Archaea',
    username: 'Halobacteria',
    image: '/img/post4.jpg',
    caption: 'Pueden vivir sin oxígeno y metabolizar sustancias como el hidrógeno.',
  },
];



const ArchaeaProfile = () => {
  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', pt: 4 }}>
      {/* Perfil */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <AvatarKingdom name='Archaea' dirImage='/archaea/avatar.jpeg'/>
        <Box>
          <Typography variant="h6" fontWeight="bold">
            ArchaeaTest
          </Typography>
          <Chip label="@Halobacteria" size="small" />
        </Box>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="body1" gutterBottom>
          <strong>CONCEPTUAL:</strong> Describir cómo los hongos responden a los estímulos del entorno.
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>PROCEDIMENTAL:</strong> Comparar cómo se dan los procesos de irritabilidad en los hongos con otros organismos mediante esquemas.
        </Typography>
        <Typography variant="body1">
          <strong>ACTITUDINAL:</strong> Valorar el reino fungi como organismos vitales en los ecosistemas.
        </Typography>
      </Box>

      <Grid container spacing={2} justifyContent="center" sx={{ mb: 4 }}>
        <Grid item>
          <Card sx={{ width: 60, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#c1a57b' }}>
            <CardContent>
              <LightbulbIcon fontSize="large" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ width: 60, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#7e7c84' }}>
            <CardContent>
              <AssignmentIcon fontSize="large" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ width: 60, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#7e7c84' }}>
            <CardContent>
              <AssignmentIcon fontSize="large" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ width: 60, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#a36a3c' }}>
            <CardContent>
              <CheckCircleIcon fontSize="large" />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Typography variant="caption" color="textSecondary" sx={{ textAlign: 'center', display: 'block', mb: 2 }}>
        PUBLICACIONES
      </Typography>

      {/* Publicaciones */}
      {posts.map((post, i) => (
        <Post key={i} post={post} isGallery={post.isGallery} />
      ))}
    </Box>
  );
};

export default ArchaeaProfile;
