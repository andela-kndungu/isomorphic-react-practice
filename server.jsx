import express from 'express';
import HTML from './public/htmlString.js';

// Initialise express
const app = express();

app.use((req, res) => {
  return res.end(HTML);
});

export default app;

