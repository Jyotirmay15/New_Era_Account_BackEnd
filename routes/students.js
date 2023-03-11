const express = require('express');

const feedController = require('../controllers/students');
const imageController = require("../controllers/images");

const router = express.Router();


router.get('/students', feedController.getStudents);
router.post('/students', feedController.createStudentEntry);

router.post('/delete-student', feedController.deleteStudentEntry);
router.post('/edit-student', feedController.updateStudentEntry);

router.post('/image-upload', imageController.imageUpload);
router.get('/images', imageController.getImages);

module.exports = router;