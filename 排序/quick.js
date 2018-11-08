// 快速排序

(function () {
  var testData = createTestData()

  function sort(data = []) {
    if (data.length <= 1) return data
    const baseItem = data[0]
    const less = []
    const more = []
    for (let i = 1; i < data.length; i++) {
      if (data[i] > baseItem) {
        more.push(data[i])
      } else {
        less.push(data[i])
      }
    }
    return sort(less).concat([baseItem]).concat(sort(more))
  }

  console.log('----------------------------------quick')
  console.log('testData->', testData)
  console.log(sort(testData))
  console.log('----------------------------------')
})()