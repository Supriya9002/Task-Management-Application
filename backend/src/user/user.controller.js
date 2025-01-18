import UserModel from "./user.schema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default class UserController {
  //Register
  async register(req, res) {
    try {
      // console.log("Register Controller")
      const { name, mobaile, password } = req.body;
      // console.log(name, mobaile, password);
      const exitMobaile = await UserModel.findOne({ mobaile });
      if (exitMobaile) {
        return res.status(400).json({message: "User already exists"});
      }
      // convert password in bcrypt password
      const hasPassword = await bcrypt.hash(password, 12);
      console.log("password", password);
      const user = new UserModel({ name, mobaile, password: hasPassword });
      await user.save();
      res.status(201).json({message: "User Registred Succesfull"});
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Failed to register", error: err });
    }
  }

  //Login
  async login(req, res) {
    try {
      console.log(req.body);
      const { mobaile, password } = req.body;
      const admin = await UserModel.findOne({ mobaile });
      if (!admin) {
        return res.status(400).json({message: "Mobaile Number Does not exists"});
      }
      const adminPassword = await bcrypt.compare(password, admin.password);
      console.log("userPassword", adminPassword);
      if (!adminPassword) {
        return res.status(400).json({message: "Password Not Correct"});
      }
      const token = jwt.sign(
        {
          userID: admin._id,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "1d",
        }
      );
      console.log("token", token);
      admin.sessions.push(token);
      await admin.save();
      res.status(201).json(token);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Failed to login", error: err });
    }
  }
}
