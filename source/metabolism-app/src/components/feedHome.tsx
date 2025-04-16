import React, { useEffect } from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

interface FeedItem {
  text: string;
  image: string;
  color: string;
  height: number;
}

const feedData: FeedItem[] = [
  {
    text: "Guía de inicio",
    image: "/start/Guia.jpg",
    color: "#fbc02d",
    height: 500,
  },
  {
    text: "Carta al maestro",
    image: "/start/professor_letter.jpg",
    color: "#fbc02d",
    height: 500,
  },
  {
    text: "Carta al estudiante",
    image: "/start/Cartae.jpg",
    color: "#795548",
    height: 500,
  },
  {
    text: "Historia",
    image: "/start/Historia.jpg",
    color: "#ff9800",
    height: 500,
  },
  {
    text: "Biomoléculas",
    image: "/start/Biomoleculas.jpg",
    color: "#4caf50",
    height: 500,
  },
  {
    text: "Bioenergética",
    image: "/start/Termodinámica de los organismos vivos.jpg",
    color: "#2e7d32",
    height: 500,
  },
  {
    text: "Metabolismo",
    image: "/start/Metabolismo.jpg",
    color: "#607d8b",
    height: 500,
  },
  {
    text: "Anabolismo y Catabolismo",
    image: "/start/Anabolismo.jpg",
    color: "#3f51b5",
    height: 500,
  },
  {
    text: "Homeostasis",
    image: "/start/Homeostasis.jpg",
    color: "#ff5722",
    height: 500,
  },
];

interface FeedHomeProps {
  studentName: string;
}

const FeedHome: React.FC<FeedHomeProps> = ({ studentName }) => {
  const [likedItems, setLikedItems] = React.useState<{ [key: string]: boolean }>({});
  const storageKey = `likedItems_${studentName}`;

  useEffect(() => {
    const storedLikes = JSON.parse(localStorage.getItem(storageKey) || "{}");
    setLikedItems(storedLikes);
  }, [storageKey]);

  const toggleLike = (text: string) => {
    const updatedLikes = {
      ...likedItems,
      [text]: !likedItems[text],
    };
    setLikedItems(updatedLikes);
    localStorage.setItem(storageKey, JSON.stringify(updatedLikes));
  };

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)", // 3 columnas fijas
        gap: 2, // Espaciado entre las tarjetas
        px: 2, // Padding lateral
      }}
    >
      {feedData.map((item, index) => (
        <Card
          key={index}
          sx={{
            borderRadius: 4,
            boxShadow: 3,
            overflow: "hidden",
            position: "relative",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.01)",
            },
          }}
        >
          <Box sx={{ position: "relative" }}>
            <CardMedia
              component="img"
              height={item.height}
              image={item.image}
              alt={item.text}
              sx={{
                objectFit: "cover",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            />
            <IconButton
              onClick={() => toggleLike(item.text)}
              sx={{
                position: "absolute",
                top: 16,
                right: 16,
                backgroundColor: "rgba(255,255,255,0.8)",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,1)",
                },
              }}
            >
              {likedItems[item.text] ? (
                <FavoriteOutlinedIcon color="error" />
              ) : (
                <FavoriteBorderOutlinedIcon />
              )}
            </IconButton>
          </Box>
          <CardContent sx={{ bgcolor: "#fff" }}>
            <Typography
              variant="body1"
              fontWeight="bold"
              sx={{ color: "#333", textAlign: "center" }}
            >
              {item.text}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default FeedHome;