import express from 'express';

const routerPageNotFound = express.Router();

/**
 * @return send a 404 response and renders a text that the resource is not found
 */
routerPageNotFound.get('*', (req, res): void => {
  res.status(404).send('<p> 404 Page not found try anthor valid url </p>');
});

export default routerPageNotFound;
