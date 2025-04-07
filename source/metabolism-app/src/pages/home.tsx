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

const HomePage: NextPage = () => {

  const [studentName, setStudentName] = useState("");
  const theme = useTheme();

  useEffect(() => {
    setStudentName(localStorage.getItem("studentName") ?? "");
  }, []);

  const sideBarItems = [
    { text: "Inicio", icon: <HomeOutlinedIcon /> },
    { text: "Buscar", icon: <YardOutlinedIcon /> },
    { text: "Reinos", icon: <SearchOutlinedIcon /> },
    { text: "Juegos", icon: <VideogameAssetOutlinedIcon /> },
    { text: "Mas", icon: <BookOutlinedIcon /> },
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
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>
          <Box sx={{ width: 90, alignItems: "center", justifyContent: "center", display: "flex" }}>
            <Typography variant="h3" sx={{ fontFamily: "var(--font-dancing-script)", color: "black" }}>
              M
            </Typography>
          </Box>
  
          <Box>
            <List>
              {sideBarItems.map((item, index) => (
                <ListItem button key={index} sx={{ flexDirection: "column", display: "flex", justifyContent: "center", paddingY: 2 }}>
                  <ListItemIcon sx={{ color: '#01609C', minWidth: "auto" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} sx={{ color: '#01609C', textAlign: "center", marginTop: 1, fontFamily: "var(--font-geist-mono)" }} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
  
        <Box sx={{ width: 90, alignItems: "center", justifyContent: "center", display: "flex" }}>
          <UpnLogo />
        </Box>
      </Box>

      <Box sx={{ marginLeft: "70px", flexGrow: 1, position: "relative" }}>
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: "70px",
            right: 0,
            height: "70px",
            bgcolor: "white",
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: 3,
            boxShadow: 1
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
