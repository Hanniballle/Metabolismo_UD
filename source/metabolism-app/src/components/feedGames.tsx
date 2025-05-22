import React from 'react';
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  CardActions,
  Avatar,
} from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

// 1. Definimos un tipo para los reinos válidos
type Kingdom = 'Chromista' | 'Fungi' | 'Animalia' | 'Bacteria' | 'Plantae' | 'Archaea';

// 2. Definimos los avatares por reino usando Record<Kingdom, string>
const profilePics: Record<Kingdom, string> = {
  Chromista: '/chromista/perfil.jpg',
  Fungi: '/fungi/av.jpeg',
  Animalia: '/animalia/p2.jpg',
  Bacteria: '/bacteria/us.jpeg',
  Plantae: '/plantae/Perfil.jpg',
  Archaea: '/archaea/av.jpeg',
};

// 3. Tipamos cada juego para que el campo `kingdom` sea del tipo `Kingdom`
const games: {
  id: number;
  title: string;
  image: string;
  url: string;
  kingdom: Kingdom;
}[] = [
  { id: 1, title: 'La carrera de los chromistas', image: '/juegos/Jc1.png', url: 'https://view.genially.com/680440189190c659980dfeb0/interactive-content-la-carrera-de-los-chromistas', kingdom: 'Chromista' },
  { id: 2, title: 'Conociendo a los hongos', image: '/juegos/Jf1.png', url: 'https://view.genially.com/67fee8471392242e190f3523/presentation-conociendo-a-los-hongos', kingdom: 'Fungi' },
  { id: 3, title: 'Dobles: animales', image: '/juegos/j2.png', url: 'https://view.genially.com/682633329aa498be28762ac2/interactive-content-dobles-animales', kingdom: 'Animalia' },
  { id: 4, title: 'Bacteriste', image: '/juegos/j3.png', url: 'https://view.genially.com/6826a85ffe83ffb3b1f9449e/interactive-content-bacterisate', kingdom: 'Bacteria' },
  { id: 5, title: 'Metaboliza como planta', image: '/juegos/j4.png', url: 'https://view.genially.com/6827d2dd236f2f2ed724ffb8/interactive-content-01', kingdom: 'Plantae' },
  { id: 6, title: '¿Cuánto sabes sobre metabolismo de los hongos?', image: '/juegos/j5.png', url: 'https://view.genially.com/68028d10e42e89164d8c5e3a/interactive-content-cuanto-sabes-sobre-metabolismo-de-lo-hongos', kingdom: 'Fungi' },
  { id: 7, title: 'Conociendo a los chromistas', image: '/juegos/j6.png', url: 'https://view.genially.com/68054249e42e89164dad8b80/interactive-content-conociendo-a-los-chromistas', kingdom: 'Chromista' },
  { id: 8, title: 'ArCHaEA', image: '/juegos/j7.png', url: 'https://view.genially.com/68277b46236f2f2ed7d3a053/interactive-content-archaea', kingdom: 'Archaea' },
  { id: 9, title: 'Froggy Jumps', image: '/juegos/j8.png', url: 'https://es.educaplay.com/recursos-educativos/23838399-que_aprendiste_de_este_juego.html', kingdom: 'Animalia' },
  { id: 10, title: 'Guía plantae', image: '/juegos/j9.png', url: 'https://www.canva.com/design/DAGk8hXuPBg/0ly-3oHvFUY1LHxmjlW_Qw/edit', kingdom: 'Plantae' },
];

const FeedGames = () => {
  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', px: 2, py: 4 }}>
      <Typography variant="h4" gutterBottom textAlign="center" sx={{ fontWeight: 600 }}>
        🎮 Zona de Juegos
      </Typography>
      <Grid container spacing={3}>
        {games.map((game) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }}> key={game.id}
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 3,
                transition: '0.3s',
                '&:hover': {
                  boxShadow: 6,
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={game.image}
                alt={game.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Box display="flex" alignItems="center" gap={1} mb={1}>
                  <Avatar
                    src={profilePics[game.kingdom]}
                    alt={game.kingdom}
                    sx={{ width: 32, height: 32 }}
                  />
                  <Typography variant="body2" color="text.secondary">
                    {game.kingdom}
                  </Typography>
                </Box>
                <Typography variant="subtitle1" fontWeight="bold">
                  {game.title}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton
                  component="a"
                  href={game.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="play game"
                  sx={{ ml: 1 }}
                >
                  <PlayCircleOutlineIcon fontSize="large" />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeedGames;