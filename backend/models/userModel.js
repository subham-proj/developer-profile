import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    avatar_url: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    company: {
      type: String,
    },
    blog: {
      type: String,
    },
    location: {
      type: String,
    },
    email: {
      type: String,
    },
    bio: {
      type: String,
    },
    github_id: {
      type: String,
      required: true,
    },
    linkedin_id: {
      type: String,
    },
    codechef_id: {
      type: String,
    },
    hackerrank_id: {
      type: String,
    },
    twitter_id: {
      type: String,
    },
    medium_id: {
      type: String,
    },
    repos: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
