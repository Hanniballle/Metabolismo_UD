import React, { useState } from "react";
import { Box, Grid, Card, Typography, CardMedia, CardActionArea } from "@mui/material";
import Archaea from "./kingdoms/archaea";
import Chromista from "./kingdoms/chromista";
import Bacteria from "./kingdoms/bacteria";
import Plantae from "./kingdoms/plantae";
import Fungi from "./kingdoms/fungi";
import Protozoa from "./kingdoms/protozoa";
import Animalia from "./kingdoms/animalia";

interface Kingdom {
    name: string;
    image: string;
}

const kingdoms: Kingdom[] = [
    { name: "Animalia", image: "/kingdoms/animalia.jpg" },
    { name: "Plantae", image: "/kingdoms/plantae.jpeg" },
    { name: "Fungi", image: "/kingdoms/fungi.jpeg" },
    { name: "Protozoa", image: "/kingdoms/protozoa.jpeg" },
    { name: "Chromista", image: "/kingdoms/chromista.jpg" },
    { name: "Archaea", image: "/kingdoms/archaea.jpg" },
    { name: "Bacteria", image: "/kingdoms/bacteria.jpg"}
];

const FeedKingdoms: React.FC<object> = () => {
    const [selected, setSelected] = useState<string | null>(null);
    const [showFeed, setShowFeed] = useState<boolean>(false);

    const handleSelect = (name: string) => {
        setSelected(name);
        setShowFeed(true);
    };

    const renderSelectedComponent = () => {
        switch (selected) {
            case "Archaea":
                return <Archaea onBack={() => setShowFeed(false)} />;
            case "Chromista":
                return <Chromista onBack={() => setShowFeed(false)} />;
            case "Bacteria":
                return <Bacteria onBack={() => setShowFeed(false)} />;
            case "Plantae":
                return <Plantae onBack={() => setShowFeed(false)} />;  
            case "Fungi":
                return <Fungi onBack={() => setShowFeed(false)} />; 
            case "Protozoa":
                return <Protozoa onBack={() => setShowFeed(false)} />; 
            case "Animalia":
                return <Animalia onBack={() => setShowFeed(false)} />;
            case "Eukarya":
            

            default:
                return <div>Please select a domain.</div>;
        }
    }

    return (
        <Box>
            {showFeed && selected ? (
                renderSelectedComponent()
            ) : (
                <Grid container spacing={3} justifyContent="center" sx={{ p: 4 }}>
                    {kingdoms.map((k, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                            <Card
                                sx={{
                                    borderRadius: 4,
                                    border: selected === k.name ? '3px solid #2a7fff' : 'none',
                                    boxShadow: 3,
                                    transition: 'transform 0.3s ease',
                                    transform: selected === k.name ? 'scale(1.03)' : 'none',
                                }}
                            >
                                <CardActionArea onClick={() => handleSelect(k.name)}>
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            image={k.image}
                                            alt={k.name}
                                            sx={{
                                                height: 220,
                                                filter: selected === k.name ? 'brightness(100%)' : 'brightness(60%)',
                                                transition: 'filter 0.3s ease',
                                                '&:hover': {
                                                    filter: 'brightness(100%)',
                                                },
                                            }}
                                        />
                                        <Typography
                                            variant="h6"
                                            component="div"
                                            sx={{
                                                position: 'absolute',
                                                bottom: 16,
                                                left: 0,
                                                right: 0,
                                                textAlign: 'center',
                                                color: '#fff',
                                                fontWeight: 'bold',
                                                textShadow: '1px 1px 4px rgba(0,0,0,0.8)',
                                            }}
                                        >
                                            {k.name}
                                        </Typography>
                                    </Box>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Box>
    );
};

export default FeedKingdoms;