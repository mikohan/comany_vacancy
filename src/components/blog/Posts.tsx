import React, { useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import {
	ITodo,
	IPost,
	fetchPosts,
	filterPosts,
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
import { Container, Grid, Hidden, Input, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { ThemeContext } from '../../context/ThemeContext';

/*
Heeds implement pagination or load more stuff on this page 
*/
interface Props {
	todos: ITodo[];
	posts: IPost[];
	fetchPosts(): any;
	filterPosts(search: string): any;
	categories: ICategories[];
	search: string;
}

function Posts(props: Props) {
	const context = useContext(ThemeContext);
	const { isDarkMode } = context;

	const classes = useStyles(isDarkMode)();

	useEffect(() => {
		props.fetchPosts();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const { posts, categories } = props;

	const handleSearch = (e: any) => {
		props.filterPosts(e.target.value);
	};

	return (
		<motion.div
			exit={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			transition={{ duration: durationPage }}
		>
			<Container>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<Input
							name="search"
							placeholder="Search..."
							onChange={handleSearch}
						/>
					</Grid>
					<Grid item xs={12} sm={10}>
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
													className={
														classes.postsTitles
													}
													color="inherit"
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
					<Hidden xsDown>
						<Grid item sm={2}>
							<Typography variant="h6">Text only</Typography>
							<div>
								<List dense>
									{categories.map((category: ICategories) => (
										<ListItem key={category.id}>
											<ListItemText
												primary={category.name}
											/>
										</ListItem>
									))}
								</List>
							</div>
						</Grid>
					</Hidden>
				</Grid>
			</Container>
		</motion.div>
	);
}

const mapStateToProps = ({
	categories,
	posts,
	search,
}: IStoreState): {
	categories: ICategories[];
	posts: IPost[];
	search: string;
} => {
	const filtredPosts: IPost[] = posts.filter((post: IPost) => {
		return post.title.toLowerCase().includes(search.toLowerCase());
		// return post.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
	});

	return { categories: categories, posts: filtredPosts, search: search };
};

export default connect(mapStateToProps, {
	fetchPosts,
	filterPosts,
})(Posts);
