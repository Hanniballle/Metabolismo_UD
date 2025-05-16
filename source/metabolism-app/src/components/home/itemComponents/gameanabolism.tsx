"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Radio,
  RadioGroup,
  FormControlLabel,
  Paper,
  Container,
  Divider,
} from "@mui/material";

const questions = [
  {
    question: "¿Qué proceso permite la formación de proteínas?",
    options: ["Fotosíntesis", "Catabolismo", "Biosíntesis proteica"],
    answer: "Biosíntesis proteica",
  },
  {
    question: "¿Dónde ocurre la síntesis de ácidos grasos?",
    options: ["Mitocondria", "Citosol", "Núcleo"],
    answer: "Citosol",
  },
  {
    question: "¿Qué molécula es precursora del malonil-CoA?",
    options: ["ADN", "Acetil-CoA", "Piruvato"],
    answer: "Acetil-CoA",
  },
  {
    question: "¿Qué proceso convierte compuestos inorgánicos en orgánicos?",
    options: ["Respiración celular", "Fotosíntesis", "Glucólisis"],
    answer: "Fotosíntesis",
  },
  {
    question: "¿Cuál es la función de la gluconeogénesis?",
    options: [
      "Degradar glucosa",
      "Formar glucosa a partir de compuestos no glucídicos",
      "Transportar oxígeno",
    ],
    answer: "Formar glucosa a partir de compuestos no glucídicos",
  },
];

const initialBoard = Array(9).fill(null);

const TicTacAnabolismo = () => {
  const [board, setBoard] = useState(initialBoard);
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState<string | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const [pendingIndex, setPendingIndex] = useState<number | null>(null);

  const handleCellClick = (index: number) => {
    if (board[index] || winner) return;
    setPendingIndex(index);
    setSelected("");
    setOpen(true);
  };

  const handleSubmitAnswer = () => {
    const correct =
      questions[questionIndex % questions.length].answer === selected;
    if (correct && pendingIndex !== null) {
      const newBoard = [...board];
      newBoard[pendingIndex] = turn;
      setBoard(newBoard);
      const hasWinner = checkWinner(newBoard);
      if (hasWinner) setWinner(turn);
      else setTurn(turn === "X" ? "O" : "X");
    }
    setOpen(false);
    setQuestionIndex((q) => q + 1);
  };

  const checkWinner = (b: string[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let [a, b1, c] of lines) {
      if (b[a] && b[a] === b[b1] && b[a] === b[c]) return b[a];
    }
    return null;
  };

  const restart = () => {
    setBoard(initialBoard);
    setTurn("X");
    setWinner(null);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper elevation={6} sx={{ p: 4, borderRadius: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          🎯 Tres en Raya - Anabolismo
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="h6" align="center" color="text.secondary" gutterBottom>
          Turno del jugador: <strong>{turn}</strong>
        </Typography>

        <Grid container spacing={2} justifyContent="center" sx={{ mt: 2, mb: 2 }}>
          {board.map((cell, index) => (
            <Grid size={{ xs:4,}} key={index}>
              <Button
                onClick={() => handleCellClick(index)}
                variant="outlined"
                sx={{
                  width: "100%",
                  height: 100,
                  fontSize: "2rem",
                  borderRadius: 2,
                  bgcolor: "#f9f9f9",
                }}
              >
                {cell}
              </Button>
            </Grid>
          ))}
        </Grid>

        {winner && (
          <Typography variant="h5" align="center" color="success.main" sx={{ mt: 2 }}>
            🏆 ¡Ganó el jugador {winner}!
          </Typography>
        )}

        <Box textAlign="center">
          <Button
            onClick={restart}
            variant="contained"
            color="secondary"
            sx={{ mt: 3, px: 4 }}
          >
            Reiniciar
          </Button>
        </Box>
      </Paper>

      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>🧠 Responde para colocar tu ficha</DialogTitle>
        <DialogContent>
          <Typography sx={{ mb: 2 }}>
            {questions[questionIndex % questions.length].question}
          </Typography>
          <RadioGroup
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            {questions[questionIndex % questions.length].options.map((opt, i) => (
              <FormControlLabel key={i} value={opt} control={<Radio />} label={opt} />
            ))}
          </RadioGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmitAnswer} disabled={!selected} variant="contained">
            Responder
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default TicTacAnabolismo;