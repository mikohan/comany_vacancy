import React from 'react';
import { Paper, Grid } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

interface IProps {
  image: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    paperRow: {
      width: '100%',
      paddingLeft: theme.spacing(20),
      paddingRight: theme.spacing(20),
      paddingBottom: theme.spacing(20),
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
    fullWidth: {
      width: '100%',
    },
  })
);

function PageSinglePage({ image }: IProps) {
  const classes = useStyles();
  return (
    <Paper className={classes.paperRow} elevation={3}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.fullWidth} variant="outlined">
            <img src={image} />
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
}
export default PageSinglePage;
