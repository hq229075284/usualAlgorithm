var targetObj = {
  a: {
    b: {
      c: {
        d: {
          e: {
            name: "百度"
          }
        },
        l: {
          name: "李鹏--> QQ:3206064928"
        }
      }
    }
  },
  d: "90",
  e: "90",
  l: {
    a: {
      b: {
        c: {
          version: "1.0.0.1",
          name: "李鹏--> QQ:3206064928"
        }
      }
    }
  },
  f: {
    name: "李鹏--> QQ:3206064928",
    update: "2017年03月20日"
  }
}
var name = '李鹏'
var reg = new RegExp(name)

function find(targetObj, reg) {
  var result = []
  for (var i in targetObj) {
    var value = targetObj[i]
    if (typeof value === 'string') {
      if (reg.test(value)) {
        result.push([i])
      }
    } else {
      var finded = find(targetObj[i], reg)

      result = result.concat(finded.map(function (v, index, finded) {
        v.push(i)
        return v
      }))
    }
  }
  return result
}

var result = find(targetObj, reg)

result.map(function (arr, index) {
  console.log(arr.reverse().join("->"))
})
