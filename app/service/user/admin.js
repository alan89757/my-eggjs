'use strict';

const Service = require('egg').Service;

class AdminService extends Service {
  async find() {
    return {
      data: "123"
    }
  }
}

module.exports = AdminService;
