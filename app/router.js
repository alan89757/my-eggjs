module.exports = (app) => {
  const { router, controller } = app;
  router.get('/', controller.home.index.index);
  router.get('adminIndex', '/admin', controller.admin.index.index);  // 第一个参数是路由名称
  router.post('postData', '/postData', controller.admin.index.postData);
}