import React, { useState } from "react";
import { Button, Stack } from "@mui/material";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

const BombilloEnergia = () => {
  const [encendido, setEncendido] = useState(false);

  const toggleBombillo = () => {
    setEncendido(!encendido);
  };

  return (
    <Stack spacing={2} alignItems="center">
      {encendido ? (
        <LightbulbIcon style={{ fontSize: 80, color: "#FFD700" }} />
      ) : (
        <LightbulbOutlinedIcon style={{ fontSize: 80, color: "#999" }} />
      )}
      <Button variant="contained" onClick={toggleBombillo}>
        Energía ⚡ 
      </Button>
    </Stack>
  );
};

export default BombilloEnergia;