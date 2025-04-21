import React from 'react';
import { Box, Chip, Typography, Card, CardContent, Divider } from '@mui/material';
import AvatarKingdom from './avatar';

interface HeaderKingdomProps {
    title: string;
    dirImage: string;
    subtitle: string;
    concept: string;
    procedure: string;
    attitude: string;
}

const HeaderKingdom: React.FC<HeaderKingdomProps> = ({
    title = 'Archaea Profile',
    dirImage = '/archaea/avatar.jpeg',
    subtitle = 'Halobacteria',
    concept = 'Describir cómo los hongos responden a los estímulos del entorno.',
    procedure = 'Comparar cómo se dan los procesos de irritabilidad en los hongos con otros organismos mediante esquemas.',
    attitude = 'Valorar el reino fungi como organismos vitales en los ecosistemas.'
}) => {
    return (
        <Card elevation={4} sx={{ borderRadius: 4, bgcolor: '#f9f9f9' }}>
            <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <AvatarKingdom name={title} dirImage={dirImage} />
                    <Box sx={{ ml: 2 }}>
                        <Typography variant="h5" fontWeight="bold">
                            {title}
                        </Typography>
                        <Chip label={`@${subtitle}`} size="small" color="primary" />
                    </Box>
                </Box>

                <Divider sx={{ my: 2 }} />

                <Box>
                    <Typography variant="body1" gutterBottom>
                        <strong>Conceptual:</strong> {concept}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        <strong>Procedimental:</strong> {procedure}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Actitudinal:</strong> {attitude}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default HeaderKingdom;