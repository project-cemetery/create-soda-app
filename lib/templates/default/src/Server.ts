import * as express from 'express'

export default class Server {
  public static start = (port: number): Server => {
    const server = new Server()
    server.app.listen(port)

    return server
  }

  private app: express.Application

  constructor() {
    this.app = express()

    this.config()
    this.router()
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
