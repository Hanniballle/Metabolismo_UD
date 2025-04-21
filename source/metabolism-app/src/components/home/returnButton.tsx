import React from 'react';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface ReturnButtonProps {
    onBack: () => void;
}

const ReturnButton: React.FC<ReturnButtonProps> = ({ onBack }) => {
    return (
        <Button
            variant="contained"
            color="primary"
            onClick={onBack}
            startIcon={<ArrowBackIcon />}
            sx={{
            mb: 3,
            textTransform: 'none',
            fontWeight: 'bold',
            borderRadius: 3,
            boxShadow: 2,
            px: 3,
            py: 1,
            '&:hover': {
                backgroundColor: '#1565c0',
            },
            }}
        >
            Volver a Inicio
        </Button>
    );
}

export default ReturnButton;
