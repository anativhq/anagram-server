// server.js
var jsonServer = require('json-server')
var server = jsonServer.create('words.json')
//var router = jsonServer.router('words.json')
//var middlewares = jsonServer.defaults()

const PORT = 3000;

// server.use(middlewares)
// server.use(router)
server.listen(PORT, function () {
  console.log(`JSON Server is running on port ${PORT}.`)
})
