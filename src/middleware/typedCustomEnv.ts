import { MiddlewareHandler } from 'hono'
import { env } from 'hono/adapter'

type Env = {
  CUSTOM_VALUE: string
}

export const typedCustomEnv = (): MiddlewareHandler => {
  return async (c, next) => {
    c.set('customEnv', env<Env>(c))
    await next()
  }
}

export type TypedCustomEnv = Env
