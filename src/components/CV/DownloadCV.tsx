import React from 'react';
import { Button } from '@material-ui/core';
import MyDocument from './CVPdf';

import { PDFDownloadLink } from '@react-pdf/renderer';

const CVPdf = () => (
  <Button variant="outlined">
    <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download CV'
      }
    </PDFDownloadLink>
  </Button>
);

export default CVPdf;
