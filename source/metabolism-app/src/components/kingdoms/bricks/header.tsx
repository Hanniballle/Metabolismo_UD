import React from 'react';
import { Box, Chip, Typography } from '@mui/material';
import AvatarKingdom from './avatar';

interface HeaderKingdomProps {
    title: string,
    dirImage: string,
    subtitle: string,
    concept: string,
    procedure: string,
    attitude: string,
}

const HeaderKingdom:React.FC<HeaderKingdomProps> = (
    {
        title = 'Archaea Profile',
        dirImage = '/archaea/avatar.jpeg',
        subtitle = 'Halobacteria',
        concept = 'Describir cómo los hongos responden a los estímulos del entorno.',
        procedure = 'Comparar cómo se dan los procesos de irritabilidad en los hongos con otros organismos mediante esquemas.',
        attitude = 'Valorar el reino fungi como organismos vitales en los ecosistemas.'
    }
) => {
    return(
        <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <AvatarKingdom name={title} dirImage={dirImage}/>
                <Box>
                    <Typography variant="h6" fontWeight="bold">
                        {title}
                    </Typography>
                    <Chip label={"@" + subtitle} size="small" />
                </Box>
            </Box>
        
            <Box sx={{ mb: 4 }}>
                <Typography variant="body1" gutterBottom>
                    <strong>CONCEPTUAL:</strong> {concept}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    <strong>PROCEDIMENTAL:</strong> {procedure}
                </Typography>
                <Typography variant="body1">
                    <strong>ACTITUDINAL:</strong> {attitude}
                </Typography>
            </Box>
        </Box>
    );
}

export default HeaderKingdom;