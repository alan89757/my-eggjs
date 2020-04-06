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
  async download() {
    // this.ctx.body = "11111";
    const filePath = path.resolve(this.config.uploadDir, 'test.json');
    const stream = fs.createReadStream(filePath);
    this.ctx.attachment("test.json");
    this.ctx.body = stream;
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
    this.success({
      count: this.app.addCount
    });
    // this.ctx.body = "应用扩展...";
  }
  // 测试ext插件
  async ext() {
    this.success({
      ext: this.ctx.helper.info
    });
  }
  // 测试start插件
  async start() {
    console.log(this)
    this.success({
      start: this.app.configs
    });
  }
}

module.exports = HomeController;