import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Divider,
  Grid,
} from "@mui/material";

const riddles = [
  {
    question: "¿Cuál es la ruta que permite a las plantas transformar la energía solar en energía química?",
    options: ["Glucólisis", "Fotosíntesis", "Fermentación", "Ciclo de Krebs"],
    answer: "Fotosíntesis",
  },
  {
    question: "¿Cuál de estas rutas produce ATP usando una cadena de transporte de electrones?",
    options: ["Síntesis de lípidos", "Biosíntesis proteica", "Fermentación", "Fosforilación oxidativa"],
    answer: "Fosforilación oxidativa",
  },
  {
    question: "¿Qué proceso construye proteínas usando información del ADN?",
    options: ["Glucólisis", "Síntesis de proteínas", "β-oxidación", "Fermentación"],
    answer: "Síntesis de proteínas",
  },
  {
    question: "¿Cuál es una ruta anabólica que forma glucosa a partir de compuestos no glucídicos?",
    options: ["Gluconeogénesis", "Cadena respiratoria", "Fotosíntesis", "Fermentación"],
    answer: "Gluconeogénesis",
  },
  {
    question: "¿Qué ruta degrada los ácidos grasos generando acetil-CoA?",
    options: ["Síntesis de ácidos grasos", "Fotosíntesis", "β-oxidación", "Síntesis de proteínas"],
    answer: "β-oxidación",
  },
];

const MetabolismRiddleGame: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleNext = () => {
    if (selected === riddles[current].answer) {
      setScore(score + 1);
    }
    if (current + 1 < riddles.length) {
      setCurrent(current + 1);
      setSelected("");
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setSelected("");
    setScore(0);
    setShowResult(false);
  };

  return (
    <Paper elevation={6} sx={{ p: 4, mt: 6, maxWidth: 600, mx: "auto" }}>
      <Typography variant="h4" fontWeight="bold" align="center" gutterBottom sx={{ color: "#3f51b5" }}>
        🎯 Minijuego: Adivina la Ruta Metabólica
      </Typography>
      <Typography variant="body1" align="center" gutterBottom sx={{ color: "#555" }}>
        ¿Puedes identificar correctamente si se trata de una ruta anabólica o catabólica?
      </Typography>

      <Divider sx={{ my: 3 }} />

      {showResult ? (
        <Box textAlign="center">
          <Typography variant="h5" fontWeight="bold" sx={{ color: "#388e3c" }}>
            Resultado final: {score} de {riddles.length} correctas.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleRestart}
            sx={{ mt: 3, width: "50%" }}
          >
            Jugar de nuevo
          </Button>
        </Box>
      ) : (
        <Box>
          <FormControl component="fieldset" fullWidth>
            <FormLabel component="legend">
              <Typography variant="h6" align="center" sx={{ fontWeight: "bold", color: "#333" }}>
                {riddles[current].question}
              </Typography>
            </FormLabel>
            <RadioGroup
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              sx={{ my: 2 }}
            >
              {riddles[current].options.map((opt) => (
                <FormControlLabel
                  key={opt}
                  value={opt}
                  control={<Radio />}
                  label={<Typography variant="body1">{opt}</Typography>}
                  sx={{ marginBottom: 2 }}
                />
              ))}
            </RadioGroup>
          </FormControl>

          <Grid container justifyContent="center" spacing={2}>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                disabled={!selected}
                sx={{
                  width: "100%",
                  padding: "12px 20px",
                  backgroundColor: selected ? "#3f51b5" : "#c5cae9",
                }}
              >
                {current + 1 === riddles.length ? "Finalizar" : "Siguiente"}
              </Button>
            </Grid>
          </Grid>
        </Box>
      )}
    </Paper>
  );
};

export default MetabolismRiddleGame;