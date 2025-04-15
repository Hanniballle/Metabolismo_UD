import React from 'react';
import { Avatar } from '@mui/material';

interface AvatarKingdomProps {
    name?: string;
    dirImage?: string;
}

const AvatarKingdom: React.FC<AvatarKingdomProps> = ({
    name =  'NameAvatar',
    dirImage =  '/archaea/avatar.jpeg'}) => {
    return (
        <Avatar
            alt={name}
            src={dirImage}
            sx={{
                width: 60,
                height: 60,
                mr: 2,
                border: '3px solid #3f51b5',
            }}
        />
    );
}

export default AvatarKingdom;