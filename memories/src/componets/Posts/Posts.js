import React from "react";
import Post from "./Post/Post";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import { Grid, CircularProgress, Typography } from "@material-ui/core";

//* Posts compoent for rendering all posts

const Posts = ({ setCurrentId, user, layout, filterBookmarksOnly = false }) => {
    const posts = useSelector((state) => state.posts);
    const bookmarks = useSelector((state) => state.bookmarks) || [];
    const visible = filterBookmarksOnly ? posts.filter(p => bookmarks.includes(p._id)) : posts;
    const classes = useStyles();

    return visible.length === 0 ? (
        <div className={classes.emptyState}>
            <Typography variant='h6'>Don't have any posts to show now!</Typography>
            <CircularProgress color='primary' />
        </div>
    ) : (
        <Grid
            className={classes.container}
            container
            alignItems='stretch'
            spacing={layout === 'list' ? 3 : 4}
        >
            {visible.map((post) => (
                <Grid key={post._id} item xs={12} sm={layout === 'list' ? 12 : 6}>
                    <Post post={post} setCurrentId={setCurrentId} user={user} />
                </Grid>
            ))}
        </Grid>
    );
};

export default Posts;
