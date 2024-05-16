import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        minlength: [3,"First Name must contain at least 3 charcters!"]
    },
    lastName:{
        type: String,
        required: true,
        minlength: [3,"Last Name must contain at least 3 charcters!"]
    },
    email:{
        type: String,
        required: true,
        validate: [validator.isEmail, "Please provide a valid Email!"]
    },
    phone:{
        type: String,
        required: true,
        minLength: [10, "Phone Number must be of 10 digits only!"],
        maxLength: [10, "Phone Number must be of 10 digits only!"],
    },
    message:{
        type: String,
        required: true,
        minLength: [10, "Message must contain atleast 10 Characters!"],
    },
})

export const Message=mongoose.model("Message",messageSchema)