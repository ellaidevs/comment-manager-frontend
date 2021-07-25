import React from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    nestedFooter: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    list: {
        textAlign: "center",
    },
    card: {
        backgroundColor: "#3c54b4"
    },
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <footer>
            <Card  className={classes.card} variant={"outlined"}>
                <h3>About us</h3>
                <List className={classes.nestedFooter}>
                    <ListItem>
                        <ListItemText className={classes.list} primary="About"/>
                    </ListItem>
                    <Divider variant="inset" component="li"/>
                    <ListItem>
                        <ListItemText className={classes.list} primary="Help"/>
                    </ListItem>
                    <Divider variant="inset" component="li"/>
                    <ListItem>
                        <ListItemText className={classes.list} primary="Privacy"/>
                    </ListItem>
                    <Divider variant="inset" component="li"/>
                    <ListItem>
                        <ListItemText className={classes.list} primary="Terms"/>
                    </ListItem>
                </List>
            </Card>
        </footer>
    );
};

export default Footer;