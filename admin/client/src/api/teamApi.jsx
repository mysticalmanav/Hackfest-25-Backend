// src/api/teamApi.js
export const fetchTeams = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/teams`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password: localStorage.getItem("password") }),
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
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/teams/${id}/status`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status,  password: localStorage.getItem("password") }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to update team status");
    }

    const data = await response.json();
    // console.log(data.data);
    return data.data; // Return the updated team
  } catch (error) {
    console.error("Error updating team status:", error);
    return null;
  }
};
