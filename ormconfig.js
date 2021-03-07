const { merge } = require('webpack-merge');
const commonConfig = require('./orm.config.common');

if(process.env.AMBIENTE === "PRODUCTION") {
  module.exports = merge(commonConfig, {
    "url": process.env.DATABASE_URL,
  });
} else {
  module.exports = merge(commonConfig, {
    "type": "postgres",
    "host": "192.168.1.120",
    "username": "postgres",
    "password": "docker",
    "port": "5432",
    "database": "gostack_desafio06",
  });
}
