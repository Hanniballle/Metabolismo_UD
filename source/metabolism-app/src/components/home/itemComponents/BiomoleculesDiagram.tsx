// BiomoleculesDiagram.tsx
import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  CardContent,
  Grid,
  Avatar,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import OpacityIcon from "@mui/icons-material/Opacity";
import ScienceIcon from "@mui/icons-material/Science";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import CodeIcon from "@mui/icons-material/Code";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

const sections = [
  {
    title: "Glúcidos o carbohidratos",
    content:
      "Son la principal fuente de energía. Se almacenan como almidón en plantas y glucógeno en animales. También tienen funciones estructurales.",
    icon: <EmojiFoodBeverageIcon />,
    color: "#FFCDD2",
  },
  {
    title: "Lípidos",
    content:
      "Moléculas insolubles en agua. Incluyen fosfolípidos (membranas), triglicéridos (energía) y esteroides (regulación hormonal).",
    icon: <OpacityIcon />,
    color: "#C8E6C9",
  },
  {
    title: "Aminoácidos",
    content:
      "Moléculas con grupo amino y carboxilo. Son los bloques estructurales de las proteínas y participan en múltiples procesos celulares.",
    icon: <ScienceIcon />,
    color: "#BBDEFB",
  },
  {
    title: "Proteínas",
    content:
      "Ejercen funciones enzimáticas, estructurales, de transporte, inmunológicas y contráctiles. Ejemplo: colágeno, hemoglobina.",
    icon: <FitnessCenterIcon />,
    color: "#FFF9C4",
  },
  {
    title: "Ácidos nucleicos",
    content:
      "ADN y ARN contienen y transmiten la información genética. El ADN se replica y se transmite a las células hijas.",
    icon: <CodeIcon />,
    color: "#D1C4E9",
  },
  {
    title: "Vitaminas",
    content:
      "Se requieren en pequeñas cantidades. Son esenciales y su deficiencia o exceso puede causar enfermedades. Algunas actúan como coenzimas.",
    icon: <LocalHospitalIcon />,
    color: "#FFE0B2",
  },
];

const BiomoleculesDiagram = () => {
  return (
    <Box p={4}>
      <Card variant="outlined" sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Cuadro interactivo
          </Typography>
        </CardContent>
      </Card>

      <Grid container spacing={2}>
        {sections.map((section, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Avatar sx={{ bgcolor: section.color }}>{section.icon}</Avatar>
                  <Typography fontWeight="bold">{section.title}</Typography>
                </Stack>
              </AccordionSummary>
              <AccordionDetails sx={{ backgroundColor: section.color + "88" }}>
                <Typography>{section.content}</Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BiomoleculesDiagram;