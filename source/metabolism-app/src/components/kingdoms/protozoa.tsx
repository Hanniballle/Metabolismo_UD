import React from 'react';
import { Box, Typography, Divider, Button } from '@mui/material';
import Post from './bricks/post';
import HeaderKingdom from './bricks/header';
import Link from '@mui/material/Link';

interface ChromistaProps {
  onBack: () => void;
}

const Protozoa: React.FC<ChromistaProps> = ({ onBack }) => {

  const posts = [
    {
      title: 'Protozoa',
      dirImage: '/protozoa/us.jpg',
      subtitle: '@Apodera/  Historia de los protozoos en la tierra ',
      image: '/protozoa/p1.jpg',
      caption: '#Protozoos #Eucariotas #Unicelulares #Fósiles #Foraminíferos #Radiolarios #Evolución #Pseudópodos #Flagelos #Cilios #BiologíaCelular #HistoriaDeLaVida #Microorganismos'
    },
    {
      title: 'Protozoa',
      dirImage: '/protozoa/us.jpg',
      subtitle: '@Apodera/ Clasificación  ',
      image: '/protozoa/p2.jpg',
      caption: '#Protozoos #Rizópodos #Flagelados #Ciliados #Esporozoos #Microorganismos #Pseudópodos #Cilios #Flagelos #Parásitos #BiologíaCelular #ReinoProtista #DiversidadMicrobiana'
    },
    {
      title: 'Protozoa',
      dirImage: '/protozoa/us.jpg',
      subtitle: '@Apodera/ Metabolismo de los protozoos ',
      image: 'protozoa/us.jpg',
      caption: '#Protozoos #MetabolismoProtozoario #AdaptaciónCelular #Oxígeno #AmbienteMicrobiano #RespiraciónCelular #Fermentación #ReinoProtista #BiologíaCelular #Microorganismos'
    },
    {
      title: 'Protozoa',
      dirImage: '/protozoa/us.jpg',
      subtitle: '@Apodera/ Protozoos Aeróbicos',
      image: 'protozoa/p4.jpg',
      caption: '#Protozoos #Trypanosoma #Plasmodium #Glucólisis #Glucosomas #CicloDeKrebs #Malaria #MetabolismoCelular #BiologíaCelular #Parásitos #Microorganismos #RespiraciónCelular'
    },
    {
      title: 'Protozoa',
      dirImage: '/protozoa/us.jpg',
      subtitle: '@Apodera/ Protozoos Anaeróbicos',
      image: '/protozoa/P5.jpg',
      caption: '#Giardia #Trichomonas #Protozoos #Fermentación #AmbientesAnaerobios #Hidrogenosomas #Microbiología #MetabolismoCelular #Parásitos #BiologíaCelular #EnergíaSinOxígeno'
    },
    
  ];

  const chromistaData = {
    title: 'Protozoa',
    dirImage: '/protozoa/us.jpg',
    subtitle: 'Apodera ',
    concept: 'Comprender las características principales del Reino Protozoa y sus procesos metabólicos.',
    procedure: 'Se busca potenciar la comprensión lectora e interpretativa, así como el trabajo en equipo, fomentando la participación activa y la construcción colaborativa de ideas a través de juegos.',
    attitude: 'En el apartado de juegos encontrarás actividades relacionadas con el Reino Protozoa, y al final de este perfil, la actividad final.'
  };

  // Array de textos con títulos, subtítulos y contenido específico para cada publicación
  const textsBetweenPosts = [
    {
      title: "Historia de los protozoos en la tierra",
      subtitle: "Los protozoos, antiguos eucariotas unicelulares, evolucionaron en diversos ambientes y dejaron huella en fósiles como los foraminíferos.",
      content: "Los protozoos son organismos microscópicos unicelulares que han existido en la Tierra desde hace más de 1.500 millones de años, mucho antes de que aparecieran los animales y las plantas. Estos pequeños seres fueron una de las primeras formas de vida eucariota (organismos con células complejas) y han evolucionado en una gran variedad de ambientes, desde océanos hasta el interior de otros seres vivos. Aunque muchos protozoos se han extinguido, otros han logrado adaptarse y sobrevivir hasta hoy. Los fósiles de protozoos son escasos, pero algunos grupos, como los foraminíferos y los radiolarios, dejaron restos en rocas antiguas, ayudando a los científicos a entender su evolución. Se cree que los primeros protozoos eran ameboides, moviéndose y alimentándose mediante pseudópodos (extensiones de su cuerpo). Con el tiempo, algunos desarrollaron flagelos o cilios para moverse más eficientemente, mientras que otros se volvieron parásitos, adaptándose a vivir dentro de animales y plantas.  ",
      style: { fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', marginTop: '1rem' }
    },
    {
      title: " Clasificación",
      subtitle: "Los protozoos se agrupan en rizópodos, flagelados, ciliados y esporozoos, según su forma de moverse y alimentarse.",
      content: "Los protozoos se clasifican en varios grupos según su forma de locomoción y estilo de vida. Los rizópodos se mueven y capturan alimento mediante seudópodos, viven en ambientes acuáticos o suelos húmedos y pueden reproducirse sexual o asexualmente. Los flagelados usan flagelos para moverse, tienen un único núcleo y pueden ser solitarios o formar colonias; la mayoría son heterótrofos y se sitúan entre los protozoos y las algas. Los ciliados poseen cilios que les permiten desplazarse y alimentarse de bacterias en medios acuáticos, y se distinguen por tener dos núcleos. Por último, los esporozoos son parásitos internos inmóviles cuyo ciclo de vida depende de un huésped, y también pueden reproducirse de forma sexual o asexual.",
      style: { fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem', marginTop: '1rem' }
    },
    {
      title: "Metabolismo de los protozoos",
      subtitle: "El metabolismo de los protozoos se adapta a su entorno, variando según la presencia o ausencia de oxígeno.",
      content: "El metabolismo en protozoos varía significativamente según su hábitat y condiciones de vida, especialmente en relación con la disponibilidad de oxígeno.   ",
      style: { fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', marginTop: '1rem' }
    },
    {
      title: "Protozoos Aeróbicos",
      subtitle: "Protozoos como Trypanosoma y Plasmodium obtienen energía con glucólisis y, en algunos casos, también con mitocondrias.",
      content: "Algunos protozoos, como Trypanosoma y Plasmodium, viven en ambientes con oxígeno y obtienen energía principalmente a través de la glucólisis, la cual ocurre en orgánulos especializados llamados glucosomas. Mientras que ciertos protozoos poseen mitocondrias activas capaces de realizar el ciclo de Krebs y generar gran cantidad de energía, otros, como Plasmodium (el causante de la malaria), dependen exclusivamente de la glucólisis y producen lactato como subproducto.",
      style: { fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', marginTop: '1rem' }
    },
    {
      title: "Protozoos Anaeróbicos",
      subtitle: " Protozoos como Giardia y Trichomonas viven sin oxígeno y obtienen energía mediante fermentación.",
      content: "Protozoos como Giardia y Trichomonas habitan en ambientes sin oxígeno, como el intestino, y carecen de mitocondrias. En su lugar, obtienen energía mediante fermentación. Algunos de estos organismos producen hidrógeno (H₂) en estructuras llamadas hidrogenosomas, mientras que otros generan etanol o ácido acético como productos de desecho, adaptándose así a condiciones anaerobias.",
      style: { fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', marginTop: '1rem' }
    },
  ];
  const scrollToTop = () => {
    window.scrollTo(0, 0); // Esto hará que la página regrese al principio
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
      <Divider sx={{ my: 4 }} />

      <Typography
        variant="caption"
        color="textSecondary"
        sx={{ textAlign: 'center', display: 'block', mb: 2 }}
      >
        PUBLICACIONES
      </Typography>

      <Divider sx={{ mb: 2 }} />

      {posts.map((post, i) => (
        <Box key={i}>
          <Typography variant="h6" sx={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '0.5rem' }}>
            {textsBetweenPosts[i].title} {/* Título personalizado */}
          </Typography>
          <Typography variant="subtitle1" sx={{ textAlign: 'center', fontStyle: 'italic', marginBottom: '1rem' }}>
            {textsBetweenPosts[i].subtitle} {/* Subtítulo personalizado */}
          </Typography>
          <Typography sx={textsBetweenPosts[i].style}>
            {textsBetweenPosts[i].content} {/* Contenido personalizado con estilo */}
          </Typography>
          <Post key={i} post={post}/>
        </Box>
      ))}
         <Divider style={{ margin: '2rem 0' }} />
         <Typography variant="body1" sx={{ mt: 2 }}>
         Recuerda entrar al siguiente enlace:{' '}
          <Link
            href="https://app.genially.com/editor/682f9bb53d70d7535c034a51"
            target="_blank"
            rel="noopener"
              >
            ¿Qué aprendiste del Reino Protozoa?
              </Link>
          </Typography>
      
      {/* Botón para regresar al inicio */}
      <Button 
        variant="contained" 
        color="primary" 
        onClick={scrollToTop} 
        style={{ marginTop: '2rem' }}
      >
        Regresar al Inicio
      </Button>
    </Box>
  );
};

export default Protozoa