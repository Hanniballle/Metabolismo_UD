"use client";
import { useState, ChangeEvent } from "react";
import { Button, TextField, Container, Typography, Box } from "@mui/material";
import type { NextPage } from "next";

const Login: NextPage = () => {

  const [studentName, setStudentName] = useState("");

  return (
    <Container maxWidth="xs">
      <Box display="flex" flexDirection="column" alignItems="center" mt={8}>
        <Typography variant="h1" sx={{ fontFamily: "var(--font-dancing-script)" }}>
          Metabolismo
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, fontFamily: "var(--font-geist-mono)", lineHeight: "24px"}}>
          Colaca tu nombre
        </Typography>
        <form>
          <TextField
            label="Nombre Estudiante"
            type="Nombre Estudiante"
            fullWidth
            size="small"
            margin="normal"
            variant="outlined"
            required
            value={studentName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setStudentName(e.target.value)}
          />
          <Button 
            type="submit"
            variant="contained"
            fullWidth
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

