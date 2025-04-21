import React from "react";
import { SectionComponentProps } from "../detailView";
import ReturnButton from "../returnButton";
import { Box, Typography } from "@mui/material";

const History: React.FC<SectionComponentProps> = ({onBack}) => {
    return(
        <Box>
            <ReturnButton onBack={onBack} />
            <Typography variant="h3" fontWeight="bold" gutterBottom>
                Historia
            </Typography>
            <Typography variant="body1" paragraph>
                La historia de la biología es rica y fascinante. Desde los primeros filósofos griegos que intentaron entender la naturaleza, hasta los científicos modernos que han desentrañado los secretos del ADN y la genética, la biología ha evolucionado constantemente. A lo largo de los siglos, hemos aprendido sobre la célula, la evolución, la ecología y mucho más. Cada descubrimiento ha sido un peldaño en nuestra comprensión del mundo vivo.
            </Typography>
        </Box>
    );
}

export default History;