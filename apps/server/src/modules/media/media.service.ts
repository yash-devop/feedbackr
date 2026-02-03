import { uploadThingInstance } from "@/lib/uploadthing/uploadthing.js";
import { AppError } from "@/middlewares/error.middleware.js";

const MediaService = {
  uploadFiles: async (files: Express.Multer.File[]) => {
    if (!files || files.length === 0) {
      return [];
    }

    try {
      //convert multer buffer to File
      const filesToUpload = files.map((file) => {
        return new File([file.buffer as BlobPart], file.originalname, {
          type: file.mimetype,
        });
      });

      // call to upload
      const uploadResponse =
        await uploadThingInstance.uploadFiles(filesToUpload);

      return uploadResponse?.map((response) => {
        if (response?.error) {
          throw new AppError("Failed to upload media", 500, "UPLOAD_ERROR");
        }
        return {
          url: response?.data?.ufsUrl,
          key: response?.data?.key,
        };
      });
    } catch (error) {
      if (error instanceof AppError) throw error;
      throw new AppError("Media service failure", 500, "INTERNAL_SERVER_ERROR");
    }
  },

  deleteFiles: async (fileKeys: string[]) => {
    if (!fileKeys || fileKeys?.length === 0) return;

    try {
      await uploadThingInstance.deleteFiles(fileKeys);
      console.log(
        `[MediaService] Deleted ${fileKeys.length} files successfully.`,
      );
    } catch (error) {
      // We generally log but don't throw here, because rollback failures
      // shouldn't crash the already-failed request flow.
      console.error("[MediaService] Failed to delete files:", error);
    }
  },
};

export default MediaService;
