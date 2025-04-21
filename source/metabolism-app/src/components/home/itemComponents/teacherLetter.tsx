import React from "react";
import { Typography, Box, Paper, Divider, Avatar, useTheme } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { SectionComponentProps } from "../detailView";
import ReturnButton from "../returnButton";

const TeacherLetter: React.FC<SectionComponentProps> = ({onBack}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #f0f4f8, #ffffff)",
        px: 2,
        py: 6,
      }}
    >
      <Box maxWidth="900px" mx="auto">
        
        <Paper
          elevation={4}
          sx={{
            p: 4,
            borderRadius: "20px",
            backgroundColor: "#fafafa",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <ReturnButton onBack={onBack} />
          <Box display="flex" alignItems="center" mb={3}>
            <Avatar
              sx={{
                bgcolor: theme.palette.primary.main,
                mr: 2,
              }}
            >
              <SchoolIcon />
            </Avatar>
            <Typography variant="h4" fontWeight="bold">
              Carta a la Maestra
            </Typography>
          </Box>

          <Typography variant="body1" paragraph sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
            Estimada Profesora:
            <br />
            <br />
            Reciba un afectuoso y respetuoso saludo.
            <br />
            Nos dirigimos a usted con el propósito de expresarle nuestro más
            sincero agradecimiento por permitirnos realizar nuestras prácticas
            pedagógicas con los estudiantes de grado octavo. Esta experiencia
            representa para nosotros un paso fundamental en nuestra formación
            como futuros docentes, y nos sentimos profundamente afortunados de
            contar con su acompañamiento y guía durante este proceso.
            <br />
            <br />
            Agradecemos especialmente la libertad creativa que nos brinda para
            diseñar e implementar actividades dentro del aula. Esta confianza no
            solo fortalece nuestra capacidad para innovar y adaptarnos a las
            necesidades de los estudiantes, sino que también nos motiva a dar lo
            mejor de nosotros, sabiendo que contamos con su respaldo. Sentirnos
            escuchados y valorados en nuestras propuestas pedagógicas nos impulsa
            a crecer con seguridad y compromiso.
            <br />
            <br />
            También queremos reconocer y valorar el constante apoyo y la asesoría
            que nos ofrece. En cada momento —ya sea durante la planeación, la
            ejecución o la retroalimentación de nuestras actividades— usted está
            presente para orientarnos con claridad, paciencia y profesionalismo.
            Su experiencia, disposición y compromiso con la educación son para
            nosotros una fuente de inspiración.
            <br />
            <br />
            Gracias por abrirnos las puertas del aula y por permitirnos ser parte
            de este proceso formativo en un ambiente de confianza, respeto y
            colaboración. Nos sentimos verdaderamente agradecidos por cada
            enseñanza y por cada oportunidad de aprendizaje que nos brinda.
            <br />
            <br />
            Con todo nuestro aprecio y gratitud,  
            <br />
            <strong>Sus practicantes</strong>.
          </Typography>

          <Divider sx={{ my: 4 }} />

          <Box textAlign="center">
            <FavoriteIcon
              sx={{ fontSize: 40, color: "red", mb: 1 }}
            />
            <Typography variant="subtitle1" color="text.secondary">
            {"\"La enseñanza que deja huella no es la que se hace de cabeza a cabeza, sino de corazón a corazón.\""}
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default TeacherLetter;