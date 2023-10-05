import React from "react";
import {
  PDFDownloadLink,
  Page,
  Text,
  Document,
  View,
  Image,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";
import logo from "../assets/SnapSum-logog.png";
import download from "../assets/download-pdf.png";
const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    backgroundColor: "white",
    padding: "1cm",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "1cm",
  },
  logo: {
    width: "1.5cm",
    height: "1.5cm",
    marginRight: "0.5cm",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  mainContent: {
    fontSize: 13,
    textAlign: "center",
  },
  footer: {
    position: "absolute",
    bottom: "0cm",
    height: "2.8cm",
    left: 0,
    right: 0,
    textAlign: "center",
    backgroundColor: "#1a202c",
    color: "white",
    fontSize: 12,
    padding: "0.6cm",
  },
  mainHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  linkLine: {
    fontSize: 13,
    textAlign: "left",
    color: "darkblue",
    marginTop: 8,
    fontWeight: "italic",
  },
  summaryText: {
    fontSize: 13,
    textAlign: "left",
  },
});

const PDFDocument = ({ summary, link }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Image src={logo} style={styles.logo} />
        <Text style={styles.headerText}>Snap Sum </Text>
      </View>

      {/* Main Content */}
      <View>
        {/* Main Heading */}
        <Text style={styles.mainHeading}>Summary</Text>
        {/* Summary Text */}
        <Text style={styles.summaryText}>{summary}</Text>
        {/* Link Line */}
        <Text style={styles.linkLine}>
          Link of the article: {" "}
          <Link src={link}>{link}</Link>
        </Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text>Summary Downloaded from SnapSum AI Summarizer</Text>
        <Text>Developed By- Chirag Rajput</Text>
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
        loading ? (
          <div className="loader2"></div>
        ) : (
          <img
            src={download}
            alt=""
            className="w-8 h-7 right-0 rounded-lg flex justify-end "
          />
        )
      }
    </PDFDownloadLink>
  );
};

export default PDFDownloadButton;
