import mongoose from 'mongoose';

const MemberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  college: { type: String, required: true },
  year: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

const TeamSchema = new mongoose.Schema({
  teamName: { type: String, required: true },
  leaderName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  leaderCollege: { type: String, required: true },
  leaderYear: { type: String, required: true },
  memberCount: { type: Number, required: true },
  members: { type: [MemberSchema], required: true },
  idProofUrl: { type: String, required: true },
  uniqueId: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true });

const Team = mongoose.model('Team', TeamSchema);
export default Team;
