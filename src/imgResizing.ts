import express from 'express';
const route = express.Router();
import { imageProcessing } from './routes/imgProcessing';
import { Validator } from './Helpers/imgValidation';

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
