module.exports = app=> {
  app.config.coreMiddleware.splice(0, 0, 'backdoor');
  console.log(app.config.coreMiddleware)
}