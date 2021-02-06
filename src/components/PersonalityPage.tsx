import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { durationPage } from '../config';
import { Grid, Container } from '@material-ui/core';
import PersonalRow from './PersonalRowComponent';
import { translateText } from '../translate/personal';
import { ThemeContext } from '../context/ThemeContext';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import VideoPageComponent from './VideoPageComponent';
import { IconButton } from '@material-ui/core';
import ScrollToTop from 'react-scroll-up';
import PresentToAllIcon from '@material-ui/icons/PresentToAll';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    verticalGap: {
      marginBottom: theme.spacing(5),
    },
    scrollUp: {
      fontSize: '5rem',
    },
  })
);

const images = [
  {
    original: require('../assets/podium.jpg'),
    thumbnail: require('../assets/podium_thumb.jpg'),
    originalTitle: 'Four 1st places at Abzakovo Cup',
  },
  {
    original: require('../assets/four_medal2.jpg'),
    thumbnail: require('../assets/four_medal_tmb.jpg'),
  },
  {
    original: require('../assets/izevsk_podium1.jpg'),
    thumbnail: require('../assets/izevsk_podium1_tmb.jpg'),
  },
  {
    original: require('../assets/izevsk_podium1.jpg'),
    thumbnail: require('../assets/izevsk_podium1_tmb.jpg'),
  },
  {
    original: require('../assets/snow_ezic.jpg'),
    thumbnail: require('../assets/snow_ezic.jpg'),
  },
];
const imagesAviation = [
  {
    original: require('../assets/aviation_lic.jpg'),
    thumbnail: require('../assets/aviation_lic_tmb.jpg'),
    originalTitle: 'Four 1st places at Abzakovo Cup',
  },
  {
    original: require('../assets/avia2.jpg'),
    thumbnail: require('../assets/avia2.jpg'),
  },
  {
    original: require('../assets/avia3.jpg'),
    thumbnail: require('../assets/avia3.jpg'),
  },
  {
    original: require('../assets/avia1.jpg'),
    thumbnail: require('../assets/avia1.jpg'),
    originalTitle: 'Four 1st places at Abzakovo Cup',
  },
];
//https://youtu.be/um1PiGKCBi4
function PersonalityPage() {
  const context = useContext(ThemeContext);
  let { language } = context;
  const {
    pageTitle,
    cheer,
    freeDiving,
    ski,
    snowboard,
    skateBoard,
    acrobe,
    aviation,
    rollerBlade,
    vidHeader,
    text,
  } = translateText[language];
  const classes = useStyles();
  /* const vidUrl = 'https://youtu.be/DcTg4oePYs8'; */
  const vidUrl = 'https://youtu.be/Yb0WsqB32IE';
  const meCover = require('../assets/mePersonalCover2.png');
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: durationPage }}
    >
      <Container className="containerClass" maxWidth="lg">
        <Grid container spacing={5}>
          <Grid container item>
            <Grid item xs={12}>
              <VideoPageComponent
                header={vidHeader}
                text={text}
                vidUrl={vidUrl}
                videoCover={meCover}
              />
            </Grid>
            <Grid item xs={12}>
              <h1>{pageTitle}</h1>
            </Grid>
          </Grid>
          <Grid container item>
            <Grid container className={classes.verticalGap} item xs={12}>
              <PersonalRow
                title={snowboard.title}
                text={snowboard.text}
                items={images}
                imageVideo={true}
                vidUrl={[
                  'https://youtu.be/aEYRJWz9pFE',
                  'https://youtu.be/um1PiGKCBi4',
                ]}
              />
            </Grid>
            <Grid container className={classes.verticalGap} item xs={12}>
              <PersonalRow
                title={acrobe.title}
                text={acrobe.text}
                items={images}
                imageVideo={false}
                vidUrl={[
                  'https://youtu.be/bWny3cBI6qk',
                  'https://youtu.be/D0eZspiPcOk',
                ]}
              />
            </Grid>
            <Grid container className={classes.verticalGap} item xs={12}>
              <PersonalRow
                title={skateBoard.title}
                text={skateBoard.text}
                items={images}
                imageVideo={false}
                vidUrl={[
                  'https://youtu.be/Ufuslz3-n-Q',
                  'https://youtu.be/r4MRwrWiKDQ',
                ]}
              />
            </Grid>
            <Grid container className={classes.verticalGap} item xs={12}>
              <PersonalRow
                title={ski.title}
                text={ski.text}
                items={images}
                imageVideo={false}
                vidUrl={[
                  'https://youtu.be/Mm-FVcaaNpc',
                  'https://youtu.be/5f7aa0vYoGE',
                ]}
              />
            </Grid>
            <Grid container className={classes.verticalGap} item xs={12}>
              <PersonalRow
                title={freeDiving.title}
                text={freeDiving.text}
                items={images}
                imageVideo={false}
                vidUrl={[
                  'https://youtu.be/c1siyJH_ofk',
                  'https://youtu.be/NF2dpZyx0JY',
                ]}
              />
            </Grid>
            <Grid container item xs={12}>
              <PersonalRow
                title={cheer.title}
                text={cheer.text}
                items={images}
                imageVideo={false}
                vidUrl={[
                  'https://youtu.be/g2gzxLlMg7Y',
                  'https://youtu.be/NfWgx9b3VjY',
                ]}
              />
            </Grid>
            <Grid container className={classes.verticalGap} item xs={12}>
              <PersonalRow
                title={rollerBlade.title}
                text={rollerBlade.text}
                items={images}
                imageVideo={false}
                vidUrl={[
                  'https://youtu.be/tL0cQXJ6Pss',
                  'https://youtu.be/rcr4WD5uhg8',
                ]}
              />
            </Grid>
            <Grid container className={classes.verticalGap} item xs={12}>
              <PersonalRow
                title={aviation.title}
                text={aviation.text}
                items={imagesAviation}
                imageVideo={true}
                vidUrl={[
                  'https://youtu.be/4crO3dc2Fb0',
                  'https://youtu.be/4crO3dc2Fb0',
                ]}
              />
            </Grid>
          </Grid>
          <Grid container item style={{ marginTop: '1rem' }}>
            <Grid item xs={12}>
              <ScrollToTop
                style={{
                  bottom: 100,
                  right: 100,
                }}
                showUnder={260}
              >
                <IconButton color="primary" aria-label="add to shopping cart">
                  <PresentToAllIcon className={classes.scrollUp} />
                </IconButton>
              </ScrollToTop>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </motion.div>
  );
}

export default PersonalityPage;
