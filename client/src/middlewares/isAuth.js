// import jsonwebtoken from "jsonwebtoken";

const isAuth = (req, res, next) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return false;
  } else {
    return true;
  }
};

export default isAuth;
