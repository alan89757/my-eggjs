// 写log
const fs = require("fs");
const path = require("path")

module.exports = app=> {
  return {
    schedule: {
      interval: '10s',
      type: 'all'
    },
    async task(ctx) {
      let base = app.config.schedule.basePath;
      base = base || `${app.baseDir}/logs/${app.name}`;
      console.log(base)
      const filePath = path.resolve(base, app.config.schedule.fileName);
      const rStream = fs.createReadStream(filePath);
      const target = path.resolve(app.baseDir, 'target.log');
      const wStream = fs.createWriteStream(target);
      await rStream.pipe(wStream);
  
    }
  }
}