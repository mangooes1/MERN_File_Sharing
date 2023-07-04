import { request, response } from "express";
import File from "../modals/file.js"; 


export const uploadImage = async( req,res) => {
      const fileObj = {
        path: req.file.path,
        name: req.file.originalname 
      }
    try{
       const file = await File.create(fileObj); 
        res.status(200).json({path:`https://localhost:3000/file/${file._id}`});
    }catch(error){
        console.error(error.message);
        response.status(500).json({error: error.message});
    }
}
export const downloadImage = async(req,res) =>{
    try{
                const file = await File.findById(req.params.id);
                file.downloadContent++;
                await file.save();
                res.download(file.path, file.name);
    }catch(error){
        console.error(error.message);
        return response.status(500).json({error:errorevent.message});
    }

}