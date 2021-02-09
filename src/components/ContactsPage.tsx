import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { durationPage } from '../config';
import { Grid, Container } from '@material-ui/core';
import { ThemeContext } from '../context/ThemeContext';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Contacts from './Contacts';

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

function ContactsPage() {
  const context = useContext(ThemeContext);
  const classes = useStyles();
  let { language } = context;
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
              <Contacts />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </motion.div>
  );
}

export default ContactsPage;
