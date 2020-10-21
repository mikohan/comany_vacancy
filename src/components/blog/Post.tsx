import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ITodo, IPost, fetchPosts } from '../../store/actions';
import { motion } from 'framer-motion';
import { durationPage } from '../../config';
import { IStoreState } from '../../store/reducers/index';

import Typography from '@material-ui/core/Typography';
import { useStyles } from '../../styles/BlogStyles';
import { Container, Grid, Paper } from '@material-ui/core';
import { useParams } from 'react-router-dom';

import _ from 'lodash';

/*
Heeds implement pagination or load more stuff on this page 
*/
interface Props {
	todos: ITodo[];
	posts: IPost[];
	post: IPost;
	fetchTodos(): any;
	fetchPosts(): any;
}

interface ParamTypes {
	id: string;
}

function Post(props: Props) {
	const classes = useStyles();
	const { post } = props;

	return (
		<motion.div
			exit={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			transition={{ duration: durationPage }}
		>
			<Container>
				<Grid container>
					<Grid item xs={12}>
						<Paper>
							<Typography variant="h1"></Typography>
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</motion.div>
	);
}

const mapStateToProps = (
	{ posts }: IStoreState,
	ownProps: any
): { post: any } => {
	console.log(ownProps);
	return { post: _.find(posts, 'id', ownProps.match.params.id) };
};

export default connect(mapStateToProps)(Post);
