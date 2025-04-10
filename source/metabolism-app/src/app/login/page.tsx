"use client";
import { useState, ChangeEvent } from "react";
import { Button, TextField, Container, Typography, Box } from "@mui/material";
import { useRouter } from "next/navigation"; 
import type { NextPage } from "next";
import theme from "../../utils/theme";

const Login: NextPage = () => {

  const router = useRouter();
  const [studentName, setStudentName] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("studentName", studentName);
    router.push("/home");
  };

  return (   
    <Container maxWidth="xs">
      <Box display="flex" flexDirection="column" alignItems="center" mt={8}>
        <Typography variant="h1" sx={{ 
          fontFamily: "var(--font-dancing-script)",
          color: theme.palette.secondary.main,
        }}>
          Metabolismo
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, fontFamily: "var(--font-geist-mono)", lineHeight: "24px"}}>
          Coloca tu nombre
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            label="Nombre Estudiante"
            type="Nombre Estudiante"
            fullWidth
            size="small"
            margin="normal"
            variant="outlined"
            required
            value={studentName}
            sx={{ fontFamily: "var(--font-geist-mono)" }}
            InputProps={{
              sx: { fontFamily: "var(--font-geist-mono)" }, 
            }}
            InputLabelProps={{
              sx: { fontFamily: "var(--font-geist-mono)" },
            }}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setStudentName(e.target.value)}
          />

          <Button 
            type="submit"
            variant="contained"
            fullWidth
            sx={{ 
              mt: 2,
              backgroundColor: theme.palette.primary.main,
              color: "white",
              fontFamily: "var(--font-geist-mono)",
              textTransform: "none"}}>
            {"Ingresar"}
          </Button>
        </form> 
      </Box>
    </Container>
  );
};

export default Login;

