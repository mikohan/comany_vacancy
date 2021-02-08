import React from 'react';
import { Box, Button } from '@material-ui/core';
import MyDocument from './CVPdf';

import { PDFDownloadLink } from '@react-pdf/renderer';

const CVPdf = () => (
  <Box>
    <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
      {({ blob, url, loading, error }) =>
        loading ? (
          'Loading document...'
        ) : (
          <Button variant="outlined">Download CV</Button>
        )
      }
    </PDFDownloadLink>
  </Box>
);

export default CVPdf;
