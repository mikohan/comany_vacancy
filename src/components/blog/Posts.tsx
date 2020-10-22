import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
	ITodo,
	IPost,
	fetchPosts,
	fetchTodos,
	ICategories,
} from '../../store/actions';
import { motion } from 'framer-motion';
import { durationPage } from '../../config';
import { IStoreState } from '../../store/reducers/index';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../../styles/BlogStyles';
import { Container, Grid, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';

/*
Heeds implement pagination or load more stuff on this page 
*/
interface Props {
	todos: ITodo[];
	posts: IPost[];
	fetchTodos(): any;
	fetchPosts(): any;
	categories: ICategories[];
}

function Posts(props: Props) {
	const classes = useStyles();
	useEffect(() => {
		props.fetchPosts();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const { posts, categories } = props;

	return (
		<motion.div
			exit={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			transition={{ duration: durationPage }}
		>
			<Container>
				<Grid container>
					<Grid item xs={10}>
						<Paper>
							<List className={classes.root}>
								{posts.map((post) => (
									<React.Fragment key={post.id}>
										<Link to={`/blog/${post.id}`}>
											<ListItem alignItems="flex-start">
												<ListItemAvatar>
													<Avatar
														alt="Remy Sharp"
														src="/static/images/avatar/1.jpg"
													/>
												</ListItemAvatar>
												<ListItemText
													primary={post.title.toUpperCase()}
													secondary={
														<React.Fragment>
															<Typography
																component="span"
																variant="body2"
																className={
																	classes.inline
																}
																color="textPrimary"
															>
																Ali Connors
															</Typography>
															{
																" — I'll be in your neighborhood doing errands this…"
															}
														</React.Fragment>
													}
												/>
											</ListItem>
										</Link>
										<Divider
											className={classes.listDivider}
											variant="inset"
											component="li"
										/>
									</React.Fragment>
								))}
							</List>
						</Paper>
					</Grid>

					<Grid item xs={2} md={6}>
						<Typography variant="h6">Text only</Typography>
						<div>
							<List dense>
								{categories.map((category: ICategories) => (
									<ListItem key={category.id}>
										<ListItemText primary={category.name} />
									</ListItem>
								))}
							</List>
						</div>
					</Grid>
				</Grid>
			</Container>
		</motion.div>
	);
}

const mapStateToProps = ({
	categories,
	posts,
}: IStoreState): { categories: ICategories[]; posts: IPost[] } => {
	return { categories: categories, posts: posts };
};

export default connect(mapStateToProps, { fetchTodos, fetchPosts })(Posts);
