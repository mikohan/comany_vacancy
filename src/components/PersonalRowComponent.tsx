import React from 'react';
import ImageGallery from 'react-image-gallery';
import { Paper, Grid, Box, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ReactPlayer from 'react-player';

interface IItem {
  original: string;
  thumbnail: string;
}

interface IProps {
  items: IItem[];
  vidUrl?: string[];
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
      <Grid container spacing={3}>
        <Grid className={classes.textWrapper} item xs={12}>
          <Typography variant="h3">{title}</Typography>
          <Typography variant="body1">{text}</Typography>
        </Grid>
        <Grid item xs={6}>
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
        <Grid item xs={6}>
          <Box className="player-wrapper">
            <ReactPlayer
              className="react-player"
              url={vidUrl?.length ? vidUrl[0] : ''}
              controls
              width="100%"
              height="100%"
            />
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default PersonalRow;
