import React from 'react';
import { Grid, Card, CardContent} from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Tasks = () => {
    return(
        <Grid container spacing={2} justifyContent="center" sx={{ mb: 4 }}>
            <Grid>
                <Card sx={{ width: 60, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#c1a57b' }}>
                    <CardContent>
                    <LightbulbIcon fontSize="large" />
                    </CardContent>
                </Card>
            </Grid>
            <Grid>
                <Card sx={{ width: 60, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#7e7c84' }}>
                    <CardContent>
                    <AssignmentIcon fontSize="large" />
                    </CardContent>
                </Card>
            </Grid>
            <Grid >
                <Card sx={{ width: 60, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#7e7c84' }}>
                    <CardContent>
                    <AssignmentIcon fontSize="large" />
                    </CardContent>
                </Card>
            </Grid>
            <Grid>
                <Card sx={{ width: 60, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#a36a3c' }}>
                    <CardContent>
                    <CheckCircleIcon fontSize="large" />
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default Tasks;