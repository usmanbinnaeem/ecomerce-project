const Category = require("../model/category");
const cloudinary = require("cloudinary");

//config

cloudinary.config({
  cloud_name: 'usmanbinnaeem',
  api_key: '597674135886218',
  api_secret: 'xRS6kqf1lOBbw_uJJOq_cj1ficA',
});

exports.upload = (req, res) => {
  let result = cloudinary.uploader.upload(req.body.image, {
    public_id: `${Math.random()}`,
    resource_type: "auto",
  });
  res.json({
    public_id: result.public_id,
    url: result.secure_url,
  });
};

exports.remove = (req, res) => {
  let image_id = req.body.public_id;

  cloudinary.uploader.destroy(image_id, (err, result) => {
    if (err) return res.json({ success: false, err });
    res.send("ok");
  });
};
