// components/MetabolismDiagram.tsx

import { Box, Typography, Card, CardContent, Tooltip } from "@mui/material";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import BoltIcon from "@mui/icons-material/Bolt";
import ScatterPlotIcon from "@mui/icons-material/ScatterPlot";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const StepCard = ({
  title,
  icon,
  color,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  color: string;
  description: string;
}) => (
  <Tooltip title={description} arrow placement="right">
    <Card
      sx={{
        backgroundColor: color,
        minWidth: 220,
        textAlign: "center",
        boxShadow: 3,
        borderRadius: 4,
        transition: "transform 0.2s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardContent>
        <Typography variant="subtitle1">{title}</Typography>
        <Box mt={1}>{icon}</Box>
      </CardContent>
    </Card>
  </Tooltip>
);

function MetabolismDiagram() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={3} py={5}>
      <Typography variant="h5" gutterBottom>
       Vías metabólicas: catabolismo y anabolismo
      </Typography>

      <StepCard
        title="Moléculas de alimentos"
        icon={<ScatterPlotIcon fontSize="large" />}
        color="#e0f7fa"
        description="Nutrientes complejos como carbohidratos, lípidos y proteínas."
      />

      <ArrowDownwardIcon fontSize="large" />

      <StepCard
        title="Vías catabólicas"
        icon={<Typography variant="caption">Descomponer + Energía</Typography>}
        color="#ffecb3"
        description="Descomponen moléculas grandes en componentes pequeños, liberando energía."
      />

      <Box display="flex" gap={3}>
        <StepCard
          title="Calor perdido"
          icon={<WhatshotIcon color="error" fontSize="large" />}
          color="#ffccbc"
          description="Parte de la energía se disipa como calor en el proceso catabólico."
        />
        <StepCard
          title="Energía Útil"
          icon={<BoltIcon color="success" fontSize="large" />}
          color="#dcedc8"
          description="Energía química disponible (como ATP) para ser usada por la célula."
        />
      </Box>

      <ArrowDownwardIcon fontSize="large" />

      <StepCard
        title="Bloques de construcción para la biosíntesis"
        icon={<AcUnitIcon fontSize="large" />}
        color="#e8f5e9"
        description="Moléculas pequeñas (como aminoácidos) necesarias para construir estructuras celulares."
      />

      <ArrowDownwardIcon fontSize="large" />

      <StepCard
        title="Vías anabólicas"
        icon={<Typography variant="caption">Síntesis</Typography>}
        color="#d1c4e9"
        description="Usan energía para construir moléculas complejas a partir de unidades simples."
      />

      <ArrowDownwardIcon fontSize="large" />

      <StepCard
        title="Moléculas que forman la célula"
        icon={<ScatterPlotIcon fontSize="large" />}
        color="#ffe0b2"
        description="Proteínas, lípidos, ácidos nucleicos y otros componentes que forman estructuras celulares."
      />
    </Box>
  );
}

export default MetabolismDiagram;