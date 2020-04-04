// 过滤
module.exports = (options, app) => {
  return async function filter(ctx, next) {
    if(ctx.get("user-agent").indexOf('Chrome') !== -1) {
      ctx.redirect(options.redirectUrl);
    } else {
      await next();
    }
  }
}