function deepCompare(arg1, arg2, path) {
  const type1 = typeof arg1
  const type2 = typeof arg2
  if (type2 !== 'object' && type1 !== 'object') {
    if (arg1 === arg2) return []
    return [{ path, isSame: false, action: setAction(arg1, arg2) }]
  } else {
    const _type1 = Object.prototype.toString.call(arg1)
    const _type2 = Object.prototype.toString.call(arg2)
    if (_type1 === _type2) {
      const allKeys = Array.from(new Set(getObjectKeys(arg1).concat(getObjectKeys(arg2))))
      const allChangeState = allKeys.reduce((prev, key) => {
        const _path = [...path]
        _path.push(key)
        return prev.concat(deepCompare(arg1[key], arg2[key], _path))
      }, [])
      return allChangeState
    } else {
      return [{ path, isSame: false, action: setAction(arg1, arg2) }]
    }
  }
}

function getObjectKeys(obj) {
  if (typeof obj === 'object') {
    return Object.keys(obj).filter(key => obj.hasOwnProperty(key))
  } else {
    throw new Error('obj')
  }
}

function setAction(prevValue, nextValue) {
  if (prevValue !== undefined && nextValue === undefined) {
    return 'delete'
  }
  if (prevValue === undefined && nextValue !== undefined) {
    return 'add'
  }
  return 'modify'
}

// test
var a = {
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
  }
}

var b = {
  a: {
    b: {
      c: {
        version: "1.0.0.1",
        name: "李鹏--> QQ:3206064928"
      }
    }
  }
}

var result = deepCompare(a, b, [])
console.log(result)