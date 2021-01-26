import React from 'react';
import { Paper, Grid } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

interface IProps {
  image: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paperRow: {
      width: '100%',
      padding: theme.spacing(5),
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
          <Container maxWidth="lg">
            <img height="100%" width="100%" src={image} />
          </Container>
        </Grid>
      </Grid>
    </Paper>
  );
}
export default PageSinglePage;
