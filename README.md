# Collo | An npm package for managing collection functions 
(Pronounced Call-O)! 
Super lightweight package for dealing with in memory collections. It's like Mongoose and Lodash in one. It's like Collections Lodash [Col Lo].
It's great for manipulation collections stored in a Redux store.


## Getting started
1. From Command Line run `npm i -S collo`


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

## Usage
To Promisify the response : After you instantiate Collo, and before you use the api, trigger promisification

```
const collection = new Collo(myCollection);

collection.promisify();

collection.list()
    .then(items=>console.log(items))
    .catch(err=>console.log(err));
```

#### collection.promisify
Promisify the responses

```
collection.promisify()
```

#### collection.unPromisify
Un promisify the responses. So normal returns are triggered on api calls

```
collection.unPromisify()
```

#### collection.getTheIndexOf
Get the index of an item by key/value

```
collection.getTheIndexOf({id:1})
```

#### collection.list
List all the items in the collection instance

```
collection.list()
```


#### collection.findWhere
Pluck an item by key/value

```
collection.findWhere({id:1})
```

#### collection.exists
Return a Boolean true if the item is in the collection, or false if not

```
collection.exists({id:1})
```

#### collection.insert
Insert an item at the end of the stack

```
collection.insert({
    id: 3,
    name: 'Paki Paki'
})
```

#### collection.insertAtIndex
Splice in an item at a certain index

```
collection.insertAtIndex({
    id: 3,
    name: 'Paki Paki'
},index)
```


#### collection.upsert
Super handy upsert function. If the key/value is found then the data is updated, otherwise it's pushed into the stack

```
collection.upsert({id:3},{
    id: 3,
    name: 'Paki Paki'
})
```


#### collection.updateWhere
Update an item where the key/value match an item in the collection

```
collection.updateWhere({id:2},{
    id: 2,
    name: 'Mama Chiggy'
})
```

#### collection.removeWhere
Remove an item where the key/value match an item in the collection

```
collection.removeWhere({id:3})
```


#### Contributions
If you would like to contribute, find an issue, or have a feature request, create an Issue.
Also, see CONTRIBUTORS.md for contribution instructions