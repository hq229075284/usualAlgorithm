const interval = 1000
const countDown = 5000
const startTime = getNow()
let count = 0
setTimeout(countDown, interval)

function getNow() {
  return Date.now().valueOf()
}

function countDownRange() {
  count++
  if (count * interval >= countDown) {// 完成计时
    return
  }
  const offset = getNow() - (startTime + count * interval)
  let nextTime = interval - offset
  if (offset > interval) {// 当此次计时执行后，剩余未被计时的时间大于一个计时区间时（出现在此异步调用被其它异步或者同步操作阻塞时间大于一个计时区间），需要马上记录下一个时间段
    nextTime = 0
  }
  setTimeout(countDownRange, interval)
}

function countDownByMoment() {
  let past = getNow() - startTime
  if (past > countDown) {
    past = countDown
  }
  count = Math.floor(past / interval)
  if (past >= countDown) {
    return
  }
  setTimeout(countDownByMoment, interval / 2)
}

setTimeout(countDownByMoment, interval / 2)