import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import { durationPage } from '../config';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 'calc(100vh - 120px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {},
  button: {
    marginTop: theme.spacing(3),
  },
}));

function Page_404() {
  const classes = useStyles();
  return (
    <motion.div
      className={classes.root}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: durationPage }}
    >
      <div className={classes.content}>
        <Typography variant="h1">404</Typography>
        <Typography variant="h4">Page not Found</Typography>
        <Button className={classes.button} variant="outlined">
          Return Home
        </Button>
      </div>
    </motion.div>
  );
}

export default Page_404;
