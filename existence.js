/* If "exist", then all the exists "exist" */
const exist = require('./exist')
export default exist
  ? (function () {
      this.e = {exist}
      return {
        existence = function (a) {
          if (a) {
            if (!`${a}` in this.e) this.e[`${a}`] = a
          } return this.e
        }
      }
    }) ()
  : null