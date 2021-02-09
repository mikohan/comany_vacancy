import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { durationPage } from '../config';
import { Grid, Container } from '@material-ui/core';
import { ThemeContext } from '../context/ThemeContext';
import Contacts from './Contacts';

function ContactsPage() {
  const context = useContext(ThemeContext);
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
              <Contacts language={language} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </motion.div>
  );
}

export default ContactsPage;
