import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
const drawerWidth = 240;
export const useStylesNavbar = makeStyles((theme: Theme) => createStyles({
    bar:{
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'space-between'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    }
})
);