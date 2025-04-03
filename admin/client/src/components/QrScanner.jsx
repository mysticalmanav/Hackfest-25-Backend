import React, { useState, useEffect, use } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const QrScanner = () => {
  const [scannedData, setScannedData] = useState("");
  const [scanner, setScanner] = useState(null);
  const [count, setCount] = useState(0);
  const [reset, setReset] = useState(false);
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

    const newScanner = new Html5QrcodeScanner("reader", config, false);

    newScanner.render(
      (decodedText) => {
        setScannedData(decodedText);
        newScanner.clear();
      }
    );

    setScanner(newScanner);

    return () => {
      newScanner.clear().catch((error) => {
        console.error("Failed to clear scanner on unmount", error);
      });
    };
  }, [reset]);

  const sendData = async (action) => {

    if (!count) {
      alert("Please enter the count of teammates");
      return;
    }
    if (!scannedData) {
      alert("Please scan a QR code first");
      return;
    }
    const parsedData = JSON.parse(scannedData);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/${action}`,
        {
          username: localStorage.getItem("username"),
          password: localStorage.getItem("password"),
          parsedData,
          count,
        }
      );
      if (response?.data?.success) {
        alert("Action completed successfully");
        setScannedData("");
        setCount(0);
      } else {
        alert(response.data.message || "Action completed");
      }
    } catch (error) {
      alert("Error processing request");
      console.error(error);
    }
    finally{
        setReset(!reset)
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">QR Scanner</h2>
        <p className="text-sm text-gray-600 mb-6">Scan team QR code</p>

        <div id="reader" className="w-64 h-64 mx-auto border border-gray-300 rounded-lg mb-6"></div>

        {scannedData ? (
          <div className="mt-4">
            <p className="text-gray-700 mb-4">Scanned: {scannedData}</p>
            <div className="flex gap-4 justify-center mb-4">
              <button
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
                onClick={() => sendData("in")}
              >
                Check IN
              </button>
              <button
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
                onClick={() => sendData("out")}
              >
                Check OUT
              </button>
              <button
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
                onClick={() => sendData("opening")}
              >
                Opening Ceremony
              </button>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
              <label className="block text-gray-700 font-medium mb-2">
                Enter the count of teammates
              </label>
              <input
                type="number"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={count}
                onChange={(e) => setCount(e.target.value)}
                placeholder="Enter a number"
              />
            </div>
          </div>
        ) : (
          <p className="text-gray-500 text-sm">Point the camera at a QR code</p>
        )}
      </div>
    </div>
  );
};

export default QrScanner;
