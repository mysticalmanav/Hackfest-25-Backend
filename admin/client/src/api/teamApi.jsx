// src/api/teamApi.js
import axios from "axios";

export const fetchTeams = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/teams`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username:localStorage.getItem("username"),password: localStorage.getItem("password") }),
    });

    
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch teams");
    }
    
    return data.data;
  } catch (error) {
    console.error("Error fetching teams:", error);
    return { error: error.message };
  }
};

export const updateTeamStatus = async (id, status, password) => {
  try {
    const response = await axios.patch(`${import.meta.env.VITE_backendUrl}/api/teams/${id}/status`, { status, username:localStorage.getItem("username") ,password: localStorage.getItem("password")});
    const data=response.data;
    if (!response.status === 200) {
      throw new Error("Failed to update team status");
    }
    return data.data; // Return the updated team
  } catch (error) {
    console.error("Error updating team status:", error);
    return null;
  }
};
