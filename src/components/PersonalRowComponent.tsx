import React from 'react';
import ImageGallery from 'react-image-gallery';
import { Paper, Grid } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

interface IItem {
  original: string;
  thumbnail: string;
}

interface IProps {
  items: IItem[];
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
  })
);

function PersonalRow({ items }: IProps) {
  const classes = useStyles();
  return (
    <Paper className={classes.paperRow} elevation={3}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <ImageGallery items={items} />
        </Grid>
        <Grid item xs={6}>
          Content
        </Grid>
      </Grid>
    </Paper>
  );
}

export default PersonalRow;
