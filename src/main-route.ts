import express from 'express';

const index = express.Router();


/**
 * @return send a 200 response that indicats the api is working just fine.
 */
index.get('/', (req, res): void => {
  res.status(200).send('<p>Page Is working</p>');
});

export default index;
