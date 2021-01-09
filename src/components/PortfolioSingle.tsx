import React, { useContext } from 'react';
import ReactPlayer from 'react-player';
import { Grid, Paper, Typography, Box } from '@material-ui/core';
import { useStyles } from '../styles/PorfolioPageStyles';
import { translateText } from '../translate/texts';
import { ThemeContext } from '../context/ThemeContext';
import '../tmp.scss';
import GitHubIcon from '@material-ui/icons/GitHub';
import Button from '@material-ui/core/Button';

interface IProps {
  vidUrl: string;
  coverImg?: string;
  projectName: string;
  direction?: boolean;
}

function PortfolioSingle({
  vidUrl,
  coverImg,
  projectName,
  direction = false,
}: IProps) {
  const classes = useStyles();
  const context = useContext(ThemeContext);
  let { language } = context;
  const { portfolio } = translateText[language];

  const PlayerBox = () => (
    <Grid item xs={12} sm={7}>
      <Box className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url={vidUrl}
          controls
          light={coverImg}
          width="100%"
          height="100%"
        />
      </Box>
    </Grid>
  );

  return (
    <Paper className={classes.paperPadding} elevation={3}>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Typography variant="h4">{portfolio[projectName].title}</Typography>
        </Grid>
        {!direction ? <PlayerBox /> : ''}
        <Grid item xs={12} sm={5}>
          <Box className={classes.textPadding}>
            <Typography variant="body1" align="left">
              {portfolio[projectName].mainText}
            </Typography>
          </Box>
        </Grid>
        {direction ? <PlayerBox /> : ''}
      </Grid>
      <Grid className={classes.bottomLinks} item xs={12} sm={7}>
        <Box>
          <a href={portfolio[projectName].project.href} target="_blank">
            <Button
              style={{ marginRight: '16px' }}
              color="primary"
              variant="contained"
              startIcon={<GitHubIcon />}
            >
              {portfolio[projectName].project.text}
            </Button>
          </a>
          <a href={portfolio[projectName].gitHub.href} target="_blank">
            <Button
              color="primary"
              variant="contained"
              startIcon={<GitHubIcon />}
            >
              {portfolio[projectName].gitHub.text}
            </Button>
          </a>
        </Box>
      </Grid>
    </Paper>
  );
}

export default PortfolioSingle;
