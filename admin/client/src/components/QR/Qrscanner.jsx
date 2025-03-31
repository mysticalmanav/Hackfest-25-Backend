import React, { useState, useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import axios from "axios";
const QrScanner = () => {
  const [scannedData, setScannedData] = useState("");
  const [scanner, setScanner] = useState(null);
  useEffect(() => {
    if (scanner) {
      scanner.clear().catch((error) => {
        console.error("Failed to clear scanner", error);
      });
    }

    const config = {
      fps: 10,
      qrbox: { width: 250, height: 250 },
      facingMode: "environment",
    };

    const newScanner = new Html5QrcodeScanner("reader", config, false); // verbose=false

    newScanner.render(
      (decodedText) => {
        setScannedData(decodedText);
        newScanner.clear();
      }
      // (error) => console.log(error)
    );

    setScanner(newScanner);

    return () => {
      newScanner.clear().catch((error) => {
        console.error("Failed to clear scanner on unmount", error);
      });
    };
  }, []); // Empty dependency array means this runs once on mount

  const sendData = async (action) => {
    console.log(action);
    if (!scannedData) {
      alert("Please scan a QR code first");
      return;
    }
    console.log(scannedData);
    try {
      const response = await axios.post(
        `https://hackfest-25-backend-1.onrender.com/api/${action}`,
        scannedData
      );
      console.log(response);
      alert(data.message || "Action completed");
    } catch (error) {
      alert("Error processing request");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>QR Scanner</h2>
        <p style={styles.subtitle}>Scan team QR code</p>

        <div id="reader" style={styles.scanner}></div>

        {scannedData ? (
          <div style={styles.result}>
            <p>Scanned: {scannedData}</p>
            <div style={styles.buttonGroup}>
              <button style={styles.button} onClick={() => sendData("IN")}>
                Check IN
              </button>
              <button style={styles.button} onClick={() => sendData("OUT")}>
                Check OUT
              </button>
            </div>
          </div>
        ) : (
          <p style={styles.instruction}>Point camera at QR code</p>
        )}
      </div>
    </div>
  );
};

// Styles remain the same as your original
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
    padding: "30px",
  },
  card: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    maxWidth: "400px",
    width: "100%",
    textAlign: "center",
  },
  title: {
    fontSize: "30px",
    margin: "0 0 10px 0",
  },
  subtitle: {
    fontSize: "14px",
    color: "#666",
    margin: "0 0 20px 0",
  },
  scanner: {
    width: "250px",
    height: "250px",
    margin: "0 auto",
    border: "1px solid #ddd",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  },
  result: {
    marginTop: "20px",
    padding: "10px",
    borderTop: "1px solid #eee",
  },
  buttonGroup: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  },
  button: {
    flex: 1,
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  instruction: {
    fontSize: "12px",
    color: "#999",
    marginTop: "10px",
  },
};

export default QrScanner;
