import React from 'react';
import { Box, Typography, Divider, Button } from '@mui/material';
import Post from './bricks/post';
import HeaderKingdom from './bricks/header';
import Tasks from './bricks/tasks';

interface PlantaeProps {
  onBack: () => void;
}

const posts = [
  {
    title: 'Archaea',
    dirImage: '/archaea-bacteria/avatar.jpeg',
    subtitle: '@Halobacteria - Historia de las archaeas en la tierra ',
    image: '/archaea-bacteria/publication1.webp',
    caption: 'Las arqueas son microorganismos increíblemente antiguos que han estado en la Tierra desde hace más de 3.500 millones de años...'
  },
  {
    title: 'Archaea',
    dirImage: '/archaea-bacteria/avatar.jpeg',
    subtitle: '@Halobacteria - Clasificación de archaeas',
    image: 'pstGallery',
    postGallery: [
      '/archaea-bacteria/Publ21.jpeg',
      '/archaea-bacteria/Publ22.jpeg',
      '/archaea-bacteria/Publ23.jpeg'
    ],
    isGallery: true,
    caption: 'Las arqueas son microorganismos antiguos que han estado en la Tierra desde hace más de 3.500 millones de años.',
  },
  {
    title: 'Archaea',
    dirImage: '/archaea-bacteria/avatar.jpeg',
    subtitle: 'Halobacteria',
    image: '/img/post1.jpg',
    caption: 'Las archaeas prosperan en ambientes extremos como salinas y aguas termales.',
  },
  {
    title: 'Archaea',
    dirImage: '/archaea-bacteria/avatar.jpeg',
    subtitle: 'Halobacteria',
    image: '/img/post2.jpg',
    caption: 'Algunas archaeas generan metano y contribuyen al ciclo del carbono.',
  },
  {
    title: 'Archaea',
    dirImage: '/archaea-bacteria/avatar.jpeg',
    subtitle: 'Halobacteria',
    image: '/img/post3.jpg',
    caption: 'Su estudio nos ayuda a comprender los primeros pasos de la vida en la Tierra.',
  },
  {
    title: 'Archaea',
    dirImage: '/archaea-bacteria/avatar.jpeg',
    subtitle: 'Halobacteria',
    image: '/img/post4.jpg',
    caption: 'Pueden vivir sin oxígeno y metabolizar sustancias como el hidrógeno.',
  },
];

const plantaeData = {
  title: 'Archaea',
  dirImage: '/archaea-bacteria/avatar.jpeg',
  subtitle: 'Halobacteria',
  concept: 'Describir cómo los hongos responden a los estímulos del entorno.',
  procedure: 'Comparar cómo se dan los procesos de irritabilidad en los hongos con otros organismos mediante esquemas.',
  attitude: 'Valorar el reino fungi como organismos vitales en los ecosistemas.'
};

const Plantae: React.FC<PlantaeProps> = ({ onBack }) => {
  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', pt: 4 }}>
      <Button
        variant="contained"
        color="primary"
        onClick={onBack}
        sx={{
          mb: 3,
          textTransform: 'none',
          fontWeight: 'bold',
          borderRadius: 3,
          boxShadow: 2,
          px: 3,
          py: 1,
          '&:hover': {
            backgroundColor: '#1565c0',
          },
        }}
      >
        Volver a Reinos
      </Button>

      <HeaderKingdom 
        title={plantaeData.title}
        dirImage={plantaeData.dirImage}
        subtitle={plantaeData.subtitle}
        concept={plantaeData.concept}
        procedure={plantaeData.procedure}
        attitude={plantaeData.attitude}
      />

      <Tasks />

      <Typography variant="caption" color="textSecondary" sx={{ textAlign: 'center', display: 'block', mb: 2 }}>
        PUBLICACIONES
      </Typography>
      
      <Divider sx={{ mb: 2 }} />

      {posts.map((post, i) => (
        <Post key={i} post={post} isGallery={post.isGallery} postGallery={post.postGallery} />
      ))}
    </Box>
  );
};

export default Plantae;