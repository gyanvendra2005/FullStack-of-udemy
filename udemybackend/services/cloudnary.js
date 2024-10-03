const cloudinary = require('cloudinary').v2;
const fs = require('fs')

cloudinary.config({ 
    cloud_name: 'di7st5urw', 
    api_key: '584886515336493', 
    api_secret: '3bv0Ww8a442ecNNWxvsD2G2uwqo'})

    module.exports= async function uploadResult(localPath){
        try{
            if(!localPath){
                return null;
            }
        const response = await cloudinary.uploader.upload(localPath, {
             resource_type: "auto"
        }
    )
    console.log('image uploaded',response.url);
    // fs.unlinkSync(localPath)
    return response
    } catch(error){
        fs.unlinkSync(localPath)
        return null;
    }
    }
// module.exports =    
// module.exports = uploadResult