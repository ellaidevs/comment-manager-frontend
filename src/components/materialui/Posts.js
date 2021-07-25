import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from '@material-ui/core/styles';
import React from "react";

const useStyles = makeStyles((theme) => ({
    inline: {
        display: 'inline',
    },
    post: {
        backgroundColor: "#fff",
        '&:hover': {
            backgroundColor: "#ececec",
        }
    }
}));

const Posts = (props) => {
    const classes = useStyles();

    const handlePostClick = (e) => {
        console.log('target id:', e.target.id);
    }

    return (
        <ListItem className={classes.post} alignItems="flex-start" onClick={handlePostClick} id={props.postId}>
            <ListItemAvatar>
                <Avatar alt={props.userId.toString()}/>
            </ListItemAvatar>
            <ListItemText
                primary={props.title}
                secondary={
                    <React.Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                        >
                        </Typography>
                        {props.body}
                    </React.Fragment>
                }
            />
        </ListItem>
    );
};

export default Posts;