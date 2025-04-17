import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Stack,
  Tooltip,
  Paper,
  useTheme,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const steps = [
  { id: "A", color: "#d32f2f", label: "A", enzyme: "Enzima 1" },
  { id: "B", color: "#fbc02d", label: "B", enzyme: "Enzima 2" },
  { id: "C", color: "#f57c00", label: "C", enzyme: "Enzima 3" },
  { id: "D", color: "#689f38", label: "D", enzyme: "Enzima 4" },
  { id: "E", color: "#0288d1", label: "E", enzyme: "Enzima 5" },
  { id: "F", color: "#6d4c41", label: "F" },
];

const MetabolicPathwayDiagram = () => {
  const theme = useTheme();

  return (
    <Box my={4}>
      <Typography variant="body1" fontWeight="bold" gutterBottom>
        Figura 1. Ruta metabólica catalizada por enzimas
      </Typography>
      <Paper
        elevation={3}
        sx={{
          p: 3,
          borderRadius: 4,
          bgcolor: theme.palette.background.default,
          overflowX: "auto",
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="flex-start"
          flexWrap="wrap"
        >
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <Tooltip
                title={step.enzyme ? `Catalizado por ${step.enzyme}` : "Paso final"}
                arrow
              >
                <Box
                  textAlign="center"
                  sx={{
                    transition: "transform 0.3s",
                    "&:hover": { transform: "scale(1.1)" },
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: step.color,
                      width: 64,
                      height: 64,
                      fontWeight: "bold",
                      fontSize: 24,
                      boxShadow: 3,
                    }}
                  >
                    {step.label}
                  </Avatar>
                  {step.enzyme && (
                    <Typography variant="caption" mt={1} display="block" color="text.secondary">
                      {step.enzyme}
                    </Typography>
                  )}
                </Box>
              </Tooltip>
              {index < steps.length - 1 && (
                <ArrowForwardIcon
                  fontSize="large"
                  sx={{
                    animation: "pulseArrow 1.5s ease-in-out infinite",
                    color: theme.palette.text.secondary,
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </Stack>
      </Paper>

      {/* CSS keyframes para animación sutil */}
      <style>{`
        @keyframes pulseArrow {
          0% { opacity: 1; transform: translateX(0); }
          50% { opacity: 0.5; transform: translateX(4px); }
          100% { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </Box>
  );
};

export default MetabolicPathwayDiagram;