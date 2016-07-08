import React from 'react';
import { renderToString } from 'react-dom/server';

const componentHTML = renderToString(<h1>Hello World</h1>);
const HTML = (`
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Isomortphic React</title>
  </head>
  <body>
    <div id="app">${componentHTML}</div>
  </body>
</html>
  `);
export default HTML;

