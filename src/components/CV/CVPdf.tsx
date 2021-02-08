import React from 'react';

import {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  Image,
} from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: 'white',
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
        <Image src={require('../../assets/a77.png')} />
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
          unde nobis, reprehenderit tempore eos eum rem sunt! Ipsum culpa
          voluptatibus magnam magni perferendis, expedita sit veniam officiis
          dignissimos, sunt quisquam.
        </Text>
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

export default MyDocument;
