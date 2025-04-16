import React from 'react';
import { Box, Card, CardMedia, CardContent, Typography, IconButton } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { FeedItem } from './data/interfaces';

interface HomeComponentProps {
    item: FeedItem;
    index: number;
    likedItems: Record<string, boolean>;
    toggleLike: (text: string) => void;
    onSelect: () => void;
}

const HomeComponent: React.FC<HomeComponentProps> = ({item, index, likedItems, toggleLike, onSelect}) => {
    return(
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
          onClick={onSelect} 
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
    );
}

export default HomeComponent;