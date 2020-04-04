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
}

module.exports = HomeController;