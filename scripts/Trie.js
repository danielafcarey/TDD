const Node = require('./Node.js');

class Trie {
  constructor() {
    this.root = new Node();
    this.wordCount = 0;
    this.suggestions = [];
  }

  insert(word) {
    word = word.toLowerCase();
    let currentNode = this.root;

    if (typeof word !== 'string') {
      console.error(`Expected ${word} at function insert to be a string.`);
      return;
    }

    for (let i = 0; i < word.length; i++) {
      if (!currentNode.children[word[i]]) {
        currentNode.children[word[i]] = new Node(word[i]);
      }
      currentNode = currentNode.children[word[i]];
    }

    if (!currentNode.word) {
      currentNode.word = word;
      this.wordCount++;
    }
  }

  count() {
    return this.wordCount;
  }

  populate(dataSet) {
    if (!Array.isArray(dataSet)) {
      console.error(`Expected argument at function populate to be an array.`);
      return;
    }

    dataSet.forEach(data => this.insert(data));
  }

  suggest(prefix) {
    prefix = prefix.toLowerCase();
    this.suggestions = [];
    let startNode = this.findStartNode(prefix);

    if (!startNode) {
      return null;
    }
    this.findWordSuggestions(startNode);
    this.suggestions.sort((a, b) => b.weight - a.weight);

    return this.suggestions.map(node => node.word);
  }

  findStartNode(word) {
    let currentNode = this.root;

    for (let i = 0; i < word.length; i++) {
      if (currentNode.children[word[i]]) {
        currentNode = currentNode.children[word[i]];
      } else {
        return null;
      }
    }

    return currentNode;
  }

  findWordSuggestions(startNode) {
    if (startNode.word) {
      this.suggestions.push(startNode);
    }

    Object.keys(startNode.children).forEach(childData => { 
      let currentNode = startNode.children[childData];

      this.findWordSuggestions(currentNode);
    });
  }

  delete(word) {
    word = word.toLowerCase();
    let currentNode = this.findStartNode(word);

    if (currentNode && currentNode.word) {
      currentNode.word = null;
      this.wordCount--;
    }
  }

  select(word) {
    let currentNode = this.findStartNode(word);

    if (currentNode && currentNode.word) {
      currentNode.weight++;
    }
  }

}

module.exports = Trie;