// {
//   key:'',
//   isVisited:false,
//   paths:[{key,value,isVisited,paths}],
//   value:{}
// }

function Graphic() {
  this.start = null
  this.end = null
  this.addNode = addNode
  this.deleteNode = deleteNode
}

function relateNode(node, relatedKey) {
  if (this.start) {
    let query = [this.start]
    while (query.length > 0) {
      const one = query[0]
      if (one.isVisited) continue
      if (one.key === relatedKey) {
        // 找到关联的key
        one.paths.push(node)
        node.paths.push(one)
        break
      }
      one.isVisited = true
      if (one.paths.length > 0) {
        query.push.apply(query, one.paths)
      }
    }
  }
  return false
}

function addNode(key, nodeValue, relatedKey) {
  const node = { key, paths: [], value: nodeValue }
  if (!this.start) {
    this.start = node
  }
}

function deleteNode() { }
