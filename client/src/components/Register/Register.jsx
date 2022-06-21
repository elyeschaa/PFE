import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FaBook } from "react-icons/fa";
import { register } from "../Redux/Actions/actions";
import { useDispatch } from "react-redux";

const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [newUser, setNewUser] = useState({});
  const userRegister = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    dispatch(register(newUser));
    history.push("/login");
  };
  return (
    <div className="register">
      <h1>
        Welcome To Our <span style={{ color: "#007cb9" }}>Bienvenue</span>{" "}
      </h1>
      <h1>
        <FaBook style={{ color: "#007cb9" }} />
      </h1>
      <div className="my-input">
        <label>Nom</label>
        <input type="text" name="firstName" onChange={userRegister} />

        <label>Prénom</label>
        <input type="text" name="lastName" onChange={userRegister} />
        <label>Email</label>
        <input type="text" name="email" onChange={userRegister} />
        <label>Adresse</label>
        <input type="text" name="address" onChange={userRegister} />
        <label>numéro de téléphone</label>
        <input type="number" name="phonenumber" onChange={userRegister} />
        <label>Code Postal</label>
        <input type="number" name="zipcode" onChange={userRegister} />
        <label>Mot de passe</label>
        <input type="password" name="password" onChange={userRegister} />
      </div>
      <div className="last">
        <button style={{backgroundColor:"#007cb9"}} onClick={handleRegister}>Confirmer</button>
        <h5>Dèja membre ? </h5>

        <h5>
          <Link to="/login" style={{ color: "#8dc6ff", textDecoration: "none" }}>
            S'inscrire
          </Link>
        </h5>
      </div>
    </div>
  );
};

export default Register;
