import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Profile.css";

const Profile = ({ profile, setProfile }) => {
  console.log(profile);

  const handleProfile = (e) => {
    console.log(e.target.value);
    setProfile({ ...profile, [e.target.name]: e.target.value });
    console.log(profile);
  };

  const editProfile = () => {
    axios
      .put(`/api/user/editProfile/${profile._id}`, { ...profile })
      .then((res) => {
        toast.success("Profile Edited");
      })
      .catch((err) => {
        toast.error(err.message);
        console.error(err);
      });
  };

  return (
    <div id="profile">
      <div class="container">
        <h1 class="title">Edit Profile</h1>

        <div class="grid">
          <div class="form-group a">
            <label for="name">FirstName</label>
            <input
              id="name"
              type="text"
              name="firstName"
              value={profile.firstName}
              onChange={(e) => handleProfile(e)}
            />
          </div>

          <div class="form-group b">
            <label for="first-name">LastName</label>
            <input
              id="first-name"
              type="text"
              name="lastName"
              value={profile.lastName}
              onChange={(e) => handleProfile(e)}
            />
          </div>

          <div class="form-group email-group">
            <label for="email">Email</label>
            <input
              id="email"
              type="text"
              name="email"
              value={profile.email}
              onChange={(e) => handleProfile(e)}
            />
          </div>

          <div class="form-group phone-group">
            <label for="phone">Phonenumber</label>
            <input
              id="phone"
              type="text"
              name="phonenumber"
              value={profile.phonenumber}
              onChange={(e) => handleProfile(e)}
            />
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              onChange={(e) => handleProfile(e)}
            />
          </div>

          <div class="form-group">
            <label for="address">Address</label>
            <input
              id="address"
              type="text"
              name="address"
              value={profile.address}
              onChange={(e) => handleProfile(e)}
            />
          </div>

          <div class="form-group">
            <label for="city">Zipcode</label>
            <input
              id="city"
              type="text"
              name="zipcode"
              value={profile.zipcode}
              onChange={(e) => handleProfile(e)}
            />
          </div>
        </div>

        <div class="button-container">
          <button class="button" onClick={editProfile}>
            Save informations
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Profile;
