import React from 'react';
import { PDFDownloadLink, Page, Text, Document, View, Image, StyleSheet } from '@react-pdf/renderer';
import logo from '../assets/SnapSum-logog.png'; 
import download from '../assets/download-pdf.png'; 
const styles = StyleSheet.create({
    
  page: {
    fontFamily: 'Helvetica',
    backgroundColor: 'white',
    padding: '1cm',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '1cm',
  },
  logo: {
    width: '1.5cm',
    height: '1.5cm',
    marginRight: '0.5cm',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  mainContent: {
    fontSize: 13,
    textAlign: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: '0cm',
    height: '2.5cm',
    left: 0,
    right: 0,
    textAlign: 'center',
    backgroundColor: '#1a202c', 
    color: 'white',
    fontSize: 12,
    padding: '0.6cm',
  },
});

const PDFDocument = ({ summary }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Image src={logo} style={styles.logo} />
        <Text style={styles.headerText}>Snap Sum</Text>
      </View>

      {/* Main Content */}
      <Text style={styles.mainContent}>
        <div>Summary</div> <br />
        {summary}
        </Text>

      {/* Footer */}
      <View style={styles.footer}>
        <Text>Summary Download from SnapSum AI Summarizer</Text>
        <Text>Developed By Chirag Rajput</Text>
      </View>
    </Page>
  </Document>
);

const PDFDownloadButton = ({ summary }) => {
  return (
    <PDFDownloadLink
      document={<PDFDocument summary={summary} />}
      fileName="SnapSum-TextSummary.pdf"
    >
      {({ blob, url, loading, error }) =>
        loading ? <div className="loader2"></div> : <img src={download} alt="" className='w-10 h-10 right-0 rounded-lg flex justify-end ' />
      }
    </PDFDownloadLink>
  );
};

export default PDFDownloadButton;
