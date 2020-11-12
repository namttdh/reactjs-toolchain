const base = require('./webpack.base');

base.mode = 'development';
base.devtool = 'eval-source-map';
base.stats = 'none';

module.exports = base;
