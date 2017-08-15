# Collo (Pronounced Call-o) | An npm package for managing collection functions 
Super lightweight package for dealing with in memory collections. It's like Mongoose and Lodash in one.
It's great for manipulation collections in a Redux store.

## Features


## Getting started
1. From Command Line run `npm i -S collo`

## Usage
### Commands

```
import Collo from 'collo';

const myCollection = [
    {
        id: 1,
        name: 'pigeon'
    },
    {
        id: 2,
        name: 'badger'
    },
    {
        id: 3,
        name: 'squirrel'
    }
];

const collection = new Collo(myCollection);

```

#### `collection.list()`
List all the items in the collection instance


#### `collection.findWhere({id:1})`
Pluck an item by key/value


#### `collection.insertAtIndex({
        id: 3,
        name: 'Paki Paki'
    },index)`
Splice in an item at a certain index


#### `collection.upsert({id:3},{
        id: 3,
        name: 'Paki Paki'
    })`
Super handy upsert function. Id the key/value is found then the data is updated, otherwise it's pushed into the stack


#### `collection.updateWhere({id:2},{
        id: 2,
        name: 'Mama Chiggy'
    })`
Update an item where the key/value match an item in the collection

#### `collection.removeWhere({id:3})`
Remove an item where the key/value match an item in the collection


#### Contributions
If you would like to contribute, find an issue, or have a feature request, create an Issue.
Also, see CONTRIBUTORS.md for contribution instructions