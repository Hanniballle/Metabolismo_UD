import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

const feedData = [
    {
      text: "Beautiful Sunset",
      image: "https://source.unsplash.com/400x300/?sunset",
      color: "#ff9800",
      height: 250,
    },
    {
      text: "Mountain View",
      image: "https://source.unsplash.com/400x300/?mountain",
      color: "#4caf50",
      height: 320,
    },
    {
      text: "City Lights",
      image: "https://source.unsplash.com/400x300/?city",
      color: "#3f51b5",
      height: 280,
    },
    {
      text: "Ocean Waves",
      image: "https://source.unsplash.com/400x300/?ocean",
      color: "#2196f3",
      height: 330,
    },
    {
      text: "Desert Dunes",
      image: "https://source.unsplash.com/400x300/?desert",
      color: "#ff5722",
      height: 260,
    },
    {
      text: "Green Forest",
      image: "https://source.unsplash.com/400x300/?forest",
      color: "#2e7d32",
      height: 300,
    },
    {
      text: "Snowy Peaks",
      image: "https://source.unsplash.com/400x300/?snow",
      color: "#607d8b",
      height: 310,
    },
    {
      text: "Golden Fields",
      image: "https://source.unsplash.com/400x300/?field",
      color: "#fbc02d",
      height: 270,
    },
    {
      text: "Urban Jungle",
      image: "https://source.unsplash.com/400x300/?urban",
      color: "#9e9e9e",
      height: 290,
    },
    {
      text: "Deep Canyon",
      image: "https://source.unsplash.com/400x300/?canyon",
      color: "#795548",
      height: 340,
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