// PhotosynthesisDiagram.tsx
import React from "react";
import {
  Box,
  Typography,
  Tooltip,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import ForestIcon from "@mui/icons-material/Forest";
import GrassIcon from "@mui/icons-material/Grass";
import CloudIcon from "@mui/icons-material/Cloud";
import AirIcon from "@mui/icons-material/Air";

const Arrow = ({ rotate = 0, color = "black", size = 30 }) => (
  <ArrowDownwardIcon
    sx={{
      transform: `rotate(${rotate}deg)`,
      color,
      fontSize: size,
      mx: 0.5,
    }}
  />
);

const PhotosynthesisDiagram = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 500,
        mx: "auto",
        mt: 4,
        p: 2,
        bgcolor: "#f0f8ff",
        borderRadius: 4,
        boxShadow: 4,
        textAlign: "center",
        position: "relative",
      }}
    >
      {/* Sol */}
      <Box>
        <WbSunnyIcon sx={{ fontSize: 50, color: "gold" }} />
        <Typography variant="body2" sx={{ mb: 1 }}>
          energía de la luz del Sol
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <Arrow rotate={45} color="gold" />
          <Arrow rotate={0} color="gold" />
          <Arrow rotate={-45} color="gold" />
        </Box>
      </Box>

      {/* Iconos centrales: CO2 - glucosa - oxígeno */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          mt: 2,
          mb: 3,
        }}
      >
        {/* CO2 */}
        <Tooltip title="El dióxido de carbono entra por las hojas">
          <Box>
            <CloudIcon sx={{ fontSize: 35, color: "gray" }} />
            <Typography variant="caption">CO₂</Typography>
            <ArrowForwardIcon sx={{ color: "purple", fontSize: 30 }} />
          </Box>
        </Tooltip>

        {/* Glucosa y ATP */}
        <Tooltip title="La planta produce glucosa y ATP a partir de CO₂, agua y luz">
          <Box>
            <Typography variant="h5">🌻</Typography>
            <Typography variant="caption">glucosa y ATP</Typography>
            <ArrowCircleRightOutlinedIcon sx={{ color: "green", fontSize: 35 }} />
          </Box>
        </Tooltip>

        {/* Oxígeno */}
        <Tooltip title="La planta libera oxígeno al ambiente">
          <Box>
            <AirIcon sx={{ fontSize: 35, color: "blue" }} />
            <Typography variant="caption">O₂</Typography>
            <ArrowUpwardIcon sx={{ color: "blue", fontSize: 30 }} />
          </Box>
        </Tooltip>
      </Box>

      {/* Suelo y raíces */}
      <Box
        sx={{
          position: "relative",
          height: 100,
          bgcolor: "#8B4513",
          borderRadius: "0 0 16px 16px",
          px: 2,
          pt: 1,
          color: "white",
        }}
      >
        <Tooltip title="El agua es absorbida por las raíces">
          <Box>
            <Typography variant="caption">agua</Typography>
            <WaterDropIcon sx={{ color: "aqua", fontSize: 25 }} />
            <Arrow rotate={-90} color="aqua" size={25} />
          </Box>
        </Tooltip>
        <Typography variant="caption" sx={{ mt: 1 }}>
          raíces
        </Typography>
        <ForestIcon sx={{ fontSize: 30, color: "lightgreen", mt: 0.5 }} />
        <GrassIcon sx={{ fontSize: 30, color: "lightgreen", mt: -1 }} />
      </Box>
    </Box>
  );
};

export default PhotosynthesisDiagram;