import React from "react";
import { Typography, Box, Paper, Divider } from "@mui/material";
import MetabolicPathwayDiagram from "./MetabolicPathwayDiagram"
import MetabolismDiagram from "./MetabolismDiagram";
import TetrisMetabolism from "./tetris";
const Metabolism: React.FC = () => {
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
        <Typography variant="h3" fontWeight="bold" gutterBottom>
        Metabolismo
        </Typography>

        <Typography variant="body1" paragraph>
        El metabolismo celular se define como el conjunto de reacciones químicas que ocurren en una célula para mantener la vida.
        </Typography>
        
        <Box my={4}>
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/0ItMzG9c4GI?start=623"
            title="La Hiperactina. (2021). Metabolismo: ¿Qué significa realmente?"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <Typography variant="caption">
          La Hiperactina. (2021). Metabolismo: ¿Qué significa realmente?
          </Typography>
        </Box>

        <Divider sx={{ my: 4 }} />
        <Paper elevation={0} sx={{ p: 0, mb: 4 }}>
          <Typography variant="body1" paragraph>
          Una propiedad de los seres vivos, sobre todo, los hace parecer casi milagrosamente diferentes de la materia inerte: crean y mantienen el orden en un universo que tiende siempre a un mayor desorden. Para crear este orden, las células de un organismo vivo deben realizar un flujo incesante de reacciones químicas. En algunas de estas reacciones, pequeñas moléculas orgánicas (aminoácidos, azúcares, nucleótidos y lípidos) se descomponen o modifican para proporcionar las muchas otras moléculas pequeñas que la célula necesita. En otras reacciones, se utilizan pequeñas moléculas para construir una gama enormemente diversa de proteínas, ácidos nucleicos y otras macromoléculas que dotan a los sistemas vivos de todas sus propiedades más distintivas. Cada célula puede considerarse una diminuta fábrica química que realiza millones de reacciones por segundo. 
          </Typography>
          <TetrisMetabolism/>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
          El metabolismo celular está organizado por enzimas.
          </Typography>
          <Typography variant="body1" paragraph>
          Las reacciones químicas que lleva a cabo una célula normalmente se producen a una velocidad apreciable solo a temperaturas mucho más altas que las existentes en su interior. Por esta razón, cada reacción requiere un aumento específico de la reactividad química. Este requisito es crucial, ya que permite a la célula controlar su química. El control se ejerce mediante catalizadores biológicos especializados. Estos son casi siempre proteínas llamadas enzimas, aunque también existen catalizadores de ARN, llamados ribozimas. Cada enzima acelera o cataliza solo uno de los muchos tipos de reacciones posibles que una molécula en particular puede experimentar. Las reacciones catalizadas por enzimas se conectan en serie, de modo que el producto de una reacción se convierte en el material de partida, o sustrato, para la siguiente (Figura 1). Las largas vías de reacción lineales se conectan entre sí, formando un laberinto de reacciones interconectadas que permiten a la célula sobrevivir, crecer y reproducirse.
          </Typography>
          <MetabolicPathwayDiagram />
          <Typography variant="body2" paragraph>
          Cómo un conjunto de reacciones catalizadas por enzimas genera una vía metabólica. Cada enzima cataliza una reacción química específica, sin modificar la enzima. En este ejemplo, un conjunto de enzimas que actúan en serie convierte la molécula A en la molécula F, formando así una vía metabólica. 
          </Typography>
          <Typography variant="body1" paragraph>
          En las células se producen dos corrientes opuestas de reacciones químicas: (1) las vías catabólicas descomponen los alimentos en moléculas más pequeñas, generando así tanto una forma útil de energía para la célula como algunas de las moléculas pequeñas que esta necesita como componentes básicos; (2) las vías anabólicas o biosintéticas utilizan las moléculas pequeñas, además de la energía obtenida por el catabolismo, para impulsar la síntesis de las demás moléculas que forman la célula. En conjunto, estos dos conjuntos de reacciones constituyen el metabolismo celular (Figura 2). 
          </Typography>
          <MetabolismDiagram/>
        </Paper>
          <Typography variant="caption" color="textSecondary">
        Fuentes: LibreTexts Español – Bioenergética: Termodinámica y Enzimas. Khan Academy.
        </Typography>
      </Box>
    </Box>
  );
};

export default Metabolism;