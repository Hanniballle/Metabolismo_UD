import React from "react";
import { Box, Typography, Tooltip, Grid, Paper, Divider } from "@mui/material";
import { ArrowForward, ArrowBack } from "@mui/icons-material";

const MetabolismDiagram = () => {
  return (
    <Box p={4}>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {/* Catabolismo */}
        <Grid  size={{ xs: 12, md: 5 }}>
          <Tooltip title="Proceso que descompone nutrientes (glúcidos, lípidos y prótidos) para liberar energía." arrow>
            <Paper elevation={6} sx={{ p: 3, bgcolor: '#ffebee', borderRadius: 4 }}>
              <Typography variant="h6" gutterBottom fontWeight={600}>Energía contenida en los nutrientes</Typography>
              <Typography variant="body1">Glúcidos, Lípidos, Prótidos</Typography>
              <Box mt={2} display="flex" alignItems="center">
                <ArrowForward color="error" sx={{ fontSize: 40, mr: 1 }} />
                <Typography variant="h6" color="error" fontWeight={600}>Catabolismo</Typography>
              </Box>
              <Divider sx={{ my: 2 }} />
              <Typography variant="body2">Productos finales: CO₂, H₂O, NH₃</Typography>
            </Paper>
          </Tooltip>
        </Grid>

        {/* Moléculas energéticas */}
        <Grid size={{ xs: 12, md: 2 } }>
          <Tooltip title="Moléculas involucradas en el intercambio energético del metabolismo." arrow>
            <Paper elevation={6} sx={{ p: 3, bgcolor: '#fffde7', borderRadius: 4 }}>
              <Typography variant="subtitle1" align="center" fontWeight={600} gutterBottom>
                Energía química
              </Typography>
              <Typography variant="body2" align="center">
                ATP, NADH, NADPH, FADH₂
              </Typography>
              <Divider sx={{ my: 1 }} />
              <Typography variant="body2" align="center">
                ADP + HPO₄²⁻, NAD⁺, NADP⁺, FAD
              </Typography>
            </Paper>
          </Tooltip>
        </Grid>

        {/* Anabolismo */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Tooltip title="Proceso que utiliza energía para sintetizar macromoléculas celulares a partir de moléculas precursoras." arrow>
            <Paper elevation={6} sx={{ p: 3, bgcolor: '#e3f2fd', borderRadius: 4 }}>
              <Typography variant="h6" gutterBottom fontWeight={600}>Moléculas precursoras</Typography>
              <Typography variant="body1">
                Aminoácidos, Monosacáridos, Ácidos grasos, Nucleótidos
              </Typography>
              <Box mt={2} display="flex" alignItems="center">
                <ArrowBack color="primary" sx={{ fontSize: 40, mr: 1 }} />
                <Typography variant="h6" color="primary" fontWeight={600}>Anabolismo</Typography>
              </Box>
              <Divider sx={{ my: 2 }} />
              <Typography variant="body2">
                Macromoléculas celulares: Polisacáridos, Proteínas, Lípidos, Ácidos nucleicos
              </Typography>
            </Paper>
          </Tooltip>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MetabolismDiagram;
