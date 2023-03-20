import Router from '@koa/router';
import cors from '@koa/cors'
import Koa from 'koa'
import bodyParser from 'koa-bodyparser';
import { getAuth, setSessionToken } from "./auth";

const data = {
  events: [
    {
      name: "Happy New Year",
      date: "01/01/2023"
    },
    {
      name: "Vinicius's birthday",
      date: "20/02/2023"
    }
  ]
}

const app = new Koa()

export const router = new Router();

router.all('/', getAuth)

router.get('/', (ctx, next) => {
  if (ctx.session === undefined) {
    ctx.body = {
      message: 'Session set successfully',
      data: null
    }

    return;
  }

  ctx.body = {
    message: "Success",
    data: data.events
  }

  return;
})

router.post('/set-session', async (ctx) => {
  await setSessionToken(ctx);

  ctx.body = {
    message: 'Session set successfully',
    data: null
  }

  return;
})

app.use(bodyParser())
app.use(cors({ maxAge: 86400, credentials: true }))
app.use(router.routes()).use(router.allowedMethods())

export default app