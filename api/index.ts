import { handle } from '@hono/node-server/vercel'
import { app } from '../src/api.js'

export default handle(app)
