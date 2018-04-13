import http from 'http'
// import https from 'https'
import Koa from 'koa'
import path from 'path'
import views from 'koa-views'
import convert from 'koa-convert'
import json from 'koa-json'
// import Bodyparser from 'koa-bodyparser'
import logger from 'koa-logger'
import koaStatic from 'koa-static-plus'
import koaOnError from 'koa-onerror'
import cors from 'koa2-cors'
import config from './config'
import koaBody from'koa-body'

const app = new Koa()
// const bodyparser = Bodyparser()

// middlewares
// app.use(convert(bodyparser))
app.use(convert(koaBody({multipart: true})));
app.use(convert(json()))
app.use(convert(logger()))

// static
app.use(convert(koaStatic(path.join(__dirname, '../public'), {
  pathPrefix: ''
})))

// console.log('__dirname::', __dirname); /Users/Boyang/Workspace/koa-nasa-star/app
// console.log('path join::', path.join(__dirname, '../views')); /Users/Boyang/Workspace/koa-nasa-star/views

// views
app.use(views(path.join(__dirname, '../views'), {
  extension: 'ejs' // node 自带
}))

// cors
app.use(cors({
  origin: function(ctx) {
    if (ctx.url === '/test') {
      return '*';
    }
    return '*';
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))


// 500 error
koaOnError(app, {
  template: 'views/500.ejs'
})

// response router
app.use(async (ctx, next) => {
  // console.log(ctx.response.status);
  await require('./routes').routes()(ctx, next)
})

// 404
app.use(async (ctx) => {
  ctx.status = 404
  await ctx.render('404')
})

// error logger
app.on('error', async (err, ctx) => {
  console.log('error occured:', err)
})

const port = parseInt(config.port || '7709')
const server = http.createServer(app.callback())

server.listen(port)
server.on('error', (error) => {
  if (error.syscall !== 'listen') {
    throw error
  }
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(port + ' requires elevated privileges')
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(port + ' is already in use')
      process.exit(1)
      break
    default:
      throw error
  }
})
server.on('listening', () => {
  console.log('Listening on port: %d', port)
})

export default app
