import React, { useEffect } from "react";
import { Box, Grid, Card, CardMedia, CardContent, Typography, IconButton } from "@mui/material";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

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
      height: 500
    },
    {
      text: "Biomoléculas",
      image: "/start/Biomoleculas.jpg",
      color: "#4caf50",
      height: 500,
    },
    {
      text: "Bioenergética",
      image: "/start/Bioenergetica.jpg",
      color: "#fbc02d",
      height: 500,
    },
    {
      text: "Termodinámica de los organismos vivos",
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
      text: "Anabolismo",
      image: "/start/Anabolismo.jpg",
      color: "#3f51b5",
      height: 500,
    },
    {
      text: "Catabolismo",
      image: "/start/Catabolismo.jpg",
      color: "#2196f3",
      height: 500,
    },
    {
      text: "Tasa metabólica",
      image: "/start/Tasa metabólica.jpg",
      color: "#9e9e9e",
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

  const FeedHome: React.FC<FeedHomeProps> = ({studentName}) => {
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
      <Grid container spacing={4}>
        {feedData.map((item, index) => (
          <Grid size={{ xs: 12, sm: 12, md: 3 }} key={index}>
            <Card>
              <CardMedia
                component="img"
                height={item.height}
                image={item.image}
                alt={item.text}
              />
              <CardContent>
                <Box>
                  <Typography variant="h6" component="div" color="textPrimary">
                    {item.text}
                  </Typography>
                  <IconButton onClick={() => toggleLike(item.text)}>
                  {likedItems[item.text] ? (
                    <FavoriteOutlinedIcon color="error" />
                  ) : (
                    <FavoriteBorderOutlinedIcon />
                  )}
                </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }

  export default FeedHome;