import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const videoStorage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: "boom/videos",
        resource_type: "video",
        format: async () => "mp4",
    },
});

const thumbnailStorage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: "boom/thumbnails",
        resource_type: "image",
        format: async () => "jpg",
    },
});

export { cloudinary, videoStorage, thumbnailStorage };