import React, { useState, useEffect, useRef } from 'react';
import { Box, Button, Typography, Card, CardContent } from '@mui/material';

const gridSize = 10;
const cellSize = 30;
const initialSnake = [{ x: 0, y: 0 }];
const getRandomApple = () => ({
  x: Math.floor(Math.random() * gridSize),
  y: Math.floor(Math.random() * gridSize),
});

// Lista de datos curiosos sobre el metabolismo
const metabolismFacts = [
  "💡 Hipócrates y Galeno creían que la salud dependía del equilibrio de cuatro humores: sangre, flema, bilis amarilla y negra.",
  "📜 En el siglo XIII, Ibn al-Nafis propuso que el cuerpo se renovaba constantemente, anticipando ideas modernas del metabolismo.",
  "⚖️ En 1614, Santorio Santorio usó una balanza para descubrir que perdemos peso por evaporación respiratoria.",
  "🔥 Antoine Lavoisier, con su calorímetro, mostró que el metabolismo libera energía y gases como CO₂.",
  "🧪 Justus von Liebig intentó rastrear cómo los alimentos se transforman en energía y tejidos.",
  "🍷 Louis Pasteur demostró que la fermentación era causada por microorganismos como las levaduras.",
  "🧬 En 1897, Eduard Buchner mostró que las enzimas pueden fermentar azúcares fuera de una célula viva.",
  "🔁 Hans Krebs descubrió en 1937 el ciclo del ácido cítrico, esencial en la respiración celular.",
  "🌿 Melvin Calvin describió cómo el carbono se fija en la fotosíntesis mediante el ciclo de Calvin.",
  "⚡ Albert L. Lehninger demostró que la mitocondria es el sitio clave de producción de ATP en las células."
];

const SnakeGame = () => {
  const [snake, setSnake] = useState(initialSnake);
  const [direction, setDirection] = useState({ x: 1, y: 0 });
  const [apple, setApple] = useState(getRandomApple);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasWon, setHasWon] = useState(false);
  const [applesEaten, setApplesEaten] = useState(0);
  const [randomFact, setRandomFact] = useState('');
  const intervalRef = useRef<number | null>(null);

  const moveSnake = () => {
    setSnake(prev => {
      const head = prev[0];
      const newHead = { x: (head.x + direction.x + gridSize) % gridSize, y: (head.y + direction.y + gridSize) % gridSize };

      if (prev.some(seg => seg.x === newHead.x && seg.y === newHead.y)) {
        if (intervalRef.current !== null) {
          clearInterval(intervalRef.current);
        }
        setIsPlaying(false);
        return initialSnake;
      }

      const newSnake = [newHead, ...prev];

      if (newHead.x === apple.x && newHead.y === apple.y) {
        const newApple = getRandomApple();
        setApple(newApple);
        setApplesEaten(prev => {
          const total = prev + 0.5;
          if (total >= 5) {
            if (intervalRef.current !== null) {
              clearInterval(intervalRef.current);
            }
            setHasWon(true);
            setIsPlaying(false);
            setRandomFact(
              metabolismFacts[Math.floor(Math.random() * metabolismFacts.length)]
            );
          }
          return total;
        });
        return newSnake;
      } else {
        newSnake.pop();
        return newSnake;
      }
    });
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowUp':
        if (direction.y === 0) setDirection({ x: 0, y: -1 });
        break;
      case 'ArrowDown':
        if (direction.y === 0) setDirection({ x: 0, y: 1 });
        break;
      case 'ArrowLeft':
        if (direction.x === 0) setDirection({ x: -1, y: 0 });
        break;
      case 'ArrowRight':
        if (direction.x === 0) setDirection({ x: 1, y: 0 });
        break;
      default:
        break;
    }
    e.preventDefault();
  };

  const startGame = () => {
    setSnake(initialSnake);
    setDirection({ x: 1, y: 0 });
    setApple(getRandomApple());
    setApplesEaten(0);
    setHasWon(false);
    setIsPlaying(true);
  };

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(moveSnake, 180);
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      };
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isPlaying, direction]);

  return (
    <Box display="flex" justifyContent="center" mt={4}>
      <Card sx={{ width: 420, borderRadius: 4, boxShadow: 6, p: 2 }}>
        <CardContent>
          <Typography variant="h5" fontWeight="bold" gutterBottom textAlign="center">
            🧠 Dato curioso de la historia del metabolismo
          </Typography>

          {!isPlaying && !hasWon && (
            <>
              <Typography variant="body1" gutterBottom textAlign="center">
                Usa las flechas del teclado para mover la culebra y comer 5 manzanas 🍎. ¡Evita chocar contigo mismo!
              </Typography>
              <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={startGame}>
                Jugar
              </Button>
            </>
          )}

          {hasWon && (
            <>
              <Typography
                variant="body1"
                color="success.main"
                mt={2}
                textAlign="center"
                sx={{ fontStyle: 'italic' }}
              >
                {randomFact}
              </Typography>
              <Button variant="outlined" color="secondary" fullWidth sx={{ mt: 2 }} onClick={startGame}>
                Volver a jugar
              </Button>
            </>
          )}

          <Box
            mt={3}
            display="grid"
            justifyContent="center"
            gridTemplateColumns={`repeat(${gridSize}, ${cellSize}px)`}
            gridTemplateRows={`repeat(${gridSize}, ${cellSize}px)`}
            gap={0.5}
            border="2px solid #ccc"
            borderRadius={3}
            overflow="hidden"
          >
            {[...Array(gridSize * gridSize)].map((_, idx) => {
              const x = idx % gridSize;
              const y = Math.floor(idx / gridSize);
              const isSnake = snake.some(seg => seg.x === x && seg.y === y);
              const isApple = apple.x === x && apple.y === y;

              return (
                <Box
                  key={idx}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    width: `${cellSize}px`,
                    height: `${cellSize}px`,
                    backgroundColor: isSnake ? '#4caf50' : '#f0f0f0',
                    fontSize: isApple ? 20 : 0,
                  }}
                >
                  {isApple ? '🍎' : ''}
                </Box>
              );
            })}
          </Box>

          {isPlaying && (
            <Typography mt={2} textAlign="center">
              🍏 Manzanas comidas: {applesEaten}/5
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default SnakeGame;