import React, { useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import {
	ITodo,
	IPost,
	fetchPosts,
	filterPosts,
	ICategories,
	filterPostsCategories,
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
import { translateText } from '../../translate/texts';

/*
Heeds implement pagination or load more stuff on this page 
*/
interface Props {
	todos: ITodo[];
	posts: IPost[];
	fetchPosts(): any;
	filterPosts(search: string): any;
	filterPostsCategories(id: number): any;
	categories: ICategories[];
	search: string;
}

function Posts(props: Props) {
	const context = useContext(ThemeContext);
	const { isDarkMode } = context;
	let { language } = context;

	const {
		blog_latestNews,
		blog_search,
		blog_categories,
		blog_noSearchResults,
	} = translateText[language];

	const classes = useStyles(isDarkMode)();

	useEffect(() => {
		props.fetchPosts();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const { posts, categories } = props;

	const handleSearch = (e: any) => {
		props.filterPosts(e.target.value);
	};

	const handleCategory = (id: number) => {
		props.filterPostsCategories(id);
	};

	const handleSearchFocus = () => {
		props.filterPostsCategories(0);
	};

	return (
		<motion.div
			exit={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			transition={{ duration: durationPage }}
		>
			<Container>
				<Grid className={classes.blogHeaderRow} container spacing={4}>
					<Grid item xs={10}>
						<Typography className={classes.blogHeader} variant="h1">
							{blog_latestNews}
						</Typography>
					</Grid>
					<Grid item xs={2}>
						<Input
							name="search"
							placeholder={`${blog_search}...`}
							onFocus={handleSearchFocus}
							onChange={handleSearch}
						/>
					</Grid>
				</Grid>
				<Grid container spacing={4}>
					<Grid item xs={12} sm={10}>
						{posts.length > 0 ? (
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
						) : (
							<Typography variant="h2">
								{blog_noSearchResults}
							</Typography>
						)}
					</Grid>
					<Hidden xsDown>
						<Grid item sm={2}>
							<Typography variant="h6">
								{blog_categories}
							</Typography>
							<div>
								<List dense>
									{categories.map((category: ICategories) => (
										<ListItem key={category.id}>
											<ListItemText
												className={classes.categoryList}
												onClick={() =>
													handleCategory(category.id)
												}
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
	catFilter,
}: IStoreState): {
	categories: ICategories[];
	posts: IPost[];
	search: string;
	catFilter: number;
} => {
	let filtredPosts: IPost[];

	if (catFilter !== 0) {
		filtredPosts = posts.filter((post: IPost) => {
			const res = post.categories.filter(
				(cat: any) => cat.id === catFilter
			);
			return res.length > 0;
		});
	} else {
		filtredPosts = posts.filter((post: IPost) => {
			const res: boolean = post.title
				.toLowerCase()
				.includes(search.toLowerCase());
			const txt: boolean = post.text
				.toLowerCase()
				.includes(search.toLowerCase());
			if (res) {
				return res;
			} else if (txt) {
				return txt;
			}

			return (
				post.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
			);
		});
	}

	return {
		categories: categories,
		posts: filtredPosts,
		search: search,
		catFilter: catFilter,
	};
};

export default connect(mapStateToProps, {
	fetchPosts,
	filterPosts,
	filterPostsCategories,
})(Posts);
