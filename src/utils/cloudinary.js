import {v2 as cloudinary} from 'cloudinary';
import { response } from 'express';
import fs from "fs" //file system
          
cloudinary.config({ 
  cloud_name: process.env.COUDINARY_CLOUD_NAME, 
  api_key: process.env.COUDINARY_API_KEY, 
  api_secret: process.env.COUDINARY_API_SECRET 
});
const uploadOnCloudinary = async (localFilePath) =>{
    try {
        if(!localFilePath) return null
        //upload
        cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        //successfully upload
        console.log("File is uploaded on Cloudinary", response.url);
        return response
    } catch (error) {
        fs.unlinkSync(localFilePath) //remove the locally saveed temporary file
        return null
    }
}

export {uploadOnCloudinary}

