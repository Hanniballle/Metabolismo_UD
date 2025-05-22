import React from "react";
import { Typography, Box } from "@mui/material";
import MenuGuia from "./MenuGuia";
import MetabolicPathwayDiagram from "./MetabolicPathwayDiagram";
import BombilloEnergia from "./BombilloEnergia";
import { SectionComponentProps } from "../detailView";
import ReturnButton from "../returnButton";
import SnakeGame from "./snake";

const StartGuide: React.FC<SectionComponentProps> = ({onBack}) => {
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
        <Typography variant="body1" paragraph>
        Es recomendable iniciar por Home y Reinos para dar una contextualización antes de pasar a los juegos.
        </Typography>
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
        Datos historicos 
        </Typography>
        <Typography variant="body1" paragraph>
        Los datos historicos estarán distribuidios en el Home en forma de minijuegos, los puedes encontrar mientras lees.
        </Typography>
        <SnakeGame/>
      </Box>
    </Box>
  );
};

export default StartGuide;