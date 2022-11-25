import express from 'express';
const route = express.Router();
import { imageProcessing } from './routes/imgProcessing';
import { Validator } from './Helpers/imgValidation';


/**
 * @param fileName : string
 * @param width : number
 * @param height : number
 * @returns path of the image if processing was successful, raise an error otherwise.
 */
route.get('/', Validator, async (req, res) => {
  try {
    let fileName = req.query.fileName?.toString() || '';
    let width = Number(req.query.width);
    let height = Number(req.query.height);
    const pathOfProcessingImage = await imageProcessing(
      fileName,
      width,
      height
    );
    res.set({ 'Content-Type': 'image/png' });
    res.send(pathOfProcessingImage);
  } catch (error) {
    console.log(error);
  }
});

export default route;
