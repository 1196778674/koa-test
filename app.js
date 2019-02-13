const Koa = require('koa');
const cors = require('koa-cors');
const koaBody = require('koa-body');
const post = require('koa-bodyparser');
const Router = require('koa-router');

const router = new Router();
const app = new Koa();

app.use(koaBody());
app.use(post());
app.use(cors());
app.use(router.routes());

app.use(async(ctx, next) => {
	await next();
	ctx.response.type = 'text/html';
	ctx.response.body = '<h1>服务已启动！！！</h1>'
});

router.get('/index', async(ctx, next) => {
	ctx.response.body = JSON.stringify({data: 232423});
});

app.listen('1234', () => {
	console.log('koa started at port 1234');
});