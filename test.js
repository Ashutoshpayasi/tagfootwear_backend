const multer = require('multer');

// Set storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'assets/images/productImage'); // Destination folder where uploaded files will be stored
  },
  filename: function (req, file, cb) {
    // Rename file with current timestamp + original file extension
    cb(null, Date.now() + '-' + file.originalname);
  }
});

// Set file filter
const fileFilter = (req, file, cb) => {
  // Accept only image files
  // Accept only specific file types
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/svg+xml') {
    cb(null, true);
  } else {
    cb(res.json({ message: 'Only JPG, PNG, and SVG files are allowed!' }), false);
  }
};

// Initialize Multer with configuration
const productImageUpload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 }, // Limit file size to 5MB
  fileFilter: fileFilter
});

// Route handler to create a product
router.post('/products', productImageUpload.single("productImage"), createProduct);

module.exports = productImageUpload;
