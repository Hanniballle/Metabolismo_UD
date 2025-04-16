import React from 'react';
import { Box, Typography, Divider, Button } from '@mui/material';
import Post from './bricks/post';
import HeaderKingdom from './bricks/header';
import Tasks from './bricks/tasks';

interface FungiProps {
  onBack: () => void;
}

const posts = [
  {
    title: 'Chromista',
    dirImage: '/chromista/avatar.jpg',
    subtitle: '@Halobacteria - Historia de las archaeas en la tierra ',
    image: '/archaea/publication1.webp',
    caption: 'Las arqueas son microorganismos increíblemente antiguos que han estado en la Tierra desde hace más de 3.500 millones de años...'
  },
  {
    title: 'Chromista',
    dirImage: '/chromista/avatar.jpg',
    subtitle: '@Halobacteria - Clasificación de archaeas',
    image: 'pstGallery',
    postGallery: [
      '/archaea/Publ21.jpeg',
      '/archaea/Publ22.jpeg',
      '/archaea/Publ23.jpeg'
    ],
    isGallery: true,
    caption: 'Las arqueas son microorganismos antiguos que han estado en la Tierra desde hace más de 3.500 millones de años.',
  },
  {
    title: 'Chromista',
    dirImage: '/chromista/avatar.jpg',
    subtitle: 'Halobacteria',
    image: '/img/post1.jpg',
    caption: 'Las archaeas prosperan en ambientes extremos como salinas y aguas termales.',
  },
  {
    title: 'Chromista',
    dirImage: '/chromista/avatar.jpg',
    subtitle: 'Halobacteria',
    image: '/img/post2.jpg',
    caption: 'Algunas archaeas generan metano y contribuyen al ciclo del carbono.',
  },
  {
    title: 'Chromista',
    dirImage: '/chromista/avatar.jpg',
    subtitle: 'Halobacteria',
    image: '/img/post3.jpg',
    caption: 'Su estudio nos ayuda a comprender los primeros pasos de la vida en la Tierra.',
  },
  {
    title: 'Chromista',
    dirImage: '/chromista/avatar.jpg',
    subtitle: 'Halobacteria',
    image: '/img/post4.jpg',
    caption: 'Pueden vivir sin oxígeno y metabolizar sustancias como el hidrógeno.',
  },
];

const fungiData = {
  title: 'Chromista',
  dirImage: '/chromista/avatar.jpg',
  subtitle: 'Halobacteria',
  concept: 'Describir cómo los hongos responden a los estímulos del entorno.',
  procedure: 'Comparar cómo se dan los procesos de irritabilidad en los hongos con otros organismos mediante esquemas.',
  attitude: 'Valorar el reino fungi como organismos vitales en los ecosistemas.'
};

const Fungi: React.FC<FungiProps> = ({ onBack }) => {
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
        title={fungiData.title}
        dirImage={fungiData.dirImage}
        subtitle={fungiData.subtitle}
        concept={fungiData.concept}
        procedure={fungiData.procedure}
        attitude={fungiData.attitude}
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

export default Fungi;