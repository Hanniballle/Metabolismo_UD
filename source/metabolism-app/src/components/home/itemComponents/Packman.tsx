import React, { useState, useEffect, useRef } from 'react';
import { Box, Button, Typography, Divider } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Paper from '@mui/material/Paper';

const PacmanGame = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [pacmanPos, setPacmanPos] = useState({ x: 0, y: 0 });
  const [ghostPos, setGhostPos] = useState({ x: 200, y: 200 });
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);

  const gameRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isPlaying || gameOver || win) return;
  
    const handleKeyDown = (e: KeyboardEvent) => {
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
        e.preventDefault();
      }
      setPacmanPos((pos) => {
        const newPos = { ...pos };
        const step = 20;
        const maxX = 276;
        const maxY = 276;
        if (e.key === 'ArrowUp') newPos.y = Math.max(0, pos.y - step);
        if (e.key === 'ArrowDown') newPos.y = Math.min(maxY, pos.y + step);
        if (e.key === 'ArrowLeft') newPos.x = Math.max(0, pos.x - step);
        if (e.key === 'ArrowRight') newPos.x = Math.min(maxX, pos.x + step);
        return newPos;
      });
    };
  
    window.addEventListener('keydown', handleKeyDown, { passive: false });
    return () => window.removeEventListener('keydown', handleKeyDown);
   }, [isPlaying, gameOver, win]);
  useEffect(() => {
    if (!isPlaying || gameOver || win) return;

    const ghostInterval = setInterval(() => {
      setGhostPos((ghost) => {
        const dx = pacmanPos.x - ghost.x;
        const dy = pacmanPos.y - ghost.y;
        const step = 10;
        return {
          x: ghost.x + Math.sign(dx) * Math.min(step, Math.abs(dx)),
          y: ghost.y + Math.sign(dy) * Math.min(step, Math.abs(dy)),
        };
      });
    }, 150);

    if (
      Math.abs(pacmanPos.x - ghostPos.x) < 24 &&
      Math.abs(pacmanPos.y - ghostPos.y) < 24
    ) {
      setGameOver(true);
    }

    if (pacmanPos.x > 270 && pacmanPos.y > 270) {
      setWin(true);
    }

    return () => clearInterval(ghostInterval);
  }, [pacmanPos, ghostPos, isPlaying, gameOver, win]);

  const handlePlay = () => {
    setIsPlaying(true);
    setPacmanPos({ x: 0, y: 0 });
    setGhostPos({ x: 200, y: 200 });
    setGameOver(false);
    setWin(false);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#fafafa',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
        overflow: 'hidden'
      }}
    >
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Dato curioso de la historia del metabolismo
      </Typography>

      <Typography variant="body2" textAlign="center" mb={2} maxWidth={400}>
        Controla a Pac-Man con las flechas del teclado y evita que el fantasma rojo te atrape.
        Tu objetivo es llegar a la esquina inferior derecha del tablero (verde). ¡Buena suerte!
      </Typography>

      <Divider sx={{ width: '100%', maxWidth: 400, mb: 2 }} />

      {!isPlaying && !win && !gameOver && (
        <Button
          variant="contained"
          color="warning"
          startIcon={<PlayArrowIcon />}
          onClick={handlePlay}
          sx={{ borderRadius: '999px', px: 4, py: 1 }}
        >
          Jugar
        </Button>
      )}

      {(gameOver || win) && (
        <Box mt={4} textAlign="center">
          {gameOver && (
            <Typography variant="h6" color="error" fontWeight="bold">
              ¡Te atraparon! 😵
            </Typography>
          )}
          {win && (
            <Typography variant="body1" color="success.main" fontWeight="bold">
              🏺 ¿Sabías que… en la Antigua Grecia (siglo V a.C.)<br />
              Hipócrates y Galeno pensaban que la salud era el resultado del equilibrio de cuatro humores<br />
              (sangre, flema, bilis amarilla y negra), y ese balance era visto como clave para el funcionamiento del cuerpo?
            </Typography>
          )}
          <Button
            variant="contained"
            color="warning"
            onClick={handlePlay}
            sx={{ mt: 2, borderRadius: '999px' }}
          >
            Jugar de nuevo
          </Button>
        </Box>
      )}

      <Paper
        elevation={6}
        ref={gameRef}
        sx={{
          position: 'relative',
          width: 300,
          height: 300,
          mt: 4,
          backgroundColor: '#212121',
          border: '4px solid #ffca28',
          borderRadius: 2,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: 24,
            height: 24,
            backgroundColor: '#fdd835',
            borderRadius: '50%',
            top: pacmanPos.y,
            left: pacmanPos.x,
            transition: 'top 0.1s, left 0.1s',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            width: 24,
            height: 24,
            backgroundColor: '#e53935',
            borderRadius: '50%',
            top: ghostPos.y,
            left: ghostPos.x,
            transition: 'top 0.2s, left 0.2s',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            width: 24,
            height: 24,
            backgroundColor: '#43a047',
            borderRadius: '50%',
            bottom: 0,
            right: 0,
          }}
        />
      </Paper>
    </Box>
  );
};

export default PacmanGame;
