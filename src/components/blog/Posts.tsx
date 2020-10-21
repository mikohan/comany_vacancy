import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ITodo, fetchTodos } from '../../store/actions/actions';
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

interface Props {
	todos: ITodo[];
	fetchTodos(): any;
}

function Posts(props: Props) {
	const classes = useStyles();
	useEffect(() => {
		props.fetchTodos();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const { todos } = props;
	return (
		<Container>
			<Grid container>
				<Grid xs={12}>
					<Paper>
						<List className={classes.root}>
							{todos.map((todo) => (
								<React.Fragment>
									<ListItem
										key={todo.id}
										alignItems="flex-start"
									>
										<ListItemAvatar>
											<Avatar
												alt="Remy Sharp"
												src="/static/images/avatar/1.jpg"
											/>
										</ListItemAvatar>
										<ListItemText
											primary={todo.title.toUpperCase()}
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
			</Grid>
		</Container>
	);
}

const mapStateToProps = ({ todos }: IStoreState): { todos: ITodo[] } => {
	return { todos: todos };
};

export default connect(mapStateToProps, { fetchTodos })(Posts);
