// 插入排序

(function () {
  var testData = createTestData()

  function sort(data = []) {
    for (let i = 1; i < data.length; i++) {
      const temp = data[i]
      let j = i
      while (j > 0 && data[j - 1] > temp) {
        data[j] = data[j - 1]
        j -= 1
      }
      data[j] = temp
    }
    return data
  }

  console.log('----------------------------------inset')
  console.log('testData->', testData)
  console.log(sort(testData))
  console.log('----------------------------------')
})()