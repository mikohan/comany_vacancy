import React from 'react';
import { Paper, Typography, Grid } from '@material-ui/core';

interface IProps {
  language: string;
}

export default function CVComponent({ language }: IProps) {
  return (
    <Paper style={{ padding: '5rem' }}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Typography variant="h6">Lorem, ipsum dolor sit amet</Typography>
        </Grid>
        <Grid item xs={8}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          corporis. Omnis, officia molestiae officiis harum magnam eum itaque
          nisi eaque labore cumque facere reiciendis voluptates, libero
          aspernatur. Praesentium, nesciunt quisquam!
        </Grid>
      </Grid>
    </Paper>
  );
}
