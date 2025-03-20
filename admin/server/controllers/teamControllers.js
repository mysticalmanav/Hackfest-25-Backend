// controllers/teamController.js
import Team from '../models/TeamModel.js'; // Import the Team model

// Fetch all teams
export const getAllTeams = async (req, res) => {
  try {
    // Fetch all teams from the database
    const teams = await Team.find({});
    res.status(200).json({ success: true, data: teams });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch teams', error: error.message });
  }
};

// Update team status
export const updateTeamStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    // Find the team by ID and update its status
    const updatedTeam = await Team.findByIdAndUpdate(
      id,
      { status },
      { new: true } // Return the updated team
    );

    if (!updatedTeam) {
      return res.status(404).json({ success: false, message: 'Team not found' });
    }

    res.status(200).json({ success: true, data: updatedTeam });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to update team status', error: error.message });
  }
};