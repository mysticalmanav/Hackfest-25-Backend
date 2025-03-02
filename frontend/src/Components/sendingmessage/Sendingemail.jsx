import React, { useState } from "react";

/*
  Example usage: 
  1) /api/users → GET all users (returns an array of user objects, each with "email" or relevant fields). 
  2) /api/hackfest/send → POST, expects { subject, message, emails: [arrayOfEmailAddresses] }

  Ensure you have Tailwind CSS set up, for styling to work properly.
*/

function HackfestEmailPage() {
  const [users, setUsers] = useState([]);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState("");
  const [sendError, setSendError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // 1) Fetch all users
  const handleFetchUsers = async () => {
    try {
      setLoading(true);
      setFetchError("");
      setSendError("");
      setSuccessMessage("");

      const response = await fetch("/api/users");
      if (!response.ok) {
        throw new Error("Failed to fetch users from server");
      }
      const data = await response.json();
      setUsers(data.users || []); // Adjust if your backend returns differently
    } catch (error) {
      setFetchError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // 2) Send Hackfest Emails
  const handleSendEmails = async () => {
    try {
      setLoading(true);
      setSendError("");
      setFetchError("");
      setSuccessMessage("");

      // Extract email addresses from users
      const emails = users.map((u) => u.email).filter(Boolean);

      const response = await fetch("/api/hackfest/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject,
          message,
          emails,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to send emails to users");
      }
      const data = await response.json();
      if (!data.success) {
        throw new Error(data.message || "Email sending error");
      }

      setSuccessMessage("Hackfest emails sent successfully!");
    } catch (error) {
      setSendError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Hackfest Email Sender</h1>

        <div className="mb-6">
          <button
            onClick={handleFetchUsers}
            disabled={loading}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
          >
            {loading ? "Loading..." : "Fetch All Users"}
          </button>
          {fetchError && (
            <p className="text-red-600 mt-2">{fetchError}</p>
          )}
        </div>

        {users.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-700">
              Users ({users.length})
            </h2>
            <ul className="list-disc list-inside mt-2 max-h-32 overflow-y-auto bg-gray-50 p-2 rounded">
              {users.map((user) => (
                <li key={user.email || user.userId} className="text-sm text-gray-700">
                  {user.name ? `${user.name} - ` : ""}{user.email}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mb-6">
          <label className="block mb-1 font-semibold text-gray-700">
            Email Subject
          </label>
          <Input
            placeholder="Hackfest 2023: Important Updates!"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block mb-1 font-semibold text-gray-700">
            Email Message
          </label>
          <textarea
            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            rows={6}
            placeholder="Hello Hackfest Participants..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <button
            onClick={handleSendEmails}
            disabled={loading || users.length === 0}
            className={`${
              users.length === 0 ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
            } text-white font-semibold py-2 px-4 rounded`}
          >
            {loading ? "Sending..." : "Send Hackfest Emails"}
          </button>
          {sendError && (
            <p className="text-red-600 mt-2">{sendError}</p>
          )}
          {successMessage && (
            <p className="text-green-600 mt-2">{successMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
}

function Input({ placeholder, value, onChange }) {
  return (
    <input
      type="text"
      className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default HackfestEmailPage;