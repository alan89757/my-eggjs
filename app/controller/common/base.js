'use strict';

const Controller = require('egg').Controller;

class BaseController extends Controller {
  async success(data) {
    this.ctx.body = {
      errCode: 0,
      data
    }
  }
  async fail(data) {
    this.ctx.body = {
      errCode: -1,
      data
    }
  }
}

module.exports = BaseController;
