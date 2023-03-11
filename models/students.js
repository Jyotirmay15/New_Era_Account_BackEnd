const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentsSchema = new Schema({
  srNumber: { type: Number, required: true },
  name: { type: String, required: true },
  parent: { type: String, required: true },
  address: { type: String, required: true },
  class: { type: String, required: true },
  phone: { type: Number, required: true },
  aadhar: { type: Number, required: false },
  image: {type: String, required: false},

  academicsTotal: { type: Number, required: true },
  academicsReceived: { type: Number, required: true },
  academicsPending: { type: Number, required: true },
  academicsLastPaidDate: { type: String, required: true },
  academicsDueDate: { type: String, required: true },

  transportTotal: { type: Number, required: true },
  transportReceived: { type: Number, required: true },
  transportPending: { type: Number, required: true },
  transportLastPaidDate: { type: String, required: true },
  transportDueDate: { type: String, required: true },

  admissionTotal: { type: Number, required: true },
  admissionReceived: { type: Number, required: true },
  admissionPending: { type: Number, required: true },
  admissionLastPaidDate: { type: String, required: true },

  examsTotal: { type: Number, required: true },
  examsReceived: { type: Number, required: true },
  examsPending: { type: Number, required: true },
  examsLastPaidDate: { type: String, required: true },
  examsDueDate: { type: String, required: true },
});

module.exports = mongoose.model("Student", studentsSchema);
