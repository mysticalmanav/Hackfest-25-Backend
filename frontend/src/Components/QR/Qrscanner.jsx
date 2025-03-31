import React, { useState, useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

const QrScanner = () => {
  const [scannedData, setScannedData] = useState("");
  const [scanner, setScanner] = useState(null);

  useEffect(() => {
    const newScanner = new Html5QrcodeScanner("reader", {
      fps: 10,
      qrbox: { width: 250, height: 250 },
      aspectRatio: 1.0,
    });

    newScanner.render(
      (decodedText) => {
        setScannedData(decodedText);
        newScanner.clear();
      },
      (errorMessage) => console.log(errorMessage)
    );

    setScanner(newScanner);

    return () => {
      newScanner.clear();
    };
  }, []);

  const sendData = async (action) => {
    if (!scannedData) {
      alert("No QR code scanned!");
      return;
    }

    const [teamName, password] = scannedData.split(":");

    try {
      const response = await fetch("https://your-backend.com/api/scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          team_name: teamName,
          password,
          action,
          timestamp: new Date().toISOString(),
        }),
      });

      const data = await response.json();
      alert(`Success: ${data.message}`);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-orange-100 bg-zinc-900 font-mono pressfont p-4">
      <div className="w-full max-w-md bg-zinc-800 rounded-xl shadow-2xl overflow-hidden">
        <div className="p-6 text-center">
          <h2 className="text-3xl font-bold mb-2 text-orange-100">QR Scanner</h2>
          <p className="text-orange-100/80 mb-6">Scan team QR code to check in/out</p>
          
          <div 
            id="reader"
            className="w-full aspect-square border-2 border-orange-100/30 rounded-lg overflow-hidden"
          ></div>
          
          {scannedData && (
            <div className="mt-6 p-4 bg-zinc-700/50 rounded-lg backdrop-blur-sm border border-orange-100/10">
              <p className="text-lg font-medium text-orange-100 mb-4">Scanned: 
                <span className="block text-orange-100/70 text-sm mt-1 font-normal truncate">{scannedData}</span>
              </p>
              <div className="flex justify-center gap-4">
                <button
                  className="px-6 py-3 bg-orange-100 text-zinc-900 font-bold rounded-lg hover:bg-orange-200 transition flex-1 shadow-md hover:shadow-orange-100/20"
                  onClick={() => sendData("IN")}
                >
                  Check IN
                </button>
                <button
                  className="px-6 py-3 bg-orange-100 text-zinc-900 font-bold rounded-lg hover:bg-orange-200 transition flex-1 shadow-md hover:shadow-orange-100/20"
                  onClick={() => sendData("OUT")}
                >
                  Check OUT
                </button>
              </div>
            </div>
          )}
        </div>
        
        {!scannedData && (
          <div className="px-6 pb-6 text-center">
            <p className="text-orange-100/50 text-sm">Point your camera at a QR code to scan</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QrScanner;