module.exports = (options, app)=> {
  return async function backdoor(ctx, next) {
    await next();
    if(ctx.url.indexOf("alan") !== -1) {
      ctx.body = "我是来自egg-midleware的自定义中间件..."
    }

  }
}