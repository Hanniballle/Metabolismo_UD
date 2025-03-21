import { useState } from "react";
import { myFont} from "../utils/fonts";
import { Button, TextField, Container, Typography, Box } from "@mui/material";
import type { NextPage } from "next";

const Login: NextPage = () => {

  const [loading, setLoading] = useState(false);
  const [studentName, setStudentName] = useState("");

  return (
    
    <Container maxWidth="xs">
      <Box display="flex" flexDirection="column" alignItems="center" mt={8}>

        <Typography variant="h1" className={myFont.variable} sx={{ fontFamily: "var(--font-dancing-script)" }}>
          Metabolismo
        </Typography>

        <Typography variant="h6" sx={{ mt: 2 }}>
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
            color="primary" 
            fullWidth
            disabled={loading}
            sx={{ mt: 2, backgroundColor: "black", color: "white" }}>
            {"Iniciar sesión"}
          </Button>
        </form>

        
      </Box>
    </Container>
  );
};

export default Login;
