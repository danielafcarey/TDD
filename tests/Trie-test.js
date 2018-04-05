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

  it('should have a root node with default properties data as null, children as {}, word as null, and weight as 0', () => {
    expect(trie.root.data).to.equal(null);
    expect(trie.root.children).to.be.empty;
    expect(trie.root.word).to.equal(null);
    expect(trie.root.weight).to.equal(0);
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
      expect(trie.root.children.a.word).to.equal('a');
    });

    it('should change the last letter node property endOfWord to true when finished adding a word to the trie', () => {
      trie.insert('hi');

      expect(trie.root.children.h.word).to.equal(null);
      expect(trie.root.children.h.children.i.word).to.equal('hi');
    });

    it('should update the wordCount after a word is inserted into the trie', () => {
      trie.insert('pupper');
      expect(trie.wordCount).to.equal(1);

      trie.insert('pupperino');
      expect(trie.wordCount).to.equal(2);
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


  describe('count', () => { 
    it('should return the total word count', () => {
      trie.insert('pupper');
      let wordCount = trie.count();
      expect(wordCount).to.equal(1);

      trie.insert('pupperino');
      wordCount = trie.count();
      expect(wordCount).to.equal(2);

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
      expect(trie.root.children.a.word).to.equal('a');

      let suggestions = trie.suggest('a');
      expect(suggestions).to.deep.equal(['a']);
    })

    it('should be able to find a prefix of any case in the trie', () => {
      trie.insert('HI');

      let suggestions = trie.suggest('hi');
      expect(suggestions).to.deep.equal(['hi']);

      suggestions = trie.suggest('HI');
      expect(suggestions).to.deep.equal(['hi']);
    });

  });


  describe('populate', () => {
    it('should take in a large data set of words and add them to the trie', () => {
      trie.populate(dictionary);
      let wordCount = trie.count();

      expect(wordCount).to.equal(234371);

    });

    it('should return an array of suggestions from that large data set', () => {
      trie.populate(dictionary);
      let suggestions = trie.suggest('Zyz');

      expect(suggestions).to.deep.equal(['zyzomys', 'zyzzogeton']);
    });

  });
  

  describe('delete', () => {
    it('should remove a word from the trie', () => {
      trie.insert('hi');
      expect(trie.root.children.h.children.i.word).to.equal('hi');

      trie.delete('hi');
      expect(trie.root.children.h.children.i.word).to.equal(null);

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


  describe('select', () => {
    it('should update the weight property for that word', () => {
      trie.populate(dictionary);

      expect(trie.root.children.d.children.o.children.g.weight).to.equal(0);
      trie.select('dog');
      expect(trie.root.children.d.children.o.children.g.weight).to.equal(1);
    });

    it('should prioritize most commonly selected words', () => {
      trie.populate(dictionary);
      trie.select('dog');

      let suggestions = trie.suggest('do');
      expect(suggestions[0]).to.equal('dog');
    });

  });

});

