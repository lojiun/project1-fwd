import express from 'express';
import fs from 'fs';
export const Validator = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void => {
  if (Object.keys(req.query).length === 0) {
    res.status(400).send('<i>Please provide fileName, width & height</i>');
  } else if (
    !fs.existsSync(`./src/originalImg/${req.query.fileName}.jpeg`) &&
    !req.query.height &&
    !req.query.width
  )
    res
      .status(404)
      .send('<i>Image not found , width and hight are missing </i>');
  else if (!fs.existsSync(`./src/originalImg/${req.query.fileName}.jpeg`))
    res.status(404).send('<i>Image not found  </i>');
  else if (!req.query.fileName)
    res.status(400).send('<i>fileName is missing </i>');
    else if (Number(req.query.height)<0 ||Number(req.query.width)<0)
    res.status(400).send('<i>please enter a positive number </i>');
  else if (!req.query.height && !req.query.width)
    res.status(400).send('<i>height and width  are missing </i>');
  else if (!req.query.width) res.status(400).send('<i>width is missing </i>');
  else if (!req.query.height) res.status(400).send('<i>height is missing </i>');

  next();
};
