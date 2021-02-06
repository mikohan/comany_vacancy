import React from 'react';
import ImageGallery from 'react-image-gallery';
import { Paper, Grid, Box, Typography, Hidden } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ReactPlayer from 'react-player';
// Working for tomorrow

interface IItem {
	original: string;
	thumbnail: string;
	embedUrl?: string;
}

interface IProps {
	items: IItem[];
	vidUrl: string[];
	imageVideo?: boolean;
	title?: string;
	text?: string;
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			'& > *': {
				margin: theme.spacing(1),
			},
		},
		paperRow: {
			padding: theme.spacing(3),
		},
		textWrapper: {
			padding: theme.spacing(5),
		},
	})
);

function PersonalRow({
	items,
	vidUrl,
	imageVideo = true,
	title,
	text,
}: IProps) {
	const classes = useStyles();
	return (
		<Paper className={classes.paperRow} elevation={3}>
			<Grid container item xs={12}>
				<Grid className={classes.textWrapper} item xs={12}>
					<Typography variant="h4">{title}</Typography>
					<Typography variant="body1">{text}</Typography>
				</Grid>

				<Hidden xsDown>
					<Grid container item xs={12} spacing={5}>
						<Grid item xs={12} md={6}>
							{imageVideo ? (
								<ImageGallery items={items} />
							) : (
								<Box className="player-wrapper">
									<ReactPlayer
										className="react-player"
										url={vidUrl?.length ? vidUrl[1] : ''}
										controls
										width="100%"
										height="100%"
									/>
								</Box>
							)}
						</Grid>
						<Grid item xs={12} md={6}>
							<Box className="player-wrapper">
								<ReactPlayer
									className="react-player"
									url={vidUrl[0]}
									controls
									width="100%"
									height="100%"
								/>
							</Box>
						</Grid>
					</Grid>
				</Hidden>
			</Grid>
		</Paper>
	);
}

export default PersonalRow;
