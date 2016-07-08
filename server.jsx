import express from 'express';

// Initialise express
const app = express();

app.use(express.static('public'));

export default app;

