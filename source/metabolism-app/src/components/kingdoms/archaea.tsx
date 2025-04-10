// components/FeedGrid.tsx

import React from 'react';
import { Box, Button, Typography, Grid, Card, CardMedia } from '@mui/material';

type FeedGridProps = {
  selected: string;
  onBack: () => void;
};

const Archaea: React.FC<FeedGridProps> = ({ selected, onBack }) => {
  return (
    <Box>
      <Button onClick={onBack} variant="contained" sx={{ mb: 2 }}>
        Back to Kingdoms
      </Button>
      <Typography variant="h4" sx={{ mb: 2 }}>
        {selected} Feed
      </Typography>
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
