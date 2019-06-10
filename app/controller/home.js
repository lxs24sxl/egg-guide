const Controller = require("egg").Controller;

class HomeConstroller extends Controller {
  async index() {
    this.ctx.body = "Hello world";
  }
}

module.exports = HomeConstroller;