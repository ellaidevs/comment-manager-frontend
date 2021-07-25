import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Post from './Posts';

import samplefeed from './samplefeeddata';

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
    const [postList, setData] = useState([]);

    useEffect(async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await response.json();
        setData(posts);
    },[]);

    const posts = postList.map(list => {
        return <Post title={list.title} userId={list.userId} body={list.body} postId={list.id} key={list.id}/>
    });

    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <h3>Feeds</h3>
            <div className="post-list">
                {posts}
            </div>
        </Card>
    );
}
