import { Next } from "koa";

const getAuth = async (ctx, next: Next) => {
  ctx.session = ctx.cookies.get('token')

  await next()
}

const setSessionToken = async (ctx) => {
  try {
    const options = {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      path: '/',
      // 1minute
      maxAge: 60 * 5 * 1000,
    }

    ctx.cookies.set('token', 'sessiontoken1234', options)
  } catch (err) {
    console.log('Error in set session cookie: ', err)
  }
}

export { getAuth, setSessionToken }