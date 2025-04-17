import React from "react";
import { Card, CardContent, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ThermodynamicsCard = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <Card className="rounded-3xl shadow-xl p-6" style={{ backgroundColor: "#fafafa" }}>
        <CardContent>

          <Typography variant="body1" paragraph align="center" style={{ color: "#555" }}>
            Las células vivas convierten distintas formas de energía y pueden intercambiar energía con su entorno, regidas por los principios de la termodinámica.
          </Typography>

          {/* Intercambio de energía */}
          <div className="energy-flow" style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", gap: "20px", margin: "30px 0" }}>
            <div className="energy-item" style={{
              padding: "12px 24px",
              borderRadius: "50px",
              backgroundColor: "#B3E5FC", // Azul claro
              textAlign: "center",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              fontSize: "1.2rem",
              fontWeight: "bold"
            }}>
              🔋 Glucosa
            </div>
            <div className="arrow" style={{ fontSize: "2rem", color: "#4A90E2" }}>➡️</div>
            <div className="energy-item" style={{
              padding: "12px 24px",
              borderRadius: "50px",
              backgroundColor: "#C8E6C9", // Verde suave
              textAlign: "center",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              fontSize: "1.2rem",
              fontWeight: "bold"
            }}>
              ⚡ ATP
            </div>
            <div className="arrow" style={{ fontSize: "2rem", color: "#4A90E2" }}>➡️</div>
            <div className="energy-item" style={{
              padding: "12px 24px",
              borderRadius: "50px",
              backgroundColor: "#FFCDD2", // Rosa suave
              textAlign: "center",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              fontSize: "1.2rem",
              fontWeight: "bold"
            }}>
              🧬 Trabajo celular
            </div>
          </div>

          {/* Principios de la termodinámica */}
          <Accordion style={{ marginBottom: "10px" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} style={{ backgroundColor: "#E1F5FE" }}>
              <Typography variant="h6" style={{ color: "#1976D2" }}>Primer principio de la termodinámica</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ color: "#444" }}>
                Establece que, aunque la energía puede cambiar de forma, la energía total del sistema permanece constante.
                Un ejemplo es la conversión de la energía química de la glucosa en ATP durante la glucólisis.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} style={{ backgroundColor: "#E1F5FE" }}>
              <Typography variant="h6" style={{ color: "#1976D2" }}>Segundo principio de la termodinámica</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ color: "#444" }}>
                Introduce la entropía, que mide el desorden en un sistema y la energía que no puede realizar trabajo útil.
                Aunque los sistemas biológicos tienden a aumentar su entropía, rara vez están en equilibrio,
                por lo que se utiliza la energía de Gibbs para describir estos procesos.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default ThermodynamicsCard;