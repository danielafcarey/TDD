const assert = require('chai').assert;
const expect = require('chai').expect;
const Trie = require('../scripts/Trie.js');
const fs = require('fs');
const text = "/usr/share/dict/words";
const dictionary = fs.readFileSync(text).toString().trim().split('\n');

describe('Trie', () => {
  it('should instantiate a new trie', () => {
    const trie = new Trie();

    assert.isObject(trie);
  });

  it('should be able to take in a word and keep track of how many words have been inserted', () => {
    const trie = new Trie();

    trie.insert('pupper');
    let wordCount = trie.count();
    assert.equal(wordCount, 1);

    trie.insert('pupperino');
    wordCount = trie.count();
    assert.equal(wordCount, 2);

  });

  it('should not increase the word count if the word already exists in the trie', () => {
    const trie = new Trie();

    trie.insert('pupper');
    let wordCount = trie.count();
    assert.equal(wordCount, 1);

    trie.insert('pupper');
    wordCount = trie.count();
    assert.equal(wordCount, 1);

  });

  it('should return an array of suggestions when given a prefix', () => {
    const trie = new Trie();

    trie.insert('pupper');
    trie.insert('pupperino');
    trie.insert('pup');
    trie.insert('pepper');
    trie.insert('pupperinos');
    let suggestions = trie.suggest('pu');

    assert.deepEqual(suggestions, ['pup', 'pupper', 'pupperino', 'pupperinos'])
  });

  it('should return null if no words match the suggested prefix', () => {
    const trie = new Trie();

    trie.insert('pupper');
    trie.insert('pupperino');
    trie.insert('pup');
    trie.insert('pepper');
    trie.insert('pupperinos');
    let suggestions = trie.suggest('dog');

    assert.equal(suggestions, null)
  });

  it('should take in a large data set of words and add them to the trie', () => {
    const trie = new Trie();

    trie.populate(dictionary);
    let wordCount = trie.count()
    assert.equal(wordCount, 235886)

  });

  it('should return an array of suggestions from that large data set', () => {
    const trie = new Trie();

    trie.populate(dictionary);
    let suggestions = trie.suggest('Zyz');

    assert.deepEqual(suggestions, ['Zyzomys', 'Zyzzogeton'])
  });

  //add test to check that inserting duplicate word doesn't increase word count

});







// console.log(JSON.stringify(trie, null, 2))