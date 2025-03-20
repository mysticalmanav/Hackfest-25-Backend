// src/api/teamApi.js
export const fetchTeams = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/teams');
      if (!response.ok) {
        throw new Error('Failed to fetch teams');
      }
      const data = await response.json();
      return data.data; // Return the list of teams
    } catch (error) {
      console.error('Error fetching teams:', error);
      return [];
    }
  };

  export const updateTeamStatus = async (id, status) => {
    try {
      const response = await fetch(`http://localhost:5000/api/teams/${id}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to update team status');
      }
  
      const data = await response.json();
      // console.log(data.data);
      return data.data; // Return the updated team
    } catch (error) {
      console.error('Error updating team status:', error);
      return null;
    }
  };