import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { Box, Paper, Typography, Container } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';

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
    },
    contactBox: {
      width: '800px',
      margin: '0 auto',
    },
  })
);

export default function Contacts() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Paper className={classes.contactComp}>
        <Box className={classes.contactBox}>
          <Grid container spacing={3}>
            <Typography variant="h4">Contact Me</Typography>
            <List component="nav" aria-label="main mailbox folders">
              <ListItem button>
                <ListItemIcon>
                  <PhoneIcon />
                </ListItemIcon>
                <ListItemText primary="+7.916.215.1508" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <WhatsAppIcon />
                </ListItemIcon>
                <ListItemText primary="+7.916.215.1508" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <AlternateEmailIcon />
                </ListItemIcon>
                <ListItemText primary="angara99@gmail.com" />
              </ListItem>
            </List>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}
