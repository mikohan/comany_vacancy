import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { Box, Paper, Typography, Container, Grid } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    contactComp: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      paddingLeft: theme.spacing(5),
    },
    contactBox: {
      width: '800px',
      margin: '0 auto',
    },
    aLink: {
      color: 'inherit',
    },
  })
);

export default function Contacts() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Paper className={classes.contactComp}>
        <Box className={classes.contactBox}>
          <Grid container item xs={12}>
            <Grid item xs={12}>
              <Typography variant="h4">Contact Me</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <List component="nav" aria-label="main mailbox folders">
                <a className={classes.aLink} href="tel:79162151508">
                  <ListItem button>
                    <ListItemIcon>
                      <PhoneIcon />
                    </ListItemIcon>
                    <ListItemText primary="+7.916.215.1508" />
                  </ListItem>
                </a>
                <a
                  className={classes.aLink}
                  href="whatsapp://79162151508"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ListItem button>
                    <ListItemIcon>
                      <WhatsAppIcon />
                    </ListItemIcon>
                    <ListItemText primary="+7.916.215.1508" />
                  </ListItem>
                </a>
                <a
                  className={classes.aLink}
                  href="mailto:angara99@gmail.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <ListItem button>
                    <ListItemIcon>
                      <AlternateEmailIcon />
                    </ListItemIcon>
                    <ListItemText primary="angara99@gmail.com" />
                  </ListItem>
                </a>
              </List>
            </Grid>
            <Grid item xs={12} sm={6}>
              <List component="nav" aria-label="main mailbox folders">
                <a
                  className={classes.aLink}
                  href="https://www.linkedin.com/in/vladimir-vostrikov-7944b040/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ListItem button>
                    <ListItemIcon>
                      <LinkedInIcon />
                    </ListItemIcon>
                    <ListItemText primary="LinkedIn" />
                  </ListItem>
                </a>
                <a
                  className={classes.aLink}
                  href="https://www.facebook.com/vladimir.vs.39/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ListItem button>
                    <ListItemIcon>
                      <FacebookIcon />
                    </ListItemIcon>
                    <ListItemText primary="Facebook" />
                  </ListItem>
                </a>
                <a
                  className={classes.aLink}
                  href="https://github.com/mikohan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ListItem button>
                    <ListItemIcon>
                      <GitHubIcon />
                    </ListItemIcon>
                    <ListItemText primary="GitHub" />
                  </ListItem>
                </a>
              </List>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}
