import React, { useState } from "react";
import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography,
	Avatar,
	IconButton,
	Badge,
	Popper,
	Paper,
	Grow,
	ClickAwayListener,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ShareIcon from "@material-ui/icons/Share";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import useStyles from "./styles";
import moment from "moment";
import { deletePost, reactToPost, bookmarkPost, unbookmarkPost } from "../../../actions/Posts";
import { getComments } from "../../../actions/Comments";
import { useSelector, useDispatch } from "react-redux";
import Comments from "./Comments";
import toast from "react-hot-toast";

//* Post component for each post

const Post = ({ post, setCurrentId }) => {
	const dispatch = useDispatch();
	const classes = useStyles();
	const [showComments, setShowComments] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);
	const isMenuOpen = Boolean(anchorEl);
	const openReactions = (e) => setAnchorEl(e.currentTarget);
	const closeReactions = () => setAnchorEl(null);

	const user = useSelector((state) => state.users)[0];
	const EMOJIS = ['👍','❤️','😂','😮','🎉'];
	const REACTION_ALIASES = {
		like: '👍',
		love: '❤️',
		haha: '😂',
		wow: '😮',
		party: '🎉',
		tada: '🎉',
		celebrate: '🎉',
	};
	const toEmoji = (t) => {
		const k = (t || '').toString().trim();
		return EMOJIS.includes(k) ? k : (REACTION_ALIASES[k.toLowerCase?.()] || '');
	};
	const currentReaction = (post.reactions || []).find((r) => (r.user === (user?._id) || r.user?._id === (user?._id)));
	const currentEmoji = toEmoji(currentReaction?.type) || undefined;
	const reactionCountsRaw = (post.reactionsBreakdown) ? post.reactionsBreakdown : (post.reactions || []).reduce((acc, r) => {
		const e = toEmoji(r.type);
		if (EMOJIS.includes(e)) acc[e] = (acc[e] || 0) + 1;
		return acc;
	}, {});
	const reactionCounts = EMOJIS.reduce((m, e) => (m[e] = (reactionCountsRaw && reactionCountsRaw[e]) || 0, m), {});
	const totalReactions = (typeof post.reactionsCount === 'number')
		? post.reactionsCount
		: Object.values(reactionCounts).reduce((a, b) => a + b, 0);
	const handleSelectReaction = (emoji) => {
		const active = (currentEmoji && currentEmoji === emoji);
		dispatch(reactToPost(post._id, active ? "" : emoji));
		closeReactions();
	};
	const commentsState = useSelector((state) => state.comments);
	const bookmarks = useSelector((state) => state.bookmarks) || [];
	const isBookmarked = bookmarks.includes(post._id);
	const commentsByPost = commentsState[post._id] || [];
	const hasLiveComments = Object.prototype.hasOwnProperty.call(commentsState, post._id);
	const commentCount = hasLiveComments
		? commentsByPost.length
		: (typeof post.commentCount === 'number' ? post.commentCount : 0);

	const toggleComments = () => {
		const next = !showComments;
		setShowComments(next);
		if (next && commentsByPost.length === 0) {
			dispatch(getComments(post._id));
		}
	};

	const handleShare = async () => {
        try {
            const shareUrl = `${window.location.origin}${window.location.pathname}?post=${post._id}`;
            const shareText = post.message ? post.message.substring(0, 120) : 'Check out this memory!';
            const shareTitle = post.title || 'Memories';

            // Try Web Share with files if supported and image available
            const canShareFiles = !!(navigator.canShare && window.File && window.Blob);
            let shared = false;
            if (navigator.share) {
                try {
                    if (canShareFiles && post.selectedFile && post.selectedFile.startsWith('data:')) {
                        const res = await fetch(post.selectedFile);
                        const blob = await res.blob();
                        const file = new File([blob], `${shareTitle || 'memory'}.png`, { type: blob.type || 'image/png' });
                        if (navigator.canShare({ files: [file] })) {
                            await navigator.share({ title: shareTitle, text: shareText, files: [file] });
                            shared = true;
                        }
                    }
                    if (!shared) {
                        await navigator.share({ title: shareTitle, text: shareText, url: shareUrl });
                        shared = true;
                    }
                } catch (_) {
                    // fall through to clipboard
                }
            }
            if (!shared) {
                await navigator.clipboard.writeText(shareUrl);
                toast.success('Link copied to clipboard');
            }
        } catch (e) {
            // Swallow user-cancel; no-op
        }
    };

	return (
		<Card className={classes.card}>
			{user && post?.userName && post.userName === user.userName ? (
				<div className={classes.overlay2}>
					<IconButton
						className={classes.headerAction}
						size='small'
						aria-label='edit'
						onClick={() => setCurrentId(post._id)}
					>
						<EditIcon fontSize='small' />
					</IconButton>
					<IconButton
						className={classes.headerActionDelete}
						size='small'
						aria-label='delete'
						onClick={() => dispatch(deletePost(post._id))}
					>
						<DeleteIcon fontSize='small' />
					</IconButton>
				</div>
			) : null}
			{/* Header */}
			<div className={classes.header}>
				<div className={classes.headerRow}>
					<Avatar className={classes.avatar} alt={post.creator} src={post.avatar}>
						{post.creator.charAt(0)}
					</Avatar>
					<div>
						<Typography variant='subtitle2' className={classes.creator}>
							{post.creator}
						</Typography>
						<Typography variant='body2' color='textSecondary'>
							{moment(post.createdAt).fromNow()}
						</Typography>
					</div>
				</div>
				<Typography className={classes.cardTitle} gutterBottom variant='h5' component='h2'>
					{post.title}
				</Typography>
				<div>
					{post.tags.map((tag) => (
						<span key={tag} className={classes.tag}>{tag}</span>
					))}
				</div>
			</div>

			{/* Image */}
			<div className={classes.mediaBox}>
				<CardMedia
					component="img"
					className={classes.mediaImg}
					src={
					post.selectedFile ||
					"https://images.unsplash.com/photo-1528569937393-ee892b976859?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
					}
					alt={post.title}
				/>
				<div className={classes.mediaOverlay} />
			</div>

			{/* Content */}
			<CardContent>
				<Typography variant='body2' color='textSecondary' component='p'>
					{post.message}
				</Typography>
			</CardContent>

			{/* Stats */}
			<div className={classes.statsRow}>
				<Typography variant='body2'>
					<ChatBubbleOutlineIcon fontSize='small' style={{ verticalAlign: "middle" }} /> {commentCount} Comments
				</Typography>
			</div>

			{/* Reactions */}
			<CardActions className={`${classes.cardActions} ${classes.reactionsBar}`}>
				<IconButton onClick={openReactions} className={`${classes.actionButton} ${classes.reactionTrigger}`} size="small" aria-label="react" disabled={!user}>
					<Badge color="secondary" overlap="circle" badgeContent={totalReactions || null} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
						<span style={{ fontSize: 18 }}>{currentEmoji || '👍'}</span>
					</Badge>
				</IconButton>
				<Popper
                    open={isMenuOpen}
                    anchorEl={anchorEl}
                    placement="top"
                    transition
                    style={{ zIndex: 1600 }}
                    modifiers={{
                        offset: { enabled: true, offset: '0, 8' },
                        preventOverflow: { enabled: true, boundariesElement: 'viewport' },
                        flip: { enabled: true }
                    }}
                >
					{({ TransitionProps }) => (
						<Grow {...TransitionProps} style={{ transformOrigin: 'center bottom' }}>
							<Paper elevation={6} className={classes.reactionsPopperPaper}>
								<ClickAwayListener onClickAway={closeReactions}>
									<div className={classes.reactionsPopper}>
										{EMOJIS.map((emoji) => (
											<button
												key={emoji}
												className={`${classes.reactionItem} ${currentReaction?.type === emoji ? classes.reactionActiveItem : ''}`}
												onClick={() => handleSelectReaction(emoji)}
											>
												<span className={classes.reactionEmoji}>{emoji}</span>
												<span className={classes.reactionCount}>{reactionCounts[emoji]}</span>
											</button>
										))}
									</div>
								</ClickAwayListener>
							</Paper>
						</Grow>
					)}
				</Popper>
				<div style={{ flex: 1 }} />
				<IconButton className={`${classes.actionButton} ${isBookmarked ? classes.bookmarkActive : classes.bookmarkButton}`} onClick={() => {
                    if (!user) return;
                    if (isBookmarked) dispatch(unbookmarkPost(post._id));
                    else dispatch(bookmarkPost(post._id));
                }} size="small" aria-label="bookmark" disabled={!user} title={isBookmarked ? 'Remove bookmark' : 'Bookmark'}>
                    {isBookmarked ? <BookmarkIcon fontSize='small'/> : <BookmarkBorderIcon fontSize='small'/>}
                </IconButton>
                <IconButton className={`${classes.actionButton} ${classes.commentButton}`} onClick={toggleComments} size="small" aria-label="comment" disabled={!user}>
                    <ChatBubbleOutlineIcon fontSize='small' />
                </IconButton>
                <IconButton className={`${classes.actionButton} ${classes.shareButton}`} onClick={handleShare} size="small" aria-label="share">
                    <ShareIcon fontSize='small' />
                </IconButton>
			</CardActions>
			{showComments && (
				<div style={{ padding: "0 16px 16px" }}>
					<Comments postId={post._id} />
				</div>
			)}
		</Card>
	);
};

export default Post;
