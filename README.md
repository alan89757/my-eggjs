# my-eggjs

# 实现以下功能
## 1.base Controller
## 2.post传参
## 3.csrf 安全校验
## 4.service
## 5.插件  egg-mongo-native  
### 1.config.default.js 插件配置
### 2.plugin.js 配置插件是否启用
### 3.this.app.mongo.db.collection('collectionName').find({}).toArray();
## 6.this.ctx.helper.pathFor/urlFor
## 7.curl
## 8.middleWare
## 9.redirect
## 10.日志
### common-error.log  --异常日志
### egg-agent.log  --进程日志
### egg-schedule.log  --定时任务日志
### egg-web.log  --插件相关日志
### my-eggjs.log  --应用日志
### application_config.json / application_config_meta.json
## 11.应用扩展  extend/application.js
## 12.Symbol --定义私有属性
### Object.getOwnPropertySymbols   --获取symbol对象
## 13.文件上传/下载
## 14.插件 plugin
### 中间件 -拦截用户请求，处理请求前后
### 扩展   -给application/context/request/response/helper对象新增方法和属性
### 插件   -完成特定任务，如数据库连接 egg-mongo-native
### plugin.js 配置package, 
#### npm link ../egg-ext 指向本地
#### npm link ../egg-middleware 指向本地
#### npm link ../egg-schedule 指向本地
#### npm link ../egg-start 指向本地
