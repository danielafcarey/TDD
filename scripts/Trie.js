import Node from './Node.js'

export default class Trie {
  constructor() {
    this.root = new Node();
    this.wordCount = 0;
  }

  insert(word) {
    let currentNode = this.root;

    for (let i = 0; i < word.length; i++) {
      // if the current node children obj contains a key of the letter 
      if (currentNode.children[word[i]]) {
        // move the current node to that letter obj value
        currentNode = currentNode.children[word[i]];

      // else it is not yet in the currentNode.children, so add it
      } else {
        // currentNode Obj key with letter: {new node obj}
        currentNode.children[word[i]] = new Node(word[i]);
        // and move the current node to that new obj
        currentNode = currentNode.children[word[i]];
      }

    }
    //after looping through whole word, you're at the end of the word
    currentNode.endOfWord = word;

    //change this.wordCount when it breaks out of for loop
    this.wordCount++;

  }

  count() {
    return this.wordCount;
  }

  suggest(prefix) {
    let currentNode = this.root;
    const suggestions = [];

    //traverse through the tree --> will go all the way down the left side first. 
    // --> need to find a way to set the counter at a split

    //OR can traverse with BFS that searches each value in the .children property to see if it.endOfWord is null, pushes if it so, then does the same for the next item in the

    // if (currentNode.endOfWord) {
    //   suggestions.push(currentNode.endOfWord)
    // }

  }

  populate(dataSet) {
    dataSet.forEach(data => {
      this.insert(data);
    });
  }

}