const { resolve } = require("path");

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("components", resolve("src/components"))
      .set("assets", resolve("src/assets"))
      .set("views", resolve("src/views"));
  },
};
