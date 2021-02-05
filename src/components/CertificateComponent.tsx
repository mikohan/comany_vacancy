import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

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
      <img height="100%" width="100%" src={image} alt="Cetificates" />
    </Paper>
  );
}
export default PageSinglePage;
