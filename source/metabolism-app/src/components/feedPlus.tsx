import React from 'react';
import { Box, Typography, Grid, Avatar, Link } from '@mui/material';

const FeedPlus = () => {
  const users = [
    { name: 'Nicoll Puentes', photo: '/images/user1.jpg' },
    { name: 'Mateo Silva', photo: '/images/user2.jpg' },
    { name: 'Diego Molina', photo: '/images/user3.jpg' },
    { name: 'Santiago Molina', photo: '/images/user4.jpg' },
  ];

  const webgraphy = [
    { title: 'Documentación de React', url: 'https://reactjs.org/' },
    { title: 'Material UI', url: 'https://mui.com/' },
    { title: 'JavaScript Info', url: 'https://javascript.info/' },
    { title: 'MDN Web Docs', url: 'https://developer.mozilla.org/' },
  ];

  const photowebgraphy = [
    { title: 'Unsplash', url: 'https://unsplash.com/' },
    { title: 'Pexels', url: 'https://www.pexels.com/' },
    { title: 'Pixabay', url: 'https://pixabay.com/' },
    { title: 'Generated Photos', url: 'https://generated.photos/' },
  ];

  const bibliography = [
    { title: 'Banks, A. & Porcello, E. (2017). Learning React. O’Reilly Media.' },
    { title: 'Freeman, A. & Sanderson, A. (2021). Pro ASP.NET Core MVC 2 with React. Apress.' },
    { title: 'Crockford, D. (2008). JavaScript: The Good Parts. O’Reilly Media.' },
    { title: 'Flanagan, D. (2020). JavaScript: The Definitive Guide. O’Reilly Media.' },
  ];

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>
        Quienes somos
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {users.map((user, index) => (
          <Grid item key={index} xs={6} sm={3} textAlign="center">
            <Avatar
              alt={user.name}
              src={user.photo}
              sx={{ width: 100, height: 100, margin: '0 auto' }}
            />
            <Typography variant="subtitle1" mt={1}>{user.name}</Typography>
          </Grid>
        ))}
      </Grid>

      <Box mt={6}>
        <Typography variant="h6" gutterBottom>
          Webgrafía
        </Typography>
        {webgraphy.map((item, idx) => (
          <Typography key={idx}>
            <Link href={item.url} target="_blank" rel="noopener">
              {item.title}
            </Link>
          </Typography>
        ))}
      </Box>

      <Box mt={4}>
        <Typography variant="h6" gutterBottom>
          Wegrafía (Fotos)
        </Typography>
        {photowebgraphy.map((item, idx) => (
          <Typography key={idx}>
            <Link href={item.url} target="_blank" rel="noopener">
              {item.title}
            </Link>
          </Typography>
        ))}
      </Box>

      <Box mt={4}>
        <Typography variant="h6" gutterBottom>
          Bibliografía
        </Typography>
        {bibliography.map((item, idx) => (
          <Typography key={idx}>{item.title}</Typography>
        ))}
      </Box>
    </Box>
  );
};

export default FeedPlus;
