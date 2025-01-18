import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minLength: [3, "The Name should be 3 characture length"],
    },
    mobaile:{
        type: Number,
        required: true,
        validate: {
            validator: function (v) {
                return v.toString().length === 10;
            },
            message: "Mobile number must be exactly 10 digits",
        },
    },
    password:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now,
    },
    sessions:[{
        type:String
    }]
})

//model
const UserModel = mongoose.model("User", userSchema);
export default UserModel;