import * as express from 'express'

export default class Server {
  private app: express.Application

  constructor() {
    this.app = express()

    this.config()
    this.router()
  }
  public static start = (port: number): Server => {
    const server = new Server()
    server.app.listen(port)

    return server
  }

  private config() {
    // config
  }

  private router() {
    const router = express.Router()

    router.get('/', (_, res) => res.send('Hello!'))

    this.app.use(router)
  }
}
