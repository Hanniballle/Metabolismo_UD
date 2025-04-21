import React from 'react';
import {
  Box,
  Grid,
  Tooltip,
  Typography,
  Paper,
  Avatar,
  Stack,
  useTheme,
} from '@mui/material';
import OpacityIcon from '@mui/icons-material/Opacity';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CloudIcon from '@mui/icons-material/Cloud';
import ScienceIcon from '@mui/icons-material/Science';

const MoleculasConTooltip = () => {
  const theme = useTheme();

  const moleculas = [
    {
      nombre: 'Agua (H₂O)',
      descripcion:
        'El agua es el medio donde ocurren la mayoría de las reacciones biológicas. Regula la temperatura corporal y transporta nutrientes y desechos.',
      icono: <OpacityIcon />,
      color: '#4fc3f7',
    },
    {
      nombre: 'Cloruro de sodio (NaCl)',
      descripcion:
        'El NaCl regula el equilibrio de líquidos en el cuerpo. Es esencial para la transmisión nerviosa y la contracción muscular.',
      icono: <AcUnitIcon />,
      color: '#90caf9',
    },
    {
      nombre: 'Dióxido de carbono (CO₂)',
      descripcion:
        'El CO₂ es el producto final de la respiración celular. Las plantas lo absorben en la fotosíntesis para producir glucosa y oxígeno.',
      icono: <CloudIcon />,
      color: '#a5d6a7',
    },
    {
      nombre: 'Amoníaco (NH₃)',
      descripcion:
        'El amoníaco es un desecho metabólico de las proteínas. En humanos se convierte en urea para ser eliminado por los riñones.',
      icono: <ScienceIcon />,
      color: '#ce93d8',
    },
  ];

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="body1" paragraph>
        Explora cómo estas moléculas están involucradas en funciones esenciales del cuerpo y de los ecosistemas.
      </Typography>

      <Grid container spacing={3}>
        {moleculas.map((mol, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
            <Tooltip
              title={
                <Box sx={{ maxWidth: 250, p: 1 }}>
                  <Typography variant="subtitle2" fontWeight="bold">
                    {mol.nombre}
                  </Typography>
                  <Typography variant="body2">{mol.descripcion}</Typography>
                </Box>
              }
              arrow
              placement="top"
            >
              <Paper
                elevation={4}
                sx={{
                  padding: 3,
                  textAlign: 'center',
                  cursor: 'pointer',
                  backgroundColor: mol.color,
                  borderRadius: 4,
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: theme.shadows[6],
                  },
                }}
              >
                <Stack direction="column" alignItems="center" spacing={1}>
                  <Avatar
                    sx={{
                      bgcolor: 'white',
                      color: mol.color,
                      width: 56,
                      height: 56,
                    }}
                  >
                    {mol.icono}
                  </Avatar>
                  <Typography variant="h6">{mol.nombre}</Typography>
                </Stack>
              </Paper>
            </Tooltip>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MoleculasConTooltip;