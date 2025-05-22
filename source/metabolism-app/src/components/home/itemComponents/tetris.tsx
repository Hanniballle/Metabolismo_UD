import React, { useEffect, useState, useRef } from "react";
import { Box, Button, Typography, Grid, Paper, Stack } from "@mui/material";

const ROWS = 12;
const COLS = 6;
const LINE_GOAL = 5;
const COLORS = ["#e57373", "#81c784", "#64b5f6", "#ffb74d", "#ba68c8"];

const SHAPES = {
  I: [[1, 1, 1, 1]],
  O: [
    [1, 1],
    [1, 1],
  ],
  T: [
    [0, 1, 0],
    [1, 1, 1],
  ],
  L: [
    [1, 0, 0],
    [1, 1, 1],
  ],
  J: [
    [0, 0, 1],
    [1, 1, 1],
  ],
  S: [
    [0, 1, 1],
    [1, 1, 0],
  ],
  Z: [
    [1, 1, 0],
    [0, 1, 1],
  ],
} as const;

type ShapeKey = keyof typeof SHAPES;

const TetrisMetabolism = () => { type Piece = {
  shape: number[][];
  color: string;
  x: number;
  y: number;
};

const getRandomPiece = (): Piece => {
  const keys = Object.keys(SHAPES) as ShapeKey[];
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  const shape = SHAPES[randomKey].map((row) => [...row]); // <- aquí se vuelve mutable
  const color = COLORS[Math.floor(Math.random() * COLORS.length)];
  return { shape, color, x: 1, y: 0 };
};

  const [grid, setGrid] = useState<(string | null)[][]>([]);
  const [currentPiece, setCurrentPiece] = useState<Piece | null>(null);
  const [playing, setPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [linesCleared, setLinesCleared] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const initGrid = () => Array.from({ length: ROWS }, () => Array(COLS).fill(null));

  const startGame = () => {
    setGrid(initGrid());
    setCurrentPiece(getRandomPiece());
    setScore(0);
    setLinesCleared(0);
    setGameOver(false);
    setPlaying(true);
  };

  const mergePiece = (grid: (string | null)[][], piece: Piece): (string | null)[][] => {
    const newGrid = grid.map((row) => [...row]);
    piece.shape.forEach((row, y) =>
      row.forEach((value, x) => {
        if (value) {
          const gx = piece.x + x;
          const gy = piece.y + y;
          if (gy >= 0 && gy < ROWS && gx >= 0 && gx < COLS) {
            newGrid[gy][gx] = piece.color;
          }
        }
      })
    );
    return newGrid;
  };

  const collide = (grid: (string | null)[][], piece: Piece): boolean => {
  return piece.shape.some((row, y) =>
    row.some((value, x) => {
      if (!value) return false;
      const gx = piece.x + x;
      const gy = piece.y + y;
      return (
        gx < 0 ||
        gx >= COLS ||
        gy >= ROWS ||
        (gy >= 0 && grid[gy]?.[gx])
      );
    })
  );
};


const clearLines = (grid: (string | null)[][]): { newGrid: (string | null)[][]; lines: number } => {
  const newGrid = grid.filter((row) => row.some((cell) => !cell));
  const lines = ROWS - newGrid.length;
  while (newGrid.length < ROWS) {
    newGrid.unshift(Array(COLS).fill(null));
  }
  return { newGrid, lines };
};

  const movePiece = (dx: number, dy: number): void => {
    if (!currentPiece) return;
    const moved = { ...currentPiece, x: currentPiece.x + dx, y: currentPiece.y + dy };
    if (!collide(grid, moved)) {
      setCurrentPiece(moved);
    } else if (dy === 1) {
      const merged = mergePiece(grid, currentPiece);
      const { newGrid, lines } = clearLines(merged);
      setGrid(newGrid);
      setScore((s) => s + lines * 100);
  
      setLinesCleared((prev) => {
        const totalLines = prev + lines;
        if (totalLines >= LINE_GOAL) {
          setGameOver(true);
          setPlaying(false);
          if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
          }
        }
        return totalLines;
      });
  
      const next = getRandomPiece();
      if (collide(newGrid, next)) {
        setGameOver(true);
        setPlaying(false);
        if (intervalRef.current !== null) {
          clearInterval(intervalRef.current);
        };
      } else {
        setCurrentPiece(next);
      }
    }
  };
  const rotate = () => {
    if (!currentPiece) return;
    const rotated = {
      ...currentPiece,
      shape: currentPiece.shape[0].map((_, i) =>
        currentPiece.shape.map((row) => row[i]).reverse()
      ),
    };
    if (!collide(grid, rotated)) {
      setCurrentPiece(rotated);
    }
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!playing) return;

      // Evitar scroll al usar flechas
      if (
        ["ArrowLeft", "ArrowRight", "ArrowDown", "ArrowUp"].includes(e.key)
      ) {
        e.preventDefault();
      }

      switch (e.key) {
        case "ArrowLeft":
          movePiece(-1, 0);
          break;
        case "ArrowRight":
          movePiece(1, 0);
          break;
        case "ArrowDown":
          movePiece(0, 1);
          break;
        case "ArrowUp":
          rotate();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [playing, currentPiece, grid]);

  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => movePiece(0, 1), 600);
      return () => clearInterval(intervalRef.current!);
    }
  }, [playing, currentPiece]);

  return (
    <Box textAlign="center" p={2} tabIndex={0}>
      <Typography variant="h5" gutterBottom>
        Dato curioso de la historia del metabolismo
      </Typography>
      <Typography variant="body2" color="textSecondary" gutterBottom>
        Usa las flechas para mover y rotar las piezas. El juego termina cuando destruyas 5 líneas.
      </Typography>

      <Stack alignItems="center" mt={2}>
        <Grid container spacing={0.3} sx={{ width: COLS * 24 }}>
          {grid.map((row, y) =>
            row.map((cell, x) => {
              let color = cell;
              currentPiece?.shape.forEach((r, py) =>
                r.forEach((v, px) => {
                  if (
                    v &&
                    currentPiece.y + py === y &&
                    currentPiece.x + px === x
                  ) {
                    color = currentPiece.color;
                  }
                })
              );
              return (
                <Grid component="div" key={`${y}-${x}`}>
                  <Paper
                    elevation={2}
                    sx={{
                      width: 22,
                      height: 22,
                      backgroundColor: color || "#eeeeee",
                      border: "1px solid #ccc",
                    }}
                  />
                </Grid>
              );
            })
          )}
        </Grid>
      </Stack>

      <Typography mt={2} fontWeight="bold">
        Puntuación: {score}
      </Typography>

      {gameOver && linesCleared >= LINE_GOAL && (
        <Typography mt={2} color="secondary" fontStyle="italic">
          ⚗️ ¿Sabías que… en la Edad Media la alquimia influyó en la fisiología, y Paracelso
          defendía que los procesos digestivos eran transformaciones químicas internas del cuerpo?
        </Typography>
      )}

      {!playing && (
        <Button
          variant="contained"
          color="primary"
          onClick={startGame}
          sx={{ mt: 2 }}
        >
          {gameOver ? "Volver a jugar" : "Play"}
        </Button>
      )}
    </Box>
  );
};

export default TetrisMetabolism;