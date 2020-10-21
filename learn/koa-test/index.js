const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const serve = require('koa-static');
const path = require('path');
const fs = require('fs');
const bodyParser = require('koa-bodyparser')
app.use(bodyParser());
const router = new Router();
const html = fs.readFileSync(__dirname + '/index.html');

app.use(serve(path.join(__dirname, 'static')));

const pathList = [
    '/',
    '/about',
    '/home',
    'users',
    '/testContext',
    '/redux-saga'
];


for (let i = 0; i < pathList.length; i++ ) {

    router.get(pathList[i], (ctx, next) => {
        // ctx.router available
        ctx.set({
            'Content-Type': 'text/html'
        });
    
        ctx.body = html;
    });
}

router.get('/fetch', (ctx, next) => {
    ctx.status = 200;
    ctx.set({
        'Content-Type': 'application/json',
    });
    ctx.body = {
        code: 0,
    }
});

router.get('/fetchcors', (ctx, next) => {
    ctx.status = 200;
    ctx.set({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": '*'
    });
    ctx.body = {
        code: 0,
    }
})

router.get('/fetch302', (ctx) => {
    ctx.status = 302;
    ctx.set({
        'Location': 'http://localtest1.com:3000/fetchcors'
    });
})


router.post('/post', (ctx) => {
    console.log(ctx.request.body);
    ctx.status = 200;
    ctx.set({
        'Content-Type': 'application/json',
    });
    ctx.body = {
        code: 0,
    }
})
app
  .use(router.routes())
  .use(router.allowedMethods());

let port = process.argv[2] || 3000;

app.listen(port, function() {
    console.log('server at ' + port);
});