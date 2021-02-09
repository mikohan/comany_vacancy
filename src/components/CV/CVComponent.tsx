import React from 'react';
import { Paper, Typography, Grid, Divider, Chip } from '@material-ui/core';
import { useStyles } from '../../styles/AboutPageTestStylesl';
import DoneIcon from '@material-ui/icons/Done';

interface IProps {
  language: string;
}

const skillsGeneral = [
  'Agile',
  'Kanban',
  'Scrum RegExp',
  'Patterns',
  'Git',
  'GitHub',
  'TDD',
  'Data Structure',
  'Algorithms',
  'GitHub',
  'TDD',
  'Algorithms',
];

export default function CVComponent({ language }: IProps) {
  const classes = useStyles();
  return (
    <Paper style={{ padding: '5rem' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.myDivider}>
          <Divider />
        </Grid>
        <Grid item xs={4}>
          <Typography
            align="left"
            variant="h3"
            className={classes.fullStackDeveloper}
          >
            Vladimir Vostrikov
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography
            className={classes.fullStackDeveloper}
            align="left"
            variant="h3"
          >
            Full Stack Developer
          </Typography>
          <Typography className={classes.fontWght} align="left" variant="h5">
            angara99@gmail.com
          </Typography>
          <Typography className={classes.fontWght} align="left" variant="h5">
            +7.916.215.1508
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.myDivider}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Typography align="left" variant="h4">
            Skills
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.myDivider}>
          <Divider />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6">General Skils</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="body1">
            Agile Kanban, Scrum RegExp, Patterns, Git, GitHub, TDD, Data
            structure, Algorithms
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.myDivider}>
          <Divider />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6">General Skils</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="body1">
            {skillsGeneral.map((skill: string) => (
              <Chip
                className={classes.myChip}
                label={skill}
                clickable
                deleteIcon={<DoneIcon />}
                variant="outlined"
              />
            ))}
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.myDivider}>
          <Divider />
        </Grid>
      </Grid>
    </Paper>
  );
}
