const TeamSchema = new mongoose.Schema(
  {
    teamName: { type: String, required: true },
    leaderName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    leaderCollege: { type: String, required: true },
    leaderYear: { type: String, required: true },
    memberCount: { type: Number, required: true },
    members: { type: [MemberSchema] },
    idProofUrl: { type: String, required: true },
    uniqueId: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    status: { type: String, required: true, default: "pending" },
    referral: { type: String, default: "" },
    outTime: { 
      type: {
        date: { type: String, default: null },
        count: { type: Number, default: 0 }
      },
      default: { date: null, count: 0 } // Default object with null values
    },

    totalTime:{type: Number, default: 0},
  },
  { timestamps: true }
);