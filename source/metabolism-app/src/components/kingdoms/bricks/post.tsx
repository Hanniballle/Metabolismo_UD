import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, IconButton, CardHeader, CardMedia, Avatar } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

type PostType = {
  title: string;
  subtitle: string;
  caption: string;
  image: string;
  dirImage?: string;
};

type PostProps = {
  post: PostType;
  isGallery?: boolean;
  postGallery?: string[];
};

const Post: React.FC<PostProps> = ({ post, isGallery = false, postGallery = [] }) => {
  const [liked, setLiked] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const handleLike = () => setLiked(!liked);
  const handleExpand = () => setExpanded(!expanded);
  const nextImage = () => setGalleryIndex((prev) => (prev + 1) % postGallery.length);
  const prevImage = () => setGalleryIndex((prev) => (prev === 0 ? postGallery.length - 1 : prev - 1));

  return (
    <Card sx={{ mb: 3, borderRadius: 4, boxShadow: 3 }}>
      <CardHeader
        avatar={<Avatar alt={post.title} src={post.dirImage} />}
        action={
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        }
        title={<Typography fontWeight="bold">{post.title}</Typography>}
        subheader={<Typography variant="body2" color="text.secondary">{post.subtitle}</Typography>}
      />

      {isGallery ? (
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            component="img"
            height="600"
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
          image={post.image}
          alt="Post"
        />
      )}

      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton onClick={handleLike} sx={{ color: liked ? 'red' : 'inherit' }}>
              {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
            <IconButton>
              <CommentIcon />
            </IconButton>
            <IconButton>
              <ShareIcon />
            </IconButton>
          </Box>
          <Typography variant="body2" color="text.secondary">
            1 min ago
          </Typography>
        </Box>

        <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>
          {liked ? 'You and others' : 'No likes yet'}
        </Typography>

        <Typography variant="body2" sx={{ textAlign: 'justify' }}>
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