const path = require("path");
const fs = require("fs");

const rewireCssModules = require('react-app-rewire-css-modules');
const rewireBabelLoader = require("react-app-rewire-babel-loader");

// helpers
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = function override(config, env) {
  config = rewireCssModules(config, env);
  config = rewireBabelLoader.include(
    config,
    resolveApp("node_modules/shared")
  );
  return config;
};