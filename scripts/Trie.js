const Node = require('./Node.js')

class Trie {
  constructor() {
    this.root = new Node();
    this.wordCount = 0;
    this.suggestions = [];
  }

  insert(word) {
    let currentNode = this.root;

    for (let i = 0; i < word.length; i++) {
      if (!currentNode.children[word[i]]) {
        currentNode.children[word[i]] = new Node(word[i]);
      }
      currentNode = currentNode.children[word[i]];
    }

    if (currentNode.endOfWord) {
      return;
    } else {
      currentNode.endOfWord = true;
      this.wordCount++;
    }
    
  }

  count() {
    return this.wordCount;
  }

  suggest(prefix) {
    this.suggestions = [];
    let currentNode = this.root;

    for (let i = 0; i < prefix.length; i++) {
      if (currentNode.children[prefix[i]]) {
        currentNode = currentNode.children[prefix[i]]
      } else {
        return null;
      }
    }

    this.findWordSuggestions(currentNode, prefix);
    return this.suggestions;
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
    dataSet.forEach(data => this.insert(data));
  }

}

module.exports = Trie;