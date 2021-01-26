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
  })
);

function PageSinglePage({ image }: IProps) {
  const classes = useStyles();
  return (
    <Paper className={classes.paperRow} elevation={3}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper variant="outlined">
            <img src={require(image)} />
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
}
export default PageSinglePage;
