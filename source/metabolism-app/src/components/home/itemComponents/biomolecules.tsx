import React, { useState } from "react";
import { Typography, Box, Paper, Divider, Card, CardContent, Button } from "@mui/material";
import MoleculasInorganicas from "./MoleculasInorganicas";
import BiomoleculesDiagram from "./BiomoleculesDiagram";
import { SectionComponentProps } from "../detailView";
import ReturnButton from "../returnButton";
import PacmanGame from "./Packman";

const Biomolecules: React.FC<SectionComponentProps> = ({onBack}) => {
  const questions = [
    {
      question: "¿Cuál de estos elementos NO es parte principal de las biomoléculas?",
      options: ["Carbono", "Hidrógeno", "Plomo", "Nitrógeno"],
      answer: "Plomo",
    },
    {
      question: "¿Qué tipo de biomolécula es la principal fuente de energía?",
      options: ["Proteínas", "Glúcidos", "Vitaminas", "Ácidos nucleicos"],
      answer: "Glúcidos",
    },
    {
      question: "¿Cuál de estos es un lípido insaponificable?",
      options: ["Triglicérido", "Colesterol", "Fosfolípido", "Cera"],
      answer: "Colesterol",
    },
    {
      question: "¿Qué molécula inorgánica participa en la fotosíntesis?",
      options: ["NH3", "O2", "CO2", "CH4"],
      answer: "CO2",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option: string) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }
    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#fff",
        px: 2,
        py: 4,
      }}
    >
      <Box maxWidth="900px" mx="auto">
        <ReturnButton onBack={onBack} />
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Biomoléculas
        </Typography>

        <Typography variant="body1" paragraph>
        Las biomoléculas son moléculas esenciales que forman parte de los seres vivos. Están compuestas principalmente por seis elementos: carbono (C), hidrógeno (H), oxígeno (O), nitrógeno (N), fósforo (P) y azufre (S). Estos elementos conforman biomoléculas como aminoácidos, glúcidos, lípidos, proteínas, vitaminas y ácidos nucleicos.
        </Typography>

        <Box my={4}>
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/G2VcCAAEQso"
            title="Biomoléculas - YouTube"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
          <Typography variant="caption">
            Fuente: Lifeder Edu. (2021). ¿Qué son las BIOMOLÉCULAS? Sus funciones, tipos y ejemplos.
          </Typography>
          <PacmanGame/>
        </Box>

        <Divider sx={{ my: 4 }} />
        <Typography variant="body1" paragraph>
        Las biomoléculas tienen la capacidad de formar enlaces covalentes estables, esqueletos tridimensionales de carbono, enlaces múltiples y diversas estructuras (lineales, cíclicas, etc.), lo que permite una gran variedad de compuestos con diferentes propiedades. Estas moléculas se transforman o acumulan en los organismos, y su síntesis requiere energía. Cumplen funciones vitales como el metabolismo, la construcción celular y el control biológico. Según la naturaleza química, las biomoléculas son: 

        </Typography>

        <Paper elevation={0} sx={{ p: 0, mb: 0 }}>
          <Typography variant="h5" fontWeight="bold">Biomoléculas inorgánicas</Typography>
          <Typography variant="body1" paragraph>
          Son aquellas que tienen una función fisiológica en los seres vivos, pero que no polimerizan. Por ejemplo, el CO2 es producto de desecho en la respiración, y también reactivo para la fotosíntesis. El CO2, no forma polímeros, por lo que no entra dentro de las biomoléculas orgánicas, que sí forman cadenas por la unión de monómeros.
          Está el amoniaco (NH3), el CO2, el agua (H2O), entre otras, son ejemplos de moléculas inorgánicas que participan en los procesos de la vida, dirigidos por las biomoléculas.
          </Typography>
          <MoleculasInorganicas/>
        </Paper>

        <Paper elevation={0} sx={{ p: 0, mb: 4 }}>
          <Typography variant="h5" fontWeight="bold">Biomoléculas orgánicas</Typography>
          <Typography variant="body1" paragraph>
          Las biomoléculas son sintetizadas principalmente por los seres vivos y tienen una estructura basada en carbono. Están compuestas principalmente por carbono, hidrógeno y oxígeno, y frecuentemente también por nitrógeno, fósforo y azufre. Además, pueden contener oligoelementos como hierro, cobalto y níquel, que, aunque se encuentran en pequeñas cantidades, son esenciales para la vida. 
          Las biomoléculas orgánicas pueden agruparse en seis grandes tipos: 
          </Typography>

          <Typography variant="h6" fontWeight="bold" gutterBottom>Glúcidos o carbohidratos</Typography>
          <Typography variant="body1" paragraph>
          Los carbohidratos o glúcidos son la principal fuente de energía para los seres vivos. La glucosa inicia la glucólisis, una vía metabólica antigua presente en todos los organismos. Las plantas almacenan energía en forma de almidón (en amiloplastos) y los animales como glucógeno, diferenciados por su estructura ramificada. Además, algunos glúcidos cumplen funciones estructurales, como la celulosa en plantas y la quitina en artrópodos. 
          </Typography>

          <Typography variant="h6" fontWeight="bold" gutterBottom>Lípidos</Typography>
          <Typography variant="body1" paragraph>
          Los lípidos son moléculas formadas por carbono, hidrógeno y oxígeno, y a veces también por fósforo y nitrógeno. Son anfipáticos, con una parte polar y otra apolar, lo que les permite formar membranas. Son insolubles en agua pero solubles en solventes orgánicos. Los lípidos saponificables incluyen fosfolípidos, que forman la bicapa de las membranas celulares, y triglicéridos, que almacenan energía en los animales. Los insaponificables, como esteroides e isoprenoides, tienen funciones reguladoras (ej. colesterol, hormonas sexuales, prostaglandinas).
          </Typography>

          <Typography variant="h6" fontWeight="bold" gutterBottom>Aminoácidos</Typography>
          <Typography variant="body1" paragraph>
          Los aminoácidos son moléculas orgánicas que contienen un grupo amino (-NH₂) y un grupo carboxilo (-COOH). Los más comunes y relevantes son aquellos que forman parte de las proteínas, ya que desempeñan un papel clave en casi todos los procesos biológicos. Son la base estructural de las proteínas.
          Constituyen un grupo muy heterogéneo de sustancias químicas, tanto por su estructura como por las diversas funciones que cumplen en los organismos.
          </Typography>

          <Typography variant="h6" fontWeight="bold" gutterBottom>Proteínas</Typography>
          <Typography variant="body1" paragraph>
          Las proteínas son las biomoléculas con mayor diversidad funcional en los seres vivos. Intervienen en casi todos los procesos biológicos. Actúan como enzimas, hormonas, transportadoras (como la hemoglobina), anticuerpos, receptores celulares y proteínas contráctiles (actina y miosina). También forman parte de estructuras de soporte, como el colágeno en tejidos resistentes.
          </Typography>

          <Typography variant="h6" fontWeight="bold" gutterBottom>Ácidos nucleicos</Typography>
          <Typography variant="body1" paragraph>
          Los ácidos nucleicos, ADN y ARN, desempeñan, tal vez, la función más importante para la vida: contener, de manera codificada, las instrucciones necesarias para el desarrollo y funcionamiento de la célula. El ADN tiene la capacidad de replicarse, transmitiendo así dichas instrucciones a las células hijas que heredarán la información. 
          </Typography>

          <Typography variant="h6" fontWeight="bold" gutterBottom>Vitaminas</Typography>
          <Typography variant="body1">
          Los requisitos mínimos diarios de las vitaminas no son muy altos, se necesitan tan solo dosis de miligramos o microgramos contenidas en grandes cantidades (proporcionalmente hablando) de alimentos naturales. Tanto la deficiencia como el exceso de los niveles vitamínicos corporales pueden producir enfermedades que van desde leves a graves e incluso muy graves como la pelagra o la demencia entre otras, e incluso la muerte. Algunas pueden servir como ayuda a las enzimas que actúan como cofactor, como es el caso de las vitaminas hidrosolubles.
          </Typography>
          <BiomoleculesDiagram/>
        </Paper>
        <Divider sx={{ my: 5 }} />
        <Typography variant="h6" fontWeight="bold" gutterBottom>🎮 Minijuego: Quiz de Biomoléculas</Typography>
          <Typography variant="body1">
          Realiza este pequeño minijuego para poner a prueba lo que has aprendido sobre las biomoléculas:
          </Typography>
          <Divider sx={{ my: 4 }} />
        
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <Card sx={{ maxWidth: 500, padding: 2, borderRadius: 4, border: '1px solid #ccc' }}>
            <CardContent>
              {!showResult ? (
                <>
                  <Typography variant="h5" gutterBottom>
                    {questions[current].question}
                  </Typography>
                  {questions[current].options.map((option, index) => (
                    <Button
                      key={index}
                      variant="outlined"
                      onClick={() => handleAnswer(option)}
                      sx={{ margin: 1, width: "100%" }}
                    >
                      {option}
                    </Button>
                  ))}
                  <Typography variant="body2" mt={2}>
                    Pregunta {current + 1} de {questions.length}
                  </Typography>
                </>
              ) : (
                <>
                  <Typography variant="h4" gutterBottom>
                    ¡Resultados!
                  </Typography>
                  <Typography variant="h6">
                    Tu puntuación fue {score} de {questions.length}
                  </Typography>
                  <Button variant="contained" color="primary" onClick={restartQuiz} sx={{ mt: 2 }}>
                    Jugar de nuevo
                  </Button>
                </>
              )}
            </CardContent>
          </Card>
        </Box>
      </Box>
      <Divider sx={{ my: 5 }} />
      <Typography variant="caption" color="textSecondary">
          Fuentes: Lehninger, A. L. (1976)... Khan Academy. Wikipedia.
        </Typography>
    </Box>
  );
};

export default Biomolecules;