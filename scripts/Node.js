export default class Node {
  constructor(data = null) {
    this.data = data;
    this.children = {};
    this.endOfWord = null;
  }
}

//key is the letter, value is new Node obj

//should this.endOfWord be a boolean? 
  // what if it was the word so you could just search through for all end of words and add to an array if not null?