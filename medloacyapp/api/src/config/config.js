import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from 'cloudinary';

// Configure the multer middleware to handle file uploads.
const upload = multer({ dest: 'uploads/' });

// Configure the cloudinary client.
cloudinary.config({
    cloud_name: 'do2jxbuft',
    api_key: '824419742253678',
    api_secret: 'goHb7eGpvfLQAenoOKqtuZEnCgo'
});

// Configure multer storage for Cloudinary
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "prescriptions",
        allowed_formats: ["jpg", "png", "pdf"],
    },
});

const parser = multer({ storage: storage });

export { upload, parser };
