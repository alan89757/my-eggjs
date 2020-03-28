const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    console.log(11111111)
    this.ctx.body = "home page"
  }
}

module.exports = HomeController;