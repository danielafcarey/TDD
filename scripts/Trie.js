const Node = require('./Node.js')

class Trie {
  constructor() {
    this.root = new Node();
    this.wordCount = 0;
    this.suggestions = [];
  }

  insert(word) {
    word = word.toLowerCase();
    if (typeof word !== 'string') {
      console.error(`Expected ${word} at function insert to be a string.`)
      return;
    }

    let currentNode = this.root;

    for (let i = 0; i < word.length; i++) {
      if (!currentNode.children[word[i]]) {
        currentNode.children[word[i]] = new Node(word[i]);
      }
      currentNode = currentNode.children[word[i]];
    }

    if (!currentNode.endOfWord) {
      currentNode.endOfWord = true;
      this.wordCount++;
    }
  }

  count() {
    return this.wordCount;
  }

  suggest(prefix) {
    prefix = prefix.toLowerCase();
    this.suggestions = [];
    let startNode = this.findStartNode(prefix);
    if (!startNode) {return null};

    this.findWordSuggestions(startNode, prefix);
    return this.suggestions;
  }

  findStartNode(word) {
    let currentNode = this.root;

    for (let i = 0; i < word.length; i++) {
      if (currentNode.children[word[i]]) {
        currentNode = currentNode.children[word[i]]
      } else {
        return null;
      }
    }

    return currentNode
  }

  findWordSuggestions(startNode, prefix) {
    if (startNode.endOfWord) {
      this.suggestions.push(prefix)
    }

    Object.keys(startNode.children).forEach(childData => { 
      let currentNode = startNode.children[childData];
      this.findWordSuggestions(currentNode, prefix + childData)
    })
  } 

  populate(dataSet) {
    if (!Array.isArray(dataSet)) {
      console.error(`Expected argument at function populate to be an array.`)
      return;
    }

    dataSet.forEach(data => this.insert(data));
  }

  delete(word) {
    word = word.toLowerCase();
    let currentNode = this.findStartNode(word);
    if (currentNode && currentNode.endOfWord) {
        currentNode.endOfWord = false;
        this.wordCount--;
    }
  }

  // clusterTrie(currentNode = this.root) {
  //   Object.keys(currentNode.children).forEach(child => {
  //     if (Object.keys(currentNode[child].children).length === 1) {
  //       currentNode[child].data
  //     }
  //   })
  // }

}

module.exports = Trie;