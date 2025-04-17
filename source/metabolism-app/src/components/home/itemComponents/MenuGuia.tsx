import React from "react";
import { Box, List, ListItem, ListItemIcon, ListItemText, Paper } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PublicIcon from "@mui/icons-material/Public";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MenuBookIcon from "@mui/icons-material/MenuBook";

const MenuGuia = () => {
  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <List>

        <Paper sx={{ mb: 2, backgroundColor: "#f0f4ff", borderRadius: 2 }}>
          <ListItem>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText
              primary="Este es Home, aquí encontrarás todo lo necesario para que entiendas el metabolismo."
            />
          </ListItem>
        </Paper>

        <ListItem>
          <ListItemIcon>
            <PublicIcon />
          </ListItemIcon>
          <ListItemText
            primary="Este es el ícono de reinos, aquí encontrarás todo lo relacionado con metabolismo y los 7 reinos."
          />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <SportsEsportsIcon />
          </ListItemIcon>
          <ListItemText
            primary="Este es el ícono de juegos, aquí encontrarás todas las actividades de esta unidad didáctica en un mismo lugar, también estarán distribuidas por toda la UD."
          />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <MenuBookIcon />
          </ListItemIcon>
          <ListItemText
            primary="En este ícono encontrarás quiénes somos, la bibliografía y la webgrafía que utilizamos para la realización de este proyecto."
          />
        </ListItem>

      </List>
    </Box>
  );
};

export default MenuGuia;