'use strict';

const Service = require('egg').Service;

class AdminService extends Service {
  async find() {
    // 数据查询 this.app.mongo取的是config.default.js配置信息
    const result = await this.app.mongo.db
      .collection('news')
      .find({})
      .toArray();
      console.log(result)
      return result;
  }
}

module.exports = AdminService;
