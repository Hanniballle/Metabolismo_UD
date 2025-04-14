// components/FeedGrid.tsx

import React from 'react';
import { Box, Button, Typography, Grid, Card, CardMedia, Avatar, Stack, IconButton, } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';

type FeedGridProps = {
  selected: string;
  onBack: () => void;
};

const Archaea: React.FC<FeedGridProps> = ({ selected, onBack }) => {
  return (
    <Box>
      <Button onClick={onBack} variant="contained" sx={{ mb: 2 }}>
        Volver a los reinos
      </Button>
    
      {/* Perfil destacado */}
      <Box
        display="flex"
        alignItems="flex-start"
        gap={2}
        p={2}
        sx={{
          border: '1px solid #ccc',
          borderRadius: 2,
          mb: 4,
          backgroundColor: '#ffffff',
        }}
      >
        {/* Avatar */}
        <Avatar
          alt="Archaea"
          src="/Archaea/Archaeau.jpeg" // Asegúrate que este archivo exista
          sx={{ width: 80, height: 80, border: '3px solid #1976d2' }}
        />

        {/* Texto */}
        <Box flex={1}>
          <Typography variant="h6" fontWeight="bold">
            Archaea
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              backgroundColor: '#ccc',
              display: 'inline-block',
              px: 1.5,
              py: 0.5,
              borderRadius: '10px',
              fontSize: '0.9rem',
            }}
          >
            @Halobacteria
          </Typography>

          <Box mt={1}>
            <Typography variant="body2">
              <strong>CONCEPTUAL:</strong> Describir como los hongos respondes a los estímulos del entorno.
            </Typography>
            <Typography variant="body2">
              <strong>PROCEDIMENTAL:</strong> Comparar como se dan los procesos de irritabilidad en los hongos con otros organismos mediante la elaboración de esquemas.
            </Typography>
            <Typography variant="body2">
              <strong>ACTITUDINAL:</strong> Valorar el reino fungi como organismos vitales en los ecosistemas.
            </Typography>
          </Box>
        </Box>

        {/* Iconos */}
        <Stack direction="row" spacing={1} mt={1}>
          <IconButton sx={{ bgcolor: '#c49b6e', color: 'white' }}>
            <LightbulbOutlinedIcon />
          </IconButton>
          <IconButton sx={{ bgcolor: '#3a3a4f', color: 'white' }}>
            <AssignmentTurnedInOutlinedIcon />
          </IconButton>
          <IconButton sx={{ bgcolor: '#3a3a4f', color: 'white' }}>
            <AssignmentTurnedInOutlinedIcon />
          </IconButton>
          <IconButton sx={{ bgcolor: '#c49b6e', color: 'white' }}>
            <CheckCircleOutlineIcon />
          </IconButton>
        </Stack>
      </Box>

      {/* Grid de posts */}
      <Grid container spacing={3}>
        {[1, 2, 3].map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item}>
            <Card>
              <CardMedia
                component="img"
                image={`/feeds/${selected.toLowerCase()}_${item}.jpg`}
                alt={`${selected} feed ${item}`}
                sx={{ height: 220 }}
              />
              <Typography variant="body1" sx={{ p: 2 }}>
                {selected} Feed Post {item}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Archaea;
