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
    { text: "Home", icon: <HomeOutlinedIcon /> },
    { text: "Search", icon: <YardOutlinedIcon /> },
    { text: "Science", icon: <SearchOutlinedIcon /> },
    { text: "Videogame", icon: <VideogameAssetOutlinedIcon /> },
    { text: "Book", icon: <BookOutlinedIcon /> },
  ];

  const feedData = [
    {
      text: "Beautiful Sunset",
      image: "https://source.unsplash.com/400x300/?sunset",
      color: "#ff9800",
      height: 300,
    },
    {
      text: "Mountain View",
      image: "https://source.unsplash.com/400x300/?mountain",
      color: "#4caf50",
      height: 300,
    },
    {
      text: "City Lights",
      image: "https://source.unsplash.com/400x300/?city",
      color: "#3f51b5",
      height: 300,
    },
    {
      text: "Ocean Waves",
      image: "https://source.unsplash.com/400x300/?ocean",
      color: "#2196f3",
      height: 300,
    },
    {
      text: "Desert Dunes",
      image: "https://source.unsplash.com/400x300/?desert",
      color: "#ff5722",
      height: 300,
    },
    {
      text: "Green Forest",
      image: "https://source.unsplash.com/400x300/?forest",
      color: "#2e7d32",
      height: 300,
    },
  ];

  return (
    <Box sx={{ display: "flex", height: "100vh", backgroundColor: "#f2f2f2" }}> 
      <Box
        sx={{
          height: "100vh",
          width: 100,
          bgcolor: "#ffffff",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between"}}>
            <Box sx={{width: 100, alignItems: "center", justifyContent: "center", display: "flex"}}>
                <Typography variant="h3" sx={{ 
                    fontFamily: "var(--font-dancing-script)",
                    color: "black",
                    }}>
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
        
        <Box sx={{width: 100, alignItems: "center", justifyContent: "center", display: "flex"}}>
            <UpnLogo />
        </Box>

      </Box>
      <Divider orientation="vertical" variant="middle" flexItem />
      <Box display="flex" flexDirection="column" alignItems="center" mt={8} sx={{ flexGrow: 1, backgroundColor: "white" }}>
        <Typography
          variant="h1"
          sx={{ fontFamily: "var(--font-dancing-script)" }}
        >
          Bienvenido a Metabolismo {studentName}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "var(--font-geist-mono)",
            lineHeight: "24px",
          }}
        >
          Esta es la página de inicio.
        </Typography>
        <Box>
            <FeedGrid/>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
