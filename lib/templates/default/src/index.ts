import Server from '@app/Server'

const port = (): number => {
    const ARGS = process.argv.slice(2)

    return Number(ARGS[ARGS.indexOf('-p') + 1]) || 8080
}

const PORT = port()

const start = async () => {
    Server.start(PORT)

    // tslint:disable-next-line:no-console
    console.log(`App started @ ${PORT}`)
}

start()
