const axios = require('axios').default

module.exports = axios.create({
  baseURL: 'https://echo-serv.tbxnet.com/v1/secret/',
  headers: { Authorization: 'Bearer aSuperSecretKey' }
})
