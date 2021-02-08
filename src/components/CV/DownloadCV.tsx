import React from 'react';
import { Button } from '@material-ui/core';
import MyDocument from './CVPdf';

import { PDFDownloadLink } from '@react-pdf/renderer';
import { useStyles } from '../../styles/AboutPageTestStylesl';

interface IProps {
  text: string;
}
const CVPdf = ({ text }: IProps) => {
  const classes = useStyles();
  return (
    <Button variant="outlined" className={classes.mainButtons}>
      <PDFDownloadLink
        style={{ color: 'inherit' }}
        document={<MyDocument />}
        fileName="somename.pdf"
      >
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : text
        }
      </PDFDownloadLink>
    </Button>
  );
};
export default CVPdf;
