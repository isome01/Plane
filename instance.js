module.exports = function (a) {
  const exist = require('./exist')
  return exist ? {exist, instance: a} : null
}