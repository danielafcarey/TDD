const assert = require('chai').assert;
const expect = require('chai').expect;
const Trie = require('../scripts/Trie.js');
const fs = require('fs');
const text = "/usr/share/dict/words";
const dictionary = fs.readFileSync(text).toString().trim().split('\n');


describe('Trie', () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  });
  
  it('should have default properties of wordCount as 0 and suggestions as an empty array', () => {
    expect(trie.wordCount).to.equal(0);
    expect(trie.suggestions).to.be.empty;
  });

  it('should have a root node with default properties data as null, children as {}, and endOfWord as false', () => {
    expect(trie.root.data).to.equal(null);
    expect(trie.root.children).to.be.empty;
    expect(trie.root.endOfWord).to.equal(false);
  });


  describe('insert', () => {
    it('should be able to add a word to the tree', () => {
      trie.insert('hi');

      expect(trie.root.data).to.equal(null);
      expect(trie.root.children.h.data).to.equal('h');
      expect(trie.root.children.h.children.i.data).to.equal('i');
    });

    it('should be able to add multiple child nodes to a node', () => {
      trie.insert('hi');
      trie.insert('ho');
      trie.insert('he');

      expect(trie.root.children.h.data).to.equal('h');
      expect(trie.root.children.h.children).to.have.property('i');
      expect(trie.root.children.h.children).to.have.property('o');
      expect(trie.root.children.h.children).to.have.property('e');
    });

    it('should not add a new node as a child if the letter already exists as a child node', () => {
      trie.insert('hi');
      trie.insert('high');

      let hNodeChildrenObjectSize = Object.keys(trie.root.children.h.children).length;

      expect(trie.root.children.h.data).to.equal('h');
      expect(hNodeChildrenObjectSize).to.equal(1);
    });

    it('should add a word of length 1', () => {
      trie.insert('a');

      expect(trie.root.children.a.data).to.equal('a')
      expect(trie.root.children.a.endOfWord).to.equal(true);
    });

  });


  describe('count', () => { 
    it('should be able to keep track of how many words have been inserted', () => {
      trie.insert('pupper');
      let wordCount = trie.count();
      expect(wordCount).to.equal(1);

      trie.insert('pupperino');
      wordCount = trie.count();
      expect(wordCount).to.equal(2);
    });

    it('should not increase the word count if the word already exists in the trie', () => {
      trie.insert('pupper');
      let wordCount = trie.count();
      expect(wordCount).to.equal(1);

      trie.insert('pupper');
      wordCount = trie.count();
      expect(wordCount).to.equal(1);
    });

  });


  describe('suggest', () => {
    it('should return an array of suggestions when given a prefix', () => {
      trie.insert('pupper');
      trie.insert('pupperino');
      trie.insert('pup');
      trie.insert('pepper');
      trie.insert('pupperinos');
      let suggestions = trie.suggest('pu');

      expect(suggestions).to.deep.equal(['pup', 'pupper', 'pupperino', 'pupperinos']);
    });

    it('should return null if no words match the suggested prefix', () => {
      trie.insert('pupper');
      trie.insert('pupperino');
      trie.insert('pup');
      trie.insert('pepper');
      trie.insert('pupperinos');
      let suggestions = trie.suggest('dog');

      expect(suggestions).to.equal(null);
    });

    it('should include the suggested prefix if it exists in the trie as a word', () => {
      trie.insert('at');
      trie.insert('ate');

      let suggestions = trie.suggest('at');

      expect(suggestions).to.deep.equal(['at', 'ate']);
    })

    it('should be able to return a word that is a child of the root', () => {
      trie.insert('a');
      expect(trie.root.children.a.data).to.equal('a');
      expect(trie.root.children.a.endOfWord).to.equal(true);

      let suggestions = trie.suggest('a');
      expect(suggestions).to.deep.equal(['a']);
    })

  });


  describe('populate', () => {
    it('should take in a large data set of words and add them to the trie', () => {
      trie.populate(dictionary);
      let wordCount = trie.count();

      expect(wordCount).to.equal(235886);

    });

    it('should return an array of suggestions from that large data set', () => {
      trie.populate(dictionary);
      let suggestions = trie.suggest('Zyz');

      expect(suggestions).to.deep.equal(['Zyzomys', 'Zyzzogeton']);
    });

  });
  

  describe('delete', () => {
    it('should remove a word from the trie', () => {
      trie.insert('hi');
      expect(trie.root.children.h.children.i.endOfWord).to.equal(true);

      trie.delete('hi');
      expect(trie.root.children.h.children.i.endOfWord).to.equal(false);

      let suggestions = trie.suggest('hi');
      expect(suggestions).to.deep.equal([]);
    });

    it('should update the wordCount when a word is deleted', () => {
      trie.insert('hi');
      expect(trie.wordCount).to.equal(1);

      trie.delete('hi')
      expect(trie.wordCount).to.equal(0);
    });

    it('should not update the wordCount if the word was not already in the trie', () => {
      trie.insert('hi');
      expect(trie.wordCount).to.equal(1);

      trie.delete('hill');
      expect(trie.wordCount).to.equal(1);
    });

  });


});







// console.log(JSON.stringify(trie, null, 2))