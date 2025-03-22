const express = require('express');
const multer = require('multer');
const router = express.Router();
module.exports = router;

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });

router.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "no files" });
    }
    res.json({ message: "file uploaded", file: req.file.path });
});

router.get('/list', (req, res) => {
    res.json({ files: ["file1.pdf", "file2.jpg", "file3.docx"] });
});

module.exports = router;
