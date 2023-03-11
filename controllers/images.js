const Image = require("../models/image");

exports.imageUpload = (req, res, next) => {
  const img = req.file;
  const srNumber = req.body.srNumber;
  if (!img) {
    return res.status(422).json({
      message: "Invalid image input",
    });
  }
  const image = new Image({
    srNumber: srNumber,
    image: img.path,
  });

  image
    .save()
    .then((data) => {
      res.status(201).json({
        message: "Image uploaded successfully",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getImages = (req, res, next) => {
    Image.find()
      .then((data) => {
        res.status(200).json({
          images: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  
