const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = this.config.keys;
  }
}

module.exports = HomeController;