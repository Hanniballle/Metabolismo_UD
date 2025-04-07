import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

const feedData = [
    {
      text: "Historia",
      image: "/start/Historia.jpg",
      color: "#ff9800",
      height: 500,
      liked: true,
    },
    {
      text: "Biomoléculas",
      image: "/start/Biomoleculas.jpg",
      color: "#4caf50",
      height: 500,
    },
    {
      text: "Anabolismo",
      image: "/start/Anabolismo.jpg",
      color: "#3f51b5",
      height: 500,
      liked: false,
    },
    {
      text: "Catabolismo",
      image: "/start/Catabolismo.jpg",
      color: "#2196f3",
      height: 500,
    },
    {
      text: "Homeostasis",
      image: "/start/Homeostasis.jpg",
      color: "#ff5722",
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
      image: "https://source.unsplash.com/400x300/?snow",
      color: "#607d8b",
      height: 500,
    },
    {
      text: "Golden Fields",
      image: "https://source.unsplash.com/400x300/?field",
      color: "#fbc02d",
      height: 500,
    },
    {
      text: "Tasa metabólica",
      image: "/start/Tasa metabólica.jpg",
      color: "#9e9e9e",
      height: 500,
    },
    {
      text: "Deep Canyon",
      image: "https://source.unsplash.com/400x300/?canyon",
      color: "#795548",
      height: 500,
    },
  ];

  const FeedGrid = () => {
    return (
      <Grid container spacing={4}>
        {feedData.map((item, index) => (
          <Grid item size={{ xs: 12, sm: 12, md: 4 }} key={index}>
            <Card>
              <CardMedia
                component="img"
                height={item.height}
                image={item.image}
                alt={item.text}
              />
              <CardContent>
                <Typography variant="h6" component="div" color="textPrimary">
                  {item.text}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }

  export default FeedGrid;