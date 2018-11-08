// 选择排序

(function () {
  var testData = createTestData()

  function sort(data=[]) {
    data = Object.assign([], data)
    for (var sp = 0; sp < data.length - 1; sp++) {
      for (var mp = sp + 1; mp < data.length; mp++) {
        if (data[mp] < data[sp]) {
          var temp = data[sp]
          data[sp] = data[mp]
          data[mp] = temp
        }
      }
    }
    return data
  }

  console.log('----------------------------------selection')
  console.log('testData->', testData)
  console.log(sort(testData))
  console.log('----------------------------------')
})()