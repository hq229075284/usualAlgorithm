// struct ->

// {
//   key:'',
//   isVisited:false,
//   paths:[{key,value,isVisited,paths}],
//   value:{}
// }

function Graphic() {
  this.start = null
  this.end = null
  this.nodes = []
  // this.addNode = addNode
  // this.removeNode = removeNode
  // this.relateNode = relateNode
  // this.hasRelation = hasRelation
}

Graphic.prototype = {
  addNode: addNode,
  removeNode: removeNode,
  relateNode: relateNode,
  hasRelation: hasRelation,
}

// 广度遍历
function hasRelation(startKey, relatedKey) {
  var startNode = this.nodes.filter(one => one.key === startKey)[0]
  if (startNode) {
    let query = [startNode]
    let hasRelation = false
    while (query.length > 0) {
      const one = query.pop()
      if (one.isVisited) continue
      if (one.key === relatedKey) {
        hasRelation = true
        break
      }
      one.isVisited = true
      one.paths.forEach(node => {
        if (!node.isVisited) {
          query.push(node)
        }
      })
    }
    // reset isVisited state
    this.nodes.forEach(node => node.isVisited = false)
    return hasRelation
  }
  return false
}

// 广度遍历
function relateNode(node, relatedKey) {
  if (this.start) {
    let query = [this.start]
    let isSuccess = false
    while (query.length > 0) {
      const one = query.pop()
      if (one.isVisited) continue
      if (one.key === relatedKey) {
        // 找到关联的key
        one.paths.push(node)
        node.paths.push(one)
        isSuccess = true
        break
      }
      one.isVisited = true
      one.paths.forEach(node => {
        if (!node.isVisited) {
          query.push(node)
        }
      })
    }
    // reset isVisited state
    this.nodes.forEach(node => node.isVisited = false)
    return isSuccess
  }
  return false
}

function addNode(key, nodeValue, relatedKey) {
  const node = { key, paths: [], value: nodeValue }
  if (!this.start) {
    this.start = node
  }
  this.nodes.push(node)
  if (relatedKey) {
    this.relateNode(node, relatedKey)
  }
}

function removeNode(removeKey) {
  let deleteIndex = this.nodes.findIndex(node => node.key === removeKey)
  if (deleteIndex > -1) {
    let removeNode = this.nodes.splice(deleteIndex, 1)
    removeNode.paths.forEach(anoterNode => {
      anoterNode.paths = anoterNode.paths.filter(node => node.key !== removeKey)
    })
  }
  return true
}
