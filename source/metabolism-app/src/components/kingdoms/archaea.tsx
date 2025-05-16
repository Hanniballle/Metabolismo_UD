import React from 'react';
import { Box, Typography, Divider, Button } from '@mui/material';
import Post from './bricks/post';
import HeaderKingdom from './bricks/header';

interface ChromistaProps {
  onBack: () => void;
}

const Archaea: React.FC<ChromistaProps> = ({ onBack }) => {

  const posts = [
    {
      title: 'Archaea',
      dirImage: '/archaea/av.jpeg',
      subtitle: '@Halobacteria/ Historia de las archaeas en la tierra ',
      image: '/archaea/p1.webp',
      caption: '#Arqueas #VidaExtrema #MicroorganismosAntiguos #Evolución #Extremófilos #Crenarchaeota #Euryarchaeota #Metanógenas #BiologíaCelular #HistoriaDeLaVida #CienciasBiológicas'
    },
    {
      title: 'Archaea',
      dirImage: '/archaea/av.jpeg',
      subtitle: '@Halobacteria Clasificación',
      image: 'pstGallery',
      postGallery: [
        '/archaea/p21.jpeg',
        '/archaea/p22.jpeg',
        '/archaea/p23.jpeg',
      ],
      isGallery: true,
      caption: '#Arqueas #Halófilas #Metanogénicas #Termoacidófilas #Extremófilos #Microbiología #VidaExtrema #Ciencia #Ecosistemas #DiversidadMicrobiana #Biología'
    },
    {
      title: 'Archaea',
      dirImage: '/archaea/av.jpeg',
      subtitle: '@Halobacteria/ Metabolismo  ',
      image: 'archaea/av.jpeg',
      caption: '#Halófilas #Metanogénicas #Termoacidófilas #Arqueas #Extremófilos #Microbiología #AmbientesExtremos #Biología #Ciencia #Ecosistemas'
    },
    {
      title: 'Archaea',
      dirImage: '/archaea/av.jpeg',
      subtitle: '@Halobacteria/ Fuentes de energía y metabolismo energético ',
      image: 'archaea/p4.jpg',
      caption: '#Arqueas #Bacteriorodopsina #MetabolismoQuímico #Halobacterias #Metanógenas #Microbiología #VidaExtrema #Ciencia #Biología'
    },
    {
      title: 'Archaea',
      dirImage: '/archaea/av.jpeg',
      subtitle: '@Halobacteria/ Respiración y fermentación',
      image: '/archaea/p5.jpg',
      caption: '#Arqueas #Bacteriorodopsina #MetabolismoQuímico #Halobacterias #Metanógenas #Microbiología #VidaExtrema #Ciencia #Biología'
    },
    {
      title: 'Archaea',
      dirImage: '/archaea/av.jpeg',
      subtitle: '@Halobacteria/ Adaptaciones extremas ',
      image: '/archaea/p6.jpg',
      caption: '#Arqueas #SupervivenciaExtrema #ProteínasResistentes #Adaptación #Microbiología #VidaExtrema #Biología #Ciencia'
    },
    
  ];

  const chromistaData = {
    title: 'Archaea',
    dirImage: '/archaea/av.jpeg',
    subtitle: 'Halobacteria ',
    concept: 'Comprender las características principales del Reino Cromista y sus procesos metabólicos.',
    procedure: 'Analizar publicaciones tipo Instagram que expliquen visualmente el metabolismo de los organismos chromistas.',
    attitude: 'Valorar el reino chromista como organismos vitales en los ecosistemas.'
  };

  // Array de textos con títulos, subtítulos y contenido específico para cada publicación
  const textsBetweenPosts = [
    {
      title: "Historia de las archaeas en la tierra",
      subtitle: "Las arqueas son microbios antiguos que viven en ambientes extremos y tienen genes parecidos a los de los humanos.",
      content: "Las arqueas son microorganismos increíblemente antiguos que han estado en la Tierra desde hace más de 3.500 millones de años, incluso antes de que existieran las plantas y los animales. Surgieron en un momento en que el planeta era muy diferente: no había oxígeno en la atmósfera, las temperaturas eran extremadamente altas y los ambientes eran hostiles. A pesar de estas condiciones, las arqueas lograron adaptarse y evolucionar, desarrollando formas únicas de sobrevivir, como vivir en aguas termales, fuentes ácidas o incluso en el fondo del océano. Con el tiempo, las arqueas se diversificaron en distintos grupos, como las Crenarchaeotas (muchas de ellas amantes del calor extremo) y las Euryarchaeotas (que incluyen a las metanógenas, productoras de metano). A diferencia de las bacterias, las arqueas tienen características especiales, como membranas celulares con una estructura química única y genes más parecidos a los de los eucariotas (organismos más complejos, como los humanos). Esto sugiere que, aunque son microscópicas, las arqueas tienen un papel fundamental en la historia de la vida en nuestro planeta. ",
      style: { fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', marginTop: '1rem' }
    },
    {
      title: " Clasificación",
      subtitle: "Las arqueas pueden vivir en sal, en calor extremo o producir metano en pantanos y estómagos.",
      content: "Las arqueas se agrupan en tres tipos principales según el ambiente extremo en el que viven. Las halófilas prosperan en entornos con alta concentración de sal, como lagos salados. Las metanogénicas son anaerobias obligadas que generan metano a partir de dióxido de carbono e hidrógeno, y se encuentran en ambientes pantanosos o en el tracto digestivo de animales. Por su parte, las termoacidófilas habitan en lugares muy calientes y ácidos, como las fuentes sulfurosas del Parque Yellowstone, donde las temperaturas superan los 60 °C y el pH es extremadamente bajo (1 a 2).",
      style: { fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem', marginTop: '1rem' }
    },
    {
      title: "Metabolismo",
      subtitle: "Las arqueas son microbios increíbles que habitan desde lugares extremos hasta ambientes comunes, con un metabolismo muy diverso.",
      content: "Las archaeas son microorganismos fascinantes que pueden vivir en ambientes extremos, como aguas termales, lugares muy salados o zonas sin oxígeno, aunque también se encuentran en sitios más comunes. Lo más interesante es que su metabolismo es muy variado: algunas estrategias son únicas, mientras que otras las comparten con bacterias y organismos más complejos, pero con diferencias importantes a nivel bioquímico.",
      style: { fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', marginTop: '1rem' }
    },
    {
      title: "Fuentes de energía y metabolismo energético",
      subtitle: "Algunas arqueas usan luz con bacteriorodopsina, pero la mayoría obtiene energía de compuestos químicos, desde azufre hasta metano.",
      content: "Algunas archaeas, como las Halobacterias, pueden obtener energía de la luz gracias a una proteína llamada bacteriorodopsina,(Foto#1) pero no usan clorofila como las plantas y no liberan oxígeno. Sin embargo, la mayoría obtiene energía de compuestos químicos, ya sean inorgánicos (como el azufre) u orgánicos (como los azúcares). Por ejemplo, las archaeas que viven en ambientes calientes pueden oxidar azufre, mientras que las metanógenas producen energía generando metano, un gas que también se usa como combustible.",
      style: { fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', marginTop: '1rem' }
    },
    {
      title: "Respiración y fermentación",
      subtitle: " Muchas archaeas anaerobias presentan metabolismos diversos, como la metanogénesis y la oxidación de azufre, y fijan carbono mediante rutas autotróficas no convencionales como Wood-Ljungdahl o el ciclo del 3-hidroxipropionato",
      content: "Aunque algunas arqueas pueden usar oxígeno, muchas viven en ambientes anaerobios. Por ejemplo, las metanógenas combinan dióxido de carbono o metanol con hidrógeno para producir metano, mientras que otras, como Sulfolobus, oxidan azufre en presencia de oxígeno o fermentan compuestos orgánicos en su ausencia. Además, algunas arqueas son autótrofas, capaces de fijar carbono usando rutas metabólicas distintas a las de las plantas, como el ciclo del 3-hidroxipropionato o la vía de Wood-Ljungdahl, una de las más antiguas conocidas. Otras son heterótrofas, y obtienen su carbono de sustancias orgánicas como proteínas o azúcares.",
      style: { fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', marginTop: '1rem' }
    },
    {
      title: "Adaptaciones extremas",
      subtitle: " Las arqueas sobreviven en extremos gracias a proteínas resistentes, acumulación de potasio y control interno del pH.",
      content: "Las archaeas tienen mecanismos increíbles para sobrevivir en condiciones extremas. Las que viven en altas temperaturas tienen proteínas que no se desnaturalizan con el calor, mientras que las que habitan en lugares salados acumulan potasio para evitar deshidratarse. Las acidófilas, por su parte, mantienen un pH interno neutro a pesar de vivir en ambientes muy ácidos.",
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
          <Post key={i} post={post} isGallery={post.isGallery} postGallery={post.postGallery} />
        </Box>
      ))}
         <Divider style={{ margin: '2rem 0' }} />
      
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

export default Archaea