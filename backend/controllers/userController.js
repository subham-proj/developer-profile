import axios from "axios";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

/**
 * Desc : Adding new user
 * Method : POST
 * NOTE: using Github API to fetch relevant data
 */

export const addUser = asyncHandler(async (req, res) => {
  const { github, linkedin, codechef, hackerrank, twitter, medium } = req.body;

  try {
    const { data } = await axios.get(`https://api.github.com/users/${github}`);

    const repo = await axios.get(
      `https://api.github.com/users/${github}/repos`
    );

    const repos = repo.data?.map((e) => {
      let obj = {
        name: e.name,
        html_url: e.html_url,
        description: e.description,
        updated_at: e.updated_at,
      };

      return obj;
    });

    const newUser = {
      id: data.login,
      avatar_url: data.avatar_url,
      name: data.name,
      company: data.company,
      blog: data.blog,
      location: data.location,
      email: data.email,
      bio: data.bio,
      github_id: github,
      linkedin_id: linkedin,
      codechef_id: codechef,
      hackerrank_id: hackerrank,
      twitter_id: twitter,
      medium_id: medium,
      repos,
    };

    const user = await User.create(newUser);

    if (user) {
      res.status(201).json({
        id: user.id,
      });
    } else {
      res.status(500);
      throw new Error("Oops! Something went wrong.");
    }
  } catch (error) {
    res.status(400);
    throw new Error("User not found");
  }
});

/**
 * Desc : Fetching all users
 * Method : GET
 */

export const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find({}, { id: 1, avatar_url: 1 }).sort({ _id: -1 });

  if (users) {
    res.status(200).json(users);
  } else {
    res.status(404).json({
      status: "Error",
      message: "User not found!",
    });
  }
});

/**
 * Desc : Fetching users by Id
 * Method : GET
 */

export const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findOne({ id: req.params.id });

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({
      status: "Error",
      message: "User not found!",
    });
  }
});
