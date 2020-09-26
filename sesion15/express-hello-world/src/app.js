const express = require('express');
const app = express()

const port = 3000;

// const server = http.createServer((req, res) => {
//   switch (req.url) {
//     case '/':
//       res.statusCode = 200;
//       res.setHeader('Content-Type', 'text/plain');
//       res.end(`[${req.method}] Root path API`);
//       break
//     case '/login':
//       res.statusCode = 200;
//       res.setHeader('Content-Type', 'application/json');
//       res.end(JSON.stringify({
//         success: true,
//         method: req.method,
//         msg: `[${req.method}] /login`
//       }));
//       break
//   }
// });
app.get('/', (req, res) => {
  res.end(`[${req.method}] Hello World with express`);
})
  .post('/', (req, res) => {
  res.end(`Hello World [${req.method}] Root Path with express`);
})
  .put('/', (req, res) => {
  res.end(`Hello World [${req.method}] Root Path with express`);
})
  .delete('/', (req, res) => {
  res.end(`Hello World [${req.method}] Root Path with express`);
})

app.post('/login', (req, res) => {
  res.end(JSON.stringify({
            success: true,
            method: req.method,
            msg: `[${req.method}] /login`,
            datetime: new Date().toISOString(),
            token: 'qawsed.qawsed.qawsed'
          }));
})


app.listen(port, () => {
  console.log(`Server running on port: ${port}/`)
})