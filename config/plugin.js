const path = require("path");

exports.mongo = {
  enable: true,
  package: "egg-mongo-native"
}

exports.ext = {
  enable: true,
  path: path.resolve(__dirname, '../lib/plugin/egg-ext')
  // package: "egg-ext"
}

exports.middleware = {
  enable: true,
  path: path.resolve(__dirname, '../lib/plugin/egg-middleware')
  // package: "egg-middleware"
}

exports.alanschedule = {
  enable: true,
  path: path.resolve(__dirname, '../lib/plugin/egg-schedule')
  // package: "egg-schedule"
}

exports.start = {
  enable: true,
  path: path.resolve(__dirname, '../lib/plugin/egg-start')
  // package: "egg-start"
}