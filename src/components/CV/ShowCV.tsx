import React from 'react';
import { Box } from '@material-ui/core';

import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from './CVPdf';

const CVPdf = () => (
  <Box>
    <PDFViewer>
      <MyDocument />
    </PDFViewer>
  </Box>
);

export default CVPdf;
