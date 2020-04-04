// const Controller = require("egg").Controller;
const Controller = require('../common/base');

const fs = require("fs");
const path = require("path");

class HomeController extends Controller {
  async index() {
    // this.ctx.body = this.config.keys;
    this.success(this.config.keys);
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
    console.log(11111)
    const result = await this.ctx.service.user.admin.find();
    this.success(result)
  }
}

module.exports = HomeController;