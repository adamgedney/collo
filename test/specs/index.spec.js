import { expect } from 'chai';
import Collo from 'Src/index.js';
//import Collo from 'Lib/index.min.js';

const c = [
    {
      id: 1,
      name: 'Adam'
    },
    {
      id: 2,
      name: 'Juliana'
    }
];

const promisify = false;
const collection = new Collo(c,{promisify});

//console.log('COLLECTION************',collection.prototype);

// list
describe('The list fn', () => {
	it('should return the same collection', () => {
		if(!promisify) {
			expect(collection.list()).to.equal(c);
		}else{
			collection
				.list()
				.then(res=>{
					expect(res).to.equal(c);
				});
		}
	});
});


// findWhere
describe('The findWhere fn', () => {
	it('should return the Adam object', () => {
		if(!promisify){
			expect(collection.findWhere({id:1}))
				.to
				.deep
				.equal({
					id: 1,
					name: 'Adam'
				});

		}else{
			collection.findWhere({id:1})
				.then(res=>{
					expect(res)
						.to
						.deep
						.equal({
							id: 1,
							name: 'Adam'
						});
				});
		}
	});
});

describe('The findWhere fn', () => {
	it('should return null given a bad input', () => {
		if(!promisify) {
			expect(collection.findWhere([]))
				.to
				.deep
				.equal(null);
		}else{
			collection
				.findWhere([])
				.then(res=>{
					expect(res)
						.to
						.deep
						.equal(null);
				});
		}
	});
});

// exists
describe('The exists fn', () => {
	it('should return true', () => {
		if(!promisify) {
			expect(collection.exists({id: 2}))
				.to
				.equal(true);
		}else{
			collection.exists({id:2})
				.then(res=>{
					expect(res)
						.to
						.equal(true);
				});
		}
	});
});


describe('The exists fn', () => {
	it('should return null given a bad input', () => {
		if(!promisify) {
			expect(collection.exists([]))
				.to
				.deep
				.equal(null);
		}else{
			collection.exists([])
				.then(res=>{
					expect(res)
						.to
						.equal(null);
				});
		}
	});
});

// insert
describe('The insert fn', () => {
	it('should return the collection with one more item in it', () => {
		let _c = c;

		_c.push({
			id: 3,
			name: 'Paki Paki'
		});

		if(!promisify) {
			expect(collection.insert({
				id  : 3,
				name: 'Paki Paki'
			}))
				.to
				.deep
				.equal(_c);
		}else{
			collection.insert({
				id: 3,
				name: 'Paki Paki'
			}).then(res=>{
				expect(res)
					.to
					.deep
					.equal(_c);
			});
		}
	});
});


describe('The insert fn', () => {
	it('should return null given a bad input', () => {
		if(!promisify) {
			expect(collection.insert([]))
				.to
				.equal(null);
		}else{
			collection.insert([]).then(res=>{
				expect(res)
					.to
					.equal(null);
			});
		}
	});
});

//@TODO ******* Left off refactoring test body to conditionallly support promises
// insertAtIndex
if(!promisify){
	describe('The insertAtIndex fn', () => {
		it('should return the same collection as the test', () => {
			let _c = c;
			const index = 1;

			_c.splice(index,0,{
				id: 5,
				name: 'Mirom'
			});

			expect(collection.insertAtIndex({
				id: 3,
				name: 'Paki Paki'
			},index))
				.to
				.deep
				.equal(_c);
		});
	});
}else{
	describe('The insertAtIndex fn', () => {
		it('should be thenable', () => {
			let _c = c;
			const index = 1;

			_c.splice(index,0,{
				id: 5,
				name: 'Mirom'
			});

			collection.insertAtIndex({
				id: 3,
				name: 'Paki Paki'
			},index)
				.then(res=>{
					expect(res)
						.to
						.deep
						.equal(_c);
				});
		});
	});
}

describe('The insertAtIndex fn', () => {
	it('should return null given a bad input', () => {
		expect(collection.insertAtIndex([]))
			.to
			.deep
			.equal(null);
	});
});

// upsert not found
if(!promisify){
	describe('The upsert [NO found item] fn', () => {
		it('should return the same collection as the input plus the new item', () => {
			const collection = new Collo([
				{
					id: 1,
					name: 'Adam'
				},
				{
					id: 2,
					name: 'Juliana'
				}
			]);

			let _c = [
				{
					id: 1,
					name: 'Adam'
				},
				{
					id: 2,
					name: 'Juliana'
				},
				{
					id: 3,
					name: 'Paki Paki'
				}
			];

			expect(collection.upsert({id:3},{
				id: 3,
				name: 'Paki Paki'
			}))
			.to
			.deep
			.equal(_c);
		});
	});
}else{
	describe('The upsert [NO found item] fn', () => {
		it('should be thenable and return the same collection as the input plus the new item', () => {
			const collection = new Collo([
				{
					id: 1,
					name: 'Adam'
				},
				{
					id: 2,
					name: 'Juliana'
				}
			]);

			let _c = [
				{
					id: 1,
					name: 'Adam'
				},
				{
					id: 2,
					name: 'Juliana'
				},
				{
					id: 3,
					name: 'Paki Paki'
				}
			];

			collection.upsert({id:3},{
				id: 3,
				name: 'Paki Paki'
			})
			.then(res=>{
				expect(res)
					.to
					.deep
					.equal(_c);
			});
		});
	});
}

// upsert item FOUND
if(!promisify){
	describe('The upsert [Item FOUND] fn', () => {
		it('should return the same collection as the input plus the new item', () => {
			const collection = new Collo([
				{
					id: 1,
					name: 'Adam'
				},
				{
					id: 2,
					name: 'Juliana'
				}
			]);

			let _c = [
				{
					id: 1,
					name: 'Adam'
				},
				{
					id: 2,
					name: 'Juliana & Mila'
				}
			];

			expect(collection.upsert({id:2},{
				id: 2,
				name: 'Juliana & Mila'
			}))
			.to
			.deep
			.equal(_c);
		});
	});
}else{
	describe('The upsert [Item FOUND] fn', () => {
		it('should be thenable and return the same collection as the input plus the new item', () => {
			const collection = new Collo([
				{
					id: 1,
					name: 'Adam'
				},
				{
					id: 2,
					name: 'Juliana'
				}
			]);

			let _c = [
				{
					id: 1,
					name: 'Adam'
				},
				{
					id: 2,
					name: 'Juliana & Mila'
				}
			];

			collection.upsert({id:2},{
				id: 2,
				name: 'Juliana & Mila'
			})
			.then(res=>{
				expect(res)
					.to
					.deep
					.equal(_c);
			});
		});
	});
}

describe('The upsert fn', () => {
	it('should return null given a bad input', () => {
		expect(collection.upsert([]))
			.to
			.deep
			.equal(null);
	});
});

// updateWhere
if(!promisify){
	describe('The updateWhere fn', () => {
		it('should return the same collection as the test', () => {
			const collection = new Collo([
				{
					id: 1,
					name: 'Adam'
				},
				{
					id: 2,
					name: 'Juliana'
				}
			]);

			let _c = [
				{
					id: 1,
					name: 'Adam'
				},
				{
					id: 2,
					name: 'Juliana & Mila'
				}
			];

			expect(collection.updateWhere({id:2},{
				id: 2,
				name: 'Juliana & Mila'
			}))
				.to
				.deep
				.equal(_c);
		});
	});
}else{
	describe('The updateWhere fn', () => {
		it('should be thenable and return the same collection as the test', () => {
			const collection = new Collo([
				{
					id: 1,
					name: 'Adam'
				},
				{
					id: 2,
					name: 'Juliana'
				}
			]);

			let _c = [
				{
					id: 1,
					name: 'Adam'
				},
				{
					id: 2,
					name: 'Juliana & Mila'
				}
			];

			collection.updateWhere({id:2},{
				id: 2,
				name: 'Juliana & Mila'
			})
			.then(res=>{
				expect(res)
					.to
					.deep
					.equal(_c);
			});
		});
	});
}


describe('The updateWhere fn', () => {
	it('should null null given a bad input', () => {
		expect(collection.updateWhere([]))
			.to
			.deep
			.equal(null);
	});
});

// removeWhere
if(!promisify){
	describe('The removeWhere fn', () => {
		it('should return the same collection as the test', () => {
			let _c = c;
			const key = 'id',
				  value = 3;

			const coll = _c.filter(item => item[key] && !(item[key] === value));

			expect(collection.removeWhere({id:3}))
				.to
				.deep
				.equal(coll);
		});
	});
}else{
	describe('The removeWhere fn', () => {
		it('should be thenable and return the same collection as the test', () => {
			let _c = c;
			const key = 'id',
				  value = 2;

			const coll = _c.filter(item => item[key] && !(item[key] === value));

			collection.removeWhere({id:2})
				.then(res=>{
					expect(res)
						.to
						.deep
						.equal(coll);
				});
		});
	});
}


describe('The removeWhere fn', () => {
	it('should return null given a bad input', () => {
		expect(collection.removeWhere([]))
			.to
			.deep
			.equal(null);
	});
});


// getTheIndexOf
if(!promisify){
	describe('The getTheIndexOf fn', () => {
		it('should return the index of the item in the collection', () => {
			expect(collection.getTheIndexOf({id:2}))
				.to
				.equal(1);
		});
	});
}else{
	describe('The getTheIndexOf fn', () => {
		it('should be thenable and return the index of the item in the collection', () => {
			collection.getTheIndexOf({id:2})
				.then(res=>{
					expect(res)
						.to
						.equal(1);
				});
		});
	});
}


describe('The getTheIndexOf fn', () => {
	it('should return null given a bad input', () => {
		expect(collection.getTheIndexOf([]))
			.to
			.deep
			.equal(null);
	});
});



