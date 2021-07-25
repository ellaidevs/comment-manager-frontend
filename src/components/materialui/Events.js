import React from 'react';
import {alpha, makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import CakeIcon from '@material-ui/icons/Cake';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    iconBaseColor: {
        backgroundColor: "#3c54b4",
    },
}));

export default function InsetDividers() {
    const classes = useStyles();

    return (
        <Card variant={"outlined"}>
            <h3>Events</h3>
            <List className={classes.root}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className={classes.iconBaseColor}>
                            <CakeIcon/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Birthdays"/>
                </ListItem>
                <Divider variant="inset" component="li"/>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className={classes.iconBaseColor}>
                            <WorkIcon/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Group"/>
                </ListItem>
                <Divider variant="inset" component="li"/>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className={classes.iconBaseColor}>
                            <WorkIcon/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Upcoming Events"/>
                </ListItem>
                <Divider variant="inset" component="li"/>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className={classes.iconBaseColor}>
                            <BeachAccessIcon/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Trends"/>
                </ListItem>
            </List>
        </Card>
    );
}
