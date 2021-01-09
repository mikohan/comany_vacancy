import React, { useContext } from 'react';
import ReactPlayer from 'react-player';
import { Grid, Paper, Typography, Box } from '@material-ui/core';
import { useStyles } from '../styles/PorfolioPageStyles';
import { translateText } from '../translate/texts';
import { ThemeContext } from '../context/ThemeContext';
import '../tmp.scss';
import GitHubIcon from '@material-ui/icons/GitHub';
import Button from '@material-ui/core/Button';

function PortfolioSingle() {
  const classes = useStyles();
  const context = useContext(ThemeContext);
  let { language } = context;
  const { portfolio } = translateText[language];

  return (
    <Paper className={classes.paperPadding} elevation={3}>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Typography variant="h4">{portfolio.venezo.title}</Typography>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Box className="player-wrapper">
            <ReactPlayer
              className="react-player"
              url="https://youtu.be/IHpfcNRXUcU"
              controls
              light={require('../assets/venezo-cover.png')}
              width="100%"
              height="100%"
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Box className={classes.textPadding}>
            <Typography variant="body1" align="left">
              {portfolio.venezo.mainText}
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid className={classes.bottomLinks} item xs={12} sm={7}>
        <Box>
          <a href={portfolio.venezo.project.href}>
            <Button
              style={{ marginRight: '16px' }}
              color="primary"
              variant="contained"
              startIcon={<GitHubIcon />}
            >
              {portfolio.venezo.project.text}
            </Button>
          </a>
          <a href={portfolio.venezo.gitHub.href}>
            <Button
              color="primary"
              variant="contained"
              startIcon={<GitHubIcon />}
            >
              {portfolio.venezo.gitHub.text}
            </Button>
          </a>
        </Box>
      </Grid>
    </Paper>
  );
}

export default PortfolioSingle;
