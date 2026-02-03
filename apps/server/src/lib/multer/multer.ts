import multer from "multer";

export const multerUploadInstance = multer({ storage: multer.memoryStorage() });
