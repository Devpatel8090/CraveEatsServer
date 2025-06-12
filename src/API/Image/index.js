// Libraries
import express from 'express';
import AWS from "aws-sdk";
import multer from 'multer';        // used for uploding the image by using the RAM for temporary purpose of that instance

// Database Modal
import { ImageModel } from '../../database/allModelsIndex';

const Router = express.Router();

// multer config
const storage = multer.memoryStorage();
const upload = multer({ storage });



// utility functions
import { s3Upload } from '../../utils/s3';


/**
 * Router       /
 * Des          get specific id image
 * Params       none
 * Access       Public
 * Method       Post
 */

Router.get("/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const image = await ImageModel.findById(_id);

        return res.status(200).json(image);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/**
 * Router       /
 * Des          Upload the given images to s3 bucket and saves file links to mongodb
 * Params       none
 * Access       Public
 * Method       Post
 */

// Router.post("/", upload.single("file"), async (req, res) => {

Router.post("/", upload.array("file", 4), async (req, res) => {
    try {
        const file = req.files;

        // S3 bucket options
        const bucketOptions = {
            Bucket: "aadhya-restaurant-bucket",
            Key: file.originalname,
            // buffer contents 0-1 type(binary type) image
            Body: file.buffer,
            // content type shows which type of image(Png, jpeg)
            ContentType: file.mimetype,
            // ACL: "public-read",   // Access control list

        };

        const uploadImage = await s3Upload(bucketOptions);

        const saveImageToDatabase = await ImageModel.create({
            images: [{
                Location: uploadImage.Location
            }],
        });
        return res.status(200).json({ saveImageToDatabase });

    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


export default Router;

