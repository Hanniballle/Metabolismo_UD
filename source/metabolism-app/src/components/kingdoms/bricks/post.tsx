import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Typography,
  Chip,
  Grid,
  Card,
  CardContent,
  IconButton,
  CardHeader,
  CardMedia,
} from '@mui/material';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import AvatarKingdom from './avatar';

const postGallery = [
    '/Archaea/Publ21.jpg',
    '/Archaea/Publi22.jpg',
    '/Archaea/Publi23.jpg',
  ];

const Post = ({ post, isGallery = false }: any) => {

  const [liked, setLiked] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const handleLike = () => setLiked(!liked);
  const handleExpand = () => setExpanded(!expanded);
  const nextImage = () =>
    setGalleryIndex((prev) => (prev + 1) % postGallery.length);
  const prevImage = () =>
    setGalleryIndex((prev) => (prev === 0 ? postGallery.length - 1 : prev - 1));

  return (
    <Card sx={{ mb: 3 }}>
      <CardHeader
        avatar={ <AvatarKingdom name='Archaea' dirImage='/archaea/avatar.jpeg' />}
        title={<Typography fontWeight="bold">{post.user}</Typography>}
      />

      {isGallery ? (
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            component="img"
            height="300"
            image={postGallery[galleryIndex]}
            alt="Galería"
          />
          <IconButton
            onClick={prevImage}
            sx={{ position: 'absolute', top: '50%', left: 8, color: 'white' }}
          >
            <ChevronLeftIcon />
          </IconButton>
          <IconButton
            onClick={nextImage}
            sx={{ position: 'absolute', top: '50%', right: 8, color: 'white' }}
          >
            <ChevronRightIcon />
          </IconButton>
        </Box>
      ) : (
        <CardMedia
          component="img"
          height="300"
          image={post.image}
          alt="Post"
        />
      )}

      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <IconButton onClick={handleLike} sx={{ color: liked ? 'red' : 'inherit' }}>
            {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </Box>

        <Typography variant="body2">
          <strong>{post.username}</strong>{' '}
          {expanded ? post.caption : `${post.caption.slice(0, 70)}...`}
          <IconButton onClick={handleExpand} size="small">
            {expanded ? <ExpandLessIcon fontSize="small" /> : <ExpandMoreIcon fontSize="small" />}
          </IconButton>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Post;