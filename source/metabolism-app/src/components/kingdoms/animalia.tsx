import React from 'react';
import { Box, Typography, Divider, Button } from '@mui/material';
import Post from './bricks/post';
import HeaderKingdom from './bricks/header';

interface ChromistaProps {
  onBack: () => void;
}

const Animalia: React.FC<ChromistaProps> = ({ onBack }) => {

  const posts = [
    {
      title: 'Animalia',
      dirImage: '/animalia/p2.jpg',
      subtitle: '@Tremarctos/ Historia de los animales en la tierra',
      image: '/animalia/Publi1.jpg',
      caption: '#EvoluciónAnimal #Fósiles #VidaAntigua #ExplosiónCámbrica'
    },
    {
      title: 'Animalia',
      dirImage: '/animalia/p2.jpg',
      subtitle: '@Tremarctos/ Clasificación de animales  ',
      image: '/animalia/p2.jpg',
      caption: '#DiversidadAnimal 🌍#TaxonomíaAnimal 🔬#MundoAnimal 🐾🌐'
    },
    {
      title: 'Animalia',
      dirImage: '/animalia/p2.jpg',
      subtitle: '@Tremarctos/ Arthropoda',
      image: '/animalia/p3.jpg',
      caption: '🐜🕷️ #ArtrópodosAsombrosos🦗🐝 #InsectosYCompañía🕸️🦂 #ArácnidosAlAtaque'
    },
    {
      title: 'Animales',
      dirImage: '/animalia/p2.jpg',
      subtitle: '@Tremarctos/Chordata',
      image: '/animalia/p4.jpg',
      caption: '🐍🦈🦅 #CordadosEnAcción'
    },
    {
      title: 'Animalia',
      dirImage: '/animalia/p2.jpg',
      subtitle: '@Tremarctos/ Nematoda',
      image: '/animalia/p5.jpg',
      caption: '#Nematodos #GusanosRedondos #Microscópicos #Parásitos #Descomponedores'
    },
    {
      title: 'Animalia',
      dirImage: '/animalia/p2.jpg',
      subtitle: '@Tremarctos/ Mollusca',
      image: '/animalia/p6.jpg',
      caption: '#Moluscos #CuerpoBlando #Conchas #Pulpos #Calamares #Caracoles #Mejillones #Bivalvos #InteligenciaAnimal #Camuflaje #VidaMarina #Biodiversidad'
    },
    {
      title: 'Animalia',
      dirImage: '/animalia/p2.jpg',
      subtitle: '@Tremarctos/ Annelida',
      image: '/animalia/p7.jpg',
      caption: '#Anélidos #GusanosSegmentados #LombrizDeTierra #Sanguijuelas #SaludDelSuelo #Ecosistemas #Biología #Naturaleza #Oxigenación #VidaSilvestre'
    },
    {
      title: 'Animalia',
      dirImage: '/animalia/p2.jpg',
      subtitle: '@Tremarctos/ Echinodermata',
      image: '/animalia/p8.jpg',
      caption: '#Equinodermos #EstrellasDeMar #ErizosDeMar #PielEspinosa #SimetríaRadial #Regeneración #VidaMarina #EcosistemasMarinos #BiologíaMarina #Biodiversidad'
    },
    {
      title: 'Animalia',
      dirImage: '/animalia/p2.jpg',
      subtitle: '@Tremarctos/ Metabolismo de los animales',
      image: '/animalia/p9.jpg',
      caption: '#Heterótrofos #EnergíaCelular #Glucólisis #CicloDeKrebs #FosforilaciónOxidativa #Mitocondrias #ATP #BiologíaCelular #Animales #RespiraciónCelular'
    },
    {
      title: 'Animalia',
      dirImage: '/animalia/p2.jpg',
      subtitle: '@Tremarctos/ Animales con y sin oxígeno',
      image: '/animalia/p10.jpg',
      caption: '#Loricifera #SinOxígeno #Fermentación #Hidrogenosomas #AnimalesExtremos #Adaptación #VidaMarina #Biología #EnergíaCelular #AmbientesExtremos'
    },
    {
      title: 'Animalia',
      dirImage: '/animalia/p2.jpg',
      subtitle: '@Tremarctos/ Endotermos vs Ectotermos',
      image: '/animalia/p11.png',
      caption: '#Endotermos #Ectotermos #RegulaciónTérmica #TemperaturaCorporal #Animales #Metabolismo #BiologíaAnimal #Aves #Mamíferos #Reptiles #Peces'
    },
    {
      title: 'Animalia',
      dirImage: '/animalia/p2.jpg',
      subtitle: '@Tremarctos/ Metabolismo en situaciones extremas ',
      image: 'pstGallery',
      postGallery: [
        '/animalia/p121.jpg',
        '/animalia/p122.jpg',
        '/animalia/p123.jpg'
      ],
      isGallery: true,
      caption: '#Hibernación #Estivación #Torpor #Metabolismo #AdaptaciónAnimal #Supervivencia #Colibríes #Caracoles #OsoPardo #BiologíaAnimal #EstrategiasDeSupervivencia'
    },
    {
      title: 'Animalia',
      dirImage: '/animalia/p2.jpg',
      subtitle: '@Tremarctos/ Adaptaciones increíbles',
      image: '/animalia/p13.jpg',
      caption: '#Tardígrados #PecesDeHielo #MetabolismoExtremo #Trehalosa #BacteriasSimbióticas #Adaptaciones #Biología #VidaExtrema #NaturalezaSorprendente #RespiraderosHidrotermales'
    },
  ];

  const chromistaData = {
    title: 'Animalia',
    dirImage: '/animalia/p2.jpg',
    subtitle: 'Tremarctos',
    concept: 'Comprender las características principales del Reino Cromista y sus procesos metabólicos.',
    procedure: 'Analizar publicaciones tipo Instagram que expliquen visualmente el metabolismo de los organismos chromistas.',
    attitude: 'Valorar el reino chromista como organismos vitales en los ecosistemas.'
  };

  // Array de textos con títulos, subtítulos y contenido específico para cada publicación
  const textsBetweenPosts = [
    {
      title: "Historia de los animales en la tierra",
      subtitle: "La genética sugiere que los animales surgieron hace 800 millones de años, pero los fósiles más antiguos solo tienen 574. ¿Por qué? La evolución aún guarda secretos bajo la .",
      content: " 800 millones de años, pero los fósiles más antiguos que conocemos son de hace solo 574 millones de años. ¿Por qué esta diferencia? Una posible explicación es que los primeros animales eran pequeños, de cuerpos blandos y frágiles, lo que dificultaba su fosilización. Además, las condiciones en los océanos de aquella época no eran las mejores para preservar sus restos.Sin embargo, en rocas de hace 789 millones de años, donde sí existían las condiciones necesarias para fosilizar organismos delicados, no se han encontrado animales. Esto sugiere que, en realidad, aún no habían evolucionado. Así, aunque los genes indican un origen más antiguo, los fósiles nos dicen que los animales aparecieron más tarde, poco antes de la explosión de vida en el Cámbrico. ¡La ciencia sigue buscando más pistas para resolver este enigma!"
    },
    {
      title: "Clasificación de animales",
      subtitle: "¿Sabías que todos los animales del planeta se agrupan en grandes familias llamadas filos? 🌍",
      content: "Los filos de animales son las agrupaciones más grandes de animales dentro de la taxonomía animal. Existen alrededor de 35 filos, pero los 6 más conocidos son: Artropoda, Chrodata, Nematoda, Mollusca, Anellida, Echinodermata  ",
      style: { fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem', marginTop: '1rem' }
    },
    {
      title: "Arthropoda",
      subtitle: "Con exoesqueletos duros y una diversidad impresionante, los artrópodos dominan el reino animal: ¡desde mariposas hasta cangrejos, su mundo es tan fascinante como complejo!",
      content: " Los artrópodos son el grupo más diverso del reino animal, ¡y hasta el 80% de todas las especies conocidas pertenecen a este filo! Tienen un exoesqueleto duro, patas articuladas y su cuerpo está dividido en segmentos. Aquí entran los insectos (como mariposas y hormigas), los arácnidos (arañas y escorpiones), los crustáceos (cangrejos y langostas) y los miriápodos (ciempiés). Muchos experimentan metamorfosis, cambiando completamente de forma durante su vida.",
      style: { fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', marginTop: '1rem' }
    },
    {
      title: "Chordata",
      subtitle: "Desde tiburones hasta humanos, los cordados comparten una historia común con notocorda, cordón nervioso dorsal y branquias, ¡la diversidad de la vida en su máxima expresión!",
      content: "Los cordados son animales que, en alguna etapa de su vida, tienen una estructura llamada notocorda, un cordón nervioso dorsal y hendiduras branquiales. Este grupo incluye a los vertebrados, como peces, anfibios, reptiles, aves y mamíferos (¡incluyéndonos a los humanos!). Algunos, como los tiburones, tienen esqueletos de cartílago, mientras que otros, como las águilas o los leones, tienen huesos fuertes y sistemas nerviosos muy desarrollados.",
      style: { fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', marginTop: '1rem' }
    },
    {
      title: "Nematoda",
      subtitle: "Los nematodos, pequeños gusanos redondos, juegan un papel clave en la naturaleza como descomponedores, aunque algunos pueden afectar la salud de plantas y animales ",
      content: "Los nematodos, también llamados gusanos redondos, son pequeños y tienen cuerpos alargados y cilíndricos. Algunos viven en el suelo o en el agua, mientras que otros son parásitos de plantas, animales e incluso humanos (como las lombrices intestinales). Aunque muchos son microscópicos, pueden causar enfermedades, pero también son importantes para descomponer materia orgánica en la naturaleza.",
      style: { fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem', marginTop: '1rem' }
    },
    {
      title: "Mollusca",
      subtitle: "Desde los inteligentes pulpos que cambian de color hasta los mejillones que filtran el agua.",
      content: " Los moluscos son animales de cuerpo blando que, en muchos casos, están protegidos por una concha dura. Incluyen a los caracoles (gasterópodos), los pulpos y calamares (cefalópodos) y los mejillones y almejas (bivalvos). Algunos, como el pulpo, son muy inteligentes y pueden cambiar de color para camuflarse, mientras que otros, como los mejillones, filtran alimento del agua.",
      style: { fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem', marginTop: '1rem' }
    },
    {
      title: "Annelida",
      subtitle: "Son gusanos segmentados que juegan un papel vital en la salud del suelo y los ecosistemas acuáticos.",
      content: "Los anélidos son gusanos segmentados, es decir, su cuerpo está dividido en anillos. El más conocido es la lombriz de tierra, que excava túneles en el suelo y ayuda a oxigenarlo, haciendo que las plantas crezcan mejor. Otros, como las sanguijuelas, viven en el agua y algunas se alimentan de sangre, aunque no todas son peligrosas.",
      style: { fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem', marginTop: '1rem' }
    },
    {
      title: "Echinodermata",
      subtitle: "Los equinodermos, como las estrellas de mar, tienen piel espinosa y pueden regenerar partes de su cuerpo.",
      content: " Los equinodermos son animales marinos con piel espinosa y simetría radial (como una estrella). Las estrellas de mar, los erizos y los pepinos de mar pertenecen a este grupo. Tienen un sistema vascular acuático que les permite moverse usando pequeños pies tubulares. ¡Algunas estrellas de mar pueden regenerar un brazo perdido!",
      style: { fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem', marginTop: '1rem' }
    },
    {
      title: "Metabolismo de los animales",
      subtitle: "Los animales obtienen energía al alimentarse y transforman los nutrientes en ATP a través de procesos celulares como la glucólisis y el ciclo de Krebs.",
      content: " Todos los animales son heterótrofos, lo que significa que obtienen su energía y nutrientes al alimentarse de otros seres vivos. Para transformar estos alimentos en energía, sus células realizan procesos como la glucólisis, el ciclo de Krebs y la fosforilación oxidativa en las mitocondrias. La mayoría de los animales son aerobios, es decir, necesitan oxígeno para producir energía eficientemente. Por ejemplo, en los humanos, la glucosa se descompone en pequeñas moléculas que, al final del proceso, generan ATP (la moneda de energía de las células).",
      style: { fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem', marginTop: '1rem' }
    },
    {
      title: "Animales con y sin oxígeno",
      subtitle: "Algunos animales, como los Loricifera, viven sin oxígeno usando fermentación y orgánulos llamados hidrogenosomas.",
      content: " Aunque casi todos los animales dependen del oxígeno, algunos, como ciertas especies de Loricifera, viven en lugares sin oxígeno, como el fondo del mar. Estos seres usan un proceso llamado fermentación para obtener energía, aunque es menos eficiente. En lugar de mitocondrias, tienen orgánulos especiales llamados hidrogenosomas. Esto les permite sobrevivir en ambientes extremos donde otros animales no podrían. ",
      style: { fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem', marginTop: '1rem' }
    },
    {
      title: "Endotermos vs Ectotermos",
      subtitle: "Los animales pueden ser endotermos o ectotermos, según si regulan su temperatura internamente o dependen del ambiente.",
      content: "Los animales se dividen en dos grupos según cómo regulan su temperatura. Los endotermos, como las aves y los mamíferos, generan calor interno y mantienen una temperatura estable, lo que les permite estar activos en cualquier clima. En cambio, los ectotermos, como los reptiles y los peces, dependen del ambiente para calentarse o enfriarse, por lo que su metabolismo es más lento en climas fríos.",
      style: { fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem', marginTop: '1rem' }
    },
    {
      title: "Metabolismo en situaciones extremas",
      subtitle: "Algunos animales ralentizan su metabolismo con estrategias como la hibernación, la estivación o el torpor para sobrevivir.",
      content: "Algunos animales pueden ralentizar su metabolismo para sobrevivir en condiciones difíciles. Por ejemplo, los osos hibernan en invierno, reduciendo su actividad para ahorrar energía. Otros, como los caracoles del desierto, entran en estivación para evitar el calor extremo. Incluso hay aves, como los colibríes, que usan el torpor, bajando su temperatura corporal por la noche para gastar menos energía.",
      style: { fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem', marginTop: '1rem' }
    },
    {
      title: "Adaptaciones increíbles",
      subtitle: "Algunos animales, como los tardígrados y peces de hielo, tienen metabolismos únicos que les permiten sobrevivir en condiciones extremas.",
      content: "Algunos animales tienen habilidades metabólicas únicas. Los tardígrados pueden secarse casi por completo y revivir después, gracias a un azúcar protector llamado trehalosa. Los gusanos de los respiraderos hidrotermales viven sin comer, gracias a bacterias que convierten químicos tóxicos en alimento. Y los peces de hielo antárticos no tienen hemoglobina, pero su sangre fluye mejor en el frío extremo. ¡La naturaleza está llena de sorpresas!",
      style: { fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem', marginTop: '1rem' }
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

export default Animalia;