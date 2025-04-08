"use client";
import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Divider from '@mui/material/Divider';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import YardOutlinedIcon from '@mui/icons-material/YardOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import VideogameAssetOutlinedIcon from '@mui/icons-material/VideogameAssetOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import type { NextPage } from "next";
import UpnLogo from "@/components/upnLogo";
import FeedGrid from "@/components/feedGrid";
import { useTheme } from "@mui/material/styles";
import { Tooltip } from "@mui/material";


const HomePage: NextPage = () => {

  const [studentName, setStudentName] = useState("");
  const theme = useTheme();

  useEffect(() => {
    setStudentName(localStorage.getItem("studentName") ?? "");
  }, []);

  const sideBarItems = [
    { text: "Inicio", icon: <HomeOutlinedIcon /> },
    { text: "Reinos", icon: <YardOutlinedIcon /> },
    { text: "Buscar", icon: <SearchOutlinedIcon /> },
    { text: "Juegos", icon: <VideogameAssetOutlinedIcon /> },
    { text: "Más", icon: <BookOutlinedIcon /> },
  ];

  return (
    <Box sx={{ display: "flex", height: "100vh", backgroundColor: "#f2f2f2" }}>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: 65,
          bgcolor: "#ffffff",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <Box sx={{ width: 90, alignItems: "center", justifyContent: "center", display: "flex" }}>
            <Typography variant="h4" sx={{  fontFamily: "var(--font-dancing-script)", color: "#2a7fff" }}>
              M
            </Typography>
          </Box>  
          <Box>
            <List>
              {sideBarItems.map((item, index) => (
                <ListItem button key={index} sx={{ flexDirection: "column", display: "flex", justifyContent: "center", paddingY: 2 }}>
                  <Tooltip title={item.text} placement="right" enterDelay={100} leaveDelay={100} TransitionProps={{ timeout: 300 }} componentsProps={{ tooltip: { sx: { bgcolor: "#2a7fff", color: "#ffffff", fontSize: "0.8rem", borderRadius: 1, boxShadow: 3, px: 1.5, py: 0.5,},},}} > 
                  <ListItemIcon sx={{ color: '#000000', minWidth: "auto" }}>
                    {item.icon}
                  </ListItemIcon>
                  </Tooltip>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Box>

      <Box sx={{ marginLeft: "70px", flexGrow: 1, position: "relative" }}>
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: "60px",
            right: 0,
            height: "65px",
            bgcolor: "white",
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: 4,
          }}
        >
          <Typography variant="h4" sx={{ fontFamily: "var(--font-dancing-script)" }}>
            Hola {studentName} bienvenido a Metabolismo
          </Typography>
        </Box>

        <Box sx={{ marginTop: "50px", padding: 2 }}>
          <FeedGrid />
        </Box>
      </Box>
    </Box>
  );  
};

export default HomePage;
