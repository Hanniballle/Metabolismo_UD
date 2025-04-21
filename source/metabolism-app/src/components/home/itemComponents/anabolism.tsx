import React from "react";
import { Typography, Box, Paper, Divider } from "@mui/material";
import MetabolismRiddleGame from "./MetabolismRiddleGame";
import PhotosynthesisDiagram from "./PhotosynthesisDiagram";
import AnabolismDiagram from "./AnabolismDiagram";
import { SectionComponentProps } from "../detailView";
import ReturnButton from "../returnButton";

const Anabolism: React.FC<SectionComponentProps> = ({onBack}) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#fff",
        px: 2,
        py: 4,
      }}
    >
      <Box maxWidth="900px" mx="auto">
        <ReturnButton onBack={onBack} />
        <Typography variant="h2" fontWeight="bold" gutterBottom>
        Anabolismo y Catabolismo
        </Typography>

        <Typography variant="body1" paragraph>
        Son dos procesos metabólicos opuestos que ocurren en las células de los seres vivos; juntos forman el metabolismo: el catabolismo proporciona la energía que el anabolismo necesita para construir.
        </Typography>
        <AnabolismDiagram/>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
        Anabolismo
        </Typography>

        <Typography variant="body1" paragraph>
        El anabolismo es la parte del metabolismo encargada de la síntesis de moléculas orgánicas complejas a partir de compuestos más simples, proceso que requiere energía y poder reductor. También llamado biosíntesis, es fundamental para la formación de componentes celulares como proteínas, y permite la construcción de nuevas células. Aunque opuesto al catabolismo, ambos procesos actúan de forma complementaria dentro del metabolismo.
        </Typography>
        
        <Box my={4}>
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/MVs7-oNzGgI"
            title="unProfesor. (2014). Qué es el anabolismo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <Typography variant="caption">
          unProfesor. (2014). Qué es el anabolismo.
          </Typography>
        </Box>

        <Divider sx={{ my: 4 }} />
        <Paper elevation={0} sx={{ p: 0, mb: 4 }}>
         <Typography variant="h5" fontWeight="bold">
         Algunas rutas anabólicas
         </Typography>
        </Paper>

        <Paper elevation={0} sx={{ p: 0, mb: 4 }}>
          <Typography variant="h5" fontWeight="bold">
          Fotosíntesis
          </Typography>
          <Typography variant="body1" paragraph>
          La fotosíntesis es un proceso químico mediante el cual los organismos fotoautótrofos, como plantas, algas y ciertas bacterias, transforman materia inorgánica en materia orgánica utilizando la energía solar. Esta energía se almacena inicialmente en moléculas como el ATP y el NADPH, y luego se utiliza para sintetizar carbohidratos a partir del dióxido de carbono. Este proceso ocurre en los cloroplastos, estructuras presentes en las células vegetales que contienen clorofila. Existen dos tipos de fotosíntesis: la oxigénica, que libera oxígeno (propia de plantas, algas y cianobacterias), y la anoxigénica, que libera azufre (realizada por ciertas bacterias). La fotosíntesis es esencial para la vida en la Tierra, ya que produce la biomasa que sostiene las cadenas alimentarias y fija cada año alrededor de 100.000 millones de toneladas de carbono. como se muestra en la Figura 2.
          </Typography>
          <Divider sx={{ my: 4 }} />
          <PhotosynthesisDiagram/>
          <Divider sx={{ my: 4 }} />
          <Typography variant="body2" paragraph>
          Figura 2. Luz + CO₂ + Agua → Glucosa + Oxígeno.
          </Typography>
          <Divider sx={{ my: 4 }} />

          <Typography variant="h5" fontWeight="bold" gutterBottom>
          Biosíntesis proteica
          </Typography>
          <Typography variant="body1" paragraph>
          La biosíntesis de proteínas o síntesis de proteínas es el proceso anabólico mediante el cual se forman las proteínas. El proceso consta de dos etapas, la traducción del ARN mensajero, mediante el cual los aminoácidos del polipéptido son ordenados de manera precisa a partir de la información contenida en la secuencia de nucleótidos del ADN, y las modificaciones postraduccionales que sufren los polipéptidos así formados hasta alcanzar su estado funcional.
          </Typography>

          <Typography variant="h5" fontWeight="bold" gutterBottom>
          Síntesis de ácidos nucleicos (ADN y ARN)
          </Typography>
          <Typography variant="body1" paragraph>
          La síntesis de ácidos nucleicos es un proceso anabólico fundamental mediante el cual las células construyen ADN (ácido desoxirribonucleico) y ARN (ácido ribonucleico) a partir de nucleótidos, que son sus unidades básicas. Este proceso es esencial para la replicación genética, la expresión de genes y la transmisión de información hereditaria.
          </Typography>

          <Typography variant="h5" fontWeight="bold" gutterBottom>
          Gluconeogénesis (síntesis de glucosa)
          </Typography>
          <Typography variant="body1" paragraph>
          La gluconeogénesis es una ruta metabólica anabólica que permite la síntesis de glucosa a partir de precursores no glucídicos, como aminoácidos (excepto leucina y lisina), lactato, piruvato, glicerol y ciertos intermediarios del ciclo de Krebs. Los ácidos grasos de cadena impar pueden aportar carbono gluconeogénico, pero los de cadena par no. Esta vía se activa especialmente cuando se agotan las reservas de glucógeno hepático (aproximadamente entre 10 y 18 horas de ayuno). La gluconeogénesis ocurre principalmente en el hígado (y en menor medida en los riñones) y es esencial para mantener los niveles de glucosa, sobre todo en tejidos que dependen de ella como el cerebro, eritrocitos, riñón, córnea y músculos en ejercicio intenso.
          </Typography>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
          Síntesis de lípidos y ácidos grasos
          </Typography>
          <Typography variant="body1" paragraph>
          Los ácidos grasos son biomoléculas muy importantes para los seres vivos, se lleva a cabo en el citoplasma y citosol. Son los principales constituyentes de los triglicéridos (aceites y grasas, que actúan como reserva energética) y de los fosfolípidos (que forman el armazón de las membranas celulares). Su biosíntesis es, pues, de crucial importancia para todos los organismos. El principal precursor de los ácidos grasos es el malonil-CoA, una molécula que aporta dos de sus tres átomos de carbono al esqueleto carbonado del ácido graso en crecimiento. El malonil-CoA proviene, a su vez, del acetil-CoA. Todas las reacciones de síntesis de ácidos grasos tienen lugar en el citosol de las células. 
          </Typography>
        </Paper>

        <Divider sx={{ my: 4 }} />
        <Typography variant="h3" fontWeight="bold" gutterBottom>
        Catabolismo
        </Typography>
        <Typography variant="body1" paragraph>
        Es la parte del proceso metabólico que consiste en la degradación de nutrientes orgánicos transformándolos en productos finales simples, con el fin de extraer de ellos energía química útil para la célula . La energía liberada por las reacciones catabólicas es usada en la síntesis del ATP. 
          </Typography>
          <Box my={4}>
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/EEP09Y8jM4A"
            title="unProfesor. (2014). Qué es el catabolismo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <Typography variant="caption">
          unProfesor. (2014). Qué es el catabolismo.
          </Typography>
        </Box>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Algunas rutas catabólicas
          </Typography>
        <Paper elevation={0} sx={{ p: 0, mb: 4 }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
          Glucólisis (o glicólisis)
          </Typography>
          <Typography variant="body1" paragraph>
          La glucólisis es una ruta metabólica encargada de oxidar la glucosa para obtener energía, mediante una serie de 10 reacciones enzimáticas que convierten una molécula de glucosa en dos de piruvato. Este proceso puede ocurrir tanto en ausencia como en presencia de oxígeno, y es la primera etapa del catabolismo de los carbohidratos. 
          </Typography>

          <Typography variant="h5" fontWeight="bold" gutterBottom>
          Cadena de transporte de electrones (fosforilación oxidativa)
          </Typography>
          <Typography variant="body1" paragraph>
          La fosforilación oxidativa es un proceso metabólico esencial y altamente eficiente mediante el cual las células producen ATP utilizando la energía liberada por la oxidación de nutrientes. Ocurre en dos etapas: primero, la cadena de transporte de electrones genera un gradiente de protones a través de una membrana; luego, la enzima ATP sintasa utiliza esa energía para sintetizar ATP. Este mecanismo produce la mayor parte del ATP celular y está presente en casi todos los organismos. Aunque es vital, también genera radicales libres que pueden dañar células, aunque cumplen funciones en la señalización. Además, ciertas proteínas pueden desacoplar este proceso para generar calor, y muchas toxinas lo inhiben al actuar sobre sus enzimas clave..
          </Typography>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
          Fermentación
          </Typography>
          <Typography variant="body1" paragraph>
          La fermentación es un proceso catabólico anaeróbico (sin oxígeno) caracterizado por una oxidación incompleta de compuestos orgánicos, en el cual el aceptor final de electrones del NADH es un derivado del sustrato oxidado, como el piruvato o el acetaldehído. Descubierta por Louis Pasteur, es común en microorganismos como bacterias y levaduras, aunque también ocurre en algunas células animales, como los eritrocitos o el tejido muscular en condiciones de baja oxigenación. No involucra mitocondrias ni cadena respiratoria y es energéticamente poco eficiente, ya que solo genera 2 ATP por molécula de glucosa, en contraste con los 36–38 del metabolismo aeróbico. En la industria, también puede producirse una fermentación oxidativa incompleta en presencia de oxígeno, como en la producción de ácido acético. 
          </Typography>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
          β-oxidación de ácidos grasos
          </Typography>
          <Typography variant="body1" paragraph>
          La beta oxidación es un proceso catabólico en el que los ácidos grasos se descomponen mediante la eliminación sucesiva de pares de átomos de carbono, generando unidades de acetil-CoA, que luego ingresan al ciclo de Krebs para producir energía en forma de ATP. Este proceso consta de cuatro reacciones recurrentes que también producen NADH y FADH2, que participan en la cadena respiratoria. Antes de la oxidación, los ácidos grasos deben activarse con coenzima A y atravesar la membrana mitocondrial interna, que es impermeable a ellos. 
          </Typography>
        </Paper>
        <Divider sx={{ my: 4 }} />
        <Typography variant="h3" fontWeight="bold" gutterBottom>
        Ciclo de Krebs, una ruta anfibólica
        </Typography>
        <Typography variant="body1" paragraph>
        El ciclo de Krebs (o ciclo del ácido cítrico) es una ruta metabólica clave en la respiración celular aeróbica, donde se oxida el acetil-CoA derivado de glúcidos, lípidos y proteínas para liberar energía en forma de ATP y dióxido de carbono. Este proceso tiene lugar en la matriz mitocondrial de las células eucariotas y genera compuestos como el NADH, que se utiliza en otras reacciones bioquímicas. Además, el ciclo de Krebs proporciona precursores para la síntesis de aminoácidos y otras biomoléculas, lo que lo convierte en una vía anfibólica (catabólica y anabólica). El ciclo fue descubierto por Hans Adolf Krebs en 1937, quien recibió el Premio Nobel por este hallazgo, y establece la segunda etapa del metabolismo oxidativo, que comienza con la formación de acetil-CoA y termina con la fosforilación oxidativa para generar ATP.
          </Typography>
          <Typography variant="caption" color="textSecondary">
        Fuentes: LibreTexts Español – Bioenergética: Termodinámica y Enzimas. Khan Academy.
        </Typography>
      </Box>
      <MetabolismRiddleGame />
    </Box>
  );
};

export default Anabolism;