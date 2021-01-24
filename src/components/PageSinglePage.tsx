import React from 'react';
import { Paper, Grid, Box, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ReactPlayer from 'react-player';

interface IProps {
  header?: string;
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
      textAlign: 'left',
    },
  })
);

function PageSinglePage({ header, text }: IProps) {
  const classes = useStyles();
  return (
    <Paper className={classes.paperRow} elevation={3}>
      <Grid container spacing={3}>
        <Grid className={classes.textWrapper} item xs={12}>
          <Typography
            variant="h4"
            dangerouslySetInnerHTML={{ __html: header as string }}
          ></Typography>
        </Grid>
        <Grid item xs={12}>
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
        <Grid item xs={12}>
          <Box
            className={classes.paragraph}
            dangerouslySetInnerHTML={{ __html: text as string }}
          ></Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
export default PageSinglePage;
