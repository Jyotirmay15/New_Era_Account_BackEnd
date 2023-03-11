const Student = require("../models/students");
const Image = require("../models/image");
const image = require("../models/image");

exports.getStudents = (req, res, next) => {
  Student.find()
    .then((data) => {
      res.status(200).json({
        students: data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteStudentEntry = (req, res, next) => {
  const studentId = req.body._id;
  Student.findByIdAndRemove(studentId)
    .then(() => {
      console.log("Delete Student Entry");
      res.status(200).json({
        message: `Student entry with id ${studentId} delete successfully`,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.updateStudentEntry = (req, res, next) => {
  const studentId = req.body._id;
  const srNumber = req.body.srNumber;
  const name = req.body.firstName;
  const parent = req.body.parent;
  const address = req.body.address;
  const contact = req.body.phone;
  const studentclass = req.body.class;
  const aadhar = req.body.aadhar;

  const admissionTotal = req.body.admissionTotal;
  const admissionReceived = req.body.admissionReceived;
  const admissionPending = req.body.admissionPending;
  const admissionLastPaidDate = req.body.admissionLastPaidDate;

  const academicsTotal = req.body.academicsTotal;
  const academicsReceived = req.body.academicsReceived;
  const academicsPending = req.body.academicsPending;
  const academicsLastPaidDate = req.body.academicsLastPaidDate;
  const academicsDueDate = req.body.academicsDueDate;

  const transportTotal = req.body.transportTotal;
  const transportReceived = req.body.transportReceived;
  const transportPending = req.body.transportPending;
  const transportLastPaidDate = req.body.transportLastPaidDate;
  const transportDueDate = req.body.transportDueDate;

  const examTotal = req.body.examTotal;
  const examReceived = req.body.examReceived;
  const examPending = req.body.examPending;
  const examLastPaidDate = req.body.examLastPaidDate;
  const examDueDate = req.body.examDueDate;

  const img = req.file;

  Student.findById(studentId)
    .then((student) => {
      student.srNumber = srNumber;
      student.name = name;
      student.parent = parent;
      student.address = address;
      student.phone = contact;
      student.class = studentclass;
      student.aadhar = aadhar;
      if(img) {
        student.image = img.path;
      }
      student.academicsTotal = academicsTotal;
      student.academicsReceived = academicsReceived;
      student.academicsPending = academicsPending;
      student.academicsLastPaidDate = academicsLastPaidDate;
      student.academicsDueDate = academicsDueDate;

      student.admissionTotal = admissionTotal;
      student.admissionReceived = admissionReceived;
      student.admissionPending = admissionPending;
      student.admissionLastPaidDate = admissionLastPaidDate;

      student.transportTotal = transportTotal;
      student.transportReceived = transportReceived;
      student.transportPending = transportPending;
      student.transportLastPaidDate = transportLastPaidDate;
      student.transportDueDate = transportDueDate;

      student.examsTotal = examTotal;
      student.examsReceived = examReceived;
      student.examsPending = examPending;
      student.examsLastPaidDate = examLastPaidDate;
      student.examsDueDate = examDueDate;

      return student.save();
    })
    .then((result) => {
      console.log("Student Entry Updated");
      res.status(201).json({
        message: "Entry updated successfully!",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.createStudentEntry = (req, res, next) => {
  const srNumber = req.body.srNumber;
  const name = req.body.firstName;
  const parent = req.body.parent;
  const address = req.body.address;
  const contact = req.body.phone;
  const studentclass = req.body.class;
  const aadhar = req.body.aadhar;

  const admissionTotal = req.body.admissionTotal;
  const admissionReceived = req.body.admissionReceived;
  const admissionPending = req.body.admissionPending;
  const admissionLastPaidDate = req.body.admissionLastPaidDate;

  const academicsTotal = req.body.academicsTotal;
  const academicsReceived = req.body.academicsReceived;
  const academicsPending = req.body.academicsPending;
  const academicsLastPaidDate = req.body.academicsLastPaidDate;
  const academicsDueDate = req.body.academicsDueDate;

  const transportTotal = req.body.transportTotal;
  const transportReceived = req.body.transportReceived;
  const transportPending = req.body.transportPending;
  const transportLastPaidDate = req.body.transportLastPaidDate;
  const transportDueDate = req.body.transportDueDate;

  const examTotal = req.body.examTotal;
  const examReceived = req.body.examReceived;
  const examPending = req.body.examPending;
  const examLastPaidDate = req.body.examLastPaidDate;
  const examDueDate = req.body.examDueDate;

  const img = req.file;

  const student = new Student({
    srNumber: srNumber,
    name: name,
    parent: parent,
    address: address,
    phone: contact,
    class: studentclass,
    aadhar: aadhar,
    image: img.path,
    academicsTotal: academicsTotal,
    academicsReceived: academicsReceived,
    academicsPending: academicsPending,
    academicsLastPaidDate: academicsLastPaidDate,
    academicsDueDate: academicsDueDate,

    admissionTotal: admissionTotal,
    admissionReceived: admissionReceived,
    admissionPending: admissionPending,
    admissionLastPaidDate: admissionLastPaidDate,

    transportTotal: transportTotal,
    transportReceived: transportReceived,
    transportPending: transportPending,
    transportLastPaidDate: transportLastPaidDate,
    transportDueDate: transportDueDate,

    examsTotal: examTotal,
    examsReceived: examReceived,
    examsPending: examPending,
    examsLastPaidDate: examLastPaidDate,
    examsDueDate: examDueDate,
  });

  student
    .save()
    .then((result) => {
      console.log("Student Entry Created");
    })
    .catch((err) => {
      console.log(err);
    });

  Student.find()
    .then((data) => {
      res.status(201).json({
        message: "Entry created successfully!",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
