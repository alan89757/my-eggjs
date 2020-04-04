module.exports = (app) => {
  const { router, controller } = app;
  require('./router/home')(app);
  require('./router/admin')(app);
}