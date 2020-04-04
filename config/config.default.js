module.exports = {
  keys: "my-eggjs-source",
  security: {
    csrf: false   //关闭csrf
  },
  mongo: {
    client: {
      host: "127.0.0.1",
      port: "27017",
      name: "doracms2",
      options: {
        useNewUrlParser: true
      }
    }
  },
  middleware: ['filter'],
  filter: {
    redirectUrl: 'https://baidu.com'
  },
  logger: {
    level: "DEBUG",
    consoleLevel: "DEBUG"
  },
  uploadDir: "C:/projectNew/my-eggjs/upload/"
}
