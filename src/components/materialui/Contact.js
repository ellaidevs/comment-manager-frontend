import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import jake from './images/jake.jpg';
import dave from './images/dave.jpg';
import kate from './images/kate.jpg';
import alex from './images/alex.jpg';
import jurica from './images/jurica.jpg';
import ali from './images/ali.jpg';
import mabe from './images/mabe.jpg';
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    secondary: {
        color: "inherit",
        // color
    },
    contactPicture: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    }
}));

export default function FolderList() {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            <h3>Contacts</h3>
            <ListItem>
                <ListItemAvatar children={classes.contactPicture}>
                    <Avatar alt="jake" src={jake}/>
                </ListItemAvatar>
                <ListItemText primary="Jake" secondary="online"/>
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar src={alex}/>
                </ListItemAvatar>
                <ListItemText alt="alex" primary="Alex" secondary="online"/>
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar alt={"dave"} src={dave}/>
                </ListItemAvatar>
                <ListItemText primary="Dave" secondary="offline"/>
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar alt={"kate"} src={kate}/>
                </ListItemAvatar>
                <ListItemText primary="Kate" secondary="online"/>
            </ListItem>
            <ListItem>
                <ListItemAvatar children={classes.contactPicture}>
                    <Avatar alt="mabe" src={mabe}/>
                </ListItemAvatar>
                <ListItemText primary="Mabe" secondary="offline"/>
            </ListItem>
            <ListItem>
                <ListItemAvatar children={classes.contactPicture}>
                    <Avatar alt="ali" src={ali}/>
                </ListItemAvatar>
                <ListItemText primary="Ali" secondary="online"/>
            </ListItem>
            <ListItem>
                <ListItemAvatar children={classes.contactPicture}>
                    <Avatar alt="jurica" src={jurica}/>
                </ListItemAvatar>
                <ListItemText primary="Jurica" secondary="online"/>
            </ListItem>
        </List>
    );
}
