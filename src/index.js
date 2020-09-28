const { initApps, logger, bodyParser, json, koaRouter } = require("@mpecarina/koa-template")
const path = require("path")

const { NODE_ENV, APP_PORT_0, APP_PORT_1 } = process.env
const controllersPath = path.join(__dirname, `./controllers`)
const healthCheckRoutes = path.join(__dirname, `../service_definitions/health-check-routes.yaml`)

const [app, metricsApp] = initApps([
  logger(),
  bodyParser(),
  json({ pretty: false, param: "pretty", spaces: 2 }),
  koaRouter(healthCheckRoutes, controllersPath),
])

app.listen(APP_PORT_0 || 3000)
metricsApp.listen(APP_PORT_1 || 3001)
