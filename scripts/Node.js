class Node {
  constructor(data = null) {
    this.data = data;
    this.children = {};
    this.endOfWord = false;
  }
}

module.exports = Node;