import React from 'react';
import { Box, Typography, Divider, Button } from '@mui/material';
import Post from './bricks/post';
import HeaderKingdom from './bricks/header';
import Link from '@mui/material/Link';

interface ChromistaProps {
  onBack: () => void;
}

const Chromista: React.FC<ChromistaProps> = ({ onBack }) => {

  const posts = [
    {
      title: 'Chromista',
      dirImage: '/chromista/avatar.jpg',
      subtitle: '@Turbinaria  /Historia de las chromistas en la tierra ',
      image: '/chromista/evo.jpg',
      caption: '#OrigenDeLasAlgas 🌿🔬 #EndosimbiosisPrimaria #EvoluciónCelular #Cianobacterias #Cloroplastos #BiologíaCelular #VidaMicroscópica #Microbiología #CienciaEsVida'
    },
    {
      title: 'Chromista',
      dirImage: '/chromista/avatar.jpg',
      subtitle: '@Turbinaria /Algas unicelulares y coloniales ',
      image: 'pstGallery',
      postGallery: [
        '/chromista/P21.jpg',
        '/chromista/P22.jpg',
        '/chromista/P23.jpg'
      ],
      isGallery: true,
      caption: '#MundosMicroscópicos🔬🦠 #VidaAcuática🌊💧 #Microalgas🌿🧫 #CienciaVisual🧠👁️ #NaturalezaInvisible🍃🔍 #BiologíaMarina🐚🌊'
    },
    {
      title: 'Chromista',
      dirImage: '/chromista/avatar.jpg',
      subtitle: '@Turbinaria /Algas coloniales ',
      image: '/chromista/P3.jpg',
      caption: '#Algas #Kelp #AlgasMarinas #NatureScience #Biodiversidad #AlgasVerde #AlgasRojas #AlgasPardas #Fotosíntesis #VidaMarina #CienciaNatural #EcoAmigable #MisteriosDeLaNaturaleza'
    },
    {
      title: 'Chromista',
      dirImage: '/chromista/avatar.jpg',
      subtitle: '@Turbinaria  /Fotosintesis ',
      image: '/chromista/P4.jpg',
      caption: '#Algas #FotosíntesisMarina #AdaptacionesÚnicas #EcologíaAcuática #InnovaciónBiológica #EnergíaSolar #BiologíaMarina #VidaBajoElAgua #SostenibilidadMarina #EcosistemasMarinos'
    },
    {
      title: 'Chromista',
      dirImage: '/chromista/avatar.jpg',
      subtitle: '@Turbinaria /Fermentación',
      image: '/chromista/P5.jpg',
      caption: '#Algas #MetabolismoFlexible #Chlamydomonas #Fotosíntesis #Fermentación #Adaptación #EnergíaSinOxígeno #BiologíaMarina #Supervivencia #InnovaciónNatural'
    },
  ];

  const chromistaData = {
    title: 'Chromista',
    dirImage: '/chromista/avatar.jpg',
    subtitle: 'Turbinaria',
    concept: 'En este perfil encontraras las características principales del Reino Chromista y sus procesos metabólicos.',
    procedure: 'Se busca potenciar la comprensión lectora e interpretativa, así como el trabajo en equipo, fomentando la participación activa y la construcción colaborativa de ideas a través de juegos.',
    attitude: 'En el apartado de juegos encontrarás actividades relacionadas con el Reino Chromista, y al final de este perfil, la actividad final.'
  };

  // Array de textos con títulos, subtítulos y contenido específico para cada publicación
  const textsBetweenPosts = [
    {
      title: "Historia de las chromistas",
      subtitle: "El origen de estos microorganismos primitivos",
      content: "Se cree que las primeras algas surgieron mediante un proceso conocido como endosimbiosis primaria, en el que una célula heterótrofa (incapaz de producir su propio alimento) engulló a un procariota fotosintético, similar a las cianobacterias actuales. En lugar de digerirlo, la célula hospedadora lo mantuvo en su interior, estableciendo una relación simbiótica. Con el tiempo, este procariota se transformó en un cloroplasto, rodeado por dos membranas.",
      style: { fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem', marginTop: '1rem' }
    },
    {
      title: "Clasificación de chromistas",
      subtitle: "Euglena, dinoflagelados y diatomeas: belleza oculta bajo el microscopio",
      content: "Las euglenofitas, como la Euglena (foto #1), son organismos microscópicos que habitan en aguas dulces como estanques o charcos. Poseen uno o dos flagelos que les permiten moverse, y muchas tienen cloroplastos para realizar la fotosíntesis, aunque también pueden alimentarse de sustancias orgánicas si no hay luz, lo que las convierte en organismos mixótrofos. Debajo de su membrana tienen una estructura llamada periplasto, que les proporciona forma y flexibilidad para desplazarse entre restos en el agua. Se reproducen asexualmente mediante mitosis. Por otro lado, los dinoflagelados (foto #2) son microorganismos acuáticos que forman parte del plancton y presentan características muy particulares. Muchos tienen placas de celulosa que les dan formas extrañas y dos flagelos que les permiten girar y desplazarse. Algunos realizan fotosíntesis, otros se alimentan de materia orgánica, y varios viven en simbiosis con corales o almejas, ayudándoles a obtener energía solar. Son conocidos por causar las 'mareas rojas', que tiñen el agua y pueden ser peligrosas por las toxinas que algunas especies liberan, afectando a peces y humanos. Además, algunos dinoflagelados son bioluminiscentes y hacen que el mar brille durante la noche. Finalmente, las diatomeas (foto #3) son microalgas que viven en ambientes acuáticos y húmedos, y se destacan por su frústulo, una 'casa' de cristal hecha de sílice con formas geométricas impresionantes. Estas algas son esenciales para el planeta, ya que producen aproximadamente una cuarta parte del oxígeno que respiramos gracias a la fotosíntesis. Algunas flotan en el agua almacenando aceite, mientras que otras se adhieren a superficies o se desplazan con la corriente.",
      style: { fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem', marginTop: '1rem' }
    },
    {
      title: "Algas coloniales",
      subtitle: "Desde el océano hasta la nieve, las algas nos sorprenden con su diversidad",
      content: "Las algas pardas, rojas y verdes forman parte de los grupos más diversos y sorprendentes de algas. Las algas pardas, como el kelp, son algas marinas gigantes que pueden medir hasta 100 metros y viven fijas a rocas o flotando en el océano, usando vejigas llenas de aire para acercarse a la luz. Su color café verdoso se debe a la fucoxantina, un pigmento que les permite capturar luz bajo el agua. Aunque su estructura recuerda a plantas, con 'hojas' (filoides), 'tallos' (cauloides) y 'raíces' (rizoides), no poseen tejidos verdaderos. Las algas rojas, por su parte, son de los grupos más antiguos y versátiles; su coloración (que puede ser roja, rosada, morada o verde) proviene de pigmentos llamados ficobilinas, que les permiten realizar fotosíntesis incluso en las profundidades. Algunas viven adheridas a rocas, otras sobre otras algas o como parásitas, y muchas tienen cuerpos con sustancias gelatinosas como el agar y la carragenina, usadas en alimentos y cosméticos. Incluso hay especies que forman estructuras de carbonato cálcico, como si fueran corales. Por último, las algas verdes comparten un ancestro común con las plantas terrestres y contienen clorofila a y b, además de almacenar almidón. Viven principalmente en agua dulce, pero también se encuentran en ambientes marinos, húmedos o incluso en la nieve. Un ejemplo fascinante es Chlamydomonas nivalis, que tiñe la nieve de rosa o rojo y huele a sandía gracias a pigmentos protectores contra los rayos UV. Además, algunas algas verdes forman líquenes al asociarse con hongos, colaborando mediante fotosíntesis mientras los hongos les dan protección.",
      style: { fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', marginTop: '1rem' }
    },
    {
      title: "Fotosintesis",
      subtitle: "Las algas son expertas en aprovechar cada rayo de sol, usando adaptaciones únicas para prosperar bajo el agua",
      content: "La fotosíntesis en las algas es un proceso fascinante y lleno de adaptaciones especiales. Al igual que las plantas terrestres, las algas usan la energía del sol para transformar dióxido de carbono y agua en alimento (azúcares) y oxígeno, pero lo hacen de formas únicas para sobrevivir en ambientes acuáticos. La mayoría contiene clorofila a, el pigmento principal que captura la luz solar, pero algunas especies han desarrollado herramientas extraordinarias: las ficobilinas (pigmentos rojos y azules) y los ficobilisomas (estructuras que actúan como antenas gigantes) les permiten aprovechar hasta la más mínima luz en aguas profundas. Además, algas como Acaryochloris marina usan clorofila d y f, que pueden absorber luz infrarroja - ¡como tener visión nocturna bajo el agua! Para protegerse del exceso de luz que podría dañarlas, cuentan con un sistema llamado NPQ (enfriamiento de emergencia que disipa el calor sobrante), y para asegurar suficiente CO₂ en el agua, muchas concentran este gas en estructuras especiales llamadas pirenoides. Algunas incluso forman equipos vitales, como las zooxantelas que viven dentro de los corales, aunque cuando el agua se calienta demasiado, esta alianza se rompe causando el preocupante blanqueamiento coralino. Estas increíbles adaptaciones hacen que las algas no solo sean esenciales para producir oxígeno en nuestro planeta, sino también verdaderas maestras de la supervivencia en los ecosistemas acuáticos. (Larkum et al., s.f.,)",
      style: { fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', marginTop: '1rem' }
    },
    {
      title: "Fermentación",
      subtitle: "Las algas, como la Chlamydomonas, se adaptan a su entorno cambiando entre fotosíntesis y fermentación para sobrevivir sin oxígeno",
      content: "Las algas, como la Chlamydomonas, pueden obtener energía de diferentes maneras. Cuando hay luz y oxígeno, usan la fotosíntesis para crecer. Pero si no hay oxígeno (como en ambientes oscuros o bajo el agua), realizan un proceso llamado fermentación. Durante la fermentación, las algas transforman el almidón que almacenan, en sustancias más simples, como formato, acetato y etanol, liberando también un poco de dióxido de carbono (CO₂) e hidrógeno (H₂). Esto les ayuda a obtener energía sin necesidad de oxígeno. Algunas algas cambian su fermentación si tienen mutaciones. Por ejemplo, si les falta una enzima llamada PFL1, producen más lactato. Otras, si no pueden hacer hidrógeno, generan succinato. Esto muestra que las algas son muy flexibles y pueden adaptar su metabolismo según las condiciones en las que vivan. Así, aunque no tengan oxígeno, siguen obteniendo energía para sobrevivir. (Catalanotti et al., 2013,) ",
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
       <Typography variant="body1" sx={{ mt: 2 }}>
         Recuerda entrar al siguiente enlace:{' '}
          <Link
            href="https://view.genially.com/680440189190c659980dfeb0/interactive-content-la-carrera-de-los-chromistas"
            target="_blank"
            rel="noopener"
              >
            ¿Qué aprendiste del Reino Chromista?
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

export default Chromista;