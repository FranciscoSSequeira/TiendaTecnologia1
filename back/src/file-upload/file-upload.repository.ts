import { BadRequestException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { UploadApiResponse, v2 as Cloudinary } from "cloudinary";
import * as toStream from "buffer-to-stream";

@Injectable()
export class FileUploadRepository {
    async uploadImage(file: Express.Multer.File): Promise<UploadApiResponse> {
        try {

            return await new Promise((resolve, reject) => {

                const upload = Cloudinary.uploader.upload_stream(
                    { resource_type: "auto" },
                    (error, result) => {
                        if (error) {
                            reject(error);
                        } else if (result) {
                            resolve(result);
                        } else {
                            reject(new Error("Upload failed: result is undefined."));
                        }
                    },
                )
                toStream(file.buffer).pipe(upload);
            });
            
        } catch (error) {
    
            if (error instanceof BadRequestException || error instanceof InternalServerErrorException) {
                throw error;
            }
            throw new InternalServerErrorException("Error inesperado al subir la imagen");          
        }

    }
}           