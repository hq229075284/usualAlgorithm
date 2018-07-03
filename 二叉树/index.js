var a = 1

function Tree(options) {
  this.root = null
  this.addNode = function (node) {
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
  this.findNode = function (conditionFn) {
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

    _findNode(this.root)
    return result
  }
  this.addRule = function (currentNode, addNode) {
    return currentNode.id > addNode.id
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
