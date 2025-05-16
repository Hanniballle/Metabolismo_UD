import React, { useState } from "react";
import { Typography, Box, Paper, Divider, Card, CardContent, LinearProgress, Grid } from "@mui/material";
import ThermodynamicsCard from "./ThermodynamicsCard";
import BombilloEnergia from "./BombilloEnergia";
import SnakeGame from "./snake";

const energyItems = [
  { id: 1, label: "ATP", correctZone: "uso" },
  { id: 2, label: "Glucosa", correctZone: "produccion" },
  { id: 3, label: "Calor", correctZone: "perdida" },
  { id: 4, label: "ΔG", correctZone: "viable" },
];

const dropZones = [
  { id: "uso", label: "Se utiliza para el trabajo celular" },
  { id: "produccion", label: "Fuente de energía química" },
  { id: "perdida", label: "No se puede usar para trabajo útil" },
  { id: "viable", label: "Indica que una reacción química es energéticamente viable." },
];

const Bioenergetics: React.FC = () => {
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState<number[]>([]);
  const [feedback, setFeedback] = useState('');

  const handleDrop = (itemId: number, zoneId: string) => {
    const item = energyItems.find((e) => e.id === itemId);
    if (item?.correctZone === zoneId && !completed.includes(itemId)) {
      setScore(score + 25);
      setCompleted([...completed, itemId]);
      setFeedback("¡Correcto!");
    } else {
      setFeedback("Intenta de nuevo.");
    }
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
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Bioenergética
        </Typography>

        <Typography variant="body1" paragraph>
          La bioenergética estudia cómo los organismos absorben, transforman y utilizan la energía. Se basa en principios de la termodinámica, especialmente en la energía libre de Gibbs (ΔG), que permite predecir si una reacción química es energéticamente viable.
        </Typography>

        <Box my={4}>
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/QiwW_9_1w0U"
            title="Bioenergética en 20 minutos FÁCIL. #UBAXXI y #CBC  - YouTube"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <Typography variant="caption">
            iolyl_. (2021).Clase 20. Bioenergética en 20 minutos FÁCIL. #UBAXXI y #CBC.
          </Typography>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Paper elevation={0} sx={{ p: 0, mb: 0 }}>
          <Typography variant="h5" fontWeight="bold">
            ¿Que es la energía?
          </Typography>
          <Typography variant="body1" paragraph>
            La energía es la capacidad de los cuerpos para realizar transformaciones (mediante trabajo o mediante calor) en ellos mismos o en otros cuerpos. Es decir, el concepto de energía se define como la capacidad de hacer funcionar las cosas. Ejemplo: como se muestra en la Figura 1, la energia electrica permite que la bobilla alumbre.
          </Typography>
          <BombilloEnergia/>
          <Divider sx={{ my: 4 }} />
          <Typography variant="body2" paragraph>
            Figura 1. Representación de trabajo y energía con una bombilla, presiona el boton para que el bombillo se ilumine.
          </Typography>
        </Paper>

        <Paper elevation={0} sx={{ p: 0, mb: 4 }}>
          <Typography variant="h5" fontWeight="bold">
            Metabolismo
          </Typography>
          <Typography variant="body1" paragraph>
            El metabolismo celular se define como el conjunto de reacciones químicas que ocurren en una célula para mantener la vida. ( se ve en pronfundidad en el apartado de metabolismo).
          </Typography>

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            El ATP
          </Typography>
          <Typography variant="body1" paragraph>
            El ATP o trifosfato de adenosin es la conexión entre los sistemas que producen la energía y los que la utilizan; la degradación oxidativa de los alimentos es un proceso exergónico, a pesar de la necesidad de energía de activación para iniciar las reacciones correspondientes. 
          </Typography>

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Relaciones termodinámicas
          </Typography>
          <Typography variant="body1" paragraph>
          Las células vivas están sometidas a los principios de la termodinámica, que rigen cómo se maneja y se transfiere la energía en sistemas biológicos. Según el primer principio de la termodinámica, también conocido como la ley de conservación de la energía, la energía no se puede crear ni destruir, solo puede cambiar de forma. Esto significa que, en las células, las distintas formas de energía, como la energía química, eléctrica y térmica, se transforman para realizar funciones vitales. Un ejemplo clave de esta conversión es la glucólisis, donde la energía química almacenada en la glucosa se transforma en ATP (adenosín trifosfato), la principal molécula de energía utilizada por las células.

El segundo principio de la termodinámica establece que en cualquier proceso energético, la entropía, o el desorden, siempre tiende a aumentar. En términos biológicos, la entropía refleja la energía que se dispersa y no puede realizar trabajo útil. Aunque la tendencia natural es que la entropía aumente, los sistemas biológicos, como las células, están lejos del equilibrio termodinámico, lo que les permite realizar procesos organizados y eficientes. Para entender cómo los sistemas biológicos gestionan esta energía, se utiliza la energía libre de Gibbs, que es una medida de la capacidad de un sistema para realizar trabajo. Los procesos que ocurren espontáneamente en las células están impulsados por un cambio negativo en la energía libre de Gibbs, lo que significa que esos procesos son termodinámicamente favorables.

De esta manera, las células manejan de manera eficiente el flujo de energía, asegurándose de que los recursos estén disponibles para llevar a cabo procesos biológicos esenciales, mientras mantienen el desorden dentro de límites que les permiten seguir funcionando adecuadamente.
          </Typography>
          <ThermodynamicsCard/>
          <Divider sx={{ my: 4 }} />

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Energía de Gibbs
          </Typography>
          <Typography variant="body1" paragraph>
            La energía de Gibbs (designada con la letra G) de un sistema es la parte de la energía total del sistema que está disponible para realizar trabajo útil, y está dada por la siguiente relación:
            Δ G = Δ H − T Δ S 
          </Typography>
          <SnakeGame/>
        </Paper>

        <Typography variant="caption" color="textSecondary">
          Fuentes: LibreTexts Español – Bioenergética: Termodinámica y Enzimas. Khan Academy.
        </Typography>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h5" fontWeight="bold" gutterBottom>
        🎮 Minijuego: Bioenergética
        </Typography>
        <Typography variant="body2" gutterBottom>
          Arrastra cada concepto a la descripción correspondiente para reforzar tus conocimientos.
        </Typography>

        <LinearProgress variant="determinate" value={score} sx={{ mb: 2 }} />

        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 12, md: 4 }}>
            {energyItems.map((item) => (
              <div
                key={item.id}
                draggable={!completed.includes(item.id)}
                onDragStart={(e) => e.dataTransfer.setData("text/plain", item.id.toString())}
                style={{
                  padding: '8px',
                  marginBottom: '8px',
                  backgroundColor: '#e3f2fd',
                  border: '1px solid #90caf9',
                  borderRadius: '4px',
                  cursor: completed.includes(item.id) ? 'default' : 'grab',
                  opacity: completed.includes(item.id) ? 0.5 : 1,
                  textAlign: 'center'
                }}
              >
                {item.label}
              </div>
            ))}
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }} container spacing={2}>
            {dropZones.map((zone) => (
              <Grid size={{ xs: 12, sm: 12, md:6 }} key={zone.id}>
                <Card
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    const itemId = parseInt(e.dataTransfer.getData("text/plain"));
                    handleDrop(itemId, zone.id);
                  }}
                >
                  <CardContent sx={{ height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                    {zone.label}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {feedback && (
          <Typography variant="subtitle1" color="primary" mt={2}>
            {feedback}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Bioenergetics;
