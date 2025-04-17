import React from "react";
import {
  Typography,
  Box,
  Card,
  CardContent,
  Divider,
  Stack,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

const Anabolism: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        py: 6,
        px: 2,
      }}
    >
      <Card
        sx={{
          maxWidth: 800,
          width: "100%",
          borderRadius: 4,
          boxShadow: 6,
          backgroundColor: "#ffffff",
        }}
      >
        <CardContent>
          <Stack direction="row" spacing={1} alignItems="center" mb={1}>
            <SchoolIcon color="primary" fontSize="large" />
            <Typography
              variant="h3"
              component="h1"
              fontWeight="bold"
              color="text.primary"
            >
              Carta a los estudiantes
            </Typography>
          </Stack>

          <Typography variant="subtitle1" color="text.secondary" mb={3}>
            “Cada paso que dan en su aprendizaje, es una semilla que florecerá
            en su futuro.”
          </Typography>

          <Divider sx={{ mb: 3 }} />

          <Typography variant="body1" paragraph>
            <EmojiPeopleIcon fontSize="small" sx={{ verticalAlign: "middle", mr: 1 }} />
            Queridos estudiantes de 802 del Instituto Pedagógico Nacional:
          </Typography>

          <Typography variant="body1" paragraph>
            Reciban un saludo muy especial de parte de quienes estamos
            desarrollando esta unidad didáctica con mucho entusiasmo y
            dedicación. Queremos comenzar esta carta expresándoles nuestro más
            sincero agradecimiento por regalarnos su tiempo, por su disposición,
            por escucharnos y, sobre todo, por participar con tanta energía en
            las actividades que les hemos propuesto.
          </Typography>

          <Typography variant="body1" paragraph>
            Cada encuentro con ustedes es una oportunidad para aprender,
            compartir y crecer. Nos alegra ver cómo se involucran, cómo
            preguntan, opinan, construyen ideas y aportan desde su experiencia
            y forma de ver el mundo. Esa participación tan auténtica es
            justamente lo que hace que esta experiencia tenga tanto sentido y
            valor.
          </Typography>

          <Typography variant="body1" paragraph>
            <AutoStoriesIcon fontSize="small" sx={{ verticalAlign: "middle", mr: 1 }} />
            Esta unidad didáctica que estamos construyendo está pensada
            especialmente para ustedes. Cada actividad, cada recurso y cada
            pregunta busca que puedan aprender de una forma diferente, cercana y
            significativa.
          </Typography>

          <Typography variant="body1" paragraph>
            Nuestro deseo es que esta experiencia sea una oportunidad para
            descubrir nuevas ideas, para expresarse libremente y para divertirse
            aprendiendo. Nos motiva saber que lo que hacemos puede aportar a su
            formación, y nos emociona saber que podemos caminar juntos durante
            este tiempo.
          </Typography>

          <Typography variant="body1">
            <FavoriteIcon fontSize="small" sx={{ verticalAlign: "middle", mr: 1, color: "red" }} />
            Gracias por su confianza, por su respeto y por el cariño con el que
            nos han recibido. Gracias por permitirnos entrar en su aula,
            compartir sus ideas y ser parte, aunque sea por un momento, de su
            camino escolar.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Anabolism;