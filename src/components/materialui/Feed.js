import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Post from './Posts';
import postsList from './testdata';

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

const posts = postsList.map(list => {
    return <Post title={list.title} userId={list.userId} body={list.body} postId={list.id} key={list.id}/>
})

export default function AlignItemsList() {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <h3>Feeds</h3>
            {posts}
        </Card>
    );
}
