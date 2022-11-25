import express from 'express';
export const app = express();
const port = 3000;
import imgResizing from './imgResizing';
import pageNotFound from './page-not-found';
import mainRoute from './main-route';



app.use('/', mainRoute); //Default route
app.use('/img', imgResizing);
app.use('*', pageNotFound); //any thing else /img will route to 404 page not found

app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});
