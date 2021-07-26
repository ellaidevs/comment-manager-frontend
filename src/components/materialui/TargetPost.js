import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from '@material-ui/core/styles';
import React, {useEffect, useState} from "react";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

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
    },
    arrow: {
        display: 'flex',
        color: "white"
    }
}));

const TargetPost = (props) => {
    const [activePost, setActivePost] = useState([]);
    const [comments, setComments] = useState([]);

    const classes = useStyles();

    useEffect(async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${props.postId}`);
        const posts = await response.json();
        setActivePost(posts);
    }, []);


    useEffect(async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${props.postId}`);
        const comments = await response.json();
        setComments(comments);
    }, []);

    const displayComments = comments.map((comment) => {
        return <ListItem className={classes.post} alignItems="flex-start" key={comment.id}>
            <ListItemAvatar>
                <Avatar alt={activePost.userId + ''}/>
            </ListItemAvatar>
            <ListItemText
                primary={comment.name}
                secondary={
                    <React.Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                        >
                            {comment.email} -
                        </Typography>
                        {comment.body}
                    </React.Fragment>
                }
            />
        </ListItem>
    })
    return (
        <div>
            <div className="feed-grid">
                <div className="arrow-back" onClick={() => props.backBtn(true)}><ArrowBackIcon
                    className={classes.arrow}/></div>
                <h3 className="feed-text">Feed</h3>
            </div>
            <div className="single-post-container">
                <ListItem className={classes.post} alignItems="flex-start">

                    <ListItemAvatar>
                        <Avatar alt={activePost.userId + ''}/>
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
                <h4>Comments</h4>
                <div className="commentList">{displayComments}</div>
            </div>
        </div>
    );
};

export default TargetPost;