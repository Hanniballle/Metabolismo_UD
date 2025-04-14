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
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

// Galería de imágenes para la primera publicación
const postGallery = [
  '/Archaea/Publ21.jpg',
  '/Archaea/Publi22.jpg',
  '/Archaea/Publi23.jpg',
];

// Publicaciones simuladas
const posts = [
  {
    user: 'Archaea',
    username: 'Halobacteria',
    image: '/img/post1.jpg',
    caption: 'Las archaeas prosperan en ambientes extremos como salinas y aguas termales.',
  },
  {
    user: 'Archaea',
    username: 'Halobacteria',
    image: 'pstGallery', // Usado solo en galería
    isGallery: true,
    caption:
      'Las arqueas son microorganismos antiguos que han estado en la Tierra desde hace más de 3.500 millones de años.',
  },
  {
    user: 'Archaea',
    username: 'Halobacteria',
    image: '/img/post1.jpg',
    caption: 'Las archaeas prosperan en ambientes extremos como salinas y aguas termales.',
  },
  {
    user: 'Archaea',
    username: 'Halobacteria',
    image: '/img/post2.jpg',
    caption: 'Algunas archaeas generan metano y contribuyen al ciclo del carbono.',
  },
  {
    user: 'Archaea',
    username: 'Halobacteria',
    image: '/img/post3.jpg',
    caption: 'Su estudio nos ayuda a comprender los primeros pasos de la vida en la Tierra.',
  },
  {
    user: 'Archaea',
    username: 'Halobacteria',
    image: '/img/post4.jpg',
    caption: 'Pueden vivir sin oxígeno y metabolizar sustancias como el hidrógeno.',
  },
];

const ArchaeaPost = ({ post, isGallery = false }: any) => {
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
        avatar={
          <Avatar src="/path-to-avatar.jpg" sx={{ border: '2px solid #3f51b5' }} />
        }
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

const ArchaeaProfile = () => {
  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', pt: 4 }}>
      {/* Perfil */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Avatar
          alt="Archaea"
          src="/path-to-avatar.jpg"
          sx={{
            width: 60,
            height: 60,
            mr: 2,
            border: '3px solid #3f51b5',
          }}
        />
        <Box>
          <Typography variant="h6" fontWeight="bold">
            Archaea
          </Typography>
          <Chip label="@Halobacteria" size="small" />
        </Box>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="body1" gutterBottom>
          <strong>CONCEPTUAL:</strong> Describir cómo los hongos responden a los estímulos del entorno.
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>PROCEDIMENTAL:</strong> Comparar cómo se dan los procesos de irritabilidad en los hongos con otros organismos mediante esquemas.
        </Typography>
        <Typography variant="body1">
          <strong>ACTITUDINAL:</strong> Valorar el reino fungi como organismos vitales en los ecosistemas.
        </Typography>
      </Box>

      <Grid container spacing={2} justifyContent="center" sx={{ mb: 4 }}>
        <Grid item>
          <Card sx={{ width: 60, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#c1a57b' }}>
            <CardContent>
              <LightbulbIcon fontSize="large" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ width: 60, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#7e7c84' }}>
            <CardContent>
              <AssignmentIcon fontSize="large" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ width: 60, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#7e7c84' }}>
            <CardContent>
              <AssignmentIcon fontSize="large" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ width: 60, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#a36a3c' }}>
            <CardContent>
              <CheckCircleIcon fontSize="large" />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Typography variant="caption" color="textSecondary" sx={{ textAlign: 'center', display: 'block', mb: 2 }}>
        PUBLICACIONES
      </Typography>

      {/* Publicaciones */}
      {posts.map((post, i) => (
        <ArchaeaPost key={i} post={post} isGallery={post.isGallery} />
      ))}
    </Box>
  );
};

export default ArchaeaProfile;
