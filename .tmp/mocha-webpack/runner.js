/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chai__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chai___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_chai__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Src_index_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Src_index_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_Src_index_js__);


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

// For testing you can toggle this boolean to run the promisified tests or the returns
const promisify = true;
const collection = new __WEBPACK_IMPORTED_MODULE_1_Src_index_js___default.a(c,{});

//c,{},next,error
//new Collections are Observable
//collection(coll=>{
//	console.log('Next',coll);
//	},
//	err=>{
//		console.log('Error',err);
//	});

if(promisify){
	collection.promisify();
}else{

	// If promisify was on, it will be turned off
	collection.unPromisify();
}


/**
 * @Todo:  Add insertAfter, insertBefore, removeAfter, removeBefore
 */
//console.log('COLLECTION************',collection.prototype);

// list
describe('The list fn', () => {
	it('should return the same collection', () => {
		if(!promisify) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(collection.list()).to.equal(c);
		}else{
			collection
				.list()
				.then(res=>{
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(res).to.equal(c);
				})
				.catch(err=>{
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(err).to.equal(null);
				});
		}
	});
});


// findWhere
describe('The findWhere fn', () => {
	it('should return the Adam object', () => {
		if(!promisify){
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(collection.findWhere({id:1}))
				.to
				.deep
				.equal({
					id: 1,
					name: 'Adam'
				});

		}else{
			collection.findWhere({id:1})
				.then(res=>{
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(res)
						.to
						.deep
						.equal({
							id: 1,
							name: 'Adam'
						});
				})
				.catch(err=>{
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(err).to.equal(null);
				});
		}
	});
});

describe('The findWhere fn', () => {
	it('should return null given a bad input', () => {
		if(!promisify) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(collection.findWhere([]))
				.to
				.deep
				.equal(null);
		}else{
			collection
				.findWhere([])
				.then(res=>{
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(res)
						.to
						.deep
						.equal(null);
				})
				.catch(err=>{
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(err).to.equal(null);
				});
		}
	});
});

// exists
describe('The exists fn', () => {
	it('should return true', () => {
		if(!promisify) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(collection.exists({id: 2}))
				.to
				.equal(true);
		}else{
			collection.exists({id:2})
				.then(res=>{
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(res)
						.to
						.equal(true);
				})
				.catch(err=>{
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(err).to.equal(null);
				});
		}
	});
});


describe('The exists fn', () => {
	it('should return null given a bad input', () => {
		if(!promisify) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(collection.exists([]))
				.to
				.deep
				.equal(null);
		}else{
			collection.exists([])
				.then(res=>{
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(res)
						.to
						.equal(null);
				})
				.catch(err=>{
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(err).to.equal(null);
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
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(collection.insert({
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
			})
				.then(res=>{
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(res)
						.to
						.deep
						.equal(_c);
				})
				.catch(err=>{
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(err).to.equal(null);
				});
		}
	});
});


describe('The insert fn', () => {
	it('should return null given a bad input', () => {
		if(!promisify) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(collection.insert([]))
				.to
				.equal(null);
		}else{
			collection.insert([])
				.then(res=>{
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(res)
						.to
						.equal(null);
				})
				.catch(err=>{
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(err).to.equal(null);
				});
		}
	});
});

// insertAtIndex
describe('The insertAtIndex fn', () => {
	it('should return the same collection as the test', () => {
		let _c = c;
		const index = 1;

		_c.splice(index,0,{
			id: 5,
			name: 'Mirom'
		});

		if(!promisify) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(collection.insertAtIndex({
				id: 3,
				name: 'Paki Paki'
			},index))
				.to
				.deep
				.equal(_c);
		}else{
			collection.insertAtIndex({
					id: 3,
					name: 'Paki Paki'
				},index)
				.then(res=>{
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(res)
						.to
						.deep
						.equal(_c);
				})
				.catch(err=>{
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(err).to.equal(null);
				});
		}
	});
});


describe('The insertAtIndex fn', () => {
	it('should return null given a bad input', () => {
		if(!promisify) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(collection.insertAtIndex([]))
				.to
				.deep
				.equal(null);
		}else{
			collection.insertAtIndex([])
				.then(res=>{
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(res)
						.to
						.equal(null);
				})
				.catch(err=>{
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(err).to.equal(null);
				});
		}
	});
});


// upsert not found
describe('The upsert [NO found item] fn', () => {
	it('should return the same collection as the input plus the new item', () => {
		const collection = new __WEBPACK_IMPORTED_MODULE_1_Src_index_js___default.a([
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

		if(!promisify) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(collection.upsert({id:3},{
				id: 3,
				name: 'Paki Paki'
			}))
				.to
				.deep
				.equal(_c);
		}else{
			collection
				.promisify()
				.upsert({id:3},{
					id: 3,
					name: 'Paki Paki'
				})
				.then(res=>{
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(res)
						.to
						.equal(null);
				})
				.catch(err=>{
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(err).to.equal(null);
				});
		}
	});
});

// upsert item FOUND
describe('The upsert [Item FOUND] fn', () => {
	it('should return the same collection as the input plus the found item should be updated', () => {
		const collection = new __WEBPACK_IMPORTED_MODULE_1_Src_index_js___default.a([
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

		if(!promisify) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(collection.upsert({id:2},{
				id: 2,
				name: 'Juliana & Mila'
			}))
				.to
				.deep
				.equal(_c);
		}else{
			collection
				.promisify()
				.upsert({id:2},{
				id: 2,
				name: 'Juliana & Mila'
			})
			.then(res=>{
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(res)
					.to
					.equal(_c);
			})
			.catch(err=>{
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(err).to.equal(null);
			});
		}
	});
});

describe('The upsert fn', () => {
	it('should return null given a bad input', () => {
		if(!promisify) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(collection.upsert([]))
				.to
				.deep
				.equal(null);
		}else{
			collection.upsert([])
				.then(res=>{
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(res)
						.to
						.equal(null);
				})
				.catch(err=>{
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(err).to.equal(null);
				});
		}
	});
});

// updateWhere
describe('The updateWhere fn', () => {
	it('should return the same collection as the test', () => {
		const collection = new __WEBPACK_IMPORTED_MODULE_1_Src_index_js___default.a([
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

		if(!promisify) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(collection.updateWhere({id:2},{
				id: 2,
				name: 'Juliana & Mila'
			}))
				.to
				.deep
				.equal(_c);
		}else{
			collection
				.promisify()
				.updateWhere({id:2},{
					id: 2,
					name: 'Juliana & Mila'
				})
				.then(res=>{
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(res)
						.to
						.deep
						.equal(_c);
				})
				.catch(err=>{
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(err).to.equal(null);
				});
		}
	});
});


describe('The updateWhere fn', () => {
	it('should null null given a bad input', () => {
		if(!promisify) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(collection.updateWhere([]))
				.to
				.deep
				.equal(null);
		}else{
			collection.updateWhere([])
				.then(res=>{
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(res)
						.to
						.equal(null);
				})
				.catch(err=>{
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(err).to.equal(null);
				});
		}
	});
});

// removeWhere
describe('The removeWhere fn', () => {
	it('should return the same collection as the test', () => {
		const collection = new __WEBPACK_IMPORTED_MODULE_1_Src_index_js___default.a([
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
				name: 'Chiggy'
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
				name: 'Chiggy'
			}
		];

		const key = 'id',
			  value = 2;

		const coll = _c.filter(item => item[key] && !(item[key] === value));

		if(!promisify) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(collection.removeWhere({id:2}))
				.to
				.deep
				.equal(coll);
		}else{
			collection
				.promisify()
				.removeWhere({id:2})
				.then(res=>{
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(res)
						.to
						.deep
						.equal(coll);
				})
				.catch(err=>{
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(err).to.equal(null);
				});
		}
	});
});


describe('The removeWhere fn', () => {
	it('should return null given a bad input', () => {
		if(!promisify) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(collection.removeWhere([]))
				.to
				.deep
				.equal(null);
		}else{
			collection.removeWhere([])
				.then(res=>{
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(res)
						.to
						.equal(null);
				})
				.catch(err=>{
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(err).to.equal(null);
				});
		}
	});
});


// getTheIndexOf
describe('The getTheIndexOf fn', () => {
	it('should return the index of the item in the collection', () => {
		const collection = new __WEBPACK_IMPORTED_MODULE_1_Src_index_js___default.a([
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
				name: 'Chiggy'
			}
		]);

		if(!promisify) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(collection.getTheIndexOf({id:2}))
				.to
				.equal(1);
		}else{
			collection
				.promisify()
				.getTheIndexOf({id:2})
				.then(res=>{
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(res)
						.to
						.equal(1);
				})
				.catch(err=>{
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(err).to.equal(null);
				});
		}
	});
});


describe('The getTheIndexOf fn', () => {
	it('should return null given a bad input', () => {
		if(!promisify) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(collection.getTheIndexOf([]))
				.to
				.deep
				.equal(null);
		}else{
			collection.getTheIndexOf([])
				.then(res=>{
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(res)
						.to
						.equal(null);
				})
				.catch(err=>{
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(err).to.equal(null);
				});
		}
	});
});





/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./specs/index.spec": 0,
	"./specs/index.spec.js": 0
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 1;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("fs-file-tree");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fsFileTree = __webpack_require__(3);

var _fsFileTree2 = _interopRequireDefault(_fsFileTree);

var _fs = __webpack_require__(2);

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var testFolder = 'test/specs';

buildTree(_fsFileTree2.default.sync(process.cwd() + '/' + testFolder), testFolder);

function buildTree(tree, root) {
    _buildTree(tree, root, '/');
}

function _buildTree(tree, root, path) {
    var _loop = function _loop(item) {
        if (tree.hasOwnProperty(item)) {
            var itemStats = _fs2.default.lstatSync('./' + root + path + item);

            if (itemStats.isDirectory()) {
                describe(item + '/', function () {
                    _buildTree(tree[item], root, path + item + '/');
                });
            } else if (itemStats.isFile()) {
                describe(item, function () {
                    var file = __webpack_require__(1)("./specs" + path + item);

                    if (typeof file.default === 'function') file.default();
                });
            }
        }
    };

    for (var item in tree) {
        _loop(item);
    }
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_1xfx4nf6ru=function(){var path="/Users/computer/Documents/_Projects/myNpmPackages/collo/src/index.js",hash="9491e41bca421df9951b19e8b09e7f9ab6f7f39c",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/computer/Documents/_Projects/myNpmPackages/collo/src/index.js",statementMap:{"0":{start:{line:3,column:0},end:{line:5,column:3}},"1":{start:{line:7,column:14},end:{line:7,column:268}},"2":{start:{line:7,column:101},end:{line:7,column:119}},"3":{start:{line:7,column:141},end:{line:7,column:266}},"4":{start:{line:18,column:12},end:{line:18,column:82}},"5":{start:{line:20,column:13},end:{line:20,column:17}},"6":{start:{line:22,column:12},end:{line:22,column:94}},"7":{start:{line:23,column:13},end:{line:23,column:95}},"8":{start:{line:25,column:1},end:{line:25,column:37}},"9":{start:{line:27,column:12},end:{line:27,column:16}},"10":{start:{line:28,column:24},end:{line:28,column:69}},"11":{start:{line:29,column:16},end:{line:29,column:50}},"12":{start:{line:31,column:15},end:{line:31,column:25}},"13":{start:{line:36,column:1},end:{line:38,column:3}},"14":{start:{line:37,column:2},end:{line:37,column:30}},"15":{start:{line:37,column:30},end:{line:37,column:43}},"16":{start:{line:39,column:1},end:{line:41,column:3}},"17":{start:{line:40,column:2},end:{line:40,column:31}},"18":{start:{line:40,column:31},end:{line:40,column:44}},"19":{start:{line:48,column:1},end:{line:50,column:3}},"20":{start:{line:49,column:2},end:{line:49,column:118}},"21":{start:{line:58,column:1},end:{line:69,column:3}},"22":{start:{line:59,column:14},end:{line:59,column:19}},"23":{start:{line:60,column:12},end:{line:60,column:31}},"24":{start:{line:62,column:2},end:{line:66,column:5}},"25":{start:{line:63,column:3},end:{line:65,column:4}},"26":{start:{line:64,column:4},end:{line:64,column:14}},"27":{start:{line:68,column:2},end:{line:68,column:15}},"28":{start:{line:78,column:1},end:{line:88,column:3}},"29":{start:{line:79,column:2},end:{line:79,column:25}},"30":{start:{line:81,column:2},end:{line:85,column:3}},"31":{start:{line:82,column:3},end:{line:84,column:6}},"32":{start:{line:83,column:4},end:{line:83,column:19}},"33":{start:{line:87,column:2},end:{line:87,column:15}},"34":{start:{line:90,column:1},end:{line:100,column:3}},"35":{start:{line:91,column:2},end:{line:91,column:21}},"36":{start:{line:93,column:2},end:{line:97,column:3}},"37":{start:{line:94,column:3},end:{line:96,column:6}},"38":{start:{line:95,column:4},end:{line:95,column:24}},"39":{start:{line:99,column:2},end:{line:99,column:14}},"40":{start:{line:107,column:1},end:{line:119,column:3}},"41":{start:{line:108,column:2},end:{line:118,column:3}},"42":{start:{line:109,column:15},end:{line:109,column:39}},"43":{start:{line:111,column:3},end:{line:115,column:4}},"44":{start:{line:112,column:4},end:{line:112,column:43}},"45":{start:{line:114,column:4},end:{line:114,column:54}},"46":{start:{line:117,column:3},end:{line:117,column:61}},"47":{start:{line:124,column:1},end:{line:126,column:3}},"48":{start:{line:125,column:2},end:{line:125,column:52}},"49":{start:{line:132,column:1},end:{line:148,column:3}},"50":{start:{line:133,column:2},end:{line:147,column:3}},"51":{start:{line:134,column:11},end:{line:138,column:8}},"52":{start:{line:135,column:14},end:{line:135,column:33}},"53":{start:{line:137,column:4},end:{line:137,column:47}},"54":{start:{line:140,column:3},end:{line:144,column:4}},"55":{start:{line:141,column:4},end:{line:141,column:39}},"56":{start:{line:143,column:4},end:{line:143,column:42}},"57":{start:{line:146,column:3},end:{line:146,column:61}},"58":{start:{line:154,column:1},end:{line:156,column:3}},"59":{start:{line:155,column:2},end:{line:155,column:137}},"60":{start:{line:163,column:1},end:{line:171,column:3}},"61":{start:{line:164,column:2},end:{line:168,column:3}},"62":{start:{line:165,column:3},end:{line:165,column:31}},"63":{start:{line:167,column:3},end:{line:167,column:53}},"64":{start:{line:170,column:2},end:{line:170,column:60}},"65":{start:{line:179,column:1},end:{line:187,column:3}},"66":{start:{line:180,column:2},end:{line:184,column:3}},"67":{start:{line:181,column:3},end:{line:181,column:43}},"68":{start:{line:183,column:3},end:{line:183,column:53}},"69":{start:{line:186,column:2},end:{line:186,column:60}},"70":{start:{line:195,column:1},end:{line:217,column:3}},"71":{start:{line:196,column:2},end:{line:216,column:3}},"72":{start:{line:197,column:3},end:{line:211,column:4}},"73":{start:{line:198,column:4},end:{line:198,column:22}},"74":{start:{line:202,column:4},end:{line:210,column:7}},"75":{start:{line:203,column:15},end:{line:203,column:34}},"76":{start:{line:205,column:5},end:{line:207,column:6}},"77":{start:{line:206,column:6},end:{line:206,column:41}},"78":{start:{line:209,column:5},end:{line:209,column:15}},"79":{start:{line:213,column:3},end:{line:213,column:53}},"80":{start:{line:215,column:3},end:{line:215,column:61}},"81":{start:{line:223,column:1},end:{line:237,column:3}},"82":{start:{line:224,column:2},end:{line:234,column:3}},"83":{start:{line:225,column:15},end:{line:225,column:39}},"84":{start:{line:227,column:3},end:{line:233,column:4}},"85":{start:{line:228,column:4},end:{line:228,column:38}},"86":{start:{line:230,column:4},end:{line:230,column:54}},"87":{start:{line:232,column:4},end:{line:232,column:54}},"88":{start:{line:236,column:2},end:{line:236,column:60}},"89":{start:{line:244,column:1},end:{line:261,column:3}},"90":{start:{line:245,column:2},end:{line:258,column:3}},"91":{start:{line:246,column:3},end:{line:255,column:6}},"92":{start:{line:248,column:14},end:{line:248,column:33}},"93":{start:{line:250,column:4},end:{line:254,column:5}},"94":{start:{line:251,column:5},end:{line:251,column:40}},"95":{start:{line:253,column:5},end:{line:253,column:15}},"96":{start:{line:257,column:3},end:{line:257,column:53}},"97":{start:{line:260,column:2},end:{line:260,column:60}},"98":{start:{line:263,column:1},end:{line:263,column:13}},"99":{start:{line:266,column:0},end:{line:266,column:24}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:7,column:84},end:{line:7,column:85}},loc:{start:{line:7,column:99},end:{line:7,column:121}},line:7},"1":{name:"(anonymous_1)",decl:{start:{line:7,column:124},end:{line:7,column:125}},loc:{start:{line:7,column:139},end:{line:7,column:268}},line:7},"2":{name:"Collo",decl:{start:{line:17,column:9},end:{line:17,column:14}},loc:{start:{line:17,column:27},end:{line:264,column:1}},line:17},"3":{name:"(anonymous_3)",decl:{start:{line:22,column:80},end:{line:22,column:81}},loc:{start:{line:22,column:92},end:{line:22,column:94}},line:22},"4":{name:"(anonymous_4)",decl:{start:{line:23,column:81},end:{line:23,column:82}},loc:{start:{line:23,column:93},end:{line:23,column:95}},line:23},"5":{name:"(anonymous_5)",decl:{start:{line:36,column:18},end:{line:36,column:19}},loc:{start:{line:36,column:30},end:{line:38,column:2}},line:36},"6":{name:"(anonymous_6)",decl:{start:{line:39,column:20},end:{line:39,column:21}},loc:{start:{line:39,column:32},end:{line:41,column:2}},line:39},"7":{name:"(anonymous_7)",decl:{start:{line:48,column:18},end:{line:48,column:19}},loc:{start:{line:48,column:34},end:{line:50,column:2}},line:48},"8":{name:"(anonymous_8)",decl:{start:{line:58,column:23},end:{line:58,column:24}},loc:{start:{line:58,column:38},end:{line:69,column:2}},line:58},"9":{name:"(anonymous_9)",decl:{start:{line:62,column:27},end:{line:62,column:28}},loc:{start:{line:62,column:46},end:{line:66,column:3}},line:62},"10":{name:"(anonymous_10)",decl:{start:{line:78,column:19},end:{line:78,column:20}},loc:{start:{line:78,column:45},end:{line:88,column:2}},line:78},"11":{name:"(anonymous_11)",decl:{start:{line:82,column:22},end:{line:82,column:23}},loc:{start:{line:82,column:49},end:{line:84,column:4}},line:82},"12":{name:"(anonymous_12)",decl:{start:{line:90,column:16},end:{line:90,column:17}},loc:{start:{line:90,column:42},end:{line:100,column:2}},line:90},"13":{name:"(anonymous_13)",decl:{start:{line:94,column:22},end:{line:94,column:23}},loc:{start:{line:94,column:49},end:{line:96,column:4}},line:94},"14":{name:"(anonymous_14)",decl:{start:{line:107,column:22},end:{line:107,column:23}},loc:{start:{line:107,column:37},end:{line:119,column:2}},line:107},"15":{name:"(anonymous_15)",decl:{start:{line:124,column:13},end:{line:124,column:14}},loc:{start:{line:124,column:25},end:{line:126,column:2}},line:124},"16":{name:"(anonymous_16)",decl:{start:{line:132,column:18},end:{line:132,column:19}},loc:{start:{line:132,column:33},end:{line:148,column:2}},line:132},"17":{name:"(anonymous_17)",decl:{start:{line:134,column:35},end:{line:134,column:36}},loc:{start:{line:134,column:51},end:{line:138,column:4}},line:134},"18":{name:"(anonymous_18)",decl:{start:{line:154,column:15},end:{line:154,column:16}},loc:{start:{line:154,column:30},end:{line:156,column:2}},line:154},"19":{name:"(anonymous_19)",decl:{start:{line:163,column:15},end:{line:163,column:16}},loc:{start:{line:163,column:31},end:{line:171,column:2}},line:163},"20":{name:"(anonymous_20)",decl:{start:{line:179,column:22},end:{line:179,column:23}},loc:{start:{line:179,column:45},end:{line:187,column:2}},line:179},"21":{name:"(anonymous_21)",decl:{start:{line:195,column:15},end:{line:195,column:16}},loc:{start:{line:195,column:36},end:{line:217,column:2}},line:195},"22":{name:"(anonymous_22)",decl:{start:{line:202,column:44},end:{line:202,column:45}},loc:{start:{line:202,column:58},end:{line:210,column:5}},line:202},"23":{name:"(anonymous_23)",decl:{start:{line:223,column:20},end:{line:223,column:21}},loc:{start:{line:223,column:35},end:{line:237,column:2}},line:223},"24":{name:"(anonymous_24)",decl:{start:{line:244,column:20},end:{line:244,column:21}},loc:{start:{line:244,column:41},end:{line:261,column:2}},line:244},"25":{name:"(anonymous_25)",decl:{start:{line:246,column:43},end:{line:246,column:44}},loc:{start:{line:246,column:57},end:{line:255,column:4}},line:246}},branchMap:{"0":{loc:{start:{line:7,column:14},end:{line:7,column:268}},type:"cond-expr",locations:[{start:{line:7,column:84},end:{line:7,column:121}},{start:{line:7,column:124},end:{line:7,column:268}}],line:7},"1":{loc:{start:{line:7,column:14},end:{line:7,column:81}},type:"binary-expr",locations:[{start:{line:7,column:14},end:{line:7,column:42}},{start:{line:7,column:46},end:{line:7,column:81}}],line:7},"2":{loc:{start:{line:7,column:148},end:{line:7,column:265}},type:"cond-expr",locations:[{start:{line:7,column:244},end:{line:7,column:252}},{start:{line:7,column:255},end:{line:7,column:265}}],line:7},"3":{loc:{start:{line:7,column:148},end:{line:7,column:241}},type:"binary-expr",locations:[{start:{line:7,column:148},end:{line:7,column:151}},{start:{line:7,column:155},end:{line:7,column:183}},{start:{line:7,column:187},end:{line:7,column:213}},{start:{line:7,column:217},end:{line:7,column:241}}],line:7},"4":{loc:{start:{line:18,column:12},end:{line:18,column:82}},type:"cond-expr",locations:[{start:{line:18,column:65},end:{line:18,column:77}},{start:{line:18,column:80},end:{line:18,column:82}}],line:18},"5":{loc:{start:{line:18,column:12},end:{line:18,column:62}},type:"binary-expr",locations:[{start:{line:18,column:12},end:{line:18,column:32}},{start:{line:18,column:36},end:{line:18,column:62}}],line:18},"6":{loc:{start:{line:22,column:12},end:{line:22,column:94}},type:"cond-expr",locations:[{start:{line:22,column:65},end:{line:22,column:77}},{start:{line:22,column:80},end:{line:22,column:94}}],line:22},"7":{loc:{start:{line:22,column:12},end:{line:22,column:62}},type:"binary-expr",locations:[{start:{line:22,column:12},end:{line:22,column:32}},{start:{line:22,column:36},end:{line:22,column:62}}],line:22},"8":{loc:{start:{line:23,column:13},end:{line:23,column:95}},type:"cond-expr",locations:[{start:{line:23,column:66},end:{line:23,column:78}},{start:{line:23,column:81},end:{line:23,column:95}}],line:23},"9":{loc:{start:{line:23,column:13},end:{line:23,column:63}},type:"binary-expr",locations:[{start:{line:23,column:13},end:{line:23,column:33}},{start:{line:23,column:37},end:{line:23,column:63}}],line:23},"10":{loc:{start:{line:25,column:20},end:{line:25,column:36}},type:"binary-expr",locations:[{start:{line:25,column:20},end:{line:25,column:30}},{start:{line:25,column:34},end:{line:25,column:36}}],line:25},"11":{loc:{start:{line:31,column:15},end:{line:31,column:25}},type:"binary-expr",locations:[{start:{line:31,column:15},end:{line:31,column:19}},{start:{line:31,column:23},end:{line:31,column:25}}],line:31},"12":{loc:{start:{line:49,column:9},end:{line:49,column:117}},type:"binary-expr",locations:[{start:{line:49,column:9},end:{line:49,column:13}},{start:{line:49,column:17},end:{line:49,column:89}},{start:{line:49,column:93},end:{line:49,column:117}}],line:49},"13":{loc:{start:{line:49,column:18},end:{line:49,column:75}},type:"cond-expr",locations:[{start:{line:49,column:48},end:{line:49,column:59}},{start:{line:49,column:62},end:{line:49,column:75}}],line:49},"14":{loc:{start:{line:63,column:3},end:{line:65,column:4}},type:"if",locations:[{start:{line:63,column:3},end:{line:65,column:4}},{start:{line:63,column:3},end:{line:65,column:4}}],line:63},"15":{loc:{start:{line:81,column:2},end:{line:85,column:3}},type:"if",locations:[{start:{line:81,column:2},end:{line:85,column:3}},{start:{line:81,column:2},end:{line:85,column:3}}],line:81},"16":{loc:{start:{line:93,column:2},end:{line:97,column:3}},type:"if",locations:[{start:{line:93,column:2},end:{line:97,column:3}},{start:{line:93,column:2},end:{line:97,column:3}}],line:93},"17":{loc:{start:{line:108,column:2},end:{line:118,column:3}},type:"if",locations:[{start:{line:108,column:2},end:{line:118,column:3}},{start:{line:108,column:2},end:{line:118,column:3}}],line:108},"18":{loc:{start:{line:111,column:3},end:{line:115,column:4}},type:"if",locations:[{start:{line:111,column:3},end:{line:115,column:4}},{start:{line:111,column:3},end:{line:115,column:4}}],line:111},"19":{loc:{start:{line:133,column:2},end:{line:147,column:3}},type:"if",locations:[{start:{line:133,column:2},end:{line:147,column:3}},{start:{line:133,column:2},end:{line:147,column:3}}],line:133},"20":{loc:{start:{line:137,column:11},end:{line:137,column:46}},type:"binary-expr",locations:[{start:{line:137,column:11},end:{line:137,column:20}},{start:{line:137,column:24},end:{line:137,column:46}}],line:137},"21":{loc:{start:{line:140,column:3},end:{line:144,column:4}},type:"if",locations:[{start:{line:140,column:3},end:{line:144,column:4}},{start:{line:140,column:3},end:{line:144,column:4}}],line:140},"22":{loc:{start:{line:155,column:9},end:{line:155,column:136}},type:"cond-expr",locations:[{start:{line:155,column:31},end:{line:155,column:83}},{start:{line:155,column:86},end:{line:155,column:136}}],line:155},"23":{loc:{start:{line:164,column:2},end:{line:168,column:3}},type:"if",locations:[{start:{line:164,column:2},end:{line:168,column:3}},{start:{line:164,column:2},end:{line:168,column:3}}],line:164},"24":{loc:{start:{line:180,column:2},end:{line:184,column:3}},type:"if",locations:[{start:{line:180,column:2},end:{line:184,column:3}},{start:{line:180,column:2},end:{line:184,column:3}}],line:180},"25":{loc:{start:{line:196,column:2},end:{line:216,column:3}},type:"if",locations:[{start:{line:196,column:2},end:{line:216,column:3}},{start:{line:196,column:2},end:{line:216,column:3}}],line:196},"26":{loc:{start:{line:196,column:6},end:{line:196,column:49}},type:"binary-expr",locations:[{start:{line:196,column:6},end:{line:196,column:25}},{start:{line:196,column:29},end:{line:196,column:49}}],line:196},"27":{loc:{start:{line:197,column:3},end:{line:211,column:4}},type:"if",locations:[{start:{line:197,column:3},end:{line:211,column:4}},{start:{line:197,column:3},end:{line:211,column:4}}],line:197},"28":{loc:{start:{line:205,column:5},end:{line:207,column:6}},type:"if",locations:[{start:{line:205,column:5},end:{line:207,column:6}},{start:{line:205,column:5},end:{line:207,column:6}}],line:205},"29":{loc:{start:{line:224,column:2},end:{line:234,column:3}},type:"if",locations:[{start:{line:224,column:2},end:{line:234,column:3}},{start:{line:224,column:2},end:{line:234,column:3}}],line:224},"30":{loc:{start:{line:227,column:3},end:{line:233,column:4}},type:"if",locations:[{start:{line:227,column:3},end:{line:233,column:4}},{start:{line:227,column:3},end:{line:233,column:4}}],line:227},"31":{loc:{start:{line:245,column:2},end:{line:258,column:3}},type:"if",locations:[{start:{line:245,column:2},end:{line:258,column:3}},{start:{line:245,column:2},end:{line:258,column:3}}],line:245},"32":{loc:{start:{line:245,column:6},end:{line:245,column:48}},type:"binary-expr",locations:[{start:{line:245,column:6},end:{line:245,column:25}},{start:{line:245,column:29},end:{line:245,column:48}}],line:245},"33":{loc:{start:{line:250,column:4},end:{line:254,column:5}},type:"if",locations:[{start:{line:250,column:4},end:{line:254,column:5}},{start:{line:250,column:4},end:{line:254,column:5}}],line:250}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"49":0,"50":0,"51":0,"52":0,"53":0,"54":0,"55":0,"56":0,"57":0,"58":0,"59":0,"60":0,"61":0,"62":0,"63":0,"64":0,"65":0,"66":0,"67":0,"68":0,"69":0,"70":0,"71":0,"72":0,"73":0,"74":0,"75":0,"76":0,"77":0,"78":0,"79":0,"80":0,"81":0,"82":0,"83":0,"84":0,"85":0,"86":0,"87":0,"88":0,"89":0,"90":0,"91":0,"92":0,"93":0,"94":0,"95":0,"96":0,"97":0,"98":0,"99":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0},b:{"0":[0,0],"1":[0,0],"2":[0,0],"3":[0,0,0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0],"9":[0,0],"10":[0,0],"11":[0,0],"12":[0,0,0],"13":[0,0],"14":[0,0],"15":[0,0],"16":[0,0],"17":[0,0],"18":[0,0],"19":[0,0],"20":[0,0],"21":[0,0],"22":[0,0],"23":[0,0],"24":[0,0],"25":[0,0],"26":[0,0],"27":[0,0],"28":[0,0],"29":[0,0],"30":[0,0],"31":[0,0],"32":[0,0],"33":[0,0]},inputSourceMap:{version:3,sources:["src/index.js"],names:["Collo","collection","opts","next","error","_collection","self","InvalidInputType","NotFound","options","promisify","unPromisify","_isObject","item","Object","keys","length","_getTheIndexOf","val","index","key","forEach","i","_onSuccess","input","Promise","resolve","reject","_onFail","getTheIndexOf","Error","list","findWhere","filter","exists","insert","push","insertAtIndex","splice","upsert","map","it","assign","removeWhere","updateWhere"],mappings:"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",file:"index.js",sourceRoot:"/Users/computer/Documents/_Projects/myNpmPackages/collo",sourcesContent:["/**\n * Collo is Observable on the main collection instance\n * @param collection\n * @param opts\n * @param next\n * @param error\n * @returns {collo}\n */\nfunction Collo(collection, opts={}, next=()=>{}, error=()=>{}) {\n\tthis._collection = collection || [];\n\n\tconst self = this;\n\tconst InvalidInputType = \"Invalid input type. Input must be an object\";\n\tconst NotFound = \"Item not found in the collection\";\n\n\tlet options = opts || {};\n\n\t/**\n\t * Setter for promisifying the api\n\t */\n\tself.promisify = ()=>{options['promisify'] = true; return this;};\n\tself.unPromisify = ()=>{options['promisify'] = false; return this;};\n\n\t/**\n\t * Check if is an object with values\n\t * @param item\n\t * @private\n\t */\n\tself._isObject = (item)=>item && typeof item === 'object' && Object.keys(item).length;\n\n\t/**\n\t * Internal index fetcher\n\t * @param val\n\t * @returns {boolean}\n\t * @private\n\t */\n\tself._getTheIndexOf = (val)=>{\n\t\tlet index = false;\n\t\tlet key = Object.keys(val)[0];\n\n\t\tself._collection.forEach((item,i)=>{\n\t\t\tif(item[key] === val[key]){ index = i; }\n\t\t});\n\n\t\treturn index;\n\t};\n\n\t/**\n\t * Rsponse utility fns\n\t * @param input\n\t * @param options\n\t * @param next\n\t * @returns {*}\n\t */\n\tself._onSuccess = (input,options)=>{\n\t\tnext(self._collection);\n\n\t\tif(options.promisify){\n\t\t\treturn new Promise(function (resolve, reject) {\n\t\t\t\tresolve(input);\n\t\t\t});\n\t\t}\n\n\t\treturn input;\n\t};\n\n\tself._onFail = (input,options)=>{\n\t\terror(null,input);\n\n\t\tif(options.promisify){\n\t\t\treturn new Promise(function (resolve, reject) {\n\t\t\t\treject(null,input);\n\t\t\t});\n\t\t}\n\n\t\treturn null;\n\t};\n\n\t/**\n\t * Public get the index of method\n\t * @param val\n\t * @returns {*}\n\t */\n\tself.getTheIndexOf = val=>{\n\t\tif(self._isObject(val)) {\n\t\t\tlet index = self._getTheIndexOf(val);\n\n\t\t\tif(index) {\n\t\t\t\treturn self._onSuccess(index,options)\n\t\t\t}else{\n\t\t\t\treturn self._onFail({Error:NotFound},options)\n\t\t\t}\n\t\t}else{\n\t\t\treturn self._onFail({Error:InvalidInputType},options);\n\t\t}\n\t};\n\n\t/**\n\t * Return the current collection\n\t */\n\tself.list = ()=>self._onSuccess(self._collection,options);\n\n\t/**\n\t * Return the item where the key/al match\n\t * @param val\n\t */\n\tself.findWhere = val => {\n\t\tif(self._isObject(val)) {\n\t\t\tconst i = self._collection\n\t\t\t\t.filter(item => {\n\t\t\t\t\tlet key = Object.keys(val)[0];\n\n\t\t\t\t\treturn item[key] && item[key] === val[key];\n\t\t\t\t})[0];\n\n\t\t\tif (i) {\n\t\t\t\treturn self._onSuccess(i,options);\n\t\t\t} else {\n\t\t\t\treturn self._onSuccess(null,options)\n\t\t\t}\n\t\t}else{\n\t\t\treturn self._onFail({Error:InvalidInputType},options);\n\t\t}\n\t};\n\n\t/**\n\t * Used to determine if an item is in the collection\n\t * @param val\n\t */\n\tself.exists = val =>self._isObject(val)\n\t\t? self._onSuccess(!!self._getTheIndexOf(val),options)\n\t\t: self._onFail({Error:InvalidInputType},options);\n\n\t/**\n\t * Insert the item at the end of the stack\n\t * @param item\n\t * @returns {*|Array}\n\t */\n\tself.insert = item => {\n\t\tif(self._isObject(item)){\n\t\t\tself._collection.push(item);\n\n\t\t\treturn self._onSuccess(self._collection,options);\n\t\t}\n\n\t\treturn self._onFail({Error:InvalidInputType},options);\n\t};\n\n\t/**\n\t * Splice an item in at an exact position in the collection\n\t * @param item\n\t * @param index\n\t * @returns {*|Array}\n\t */\n\tself.insertAtIndex = (item, index) => {\n\t\tif(self._isObject(item)) {\n\t\t\tself._collection.splice(index, 0, item);\n\n\t\t\treturn self._onSuccess(self._collection,options);\n\t\t}\n\n\t\treturn self._onFail({Error:InvalidInputType},options);\n\t};\n\n\t/**\n\t * If the item exists, perform an dupdate, otherwise insert\n\t * @param val\n\t * @param item\n\t * @returns {*}\n\t */\n\tself.upsert = (val,item) => {\n\t\tif(self._isObject(val) && self._isObject(item)) {\n\t\t\tif (!self._getTheIndexOf(val)) {\n\t\t\t\tself.insert(item);\n\t\t\t} else {\n\n\t\t\t\t// Update\n\t\t\t\tself._collection = self._collection.map(it => {\n\t\t\t\t\tlet key = Object.keys(val)[0];\n\n\t\t\t\t\tif (it[key] === val[key]) {\n\t\t\t\t\t\treturn Object.assign({}, it, item);\n\t\t\t\t\t}\n\n\t\t\t\t\treturn it;\n\t\t\t\t});\n\t\t\t}\n\n\t\t\treturn self._onSuccess(self._collection,options);\n\t\t}else{\n\t\t\treturn self._onFail({Error:InvalidInputType},options);\n\t\t}\n\t};\n\n\t/**\n\t * Remove where the key and value match\n\t * @param val\n\t */\n  \tself.removeWhere = val => {\n\t\tif(self._isObject(val)) {\n\t\t\tconst index = self._getTheIndexOf(val);\n\n\t\t\tif(index) {\n\t\t\t\tself._collection.splice(index, 1);\n\n\t\t\t\treturn self._onSuccess(self._collection,options);\n\t\t\t}else{\n\t\t\t\treturn self._onFail({Error:NotFound},options);\t\t\t}\n\t\t}\n\n\t\treturn self._onFail({Error:InvalidInputType},options);\n\t};\n\n\t/**\n\t * Perform a normal update if the key and value match\n\t * @param val\n\t * @param item\n\t */\n\tself.updateWhere = (val,item) => {\n\t\tif(self._isObject(val) && self._isObject(val)){\n\t\t\tself._collection = self._collection.map(it => {\n\n\t\t\t\tlet key = Object.keys(val)[0];\n\n\t\t\t\tif(it[key] === val[key]){\n\t\t\t\t\treturn  Object.assign({},it,item);\n\t\t\t\t}else{\n\t\t\t\t\treturn it;\n\t\t\t\t}\n\t\t\t});\n\n\t\t\treturn self._onSuccess(self._collection,options);\n\t\t}\n\n\t\treturn self._onFail({Error:InvalidInputType},options);\n\t};\n\n\treturn this;\n};\n\n\nexport default Collo;\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_1xfx4nf6ru.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});var _typeof=(cov_1xfx4nf6ru.s[1]++,(cov_1xfx4nf6ru.b[1][0]++,typeof Symbol==="function")&&(cov_1xfx4nf6ru.b[1][1]++,typeof Symbol.iterator==="symbol")?(cov_1xfx4nf6ru.b[0][0]++,function(obj){cov_1xfx4nf6ru.f[0]++;cov_1xfx4nf6ru.s[2]++;return typeof obj;}):(cov_1xfx4nf6ru.b[0][1]++,function(obj){cov_1xfx4nf6ru.f[1]++;cov_1xfx4nf6ru.s[3]++;return(cov_1xfx4nf6ru.b[3][0]++,obj)&&(cov_1xfx4nf6ru.b[3][1]++,typeof Symbol==="function")&&(cov_1xfx4nf6ru.b[3][2]++,obj.constructor===Symbol)&&(cov_1xfx4nf6ru.b[3][3]++,obj!==Symbol.prototype)?(cov_1xfx4nf6ru.b[2][0]++,"symbol"):(cov_1xfx4nf6ru.b[2][1]++,typeof obj);}));/**
 * Collo is Observable on the main collection instance
 * @param collection
 * @param opts
 * @param next
 * @param error
 * @returns {collo}
 */function Collo(collection){cov_1xfx4nf6ru.f[2]++;var opts=(cov_1xfx4nf6ru.s[4]++,(cov_1xfx4nf6ru.b[5][0]++,arguments.length>1)&&(cov_1xfx4nf6ru.b[5][1]++,arguments[1]!==undefined)?(cov_1xfx4nf6ru.b[4][0]++,arguments[1]):(cov_1xfx4nf6ru.b[4][1]++,{}));var _this=(cov_1xfx4nf6ru.s[5]++,this);var next=(cov_1xfx4nf6ru.s[6]++,(cov_1xfx4nf6ru.b[7][0]++,arguments.length>2)&&(cov_1xfx4nf6ru.b[7][1]++,arguments[2]!==undefined)?(cov_1xfx4nf6ru.b[6][0]++,arguments[2]):(cov_1xfx4nf6ru.b[6][1]++,function(){cov_1xfx4nf6ru.f[3]++;}));var error=(cov_1xfx4nf6ru.s[7]++,(cov_1xfx4nf6ru.b[9][0]++,arguments.length>3)&&(cov_1xfx4nf6ru.b[9][1]++,arguments[3]!==undefined)?(cov_1xfx4nf6ru.b[8][0]++,arguments[3]):(cov_1xfx4nf6ru.b[8][1]++,function(){cov_1xfx4nf6ru.f[4]++;}));cov_1xfx4nf6ru.s[8]++;this._collection=(cov_1xfx4nf6ru.b[10][0]++,collection)||(cov_1xfx4nf6ru.b[10][1]++,[]);var self=(cov_1xfx4nf6ru.s[9]++,this);var InvalidInputType=(cov_1xfx4nf6ru.s[10]++,"Invalid input type. Input must be an object");var NotFound=(cov_1xfx4nf6ru.s[11]++,"Item not found in the collection");var options=(cov_1xfx4nf6ru.s[12]++,(cov_1xfx4nf6ru.b[11][0]++,opts)||(cov_1xfx4nf6ru.b[11][1]++,{}));/**
  * Setter for promisifying the api
  */cov_1xfx4nf6ru.s[13]++;self.promisify=function(){cov_1xfx4nf6ru.f[5]++;cov_1xfx4nf6ru.s[14]++;options['promisify']=true;cov_1xfx4nf6ru.s[15]++;return _this;};cov_1xfx4nf6ru.s[16]++;self.unPromisify=function(){cov_1xfx4nf6ru.f[6]++;cov_1xfx4nf6ru.s[17]++;options['promisify']=false;cov_1xfx4nf6ru.s[18]++;return _this;};/**
  * Check if is an object with values
  * @param item
  * @private
  */cov_1xfx4nf6ru.s[19]++;self._isObject=function(item){cov_1xfx4nf6ru.f[7]++;cov_1xfx4nf6ru.s[20]++;return(cov_1xfx4nf6ru.b[12][0]++,item)&&(cov_1xfx4nf6ru.b[12][1]++,(typeof item==="undefined"?(cov_1xfx4nf6ru.b[13][0]++,"undefined"):(cov_1xfx4nf6ru.b[13][1]++,_typeof(item)))==='object')&&(cov_1xfx4nf6ru.b[12][2]++,Object.keys(item).length);};/**
  * Internal index fetcher
  * @param val
  * @returns {boolean}
  * @private
  */cov_1xfx4nf6ru.s[21]++;self._getTheIndexOf=function(val){cov_1xfx4nf6ru.f[8]++;var index=(cov_1xfx4nf6ru.s[22]++,false);var key=(cov_1xfx4nf6ru.s[23]++,Object.keys(val)[0]);cov_1xfx4nf6ru.s[24]++;self._collection.forEach(function(item,i){cov_1xfx4nf6ru.f[9]++;cov_1xfx4nf6ru.s[25]++;if(item[key]===val[key]){cov_1xfx4nf6ru.b[14][0]++;cov_1xfx4nf6ru.s[26]++;index=i;}else{cov_1xfx4nf6ru.b[14][1]++;}});cov_1xfx4nf6ru.s[27]++;return index;};/**
  * Rsponse utility fns
  * @param input
  * @param options
  * @param next
  * @returns {*}
  */cov_1xfx4nf6ru.s[28]++;self._onSuccess=function(input,options){cov_1xfx4nf6ru.f[10]++;cov_1xfx4nf6ru.s[29]++;next(self._collection);cov_1xfx4nf6ru.s[30]++;if(options.promisify){cov_1xfx4nf6ru.b[15][0]++;cov_1xfx4nf6ru.s[31]++;return new Promise(function(resolve,reject){cov_1xfx4nf6ru.f[11]++;cov_1xfx4nf6ru.s[32]++;resolve(input);});}else{cov_1xfx4nf6ru.b[15][1]++;}cov_1xfx4nf6ru.s[33]++;return input;};cov_1xfx4nf6ru.s[34]++;self._onFail=function(input,options){cov_1xfx4nf6ru.f[12]++;cov_1xfx4nf6ru.s[35]++;error(null,input);cov_1xfx4nf6ru.s[36]++;if(options.promisify){cov_1xfx4nf6ru.b[16][0]++;cov_1xfx4nf6ru.s[37]++;return new Promise(function(resolve,reject){cov_1xfx4nf6ru.f[13]++;cov_1xfx4nf6ru.s[38]++;reject(null,input);});}else{cov_1xfx4nf6ru.b[16][1]++;}cov_1xfx4nf6ru.s[39]++;return null;};/**
  * Public get the index of method
  * @param val
  * @returns {*}
  */cov_1xfx4nf6ru.s[40]++;self.getTheIndexOf=function(val){cov_1xfx4nf6ru.f[14]++;cov_1xfx4nf6ru.s[41]++;if(self._isObject(val)){cov_1xfx4nf6ru.b[17][0]++;var index=(cov_1xfx4nf6ru.s[42]++,self._getTheIndexOf(val));cov_1xfx4nf6ru.s[43]++;if(index){cov_1xfx4nf6ru.b[18][0]++;cov_1xfx4nf6ru.s[44]++;return self._onSuccess(index,options);}else{cov_1xfx4nf6ru.b[18][1]++;cov_1xfx4nf6ru.s[45]++;return self._onFail({Error:NotFound},options);}}else{cov_1xfx4nf6ru.b[17][1]++;cov_1xfx4nf6ru.s[46]++;return self._onFail({Error:InvalidInputType},options);}};/**
  * Return the current collection
  */cov_1xfx4nf6ru.s[47]++;self.list=function(){cov_1xfx4nf6ru.f[15]++;cov_1xfx4nf6ru.s[48]++;return self._onSuccess(self._collection,options);};/**
  * Return the item where the key/al match
  * @param val
  */cov_1xfx4nf6ru.s[49]++;self.findWhere=function(val){cov_1xfx4nf6ru.f[16]++;cov_1xfx4nf6ru.s[50]++;if(self._isObject(val)){cov_1xfx4nf6ru.b[19][0]++;var i=(cov_1xfx4nf6ru.s[51]++,self._collection.filter(function(item){cov_1xfx4nf6ru.f[17]++;var key=(cov_1xfx4nf6ru.s[52]++,Object.keys(val)[0]);cov_1xfx4nf6ru.s[53]++;return(cov_1xfx4nf6ru.b[20][0]++,item[key])&&(cov_1xfx4nf6ru.b[20][1]++,item[key]===val[key]);})[0]);cov_1xfx4nf6ru.s[54]++;if(i){cov_1xfx4nf6ru.b[21][0]++;cov_1xfx4nf6ru.s[55]++;return self._onSuccess(i,options);}else{cov_1xfx4nf6ru.b[21][1]++;cov_1xfx4nf6ru.s[56]++;return self._onSuccess(null,options);}}else{cov_1xfx4nf6ru.b[19][1]++;cov_1xfx4nf6ru.s[57]++;return self._onFail({Error:InvalidInputType},options);}};/**
  * Used to determine if an item is in the collection
  * @param val
  */cov_1xfx4nf6ru.s[58]++;self.exists=function(val){cov_1xfx4nf6ru.f[18]++;cov_1xfx4nf6ru.s[59]++;return self._isObject(val)?(cov_1xfx4nf6ru.b[22][0]++,self._onSuccess(!!self._getTheIndexOf(val),options)):(cov_1xfx4nf6ru.b[22][1]++,self._onFail({Error:InvalidInputType},options));};/**
  * Insert the item at the end of the stack
  * @param item
  * @returns {*|Array}
  */cov_1xfx4nf6ru.s[60]++;self.insert=function(item){cov_1xfx4nf6ru.f[19]++;cov_1xfx4nf6ru.s[61]++;if(self._isObject(item)){cov_1xfx4nf6ru.b[23][0]++;cov_1xfx4nf6ru.s[62]++;self._collection.push(item);cov_1xfx4nf6ru.s[63]++;return self._onSuccess(self._collection,options);}else{cov_1xfx4nf6ru.b[23][1]++;}cov_1xfx4nf6ru.s[64]++;return self._onFail({Error:InvalidInputType},options);};/**
  * Splice an item in at an exact position in the collection
  * @param item
  * @param index
  * @returns {*|Array}
  */cov_1xfx4nf6ru.s[65]++;self.insertAtIndex=function(item,index){cov_1xfx4nf6ru.f[20]++;cov_1xfx4nf6ru.s[66]++;if(self._isObject(item)){cov_1xfx4nf6ru.b[24][0]++;cov_1xfx4nf6ru.s[67]++;self._collection.splice(index,0,item);cov_1xfx4nf6ru.s[68]++;return self._onSuccess(self._collection,options);}else{cov_1xfx4nf6ru.b[24][1]++;}cov_1xfx4nf6ru.s[69]++;return self._onFail({Error:InvalidInputType},options);};/**
  * If the item exists, perform an dupdate, otherwise insert
  * @param val
  * @param item
  * @returns {*}
  */cov_1xfx4nf6ru.s[70]++;self.upsert=function(val,item){cov_1xfx4nf6ru.f[21]++;cov_1xfx4nf6ru.s[71]++;if((cov_1xfx4nf6ru.b[26][0]++,self._isObject(val))&&(cov_1xfx4nf6ru.b[26][1]++,self._isObject(item))){cov_1xfx4nf6ru.b[25][0]++;cov_1xfx4nf6ru.s[72]++;if(!self._getTheIndexOf(val)){cov_1xfx4nf6ru.b[27][0]++;cov_1xfx4nf6ru.s[73]++;self.insert(item);}else{cov_1xfx4nf6ru.b[27][1]++;cov_1xfx4nf6ru.s[74]++;// Update
self._collection=self._collection.map(function(it){cov_1xfx4nf6ru.f[22]++;var key=(cov_1xfx4nf6ru.s[75]++,Object.keys(val)[0]);cov_1xfx4nf6ru.s[76]++;if(it[key]===val[key]){cov_1xfx4nf6ru.b[28][0]++;cov_1xfx4nf6ru.s[77]++;return Object.assign({},it,item);}else{cov_1xfx4nf6ru.b[28][1]++;}cov_1xfx4nf6ru.s[78]++;return it;});}cov_1xfx4nf6ru.s[79]++;return self._onSuccess(self._collection,options);}else{cov_1xfx4nf6ru.b[25][1]++;cov_1xfx4nf6ru.s[80]++;return self._onFail({Error:InvalidInputType},options);}};/**
  * Remove where the key and value match
  * @param val
  */cov_1xfx4nf6ru.s[81]++;self.removeWhere=function(val){cov_1xfx4nf6ru.f[23]++;cov_1xfx4nf6ru.s[82]++;if(self._isObject(val)){cov_1xfx4nf6ru.b[29][0]++;var index=(cov_1xfx4nf6ru.s[83]++,self._getTheIndexOf(val));cov_1xfx4nf6ru.s[84]++;if(index){cov_1xfx4nf6ru.b[30][0]++;cov_1xfx4nf6ru.s[85]++;self._collection.splice(index,1);cov_1xfx4nf6ru.s[86]++;return self._onSuccess(self._collection,options);}else{cov_1xfx4nf6ru.b[30][1]++;cov_1xfx4nf6ru.s[87]++;return self._onFail({Error:NotFound},options);}}else{cov_1xfx4nf6ru.b[29][1]++;}cov_1xfx4nf6ru.s[88]++;return self._onFail({Error:InvalidInputType},options);};/**
  * Perform a normal update if the key and value match
  * @param val
  * @param item
  */cov_1xfx4nf6ru.s[89]++;self.updateWhere=function(val,item){cov_1xfx4nf6ru.f[24]++;cov_1xfx4nf6ru.s[90]++;if((cov_1xfx4nf6ru.b[32][0]++,self._isObject(val))&&(cov_1xfx4nf6ru.b[32][1]++,self._isObject(val))){cov_1xfx4nf6ru.b[31][0]++;cov_1xfx4nf6ru.s[91]++;self._collection=self._collection.map(function(it){cov_1xfx4nf6ru.f[25]++;var key=(cov_1xfx4nf6ru.s[92]++,Object.keys(val)[0]);cov_1xfx4nf6ru.s[93]++;if(it[key]===val[key]){cov_1xfx4nf6ru.b[33][0]++;cov_1xfx4nf6ru.s[94]++;return Object.assign({},it,item);}else{cov_1xfx4nf6ru.b[33][1]++;cov_1xfx4nf6ru.s[95]++;return it;}});cov_1xfx4nf6ru.s[96]++;return self._onSuccess(self._collection,options);}else{cov_1xfx4nf6ru.b[31][1]++;}cov_1xfx4nf6ru.s[97]++;return self._onFail({Error:InvalidInputType},options);};cov_1xfx4nf6ru.s[98]++;return this;};cov_1xfx4nf6ru.s[99]++;exports.default=Collo;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("chai");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVubmVyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrL2Jvb3RzdHJhcCA4ZWY4ZTEzNmEzMjljNDgxZTMyMCIsIi9Vc2Vycy9jb21wdXRlci9Eb2N1bWVudHMvX1Byb2plY3RzL215TnBtUGFja2FnZXMvY29sbG8vdGVzdC9zcGVjcy9pbmRleC5zcGVjLmpzIiwiL1VzZXJzL2NvbXB1dGVyL0RvY3VtZW50cy9fUHJvamVjdHMvbXlOcG1QYWNrYWdlcy9jb2xsby90ZXN0IC9eXFwuXFwvc3BlY3MuKiQvIiwiZXh0ZXJuYWwgXCJmc1wiIiwiZXh0ZXJuYWwgXCJmcy1maWxlLXRyZWVcIiIsIi9Vc2Vycy9jb21wdXRlci9Eb2N1bWVudHMvX1Byb2plY3RzL215TnBtUGFja2FnZXMvY29sbG8vdGVzdC9ydW5uZXIuanMiLCIvVXNlcnMvY29tcHV0ZXIvRG9jdW1lbnRzL19Qcm9qZWN0cy9teU5wbVBhY2thZ2VzL2NvbGxvL3NyYy9pbmRleC5qcyIsImV4dGVybmFsIFwiY2hhaVwiIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOGVmOGUxMzZhMzI5YzQ4MWUzMjAiLCJpbXBvcnQgeyBleHBlY3QgfSBmcm9tICdjaGFpJztcbmltcG9ydCBDb2xsbyBmcm9tICdTcmMvaW5kZXguanMnO1xuLy9pbXBvcnQgQ29sbG8gZnJvbSAnTGliL2luZGV4Lm1pbi5qcyc7XG5cbmNvbnN0IGMgPSBbXG4gICAge1xuICAgICAgaWQ6IDEsXG4gICAgICBuYW1lOiAnQWRhbSdcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyLFxuICAgICAgbmFtZTogJ0p1bGlhbmEnXG4gICAgfVxuXTtcblxuLy8gRm9yIHRlc3RpbmcgeW91IGNhbiB0b2dnbGUgdGhpcyBib29sZWFuIHRvIHJ1biB0aGUgcHJvbWlzaWZpZWQgdGVzdHMgb3IgdGhlIHJldHVybnNcbmNvbnN0IHByb21pc2lmeSA9IHRydWU7XG5jb25zdCBjb2xsZWN0aW9uID0gbmV3IENvbGxvKGMse30pO1xuXG4vL2Mse30sbmV4dCxlcnJvclxuLy9uZXcgQ29sbGVjdGlvbnMgYXJlIE9ic2VydmFibGVcbi8vY29sbGVjdGlvbihjb2xsPT57XG4vL1x0Y29uc29sZS5sb2coJ05leHQnLGNvbGwpO1xuLy9cdH0sXG4vL1x0ZXJyPT57XG4vL1x0XHRjb25zb2xlLmxvZygnRXJyb3InLGVycik7XG4vL1x0fSk7XG5cbmlmKHByb21pc2lmeSl7XG5cdGNvbGxlY3Rpb24ucHJvbWlzaWZ5KCk7XG59ZWxzZXtcblxuXHQvLyBJZiBwcm9taXNpZnkgd2FzIG9uLCBpdCB3aWxsIGJlIHR1cm5lZCBvZmZcblx0Y29sbGVjdGlvbi51blByb21pc2lmeSgpO1xufVxuXG5cbi8qKlxuICogQFRvZG86ICBBZGQgaW5zZXJ0QWZ0ZXIsIGluc2VydEJlZm9yZSwgcmVtb3ZlQWZ0ZXIsIHJlbW92ZUJlZm9yZVxuICovXG4vL2NvbnNvbGUubG9nKCdDT0xMRUNUSU9OKioqKioqKioqKioqJyxjb2xsZWN0aW9uLnByb3RvdHlwZSk7XG5cbi8vIGxpc3RcbmRlc2NyaWJlKCdUaGUgbGlzdCBmbicsICgpID0+IHtcblx0aXQoJ3Nob3VsZCByZXR1cm4gdGhlIHNhbWUgY29sbGVjdGlvbicsICgpID0+IHtcblx0XHRpZighcHJvbWlzaWZ5KSB7XG5cdFx0XHRleHBlY3QoY29sbGVjdGlvbi5saXN0KCkpLnRvLmVxdWFsKGMpO1xuXHRcdH1lbHNle1xuXHRcdFx0Y29sbGVjdGlvblxuXHRcdFx0XHQubGlzdCgpXG5cdFx0XHRcdC50aGVuKHJlcz0+e1xuXHRcdFx0XHRcdGV4cGVjdChyZXMpLnRvLmVxdWFsKGMpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goZXJyPT57XG5cdFx0XHRcdFx0ZXhwZWN0KGVycikudG8uZXF1YWwobnVsbCk7XG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG59KTtcblxuXG4vLyBmaW5kV2hlcmVcbmRlc2NyaWJlKCdUaGUgZmluZFdoZXJlIGZuJywgKCkgPT4ge1xuXHRpdCgnc2hvdWxkIHJldHVybiB0aGUgQWRhbSBvYmplY3QnLCAoKSA9PiB7XG5cdFx0aWYoIXByb21pc2lmeSl7XG5cdFx0XHRleHBlY3QoY29sbGVjdGlvbi5maW5kV2hlcmUoe2lkOjF9KSlcblx0XHRcdFx0LnRvXG5cdFx0XHRcdC5kZWVwXG5cdFx0XHRcdC5lcXVhbCh7XG5cdFx0XHRcdFx0aWQ6IDEsXG5cdFx0XHRcdFx0bmFtZTogJ0FkYW0nXG5cdFx0XHRcdH0pO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHRjb2xsZWN0aW9uLmZpbmRXaGVyZSh7aWQ6MX0pXG5cdFx0XHRcdC50aGVuKHJlcz0+e1xuXHRcdFx0XHRcdGV4cGVjdChyZXMpXG5cdFx0XHRcdFx0XHQudG9cblx0XHRcdFx0XHRcdC5kZWVwXG5cdFx0XHRcdFx0XHQuZXF1YWwoe1xuXHRcdFx0XHRcdFx0XHRpZDogMSxcblx0XHRcdFx0XHRcdFx0bmFtZTogJ0FkYW0nXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKGVycj0+e1xuXHRcdFx0XHRcdGV4cGVjdChlcnIpLnRvLmVxdWFsKG51bGwpO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xufSk7XG5cbmRlc2NyaWJlKCdUaGUgZmluZFdoZXJlIGZuJywgKCkgPT4ge1xuXHRpdCgnc2hvdWxkIHJldHVybiBudWxsIGdpdmVuIGEgYmFkIGlucHV0JywgKCkgPT4ge1xuXHRcdGlmKCFwcm9taXNpZnkpIHtcblx0XHRcdGV4cGVjdChjb2xsZWN0aW9uLmZpbmRXaGVyZShbXSkpXG5cdFx0XHRcdC50b1xuXHRcdFx0XHQuZGVlcFxuXHRcdFx0XHQuZXF1YWwobnVsbCk7XG5cdFx0fWVsc2V7XG5cdFx0XHRjb2xsZWN0aW9uXG5cdFx0XHRcdC5maW5kV2hlcmUoW10pXG5cdFx0XHRcdC50aGVuKHJlcz0+e1xuXHRcdFx0XHRcdGV4cGVjdChyZXMpXG5cdFx0XHRcdFx0XHQudG9cblx0XHRcdFx0XHRcdC5kZWVwXG5cdFx0XHRcdFx0XHQuZXF1YWwobnVsbCk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaChlcnI9Pntcblx0XHRcdFx0XHRleHBlY3QoZXJyKS50by5lcXVhbChudWxsKTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXHR9KTtcbn0pO1xuXG4vLyBleGlzdHNcbmRlc2NyaWJlKCdUaGUgZXhpc3RzIGZuJywgKCkgPT4ge1xuXHRpdCgnc2hvdWxkIHJldHVybiB0cnVlJywgKCkgPT4ge1xuXHRcdGlmKCFwcm9taXNpZnkpIHtcblx0XHRcdGV4cGVjdChjb2xsZWN0aW9uLmV4aXN0cyh7aWQ6IDJ9KSlcblx0XHRcdFx0LnRvXG5cdFx0XHRcdC5lcXVhbCh0cnVlKTtcblx0XHR9ZWxzZXtcblx0XHRcdGNvbGxlY3Rpb24uZXhpc3RzKHtpZDoyfSlcblx0XHRcdFx0LnRoZW4ocmVzPT57XG5cdFx0XHRcdFx0ZXhwZWN0KHJlcylcblx0XHRcdFx0XHRcdC50b1xuXHRcdFx0XHRcdFx0LmVxdWFsKHRydWUpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goZXJyPT57XG5cdFx0XHRcdFx0ZXhwZWN0KGVycikudG8uZXF1YWwobnVsbCk7XG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG59KTtcblxuXG5kZXNjcmliZSgnVGhlIGV4aXN0cyBmbicsICgpID0+IHtcblx0aXQoJ3Nob3VsZCByZXR1cm4gbnVsbCBnaXZlbiBhIGJhZCBpbnB1dCcsICgpID0+IHtcblx0XHRpZighcHJvbWlzaWZ5KSB7XG5cdFx0XHRleHBlY3QoY29sbGVjdGlvbi5leGlzdHMoW10pKVxuXHRcdFx0XHQudG9cblx0XHRcdFx0LmRlZXBcblx0XHRcdFx0LmVxdWFsKG51bGwpO1xuXHRcdH1lbHNle1xuXHRcdFx0Y29sbGVjdGlvbi5leGlzdHMoW10pXG5cdFx0XHRcdC50aGVuKHJlcz0+e1xuXHRcdFx0XHRcdGV4cGVjdChyZXMpXG5cdFx0XHRcdFx0XHQudG9cblx0XHRcdFx0XHRcdC5lcXVhbChudWxsKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKGVycj0+e1xuXHRcdFx0XHRcdGV4cGVjdChlcnIpLnRvLmVxdWFsKG51bGwpO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xufSk7XG5cbi8vIGluc2VydFxuZGVzY3JpYmUoJ1RoZSBpbnNlcnQgZm4nLCAoKSA9PiB7XG5cdGl0KCdzaG91bGQgcmV0dXJuIHRoZSBjb2xsZWN0aW9uIHdpdGggb25lIG1vcmUgaXRlbSBpbiBpdCcsICgpID0+IHtcblx0XHRsZXQgX2MgPSBjO1xuXG5cdFx0X2MucHVzaCh7XG5cdFx0XHRpZDogMyxcblx0XHRcdG5hbWU6ICdQYWtpIFBha2knXG5cdFx0fSk7XG5cblx0XHRpZighcHJvbWlzaWZ5KSB7XG5cdFx0XHRleHBlY3QoY29sbGVjdGlvbi5pbnNlcnQoe1xuXHRcdFx0XHRpZCAgOiAzLFxuXHRcdFx0XHRuYW1lOiAnUGFraSBQYWtpJ1xuXHRcdFx0fSkpXG5cdFx0XHRcdC50b1xuXHRcdFx0XHQuZGVlcFxuXHRcdFx0XHQuZXF1YWwoX2MpO1xuXHRcdH1lbHNle1xuXHRcdFx0Y29sbGVjdGlvbi5pbnNlcnQoe1xuXHRcdFx0XHRpZDogMyxcblx0XHRcdFx0bmFtZTogJ1Bha2kgUGFraSdcblx0XHRcdH0pXG5cdFx0XHRcdC50aGVuKHJlcz0+e1xuXHRcdFx0XHRcdGV4cGVjdChyZXMpXG5cdFx0XHRcdFx0XHQudG9cblx0XHRcdFx0XHRcdC5kZWVwXG5cdFx0XHRcdFx0XHQuZXF1YWwoX2MpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goZXJyPT57XG5cdFx0XHRcdFx0ZXhwZWN0KGVycikudG8uZXF1YWwobnVsbCk7XG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG59KTtcblxuXG5kZXNjcmliZSgnVGhlIGluc2VydCBmbicsICgpID0+IHtcblx0aXQoJ3Nob3VsZCByZXR1cm4gbnVsbCBnaXZlbiBhIGJhZCBpbnB1dCcsICgpID0+IHtcblx0XHRpZighcHJvbWlzaWZ5KSB7XG5cdFx0XHRleHBlY3QoY29sbGVjdGlvbi5pbnNlcnQoW10pKVxuXHRcdFx0XHQudG9cblx0XHRcdFx0LmVxdWFsKG51bGwpO1xuXHRcdH1lbHNle1xuXHRcdFx0Y29sbGVjdGlvbi5pbnNlcnQoW10pXG5cdFx0XHRcdC50aGVuKHJlcz0+e1xuXHRcdFx0XHRcdGV4cGVjdChyZXMpXG5cdFx0XHRcdFx0XHQudG9cblx0XHRcdFx0XHRcdC5lcXVhbChudWxsKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKGVycj0+e1xuXHRcdFx0XHRcdGV4cGVjdChlcnIpLnRvLmVxdWFsKG51bGwpO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xufSk7XG5cbi8vIGluc2VydEF0SW5kZXhcbmRlc2NyaWJlKCdUaGUgaW5zZXJ0QXRJbmRleCBmbicsICgpID0+IHtcblx0aXQoJ3Nob3VsZCByZXR1cm4gdGhlIHNhbWUgY29sbGVjdGlvbiBhcyB0aGUgdGVzdCcsICgpID0+IHtcblx0XHRsZXQgX2MgPSBjO1xuXHRcdGNvbnN0IGluZGV4ID0gMTtcblxuXHRcdF9jLnNwbGljZShpbmRleCwwLHtcblx0XHRcdGlkOiA1LFxuXHRcdFx0bmFtZTogJ01pcm9tJ1xuXHRcdH0pO1xuXG5cdFx0aWYoIXByb21pc2lmeSkge1xuXHRcdFx0ZXhwZWN0KGNvbGxlY3Rpb24uaW5zZXJ0QXRJbmRleCh7XG5cdFx0XHRcdGlkOiAzLFxuXHRcdFx0XHRuYW1lOiAnUGFraSBQYWtpJ1xuXHRcdFx0fSxpbmRleCkpXG5cdFx0XHRcdC50b1xuXHRcdFx0XHQuZGVlcFxuXHRcdFx0XHQuZXF1YWwoX2MpO1xuXHRcdH1lbHNle1xuXHRcdFx0Y29sbGVjdGlvbi5pbnNlcnRBdEluZGV4KHtcblx0XHRcdFx0XHRpZDogMyxcblx0XHRcdFx0XHRuYW1lOiAnUGFraSBQYWtpJ1xuXHRcdFx0XHR9LGluZGV4KVxuXHRcdFx0XHQudGhlbihyZXM9Pntcblx0XHRcdFx0XHRleHBlY3QocmVzKVxuXHRcdFx0XHRcdFx0LnRvXG5cdFx0XHRcdFx0XHQuZGVlcFxuXHRcdFx0XHRcdFx0LmVxdWFsKF9jKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKGVycj0+e1xuXHRcdFx0XHRcdGV4cGVjdChlcnIpLnRvLmVxdWFsKG51bGwpO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xufSk7XG5cblxuZGVzY3JpYmUoJ1RoZSBpbnNlcnRBdEluZGV4IGZuJywgKCkgPT4ge1xuXHRpdCgnc2hvdWxkIHJldHVybiBudWxsIGdpdmVuIGEgYmFkIGlucHV0JywgKCkgPT4ge1xuXHRcdGlmKCFwcm9taXNpZnkpIHtcblx0XHRcdGV4cGVjdChjb2xsZWN0aW9uLmluc2VydEF0SW5kZXgoW10pKVxuXHRcdFx0XHQudG9cblx0XHRcdFx0LmRlZXBcblx0XHRcdFx0LmVxdWFsKG51bGwpO1xuXHRcdH1lbHNle1xuXHRcdFx0Y29sbGVjdGlvbi5pbnNlcnRBdEluZGV4KFtdKVxuXHRcdFx0XHQudGhlbihyZXM9Pntcblx0XHRcdFx0XHRleHBlY3QocmVzKVxuXHRcdFx0XHRcdFx0LnRvXG5cdFx0XHRcdFx0XHQuZXF1YWwobnVsbCk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaChlcnI9Pntcblx0XHRcdFx0XHRleHBlY3QoZXJyKS50by5lcXVhbChudWxsKTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXHR9KTtcbn0pO1xuXG5cbi8vIHVwc2VydCBub3QgZm91bmRcbmRlc2NyaWJlKCdUaGUgdXBzZXJ0IFtOTyBmb3VuZCBpdGVtXSBmbicsICgpID0+IHtcblx0aXQoJ3Nob3VsZCByZXR1cm4gdGhlIHNhbWUgY29sbGVjdGlvbiBhcyB0aGUgaW5wdXQgcGx1cyB0aGUgbmV3IGl0ZW0nLCAoKSA9PiB7XG5cdFx0Y29uc3QgY29sbGVjdGlvbiA9IG5ldyBDb2xsbyhbXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiAxLFxuXHRcdFx0XHRuYW1lOiAnQWRhbSdcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiAyLFxuXHRcdFx0XHRuYW1lOiAnSnVsaWFuYSdcblx0XHRcdH1cblx0XHRdKTtcblxuXHRcdGxldCBfYyA9IFtcblx0XHRcdHtcblx0XHRcdFx0aWQ6IDEsXG5cdFx0XHRcdG5hbWU6ICdBZGFtJ1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aWQ6IDIsXG5cdFx0XHRcdG5hbWU6ICdKdWxpYW5hJ1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aWQ6IDMsXG5cdFx0XHRcdG5hbWU6ICdQYWtpIFBha2knXG5cdFx0XHR9XG5cdFx0XTtcblxuXHRcdGlmKCFwcm9taXNpZnkpIHtcblx0XHRcdGV4cGVjdChjb2xsZWN0aW9uLnVwc2VydCh7aWQ6M30se1xuXHRcdFx0XHRpZDogMyxcblx0XHRcdFx0bmFtZTogJ1Bha2kgUGFraSdcblx0XHRcdH0pKVxuXHRcdFx0XHQudG9cblx0XHRcdFx0LmRlZXBcblx0XHRcdFx0LmVxdWFsKF9jKTtcblx0XHR9ZWxzZXtcblx0XHRcdGNvbGxlY3Rpb25cblx0XHRcdFx0LnByb21pc2lmeSgpXG5cdFx0XHRcdC51cHNlcnQoe2lkOjN9LHtcblx0XHRcdFx0XHRpZDogMyxcblx0XHRcdFx0XHRuYW1lOiAnUGFraSBQYWtpJ1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQudGhlbihyZXM9Pntcblx0XHRcdFx0XHRleHBlY3QocmVzKVxuXHRcdFx0XHRcdFx0LnRvXG5cdFx0XHRcdFx0XHQuZXF1YWwobnVsbCk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaChlcnI9Pntcblx0XHRcdFx0XHRleHBlY3QoZXJyKS50by5lcXVhbChudWxsKTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXHR9KTtcbn0pO1xuXG4vLyB1cHNlcnQgaXRlbSBGT1VORFxuZGVzY3JpYmUoJ1RoZSB1cHNlcnQgW0l0ZW0gRk9VTkRdIGZuJywgKCkgPT4ge1xuXHRpdCgnc2hvdWxkIHJldHVybiB0aGUgc2FtZSBjb2xsZWN0aW9uIGFzIHRoZSBpbnB1dCBwbHVzIHRoZSBmb3VuZCBpdGVtIHNob3VsZCBiZSB1cGRhdGVkJywgKCkgPT4ge1xuXHRcdGNvbnN0IGNvbGxlY3Rpb24gPSBuZXcgQ29sbG8oW1xuXHRcdFx0e1xuXHRcdFx0XHRpZDogMSxcblx0XHRcdFx0bmFtZTogJ0FkYW0nXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRpZDogMixcblx0XHRcdFx0bmFtZTogJ0p1bGlhbmEnXG5cdFx0XHR9XG5cdFx0XSk7XG5cblx0XHRsZXQgX2MgPSBbXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiAxLFxuXHRcdFx0XHRuYW1lOiAnQWRhbSdcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiAyLFxuXHRcdFx0XHRuYW1lOiAnSnVsaWFuYSAmIE1pbGEnXG5cdFx0XHR9XG5cdFx0XTtcblxuXHRcdGlmKCFwcm9taXNpZnkpIHtcblx0XHRcdGV4cGVjdChjb2xsZWN0aW9uLnVwc2VydCh7aWQ6Mn0se1xuXHRcdFx0XHRpZDogMixcblx0XHRcdFx0bmFtZTogJ0p1bGlhbmEgJiBNaWxhJ1xuXHRcdFx0fSkpXG5cdFx0XHRcdC50b1xuXHRcdFx0XHQuZGVlcFxuXHRcdFx0XHQuZXF1YWwoX2MpO1xuXHRcdH1lbHNle1xuXHRcdFx0Y29sbGVjdGlvblxuXHRcdFx0XHQucHJvbWlzaWZ5KClcblx0XHRcdFx0LnVwc2VydCh7aWQ6Mn0se1xuXHRcdFx0XHRpZDogMixcblx0XHRcdFx0bmFtZTogJ0p1bGlhbmEgJiBNaWxhJ1xuXHRcdFx0fSlcblx0XHRcdC50aGVuKHJlcz0+e1xuXHRcdFx0XHRleHBlY3QocmVzKVxuXHRcdFx0XHRcdC50b1xuXHRcdFx0XHRcdC5lcXVhbChfYyk7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKGVycj0+e1xuXHRcdFx0XHRleHBlY3QoZXJyKS50by5lcXVhbChudWxsKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG59KTtcblxuZGVzY3JpYmUoJ1RoZSB1cHNlcnQgZm4nLCAoKSA9PiB7XG5cdGl0KCdzaG91bGQgcmV0dXJuIG51bGwgZ2l2ZW4gYSBiYWQgaW5wdXQnLCAoKSA9PiB7XG5cdFx0aWYoIXByb21pc2lmeSkge1xuXHRcdFx0ZXhwZWN0KGNvbGxlY3Rpb24udXBzZXJ0KFtdKSlcblx0XHRcdFx0LnRvXG5cdFx0XHRcdC5kZWVwXG5cdFx0XHRcdC5lcXVhbChudWxsKTtcblx0XHR9ZWxzZXtcblx0XHRcdGNvbGxlY3Rpb24udXBzZXJ0KFtdKVxuXHRcdFx0XHQudGhlbihyZXM9Pntcblx0XHRcdFx0XHRleHBlY3QocmVzKVxuXHRcdFx0XHRcdFx0LnRvXG5cdFx0XHRcdFx0XHQuZXF1YWwobnVsbCk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaChlcnI9Pntcblx0XHRcdFx0XHRleHBlY3QoZXJyKS50by5lcXVhbChudWxsKTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXHR9KTtcbn0pO1xuXG4vLyB1cGRhdGVXaGVyZVxuZGVzY3JpYmUoJ1RoZSB1cGRhdGVXaGVyZSBmbicsICgpID0+IHtcblx0aXQoJ3Nob3VsZCByZXR1cm4gdGhlIHNhbWUgY29sbGVjdGlvbiBhcyB0aGUgdGVzdCcsICgpID0+IHtcblx0XHRjb25zdCBjb2xsZWN0aW9uID0gbmV3IENvbGxvKFtcblx0XHRcdHtcblx0XHRcdFx0aWQ6IDEsXG5cdFx0XHRcdG5hbWU6ICdBZGFtJ1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aWQ6IDIsXG5cdFx0XHRcdG5hbWU6ICdKdWxpYW5hJ1xuXHRcdFx0fVxuXHRcdF0pO1xuXG5cdFx0bGV0IF9jID0gW1xuXHRcdFx0e1xuXHRcdFx0XHRpZDogMSxcblx0XHRcdFx0bmFtZTogJ0FkYW0nXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRpZDogMixcblx0XHRcdFx0bmFtZTogJ0p1bGlhbmEgJiBNaWxhJ1xuXHRcdFx0fVxuXHRcdF07XG5cblx0XHRpZighcHJvbWlzaWZ5KSB7XG5cdFx0XHRleHBlY3QoY29sbGVjdGlvbi51cGRhdGVXaGVyZSh7aWQ6Mn0se1xuXHRcdFx0XHRpZDogMixcblx0XHRcdFx0bmFtZTogJ0p1bGlhbmEgJiBNaWxhJ1xuXHRcdFx0fSkpXG5cdFx0XHRcdC50b1xuXHRcdFx0XHQuZGVlcFxuXHRcdFx0XHQuZXF1YWwoX2MpO1xuXHRcdH1lbHNle1xuXHRcdFx0Y29sbGVjdGlvblxuXHRcdFx0XHQucHJvbWlzaWZ5KClcblx0XHRcdFx0LnVwZGF0ZVdoZXJlKHtpZDoyfSx7XG5cdFx0XHRcdFx0aWQ6IDIsXG5cdFx0XHRcdFx0bmFtZTogJ0p1bGlhbmEgJiBNaWxhJ1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQudGhlbihyZXM9Pntcblx0XHRcdFx0XHRleHBlY3QocmVzKVxuXHRcdFx0XHRcdFx0LnRvXG5cdFx0XHRcdFx0XHQuZGVlcFxuXHRcdFx0XHRcdFx0LmVxdWFsKF9jKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKGVycj0+e1xuXHRcdFx0XHRcdGV4cGVjdChlcnIpLnRvLmVxdWFsKG51bGwpO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xufSk7XG5cblxuZGVzY3JpYmUoJ1RoZSB1cGRhdGVXaGVyZSBmbicsICgpID0+IHtcblx0aXQoJ3Nob3VsZCBudWxsIG51bGwgZ2l2ZW4gYSBiYWQgaW5wdXQnLCAoKSA9PiB7XG5cdFx0aWYoIXByb21pc2lmeSkge1xuXHRcdFx0ZXhwZWN0KGNvbGxlY3Rpb24udXBkYXRlV2hlcmUoW10pKVxuXHRcdFx0XHQudG9cblx0XHRcdFx0LmRlZXBcblx0XHRcdFx0LmVxdWFsKG51bGwpO1xuXHRcdH1lbHNle1xuXHRcdFx0Y29sbGVjdGlvbi51cGRhdGVXaGVyZShbXSlcblx0XHRcdFx0LnRoZW4ocmVzPT57XG5cdFx0XHRcdFx0ZXhwZWN0KHJlcylcblx0XHRcdFx0XHRcdC50b1xuXHRcdFx0XHRcdFx0LmVxdWFsKG51bGwpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goZXJyPT57XG5cdFx0XHRcdFx0ZXhwZWN0KGVycikudG8uZXF1YWwobnVsbCk7XG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG59KTtcblxuLy8gcmVtb3ZlV2hlcmVcbmRlc2NyaWJlKCdUaGUgcmVtb3ZlV2hlcmUgZm4nLCAoKSA9PiB7XG5cdGl0KCdzaG91bGQgcmV0dXJuIHRoZSBzYW1lIGNvbGxlY3Rpb24gYXMgdGhlIHRlc3QnLCAoKSA9PiB7XG5cdFx0Y29uc3QgY29sbGVjdGlvbiA9IG5ldyBDb2xsbyhbXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiAxLFxuXHRcdFx0XHRuYW1lOiAnQWRhbSdcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiAyLFxuXHRcdFx0XHRuYW1lOiAnSnVsaWFuYSdcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiAzLFxuXHRcdFx0XHRuYW1lOiAnQ2hpZ2d5J1xuXHRcdFx0fVxuXHRcdF0pO1xuXG5cdFx0bGV0IF9jID0gW1xuXHRcdFx0e1xuXHRcdFx0XHRpZDogMSxcblx0XHRcdFx0bmFtZTogJ0FkYW0nXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRpZDogMixcblx0XHRcdFx0bmFtZTogJ0p1bGlhbmEnXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRpZDogMyxcblx0XHRcdFx0bmFtZTogJ0NoaWdneSdcblx0XHRcdH1cblx0XHRdO1xuXG5cdFx0Y29uc3Qga2V5ID0gJ2lkJyxcblx0XHRcdCAgdmFsdWUgPSAyO1xuXG5cdFx0Y29uc3QgY29sbCA9IF9jLmZpbHRlcihpdGVtID0+IGl0ZW1ba2V5XSAmJiAhKGl0ZW1ba2V5XSA9PT0gdmFsdWUpKTtcblxuXHRcdGlmKCFwcm9taXNpZnkpIHtcblx0XHRcdGV4cGVjdChjb2xsZWN0aW9uLnJlbW92ZVdoZXJlKHtpZDoyfSkpXG5cdFx0XHRcdC50b1xuXHRcdFx0XHQuZGVlcFxuXHRcdFx0XHQuZXF1YWwoY29sbCk7XG5cdFx0fWVsc2V7XG5cdFx0XHRjb2xsZWN0aW9uXG5cdFx0XHRcdC5wcm9taXNpZnkoKVxuXHRcdFx0XHQucmVtb3ZlV2hlcmUoe2lkOjJ9KVxuXHRcdFx0XHQudGhlbihyZXM9Pntcblx0XHRcdFx0XHRleHBlY3QocmVzKVxuXHRcdFx0XHRcdFx0LnRvXG5cdFx0XHRcdFx0XHQuZGVlcFxuXHRcdFx0XHRcdFx0LmVxdWFsKGNvbGwpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goZXJyPT57XG5cdFx0XHRcdFx0ZXhwZWN0KGVycikudG8uZXF1YWwobnVsbCk7XG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG59KTtcblxuXG5kZXNjcmliZSgnVGhlIHJlbW92ZVdoZXJlIGZuJywgKCkgPT4ge1xuXHRpdCgnc2hvdWxkIHJldHVybiBudWxsIGdpdmVuIGEgYmFkIGlucHV0JywgKCkgPT4ge1xuXHRcdGlmKCFwcm9taXNpZnkpIHtcblx0XHRcdGV4cGVjdChjb2xsZWN0aW9uLnJlbW92ZVdoZXJlKFtdKSlcblx0XHRcdFx0LnRvXG5cdFx0XHRcdC5kZWVwXG5cdFx0XHRcdC5lcXVhbChudWxsKTtcblx0XHR9ZWxzZXtcblx0XHRcdGNvbGxlY3Rpb24ucmVtb3ZlV2hlcmUoW10pXG5cdFx0XHRcdC50aGVuKHJlcz0+e1xuXHRcdFx0XHRcdGV4cGVjdChyZXMpXG5cdFx0XHRcdFx0XHQudG9cblx0XHRcdFx0XHRcdC5lcXVhbChudWxsKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKGVycj0+e1xuXHRcdFx0XHRcdGV4cGVjdChlcnIpLnRvLmVxdWFsKG51bGwpO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xufSk7XG5cblxuLy8gZ2V0VGhlSW5kZXhPZlxuZGVzY3JpYmUoJ1RoZSBnZXRUaGVJbmRleE9mIGZuJywgKCkgPT4ge1xuXHRpdCgnc2hvdWxkIHJldHVybiB0aGUgaW5kZXggb2YgdGhlIGl0ZW0gaW4gdGhlIGNvbGxlY3Rpb24nLCAoKSA9PiB7XG5cdFx0Y29uc3QgY29sbGVjdGlvbiA9IG5ldyBDb2xsbyhbXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiAxLFxuXHRcdFx0XHRuYW1lOiAnQWRhbSdcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiAyLFxuXHRcdFx0XHRuYW1lOiAnSnVsaWFuYSdcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiAzLFxuXHRcdFx0XHRuYW1lOiAnQ2hpZ2d5J1xuXHRcdFx0fVxuXHRcdF0pO1xuXG5cdFx0aWYoIXByb21pc2lmeSkge1xuXHRcdFx0ZXhwZWN0KGNvbGxlY3Rpb24uZ2V0VGhlSW5kZXhPZih7aWQ6Mn0pKVxuXHRcdFx0XHQudG9cblx0XHRcdFx0LmVxdWFsKDEpO1xuXHRcdH1lbHNle1xuXHRcdFx0Y29sbGVjdGlvblxuXHRcdFx0XHQucHJvbWlzaWZ5KClcblx0XHRcdFx0LmdldFRoZUluZGV4T2Yoe2lkOjJ9KVxuXHRcdFx0XHQudGhlbihyZXM9Pntcblx0XHRcdFx0XHRleHBlY3QocmVzKVxuXHRcdFx0XHRcdFx0LnRvXG5cdFx0XHRcdFx0XHQuZXF1YWwoMSk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaChlcnI9Pntcblx0XHRcdFx0XHRleHBlY3QoZXJyKS50by5lcXVhbChudWxsKTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXHR9KTtcbn0pO1xuXG5cbmRlc2NyaWJlKCdUaGUgZ2V0VGhlSW5kZXhPZiBmbicsICgpID0+IHtcblx0aXQoJ3Nob3VsZCByZXR1cm4gbnVsbCBnaXZlbiBhIGJhZCBpbnB1dCcsICgpID0+IHtcblx0XHRpZighcHJvbWlzaWZ5KSB7XG5cdFx0XHRleHBlY3QoY29sbGVjdGlvbi5nZXRUaGVJbmRleE9mKFtdKSlcblx0XHRcdFx0LnRvXG5cdFx0XHRcdC5kZWVwXG5cdFx0XHRcdC5lcXVhbChudWxsKTtcblx0XHR9ZWxzZXtcblx0XHRcdGNvbGxlY3Rpb24uZ2V0VGhlSW5kZXhPZihbXSlcblx0XHRcdFx0LnRoZW4ocmVzPT57XG5cdFx0XHRcdFx0ZXhwZWN0KHJlcylcblx0XHRcdFx0XHRcdC50b1xuXHRcdFx0XHRcdFx0LmVxdWFsKG51bGwpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goZXJyPT57XG5cdFx0XHRcdFx0ZXhwZWN0KGVycikudG8uZXF1YWwobnVsbCk7XG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG59KTtcblxuXG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3BlY3MvaW5kZXguc3BlYy5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbWFwID0ge1xuXHRcIi4vc3BlY3MvaW5kZXguc3BlY1wiOiAwLFxuXHRcIi4vc3BlY3MvaW5kZXguc3BlYy5qc1wiOiAwXG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpKTtcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG5cdHJldHVybiBpZDtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gMTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuIF5cXC5cXC9zcGVjcy4qJFxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImZzXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnMtZmlsZS10cmVlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZnMtZmlsZS10cmVlXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGZzRmlsZVRyZWUgZnJvbSAnZnMtZmlsZS10cmVlJztcbmltcG9ydCBmcyAgICAgICAgIGZyb20gJ2ZzJztcblxuXG5jb25zdCB0ZXN0Rm9sZGVyICAgPSAndGVzdC9zcGVjcyc7XG5cbmJ1aWxkVHJlZShmc0ZpbGVUcmVlLnN5bmMocHJvY2Vzcy5jd2QoKSArICcvJyArIHRlc3RGb2xkZXIpLCB0ZXN0Rm9sZGVyKTtcblxuZnVuY3Rpb24gYnVpbGRUcmVlKHRyZWUsIHJvb3QpIHtcbiAgICBfYnVpbGRUcmVlKHRyZWUsIHJvb3QsICcvJyk7XG59XG5cbmZ1bmN0aW9uIF9idWlsZFRyZWUodHJlZSwgcm9vdCwgcGF0aCkge1xuICAgIGZvcihsZXQgaXRlbSBpbiB0cmVlKSB7XG4gICAgICAgIGlmKHRyZWUuaGFzT3duUHJvcGVydHkoaXRlbSkpIHtcbiAgICAgICAgICAgIGxldCBpdGVtU3RhdHMgPSBmcy5sc3RhdFN5bmMoJy4vJyArIHJvb3QgKyBwYXRoICsgaXRlbSk7XG5cbiAgICAgICAgICAgIGlmKGl0ZW1TdGF0cy5pc0RpcmVjdG9yeSgpKSB7XG4gICAgICAgICAgICAgICAgZGVzY3JpYmUoaXRlbSArICcvJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBfYnVpbGRUcmVlKHRyZWVbaXRlbV0sIHJvb3QsIHBhdGggKyBpdGVtICsgJy8nKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZihpdGVtU3RhdHMuaXNGaWxlKCkpIHtcbiAgICAgICAgICAgICAgICBkZXNjcmliZShpdGVtLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBmaWxlID0gcmVxdWlyZSgnLi9zcGVjcycgKyBwYXRoICsgaXRlbSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYodHlwZW9mIGZpbGUuZGVmYXVsdCA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGUuZGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcnVubmVyLmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuLyoqXG4gKiBDb2xsbyBpcyBPYnNlcnZhYmxlIG9uIHRoZSBtYWluIGNvbGxlY3Rpb24gaW5zdGFuY2VcbiAqIEBwYXJhbSBjb2xsZWN0aW9uXG4gKiBAcGFyYW0gb3B0c1xuICogQHBhcmFtIG5leHRcbiAqIEBwYXJhbSBlcnJvclxuICogQHJldHVybnMge2NvbGxvfVxuICovXG5mdW5jdGlvbiBDb2xsbyhjb2xsZWN0aW9uKSB7XG5cdHZhciBvcHRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuXHR2YXIgX3RoaXMgPSB0aGlzO1xuXG5cdHZhciBuZXh0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBmdW5jdGlvbiAoKSB7fTtcblx0dmFyIGVycm9yID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiBmdW5jdGlvbiAoKSB7fTtcblxuXHR0aGlzLl9jb2xsZWN0aW9uID0gY29sbGVjdGlvbiB8fCBbXTtcblxuXHR2YXIgc2VsZiA9IHRoaXM7XG5cdHZhciBJbnZhbGlkSW5wdXRUeXBlID0gXCJJbnZhbGlkIGlucHV0IHR5cGUuIElucHV0IG11c3QgYmUgYW4gb2JqZWN0XCI7XG5cdHZhciBOb3RGb3VuZCA9IFwiSXRlbSBub3QgZm91bmQgaW4gdGhlIGNvbGxlY3Rpb25cIjtcblxuXHR2YXIgb3B0aW9ucyA9IG9wdHMgfHwge307XG5cblx0LyoqXG4gICogU2V0dGVyIGZvciBwcm9taXNpZnlpbmcgdGhlIGFwaVxuICAqL1xuXHRzZWxmLnByb21pc2lmeSA9IGZ1bmN0aW9uICgpIHtcblx0XHRvcHRpb25zWydwcm9taXNpZnknXSA9IHRydWU7cmV0dXJuIF90aGlzO1xuXHR9O1xuXHRzZWxmLnVuUHJvbWlzaWZ5ID0gZnVuY3Rpb24gKCkge1xuXHRcdG9wdGlvbnNbJ3Byb21pc2lmeSddID0gZmFsc2U7cmV0dXJuIF90aGlzO1xuXHR9O1xuXG5cdC8qKlxuICAqIENoZWNrIGlmIGlzIGFuIG9iamVjdCB3aXRoIHZhbHVlc1xuICAqIEBwYXJhbSBpdGVtXG4gICogQHByaXZhdGVcbiAgKi9cblx0c2VsZi5faXNPYmplY3QgPSBmdW5jdGlvbiAoaXRlbSkge1xuXHRcdHJldHVybiBpdGVtICYmICh0eXBlb2YgaXRlbSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGl0ZW0pKSA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmtleXMoaXRlbSkubGVuZ3RoO1xuXHR9O1xuXG5cdC8qKlxuICAqIEludGVybmFsIGluZGV4IGZldGNoZXJcbiAgKiBAcGFyYW0gdmFsXG4gICogQHJldHVybnMge2Jvb2xlYW59XG4gICogQHByaXZhdGVcbiAgKi9cblx0c2VsZi5fZ2V0VGhlSW5kZXhPZiA9IGZ1bmN0aW9uICh2YWwpIHtcblx0XHR2YXIgaW5kZXggPSBmYWxzZTtcblx0XHR2YXIga2V5ID0gT2JqZWN0LmtleXModmFsKVswXTtcblxuXHRcdHNlbGYuX2NvbGxlY3Rpb24uZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaSkge1xuXHRcdFx0aWYgKGl0ZW1ba2V5XSA9PT0gdmFsW2tleV0pIHtcblx0XHRcdFx0aW5kZXggPSBpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGluZGV4O1xuXHR9O1xuXG5cdC8qKlxuICAqIFJzcG9uc2UgdXRpbGl0eSBmbnNcbiAgKiBAcGFyYW0gaW5wdXRcbiAgKiBAcGFyYW0gb3B0aW9uc1xuICAqIEBwYXJhbSBuZXh0XG4gICogQHJldHVybnMgeyp9XG4gICovXG5cdHNlbGYuX29uU3VjY2VzcyA9IGZ1bmN0aW9uIChpbnB1dCwgb3B0aW9ucykge1xuXHRcdG5leHQoc2VsZi5fY29sbGVjdGlvbik7XG5cblx0XHRpZiAob3B0aW9ucy5wcm9taXNpZnkpIHtcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0XHRcdHJlc29sdmUoaW5wdXQpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGlucHV0O1xuXHR9O1xuXG5cdHNlbGYuX29uRmFpbCA9IGZ1bmN0aW9uIChpbnB1dCwgb3B0aW9ucykge1xuXHRcdGVycm9yKG51bGwsIGlucHV0KTtcblxuXHRcdGlmIChvcHRpb25zLnByb21pc2lmeSkge1xuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHRcdFx0cmVqZWN0KG51bGwsIGlucHV0KTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9O1xuXG5cdC8qKlxuICAqIFB1YmxpYyBnZXQgdGhlIGluZGV4IG9mIG1ldGhvZFxuICAqIEBwYXJhbSB2YWxcbiAgKiBAcmV0dXJucyB7Kn1cbiAgKi9cblx0c2VsZi5nZXRUaGVJbmRleE9mID0gZnVuY3Rpb24gKHZhbCkge1xuXHRcdGlmIChzZWxmLl9pc09iamVjdCh2YWwpKSB7XG5cdFx0XHR2YXIgaW5kZXggPSBzZWxmLl9nZXRUaGVJbmRleE9mKHZhbCk7XG5cblx0XHRcdGlmIChpbmRleCkge1xuXHRcdFx0XHRyZXR1cm4gc2VsZi5fb25TdWNjZXNzKGluZGV4LCBvcHRpb25zKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBzZWxmLl9vbkZhaWwoeyBFcnJvcjogTm90Rm91bmQgfSwgb3B0aW9ucyk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBzZWxmLl9vbkZhaWwoeyBFcnJvcjogSW52YWxpZElucHV0VHlwZSB9LCBvcHRpb25zKTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG4gICogUmV0dXJuIHRoZSBjdXJyZW50IGNvbGxlY3Rpb25cbiAgKi9cblx0c2VsZi5saXN0ID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBzZWxmLl9vblN1Y2Nlc3Moc2VsZi5fY29sbGVjdGlvbiwgb3B0aW9ucyk7XG5cdH07XG5cblx0LyoqXG4gICogUmV0dXJuIHRoZSBpdGVtIHdoZXJlIHRoZSBrZXkvYWwgbWF0Y2hcbiAgKiBAcGFyYW0gdmFsXG4gICovXG5cdHNlbGYuZmluZFdoZXJlID0gZnVuY3Rpb24gKHZhbCkge1xuXHRcdGlmIChzZWxmLl9pc09iamVjdCh2YWwpKSB7XG5cdFx0XHR2YXIgaSA9IHNlbGYuX2NvbGxlY3Rpb24uZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHRcdHZhciBrZXkgPSBPYmplY3Qua2V5cyh2YWwpWzBdO1xuXG5cdFx0XHRcdHJldHVybiBpdGVtW2tleV0gJiYgaXRlbVtrZXldID09PSB2YWxba2V5XTtcblx0XHRcdH0pWzBdO1xuXG5cdFx0XHRpZiAoaSkge1xuXHRcdFx0XHRyZXR1cm4gc2VsZi5fb25TdWNjZXNzKGksIG9wdGlvbnMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHNlbGYuX29uU3VjY2VzcyhudWxsLCBvcHRpb25zKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHNlbGYuX29uRmFpbCh7IEVycm9yOiBJbnZhbGlkSW5wdXRUeXBlIH0sIG9wdGlvbnMpO1xuXHRcdH1cblx0fTtcblxuXHQvKipcbiAgKiBVc2VkIHRvIGRldGVybWluZSBpZiBhbiBpdGVtIGlzIGluIHRoZSBjb2xsZWN0aW9uXG4gICogQHBhcmFtIHZhbFxuICAqL1xuXHRzZWxmLmV4aXN0cyA9IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gc2VsZi5faXNPYmplY3QodmFsKSA/IHNlbGYuX29uU3VjY2VzcyghIXNlbGYuX2dldFRoZUluZGV4T2YodmFsKSwgb3B0aW9ucykgOiBzZWxmLl9vbkZhaWwoeyBFcnJvcjogSW52YWxpZElucHV0VHlwZSB9LCBvcHRpb25zKTtcblx0fTtcblxuXHQvKipcbiAgKiBJbnNlcnQgdGhlIGl0ZW0gYXQgdGhlIGVuZCBvZiB0aGUgc3RhY2tcbiAgKiBAcGFyYW0gaXRlbVxuICAqIEByZXR1cm5zIHsqfEFycmF5fVxuICAqL1xuXHRzZWxmLmluc2VydCA9IGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0aWYgKHNlbGYuX2lzT2JqZWN0KGl0ZW0pKSB7XG5cdFx0XHRzZWxmLl9jb2xsZWN0aW9uLnB1c2goaXRlbSk7XG5cblx0XHRcdHJldHVybiBzZWxmLl9vblN1Y2Nlc3Moc2VsZi5fY29sbGVjdGlvbiwgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHNlbGYuX29uRmFpbCh7IEVycm9yOiBJbnZhbGlkSW5wdXRUeXBlIH0sIG9wdGlvbnMpO1xuXHR9O1xuXG5cdC8qKlxuICAqIFNwbGljZSBhbiBpdGVtIGluIGF0IGFuIGV4YWN0IHBvc2l0aW9uIGluIHRoZSBjb2xsZWN0aW9uXG4gICogQHBhcmFtIGl0ZW1cbiAgKiBAcGFyYW0gaW5kZXhcbiAgKiBAcmV0dXJucyB7KnxBcnJheX1cbiAgKi9cblx0c2VsZi5pbnNlcnRBdEluZGV4ID0gZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG5cdFx0aWYgKHNlbGYuX2lzT2JqZWN0KGl0ZW0pKSB7XG5cdFx0XHRzZWxmLl9jb2xsZWN0aW9uLnNwbGljZShpbmRleCwgMCwgaXRlbSk7XG5cblx0XHRcdHJldHVybiBzZWxmLl9vblN1Y2Nlc3Moc2VsZi5fY29sbGVjdGlvbiwgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHNlbGYuX29uRmFpbCh7IEVycm9yOiBJbnZhbGlkSW5wdXRUeXBlIH0sIG9wdGlvbnMpO1xuXHR9O1xuXG5cdC8qKlxuICAqIElmIHRoZSBpdGVtIGV4aXN0cywgcGVyZm9ybSBhbiBkdXBkYXRlLCBvdGhlcndpc2UgaW5zZXJ0XG4gICogQHBhcmFtIHZhbFxuICAqIEBwYXJhbSBpdGVtXG4gICogQHJldHVybnMgeyp9XG4gICovXG5cdHNlbGYudXBzZXJ0ID0gZnVuY3Rpb24gKHZhbCwgaXRlbSkge1xuXHRcdGlmIChzZWxmLl9pc09iamVjdCh2YWwpICYmIHNlbGYuX2lzT2JqZWN0KGl0ZW0pKSB7XG5cdFx0XHRpZiAoIXNlbGYuX2dldFRoZUluZGV4T2YodmFsKSkge1xuXHRcdFx0XHRzZWxmLmluc2VydChpdGVtKTtcblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Ly8gVXBkYXRlXG5cdFx0XHRcdHNlbGYuX2NvbGxlY3Rpb24gPSBzZWxmLl9jb2xsZWN0aW9uLm1hcChmdW5jdGlvbiAoaXQpIHtcblx0XHRcdFx0XHR2YXIga2V5ID0gT2JqZWN0LmtleXModmFsKVswXTtcblxuXHRcdFx0XHRcdGlmIChpdFtrZXldID09PSB2YWxba2V5XSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGl0LCBpdGVtKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm4gaXQ7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gc2VsZi5fb25TdWNjZXNzKHNlbGYuX2NvbGxlY3Rpb24sIG9wdGlvbnMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gc2VsZi5fb25GYWlsKHsgRXJyb3I6IEludmFsaWRJbnB1dFR5cGUgfSwgb3B0aW9ucyk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuICAqIFJlbW92ZSB3aGVyZSB0aGUga2V5IGFuZCB2YWx1ZSBtYXRjaFxuICAqIEBwYXJhbSB2YWxcbiAgKi9cblx0c2VsZi5yZW1vdmVXaGVyZSA9IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRpZiAoc2VsZi5faXNPYmplY3QodmFsKSkge1xuXHRcdFx0dmFyIGluZGV4ID0gc2VsZi5fZ2V0VGhlSW5kZXhPZih2YWwpO1xuXG5cdFx0XHRpZiAoaW5kZXgpIHtcblx0XHRcdFx0c2VsZi5fY29sbGVjdGlvbi5zcGxpY2UoaW5kZXgsIDEpO1xuXG5cdFx0XHRcdHJldHVybiBzZWxmLl9vblN1Y2Nlc3Moc2VsZi5fY29sbGVjdGlvbiwgb3B0aW9ucyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gc2VsZi5fb25GYWlsKHsgRXJyb3I6IE5vdEZvdW5kIH0sIG9wdGlvbnMpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBzZWxmLl9vbkZhaWwoeyBFcnJvcjogSW52YWxpZElucHV0VHlwZSB9LCBvcHRpb25zKTtcblx0fTtcblxuXHQvKipcbiAgKiBQZXJmb3JtIGEgbm9ybWFsIHVwZGF0ZSBpZiB0aGUga2V5IGFuZCB2YWx1ZSBtYXRjaFxuICAqIEBwYXJhbSB2YWxcbiAgKiBAcGFyYW0gaXRlbVxuICAqL1xuXHRzZWxmLnVwZGF0ZVdoZXJlID0gZnVuY3Rpb24gKHZhbCwgaXRlbSkge1xuXHRcdGlmIChzZWxmLl9pc09iamVjdCh2YWwpICYmIHNlbGYuX2lzT2JqZWN0KHZhbCkpIHtcblx0XHRcdHNlbGYuX2NvbGxlY3Rpb24gPSBzZWxmLl9jb2xsZWN0aW9uLm1hcChmdW5jdGlvbiAoaXQpIHtcblxuXHRcdFx0XHR2YXIga2V5ID0gT2JqZWN0LmtleXModmFsKVswXTtcblxuXHRcdFx0XHRpZiAoaXRba2V5XSA9PT0gdmFsW2tleV0pIHtcblx0XHRcdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgaXQsIGl0ZW0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiBpdDtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiBzZWxmLl9vblN1Y2Nlc3Moc2VsZi5fY29sbGVjdGlvbiwgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHNlbGYuX29uRmFpbCh7IEVycm9yOiBJbnZhbGlkSW5wdXRUeXBlIH0sIG9wdGlvbnMpO1xuXHR9O1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQ29sbG87XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNoYWlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjaGFpXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDaG5CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ25CQTtBQUNBOzs7OztBQ0RBO0FBQ0E7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQWpCQTtBQUNBO0FBQUE7QUFBQTtBQWlCQTtBQUNBO0FBQ0E7Ozs7OztBQzlCQTs7Ozs7OztBQWNBOztBQUFBOzs7O0FBQUE7Ozs7O0FBQUE7Ozs7OztBQUFBOzs7O0FBQUE7O0FBQUE7OztBQUFBOzs7QUFBQTs7OztBQUFBOzs7OztBQUFBOzs7OztBQUFBO0FBeUxBOzs7QUF6TEE7Ozs7QUFBQTtBQUNBOzs7OztBQ2pCQTtBQUNBOzsiLCJzb3VyY2VSb290IjoiIn0=