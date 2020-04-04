module.exports = app=> {
  const { router, controller} = app;

  const count = app.middleware.count({}, app);

  router.get("homeIndex", '/index', count, controller.home.index.index);  // txt,ts上传失败
  
  router.post('/upload', controller.home.index.upload);

  router.redirect('/', '/index', 302);  // 重定向
  
  router.get('/curl', controller.home.index.curl); 

  router.get('/middleware', controller.home.index.middleware); // 中间件
  
  router.get('newslist', '/getNews', controller.home.index.getNews);

  router.get('/handleCookie', controller.home.index.handleCookie);  // 设置cookie

  router.get('/log', controller.home.index.log);   // 日志
  
  router.get('/extend', count, controller.home.index.extend); 

}