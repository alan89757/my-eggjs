module.exports = (app) => {
  const { router, controller } = app;

  router.get('/index', controller.home.index.index);  // txt,ts上传失败
  router.post('/upload', controller.home.index.upload);
  // router.get('/', controller.home.index.index);  // 文件上传
  router.get('adminIndex', '/admin', controller.admin.index.index);  // 第一个参数是路由名称
  router.post('postData', '/postData', controller.admin.index.postData);
}