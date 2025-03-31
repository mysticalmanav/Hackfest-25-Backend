import React, { useState, useEffect, use } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const QrScanner = () => {
  const [scannedData, setScannedData] = useState("");
  const [scanner, setScanner] = useState(null);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    if (scanner) {
      scanner.clear().catch((error) => {
        console.error("Failed to clear scanner", error);
      });
    }

    const config = {
      fps: 10,
      qrbox: { width: 250, height: 250 },
      facingMode: "user",
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
  }, []);

  const sendData = async (action) => {
    console.log(action);
    if (!count) {
      alert("fill the count of teammate");
      return;
    }
    if (!scannedData) {
      alert("Please scan a QR code first");
      return;
    }
    const parsedData = JSON.parse(scannedData);
    console.log(parsedData);
    try {
      console.log("aagaya");
      const response = await axios.post(`http://localhost:8000/api/${action}`, {
        parsedData,
        count,
      });
      console.log(response);
      if (response?.data?.success) {
        alert("Action completed successfully");
        setScannedData("");
        setCount(0);
        navigate("/");
      }
      alert(data.message || "Action completed");
    } catch (error) {
      alert("Error processing request");
      console.log(error);
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
              <button style={styles.button} onClick={() => sendData("in")}>
                Check IN
              </button>
              <button style={styles.button} onClick={() => sendData("out")}>
                Check OUT
              </button>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  margin: "10px",
                  padding: "10px",
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
                  width: "fit-content",
                }}
              >
                <label
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "#333",
                  }}
                >
                  Enter the count of teammate
                </label>
                <br />
                <input
                  type="number"
                  style={{
                    marginTop: "5px",
                    padding: "8px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    outline: "none",
                    fontSize: "14px",
                  }}
                  value={count}
                  onChange={(e) => {
                    setCount(e.target.value);
                  }}
                  placeholder="Enter a number"
                />
              </div>
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
