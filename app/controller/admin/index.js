'use strict';

const Controller = require('egg').Controller;

class IndexController extends Controller {
  async index() {
    // this.ctx.cookies.set("testToken", "111111");   // 设置cookie
    // console.log(this.ctx.service.user.admin.find());
    const result = await this.ctx.service.user.admin.find();
    console.log(result)
    this.ctx.body = result;
  }
  async postData() {
    // this.ctx.body = "post data";
    console.log(this.ctx.request.body)
    this.ctx.body = this.ctx.request.body;
  }
}

module.exports = IndexController;
