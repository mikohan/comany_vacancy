import React from 'react';
import { Paper, Grid, Box, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ReactPlayer from 'react-player';

interface IProps {
  header?: string;
  text?: string;
  vidUrl: string;
  videoCover?: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    fontSizeVideo: {
      [theme.breakpoints.up('sm')]: {
        fontSize: '3.4rem',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '2.2rem',
      },
    },
    paperRow: {
      [theme.breakpoints.up('sm')]: {
        paddingLeft: theme.spacing(10),
        paddingRight: theme.spacing(10),
        paddingBottom: theme.spacing(10),
      },
      [theme.breakpoints.down('sm')]: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        paddingBottom: theme.spacing(2),
      },
    },
    textWrapper: {
      padding: theme.spacing(5),
    },
    paragraph: {
      [theme.breakpoints.up('sm')]: {
        fontSize: '1.4rem',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
      },
      marginBottom: theme.spacing(3),
      textIndent: theme.spacing(4),
      textAlign: 'left',
    },
  })
);

function PageSinglePage({ header, text, vidUrl, videoCover }: IProps) {
  const classes = useStyles();
  return (
    <Grid container spacing={0}>
      <Paper className={classes.paperRow} elevation={3}>
        <Grid className={classes.textWrapper} item xs={12}>
          <Typography
            className={classes.fontSizeVideo}
            variant="h2"
            dangerouslySetInnerHTML={{ __html: header as string }}
          ></Typography>
        </Grid>
        <Grid item xs={12}>
          <Box className="player-wrapper">
            <ReactPlayer
              className="react-player"
              url={vidUrl}
              controls
              width="100%"
              height="100%"
              light={videoCover}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            className={classes.paragraph}
            dangerouslySetInnerHTML={{ __html: text as string }}
          ></Box>
        </Grid>
      </Paper>
    </Grid>
  );
}
export default PageSinglePage;
