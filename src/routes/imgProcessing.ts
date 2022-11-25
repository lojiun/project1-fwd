import sharp from 'sharp';
import { promises as fsPromises } from 'fs';
import fs from 'fs';
export const imageProcessing = async function (
  fileName: string,
  W: number,
  H: number
) {
  try {
    const _width = W;
    const _height = H;
    if (!fs.existsSync(`./src/resizedImgs/${fileName}_${W}_${H}.jpeg`)) {
      const file = await fsPromises.readFile(
        `./src/originalImg/${fileName}.jpeg`
      );      
      await sharp(file)
        .resize({
          width: _width,
          height: _height,
        })
        .toFile(`./src/resizedImgs/${fileName}_${W}_${H}.jpeg`);      
    }
    const resizedImg = fsPromises.readFile(
      `./src/resizedImgs/${fileName}_${W}_${H}.jpeg`
    );
     console.log(resizedImg)
    return resizedImg;
  } catch (error) {
    console.log(error)
    throw new Error("There was an error");    
  }
};
