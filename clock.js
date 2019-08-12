/* This file exists for the sake of something that can be measured: even if time is "abstract" */
// if the concept of "exist" then there can "exist" time 

export default function () {
  if (Boolean(require('./exist'))) {
    return new Date().getMilliseconds()
  }
  return null
}