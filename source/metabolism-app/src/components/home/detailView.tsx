import React from 'react';
import { FeedItem } from './data/interfaces';
import Metabolism from './itemComponents/metabolism';
import { Box, Typography} from "@mui/material";
import TeacherLetter from './itemComponents/teacherLetter';
import StartGuide from './itemComponents/startGuide';
import StudentLetter from './itemComponents/studentLetter';
import History from './itemComponents/history';

interface DetailViewProps {
    item: FeedItem;
}

const DetailView: React.FC<DetailViewProps> = ({item}) => {
    const renderSection = () => {
        switch (item.slug) {
            case "guia-de-inicio":
                return <StartGuide/>
            case "carta-al-maestro":
                return <TeacherLetter/>;
            case "carta-al-estudiante":
                return <StudentLetter/>;
            case "historia":
                return <History/>
            case "metabolism":
                return <Metabolism/>;
            default:
                return <Typography>Sección no disponible aún.</Typography>;
        }
    };

    return(
        <Box>
            {renderSection()}
        </Box>
    );
}

export default DetailView;
