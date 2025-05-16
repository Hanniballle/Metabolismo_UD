import React from "react";
import { Typography, Box } from "@mui/material";
import MenuGuia from "./MenuGuia";
import MetabolicPathwayDiagram from "./MetabolicPathwayDiagram";
import BombilloEnergia from "./BombilloEnergia";

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
        Guía de inicio 
        </Typography>

        <Typography variant="body1" paragraph>
        Hola, esta es la guía de inicio para que comprendas cómo funciona esta unidad didáctica.
        </Typography>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
        Iconos del menú 
        </Typography>
        <MenuGuia/>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
        Esquemas interactivos 
        </Typography>
        <Typography variant="body1" paragraph>
        En algunos apartados encontrarás esquemas interactivos. Si arrastras el ratón sobre ellos, te darán más información.
        </Typography>
        <MetabolicPathwayDiagram/>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
        Iconos interactivos 
        </Typography>
        <Typography variant="body1" paragraph>
        En algunos apartados encontrarás iconos interactivos. Si arrastras el ratón sobre ellos, te darán más información o tendran acciones.
        </Typography>
        <BombilloEnergia/>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
        Iconos de tareas
        </Typography>
        <Typography variant="body1" paragraph>
        En estos encontraras actividades para complentar tu aprendizaje, tareas, el quiz del reino y la actividad de clase.
        </Typography>

      </Box>
    </Box>
  );
};

export default Anabolism;