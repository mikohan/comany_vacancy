import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer';
interface IProps {
  image: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paperRow: {
      width: '100%',
      padding: theme.spacing(5),
    },
    textWrapper: {
      padding: theme.spacing(5),
    },
    paragraph: {
      fontSize: '1.4rem',
      marginBottom: theme.spacing(3),
      textIndent: theme.spacing(4),
      textAlign: 'left',
    },
    fullWidth: {
      width: '100%',
    },
  })
);

const MyDoc = () => (
  <Document>
    <Page>// My document data</Page>
  </Document>
);

const CVPdf = () => (
  <Paper>
    <PDFDownloadLink document={<MyDoc />} fileName="somename.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download now!'
      }
    </PDFDownloadLink>
  </Paper>
);

export default CVPdf;
