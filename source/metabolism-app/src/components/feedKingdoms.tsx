import React from 'react';
import { Box, Grid, Card, Typography } from "@mui/material";

const kingdoms = [
    { name: "Animalia", image: "/kingdoms/animalia.jpg" },
    { name: "Plantae", image: "/kingdoms/plantae.jpg" },
    { name: "Fungi", image: "/kingdoms/fungi.jpg" },
    { name: "Protozoa", image: "/kingdoms/protozoa.jpg" },
    { name: "Chromista", image: "/kingdoms/chromista.jpg" },
    { name: "Archaea", image: "/kingdoms/archaea.jpg" },
];

const FeedKingdoms: React.FC<{}> = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h4" sx={{ fontFamily: "var(--font-dancing-script)", mb: 2 }}>
                Contenido de Reinos
            </Typography>
            <Grid container spacing={2}>
                {kingdoms.map((kingdom, index) => (
                    <Grid item xs={6} sm={4} md={4} key={index}>
                        <Card
                            sx={{
                                borderRadius: 2,
                                overflow: "hidden",
                                position: "relative",
                                height: 0,
                                paddingTop: "100%", // Square aspect ratio
                                backgroundImage: `url(${kingdom.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    backgroundColor: "rgba(255, 255, 255, 0.3)", // Tiny color mask
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontFamily: "var(--font-geist-mono)",
                                        fontWeight: "bold",
                                        textAlign: "center",
                                        color: "#000", // Ensure text is visible
                                    }}
                                >
                                    {kingdom.name}
                                </Typography>
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default FeedKingdoms;