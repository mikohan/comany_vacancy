import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { IPost } from '../../store/actions';
import { fetchPost } from '../../store/actions';
import { motion } from 'framer-motion';
import { durationPage } from '../../config';
import { IStoreState } from '../../store/reducers/index';

import Typography from '@material-ui/core/Typography';
import { useStyles } from '../../styles/BlogStyles';
import { Container, Grid, Paper } from '@material-ui/core';
import { useParams } from 'react-router-dom';

/*
Heeds implement pagination or load more stuff on this page 
*/
interface Props {
	posts: IPost[];
	singlePost: IPost;
	id: string;
	fetchPost(id: string): any;
}

interface ParamTypes {
	id: string;
}

function Post(props: Props) {
	const classes = useStyles();
	const { singlePost } = props;

	const { id } = useParams<ParamTypes>();

	useEffect(() => {
		props.fetchPost(id);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
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
							<Typography variant="h1">
								{singlePost.title}
							</Typography>
							<Paper variant="outlined">
								<img
									className={classes.blogImage}
									src={singlePost.image}
									alt={singlePost.title}
								/>
							</Paper>
							<Paper>
								<div
									dangerouslySetInnerHTML={{
										__html: singlePost.text,
									}}
								/>
							</Paper>
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</motion.div>
	);
}

const mapStateToProps = ({
	singlePost,
	posts,
}: IStoreState): { singlePost: IPost } => {
	return { singlePost: singlePost };
};

export default connect(mapStateToProps, { fetchPost })(Post);
