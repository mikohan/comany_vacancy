import React, { useContext } from 'react';
import ReactPlayer from 'react-player';
import { Grid, Paper, Typography, Box } from '@material-ui/core';
import { useStyles } from '../styles/PorfolioPageStyles';
import { translateText } from '../translate/texts';
import { ThemeContext } from '../context/ThemeContext';
import '../tmp.scss';
import GitHubIcon from '@material-ui/icons/GitHub';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Button from '@material-ui/core/Button';

interface IProps {
  vidUrl: string;
  coverImg?: string;
  projectName: string;
  direction?: boolean; // If true bideo will be on the right
  buttons?: boolean; // if false Buttons Github and live view will be disabled
}

function PortfolioSingle({
  vidUrl,
  coverImg,
  projectName,
  direction = false,
  buttons = true,
}: IProps) {
  const classes = useStyles();
  const context = useContext(ThemeContext);
  let { language } = context;
  const { portfolio } = translateText[language];

  const PlayerBox = () => (
    <Grid item xs={12} md={7}>
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
      <Grid container>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Typography variant="h4">{portfolio[projectName].title}</Typography>
          </Grid>
          {!direction ? <PlayerBox /> : ''}
          <Grid item xs={12} md={5}>
            <Box
              className={classes.textPadding}
              display={{ xs: 'none', md: 'block' }}
            >
              <Typography
                variant="body1"
                align="left"
                dangerouslySetInnerHTML={{
                  __html: portfolio[projectName].mainText as string,
                }}
              ></Typography>
            </Box>
          </Grid>
          {direction ? <PlayerBox /> : ''}
        </Grid>

        <Grid className={classes.bottomLinks} item xs={12}>
          <Box display={{ xs: 'none', sm: 'block' }}>
            {buttons ? (
              <Box>
                <a
                  href={portfolio[projectName].project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    style={{ marginRight: '16px' }}
                    color="primary"
                    variant="contained"
                    startIcon={<VisibilityIcon />}
                  >
                    {portfolio[projectName].project.text}
                  </Button>
                </a>
                <a
                  href={portfolio[projectName].gitHub.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    color="primary"
                    variant="contained"
                    startIcon={<GitHubIcon />}
                  >
                    {portfolio[projectName].gitHub.text}
                  </Button>
                </a>
              </Box>
            ) : (
              ''
            )}
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default PortfolioSingle;
