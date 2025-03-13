import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, User, School, Calendar, Trophy, LogOut, Mail, X } from 'lucide-react';
import toast from 'react-hot-toast';

const Dashboard = () => {
  const navigate = useNavigate();
  const [teamData, setTeamData] = useState(null);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  useEffect(() => {
    const storedTeamData = localStorage.getItem('teamData');
    
    if (!storedTeamData) {
      toast.error('Unauthorized access!');
      setTimeout(() => navigate('/login'), 2000);
      return;
    }

    try {
      const parsedTeamData = JSON.parse(storedTeamData);
      setTeamData(parsedTeamData);
    } catch (error) {
      console.error('Error parsing team data:', error);
      localStorage.removeItem('teamData');
      toast.error('Session expired. Please login again.');
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('teamData');
    navigate('/login');
  };

  if (!teamData) {
    return (
      <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
        <div className="text-orange-100 text-xl">Loading team details...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-gray-100 relative">
      {/* Blur overlay when logout confirmation is shown */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
      )}

      {/* Logout confirmation popup */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-zinc-800 rounded-xl shadow-2xl p-6 max-w-md w-full mx-4 border border-zinc-700">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-orange-100">Confirm Logout</h3>
              <button
                onClick={() => setShowLogoutConfirm(false)}
                className="text-gray-400 hover:text-gray-300 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-gray-300 mb-6">Are you sure you want to logout? You'll need to login again to access your dashboard.</p>
            <div className="flex space-x-4">
              <button
                onClick={handleLogout}
                className="flex-1 bg-orange-100 text-black px-4 py-2 rounded-lg font-medium hover:bg-orange-200 transition-colors"
              >
                Yes, Logout
              </button>
              <button
                onClick={() => setShowLogoutConfirm(false)}
                className="flex-1 bg-zinc-700 px-4 py-2 rounded-lg font-medium hover:bg-zinc-600 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <header className="bg-zinc-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-orange-100">Team Dashboard</h1>
            <button
              onClick={() => setShowLogoutConfirm(true)}
              className="flex items-center px-4 py-2 text-sm font-medium text-black bg-orange-100 rounded-lg hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-100 transition-colors"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-zinc-800 rounded-xl shadow-xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-center space-x-4">
              <Trophy className="w-8 h-8 text-orange-100" />
              <div>
                <p className="text-sm text-gray-400">Team Name</p>
                <p className="text-lg font-semibold">{teamData.teamName}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <User className="w-8 h-8 text-orange-100" />
              <div>
                <p className="text-sm text-gray-400">Registration Status</p>
                <p className={`text-lg font-semibold
                  ${teamData.status === 'pending' ? 'text-red-500' : 'text-green-400'}
                  `}>{teamData.status}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Users className="w-8 h-8 text-orange-100" />
              <div>
                <p className="text-sm text-gray-400">Team Size</p>
                <p className="text-lg font-semibold">{teamData.memberCount} {teamData.memberCount === 1 ? "Member" : "Members"}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-zinc-800 rounded-xl shadow-xl p-6">
            <h2 className="text-xl font-semibold mb-4 text-orange-100">Leader Details</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <User className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-400">Leader Name</p>
                  <p>{teamData.leaderName}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <School className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-400">College</p>
                  <p>{teamData.leaderCollege}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Calendar className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-400">Year</p>
                  <p>{teamData.leaderYear} Year</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p>{teamData.email}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-800 rounded-xl shadow-xl p-6">
            <h2 className="text-xl font-semibold mb-4 text-orange-100">Team Members</h2>
            {teamData.members.length === 0 && (
              <div className="text-gray-400">No team members.</div>
            )}

            {teamData.members.length > 0 && (
            <div className="space-y-4">
              {teamData.members.map((member, index) => (
                <div key={index} className="p-4 bg-zinc-700 rounded-lg">
                  <p className="font-medium">{member.name}</p>
                  <div className="mt-2 text-sm text-gray-400">
                    <p>{member.college} • {member.year} Year</p>
                    <p>{member.email}</p>
                  </div>
                </div>
              ))}
            </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;