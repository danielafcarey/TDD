class Node {
  constructor(data = null) {
    this.data = data;
    this.children = {};
    this.word = null;
    this.weight = 0;
  }
}

module.exports = Node;