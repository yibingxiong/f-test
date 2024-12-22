const Koa = require('koa');
const app = new Koa();

// x-response-time

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});

// logger
app.keys = ['im a newer secret', 'i like turtle'];
app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

// response

app.use(async ctx => {
    ctx.cookies.set('name', 'tobi', { signed: true });
    console.log(ctx.header);
    console.log(ctx.headers)
    ctx.body = 'Hello World';
});

app.listen(3000);