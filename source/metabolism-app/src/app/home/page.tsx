"use client";
import { useState, useEffect } from "react";
import {
  Typography,
  Box,
  IconButton,
  Avatar,
  List,
  ListItemButton,
  ListItemIcon,
  Tooltip,
} from "@mui/material";
import {
  HomeOutlined as HomeIcon,
  YardOutlined as YardIcon,
  VideogameAssetOutlined as GameIcon,
  BookOutlined as BookIcon,
  LogoutOutlined as LogoutIcon,
  ScienceOutlined as AtomIcon,
} from "@mui/icons-material";
import { useRouter } from "next/navigation";
import UpnLogo from "@/components/upnLogo";
import FeedHome from "@/components/home/feedHome";
import FeedKingdoms from "@/components/feedKingdoms";
import FeedPlus from "@/components/feedPlus";
import theme from "@/utils/theme";
import FeedGames from "@/components/feedGames";

const HomePage: React.FC = () => {
  const [studentName, setStudentName] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string>("Inicio");
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
    { text: "Inicio", icon: <HomeIcon /> },
    { text: "Reinos", icon: <YardIcon /> },
    { text: "Juegos", icon: <GameIcon /> },
    { text: "Más", icon: <BookIcon /> },
  ];

  const renderContent = () => {
    switch (selectedItem) {
      case "Inicio":
        return <FeedHome studentName={studentName!} />;
      case "Reinos":
        return <FeedKingdoms />;
      case "Juegos":
        return <FeedGames/>
      case "Más":
        return <FeedPlus />;
      default:
        return (
          <Typography variant="body1" sx={{ mt: 2, fontFamily: "var(--font-geist-mono)" }}>
            Selecciona una opción del menú.
          </Typography>
        );
    }
  };

  if (!studentName) return null;

  return (
    <Box sx={{ display: "flex", bgcolor: "#f8f9fb", minHeight: "100vh" }}>
      {/* SIDEBAR */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: "70px",
          bgcolor: "white",
          boxShadow: "2px 0 5px rgba(0,0,0,0.05)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          py: 2,
          borderRight: "1px solid #e0e0e0",
        }}
      >
        {/* Ícono superior izquierdo */}
        <Box sx={{ mb: 2 }}>
          <AtomIcon sx={{ fontSize: 32, color: "#2a7fff" }} />
        </Box>
        <List
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 0.5,
          }}
        >
          {sideBarItems.map((item, index) => (
            <Tooltip
              key={index}
              title={
                <Typography
                  sx={{
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    fontFamily: "var(--font-geist-sans)",
                  }}
                >
                  {item.text}
                </Typography>
              }
              placement="right"
              enterDelay={150}
              leaveDelay={100}
              arrow
              componentsProps={{
                tooltip: {
                  sx: {
                    bgcolor: "#2a7fff",
                    color: "#fff",
                    borderRadius: "8px",
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                    px: 2,
                    py: 1,
                    transition: "all 0.3s ease-in-out",
                  },
                },
                arrow: {
                  sx: {
                    color: "#2a7fff",
                  },
                },
              }}
            >
              <ListItemButton
                onClick={() => setSelectedItem(item.text)}
                selected={selectedItem === item.text}
                sx={{
                  flexDirection: "column",
                  justifyContent: "center",
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  transition: "all 0.3s ease",
                  bgcolor: selectedItem === item.text ? "#e3f2fd" : "transparent",
                  "&:hover": {
                    bgcolor: "#e0e0e0",
                  },
                }}
              >
                <ListItemIcon sx={{ color: "#000", minWidth: 0 }}>{item.icon}</ListItemIcon>
              </ListItemButton>
            </Tooltip>
          ))}
        </List>
        <Box sx={{ mb: 0.1 }}>
          <UpnLogo />
        </Box>
      </Box>

      {/* MAIN CONTENT */}
      <Box sx={{ marginLeft: "70px", flexGrow: 1 }}>
        {/* HEADER */}
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 70,
            right: 0,
            height: "65px",
            bgcolor: "white",
            zIndex: 10,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 4,
            boxShadow: "0px 2px 5px rgba(0,0,0,0.05)",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: "var(--font-geist-mono)",
              fontWeight: 600,
              color: "#000",
            }}
          >
            Hola {studentName}, bienvenid@ a Metabolismo
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar sx={{ bgcolor: theme.palette.primary.main, fontSize: 16 }}>
              {studentName?.charAt(0).toUpperCase()}
            </Avatar>
            <Tooltip title="Cerrar sesión">
              <IconButton onClick={handleLogout} sx={{ color: theme.palette.primary.main }}>
                <LogoutIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>

        {/* CONTENT */}
        <Box sx={{ mt: "65px", p: 3 }}>{renderContent()}</Box>
      </Box>
    </Box>
  );
};

export default HomePage;