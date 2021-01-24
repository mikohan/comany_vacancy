import React from 'react';
import { Paper, Grid, Box, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ReactPlayer from 'react-player';

interface IItem {
  original: string;
  thumbnail: string;
  embedUrl?: string;
}

interface IProps {
  items: IItem[];
  vidUrl?: string[];
  imageVideo?: boolean;
  title?: string;
  text?: string;
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
    textWrapper: {
      padding: theme.spacing(5),
    },
  })
);

function PageSinglePage() {
  const classes = useStyles();
  return (
    <Paper className={classes.paperRow} elevation={3}>
      <Grid container spacing={3}>
        <Grid className={classes.textWrapper} item xs={12}>
          <Typography variant="h4">Header</Typography>
          <Typography variant="body1">Subheader</Typography>
        </Grid>
        <Grid item xs={6}>
          <Box className="player-wrapper">
            <ReactPlayer
              className="react-player"
              url="https://youtu.be/tL0cQXJ6Pss"
              controls
              width="100%"
              height="100%"
            />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box>
            <Typography variant="body2">
              Hi, I am Vladimir and in this video I will tell you about my
              Linux/Unix experience. I have been working in the Linux
              environment for 12 years. I like Linux for its reliability and a
              great opportunity to learn new things every day. I worked in
              different distributions such as Debian, Ubuntu, Fedora, Centos and
              so on. One day I even built a Gentoo distro just for learning
              purposes. I can set up and configure pretty much any kind of
              software in Linux. For scripting sometimes I’m using Shell/Bash
              sometimes Python. I also have experience with Web servers, like
              Apache and Nginx and also Python WSGI. Databases servers such as
              MySQL, MariaDB, PostgreSQL and Elastic search. FTP servers, here
              are VS FTP, ProFTPD. Network related staff (NFC, SAMBA, Bing9,
              SSH, etc.). And security related staff: IP tables, Fail to ban,
              SSl and even more. I also have designed by myself a complex Backup
              system, using Crone, Python and BASH scripting. During my
              developer’s career, I have been facing a lot of different
              difficult tasks. For example, two years ago our company was needed
              to solve a problem with the VOIP business phone system. And I set
              up the Asterisk on the Slackware distro from scratch, with no
              prior knowledge. I tell you it is not for the faint-hearted at
              all. I like to get to the heart of the matter of things so Linux
              gives me that opportunity almost every day. Thank you. Bye.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
export default PageSinglePage;
