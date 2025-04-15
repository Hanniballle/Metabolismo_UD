import React from 'react';
import { Box, Typography, Divider} from '@mui/material';
import Post from './bricks/post';
import HeaderKingdom from './bricks/header';
import Tasks from './bricks/tasks';

const posts = [
  {
    title: 'Archaea',
    subtitle: '@Halobacteria - Historia de las archaeas en la tierra ',
    image: '/archaea/publication1.webp',
    caption: 'Las arqueas son microorganismos increíblemente antiguos que han estado en la Tierra desde hace más de 3.500 millones de años, incluso antes de que existieran las plantas y los animales. Surgieron en un momento en que el planeta era muy diferente: no había oxígeno en la atmósfera, las temperaturas eran extremadamente altas y los ambientes eran hostiles. A pesar de estas condiciones, las arqueas lograron adaptarse y evolucionar, desarrollando formas únicas de sobrevivir, como vivir en aguas termales, fuentes ácidas o incluso en el fondo del océano.  Con el tiempo, las arqueas se diversificaron en distintos grupos, como las Crenarchaeotas (muchas de ellas amantes del calor extremo) y las Euryarchaeotas (que incluyen a las metanógenas, productoras de metano). A diferencia de las bacterias, las arqueas tienen características especiales, como membranas celulares con una estructura química única y genes más parecidos a los de los eucariotas (organismos más complejos, como los humanos). Esto sugiere que, aunque son microscópicas, las arqueas tienen un papel fundamental en la historia de la vida en nuestro planeta. '
  },
  {
    title: 'Archaea',
    subtitle: '@Halobacteria - Clasificación de archaeas',
    image: 'pstGallery',
    postGallery: [
      '/archaea/Publ21.jpeg',
      '/archaea/Publ22.jpeg',
      '/archaea/Publ23.jpeg'
    ],
    isGallery: true,
    caption:
      'Las arqueas son microorganismos antiguos que han estado en la Tierra desde hace más de 3.500 millones de años.',
  },
  {
    title: 'Archaea',
    subtitle: 'Halobacteria',
    image: '/img/post1.jpg',
    caption: 'Las archaeas prosperan en ambientes extremos como salinas y aguas termales.',
  },
  {
    title: 'Archaea',
    subtitle: 'Halobacteria',
    image: '/img/post2.jpg',
    caption: 'Algunas archaeas generan metano y contribuyen al ciclo del carbono.',
  },
  {
    title: 'Archaea',
    subtitle: 'Halobacteria',
    image: '/img/post3.jpg',
    caption: 'Su estudio nos ayuda a comprender los primeros pasos de la vida en la Tierra.',
  },
  {
    title: 'Archaea',
    subtitle: 'Halobacteria',
    image: '/img/post4.jpg',
    caption: 'Pueden vivir sin oxígeno y metabolizar sustancias como el hidrógeno.',
  },
];

const archaeaData = {
  title: 'Archaea',
  dirImage: '/archaea/avatar.jpeg',
  subtitle: 'Halobacteria',
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
        subtitle={archaeaData.subtitle}
        concept={archaeaData.concept}
        procedure={archaeaData.procedure}
        attitude={archaeaData.attitude}
      />

      <Tasks />

      <Typography variant="caption" color="textSecondary" sx={{ textAlign: 'center', display: 'block', mb: 2 }}>
        PUBLICACIONES
      </Typography>
      
      <Divider sx={{ mb: 2 }} />

      {posts.map((post, i) => (
        <Post key={i} post={post} isGallery={post.isGallery} postGallery={post.postGallery}/>
      ))}
    </Box>
  );
};

export default ArchaeaProfile;
