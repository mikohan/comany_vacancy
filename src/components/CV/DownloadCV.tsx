import React from 'react';
import { Button } from '@material-ui/core';
import MyDocument from './CVPdf';

import { PDFDownloadLink } from '@react-pdf/renderer';

interface IProps {
  text: string;
}
const CVPdf = ({ text }: IProps) => (
  <Button variant="outlined">
    <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : text
      }
    </PDFDownloadLink>
  </Button>
);

export default CVPdf;
