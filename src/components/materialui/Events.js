import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import CakeIcon from '@material-ui/icons/Cake';
import GroupIcon from '@material-ui/icons/Group';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    iconBaseColor: {
        backgroundColor: "#3c54b4",
    },
    card: {
        backgroundColor: "#3c54b4"
    },
})) ;

export default function InsetDividers() {
    const classes = useStyles();

    return (
        <Card className={classes.card} variant={"outlined"}>
                <h3>Events</h3>
                <List className={classes.root}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={classes.iconBaseColor}>
                                <CakeIcon/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText className="eventText" primary="Birthdays"/>
                    </ListItem>
                    <Divider variant="inset" component="li"/>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={classes.iconBaseColor}>
                                <GroupIcon/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Group"/>
                    </ListItem>
                    <Divider variant="inset" component="li"/>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={classes.iconBaseColor}>
                                <EventAvailableIcon/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Upcoming Events"/>
                    </ListItem>
                    <Divider variant="inset" component="li"/>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={classes.iconBaseColor}>
                                <WhatshotIcon/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Trends"/>
                    </ListItem>
                </List>
        </Card>
    );
}
