import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssessmentIcon from '@mui/icons-material/Assessment'; // Evaluación

const iconLinks = [
  {
    icon: <AssignmentIcon fontSize="large" />,
    color: '#64b5f6',
    label: 'Tarea',
    link: 'https://ejemplo.com/tarea',
  },
  {
    icon: <AssignmentIcon fontSize="large" />,
    color: '#ba68c8',
    label: 'Actividad',
    link: 'https://ejemplo.com/actividad',
  },
  {
    icon: <AssessmentIcon fontSize="large" />,
    color: '#81c784',
    label: 'Evaluación',
    link: 'https://ejemplo.com/evaluacion',
  },
];

const Tasks = () => {
  return (
    <Grid container spacing={3} justifyContent="center" sx={{ mb: 4 }}>
      {iconLinks.map((item, index) => (
        <Grid item key={index}>
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                bgcolor: item.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 3,
                transition: 'transform 0.2s ease',
                '&:hover': {
                  transform: 'scale(1.1)',
                  boxShadow: 6,
                },
              }}
            >
              <Box sx={{ color: '#fff' }}>{item.icon}</Box>
            </Box>
            <Typography
              variant="caption"
              align="center"
              display="block"
              sx={{ mt: 1, fontWeight: 500, color: '#555' }}
            >
              {item.label}
            </Typography>
          </a>
        </Grid>
      ))}
    </Grid>
  );
};

export default Tasks;