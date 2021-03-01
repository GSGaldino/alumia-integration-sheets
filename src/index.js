const app = require('./app');
const fs = require('fs');
const https = require('https');

const port = process.env.PORT || 3000;
const isProduction = process.env.NODE_ENV !== "development";

const serverOptions = {
  key: isProduction ? fs.readFileSync(process.env.PATH_TO_PRIVATE_KEY, 'utf8') : 0,
  cert: isProduction ? fs.readFileSync(process.env.PATH_TO_PRIVATE_KEY, 'utf8') : 0
};

if (serverOptions.key && serverOptions.cert) {

  const httpsServer = https.createServer(serverOptions, app);
  return httpsServer.listen(port);
} else {

  app.listen(port, () => {
    console.log(
      `App listenning on port: ${port} | REST \nSSL Cert => ${serverOptions.cert ? true : false}`
    )
  })
}
