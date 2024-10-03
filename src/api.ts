import { Context, Hono } from 'hono'
import { typedCustomEnv, TypedCustomEnv } from './middleware/typedCustomEnv.js'

export type HonoEnv = {
  Variables: {
    customEnv: TypedCustomEnv
  }
}

export type AppContext = Context<HonoEnv>

export const app = new Hono<HonoEnv>().basePath('/api')

// 型付きのenvをcontextにセットする
app.use(typedCustomEnv())

// ルーティングの動作確認用のエンドポイント
app.get('/', async (c) => {
  const { CUSTOM_VALUE } = c.var.customEnv
  return c.text(`CUSTOM_VALUE: ${CUSTOM_VALUE}`)
})
