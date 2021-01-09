import React from 'react';
import { motion } from 'framer-motion';
import { durationPage } from '../config';
import ReactPlayer from 'react-player';
import { Grid, Paper, Typography, Box } from '@material-ui/core';
import { useStyles } from '../styles/PorfolioPageStyles';
import '../tmp.scss';

function BackEndPage() {
  const classes = useStyles();
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: durationPage }}
    >
      <h1>Portfolio Page</h1>
      <Grid container spacing={6}>
        <Grid item container xs={12}>
          <Paper className={classes.paperPadding} elevation={3}>
            <Grid container spacing={6}>
              <Grid item xs={12}>
                <Typography variant="h4">
                  Venezo Project E-commerce project (Python, Django)
                </Typography>
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor, assumenda. Animi, laudantium perspiciatis. Impedit
                    vitae nemo, exercitationem tenetur assumenda hic. Pariatur
                    harum doloribus quas, modi porro voluptate dignissimos eaque
                    exercitationem? Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Nobis consequatur deleniti sunt beatae
                    placeat dolorem fugit, aut voluptatum architecto mollitia
                    cumque maxime veritatis alias quo a voluptates eaque
                    officiis recusandae? Dolorem mollitia incidunt voluptas ut
                    illum cum quisquam ex, perferendis, dolore ratione nulla
                    quidem neque expedita! Eligendi obcaecati incidunt, ipsa ut
                    labore, in minus quia, dolores earum voluptas magnam
                    similique. Ipsam expedita laboriosam culpa? Ipsum, porro
                    tempore illo aut tenetur eaque culpa quasi iusto blanditiis
                    cumque cupiditate incidunt excepturi ducimus soluta
                    reprehenderit ipsa molestiae ex ad corporis ratione repellat
                    vel. Dolore perspiciatis quisquam aspernatur, cupiditate
                    veritatis, placeat fuga omnis pariatur blanditiis iste quis,
                    recusandae enim neque aliquid deserunt commodi nam doloribus
                    odio itaque. Pariatur esse, accusantium quia explicabo sed
                    perferendis! Vero molestiae exercitationem, odit voluptate
                    molestias expedita facere modi eos blanditiis quia provident
                    nihil, error nobis voluptatem ipsa iste saepe, obcaecati
                    quidem itaque incidunt quos dolores! Debitis voluptas dolore
                    repudiandae.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item container xs={12}>
          <Paper className={classes.paperPadding} elevation={3}>
            <Grid container spacing={6}>
              <Grid item xs={12}>
                <Typography variant="h4">
                  Venezo Project E-commerce project (Python, Django)
                </Typography>
              </Grid>
              <Grid item xs={12} sm={5}>
                <Box className={classes.textPadding}>
                  <Typography variant="body1" align="left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor, assumenda. Animi, laudantium perspiciatis. Impedit
                    vitae nemo, exercitationem tenetur assumenda hic. Pariatur
                    harum doloribus quas, modi porro voluptate dignissimos eaque
                    exercitationem? Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Nobis consequatur deleniti sunt beatae
                    placeat dolorem fugit, aut voluptatum architecto mollitia
                    cumque maxime veritatis alias quo a voluptates eaque
                    officiis recusandae? Dolorem mollitia incidunt voluptas ut
                    illum cum quisquam ex, perferendis, dolore ratione nulla
                    quidem neque expedita! Eligendi obcaecati incidunt, ipsa ut
                    labore, in minus quia, dolores earum voluptas magnam
                    similique. Ipsam expedita laboriosam culpa? Ipsum, porro
                    tempore illo aut tenetur eaque culpa quasi iusto blanditiis
                    cumque cupiditate incidunt excepturi ducimus soluta
                    reprehenderit ipsa molestiae ex ad corporis ratione repellat
                    vel. Dolore perspiciatis quisquam aspernatur, cupiditate
                    veritatis, placeat fuga omnis pariatur blanditiis iste quis,
                    recusandae enim neque aliquid deserunt commodi nam doloribus
                    odio itaque. Pariatur esse, accusantium quia explicabo sed
                    perferendis! Vero molestiae exercitationem, odit voluptate
                    molestias expedita facere modi eos blanditiis quia provident
                    nihil, error nobis voluptatem ipsa iste saepe, obcaecati
                    quidem itaque incidunt quos dolores! Debitis voluptas dolore
                    repudiandae.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={7}>
                <Box className="player-wrapper">
                  <ReactPlayer
                    className="react-player"
                    url="https://youtu.be/44Nw_QoZDuc"
                    controls
                    light={require('../assets/nuxt-chat.png')}
                    width="100%"
                    height="100%"
                  />
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item container xs={12}>
          <Paper className={classes.paperPadding} elevation={3}>
            <Grid container spacing={6}>
              <Grid item xs={12}>
                <Typography variant="h4">
                  Venezo Project E-commerce project (Python, Django)
                </Typography>
              </Grid>
              <Grid item xs={12} sm={7}>
                <Box className="player-wrapper">
                  <ReactPlayer
                    className="react-player"
                    url="https://youtu.be/44Nw_QoZDuc"
                    controls
                    light={require('../assets/nuxt-chat.png')}
                    width="100%"
                    height="100%"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={5}>
                <Box className={classes.textPadding}>
                  <Typography variant="body1" align="left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor, assumenda. Animi, laudantium perspiciatis. Impedit
                    vitae nemo, exercitationem tenetur assumenda hic. Pariatur
                    harum doloribus quas, modi porro voluptate dignissimos eaque
                    exercitationem? Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Nobis consequatur deleniti sunt beatae
                    placeat dolorem fugit, aut voluptatum architecto mollitia
                    cumque maxime veritatis alias quo a voluptates eaque
                    officiis recusandae? Dolorem mollitia incidunt voluptas ut
                    illum cum quisquam ex, perferendis, dolore ratione nulla
                    quidem neque expedita! Eligendi obcaecati incidunt, ipsa ut
                    labore, in minus quia, dolores earum voluptas magnam
                    similique. Ipsam expedita laboriosam culpa? Ipsum, porro
                    tempore illo aut tenetur eaque culpa quasi iusto blanditiis
                    cumque cupiditate incidunt excepturi ducimus soluta
                    reprehenderit ipsa molestiae ex ad corporis ratione repellat
                    vel. Dolore perspiciatis quisquam aspernatur, cupiditate
                    veritatis, placeat fuga omnis pariatur blanditiis iste quis,
                    recusandae enim neque aliquid deserunt commodi nam doloribus
                    odio itaque. Pariatur esse, accusantium quia explicabo sed
                    perferendis! Vero molestiae exercitationem, odit voluptate
                    molestias expedita facere modi eos blanditiis quia provident
                    nihil, error nobis voluptatem ipsa iste saepe, obcaecati
                    quidem itaque incidunt quos dolores! Debitis voluptas dolore
                    repudiandae.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </motion.div>
  );
}

export default BackEndPage;
