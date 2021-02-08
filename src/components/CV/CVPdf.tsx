import React from 'react';
import { Box, Button } from '@material-ui/core';

import {
  PDFDownloadLink,
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  PDFViewer,
} from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: 'tomato',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
          unde nobis, reprehenderit tempore eos eum rem sunt! Ipsum culpa
          voluptatibus magnam magni perferendis, expedita sit veniam officiis
          dignissimos, sunt quisquam.
        </Text>
      </View>
      <View style={styles.section}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          nulla iusto velit voluptatum sunt totam soluta numquam molestiae,
          corrupti blanditiis saepe fugiat hic, facere id? Nulla aut voluptas
          aliquid nemo.
        </Text>
      </View>
    </Page>
  </Document>
);

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
    <PDFViewer>
      <MyDocument />
    </PDFViewer>
  </Box>
);

export default MyDocument;
