import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Post from './Posts';
import TargetPost from "./TargetPost";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
    card: {
        backgroundColor: "#3c54b4"
    },
    post: {
        backgroundColor: "#fff",
        '&:hover': {
            backgroundColor: "#ececec",
        }
    }
}));

export default function AlignItemsList() {
    const [postList, setPostList] = useState([]);
    const [viewPost, setViewPost] = useState(false);
    const [activePostId, setActivePostId] = useState(null);

    useEffect(async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await response.json();
        setPostList(posts);
    }, []);

    const handlePostActive = (value) => {
        if (value !== null) {
            setViewPost(!viewPost);
            setActivePostId(value);
        }
    }

    const posts = postList.map(list => {
        return <Post title={list.title} userId={list.userId} body={list.body} postId={list.id} key={list.id}
                     activePost={handlePostActive}/>
    });

    const displayPosts = <div>
        <h3>Feeds</h3>
        <div className="post-list">
            {posts}
        </div>
    </div>;

    const displayTargetPost = <TargetPost postId={activePostId}/>

    const classes = useStyles();
    return (
        <Card className={classes.card}>
            {viewPost ? displayTargetPost : displayPosts}
        </Card>
    );
}
