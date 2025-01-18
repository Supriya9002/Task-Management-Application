import jwt from "jsonwebtoken";
import AdminModel from "../user/user.schema.js";

const jwtAuth = (req, res, next) => {
  const token = req.headers["authorization"];
  // console.log("In JwtAuth token", token);
  if (!token) {
    return res.status(401).send("Unauthorized: No token provided");
  }
  try {
    // console.log("JWT_SECRET", process.env.JWT_SECRET);
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(payload);
    // Check if the user associated with the token exists and if the token is still valid
    const admin = AdminModel.findOne({ _id: payload.userID, sessions: token });
    if (!admin) {
      return res
        .status(401)
        .send("Unauthorized: Invalid token or user does not exist");
    }
    req.userID = payload.userID;
    // console.log("payload",payload,  "Verified payload, req.userID:", req.userID);
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).send("Unauthorized: Invalid token");
  }
};

export default jwtAuth;
