/* for the sake of simplicity use only single letters*/
/* if "time", then occurence */
/* whatever "happens" in occurence will "use" "time" */
export default function (a) {
  const time = require('./clock')
  return time ? {
    occurance: a,
    time,
    past: 'occurance' in a ? {...a} : {}
  } : null
}