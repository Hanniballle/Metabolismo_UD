import React from 'react';
import { Box, Typography, Divider, Button } from '@mui/material';
import Post from './bricks/post';
import HeaderKingdom from './bricks/header';
interface ChromistaProps {
  onBack: () => void;
}

const Bacteria: React.FC<ChromistaProps> = ({ onBack }) => {

  const posts = [
    {
      title: 'Bacteria',
      dirImage: '/bacteria/us.jpeg',
      subtitle: '@Merispomedia/ Historia de las bacterias en la tierra ',
      image: '/archaea/p1.webp',
      caption: '#Microbiología #Bacterias #EvoluciónBacteriana #MetabolismoMicrobiano #ResistenciaAntibiótica #BiodiversidadMicrobiana #EcologíaMicrobiana #SupervivientesCelulares'
    },
    {
      title: 'Bacteria',
      dirImage: '/bacteria/us.jpeg',
      subtitle: '@Merispomedia/ Clasificación de las bacterias ',
      image: 'pstGallery',
      postGallery: [
        '/bacteria/P1.jpg',
        '/bacteria/P2.jpg',
      ],
      isGallery: true,
      caption: '#MicrobiologíaEsencial'
    },
    {
      title: 'Bacteria',
      dirImage: '/bacteria/us.jpeg',
      subtitle: '@Merispomedia/ Versatilidad metabólica  ',
      image: 'pstGallery',
      postGallery: [
        '/bacteria/p311.png',
        '/bacteria/p312.png',
        '/bacteria/p32.jpg',
        '/bacteria/p33.jpg',
      ],
      isGallery: true,
      caption: '#Halófilas #Metanogénicas #Termoacidófilas #Arqueas #Extremófilos #Microbiología #AmbientesExtremos #Biología #Ciencia #Ecosistemas'
    },
    {
      title: 'Bacteria',
      dirImage: '/bacteria/us.jpeg',
      subtitle: '@Merispomedia/ Diversidad de aceptores y donadores de electrones  ',
      image: 'bacteria/p4.jpg',
      caption: '#BacteriasEnAcción'
    },
    {
      title: 'Bacteria',
      dirImage: '/bacteria/us.jpeg',
      subtitle: '@Merispomedia/ Ciclos biogeoquímicos ',
      image: '/bacteria/p5.svg',
      caption: '#CiclosBiogeoquímicos'
    },
  ];

  const chromistaData = {
    title: 'Bacteria',
    dirImage: '/bacteria/us.jpeg',
    subtitle: 'Merispomedia',
    concept: 'Comprender las características principales del Reino Cromista y sus procesos metabólicos.',
    procedure: 'Analizar publicaciones tipo Instagram que expliquen visualmente el metabolismo de los organismos chromistas.',
    attitude: 'Valorar el reino chromista como organismos vitales en los ecosistemas.'
  };

  // Array de textos con títulos, subtítulos y contenido específico para cada publicación
  const textsBetweenPosts = [
    {
      title: "Historia de las bacterias en la tierra",
      subtitle: "Las bacterias son unos de los organismos más antiguos y adaptables de la Tierra.",
      content: "Surgieron hace más de 3,500 millones de años, mucho antes que los animales, y han evolucionado para sobrevivir en casi cualquier ambiente: desde aguas termales hirviendo hasta el frío extremo de los polos. Algunas bacterias necesitan oxígeno para vivir (aerobias), mientras que otras mueren en su presencia (anaerobias). También varían en su alimentación: algunas producen su propio alimento mediante la luz (fotosíntesis), y otras consumen materia orgánica. Un ejemplo fascinante de su adaptación es la resistencia a los antibióticos. Cuando los humanos empezaron a usar medicamentos contra infecciones, algunas bacterias mutaron y desarrollaron genes que las protegen, volviéndose más difíciles de eliminar. Además, pueden intercambiar genes entre ellas, lo que acelera su evolución. Hoy, las bacterias siguen siendo esenciales para la vida: algunas ayudan a fijar nitrógeno en el suelo, otras viven en nuestro intestino y nos ayudan a digerir los alimentos. ¡Son verdaderas supervivientes! ",
      style: { fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', marginTop: '1rem' }
    },
    {
      title: " Clasificación",
      subtitle: "Gram positivas: pared gruesa y morado; Gram negativas: pared delgada y rosa. ¡Clave para elegir antibióticos!",
      content: "Las bacterias Gram positivas tienen una pared celular gruesa, como una capa gruesa de peptidoglicano (una especie de malla resistente). Cuando se les aplica el tinte violeta en el laboratorio, lo absorben y se quedan de color morado o azul. En cambio, las bacterias Gram negativas tienen una pared más delgada y una membrana extra por fuera. El tinte violeta no se les queda fácilmente, así que cuando se usa otro tinte (safranina), se ven rosadas o rojas al microscopio. Esta diferencia ayuda a los científicos a identificar bacterias y saber cuál antibiótico usar, ¡porque no todas responden igual a los medicamentos!",
      style: { fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem', marginTop: '1rem' }
    },
    {
      title: "Versatilidad metabólica",
      subtitle: "Las bacterias presentan todas las variantes conocidas de metabolismo energético, lo que las hace únicas entre los reinos",
      content: "Algunas bacterias, como las cianobacterias, realizan fotosíntesis oxigénica similar a las plantas, mientras que otras, como las bacterias púrpuras o verdes del azufre, llevan a cabo fotosíntesis anoxigénica sin liberar oxígeno. Quimiolitotrofía: muchas bacterias tienen la capacidad exclusiva de obtener energía de compuestos inorgánicos reducidos, como el sulfuro de hidrógeno (H₂S), el amonio (NH₄⁺) o el hierro ferroso (Fe²⁺), lo que les permite habitar entornos con escasez de materia orgánica (foto #2, Nitrosomonas). Quimiorganotrofía: utilizan compuestos orgánicos para obtener energía mediante respiración aerobia o anaerobia, o fermentación; pueden fermentar compuestos variados como glucosa, aminoácidos o incluso compuestos aromáticos (foto #3, E. coli).",
      style: { fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', marginTop: '1rem' }
    },
    {
      title: "Diversidad de aceptores y donadores de electrones",
      subtitle: "Respiración aerobia usa oxígeno; anaerobia usa nitrato, sulfato u otros para vivir sin oxígeno.",
      content: "En la respiración aerobia, el oxígeno es el aceptor final de electrones, como en muchas bacterias del suelo o patógenas, mientras que en la respiración anaerobia estas bacterias pueden usar nitrato, sulfato, hierro o incluso dióxido de carbono como aceptores finales de electrones, lo que les permite sobrevivir en ambientes anóxicos. Foto: el color verde que se observa en estas aguas costeras se debe a una erupción de bacterias productoras de sulfuro de hidrógeno, ya que estas bacterias anaerobias reductoras de sulfato liberan gas sulfhídrico al descomponer las algas en el agua.",
      style: { fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', marginTop: '1rem' }
    },
    {
      title: "Ciclos biogeoquímicos",
      subtitle: "Las bacterias son clave en los grandes ciclos del carbono, nitrógeno, azufre y fósforo",
      content: "La fijación del nitrógeno, realizada por bacterias como Rhizobium y Azotobacter, convierte el N₂ atmosférico en amonio asimilable por plantas y otros organismos; la nitrificación, a cargo de bacterias como Nitrosomonas y Nitrobacter, transforma el amonio en nitrito y luego en nitrato; la desnitrificación es el proceso mediante el cual bacterias anaerobias reducen nitratos a N₂, cerrando el ciclo; y la descomposición y mineralización la llevan a cabo muchas bacterias heterótrofas que degradan materia orgánica compleja y reciclan nutrientes.",
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

export default Bacteria