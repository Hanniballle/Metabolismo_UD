import React from 'react';
import { FeedItem } from './data/interfaces';
import Metabolism from './itemComponents/metabolism';
import { Box, Typography} from "@mui/material";
import TeacherLetter from './itemComponents/teacherLetter';
import StartGuide from './itemComponents/startGuide';
import StudentLetter from './itemComponents/studentLetter';
import Biomolecules from './itemComponents/biomolecules';
import Bioenergetics from './itemComponents/bioenergetics';
import Anabolism from './itemComponents/anabolism';
import Homeostasis from './itemComponents/homeostasis';

interface DetailViewProps {
    item: FeedItem;
}

const componentMap: Record<string, React.FC> = {
    "guia-de-inicio": StartGuide,
    "carta-al-maestro": TeacherLetter,
    "carta-al-estudiante": StudentLetter,
    "biomoleculas": Biomolecules,
    "bioenergetica": Bioenergetics,
    "metabolism": Metabolism,
    "anabolismo-y-catabolismo": Anabolism,
    "homeostasis": Homeostasis,
  };

const DetailView: React.FC<DetailViewProps> = ({ item }) => {
    const SectionComponent = componentMap[item.slug];

    return (
        <Box>
            {SectionComponent ? (
                <SectionComponent />
            ) : (
                <Typography>Sección no disponible aún.</Typography>
            )}
        </Box>
    );
};
  

export default DetailView;
