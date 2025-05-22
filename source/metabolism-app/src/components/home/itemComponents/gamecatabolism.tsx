// CatabolismGame.tsx
import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  LinearProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { Bolt } from "@mui/icons-material";

// Preguntas sobre rutas catabólicas
const questions = [
  {
    id: 1,
    question: "¿Qué molécula se forma al final de la glucólisis?",
    options: ["Piruvato", "Acetil-CoA", "ATP", "Ácido láctico"],
    answer: "Piruvato",
  },
  {
    id: 2,
    question: "¿Dónde ocurre la cadena de transporte de electrones?",
    options: ["Citoplasma", "Núcleo", "Membrana mitocondrial interna", "Aparato de Golgi"],
    answer: "Membrana mitocondrial interna",
  },
  {
    id: 3,
    question: "¿Cuántos ATP produce la fermentación por cada glucosa?",
    options: ["2", "12", "36", "38"],
    answer: "2",
  },
];

const initialMolecules = [
  { id: 1, name: "Glucógeno", energy: 10, broken: false, questionId: 1 },
  { id: 2, name: "Triglicérido", energy: 15, broken: false, questionId: 2 },
  { id: 3, name: "Proteína", energy: 8, broken: false, questionId: 3 },
];

const CatabolismGame = () => {
  const [molecules, setMolecules] = useState(initialMolecules);
  const [totalEnergy, setTotalEnergy] = useState(0);
  const [selectedMolecule, setSelectedMolecule] = useState<number | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenQuestion = (id: number) => {
    setSelectedMolecule(id);
    setOpenDialog(true);
    setSelectedAnswer("");
  };

  const handleAnswer = () => {
    const mol = molecules.find((m) => m.id === selectedMolecule);
    const question = questions.find((q) => q.id === mol?.questionId);
    if (selectedAnswer === question?.answer && mol && !mol.broken) {
      setMolecules((prev) =>
        prev.map((m) =>
          m.id === mol.id ? { ...m, broken: true } : m
        )
      );
      setTotalEnergy((e) => e + mol.energy);
    }
    setOpenDialog(false);
  };

  return (
    <>
      <Card sx={{ maxWidth: 600, margin: "auto", mt: 4, p: 2, borderRadius: 4 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            🔬 Catabolismo: Rompe las moléculas
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Contesta correctamente para romper moléculas y liberar energía.
          </Typography>

          <Grid container spacing={2} mt={2}>
            {molecules.map((mol) => (
              <Grid size={{ xs: 12, sm: 6 }} key={mol.id}>
                <Card
                  sx={{
                    p: 2,
                    backgroundColor: mol.broken ? "#e0e0e0" : "#fafafa",
                    opacity: mol.broken ? 0.6 : 1,
                  }}
                >
                  <Typography variant="h6">{mol.name}</Typography>
                  <Typography variant="body2">
                    Energía: {mol.energy} <Bolt fontSize="small" />
                  </Typography>
                  <Button
                    variant="contained"
                    color="warning"
                    fullWidth
                    disabled={mol.broken}
                    onClick={() => handleOpenQuestion(mol.id)}
                    sx={{ mt: 1 }}
                  >
                    Contestar para romper
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Typography variant="h6" mt={4}>
            Energía Total: {totalEnergy}
          </Typography>
          <LinearProgress
            variant="determinate"
            value={(totalEnergy / 33) * 100}
            sx={{ height: 10, borderRadius: 5, mt: 1 }}
          />
        </CardContent>
      </Card>

      {/* Diálogo de pregunta */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Pregunta de Catabolismo</DialogTitle>
        <DialogContent>
          {selectedMolecule && (
            <>
              <Typography sx={{ mb: 2 }}>
                {
                  questions.find((q) =>
                    q.id === molecules.find((m) => m.id === selectedMolecule)?.questionId
                  )?.question
                }
              </Typography>
              <RadioGroup
                value={selectedAnswer}
                onChange={(e) => setSelectedAnswer(e.target.value)}
              >
                {
                  questions.find((q) =>
                    q.id === molecules.find((m) => m.id === selectedMolecule)?.questionId
                  )?.options.map((opt) => (
                    <FormControlLabel
                      key={opt}
                      value={opt}
                      control={<Radio />}
                      label={opt}
                    />
                  ))
                }
              </RadioGroup>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancelar</Button>
          <Button
            onClick={handleAnswer}
            disabled={!selectedAnswer}
            variant="contained"
            color="success"
          >
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CatabolismGame;