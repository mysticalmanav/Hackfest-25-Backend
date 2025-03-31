import React, { useState, useEffect } from "react";
import { fetchTeams, updateTeamStatus } from "../api/teamApi";

const TeamList = () => {
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [password, setPassword] = useState("");
  const [isPasswordPromptOpen, setIsPasswordPromptOpen] = useState(
    !localStorage.getItem("password")
  );
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [actionType, setActionType] = useState(null); // 'verify' or 'unverify'
  const [teamIdToUpdate, setTeamIdToUpdate] = useState(null); // ID of the team to update
  const [teamNameToUpdate, setTeamNameToUpdate] = useState(null); // Name of the team to update

  // Fetch teams on component mount
  useEffect(() => {
    setIsPasswordPromptOpen(true);
    const handlePasswordSubmit = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/api/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ password: password }),
          }
        );
        if (response.ok) {
          localStorage.setItem("password", password);
          setIsAuthenticated(true);
          setIsPasswordPromptOpen(false);
          const data = await response.json();
          setTeams(data.data);
        } else {
          alert("Invalid password. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Error validating password. Please try again.");
      }
    };
    handlePasswordSubmit();
  }, []);

  const handlePasswordSubmit = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ password: password }),
        }
      );
      console.log(response);
      if (response.ok) {
        localStorage.setItem("password", password);
        setIsAuthenticated(true);
        setIsPasswordPromptOpen(false);
        const data = await response.json();
        setTeams(data.data);
      } else {
        alert("Invalid password. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error validating password. Please try again.");
    }
  };

  const handleVerify = async (id) => {
    const updatedTeam = await updateTeamStatus(id, "verified");
    if (updatedTeam) {
      setTeams(
        teams.map((team) =>
          team._id === id ? { ...team, status: "verified" } : team
        )
      );
    }
  };

  const handleUnverify = async (id) => {
    const updatedTeam = await updateTeamStatus(id, "pending");
    if (updatedTeam) {
      setTeams(
        teams.map((team) =>
          team._id === id ? { ...team, status: "pending" } : team
        )
      );
    }
  };

  const handleTeamClick = (team) => {
    setSelectedTeam(team);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTeam(null);
  };

  const openConfirmationModal = (type, id, name) => {
    setActionType(type);
    setTeamIdToUpdate(id);
    setTeamNameToUpdate(name);
    setIsConfirmationModalOpen(true);
  };

  const closeConfirmationModal = () => {
    setIsConfirmationModalOpen(false);
    setActionType(null);
    setTeamIdToUpdate(null);
    setTeamNameToUpdate(null);
  };

  const confirmAction = async () => {
    if (actionType === "verify") {
      await handleVerify(teamIdToUpdate);
    } else if (actionType === "unverify") {
      await handleUnverify(teamIdToUpdate);
    }
    closeConfirmationModal();
  };

  // Inline styles
  const styles = {
    container: {
      maxWidth: "800px",
      margin: "0 auto",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    },
    heading: {
      textAlign: "center",
      color: "#333",
      marginBottom: "20px",
    },
    teamList: {
      listStyleType: "none",
      padding: "0",
    },
    teamItem: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px",
      marginBottom: "10px",
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.2s, box-shadow 0.2s",
      cursor: "pointer",
    },
    teamItemHover: {
      transform: "translateY(-2px)",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
    },
    teamName: {
      fontSize: "18px",
      color: "#333",
      fontWeight: "500",
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    teamid: {
      fontSize: "18px",
      color: "#333",
      fontWeight: "500",
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    statusBadge: {
      padding: "4px 8px",
      borderRadius: "12px",
      fontSize: "12px",
      fontWeight: "600",
      textTransform: "uppercase",
    },
    statusPending: {
      backgroundColor: "#ffcc00",
      color: "#000",
    },
    statusVerified: {
      backgroundColor: "#28a745",
      color: "#fff",
    },
    buttonGroup: {
      display: "flex",
      gap: "10px",
    },
    verifyButton: {
      padding: "8px 16px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "500",
      backgroundColor: "#007bff",
      color: "white",
      transition: "background-color 0.3s, color 0.3s",
    },
    verifyButtonHover: {
      backgroundColor: "#0056b3",
    },
    verifyButtonVerified: {
      backgroundColor: "#28a745",
      cursor: "not-allowed",
    },
    unverifyButton: {
      padding: "8px 16px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "500",
      backgroundColor: "#dc3545",
      color: "white",
      transition: "background-color 0.3s, color 0.3s",
    },
    unverifyButtonDisabled: {
      backgroundColor: "#6c757d",
      cursor: "not-allowed",
    },
    unverifyButtonHover: {
      backgroundColor: "#c82333",
    },
    modalOverlay: {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: "1000",
    },
    modalContent: {
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      maxWidth: "500px",
      width: "100%",
      textAlign: "left",
    },
    modalCloseButton: {
      padding: "8px 16px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      backgroundColor: "#dc3545",
      color: "white",
      fontSize: "14px",
      fontWeight: "500",
      marginTop: "20px",
    },
    confirmationModalContent: {
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      maxWidth: "400px",
      width: "100%",
      textAlign: "center",
    },
    confirmationText: {
      fontSize: "16px",
      marginBottom: "20px",
    },
    highlightedText: {
      fontWeight: "bold",
      color: "#007bff", // Blue for "verify"
      fontSize: "18px",
      textDecoration: "underline",
    },
    highlightedTextUnverify: {
      fontWeight: "bold",
      color: "#dc3545", // Red for "unverify"
      fontSize: "18px",
      textDecoration: "underline",
    },
    confirmationButtonGroup: {
      display: "flex",
      justifyContent: "center",
      gap: "10px",
    },
    confirmationButton: {
      padding: "8px 16px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "500",
      transition: "background-color 0.3s, color 0.3s",
    },
    confirmButton: {
      backgroundColor: "#28a745",
      color: "white",
    },
    cancelButton: {
      backgroundColor: "#dc3545",
      color: "white",
    },
    idProofLink: {
      color: "#007bff",
      textDecoration: "none",
      fontWeight: "500",
    },
    idProofLinkHover: {
      textDecoration: "underline",
    },
  };

  return (
    <>
      {isPasswordPromptOpen && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <h2>Enter Admin Password</h2>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />
            <button onClick={handlePasswordSubmit} style={styles.confirmButton}>
              Submit
            </button>
          </div>
        </div>
      )}

      {isAuthenticated && (
        <div style={styles.container}>
          <h1 style={styles.heading}>Team Verification</h1>
          <ul style={styles.teamList}>
            {teams.map((team) => (
              <li
                key={team._id}
                style={{
                  ...styles.teamItem,
                  ...(selectedTeam?._id === team._id
                    ? styles.teamItemHover
                    : {}),
                }}
                onClick={() => handleTeamClick(team)}
              >
                <div style={styles.teamName}>
                  {team.teamName}
                  <span> </span>
                  {team.uniqueId}
                  <span
                    style={{
                      ...styles.statusBadge,
                      ...(team.status === "pending"
                        ? styles.statusPending
                        : styles.statusVerified),
                    }}
                  >
                    {team.status}
                  </span>
                </div>

                <div style={styles.buttonGroup}>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openConfirmationModal("verify", team._id, team.teamName);
                    }}
                    style={{
                      ...styles.verifyButton,
                      ...(team.status === "verified"
                        ? styles.verifyButtonVerified
                        : {}),
                    }}
                    disabled={team.status === "verified"}
                  >
                    {team.status === "verified" ? "Verified" : "Verify"}
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openConfirmationModal(
                        "unverify",
                        team._id,
                        team.teamName
                      );
                    }}
                    style={{
                      ...styles.unverifyButton,
                      ...(team.status === "pending"
                        ? styles.unverifyButtonDisabled
                        : {}),
                    }}
                    disabled={team.status === "pending"}
                  >
                    Unverify
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Team Details Modal */}
          {isModalOpen && selectedTeam && (
            <div style={styles.modalOverlay} onClick={closeModal}>
              <div
                style={styles.modalContent}
                onClick={(e) => e.stopPropagation()}
              >
                <h2>{selectedTeam.teamName} Details</h2>
                <p>
                  <strong>Leader:</strong> {selectedTeam.leaderName}
                </p>
                <p>
                  <strong>Email:</strong> {selectedTeam.email}
                </p>
                <p>
                  <strong>College:</strong> {selectedTeam.leaderCollege}
                </p>
                <p>
                  <strong>Year:</strong> {selectedTeam.leaderYear}
                </p>
                <p>
                  <strong>ID Proof:</strong>{" "}
                  <a
                    href={selectedTeam.idProofUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.idProofLink}
                  >
                    View ID Proof
                  </a>
                </p>
                <p>
                  <strong>Members:</strong>
                </p>
                <ul>
                  {selectedTeam.members.map((member, index) => (
                    <li key={index}>
                      <strong>{member.name}</strong> ({member.college},{" "}
                      {member.year}) - {member.email}
                    </li>
                  ))}
                </ul>
                <button style={styles.modalCloseButton} onClick={closeModal}>
                  Close
                </button>
              </div>
            </div>
          )}

          {/* Confirmation Modal */}
          {isConfirmationModalOpen && (
            <div style={styles.modalOverlay} onClick={closeConfirmationModal}>
              <div
                style={styles.confirmationModalContent}
                onClick={(e) => e.stopPropagation()}
              >
                <p style={styles.confirmationText}>
                  Are you sure you want to{" "}
                  <span
                    style={
                      actionType === "verify"
                        ? styles.highlightedText
                        : styles.highlightedTextUnverify
                    }
                  >
                    {actionType}
                  </span>{" "}
                  the team <strong>{teamNameToUpdate}</strong>?
                </p>
                <div style={styles.confirmationButtonGroup}>
                  <button
                    style={{
                      ...styles.confirmationButton,
                      ...styles.confirmButton,
                    }}
                    onClick={confirmAction}
                  >
                    Confirm
                  </button>
                  <button
                    style={{
                      ...styles.confirmationButton,
                      ...styles.cancelButton,
                    }}
                    onClick={closeConfirmationModal}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default TeamList;
