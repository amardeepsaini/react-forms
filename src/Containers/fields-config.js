import { TEXT, RADIO, DATE, TIME, SELECT, MULTIPLE } from "../Constants/constants";

export const fieldsConfig = [
  { name: "firstName", type: TEXT, labelText: "First Name" },
  { name: "lastName", type: TEXT, labelText: "Last Name" },
  { name: "gender", type: RADIO, labelText: "Gender", options:[{text:"MALE", value:"male"},{text:"FEMALE", value:"female"}]},
  { name: "DOB", type: DATE, labelText: "DOB" },
  { name: "time", type: TIME, labelText: "TIME" },
  { name: "fatherName", type: TEXT, labelText: "Father's Name" },
  { name: "motherName", type: TEXT, labelText: "Mother's Name" },
  { name: "employed", type: SELECT, labelText: "Employment", options:[{text:"Full Time", value:"fullTime"},{text:"Intern", value:"intern"}]},
  { name: "hobbies", type: TEXT, MULTIPLE, labelText: "Hobbies" },
];
