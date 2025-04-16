import React from 'react';
import { Box, Typography, Divider, Button } from '@mui/material';
import Post from './bricks/post';
import HeaderKingdom from './bricks/header';
import Tasks from './bricks/tasks';

interface BacteriaProps {
  onBack: () => void;
}

const posts = [
  {
    title: 'Bacteria',
    dirImage: '/bacteria/perfil.jpeg',
    subtitle: '@Merispomedia /Historia de las bacterias en la tierra',
    image: '/archaea-bacteria/publication1.webp',
    caption: 'Las bacterias son unos de los organismos más antiguos y adaptables de la Tierra. Surgieron hace más de 3,500 millones de años, mucho antes que los animales, y han evolucionado para sobrevivir en casi cualquier ambiente: desde aguas termales hirviendo hasta el frío extremo de los polos. Algunas bacterias necesitan oxígeno para vivir (aerobias), mientras que otras mueren en su presencia (anaerobias). También varían en su alimentación: algunas producen su propio alimento mediante la luz (fotosíntesis), y otras consumen materia orgánica. Un ejemplo fascinante de su adaptación es la resistencia a los antibióticos. Cuando los humanos empezaron a usar medicamentos contra infecciones, algunas bacterias mutaron y desarrollaron genes que las protegen, volviéndose más difíciles de eliminar. Además, pueden intercambiar genes entre ellas, lo que acelera su evolución. Hoy, las bacterias siguen siendo esenciales para la vida: algunas ayudan a fijar nitrógeno en el suelo, otras viven en nuestro intestino y nos ayudan a digerir los alimentos. ¡Son verdaderas supervivientes! '
  },
  {
    title: 'Bacteria',
    dirImage: '/bacteria/perfil.jpeg',
    subtitle: '@Merispomedia /Clasificación de las bacterias ',
    image: 'pstGallery',
    postGallery: [
      '/bacteria/P1.jpg',
      '/bacteria/P2.jpg'
    ],
    isGallery: true,
    caption: 'Las bacterias Gram positivas tienen una pared celular gruesa, como una capa gruesa de peptidoglicano (una especie de malla resistente). Cuando se les aplica el tinte violeta en el laboratorio, lo absorben y se quedan de color morado o azul. En cambio, las bacterias Gram negativas tienen una pared más delgada y una membrana extra por fuera. El tinte violeta no se les queda fácilmente, así que cuando se usa otro tinte (safranina), se ven rosadas o rojas al microscopio. Esta diferencia ayuda a los científicos a identificar bacterias y saber cuál antibiótico usar, ¡porque no todas responden igual a los medicamentos! '
  },
  {
    title: 'Bacteria',
    dirImage: '/bacteria/perfil.jpeg',
    subtitle: 'Merispomedia /Metabolismo en bacterias ',
    image: '/img/post1.jpg',
    caption: 'Las archaeas prosperan en ambientes extremos...'
  },
  {
    title: 'Archaea',
    dirImage: '/archaea-bacteria/avatar.jpeg',
    subtitle: 'Halobacteria',
    image: '/img/post2.jpg',
    caption: 'Algunas archaeas generan metano...'
  },
  {
    title: 'Archaea',
    dirImage: '/archaea-bacteria/avatar.jpeg',
    subtitle: 'Halobacteria',
    image: '/img/post3.jpg',
    caption: 'Su estudio nos ayuda a comprender...'
  },
  {
    title: 'Archaea',
    dirImage: '/archaea-bacteria/avatar.jpeg',
    subtitle: 'Halobacteria',
    image: '/img/post4.jpg',
    caption: 'Pueden vivir sin oxígeno...'
  },
];

const bacteriaData = {
  title: 'Archaea',
  dirImage: '/bacteria/perfil.jpeg',
  subtitle: 'Merispomedia',
  concept: 'Describir cómo los hongos responden a los estímulos del entorno.',
  procedure: 'Comparar cómo se dan los procesos de irritabilidad en los hongos con otros organismos mediante esquemas.',
  attitude: 'Valorar el reino fungi como organismos vitales en los ecosistemas.'
};

const Bacteria: React.FC<BacteriaProps> = ({ onBack }) => {
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
        title={bacteriaData.title}
        dirImage={bacteriaData.dirImage}
        subtitle={bacteriaData.subtitle}
        concept={bacteriaData.concept}
        procedure={bacteriaData.procedure}
        attitude={bacteriaData.attitude}
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

export default Bacteria;