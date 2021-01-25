import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { durationPage } from '../config';
import { fullstack } from '../translate/fullstack';
import { ThemeContext } from '../context/ThemeContext';
import LinuxPageComponent from './LinuxPageComponent';

function LinuxPage() {
  const context = useContext(ThemeContext);
  let { language } = context;
  const { header, text } = fullstack[language];
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: durationPage }}
    >
      <h1>Full stack Page former BackEnd component</h1>
      <LinuxPageComponent
        header={header}
        text={text}
        vidUrl="https://youtu.be/yUafPqTg3kw"
      />
    </motion.div>
  );
}

export default LinuxPage;
