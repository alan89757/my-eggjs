module.exports = (options, app)=> {
  // app.count = 0;
  return async function count(ctx, next) {
    if(ctx.ip === "127.0.0.1") {
      app.addCount();
      //  app.count +=1;
    }
    await next();
  }
}