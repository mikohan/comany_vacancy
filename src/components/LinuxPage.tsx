import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { durationPage } from '../config';
import { linux } from '../translate/linux';
import { ThemeContext } from '../context/ThemeContext';
import VideoPageComponent from './VideoPageComponent';

function LinuxPage() {
  const context = useContext(ThemeContext);
  let { language } = context;
  const { header, text } = linux[language];
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: durationPage }}
    >
      <VideoPageComponent
        header={header}
        text={text}
        vidUrl="https://youtu.be/yUafPqTg3kw"
      />
    </motion.div>
  );
}

export default LinuxPage;
