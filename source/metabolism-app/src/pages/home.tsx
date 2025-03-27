"use client";
import { Container, Typography, Box } from "@mui/material";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Container maxWidth="md">
      <Box display="flex" flexDirection="column" alignItems="center" mt={8}>
        <Typography variant="h1" sx={{ fontFamily: "var(--font-dancing-script)" }}>
          Bienvenido a Metabolismo
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, fontFamily: "var(--font-geist-mono)", lineHeight: "24px" }}>
          Esta es la página de inicio.
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
