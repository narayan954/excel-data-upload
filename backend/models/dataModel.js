import mongoose from "mongoose";

const reqString = {
  type: String,
  required: true,
  unique: true,
};

const reqNumber = {
  type: Number,
  required: true,
};

var dataSchema = mongoose.Schema({
  "Name of the Candidate": reqString,
  Email: reqString,
  "Mobile No.": Number,
  "Date of Birth": Number,
  "Work Experience": String,
  "Resume Title": String,
  "Current Location": String,
  "Postal Address": String,
  "Current Employer": String,
  "Current Designation": String,
});

const Excel = mongoose.model("Excel", dataSchema);

export default Excel;
