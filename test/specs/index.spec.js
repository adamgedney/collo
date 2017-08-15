import { expect } from 'chai';

import {Collection} from 'Src/index.js';

const c = [
    {
      id: 1,
      name: 'Adam'
    },
    {
      id: 2,
      name: 'Juliana'
    }
  ],
  collection = new Collection(c);

console.log(collection);

// list
describe('The list fn ', () => {
  it('should return the same collection', () => {
    expect(collection.list()).to.equal(c);
  });
});

// findWhere
describe('The findWhere fn ', () => {
  it('should return the Adam object', () => {
  expect(collection.findWhere('id',1)).to.deep.equal({
    id: 1,
    name: 'Adam'
  });
});
});

