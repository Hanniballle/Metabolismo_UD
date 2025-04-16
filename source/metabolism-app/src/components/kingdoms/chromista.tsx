import React from 'react';
import { Box, Typography, Divider, Button } from '@mui/material';
import Post from './bricks/post';
import HeaderKingdom from './bricks/header';
import Tasks from './bricks/tasks';

interface ChromistaProps {
  onBack: () => void;
}

const Chromista: React.FC<ChromistaProps> = ({ onBack }) => {

  const posts = [
    {
      title: 'Chromista',
      dirImage: '/chromista/avatar.jpg',
      subtitle: '@Halobacteria - Historia de las archaeas en la tierra ',
      image: '/archaea/publication1.webp',
      caption: 'Las arqueas son microorganismos increíblemente antiguos...'
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
      caption: 'Las arqueas son microorganismos antiguos...'
    },
    {
      title: 'Chromista',
      dirImage: '/chromista/avatar.jpg',
      subtitle: 'Halobacteria',
      image: '/img/post1.jpg',
      caption: 'Las archaeas prosperan en ambientes extremos...'
    },
    {
      title: 'Chromista',
      dirImage: '/chromista/avatar.jpg',
      subtitle: 'Halobacteria',
      image: '/img/post2.jpg',
      caption: 'Algunas archaeas generan metano...'
    },
    {
      title: 'Chromista',
      dirImage: '/chromista/avatar.jpg',
      subtitle: 'Halobacteria',
      image: '/img/post3.jpg',
      caption: 'Su estudio nos ayuda a comprender...'
    },
    {
      title: 'Chromista',
      dirImage: '/chromista/avatar.jpg',
      subtitle: 'Halobacteria',
      image: '/img/post4.jpg',
      caption: 'Pueden vivir sin oxígeno...'
    },
  ];

  const chromistaData = {
    title: 'Chromista',
    dirImage: '/chromista/avatar.jpg',
    subtitle: 'Halobacteria',
    concept: 'Describir cómo los hongos responden a los estímulos del entorno.',
    procedure: 'Comparar cómo se dan los procesos de irritabilidad en los hongos con otros organismos mediante esquemas.',
    attitude: 'Valorar el reino fungi como organismos vitales en los ecosistemas.'
  };

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
        title={chromistaData.title}
        dirImage={chromistaData.dirImage}
        subtitle={chromistaData.subtitle}
        concept={chromistaData.concept}
        procedure={chromistaData.procedure}
        attitude={chromistaData.attitude}
      />

      <Tasks />

      <Typography
        variant="caption"
        color="textSecondary"
        sx={{ textAlign: 'center', display: 'block', mb: 2 }}
      >
        PUBLICACIONES
      </Typography>

      <Divider sx={{ mb: 2 }} />

      {posts.map((post, i) => (
        <Post key={i} post={post} isGallery={post.isGallery} postGallery={post.postGallery} />
      ))}
    </Box>
  );
};

export default Chromista;