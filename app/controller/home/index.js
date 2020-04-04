// const Controller = require("egg").Controller;
const Controller = require('../common/base');

const fs = require("fs");
const path = require("path");

class HomeController extends Controller {
  async index() {
    this.success({
      keys: this.config.keys,
      count: this.app.count
    });
  }
  async middleware() {
    this.app.middleware.filter({}, this.app);
    this.success(this.config.keys);
    // this.ctx.body = "middleware123";
  }
  async upload() {
    const {
      ctx
    } = this;
    const stream = await ctx.getFileStream();
    // 存放目录
    const filePath = path.resolve(this.config.uploadDir, stream.filename);
    const ws = await fs.createWriteStream(filePath);
    stream.pipe(ws);
    this.ctx.body = "上传成功";
  }
  async handleCookie() {
    this.ctx.cookies.set("x-dyeing", 1000);
    this.ctx.body = "cookie设置成功";
  }
  async getNews() {
    const result = await this.ctx.service.user.admin.find();
    this.success(result);
  }
  async curl() {
    const result = await this.ctx.curl(this.ctx.helper.urlFor("homeIndex"), {
      method: "GET",
      dataType: "json"
    });
    this.ctx.body = result.data;
  }
  async log() {
    const logger = this.ctx.logger;
    logger.debug(new Error("logger调试日志"));
    logger.info(new Error("logger提示信息"));
    logger.warn(new Error("logger警告信息"));
    logger.error(new Error("logger异常信息"));

    const coreLogger = this.ctx.coreLogger;
    coreLogger.debug(new Error("coreLogger调试日志"));
    coreLogger.info(new Error("coreLogger提示信息"));
    coreLogger.warn(new Error("coreLogger警告信息"));
    coreLogger.error(new Error("coreLogger异常信息"));

    this.ctx.body = "日志测试";
  }
  async extend() {
    this.success(this.app.addNum);
    // this.ctx.body = "应用扩展...";
  }
}

module.exports = HomeController;