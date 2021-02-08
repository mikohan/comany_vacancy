import React from 'react';
import { Box } from '@material-ui/core';

import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from './CVPdf';

const CVPdf = () => (
  <Box>
    <PDFViewer width={1200} height={1300}>
      <MyDocument />
    </PDFViewer>
  </Box>
);

export default CVPdf;
