import { assert, expect } from 'chai';
import Trie from '../scripts/Trie.js';
import fs from 'fs';
const text = "/usr/share/dict/words";
const dictionary = fs.readFileSync(text).toString().trim().split('\n');

describe('Trie', () => {
  it('should instantiate a new trie', () => {
    const completion = new Trie();

    assert.isObject(completion);
  });

  it('should be able to take in a word and keep track of how many words have been inserted', () => {
    const completion = new Trie();

    completion.insert('pupper');
    let wordCount = completion.count();
    assert.equal(wordCount, 1);

    completion.insert('doggo');
    wordCount = completion.count();
    assert.equal(wordCount, 2);

    console.log(JSON.stringify(completion, null, 2))
  });

  it('should return an array of suggestions when given a prefix', () => {
    const completion = new Trie();

    completion.insert('pupper');
    completion.insert('pupperino');
    let suggestions = completion.suggest('pup');

    assert.equal(suggestions, ['pupper', 'pupperino'])
  });

  it('should take in a data set of words and add them to the trie', () => {
    const completion = new Trie();

    completion.populate(dictionary);
    let wordCount = completion.count()
    assert.equal(wordCount, 235886)

  });

  it('should return an array of suggestions from that data set', () => {
    const completion = new Trie();

    completion.populate(dictionary);
    let suggestions = completion.suggest('Zyz');

    assert.equal(suggestions, ['Zyzomys', 'Zyzzogeton'])
  });


});