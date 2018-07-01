enum Env {
    dev,
    prod,
}

const getEnv = (): Env =>
    process.env.NODE_ENV === 'dev'
        ? Env.dev
        : Env.prod

export const isDev: boolean = getEnv() === Env.dev
export const isProd: boolean = getEnv() === Env.prod
