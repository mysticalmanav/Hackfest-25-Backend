import React, { useState, useEffect } from "react";
import { fetchTeams, updateTeamStatus } from "../api/teamApi";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const TeamList = () => {
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [actionType, setActionType] = useState(null); // 'verify' or 'unverify'
  const [teamIdToUpdate, setTeamIdToUpdate] = useState(null); // ID of the team to update
  const [teamNameToUpdate, setTeamNameToUpdate] = useState(null); // Name of the team to update
  const navigate = useNavigate();

  // Fetch teams on component mount
  useEffect(() => {
    const handlePasswordSubmit = async () => {
      try {
        const username = "username";
        const password = "password";
        const response = await axios.post(`${import.meta.env.VITE_backendUrl}/api/login`, { username: localStorage.getItem(username), password : localStorage.getItem(password) });
        if (response.status === 200) {
          setTeams(response.data.data);
    
        } else {
          console.log(response);
          alert("Invalid credentials. Please try again.");
          navigate("/");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Error validating credentials. Please try again.");
        navigate("/");
      }
    };
    handlePasswordSubmit();
  }, []);

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

  return (
    <div className="max-w-4xl mx-auto p-5 font-sans">
      <h1 className="text-center text-2xl font-bold text-gray-800 mb-5">
        Team Verification
      </h1>
      <ul className="list-none p-0">
        {teams.map((team) => (
          <li
            key={team._id}
            className={`flex justify-between items-center p-4 mb-3 bg-white rounded-lg shadow-md transition-transform transform ${
              selectedTeam?._id === team._id ? "hover:-translate-y-1 hover:shadow-lg" : ""
            } cursor-pointer`}
            onClick={() => handleTeamClick(team)}
          >
            <div className="flex items-center gap-3 text-lg font-medium text-gray-800">
              <span>TeamName: {team.teamName}</span>
              <span>{team.totalTime / 60000} minutes</span>
              <span>UniqueId: {team.uniqueId}</span>
              <span
                className={`px-2 py-1 rounded-full text-xs font-semibold uppercase ${
                  team.status === "pending"
                    ? "bg-yellow-400 text-black"
                    : "bg-green-600 text-white"
                }`}
              >
                {team.status}
              </span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  openConfirmationModal("verify", team._id, team.teamName);
                }}
                className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                  team.status === "verified"
                    ? "bg-green-600 text-white cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
                disabled={team.status === "verified"}
              >
                {team.status === "verified" ? "Verified" : "Verify"}
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  openConfirmationModal("unverify", team._id, team.teamName);
                }}
                className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                  team.status === "pending"
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : "bg-red-600 text-white hover:bg-red-700"
                }`}
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
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-5 rounded-lg shadow-lg max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-3">{selectedTeam.teamName} Details</h2>
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
                className="text-blue-600 underline"
              >
                View ID Proof
              </a>
            </p>
            <p>
              <strong>Members:</strong>
            </p>
            <ul className="list-disc pl-5">
              {selectedTeam.members.map((member, index) => (
                <li key={index}>
                  <strong>{member.name}</strong> ({member.college}, {member.year}) -{" "}
                  {member.email}
                </li>
              ))}
            </ul>
            <button
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {isConfirmationModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeConfirmationModal}
        >
          <div
            className="bg-white p-5 rounded-lg shadow-lg max-w-sm w-full text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-lg mb-4">
              Are you sure you want to{" "}
              <span
                className={`font-bold underline ${
                  actionType === "verify" ? "text-blue-600" : "text-red-600"
                }`}
              >
                {actionType}
              </span>{" "}
              the team <strong>{teamNameToUpdate}</strong>?
            </p>
            <div className="flex justify-center gap-3">
              <button
                className="px-4 py-2 bg-green-600 text-white rounded-md"
                onClick={confirmAction}
              >
                Confirm
              </button>
              <button
                className="px-4 py-2 bg-red-600 text-white rounded-md"
                onClick={closeConfirmationModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamList;
