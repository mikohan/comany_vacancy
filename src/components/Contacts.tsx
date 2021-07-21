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
import { translateHeader } from '../translate/header';
import { contacts } from '../config';

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

interface IProps {
  language: string;
}

export default function Contacts({ language }: IProps) {
  const classes = useStyles();
  const { contactsText } = translateHeader[language];

  return (
    <Container maxWidth="lg">
      <Paper className={classes.contactComp}>
        <Box className={classes.contactBox}>
          <Grid container item xs={12}>
            <Grid className={classes.contactComp} item xs={12}>
              <Typography variant="h4">{contactsText}</Typography>
            </Grid>
            <Grid
              item
              container
              xs={12}
              sm={6}
              alignItems="center"
              justify="center"
            >
              <Box>
                <List component="nav" aria-label="main mailbox folders">
                  <a className={classes.aLink} href={`tel:${contacts.phone}`}>
                    <ListItem button>
                      <ListItemIcon>
                        <PhoneIcon />
                      </ListItemIcon>
                      <ListItemText primary={contacts.phone} />
                    </ListItem>
                  </a>
                  <a
                    className={classes.aLink}
                    href={`whatsapp://${contacts.phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ListItem button>
                      <ListItemIcon>
                        <WhatsAppIcon />
                      </ListItemIcon>
                      <ListItemText primary={contacts.phone} />
                    </ListItem>
                  </a>
                  <a
                    className={classes.aLink}
                    href={`mailto:${contacts.email}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <ListItem button>
                      <ListItemIcon>
                        <AlternateEmailIcon />
                      </ListItemIcon>
                      <ListItemText primary={contacts.email} />
                    </ListItem>
                  </a>
                </List>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}
