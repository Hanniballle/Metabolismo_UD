import React from 'react';
import { Box, Typography, Divider, Button } from '@mui/material';
import Post from './bricks/post';
import HeaderKingdom from './bricks/header';

interface ChromistaProps {
  onBack: () => void;
}

const Plantae: React.FC<ChromistaProps> = ({ onBack }) => {

  const posts = [
    {
      title: 'Plantae',
      dirImage: '/plantae/Perfil.jpg',
      subtitle: '@Lepanthes /Las primeras plantas.',
      image: '/plantae/P1.jpg',
      caption: '🌱📜 #HistoriaVerde 🌍🌸'
    },
    {
      title: 'Plantae',
      dirImage: '/plantae/Perfil.jpg',
      subtitle: '@Lepanthes /Tipos de plantas',
      image: '/plantae/Perfil.jpg',
      caption: '🌿🌲 #ViajeVerdePlantae 🌸🍃 /De los musgos a las flores: la evolución vegetal en acción.'
    },
    {
      title: 'Plantae',
      dirImage: '/plantae/Perfil.jpg',
      subtitle: '@Lepanthes /Los briófitos',
      image: 'pstGallery',
      postGallery: [
        '/plantae/P31.jpeg',
        '/plantae/P32.jpg',
        '/plantae/P33.jpeg'
      ],
      isGallery: true,
      caption: '#Alfombras verdes 🌱'
    },
    {
      title: 'Plantae',
      dirImage: '/plantae/Perfil.jpg',
      subtitle: '@Lepanthes /Las plantas vasculares sin semilla ',
      image: 'pstGallery',
      postGallery: [
        '/plantae/P41.jpg',
        '/plantae/P42.jpg',
        '/plantae/P43.jpeg'
      ],
      isGallery: true,
      caption: '#NaturalezaFascinante 🌱'
    },
    {
      title: 'Plantae',
      dirImage: '/plantae/Perfil.jpg',
      subtitle: '@Lepanthes /Gimnospermas  ',
      image: 'pstGallery',
      postGallery: [
        '/plantae/P51.jpeg',
        '/plantae/P52.jpeg',
        '/plantae/P53.jpeg'
      ],
      isGallery: true,
      caption: '#FósilesVivos 🌿'
    },
    {
      title: 'Plantae',
      dirImage: '/plantae/Perfil.jpg',
      subtitle: '@Lepanthes /Angiospermas ',
      image: 'pstGallery',
      postGallery: [
        '/plantae/Pm.jpg',
        '/plantae/Pd.jpeg'
      ],
      isGallery: true,
      caption: '#DiversidadFloral #MonocotiledóneasYEudicotiledóneas'
    },
    {
      title: 'Plantae',
      dirImage: '/plantae/Perfil.jpg',
      subtitle: '@Lepanthes /Metabolismo de plantas',
      image: '/plantae/Ph.jpg',
      caption: '#MetabolismoVegetal #FotosíntesisYRespiración #BotánicaInteligente'
    },
    {
      title: 'Plantae',
      dirImage: '/plantae/Perfil.jpg',
      subtitle: '@Lepanthes /Fotosíntesis',
      image: '/plantae/P9.jpg',
      caption: '#FotosíntesisEnAcción #EnergíaSolar'
    },
    {
      title: 'Plantae',
      dirImage: '/plantae/Perfil.jpg',
      subtitle: '@Lepanthes /Respiración',
      image: '/plantae/P91.jpg',
      caption: '#RespiraciónCelular #EnergíaVegetal #VidaSinPausa'
    },
    {
      title: 'Plantae',
      dirImage: '/plantae/Perfil.jpg',
      subtitle: '@Lepanthes /Metabolismo Secundario ',
      image: 'pstGallery',
      postGallery: [
        '/plantae/P101.jpg',
        '/plantae/P102.jpg',
        '/plantae/P103.jpg',
        '/plantae/P104.jpg'
      ],
      isGallery: true,
      caption: '#MetabolitosSecundarios #QuímicaNatural'
    },
    
  ];

  const chromistaData = {
    title: 'Plantae',
    dirImage: '/plantae/Perfil.jpg',
    subtitle: 'Lepanthes ',
    concept: 'Comprender las características principales del Reino Cromista y sus procesos metabólicos.',
    procedure: 'Analizar publicaciones tipo Instagram que expliquen visualmente el metabolismo de los organismos chromistas.',
    attitude: 'Valorar el reino chromista como organismos vitales en los ecosistemas.'
  };

  // Array de textos con títulos, subtítulos y contenido específico para cada publicación
  const textsBetweenPosts = [
    {
      title: "Las primeras plantas.",
      subtitle: "🌱 Las plantas cambiaron la Tierra para siempre",
      content: "Las primeras plantas surgieron hace 434 millones de años, adaptándose para vivir fuera del agua. Desarrollaron una capa protectora y estomas para no secarse. Hace 300 millones de años aparecieron los primeros bosques gigantes. Tras varias extinciones masivas, las plantas con flores (angiospermas) se volvieron dominantes hace 140 millones de años, creciendo más rápido que otras especies. Hoy existen más de 98,000 especies de plantas con flores. Ellas transformaron el planeta, creando los ecosistemas que conocemos y permitiendo la vida terrestre tal como la vemos ahora. (Servicio Geológico Colombiano, 2018)  ",
      style: { fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', marginTop: '1rem' }
    },
    {
      title: "Tipos de plantas",
      subtitle: "Pequeñas plantas, grandes historias",
      content: "En el reino Plantae existen cuatro grupos principales: los briófitos, que son plantas pequeñas sin tejidos complejos; las vasculares sin semilla, con raíces y hojas pero sin semillas; las gimnospermas, que producen semillas desnudas; y las angiospermas, las más diversas, con flores y frutos. (Nabors, 2006)",
      style: { fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem', marginTop: '1rem' }
    },
    {
      title: "Los briófitos",
      subtitle: "Las briófitas nos muestran que incluso las formas más simples de vida vegetal pueden tener un impacto profundo en los ecosistemas",
      content: "Los briófitos (del griego bryon, «musgo», y phyton, «planta») son un grupo fascinante de plantas pequeñas y antiguas que incluyen las hepáticas (foto #1), los antoceros (foto #2) y los musgos (foto #3). A diferencia de las plantas más evolucionadas, no tienen raíces, flores ni semillas, pero son expertas en sobrevivir en ambientes húmedos, desde bosques hasta rocas. Las hepáticas son plantas pequeñas pero superinteresantes que pertenecen al grupo más antiguo de plantas terrestres. A diferencia de las plantas comunes, no tienen raíces verdaderas ni flores, sino que usan unos filamentos llamados rizoides para sujetarse. Algunas parecen pequeñas hojitas planas, mientras otras tienen estructuras más delgadas. Lo más curioso es que para reproducirse necesitan que el agua lleve sus espermatozoides hasta los óvulos, como si fueran pequeños nadadores. Además, su nombre científico 'Hepática' viene porque algunas especies tienen forma de hígado, ¡y antiguamente la gente pensaba que curaban enfermedades de este órgano! Estas plantitas nos ayudan a entender cómo las primeras plantas lograron adaptarse a la vida fuera del agua. Los antoceros son plantas pequeñas y curiosas que parecen mini cuernos verdes saliendo del suelo. A diferencia de las plantas con flores, no tienen raíces verdaderas ni tallos complejos. Su parte principal es una lámina verde plana (como una hoja mojada) que crece pegada al suelo, y de ella salen unos 'cuernitos' alargados (de 2-5 cm) que producen esporas para reproducirse. Lo más interesante es que estos 'cuernos' crecen desde abajo hacia arriba, como si los estuviéramos estirando con los dedos. Viven en lugares húmedos y tienen una relación especial con bacterias que les ayudan a alimentarse. Los científicos las estudian porque son plantas muy antiguas, parecidas a las primeras que existieron en la Tierra. Los musgos son pequeñas plantas verdes que crecen como suaves alfombras en lugares húmedos. A diferencia de las plantas con flores, no tienen raíces verdaderas, sino unos filamentos llamados rizoides que los sujetan al suelo o a las rocas. Les encantan los ambientes con mucha humedad, como bosques o cerca de arroyos, ¡pero algunos incluso viven en desiertos o bajo el agua! Lo más curioso es que pueden 'resucitar' después de secarse, volviéndose verdes otra vez cuando llueve. Hay tres tipos principales: los musgos de turba (que absorben mucha agua como una esponja), los musgos de roca (que crecen en montañas frías) y los musgos verdaderos (los más comunes, que ves en troncos o piedras). Aunque son pequeñitos, son superimportantes para la naturaleza porque ayudan a formar suelo y son el hogar de muchos insectos. (Nabors, 2006)",
      style: { fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', marginTop: '1rem' }
    },
    {
      title: "Las plantas vasculares sin semilla",
      subtitle: "Las plantas vasculares sin semilla nos recuerdan la increíble adaptabilidad de la vida vegetal a lo largo del tiempo",
      content: "Las plantas vasculares sin semilla incluyen a los Lycophyta (foto #1), Sphenophyta (foto #2) y Pteridophyta (foto #3), grupos fascinantes de plantas antiguas que, aunque hoy son de tamaño pequeño, tienen una historia evolutiva impresionante. Los Lycophyta, como los licopodios, las selaginelas y los isoetes, eran árboles gigantes en el pasado y se reproducen por esporas, con hojas pequeñas llamadas micrófilos. Algunas especies pueden 'resucitar' después de secarse cuando el agua regresa. Las Sphenophyta, o colas de caballo, tienen tallos segmentados y huecos como cañas y hojas diminutas en forma de anillo. Su tallo contiene sílice, lo que antiguamente permitió que se usaran para pulir ollas. Se reproducen por esporas que se dispersan con la ayuda de pelitos (eláteres). Los Pteridophyta, conocidos como helechos, son las plantas vasculares sin semillas más grandes, con hojas grandes llamadas megáfilos que facilitan la fotosíntesis. Se reproducen por esporas en estructuras llamadas esporangios y pueden tener tamaños impresionantes, como los helechos arborescentes tropicales, que alcanzan hasta 6 metros. Aunque estas plantas ya no dominan los bosques como antes, siguen siendo esenciales en los ecosistemas actuales. (Nabors, 2006) ",
      style: { fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', marginTop: '1rem' }
    },
    {
      title: "Gimnospermas",
      subtitle: " Las Gimnospermas, con sus adaptaciones únicas, muestran la increíble resistencia y diversidad de la vida vegetal a lo largo de millones de años.",
      content: "Las Gimnospermas fueron las plantas dominantes en la Era Mesozoica, pero en la Era Cenozoica ya habían sido reemplazadas en muchos ambientes por las plantas con flores. Los cuatro filos de Gimnospermas supervivientes varían mucho en apariencia y en hábitat. Las Coníferas (foto #1) son árboles fascinantes que dominan los bosques fríos del planeta, como los pinos, abetos y secuoyas. Son las reinas del invierno porque sus hojas en forma de aguja (acículas) y su resina las protegen del frío y la sequía. Algunas, como la secuoya 'General Sherman' en California, ¡son los seres vivos más grandes del mundo! Aunque no tienen flores, producen conos (piñas) donde guardan sus semillas: los conos masculinos liberan polen al viento, mientras que los femeninos protegen las semillas hasta que maduran. Su madera blanda es muy usada en construcción, y algunas, como el tejo, hasta tienen compuestos medicinales. Las Cícadas (foto #2) son plantas antiguas y fascinantes que parecen un cruce entre palmeras y helechos gigantes. Pertenecen a las gimnospermas, como los pinos, pero tienen características únicas: sus grandes hojas plumosas crecen en espiral desde un tronco robusto, y producen impresionantes conos (estróbilos) que pueden medir hasta varios metros de largo. A diferencia de la mayoría de las coníferas, las cícadas tienen plantas macho y hembra separadas, y algunas son polinizadas por escarabajos. Lo más sorprendente es que sus espermatozoides tienen flagelos y nadan para fecundar los óvulos, un rasgo primitivo que comparten con los helechos. El Ginkgo (foto #3) es un verdadero fósil viviente y la única especie sobreviviente del filo Ginkgophyta. Con sus distintivas hojas en forma de abanico y bilobuladas, este árbol puede alcanzar hasta 30 metros de altura y es prácticamente idéntico a sus ancestros que vivieron hace 150 millones de años. Sobrevivió gracias a su cultivo en monasterios chinos, donde se valoraba tanto por su belleza como por sus semillas comestibles. A diferencia de la mayoría de las plantas modernas, el Ginkgo tiene sexos separados: hay árboles macho (que producen polen) y hembra (que dan semillas carnosas). Sus espermatozoides nadan, ¡un rasgo primitivo que lo une a helechos y cícadas! Las Gnetophyta son un fascinante grupo de gimnospermas que incluye tres géneros únicos: Ephedra (arbustos desérticos), Gnetum (plantas tropicales con hojas anchas) y Welwitschia (una extraña planta del desierto que solo tiene dos hojas que crecen durante toda su vida). Estas plantas comparten características con las angiospermas, como la presencia de vasos conductores y, en algunos casos, doble fecundación, lo que las convierte en un enlace evolutivo intrigante. Welwitschia, por ejemplo, puede vivir más de mil años en el árido desierto de Namibia, absorbiendo agua de la niebla costera, mientras que Ephedra es conocida por sus propiedades medicinales. (Nabors, 2006) ",
      style: { fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', marginTop: '1rem' }
    },
    {
      title: "Angiospermas plantas con flores",
      subtitle: "🌱 ¡Las flores dominan el mundo vegetal con estilo y variedad!",
      content: "Más del 90% de las especies vegetales en el planeta son plantas con flores, y su diversidad es simplemente asombrosa. Dentro de ellas, encontramos a las monocotiledóneas (foto #1), como el maíz, los lirios y las palmeras, que se caracterizan por tener una sola hoja embrionaria en la semilla, hojas alargadas con venas paralelas, flores con pétalos en múltiplos de tres, raíces finas como cabellos y tallos que no se ensanchan mucho. Por otro lado, están las eudicotiledóneas (foto #2), un grupo más variado que incluye desde rosales y frijoles hasta girasoles. Estas plantas tienen dos hojas embrionarias, hojas con venas en forma de red, flores con pétalos en grupos de cuatro o cinco, raíces profundas como las de la zanahoria, y pueden crecer como árboles robustos, como el roble. Este grupo abarca gran parte de las plantas que vemos en jardines, campos y bosques. ",
      style: { fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', marginTop: '1rem' }
    },
    {
      title: "Metabolismo en plantas",
      subtitle: "🌿 Detrás de cada hoja, hay química que da vida.",
      content: "El metabolismo en el reino Plantae comprende el conjunto de reacciones químicas que permiten a las plantas obtener energía, crecer y desarrollarse. Se divide en metabolismo primario, que incluye el metabolismo anabólico (síntesis de moléculas complejas), donde se encuentra la fotosíntesis, y el metabolismo catabólico (descomposición de moléculas para liberar energía), donde se encuentra la respiración. Además, existe el metabolismo secundario, que abarca la producción de compuestos especializados  ",
      style: { fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', marginTop: '1rem' }
    },
    {
      title: "Fotosíntesis",
      subtitle: "Cada rayo de sol se transforma dentro de una hoja",
      content: "Las algas, como la Chlamydomonas, pueden obtener energía de diferentes maneras. Cuando hay luz y oxígeno, usan la fotosíntesis para crecer. Pero si no hay oxígeno (como en ambientes oscuros o bajo el agua), realizan un proceso llamado fermentación. Durante la fermentación, las algas transforman el almidón que almacenan, en sustancias más simples, como formato, acetato y etanol, liberando también un poco de dióxido de carbono (CO₂) e hidrógeno (H₂). Esto les ayuda a obtener energía sin necesidad de oxígeno. Algunas algas cambian su fermentación si tienen mutaciones. Por ejemplo, si les falta una enzima llamada PFL1, producen más lactato. Otras, si no pueden hacer hidrógeno, generan succinato. Esto muestra que las algas son muy flexibles y pueden adaptar su metabolismo según las condiciones en las que vivan. Así, aunque no tengan oxígeno, siguen obteniendo energía para sobrevivir. (Catalanotti et al., 2013,) ",
      style: { fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', marginTop: '1rem' }
    },
    {
      title: "Respiración",
      subtitle: " Respiran sin parar, incluso cuando el sol se oculta",
      content: "La respiración es un proceso esencial que realizan las plantas, al igual que todos los seres vivos, para obtener energía. A diferencia de la fotosíntesis, que solo ocurre durante el día, la respiración sucede constantemente, incluso de noche. Las plantas absorben oxígeno (O₂) del aire a través de sus hojas y raíces, y utilizan ese oxígeno para descomponer la glucosa —el azúcar que produjeron durante la fotosíntesis— en moléculas más pequeñas. Esta descomposición libera energía en forma de ATP, que la planta usa para crecer, repararse y mantenerse viva. Como resultado, también se generan dióxido de carbono (CO₂) y agua (H₂O) como productos de desecho. La respiración consta de tres fases: la glucólisis, que ocurre en el citoplasma, donde la glucosa se divide en piruvato; el Ciclo de Krebs, que tiene lugar en las mitocondrias y convierte el piruvato en energía; y la cadena de transporte de electrones, donde se produce la mayor cantidad de ATP usando oxígeno.",
      style: { fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', marginTop: '1rem' }
    },
    {
      title: "Metabolismo Secundario",
      subtitle: "Las plantas, además de realizar procesos metabólicos esenciales como la fotosíntesis y la respiración, producen metabolitos secundarios",
      content: "Las plantas, además de realizar funciones básicas como la fotosíntesis y la respiración (metabolismo primario), producen sustancias llamadas metabolitos secundarios, que no son esenciales para su supervivencia pero tienen funciones importantes. Estos compuestos les ayudan a defenderse de insectos, atraer polinizadores con colores y aromas, o protegerse de enfermedades. Algunos son muy útiles para los humanos, como los medicamentos (por ejemplo, la morfina), los perfumes (aceites esenciales de lavanda o menta), los colorantes (como los de las flores) o los sabores (vainilla y canela). Se clasifican en cuatro grupos principales: terpenos (como los aceites esenciales), compuestos fenólicos (como los taninos del té), glicósidos (como los de la digital, usados en medicina) y alcaloides (como la cafeína o la nicotina). Estos productos naturales son muy valiosos en la industria farmacéutica, alimentaria y cosmética.",
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

export default Plantae