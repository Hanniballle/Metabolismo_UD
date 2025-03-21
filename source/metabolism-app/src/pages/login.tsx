"use client";
import { useState } from "react";
import { myFont, geistMono} from "../utils/fonts";
import { Button, TextField, Container, Typography, Box } from "@mui/material";
import styles from "../styles/page.module.css";
import type { NextPage } from "next";
import { text } from "stream/consumers";

const Login: NextPage = () => {

  const [loading, setLoading] = useState(false);
  const [studentName, setStudentName] = useState("");

  return (
    
    <Container maxWidth="xs">
      <Box display="flex" flexDirection="column" alignItems="center" mt={8}>

        <Typography variant="h1" className={myFont.variable} sx={{ fontFamily: "var(--font-dancing-script)" }}>
          Metabolismo
        </Typography>

        <Typography variant="h7" className={geistMono.className} sx={{ mt: 2, fontFamily: "var(--font-geist-mono)", lineHeight: "24px"}}>
          Selecciona tu tipo de usuario
        </Typography>

        <form onSubmit={(e) => {}}>

        <TextField
            label="Nombre Estudiante"
            type="Nombre Estudiante"
            fullWidth
            size="small"
            margin="normal"
            variant="outlined"
            required
          />

          <Button 
            type="submit"
            variant="contained"
            fullWidth
            disabled={loading}
            className={geistMono.className}
            sx={{ 
              mt: 2,
              backgroundColor: "black",
              color: "white",
              fontFamily: "var(--font-geist-mono)",
              textTransform: "none"}}>
            {"Iniciar sesión"}
          </Button>

        </form> 
      </Box>
    </Container>
  );
};

export default Login;

