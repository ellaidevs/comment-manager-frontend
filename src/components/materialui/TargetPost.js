import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from '@material-ui/core/styles';
import React, {useEffect, useState} from "react";
import {act} from "@testing-library/react";

const useStyles = makeStyles((theme) => ({
    inline: {
        display: 'inline',
    },
    post: {
        backgroundColor: "#fff",
        '&:hover': {
            backgroundColor: "#ececec",
        },
        height: "auto",
    }
}));

const TargetPost = (props) => {
    const [activePost, setActivePost] = useState([]);

    const classes = useStyles();

    useEffect(async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${props.postId}`);
        const posts = await response.json();
        setActivePost(posts);
    }, []);

    console.log('active post ', activePost);
    return (
        <ListItem className={classes.post} alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt={activePost.userId+''}/>
            </ListItemAvatar>
            <ListItemText
                primary={activePost.title}
                secondary={
                    <React.Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                        >
                        </Typography>
                        {activePost.body}
                    </React.Fragment>
                }
            />
        </ListItem>
    );
};

export default TargetPost;