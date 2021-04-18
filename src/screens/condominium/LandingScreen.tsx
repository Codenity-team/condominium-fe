import React from 'react';
import Typography from '@material-ui/core/Typography';


import { SideBar } from '../../components/SideBar';

export const LandingScreen = () => {
    return (
        <>
            <SideBar>
                <Typography paragraph>
                    GAFO
                </Typography>
            </SideBar>       
        </>
    );
}
