import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
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
        height: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    secondary: {
        color: "inherit",
    },
    contactPicture: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    card: {
        backgroundColor: "#3c54b4",
        height: "600px"
    },
}));

export default function FolderList() {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <h3>Contacts</h3>
            <List className={classes.root}>
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
        </Card>

    );
}
