import React from "react";
import { Typography, Box, Paper, Divider } from "@mui/material";

const Anabolism: React.FC = () => {
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
        Homeostasis
        </Typography>

        <Typography variant="body1" paragraph>
        La homeostasis es la capacidad de los organismos para mantener un equilibrio interno estable frente a los cambios del entorno, mediante mecanismos de autorregulación que controlan variables como la temperatura corporal, el pH, los niveles de azúcar en sangre y las concentraciones de iones y hormonas. Este proceso, presente desde células hasta sistemas complejos, se basa en una retroalimentación negativa y se lleva a cabo a través de tres componentes interdependientes: el receptor, que detecta los cambios; el centro de control, que determina la respuesta; y el efector, que la ejecuta para restaurar el equilibrio. El concepto fue introducido por Walter Cannon en el siglo XX, inspirado en los estudios sobre el medio interno de Claude Bernard, y aunque originalmente se aplicó en biología, también ha sido adoptado por otras disciplinas.
        </Typography>
        
        <Box my={4}>
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/oHrGe_07dAg"
            title="unProfesor. (2014). Qué es el anabolismo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <Typography variant="caption">
          Biología desde cero. (2022). ¿QUÉ ES LA HOMEOSTASIS?
          </Typography>
        </Box>

        <Divider sx={{ my: 4 }} />
        <Paper elevation={0} sx={{ p: 0, mb: 4 }}>
         <Typography variant="h5" fontWeight="bold">
         Puedes aprender mas de homeostasis entrando a la siguiente unidad didactica: 
         </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default Anabolism;