module.exports = {
  keys: "my-eggjs-source",
  security: {
    csrf: false   //关闭csrf
  },
  mongo: {
    client: {
      host: "http://localhost",
      port: "27017",
      name: "doracms2"
    }
  }
}
