import React from 'react';
import { Box, Typography, Divider, Button } from '@mui/material';
import Post from './bricks/post';
import HeaderKingdom from './bricks/header';
import Link from '@mui/material/Link';

interface ChromistaProps {
  onBack: () => void;
}

const Fungi: React.FC<ChromistaProps> = ({ onBack }) => {

  const posts = [
    {
      title: 'Fungi',
      dirImage: '/fungi/av.jpeg',
      subtitle: '@Amanita/ El origen mismo de los hongos ( Parte 1) ',
      image: '/fungi/p1.jpg',
      caption: '#Hongos #EucariotasCorona #Evolución #Chytridiomycota #BiologíaEvolutiva #AncestroComún #Multicelulares #HistoriaDeLaVida #OrganismosEucariotas #ReinoFungi'
    },
    {
      title: 'Fungi',
      dirImage: '/fungi/av.jpeg',
      subtitle: '@Amanita/ El origen mismo de los hongos ( Parte 2) ',
      image: '/fungi/p2.jpg',
      caption: '#Hongos #Evolución #Micorrizas #Glomeromycota #ColonizaciónTerrestre #Fósiles #PlantasAntiguas #RhynieChert #CoEvolución #ReinoFungi #BiologíaEvolutiva'
    },
    {
      title: 'Fungi',
      dirImage: '/fungi/av.jpeg',
      subtitle: '@Amanita/ Podemos clasificar los hongos por su tamaño  ',
      image: 'pstGallery',
      postGallery: [
        '/fungi/p31.jpg',
        '/fungi/p32.jpg',
      ],
      isGallery: true,
      caption: '#Microhongos #Macrohongos #Levaduras #Mohos #Setas #Champiñones #Hongos #ReinoFungi #Biología #Fungicultura #Microscopio #Naturaleza'
    },
    {
      title: 'Fungi',
      dirImage: '/fungi/av.jpeg',
      subtitle: '@Amanita/ podemos clasificar los hongos por la forma en la que se alimentan',
      image: 'pstGallery',
      postGallery: [
        '/fungi/p42.jpg',
        '/fungi/p43.jpeg',
      ],
      isGallery: true,
      caption: '#Hongos #Saprófitos #Parásitos #Simbióticos #Micorrizas #Líquenes #Descomposición #RelacionesEcológicas #ReinoFungi #Biología #Nutrientes #Ecosistemas'
    },
    {
      title: 'Fungi',
      dirImage: '/fungi/av.jpeg',
      subtitle: '@Amanita/ El reino fungí incluye 4 phyla    ',
      image: 'pstGallery',
      postGallery: [
        '/fungi/p51.jpg',
        '/fungi/p52.jpg',
        '/fungi/p53.jpg'
      ],
      isGallery: true,
      caption: '#Hongos #Ascomycota #Basidiomycota #Glomeromycota #Zygomycota #Micorrizas #Líquenes #FilosFúngicos #ReinoFungi #Biología #EspeciesFúngicas #Simbiosis #Descomponedores #GenéticaFúngica #Biotecnología'
    },
    {
      title: 'Fungi',
      dirImage: '/fungi/av.jpeg',
      subtitle: '@Amanita/ Metabolismo, introducción',
      image: '/fungi/p31.jpg',
      caption: '#Hongos #Ascomycota #Basidiomycota #Glomeromycota #Zygomycota #Micorrizas #Líquenes #FilosFúngicos #ReinoFungi #Biología #EspeciesFúngicas #Simbiosis #Descomponedores #GenéticaFúngica #Biotecnología'
    },
    {
      title: 'Fungi',
      dirImage: '/fungi/av.jpeg',
      subtitle: '@Amanita/ Las dos partes del metabolismo  ',
      image: 'pstGallery',
      postGallery: [
        '/fungi/p71.jpg',
        '/fungi/p72.jpg',
        '/fungi/p73.jpg'
      ],
      isGallery: true,
      caption: '#MetabolismoFúngico #MetabolismoPrimario #MetabolismoSecundario #Hongos #Antibióticos #Toxinas #Pigmentos #Penicilina #ReinoFungi #BiologíaCelular #AdaptaciónFúngica'
    },
    {
      title: 'Fungi',
      dirImage: '/fungi/av.jpeg',
      subtitle: '@Amanita/ Como funciona  ',
      image: '/fungi/p8.jpg',
      caption: '#Hongos #EnergíaFúngica #Glucólisis #RespiraciónCelular #Fermentación #Glucógeno #Lípidos #MetabolismoSecundario #Antibióticos #Toxinas #Pigmentos #ReinoFungi #BiologíaCelular'
    },
  ];

  const chromistaData = {
    title: 'Fungi',
    dirImage: '/fungi/av.jpeg',
    subtitle: 'Amanita',
    concept: 'En este perfil encontraras las características principales del Reino Fungi y sus procesos metabólicos.',
    procedure: 'Se busca potenciar la comprensión lectora e interpretativa, así como el trabajo en equipo, fomentando la participación activa y la construcción colaborativa de ideas a través de juegos.',
    attitude: 'En el apartado de juegos encontrarás actividades relacionadas con el Reino Fungi, y al final de este perfil, la actividad final.'
  };

  // Array de textos con títulos, subtítulos y contenido específico para cada publicación
  const textsBetweenPosts = [
    {
      title: "El origen mismo de los hongos ( Parte 1)",
      subtitle: "Los hongos están más emparentados con los animales que con las plantas y surgieron hace unos mil millones de años en ambientes acuáticos.",
      content: "Los hongos, junto con los animales y las plantas, forman parte de los eucariotas corona, los organismos multicelulares más complejos. Estos grupos divergieron hace aproximadamente mil millones de años. Aunque antes se asociaban con las plantas, ahora se sabe que los hongos están más relacionados con los animales, ya que comparten un ancestro común más reciente.Los hongos más antiguos probablemente eran organismos acuáticos, apareciendo hace alrededor de mil millones de años. Dependían del agua para su reproducción y movimiento, como lo demuestran los Chytridiomycota, un grupo de hongos que aún tiene células flageladas (con colas para nadar). (Deacon,2006) ",
      style: { fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', marginTop: '1rem' }
    },
    {
      title: "El origen mismo de los hongos ( Parte 2)",
      subtitle: "Los hongos ayudaron a las primeras plantas a colonizar la tierra firme mediante asociaciones simbióticas como las micorrizas.",
      content: "La evidencia fósil más antigua de hongos data del período Ordovícico, hace entre 460 y 455 millones de años. Sin embargo, es probable que existieran desde hace mil millones de años. Durante el Devónico (hace 417–354 millones de años), los hongos ya estaban en la tierra, asociados con las primeras plantas, como los briófitos (musgos y hepáticas). Los hongos fueron clave en la colonización de la tierra firme por las plantas. Fósiles del Rhynie Chert en Escocia muestran hongos del grupo Glomeromycota formando micorrizas arbusculares, una asociación simbiótica que ayudó a las plantas a absorber nutrientes y agua. Esto sugiere que hongos y plantas co-evolucionaron. Hace unos 500 millones de años, los hongos experimentaron una rápida diversificación, coincidiendo con la colonización de la tierra por las plantas y la formación de los primeros continentes. (Deacon,2006) ",
      style: { fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem', marginTop: '1rem' }
    },
    {
      title: "Podemos clasificar los hongos por su tamaño",
      subtitle: "Los microhongos son invisibles a simple vista, mientras que los macrohongos, como las setas, forman estructuras visibles.",
      content: "Existen dos tipos micro hongos y macro hongos Micro hongos: Son hongos tan pequeños que no los podemos ver a simple vista. Necesitamos un microscopio para observarlos. Algunos ejemplos son las levaduras, que se usan para hacer pan o cerveza, y los mohos, que crecen en alimentos como el pan o la fruta. Macro hongos: Son hongos que sí podemos ver fácilmente porque forman estructuras grandes, como las setas o los champiñones. Estos hongos crecen en el suelo, en troncos de árboles o en lugares húmedos. ",
      style: { fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', marginTop: '1rem' }
    },
    {
      title: "Podemos clasificar los hongos por la forma en la que se alimentan",
      subtitle: "Los hongos pueden ser saprófitos, parásitos o simbióticos, según cómo obtienen sus nutrientes y se relacionan con otros seres vivos.",
      content: "Existen 3 tipos Saprofitos parásitos y simbióticos Saprofitos: Un hongo saprofito es un tipo de hongo que se alimenta de materia orgánica muerta, como restos de plantas o animales. Estos hongos son importantes porque descomponen la materia orgánica en descomposición, liberando nutrientes inorgánicos al suelo, que luego pueden ser utilizados por las plantas para crecer. Parásitos: Un hongo parásito es un tipo de hongo que vive a expensas de otro organismo vivo, llamado hospedero, causándole daño. Estos hongos pueden infectar plantas, animales, y se benefician de los nutrientes que obtienen del hospedero, mientras que este último sufre enfermedades o daños. Simbióticos: Un hongo simbiótico es un hongo que vive en estrecha relación con otro organismo, ya sea una planta, un alga o incluso un animal. En algunos casos, esta relación es beneficiosa para ambos, como en los líquenes, donde el hongo y un alga trabajan juntos: el hongo protege al alga y le da agua, mientras que el alga produce alimento mediante la fotosíntesis. También están las micorrizas, donde los hongos ayudan a las plantas a absorber nutrientes del suelo, y a cambio, la planta le da azúcares al hongo. ",
      style: { fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', marginTop: '1rem' }
    },
    {
      title: "El reino fungí incluye 4 phyla",
      subtitle: " Los hongos se agrupan en filos como Ascomycota, Basidiomycota, Glomeromycota y otros, con funciones que van desde descomponer hasta formar simbiosis con plantas.",
      content: "Los principales filos de hongos incluyen grupos con funciones ecológicas y aplicaciones diversas. El filo Ascomycota, conocido como hongos de saco, agrupa especies como levaduras y líquenes, caracterizadas por producir esporas en estructuras llamadas ascos, y desempeñan roles clave en descomposición, simbiosis y biotecnología. El filo Basidiomycota incluye hongos como champiñones y setas, que producen esporas en basidios y pueden ser comestibles, tóxicos o medicinales, además de participar en la formación de micorrizas y el reciclaje de nutrientes. El antiguo filo Zygomycota, hoy dividido en varios subgrupos, comprendía hongos como los mohos del pan, en su mayoría saprótrofos o parásitos sin estructuras complejas. Por último, el filo Glomeromycota está compuesto por hongos que forman micorrizas arbusculares, esenciales para la nutrición de las plantas al facilitar la absorción de nutrientes en una relación mutualista. (Cepero et al., 2012).",
      style: { fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', marginTop: '1rem' }
    },
    {
      title: "Metabolismo, introducción",
      subtitle: "El metabolismo en los hongos incluye procesos primarios para vivir y secundarios que producen compuestos como antibióticos o toxinas.",
      content: "El metabolismo es el conjunto de procesos químicos que ocurren en los hongos, donde se llevan a cabo procesos para obtener energía, crecer y mantenerse vivos. Se divide en dos partes: el metabolismo primario, que produce compuestos básicos como azúcares y aminoácidos necesarios para vivir, y el metabolismo secundario, que crea sustancias especiales como antibióticos, toxinas o pigmentos, que ayudan al hongo a defenderse o adaptarse. Además, el metabolismo tiene dos tipos de reacciones: el anabolismo, y el catabolismo.",
      style: { fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', marginTop: '1rem' }
    },
    {
      title: "Las dos partes del metabolismo",
      subtitle: "El metabolismo primario mantiene al hongo vivo; el secundario le da ventajas como producir antibióticos, toxinas o pigmentos.",
      content: "El metabolismo de los hongos se divide en primario y secundario, cada uno con funciones distintas pero complementarias. El metabolismo primario produce las sustancias esenciales para el crecimiento y la supervivencia del hongo, como aminoácidos, azúcares y lípidos, siendo un proceso común a todos los seres vivos. En cambio, el metabolismo secundario genera compuestos no esenciales para la vida, pero que ofrecen ventajas ecológicas, como antibióticos, toxinas, pigmentos y otras sustancias que les permiten defenderse, competir o adaptarse a su entorno.",
      style: { fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', marginTop: '1rem' }
    },
    {
      title: "Como funciona",
      subtitle: "Los hongos obtienen energía de la glucosa, la almacenan como glucógeno y producen sustancias como antibióticos o alcohol.",
      content: "Los hongos obtienen su energía principalmente a partir de azúcares como la glucosa, que descomponen mediante procesos como la glucólisis y la respiración, produciendo energía de manera eficiente cuando hay oxígeno. En ausencia de oxígeno, pueden recurrir a la fermentación, generando compuestos como alcohol o ácido láctico. Para tiempos de escasez, almacenan energía en forma de glucógeno o lípidos. Además, mediante el metabolismo secundario, producen sustancias especiales como antibióticos, toxinas y pigmentos, que les permiten defenderse, competir y adaptarse a distintos entornos.",
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
         <Typography variant="body1" sx={{ mt: 2 }}>
         Recuerda entrar al siguiente enlace:{' '}
          <Link
            href="https://view.genially.com/68028d10e42e89164d8c5e3a/interactive-content-cuanto-sabes-sobre-metabolismo-de-lo-hongos"
            target="_blank"
            rel="noopener"
              >
            ¿Qué aprendiste del Reino Fungi?
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

export default Fungi