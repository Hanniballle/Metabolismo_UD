import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent
} from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Post from './bricks/post';
import HeaderKingdom from './bricks/header';


const posts = [
  {
    title: 'Archaea',
    username: 'Halobacteria',
    image: '/archaea/publication1.webp',
    caption: 'Las archaeas prosperan en ambientes extremos como salinas y aguas termales.',
  },
  {
    title: 'Archaea',
    username: 'Halobacteria',
    image: 'pstGallery',
    isGallery: true,
    caption:
      'Las arqueas son microorganismos antiguos que han estado en la Tierra desde hace más de 3.500 millones de años.',
  },
  {
    title: 'Archaea',
    username: 'Halobacteria',
    image: '/img/post1.jpg',
    caption: 'Las archaeas prosperan en ambientes extremos como salinas y aguas termales.',
  },
  {
    title: 'Archaea',
    username: 'Halobacteria',
    image: '/img/post2.jpg',
    caption: 'Algunas archaeas generan metano y contribuyen al ciclo del carbono.',
  },
  {
    title: 'Archaea',
    username: 'Halobacteria',
    image: '/img/post3.jpg',
    caption: 'Su estudio nos ayuda a comprender los primeros pasos de la vida en la Tierra.',
  },
  {
    title: 'Archaea',
    username: 'Halobacteria',
    image: '/img/post4.jpg',
    caption: 'Pueden vivir sin oxígeno y metabolizar sustancias como el hidrógeno.',
  },
];

const archaeaData = {
  title: 'Archaea Profile',
  dirImage: '/archaea/avatar.jpeg',
  username: 'Halobacteria',
  concept: 'Describir cómo los hongos responden a los estímulos del entorno.',
  procedure: 'Comparar cómo se dan los procesos de irritabilidad en los hongos con otros organismos mediante esquemas.',
  attitude: 'Valorar el reino fungi como organismos vitales en los ecosistemas.'
}

const ArchaeaProfile = () => {
  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', pt: 4 }}>
      <HeaderKingdom 
        title={archaeaData.title}
        dirImage={archaeaData.dirImage}
        username={archaeaData.username}
        concept={archaeaData.concept}
        procedure={archaeaData.procedure}
        attitude={archaeaData.attitude}
      />

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

      {posts.map((post, i) => (
        <Post key={i} post={post} isGallery={post.isGallery} />
      ))}
    </Box>
  );
};

export default ArchaeaProfile;
