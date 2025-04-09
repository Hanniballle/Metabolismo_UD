"use client";
import { useState, useEffect } from "react";
import { Typography, Box, IconButton, Avatar, List, ListItemButton, ListItemIcon } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import YardOutlinedIcon from "@mui/icons-material/YardOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import VideogameAssetOutlinedIcon from "@mui/icons-material/VideogameAssetOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useRouter } from "next/navigation";
import UpnLogo from "@/components/upnLogo";
import FeedGrid from "@/components/feedGrid";
import { Tooltip } from "@mui/material";
import FeedKingdoms from "@/components/feedKingdoms";
import theme from "@/utils/theme"; 

const HomePage: React.FC = () => {
  const [studentName, setStudentName] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string>("Inicio"); // Track selected navigation item
  const router = useRouter();

  useEffect(() => {
    const storedName = localStorage.getItem("studentName");
    if (!storedName) {
      router.push("/login");
    } else {
      setStudentName(storedName);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("studentName");
    router.push("/login");
  };

  const sideBarItems = [
    { text: "Inicio", icon: <HomeOutlinedIcon /> },
    { text: "Reinos", icon: <YardOutlinedIcon /> },
    { text: "Buscar", icon: <SearchOutlinedIcon /> },
    { text: "Juegos", icon: <VideogameAssetOutlinedIcon /> },
    { text: "Más", icon: <BookOutlinedIcon /> },
  ];

  const renderContent = () => {
    switch (selectedItem) {
      case "Inicio":
        return <FeedGrid studentName={studentName!} />;
      case "Reinos":
        return <FeedKingdoms />;
        
      default:
        return (
          <Typography variant="body1" sx={{ mt: 2, fontFamily: "var(--font-geist-mono)" }}>
            Selecciona una opción del menú.
          </Typography>
        );
    }
  };

  if (!studentName) {
    return null; 
  }

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: "65px",
          bgcolor: "white",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <Box sx={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
            <Typography variant="h4" sx={{ fontFamily: "var(--font-dancing-script)", color: "#2a7fff" }}>
              M
            </Typography>
          </Box>

          <Box sx={{ height: "88vh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <List>
              {sideBarItems.map((item, index) => (
                <ListItemButton
                  key={index}
                  selected={selectedItem === item.text}
                  sx={{
                    flexDirection: "column",
                    display: "flex",
                    justifyContent: "center",
                    paddingY: 2,
                    bgcolor: selectedItem === item.text ? "#f0f0f0" : "transparent", 
                  }}
                  onClick={() => setSelectedItem(item.text)} 
                >
                  <Tooltip
                    title={item.text}
                    placement="right"
                    enterDelay={100}
                    leaveDelay={100}
                    TransitionProps={{ timeout: 300 }}
                    componentsProps={{
                      tooltip: {
                        sx: {
                          bgcolor: "#2a7fff",
                          color: "#ffffff",
                          fontSize: "0.8rem",
                          borderRadius: 1,
                          boxShadow: 3,
                          px: 1.5,
                          py: 0.5,
                        },
                      },
                    }}
                  >
                    <ListItemIcon sx={{ color: "#000000", minWidth: "auto" }}>{item.icon}</ListItemIcon>
                  </Tooltip>
                </ListItemButton>
              ))}
            </List>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <UpnLogo />
          </Box>
        </Box>
      </Box>

      <Box sx={{ marginLeft: "65px", width: "100%" }}>
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 65,
            right: 0,
            height: "65px",
            bgcolor: "white",
            zIndex: 10,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: 4,
            paddingRight: 4,
          }}
        >
          <Typography variant="h4" sx={{ fontFamily: "var(--font-dancing-script)" }}>
            Hola {studentName} bienvenido a Metabolismo
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
              {studentName?.charAt(0).toUpperCase()}
            </Avatar>
            <IconButton onClick={handleLogout} sx={{ color: theme.palette.primary.main }}>
              <LogoutOutlinedIcon />
            </IconButton>
          </Box>
        </Box>

        <Box sx={{ marginTop: "65px", padding: 2, backgroundColor: "#f0f0f0" }}>
          {renderContent()}
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
