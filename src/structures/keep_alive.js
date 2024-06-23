const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.end(`
    <html>
      <head>
        <title>Your Web View</title>
      </head>
      <body style="margin: 0; padding: 0;">
        <iframe width="100%" height="100%" src="https://axocoder.vercel.app/" frameborder="0" allowfullscreen></iframe>
      </body>
    </html>`);
});

const randomPort = Math.floor(Math.random() * (65535 - 1024 + 1)) + 1024;

server.listen(randomPort, () => {
  console.log(`Server Online because of Axo Coder ✅!! Listening on port ${randomPort}`);
});
