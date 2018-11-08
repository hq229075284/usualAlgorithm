// {
//   key:'',
//   paths:[{key,paths,value}],
//   value:''
// }

// var allNodes = []

function e2e(startNode, endNode) {
  const allPaths = getAllPaths(startNode)
  return allPaths.filter(paths => paths[paths.length - 1] === endNode.key)
}

class Graph {
  constructor() {
    this.allPaths = []
    this.allNodes = []
  }

  clearAllPaths() {
    this.allPaths = []
  }

  getNode(key) {
    return this.allNodes.filter(node => node.key === key)[0]
  }

  getPath(currentNode, path = []) {
    path.push(currentNode.key)
    if (path.length > 1) {
      this.allPaths.push(path)
    }
    currentNode.paths.map((node) => {
      if (path.indexOf(node.key) > -1) {// 构成环
        return
      }
      this.getPath(node, [...path])
    })
  }

  addNode(key, value) {
    this.allNodes.push({ key, value, paths: [] })
  }

  link(key1, key2) {
    const node1 = this.allNodes.filter((node) => node.key === key1)[0]
    const node2 = this.allNodes.filter((node) => node.key === key2)[0]
    if (!node1 || !node2) return
    if (node1.paths.indexOf(node2) === -1) {
      node1.paths.push(node2)
    }
    if (node2.paths.indexOf(node1) === -1) {
      node2.paths.push(node1)
    }
  }
}

const g = new Graph()
g.addNode('k1', 'k1')
g.addNode('k2', 'k2')
g.addNode('k3', 'k3')
g.addNode('k4', 'k4')
g.addNode('k5', 'k5')
g.addNode('k6', 'k6')
g.link('k1', 'k2')
g.link('k1', 'k3')
g.link('k1', 'k6')
g.link('k2', 'k3')
g.link('k3', 'k6')
// g.link('k2', 'k4')
// g.link('k3', 'k4')
g.link('k3', 'k5')
g.link('k6', 'k5')
g.link('k4', 'k5')

g.getPath(g.getNode('k1'))

console.log(g.allPaths)

// function getAllPaths(startNode) {
//   const allPaths = getPath(startNode, [])
//   return allPaths
// }

// function getPath(currentNode, path, endNode) {
//   // if (currentNode.key === endNode.key && path.length === 0) {
//   //   return path
//   // }
//   path.push(currentNode.key)
//   let hadLoop = false
//   return currentNode.paths.reduce((prev, node) => {
//     if (path.indexOf(node.key) > -1) {// 构成环
//       if (hadLoop) return prev
//       hadLoop = true
//       prev.push(path)
//       return prev
//     }
//     return prev.concat(getPath(node, [...path], endNode))
//   }, [])
// }