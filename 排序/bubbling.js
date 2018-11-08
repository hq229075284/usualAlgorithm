// 冒泡排序

(function () {
  var testData = createTestData()
  
  function sort(data = []) {
    data = Object.assign([], data)
    for (sp = data.length - 2; sp >= 1; sp--) {
      for (mp = 0; mp <= sp; mp++) {
        if (data[mp] > data[mp + 1]) {
          var temp = data[mp]
          data[mp] = data[mp + 1]
          data[mp + 1] = temp
        }
      }
    }
    return data
  }

  console.log('----------------------------------bubbling')
  console.log('testData->', testData)
  console.log(sort(testData))
  console.log('----------------------------------')
})()
