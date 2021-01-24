import React from 'react';
import { Paper, Grid, Box, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ReactPlayer from 'react-player';
import Divider from '@material-ui/core/Divider';

interface IItem {
  original: string;
  thumbnail: string;
  embedUrl?: string;
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
    paragraph: {
      fontSize: '1.4rem',
      marginBottom: theme.spacing(3),
      textIndent: theme.spacing(4),
    },
  })
);

function PageSinglePage({ header, text }: any) {
  const classes = useStyles();
  return (
    <Paper className={classes.paperRow} elevation={3}>
      <Grid container spacing={3}>
        <Grid className={classes.textWrapper} item xs={12}>
          <Typography variant="h4">Header</Typography>
          <Typography variant="body1">Subheader</Typography>
        </Grid>
        <Grid item xs={6}>
          <Box className="player-wrapper">
            <ReactPlayer
              className="react-player"
              url="https://youtu.be/tL0cQXJ6Pss"
              controls
              width="100%"
              height="100%"
            />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box>{text}</Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
export default PageSinglePage;