// import multer from "multer";
// import { videoStorage, thumbnailStorage } from "../utils/cloudinary.js";

// export const uploadVideo = multer({ storage: videoStorage });
// export const uploadThumbnail = multer({ storage: thumbnailStorage });



// middlewares/multer.js
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    const folder = file.fieldname === "thumbnail" ? "thumbnails" : "videos";
    return {
      folder: folder,
      resource_type: "auto",
    };
  },
});

const cloudinaryUpload = multer({ storage });

export default cloudinaryUpload;
