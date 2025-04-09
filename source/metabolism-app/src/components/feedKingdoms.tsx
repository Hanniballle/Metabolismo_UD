import React from 'react';
import { Box, Grid, Card, CardMedia, CardContent, Typography, IconButton } from "@mui/material";

const FeedKingdoms: React.FC<{}> = () => {
    return(
        <Box sx={{ padding: 2 }}>
            <Typography variant="h4" sx={{ fontFamily: "var(--font-dancing-script)" }}>
                Contenido de Reinos
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, fontFamily: "var(--font-geist-mono)" }}>
                Aquí se muestra el contenido relacionado con los reinos.
            </Typography>
        </Box>
    );
    
}

export default FeedKingdoms;