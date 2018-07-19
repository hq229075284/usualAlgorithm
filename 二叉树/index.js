function addNode(node) {
  if (this.root) {
    var currentNode = this.root
    while (true) {
      if (this.addRule(currentNode.value, node)) {
        if (currentNode.leftNode) {
          currentNode = currentNode.leftNode
        } else {
          currentNode.leftNode = {
            leftNode: null,
            rightNode: null,
            value: node
          }
          break
        }
      } else {
        if (currentNode.rightNode) {
          currentNode = currentNode.rightNode
        } else {
          currentNode.rightNode = {
            leftNode: null,
            rightNode: null,
            value: node
          }
          break
        }
      }
    }
  } else {
    this.root = {
      leftNode: null,
      rightNode: null,
      value: node
    }
  }
}

function findNode(root, conditionFn) {
  var result = []
  function _findNode(node) {
    if (node !== null) {
      // 中序
      _findNode(node.leftNode)
      if (conditionFn(node.value)) {
        result.push(node.value)
      }
      _findNode(node.rightNode)

      /* // 先序
      if (conditionFn(node.value)) {
        result.push(node.value)
      }
      _findNode(node.leftNode)
      _findNode(node.rightNode) */

      /* // 后序
      _findNode(node.leftNode)
      _findNode(node.rightNode)
      if (conditionFn(node.value)) {
        result.push(node.value)
      } */
    }
  }

  _findNode(root)
  return result
}

function getSmallestNode(currentSubtreeRootNode) {
  let minNode = currentSubtreeRootNode
  while (true) {
    if (minNode.leftNode) {
      minNode = minNode.leftNode
    } else {
      break
    }
  }
  return minNode
}

function removeNode(node, value, equalFn, conditionFn) {
  if (node) {
    if (equalFn(node, value)) {
      if (!node.leftNode && !node.rightNode) {
        return null
      }
      if (node.leftNode) {
        return node.leftNode
      }
      if (node.rightNode) {
        return node.rightNode
      }
      var rightMinNode = getSmallestNode(node.right)
      node.value = rightMinNode.value
      node.right = removeNode(node.right, rightMinNode.value, equalFn, conditionFn)
      return node
    }
    if (conditionFn(node.value, value)) {
      node.leftNode = removeNode(node.leftNode, value, equalFn, conditionFn)
      return node
    }
    node.rightNode = removeNode(node.rightNode, value, equalFn, conditionFn)
    return node
  }
  return null
}

function Tree(options) {
  this.root = null
  this.addNode = addNode
  this.findNode = (conditionFn) => findNode(this.root, conditionFn)
  this.addRule = function (currentNode, addNode) {
    return currentNode.id > addNode.id
  }
  this.compareRule = function (min, node) {
    return node.id < min
  }
}


const tree = new Tree()

tree.addNode({ id: 3 })
tree.addNode({ id: 2 })
tree.addNode({ id: 1 })
tree.addNode({ id: 4 })
tree.addNode({ id: 5 })

var findOne = tree.findNode(function (node) {
  return node.id > 3
})

console.log(findOne)
