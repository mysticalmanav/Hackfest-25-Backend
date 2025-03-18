import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  User,
  School,
  FileText,
  Calendar,
  ChevronDown,
  CheckCircle,
  Upload,
  Loader,
  Mail,
  ScreenShare,
} from "lucide-react";
import Navbar from "../Navbar/Navbar.jsx";
import { toast, Toaster } from "react-hot-toast";

const TeamRegistrationForm = () => {
  // Form state
  const [currentStep, setCurrentStep] = useState(1);
  const [progress, setProgress] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registrationComplete, setRegistrationComplete] = useState(false);

  // Team info state
  const [referral, setRefera] = useState("");
  const [teamData, setTeamData] = useState({
    teamName: "",
    leaderName: "",
    email: "",
    leaderCollege: "",
    leaderYear: "",
    idProof: null,
    memberCount: 3,
    referral: { referral },
  });

  // Team members state
  const [teamMembers, setTeamMembers] = useState([]);

  // Update progress bar
  useEffect(() => {
    const calculatedProgress =
      currentStep === 1
        ? teamData.teamName &&
          teamData.email &&
          teamData.leaderName &&
          teamData.leaderCollege &&
          teamData.leaderYear &&
          teamData.idProof
          ? 25
          : 0
        : 25 +
          (teamMembers.filter(
            (member) =>
              member.name && member.college && member.year && member.email
          ).length /
            teamData.memberCount) *
            75;

    setProgress(calculatedProgress);

    if (registrationComplete) {
      setProgress(100);
    }
  }, [currentStep, teamData, teamMembers]);

  // Initialize team members array when member count changes
  useEffect(() => {
    if (teamData.memberCount > 0) {
      setTeamMembers((prev) => {
        const newMembers = [...prev];
        // Adjust array length to match memberCount - 1 (excluding leader)
        while (newMembers.length < teamData.memberCount - 1) {
          newMembers.push({ name: "", college: "", year: "", email: "" });
        }
        return newMembers.slice(0, teamData.memberCount - 1);
      });
    }
  }, [teamData.memberCount]);

  // Handle input changes for team data
  const handleTeamDataChange = (e) => {
    const { name, value } = e.target;
    setTeamData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file upload for ID proof
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setTeamData((prev) => ({ ...prev, idProof: file }));
    }
  };

  // Handle input changes for team members
  const handleMemberChange = (index, field, value) => {
    const updatedMembers = [...teamMembers];
    updatedMembers[index] = { ...updatedMembers[index], [field]: value };
    setTeamMembers(updatedMembers);
  };

  // Move to member details after team info is submitted
  const handleTeamInfoSubmit = (e) => {
    e.preventDefault();
    setCurrentStep(2);
  };

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "hackfest2k25"); // Replace with your actual preset

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/dwqgih2ka/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) throw new Error("Failed to upload");

      const data = await response.json();
      return data.secure_url; // This is the uploaded file's URL
    } catch (error) {
      console.log(error);
      console.error("Cloudinary Upload Error:", error);
      throw error;
    }
  };

  // Submit final form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log(teamData);
    console.log(referral);
    try {
      toast.success("Submitting form. Please wait...");
      // Prepare request data
      const requestData = {
        teamName: teamData.teamName,
        leaderName: teamData.leaderName,
        email: teamData.email,
        leaderCollege: teamData.leaderCollege,
        leaderYear: teamData.leaderYear,
        memberCount: teamData.memberCount,
        members: teamMembers,
        referral: referral,
      };

      if (!teamData.idProof) {
        toast.error("Please upload ID proof");
        throw new Error("Please upload ID proof");
      }

      // Upload ID proof to Cloudinary
      const idProofUrl = await uploadToCloudinary(teamData.idProof);
      requestData.idProof = idProofUrl;

      console.log("Request Data:", requestData);

      // Send requestData to backend
      const response = await fetch(
        `${import.meta.env.VITE_backendUrl}/api/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );
      console.log(response);
      let data;

      try {
        data = await response.json();
      } catch (jsonError) {
        console.log(jsonError);
        toast.error("Unexpected server response. Please try again.");
        throw new Error("Unexpected server response. Please try again.");
      }
      if (!response.ok) {
        console.log(response);
        if (
          response.status === 400 &&
          data.message === "Team already registered with this email!"
        ) {
          toast.error(
            "This email is already registered. Try using a different email."
          );
        } else {
          toast.error(
            "This email is already registered. Try using a different email."
          );
        }
        throw new Error(data.message || "Something went wrong");
      }

      console.log("Team registered successfully:", data);
      setProgress(100);
      setRegistrationComplete(true);
    } catch (error) {
      console.log(error);
      console.error("Error submitting form:", error.message);
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };

  const memberCardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-cream-100">
      <Navbar />
      <div className="h-10 mb-5"></div>
      <Toaster />
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Progress Bar */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-medium text-gray-200">
              Registration Progress
            </h2>
            <span className="text-sm text-gray-400">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <div className="w-full bg-zinc-800 rounded-full h-2.5">
            <motion.div
              className="h-2.5 rounded-full bg-gradient-to-r from-orange-200 to-orange-800"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Registration Complete Screen */}
        {registrationComplete ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center p-8 bg-zinc-800/50 rounded-xl border border-zinc-700 shadow-lg"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle size={40} className="text-green-500" />
            </motion.div>
            <h2 className="text-2xl font-bold text-gray-100 mb-2">
              Registration Complete!
            </h2>
            <p className="text-gray-400 mb-6">
              Your team has been successfully registered for HackFest 2025. The
              team leader will receive an email with further instructions. Thank
              you for registering!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-orange-100 rounded-lg hover:bg-red-100 text-black transition-colors"
              onClick={() => (window.location.href = "/")}
            >
              Return to Home
            </motion.button>
          </motion.div>
        ) : (
          <AnimatePresence mode="wait">
            {currentStep === 1 ? (
              /* Team Information Form */
              <motion.form
                key="team-info"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onSubmit={handleTeamInfoSubmit}
                className="bg-zinc-800/50 rounded-xl border border-zinc-700 p-6 shadow-lg backdrop-blur-sm"
              >
                <motion.div
                  variants={itemVariants}
                  className="mb-6 text-center"
                >
                  <h2 className="text-2xl font-bold text-gray-100 mb-2">
                    Team Registration
                  </h2>
                  <p className="text-gray-400">
                    Register your team for HackFest 2025 by providing the
                    details below
                  </p>
                </motion.div>

                <motion.div variants={itemVariants} className="mb-6">
                  <label className="block text-gray-300 mb-2 font-medium">
                    <div className="flex items-center gap-1 mb-1">
                      <Users size={18} />
                      <span className="ml-1">Team Name</span>
                      <span className="text-red-600">*</span>
                    </div>
                    <input
                      type="text"
                      name="teamName"
                      value={teamData.teamName}
                      onChange={handleTeamDataChange}
                      required
                      className="w-full px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-lg focus:outline-none focus:border-orange-100 text-gray-300"
                      placeholder="Enter your team name"
                    />
                  </label>
                </motion.div>

                <motion.div variants={itemVariants} className="mb-6">
                  <label className="block text-gray-300 mb-2 font-medium">
                    <div className="flex items-center gap-1 mb-1">
                      <User size={18} />
                      <span className="ml-1">Team Leader Name</span>
                      <span className="text-red-600">*</span>
                    </div>
                    <input
                      type="text"
                      name="leaderName"
                      value={teamData.leaderName}
                      onChange={handleTeamDataChange}
                      required
                      className="w-full px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-lg focus:outline-none focus:border-orange-100 text-gray-300"
                      placeholder="Enter team leader's full name"
                    />
                  </label>
                </motion.div>
                <motion.div variants={itemVariants} className="mb-6">
                  <label className="block text-gray-300 mb-2 font-medium">
                    <div className="flex items-center gap-1 mb-1">
                      <Mail size={18} />
                      <span className="ml-1">Team Leader Email ID</span>
                      <span className="text-red-600">*</span>
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={teamData.email}
                      onChange={handleTeamDataChange}
                      required
                      className="w-full px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-lg focus:outline-none focus:border-orange-100 text-gray-300"
                      placeholder="Enter team leader's email id"
                    />
                  </label>
                </motion.div>

                <motion.div variants={itemVariants} className="mb-6">
                  <label className="block text-gray-300 mb-2 font-medium">
                    <div className="flex items-center gap-1 mb-1">
                      <School size={18} />
                      <span className="ml-1">Team Leader's College</span>
                      <span className="text-red-600">*</span>
                    </div>
                    <input
                      type="text"
                      name="leaderCollege"
                      value={teamData.leaderCollege}
                      onChange={handleTeamDataChange}
                      required
                      className="w-full px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-lg focus:outline-none focus:border-orange-100 text-gray-300"
                      placeholder="Enter college/university name"
                    />
                  </label>
                </motion.div>

                <motion.div variants={itemVariants} className="mb-6">
                  <label className="block text-gray-300 mb-2 font-medium">
                    <div className="flex items-center gap-1 mb-1">
                      <Calendar size={18} />
                      <span className="ml-1">Year of College</span>
                      <span className="text-red-600">*</span>
                    </div>
                    <select
                      name="leaderYear"
                      value={teamData.leaderYear}
                      onChange={handleTeamDataChange}
                      required
                      className="w-full px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-lg focus:outline-none focus:border-orange-100 text-gray-300 appearance-none"
                    >
                      <option value="">Select Year</option>
                      <option value="1">1st Year</option>
                      <option value="2">2nd Year</option>
                      <option value="3">3rd Year</option>
                      <option value="4">4th Year</option>
                      <option value="5">5th Year</option>
                    </select>
                  </label>
                </motion.div>

                <motion.div variants={itemVariants} className="mb-6">
                  <label className="block text-gray-300 mb-2 font-medium">
                    <div className="flex items-center gap-1 mb-1">
                      <FileText size={18} />
                      <span className="ml-1">College ID Proof</span>
                      <span className="text-red-600">*</span>
                    </div>
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer border-zinc-600 bg-zinc-900 hover:bg-zinc-800">
                        {teamData.idProof ? (
                          <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center">
                            <CheckCircle className="w-8 h-8 mb-1 text-green-500" />
                            <p className="text-sm text-gray-400">
                              {teamData.idProof.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              Click to change file
                            </p>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Upload className="w-8 h-8 mb-4 text-gray-500" />
                            <p className="mb-2 text-sm text-gray-400">
                              <span className="font-semibold">
                                Click to upload
                              </span>{" "}
                              or drag and drop
                            </p>
                            <p className="text-xs text-gray-500">
                              PNG, JPG or PDF (MAX. 2MB)
                            </p>
                          </div>
                        )}
                        <input
                          type="file"
                          className="hidden"
                          accept="image/png, image/jpeg, application/pdf"
                          onChange={handleFileUpload}
                          required
                        />
                      </label>
                    </div>
                  </label>
                </motion.div>

                <motion.div variants={itemVariants} className="mb-6">
                  <label className="block text-gray-300 mb-2 font-medium">
                    <div className="flex items-center gap-1 mb-1">
                      <Users size={18} />
                      <span className="ml-1">
                        Number of Team Members (including leader)
                      </span>
                      <span className="text-red-600">*</span>
                    </div>
                    <select
                      name="memberCount"
                      value={teamData.memberCount}
                      onChange={handleTeamDataChange}
                      required
                      className="w-full px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-lg focus:outline-none focus:border-orange-100 text-gray-300 appearance-none"
                    >
                      <option value="1">1 Member</option>
                      <option value="2">2 Members</option>
                      <option value="3">3 Members</option>
                      <option value="4">4 Members</option>
                      <option value="5">5 Members</option>
                    </select>
                  </label>
                </motion.div>

                <motion.div variants={itemVariants} className="mb-6">
                  <label className="block text-gray-300 mb-2 font-medium">
                    <div className="flex items-center gap-1 mb-1">
                      <ScreenShare size={18} />
                      <span className="ml-1">
                        Referral Id (phone number of campus ambassador)
                      </span>
                    </div>
                    <input
                      type="text"
                      maxLength="10"
                      pattern="[0-9]*"
                      inputMode="numeric"
                      className="w-full px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-lg focus:outline-none focus:border-orange-100 text-gray-300 appearance-none"
                      onChange={(e) => {
                        setRefera(e.target.value);
                        e.target.value = e.target.value
                          .replace(/\D/g, "")
                          .slice(0, 10);
                      }}
                      value={referral}
                    />
                  </label>
                </motion.div>
                <motion.div variants={itemVariants} className="mt-8">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full px-6 py-3 bg-orange-100 rounded-lg hover:bg-red-100 text-black transition-colors font-medium flex items-center justify-center gap-2"
                  >
                    <span>Continue to Team Members</span>
                    <ChevronDown size={18} />
                  </motion.button>
                </motion.div>
              </motion.form>
            ) : (
              /* Team Members Form */
              <motion.form
                key="team-members"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onSubmit={handleSubmit}
                className="bg-zinc-800/50 rounded-xl border border-zinc-700 p-6 shadow-lg backdrop-blur-sm"
              >
                <motion.div
                  variants={itemVariants}
                  className="mb-6 text-center"
                >
                  <h2 className="text-2xl font-bold text-gray-100 mb-2">
                    {teamData.memberCount === "1"
                      ? "Confirm Registration"
                      : "Team Member Details"}
                  </h2>
                  <p className="text-gray-400">
                    {teamData.memberCount === "1"
                      ? "Click on complete registration to continue"
                      : "Please provide information about each team member"}
                  </p>
                </motion.div>

                <div className="space-y-6 mb-8">
                  {teamMembers.map((member, index) => (
                    <motion.div
                      key={index}
                      variants={memberCardVariants}
                      className="p-5 bg-zinc-900/50 rounded-lg border border-zinc-700"
                    >
                      <h3 className="text-lg font-medium text-gray-200 mb-4 flex items-center gap-2">
                        <User size={18} />
                        <span>Team Member {index + 2}</span>
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-300 mb-2 text-sm font-medium">
                            Name
                            <input
                              type="text"
                              value={member.name}
                              onChange={(e) =>
                                handleMemberChange(
                                  index,
                                  "name",
                                  e.target.value
                                )
                              }
                              required
                              className="w-full px-4 py-2 mt-1 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-orange-100 text-gray-300"
                              placeholder="Full name"
                            />
                          </label>
                        </div>
                        <div>
                          <label className="block text-gray-300 mb-2 text-sm font-medium">
                            Email
                            <input
                              type="email"
                              value={member.email}
                              onChange={(e) =>
                                handleMemberChange(
                                  index,
                                  "email",
                                  e.target.value
                                )
                              }
                              required
                              className="w-full px-4 py-2 mt-1 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-orange-100 text-gray-300"
                              placeholder="Email ID of member"
                            />
                          </label>
                        </div>

                        <div>
                          <label className="block text-gray-300 mb-2 text-sm font-medium">
                            College/University
                            <input
                              type="text"
                              value={member.college}
                              onChange={(e) =>
                                handleMemberChange(
                                  index,
                                  "college",
                                  e.target.value
                                )
                              }
                              required
                              className="w-full px-4 py-2 mt-1 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-orange-100 text-gray-300"
                              placeholder="College name"
                            />
                          </label>
                        </div>

                        <div className="md:col-span-2">
                          <label className="block text-gray-300 mb-2 text-sm font-medium">
                            Year of College
                            <select
                              value={member.year}
                              onChange={(e) =>
                                handleMemberChange(
                                  index,
                                  "year",
                                  e.target.value
                                )
                              }
                              required
                              className="w-full px-4 py-2 mt-1 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-orange-100 text-gray-300 appearance-none"
                            >
                              <option value="">Select Year</option>
                              <option value="1">1st Year</option>
                              <option value="2">2nd Year</option>
                              <option value="3">3rd Year</option>
                              <option value="4">4th Year</option>
                              <option value="5">5th Year</option>
                            </select>
                          </label>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="px-6 py-3 bg-zinc-700 rounded-lg hover:bg-zinc-600 text-white transition-colors font-medium md:w-1/3"
                  >
                    Back
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 bg-orange-100 rounded-lg hover:bg-red-100 text-black transition-colors font-medium flex items-center justify-center gap-2 md:w-2/3"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader size={18} className="animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <span>Complete Registration</span>
                    )}
                  </motion.button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default TeamRegistrationForm;
