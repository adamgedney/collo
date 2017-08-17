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
const collection = new __WEBPACK_IMPORTED_MODULE_1_Src_index_js___default.a(c);

if(promisify){
	collection.promisify();
}

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
			collection.promisify();

			collection.upsert({id:3},{
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
			collection.promisify();

			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(collection.upsert({id:2},{
				id: 2,
				name: 'Juliana & Mila'
			}))
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
			collection.promisify();

			collection.updateWhere({id:2},{
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
			collection.promisify();

			collection.removeWhere({id:2})
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
			collection.promisify();

			collection.getTheIndexOf({id:2})
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
var cov_1xfx4nf6ru=function(){var path="/Users/computer/Documents/_Projects/myNpmPackages/collo/src/index.js",hash="f5fc848894d410c4f30a918752964767e1927ace",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/computer/Documents/_Projects/myNpmPackages/collo/src/index.js",statementMap:{"0":{start:{line:3,column:0},end:{line:5,column:3}},"1":{start:{line:7,column:14},end:{line:7,column:268}},"2":{start:{line:7,column:101},end:{line:7,column:119}},"3":{start:{line:7,column:141},end:{line:7,column:266}},"4":{start:{line:10,column:12},end:{line:10,column:82}},"5":{start:{line:12,column:13},end:{line:12,column:17}},"6":{start:{line:14,column:12},end:{line:14,column:94}},"7":{start:{line:15,column:13},end:{line:15,column:95}},"8":{start:{line:17,column:1},end:{line:17,column:37}},"9":{start:{line:18,column:1},end:{line:18,column:18}},"10":{start:{line:19,column:1},end:{line:19,column:20}},"11":{start:{line:21,column:12},end:{line:21,column:16}},"12":{start:{line:22,column:24},end:{line:22,column:69}},"13":{start:{line:23,column:16},end:{line:23,column:50}},"14":{start:{line:25,column:15},end:{line:25,column:25}},"15":{start:{line:30,column:1},end:{line:32,column:3}},"16":{start:{line:31,column:2},end:{line:31,column:30}},"17":{start:{line:39,column:1},end:{line:41,column:3}},"18":{start:{line:40,column:2},end:{line:40,column:118}},"19":{start:{line:49,column:1},end:{line:60,column:3}},"20":{start:{line:50,column:14},end:{line:50,column:19}},"21":{start:{line:51,column:12},end:{line:51,column:31}},"22":{start:{line:53,column:2},end:{line:57,column:5}},"23":{start:{line:54,column:3},end:{line:56,column:4}},"24":{start:{line:55,column:4},end:{line:55,column:14}},"25":{start:{line:59,column:2},end:{line:59,column:15}},"26":{start:{line:69,column:1},end:{line:79,column:3}},"27":{start:{line:70,column:2},end:{line:70,column:20}},"28":{start:{line:72,column:2},end:{line:76,column:3}},"29":{start:{line:73,column:3},end:{line:75,column:6}},"30":{start:{line:74,column:4},end:{line:74,column:19}},"31":{start:{line:78,column:2},end:{line:78,column:15}},"32":{start:{line:81,column:1},end:{line:93,column:3}},"33":{start:{line:82,column:17},end:{line:82,column:21}},"34":{start:{line:84,column:2},end:{line:84,column:31}},"35":{start:{line:86,column:2},end:{line:90,column:3}},"36":{start:{line:87,column:3},end:{line:89,column:6}},"37":{start:{line:88,column:4},end:{line:88,column:28}},"38":{start:{line:92,column:2},end:{line:92,column:18}},"39":{start:{line:100,column:1},end:{line:112,column:3}},"40":{start:{line:101,column:2},end:{line:111,column:3}},"41":{start:{line:102,column:15},end:{line:102,column:39}},"42":{start:{line:104,column:3},end:{line:108,column:4}},"43":{start:{line:105,column:4},end:{line:105,column:43}},"44":{start:{line:107,column:4},end:{line:107,column:54}},"45":{start:{line:110,column:3},end:{line:110,column:61}},"46":{start:{line:117,column:1},end:{line:119,column:3}},"47":{start:{line:118,column:2},end:{line:118,column:52}},"48":{start:{line:125,column:1},end:{line:141,column:3}},"49":{start:{line:126,column:2},end:{line:140,column:3}},"50":{start:{line:127,column:11},end:{line:131,column:8}},"51":{start:{line:128,column:14},end:{line:128,column:33}},"52":{start:{line:130,column:4},end:{line:130,column:47}},"53":{start:{line:133,column:3},end:{line:137,column:4}},"54":{start:{line:134,column:4},end:{line:134,column:39}},"55":{start:{line:136,column:4},end:{line:136,column:42}},"56":{start:{line:139,column:3},end:{line:139,column:61}},"57":{start:{line:147,column:1},end:{line:149,column:3}},"58":{start:{line:148,column:2},end:{line:148,column:137}},"59":{start:{line:156,column:1},end:{line:164,column:3}},"60":{start:{line:157,column:2},end:{line:161,column:3}},"61":{start:{line:158,column:3},end:{line:158,column:31}},"62":{start:{line:160,column:3},end:{line:160,column:53}},"63":{start:{line:163,column:2},end:{line:163,column:60}},"64":{start:{line:172,column:1},end:{line:180,column:3}},"65":{start:{line:173,column:2},end:{line:177,column:3}},"66":{start:{line:174,column:3},end:{line:174,column:43}},"67":{start:{line:176,column:3},end:{line:176,column:53}},"68":{start:{line:179,column:2},end:{line:179,column:60}},"69":{start:{line:188,column:1},end:{line:210,column:3}},"70":{start:{line:189,column:2},end:{line:207,column:3}},"71":{start:{line:190,column:3},end:{line:204,column:4}},"72":{start:{line:191,column:4},end:{line:191,column:22}},"73":{start:{line:195,column:4},end:{line:203,column:7}},"74":{start:{line:196,column:15},end:{line:196,column:34}},"75":{start:{line:198,column:5},end:{line:200,column:6}},"76":{start:{line:199,column:6},end:{line:199,column:41}},"77":{start:{line:202,column:5},end:{line:202,column:15}},"78":{start:{line:206,column:3},end:{line:206,column:53}},"79":{start:{line:209,column:2},end:{line:209,column:60}},"80":{start:{line:216,column:1},end:{line:230,column:3}},"81":{start:{line:217,column:2},end:{line:227,column:3}},"82":{start:{line:218,column:15},end:{line:218,column:39}},"83":{start:{line:220,column:3},end:{line:226,column:4}},"84":{start:{line:221,column:4},end:{line:221,column:38}},"85":{start:{line:223,column:4},end:{line:223,column:54}},"86":{start:{line:225,column:4},end:{line:225,column:54}},"87":{start:{line:229,column:2},end:{line:229,column:60}},"88":{start:{line:237,column:1},end:{line:254,column:3}},"89":{start:{line:238,column:2},end:{line:251,column:3}},"90":{start:{line:239,column:3},end:{line:248,column:6}},"91":{start:{line:241,column:14},end:{line:241,column:33}},"92":{start:{line:243,column:4},end:{line:247,column:5}},"93":{start:{line:244,column:5},end:{line:244,column:40}},"94":{start:{line:246,column:5},end:{line:246,column:15}},"95":{start:{line:250,column:3},end:{line:250,column:53}},"96":{start:{line:253,column:2},end:{line:253,column:60}},"97":{start:{line:256,column:1},end:{line:256,column:13}},"98":{start:{line:259,column:0},end:{line:259,column:24}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:7,column:84},end:{line:7,column:85}},loc:{start:{line:7,column:99},end:{line:7,column:121}},line:7},"1":{name:"(anonymous_1)",decl:{start:{line:7,column:124},end:{line:7,column:125}},loc:{start:{line:7,column:139},end:{line:7,column:268}},line:7},"2":{name:"collo",decl:{start:{line:9,column:9},end:{line:9,column:14}},loc:{start:{line:9,column:27},end:{line:257,column:1}},line:9},"3":{name:"(anonymous_3)",decl:{start:{line:14,column:80},end:{line:14,column:81}},loc:{start:{line:14,column:92},end:{line:14,column:94}},line:14},"4":{name:"(anonymous_4)",decl:{start:{line:15,column:81},end:{line:15,column:82}},loc:{start:{line:15,column:93},end:{line:15,column:95}},line:15},"5":{name:"(anonymous_5)",decl:{start:{line:30,column:18},end:{line:30,column:19}},loc:{start:{line:30,column:30},end:{line:32,column:2}},line:30},"6":{name:"(anonymous_6)",decl:{start:{line:39,column:18},end:{line:39,column:19}},loc:{start:{line:39,column:34},end:{line:41,column:2}},line:39},"7":{name:"(anonymous_7)",decl:{start:{line:49,column:23},end:{line:49,column:24}},loc:{start:{line:49,column:38},end:{line:60,column:2}},line:49},"8":{name:"(anonymous_8)",decl:{start:{line:53,column:27},end:{line:53,column:28}},loc:{start:{line:53,column:46},end:{line:57,column:3}},line:53},"9":{name:"(anonymous_9)",decl:{start:{line:69,column:19},end:{line:69,column:20}},loc:{start:{line:69,column:45},end:{line:79,column:2}},line:69},"10":{name:"(anonymous_10)",decl:{start:{line:73,column:22},end:{line:73,column:23}},loc:{start:{line:73,column:49},end:{line:75,column:4}},line:73},"11":{name:"(anonymous_11)",decl:{start:{line:81,column:16},end:{line:81,column:17}},loc:{start:{line:81,column:42},end:{line:93,column:2}},line:81},"12":{name:"(anonymous_12)",decl:{start:{line:87,column:22},end:{line:87,column:23}},loc:{start:{line:87,column:49},end:{line:89,column:4}},line:87},"13":{name:"(anonymous_13)",decl:{start:{line:100,column:22},end:{line:100,column:23}},loc:{start:{line:100,column:37},end:{line:112,column:2}},line:100},"14":{name:"(anonymous_14)",decl:{start:{line:117,column:13},end:{line:117,column:14}},loc:{start:{line:117,column:25},end:{line:119,column:2}},line:117},"15":{name:"(anonymous_15)",decl:{start:{line:125,column:18},end:{line:125,column:19}},loc:{start:{line:125,column:33},end:{line:141,column:2}},line:125},"16":{name:"(anonymous_16)",decl:{start:{line:127,column:35},end:{line:127,column:36}},loc:{start:{line:127,column:51},end:{line:131,column:4}},line:127},"17":{name:"(anonymous_17)",decl:{start:{line:147,column:15},end:{line:147,column:16}},loc:{start:{line:147,column:30},end:{line:149,column:2}},line:147},"18":{name:"(anonymous_18)",decl:{start:{line:156,column:15},end:{line:156,column:16}},loc:{start:{line:156,column:31},end:{line:164,column:2}},line:156},"19":{name:"(anonymous_19)",decl:{start:{line:172,column:22},end:{line:172,column:23}},loc:{start:{line:172,column:45},end:{line:180,column:2}},line:172},"20":{name:"(anonymous_20)",decl:{start:{line:188,column:15},end:{line:188,column:16}},loc:{start:{line:188,column:36},end:{line:210,column:2}},line:188},"21":{name:"(anonymous_21)",decl:{start:{line:195,column:44},end:{line:195,column:45}},loc:{start:{line:195,column:58},end:{line:203,column:5}},line:195},"22":{name:"(anonymous_22)",decl:{start:{line:216,column:20},end:{line:216,column:21}},loc:{start:{line:216,column:35},end:{line:230,column:2}},line:216},"23":{name:"(anonymous_23)",decl:{start:{line:237,column:20},end:{line:237,column:21}},loc:{start:{line:237,column:41},end:{line:254,column:2}},line:237},"24":{name:"(anonymous_24)",decl:{start:{line:239,column:43},end:{line:239,column:44}},loc:{start:{line:239,column:57},end:{line:248,column:4}},line:239}},branchMap:{"0":{loc:{start:{line:7,column:14},end:{line:7,column:268}},type:"cond-expr",locations:[{start:{line:7,column:84},end:{line:7,column:121}},{start:{line:7,column:124},end:{line:7,column:268}}],line:7},"1":{loc:{start:{line:7,column:14},end:{line:7,column:81}},type:"binary-expr",locations:[{start:{line:7,column:14},end:{line:7,column:42}},{start:{line:7,column:46},end:{line:7,column:81}}],line:7},"2":{loc:{start:{line:7,column:148},end:{line:7,column:265}},type:"cond-expr",locations:[{start:{line:7,column:244},end:{line:7,column:252}},{start:{line:7,column:255},end:{line:7,column:265}}],line:7},"3":{loc:{start:{line:7,column:148},end:{line:7,column:241}},type:"binary-expr",locations:[{start:{line:7,column:148},end:{line:7,column:151}},{start:{line:7,column:155},end:{line:7,column:183}},{start:{line:7,column:187},end:{line:7,column:213}},{start:{line:7,column:217},end:{line:7,column:241}}],line:7},"4":{loc:{start:{line:10,column:12},end:{line:10,column:82}},type:"cond-expr",locations:[{start:{line:10,column:65},end:{line:10,column:77}},{start:{line:10,column:80},end:{line:10,column:82}}],line:10},"5":{loc:{start:{line:10,column:12},end:{line:10,column:62}},type:"binary-expr",locations:[{start:{line:10,column:12},end:{line:10,column:32}},{start:{line:10,column:36},end:{line:10,column:62}}],line:10},"6":{loc:{start:{line:14,column:12},end:{line:14,column:94}},type:"cond-expr",locations:[{start:{line:14,column:65},end:{line:14,column:77}},{start:{line:14,column:80},end:{line:14,column:94}}],line:14},"7":{loc:{start:{line:14,column:12},end:{line:14,column:62}},type:"binary-expr",locations:[{start:{line:14,column:12},end:{line:14,column:32}},{start:{line:14,column:36},end:{line:14,column:62}}],line:14},"8":{loc:{start:{line:15,column:13},end:{line:15,column:95}},type:"cond-expr",locations:[{start:{line:15,column:66},end:{line:15,column:78}},{start:{line:15,column:81},end:{line:15,column:95}}],line:15},"9":{loc:{start:{line:15,column:13},end:{line:15,column:63}},type:"binary-expr",locations:[{start:{line:15,column:13},end:{line:15,column:33}},{start:{line:15,column:37},end:{line:15,column:63}}],line:15},"10":{loc:{start:{line:17,column:20},end:{line:17,column:36}},type:"binary-expr",locations:[{start:{line:17,column:20},end:{line:17,column:30}},{start:{line:17,column:34},end:{line:17,column:36}}],line:17},"11":{loc:{start:{line:25,column:15},end:{line:25,column:25}},type:"binary-expr",locations:[{start:{line:25,column:15},end:{line:25,column:19}},{start:{line:25,column:23},end:{line:25,column:25}}],line:25},"12":{loc:{start:{line:40,column:9},end:{line:40,column:117}},type:"binary-expr",locations:[{start:{line:40,column:9},end:{line:40,column:13}},{start:{line:40,column:17},end:{line:40,column:89}},{start:{line:40,column:93},end:{line:40,column:117}}],line:40},"13":{loc:{start:{line:40,column:18},end:{line:40,column:75}},type:"cond-expr",locations:[{start:{line:40,column:48},end:{line:40,column:59}},{start:{line:40,column:62},end:{line:40,column:75}}],line:40},"14":{loc:{start:{line:54,column:3},end:{line:56,column:4}},type:"if",locations:[{start:{line:54,column:3},end:{line:56,column:4}},{start:{line:54,column:3},end:{line:56,column:4}}],line:54},"15":{loc:{start:{line:72,column:2},end:{line:76,column:3}},type:"if",locations:[{start:{line:72,column:2},end:{line:76,column:3}},{start:{line:72,column:2},end:{line:76,column:3}}],line:72},"16":{loc:{start:{line:86,column:2},end:{line:90,column:3}},type:"if",locations:[{start:{line:86,column:2},end:{line:90,column:3}},{start:{line:86,column:2},end:{line:90,column:3}}],line:86},"17":{loc:{start:{line:101,column:2},end:{line:111,column:3}},type:"if",locations:[{start:{line:101,column:2},end:{line:111,column:3}},{start:{line:101,column:2},end:{line:111,column:3}}],line:101},"18":{loc:{start:{line:104,column:3},end:{line:108,column:4}},type:"if",locations:[{start:{line:104,column:3},end:{line:108,column:4}},{start:{line:104,column:3},end:{line:108,column:4}}],line:104},"19":{loc:{start:{line:126,column:2},end:{line:140,column:3}},type:"if",locations:[{start:{line:126,column:2},end:{line:140,column:3}},{start:{line:126,column:2},end:{line:140,column:3}}],line:126},"20":{loc:{start:{line:130,column:11},end:{line:130,column:46}},type:"binary-expr",locations:[{start:{line:130,column:11},end:{line:130,column:20}},{start:{line:130,column:24},end:{line:130,column:46}}],line:130},"21":{loc:{start:{line:133,column:3},end:{line:137,column:4}},type:"if",locations:[{start:{line:133,column:3},end:{line:137,column:4}},{start:{line:133,column:3},end:{line:137,column:4}}],line:133},"22":{loc:{start:{line:148,column:9},end:{line:148,column:136}},type:"cond-expr",locations:[{start:{line:148,column:31},end:{line:148,column:83}},{start:{line:148,column:86},end:{line:148,column:136}}],line:148},"23":{loc:{start:{line:157,column:2},end:{line:161,column:3}},type:"if",locations:[{start:{line:157,column:2},end:{line:161,column:3}},{start:{line:157,column:2},end:{line:161,column:3}}],line:157},"24":{loc:{start:{line:173,column:2},end:{line:177,column:3}},type:"if",locations:[{start:{line:173,column:2},end:{line:177,column:3}},{start:{line:173,column:2},end:{line:177,column:3}}],line:173},"25":{loc:{start:{line:189,column:2},end:{line:207,column:3}},type:"if",locations:[{start:{line:189,column:2},end:{line:207,column:3}},{start:{line:189,column:2},end:{line:207,column:3}}],line:189},"26":{loc:{start:{line:189,column:6},end:{line:189,column:49}},type:"binary-expr",locations:[{start:{line:189,column:6},end:{line:189,column:25}},{start:{line:189,column:29},end:{line:189,column:49}}],line:189},"27":{loc:{start:{line:190,column:3},end:{line:204,column:4}},type:"if",locations:[{start:{line:190,column:3},end:{line:204,column:4}},{start:{line:190,column:3},end:{line:204,column:4}}],line:190},"28":{loc:{start:{line:198,column:5},end:{line:200,column:6}},type:"if",locations:[{start:{line:198,column:5},end:{line:200,column:6}},{start:{line:198,column:5},end:{line:200,column:6}}],line:198},"29":{loc:{start:{line:217,column:2},end:{line:227,column:3}},type:"if",locations:[{start:{line:217,column:2},end:{line:227,column:3}},{start:{line:217,column:2},end:{line:227,column:3}}],line:217},"30":{loc:{start:{line:220,column:3},end:{line:226,column:4}},type:"if",locations:[{start:{line:220,column:3},end:{line:226,column:4}},{start:{line:220,column:3},end:{line:226,column:4}}],line:220},"31":{loc:{start:{line:238,column:2},end:{line:251,column:3}},type:"if",locations:[{start:{line:238,column:2},end:{line:251,column:3}},{start:{line:238,column:2},end:{line:251,column:3}}],line:238},"32":{loc:{start:{line:238,column:6},end:{line:238,column:48}},type:"binary-expr",locations:[{start:{line:238,column:6},end:{line:238,column:25}},{start:{line:238,column:29},end:{line:238,column:48}}],line:238},"33":{loc:{start:{line:243,column:4},end:{line:247,column:5}},type:"if",locations:[{start:{line:243,column:4},end:{line:247,column:5}},{start:{line:243,column:4},end:{line:247,column:5}}],line:243}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"49":0,"50":0,"51":0,"52":0,"53":0,"54":0,"55":0,"56":0,"57":0,"58":0,"59":0,"60":0,"61":0,"62":0,"63":0,"64":0,"65":0,"66":0,"67":0,"68":0,"69":0,"70":0,"71":0,"72":0,"73":0,"74":0,"75":0,"76":0,"77":0,"78":0,"79":0,"80":0,"81":0,"82":0,"83":0,"84":0,"85":0,"86":0,"87":0,"88":0,"89":0,"90":0,"91":0,"92":0,"93":0,"94":0,"95":0,"96":0,"97":0,"98":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0},b:{"0":[0,0],"1":[0,0],"2":[0,0],"3":[0,0,0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0],"9":[0,0],"10":[0,0],"11":[0,0],"12":[0,0,0],"13":[0,0],"14":[0,0],"15":[0,0],"16":[0,0],"17":[0,0],"18":[0,0],"19":[0,0],"20":[0,0],"21":[0,0],"22":[0,0],"23":[0,0],"24":[0,0],"25":[0,0],"26":[0,0],"27":[0,0],"28":[0,0],"29":[0,0],"30":[0,0],"31":[0,0],"32":[0,0],"33":[0,0]},inputSourceMap:{version:3,sources:["src/index.js"],names:["collo","collection","opts","next","error","_collection","self","InvalidInputType","NotFound","options","promisify","_isObject","item","Object","keys","length","_getTheIndexOf","val","index","key","forEach","i","_onSuccess","input","Promise","resolve","reject","_onFail","response","getTheIndexOf","Error","list","findWhere","filter","exists","insert","push","insertAtIndex","splice","upsert","map","it","assign","removeWhere","updateWhere"],mappings:"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",file:"index.js",sourceRoot:"/Users/computer/Documents/_Projects/myNpmPackages/collo",sourcesContent:["function collo(collection, opts={}, next=()=>{}, error=()=>{}) {\n\tthis._collection = collection || [];\n\tthis.next = next;\n\tthis.error = error;\n\t\n\tconst self = this;\n\tconst InvalidInputType = \"Invalid input type. Input must be an object\";\n\tconst NotFound = \"Item not found in the collection\";\n\n\tlet options = opts || {};\n\n\t/**\n\t * Setter for promisifying the api\n\t */\n\tself.promisify = ()=>{options['promisify'] = true};\n\n\t/**\n\t * Check if is an object with values\n\t * @param item\n\t * @private\n\t */\n\tself._isObject = (item)=>item && typeof item === 'object' && Object.keys(item).length;\n\n\t/**\n\t * Internal index fetcher\n\t * @param val\n\t * @returns {boolean}\n\t * @private\n\t */\n\tself._getTheIndexOf = (val)=>{\n\t\tlet index = false;\n\t\tlet key = Object.keys(val)[0];\n\n\t\tself._collection.forEach((item,i)=>{\n\t\t\tif(item[key] === val[key]){ index = i; }\n\t\t});\n\n\t\treturn index;\n\t};\n\n\n\t/**\n\t * Rsponse utility fns\n\t * @param input\n\t * @param options\n\t * @param next\n\t * @returns {*}\n\t */\n\tself._onSuccess = (input,options)=>{\n\t\tthis.next(input);\n\n\t\tif(options.promisify){\n\t\t\treturn new Promise(function (resolve, reject) {\n\t\t\t\tresolve(input);\n\t\t\t});\n\t\t}\n\n\t\treturn input;\n\t};\n\n\tself._onFail = (input,options)=>{\n\t\tconst response = null;\n\n\t\tthis.error(response,input);\n\n\t\tif(options.promisify){\n\t\t\treturn new Promise(function (resolve, reject) {\n\t\t\t\treject(response,input);\n\t\t\t});\n\t\t}\n\n\t\treturn response;\n\t};\n\n\t/**\n\t * Public get the index of method\n\t * @param val\n\t * @returns {*}\n\t */\n\tself.getTheIndexOf = val=>{\n\t\tif(self._isObject(val)) {\n\t\t\tlet index = self._getTheIndexOf(val);\n\n\t\t\tif(index) {\n\t\t\t\treturn self._onSuccess(index,options)\n\t\t\t}else{\n\t\t\t\treturn self._onFail({Error:NotFound},options)\n\t\t\t}\n\t\t}else{\n\t\t\treturn self._onFail({Error:InvalidInputType},options);\n\t\t}\n\t};\n\n\t/**\n\t * Return the current collection\n\t */\n\tself.list = ()=>self._onSuccess(self._collection,options);\n\n\t/**\n\t * Return the item where the key/al match\n\t * @param val\n\t */\n\tself.findWhere = val => {\n\t\tif(self._isObject(val)) {\n\t\t\tconst i = self._collection\n\t\t\t\t.filter(item => {\n\t\t\t\t\tlet key = Object.keys(val)[0];\n\n\t\t\t\t\treturn item[key] && item[key] === val[key];\n\t\t\t\t})[0];\n\n\t\t\tif (i) {\n\t\t\t\treturn self._onSuccess(i,options);\n\t\t\t} else {\n\t\t\t\treturn self._onSuccess(null,options)\n\t\t\t}\n\t\t}else{\n\t\t\treturn self._onFail({Error:InvalidInputType},options);\n\t\t}\n\t};\n\n\t/**\n\t * Used to determine if an item is in the collection\n\t * @param val\n\t */\n\tself.exists = val =>self._isObject(val)\n\t\t? self._onSuccess(!!self._getTheIndexOf(val),options)\n\t\t: self._onFail({Error:InvalidInputType},options);\n\n\t/**\n\t * Insert the item at the end of the stack\n\t * @param item\n\t * @returns {*|Array}\n\t */\n\tself.insert = item => {\n\t\tif(self._isObject(item)){\n\t\t\tself._collection.push(item);\n\n\t\t\treturn self._onSuccess(self._collection,options);\n\t\t}\n\n\t\treturn self._onFail({Error:InvalidInputType},options);\n\t};\n\n\t/**\n\t * Splice an item in at an exact position in the collection\n\t * @param item\n\t * @param index\n\t * @returns {*|Array}\n\t */\n\tself.insertAtIndex = (item, index) => {\n\t\tif(self._isObject(item)) {\n\t\t\tself._collection.splice(index, 0, item);\n\n\t\t\treturn self._onSuccess(self._collection,options);\n\t\t}\n\n\t\treturn self._onFail({Error:InvalidInputType},options);\n\t};\n\n\t/**\n\t * If the item exists, perform an dupdate, otherwise insert\n\t * @param val\n\t * @param item\n\t * @returns {*}\n\t */\n\tself.upsert = (val,item) => {\n\t\tif(self._isObject(val) && self._isObject(item)) {\n\t\t\tif (!self._getTheIndexOf(val)) {\n\t\t\t\tself.insert(item);\n\t\t\t} else {\n\n\t\t\t\t// Update\n\t\t\t\tself._collection = self._collection.map(it => {\n\t\t\t\t\tlet key = Object.keys(val)[0];\n\n\t\t\t\t\tif (it[key] === val[key]) {\n\t\t\t\t\t\treturn Object.assign({}, it, item);\n\t\t\t\t\t}\n\n\t\t\t\t\treturn it;\n\t\t\t\t});\n\t\t\t}\n\n\t\t\treturn self._onSuccess(self._collection,options);\n\t\t}\n\n\t\treturn self._onFail({Error:InvalidInputType},options);\n\t};\n\n\t/**\n\t * Remove where the key and value match\n\t * @param val\n\t */\n  \tself.removeWhere = val => {\n\t\tif(self._isObject(val)) {\n\t\t\tconst index = self._getTheIndexOf(val);\n\n\t\t\tif(index) {\n\t\t\t\tself._collection.splice(index, 1);\n\n\t\t\t\treturn self._onSuccess(self._collection,options);\n\t\t\t}else{\n\t\t\t\treturn self._onFail({Error:NotFound},options);\t\t\t}\n\t\t}\n\n\t\treturn self._onFail({Error:InvalidInputType},options);\n\t};\n\n\t/**\n\t * Perform a normal update if the key and value match\n\t * @param val\n\t * @param item\n\t */\n\tself.updateWhere = (val,item) => {\n\t\tif(self._isObject(val) && self._isObject(val)){\n\t\t\tself._collection = self._collection.map(it => {\n\n\t\t\t\tlet key = Object.keys(val)[0];\n\n\t\t\t\tif(it[key] === val[key]){\n\t\t\t\t\treturn  Object.assign({},it,item);\n\t\t\t\t}else{\n\t\t\t\t\treturn it;\n\t\t\t\t}\n\t\t\t});\n\n\t\t\treturn self._onSuccess(self._collection,options);\n\t\t}\n\n\t\treturn self._onFail({Error:InvalidInputType},options);\n\t};\n\n\treturn this;\n};\n\n\nexport default collo;\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_1xfx4nf6ru.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});var _typeof=(cov_1xfx4nf6ru.s[1]++,(cov_1xfx4nf6ru.b[1][0]++,typeof Symbol==="function")&&(cov_1xfx4nf6ru.b[1][1]++,typeof Symbol.iterator==="symbol")?(cov_1xfx4nf6ru.b[0][0]++,function(obj){cov_1xfx4nf6ru.f[0]++;cov_1xfx4nf6ru.s[2]++;return typeof obj;}):(cov_1xfx4nf6ru.b[0][1]++,function(obj){cov_1xfx4nf6ru.f[1]++;cov_1xfx4nf6ru.s[3]++;return(cov_1xfx4nf6ru.b[3][0]++,obj)&&(cov_1xfx4nf6ru.b[3][1]++,typeof Symbol==="function")&&(cov_1xfx4nf6ru.b[3][2]++,obj.constructor===Symbol)&&(cov_1xfx4nf6ru.b[3][3]++,obj!==Symbol.prototype)?(cov_1xfx4nf6ru.b[2][0]++,"symbol"):(cov_1xfx4nf6ru.b[2][1]++,typeof obj);}));function collo(collection){cov_1xfx4nf6ru.f[2]++;var opts=(cov_1xfx4nf6ru.s[4]++,(cov_1xfx4nf6ru.b[5][0]++,arguments.length>1)&&(cov_1xfx4nf6ru.b[5][1]++,arguments[1]!==undefined)?(cov_1xfx4nf6ru.b[4][0]++,arguments[1]):(cov_1xfx4nf6ru.b[4][1]++,{}));var _this=(cov_1xfx4nf6ru.s[5]++,this);var next=(cov_1xfx4nf6ru.s[6]++,(cov_1xfx4nf6ru.b[7][0]++,arguments.length>2)&&(cov_1xfx4nf6ru.b[7][1]++,arguments[2]!==undefined)?(cov_1xfx4nf6ru.b[6][0]++,arguments[2]):(cov_1xfx4nf6ru.b[6][1]++,function(){cov_1xfx4nf6ru.f[3]++;}));var error=(cov_1xfx4nf6ru.s[7]++,(cov_1xfx4nf6ru.b[9][0]++,arguments.length>3)&&(cov_1xfx4nf6ru.b[9][1]++,arguments[3]!==undefined)?(cov_1xfx4nf6ru.b[8][0]++,arguments[3]):(cov_1xfx4nf6ru.b[8][1]++,function(){cov_1xfx4nf6ru.f[4]++;}));cov_1xfx4nf6ru.s[8]++;this._collection=(cov_1xfx4nf6ru.b[10][0]++,collection)||(cov_1xfx4nf6ru.b[10][1]++,[]);cov_1xfx4nf6ru.s[9]++;this.next=next;cov_1xfx4nf6ru.s[10]++;this.error=error;var self=(cov_1xfx4nf6ru.s[11]++,this);var InvalidInputType=(cov_1xfx4nf6ru.s[12]++,"Invalid input type. Input must be an object");var NotFound=(cov_1xfx4nf6ru.s[13]++,"Item not found in the collection");var options=(cov_1xfx4nf6ru.s[14]++,(cov_1xfx4nf6ru.b[11][0]++,opts)||(cov_1xfx4nf6ru.b[11][1]++,{}));/**
  * Setter for promisifying the api
  */cov_1xfx4nf6ru.s[15]++;self.promisify=function(){cov_1xfx4nf6ru.f[5]++;cov_1xfx4nf6ru.s[16]++;options['promisify']=true;};/**
  * Check if is an object with values
  * @param item
  * @private
  */cov_1xfx4nf6ru.s[17]++;self._isObject=function(item){cov_1xfx4nf6ru.f[6]++;cov_1xfx4nf6ru.s[18]++;return(cov_1xfx4nf6ru.b[12][0]++,item)&&(cov_1xfx4nf6ru.b[12][1]++,(typeof item==="undefined"?(cov_1xfx4nf6ru.b[13][0]++,"undefined"):(cov_1xfx4nf6ru.b[13][1]++,_typeof(item)))==='object')&&(cov_1xfx4nf6ru.b[12][2]++,Object.keys(item).length);};/**
  * Internal index fetcher
  * @param val
  * @returns {boolean}
  * @private
  */cov_1xfx4nf6ru.s[19]++;self._getTheIndexOf=function(val){cov_1xfx4nf6ru.f[7]++;var index=(cov_1xfx4nf6ru.s[20]++,false);var key=(cov_1xfx4nf6ru.s[21]++,Object.keys(val)[0]);cov_1xfx4nf6ru.s[22]++;self._collection.forEach(function(item,i){cov_1xfx4nf6ru.f[8]++;cov_1xfx4nf6ru.s[23]++;if(item[key]===val[key]){cov_1xfx4nf6ru.b[14][0]++;cov_1xfx4nf6ru.s[24]++;index=i;}else{cov_1xfx4nf6ru.b[14][1]++;}});cov_1xfx4nf6ru.s[25]++;return index;};/**
  * Rsponse utility fns
  * @param input
  * @param options
  * @param next
  * @returns {*}
  */cov_1xfx4nf6ru.s[26]++;self._onSuccess=function(input,options){cov_1xfx4nf6ru.f[9]++;cov_1xfx4nf6ru.s[27]++;_this.next(input);cov_1xfx4nf6ru.s[28]++;if(options.promisify){cov_1xfx4nf6ru.b[15][0]++;cov_1xfx4nf6ru.s[29]++;return new Promise(function(resolve,reject){cov_1xfx4nf6ru.f[10]++;cov_1xfx4nf6ru.s[30]++;resolve(input);});}else{cov_1xfx4nf6ru.b[15][1]++;}cov_1xfx4nf6ru.s[31]++;return input;};cov_1xfx4nf6ru.s[32]++;self._onFail=function(input,options){cov_1xfx4nf6ru.f[11]++;var response=(cov_1xfx4nf6ru.s[33]++,null);cov_1xfx4nf6ru.s[34]++;_this.error(response,input);cov_1xfx4nf6ru.s[35]++;if(options.promisify){cov_1xfx4nf6ru.b[16][0]++;cov_1xfx4nf6ru.s[36]++;return new Promise(function(resolve,reject){cov_1xfx4nf6ru.f[12]++;cov_1xfx4nf6ru.s[37]++;reject(response,input);});}else{cov_1xfx4nf6ru.b[16][1]++;}cov_1xfx4nf6ru.s[38]++;return response;};/**
  * Public get the index of method
  * @param val
  * @returns {*}
  */cov_1xfx4nf6ru.s[39]++;self.getTheIndexOf=function(val){cov_1xfx4nf6ru.f[13]++;cov_1xfx4nf6ru.s[40]++;if(self._isObject(val)){cov_1xfx4nf6ru.b[17][0]++;var index=(cov_1xfx4nf6ru.s[41]++,self._getTheIndexOf(val));cov_1xfx4nf6ru.s[42]++;if(index){cov_1xfx4nf6ru.b[18][0]++;cov_1xfx4nf6ru.s[43]++;return self._onSuccess(index,options);}else{cov_1xfx4nf6ru.b[18][1]++;cov_1xfx4nf6ru.s[44]++;return self._onFail({Error:NotFound},options);}}else{cov_1xfx4nf6ru.b[17][1]++;cov_1xfx4nf6ru.s[45]++;return self._onFail({Error:InvalidInputType},options);}};/**
  * Return the current collection
  */cov_1xfx4nf6ru.s[46]++;self.list=function(){cov_1xfx4nf6ru.f[14]++;cov_1xfx4nf6ru.s[47]++;return self._onSuccess(self._collection,options);};/**
  * Return the item where the key/al match
  * @param val
  */cov_1xfx4nf6ru.s[48]++;self.findWhere=function(val){cov_1xfx4nf6ru.f[15]++;cov_1xfx4nf6ru.s[49]++;if(self._isObject(val)){cov_1xfx4nf6ru.b[19][0]++;var i=(cov_1xfx4nf6ru.s[50]++,self._collection.filter(function(item){cov_1xfx4nf6ru.f[16]++;var key=(cov_1xfx4nf6ru.s[51]++,Object.keys(val)[0]);cov_1xfx4nf6ru.s[52]++;return(cov_1xfx4nf6ru.b[20][0]++,item[key])&&(cov_1xfx4nf6ru.b[20][1]++,item[key]===val[key]);})[0]);cov_1xfx4nf6ru.s[53]++;if(i){cov_1xfx4nf6ru.b[21][0]++;cov_1xfx4nf6ru.s[54]++;return self._onSuccess(i,options);}else{cov_1xfx4nf6ru.b[21][1]++;cov_1xfx4nf6ru.s[55]++;return self._onSuccess(null,options);}}else{cov_1xfx4nf6ru.b[19][1]++;cov_1xfx4nf6ru.s[56]++;return self._onFail({Error:InvalidInputType},options);}};/**
  * Used to determine if an item is in the collection
  * @param val
  */cov_1xfx4nf6ru.s[57]++;self.exists=function(val){cov_1xfx4nf6ru.f[17]++;cov_1xfx4nf6ru.s[58]++;return self._isObject(val)?(cov_1xfx4nf6ru.b[22][0]++,self._onSuccess(!!self._getTheIndexOf(val),options)):(cov_1xfx4nf6ru.b[22][1]++,self._onFail({Error:InvalidInputType},options));};/**
  * Insert the item at the end of the stack
  * @param item
  * @returns {*|Array}
  */cov_1xfx4nf6ru.s[59]++;self.insert=function(item){cov_1xfx4nf6ru.f[18]++;cov_1xfx4nf6ru.s[60]++;if(self._isObject(item)){cov_1xfx4nf6ru.b[23][0]++;cov_1xfx4nf6ru.s[61]++;self._collection.push(item);cov_1xfx4nf6ru.s[62]++;return self._onSuccess(self._collection,options);}else{cov_1xfx4nf6ru.b[23][1]++;}cov_1xfx4nf6ru.s[63]++;return self._onFail({Error:InvalidInputType},options);};/**
  * Splice an item in at an exact position in the collection
  * @param item
  * @param index
  * @returns {*|Array}
  */cov_1xfx4nf6ru.s[64]++;self.insertAtIndex=function(item,index){cov_1xfx4nf6ru.f[19]++;cov_1xfx4nf6ru.s[65]++;if(self._isObject(item)){cov_1xfx4nf6ru.b[24][0]++;cov_1xfx4nf6ru.s[66]++;self._collection.splice(index,0,item);cov_1xfx4nf6ru.s[67]++;return self._onSuccess(self._collection,options);}else{cov_1xfx4nf6ru.b[24][1]++;}cov_1xfx4nf6ru.s[68]++;return self._onFail({Error:InvalidInputType},options);};/**
  * If the item exists, perform an dupdate, otherwise insert
  * @param val
  * @param item
  * @returns {*}
  */cov_1xfx4nf6ru.s[69]++;self.upsert=function(val,item){cov_1xfx4nf6ru.f[20]++;cov_1xfx4nf6ru.s[70]++;if((cov_1xfx4nf6ru.b[26][0]++,self._isObject(val))&&(cov_1xfx4nf6ru.b[26][1]++,self._isObject(item))){cov_1xfx4nf6ru.b[25][0]++;cov_1xfx4nf6ru.s[71]++;if(!self._getTheIndexOf(val)){cov_1xfx4nf6ru.b[27][0]++;cov_1xfx4nf6ru.s[72]++;self.insert(item);}else{cov_1xfx4nf6ru.b[27][1]++;cov_1xfx4nf6ru.s[73]++;// Update
self._collection=self._collection.map(function(it){cov_1xfx4nf6ru.f[21]++;var key=(cov_1xfx4nf6ru.s[74]++,Object.keys(val)[0]);cov_1xfx4nf6ru.s[75]++;if(it[key]===val[key]){cov_1xfx4nf6ru.b[28][0]++;cov_1xfx4nf6ru.s[76]++;return Object.assign({},it,item);}else{cov_1xfx4nf6ru.b[28][1]++;}cov_1xfx4nf6ru.s[77]++;return it;});}cov_1xfx4nf6ru.s[78]++;return self._onSuccess(self._collection,options);}else{cov_1xfx4nf6ru.b[25][1]++;}cov_1xfx4nf6ru.s[79]++;return self._onFail({Error:InvalidInputType},options);};/**
  * Remove where the key and value match
  * @param val
  */cov_1xfx4nf6ru.s[80]++;self.removeWhere=function(val){cov_1xfx4nf6ru.f[22]++;cov_1xfx4nf6ru.s[81]++;if(self._isObject(val)){cov_1xfx4nf6ru.b[29][0]++;var index=(cov_1xfx4nf6ru.s[82]++,self._getTheIndexOf(val));cov_1xfx4nf6ru.s[83]++;if(index){cov_1xfx4nf6ru.b[30][0]++;cov_1xfx4nf6ru.s[84]++;self._collection.splice(index,1);cov_1xfx4nf6ru.s[85]++;return self._onSuccess(self._collection,options);}else{cov_1xfx4nf6ru.b[30][1]++;cov_1xfx4nf6ru.s[86]++;return self._onFail({Error:NotFound},options);}}else{cov_1xfx4nf6ru.b[29][1]++;}cov_1xfx4nf6ru.s[87]++;return self._onFail({Error:InvalidInputType},options);};/**
  * Perform a normal update if the key and value match
  * @param val
  * @param item
  */cov_1xfx4nf6ru.s[88]++;self.updateWhere=function(val,item){cov_1xfx4nf6ru.f[23]++;cov_1xfx4nf6ru.s[89]++;if((cov_1xfx4nf6ru.b[32][0]++,self._isObject(val))&&(cov_1xfx4nf6ru.b[32][1]++,self._isObject(val))){cov_1xfx4nf6ru.b[31][0]++;cov_1xfx4nf6ru.s[90]++;self._collection=self._collection.map(function(it){cov_1xfx4nf6ru.f[24]++;var key=(cov_1xfx4nf6ru.s[91]++,Object.keys(val)[0]);cov_1xfx4nf6ru.s[92]++;if(it[key]===val[key]){cov_1xfx4nf6ru.b[33][0]++;cov_1xfx4nf6ru.s[93]++;return Object.assign({},it,item);}else{cov_1xfx4nf6ru.b[33][1]++;cov_1xfx4nf6ru.s[94]++;return it;}});cov_1xfx4nf6ru.s[95]++;return self._onSuccess(self._collection,options);}else{cov_1xfx4nf6ru.b[31][1]++;}cov_1xfx4nf6ru.s[96]++;return self._onFail({Error:InvalidInputType},options);};cov_1xfx4nf6ru.s[97]++;return this;};cov_1xfx4nf6ru.s[98]++;exports.default=collo;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("chai");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVubmVyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrL2Jvb3RzdHJhcCA2MDQ0ZjRkNThhMTMyMTAyYjkzMyIsIi9Vc2Vycy9jb21wdXRlci9Eb2N1bWVudHMvX1Byb2plY3RzL215TnBtUGFja2FnZXMvY29sbG8vdGVzdC9zcGVjcy9pbmRleC5zcGVjLmpzIiwiL1VzZXJzL2NvbXB1dGVyL0RvY3VtZW50cy9fUHJvamVjdHMvbXlOcG1QYWNrYWdlcy9jb2xsby90ZXN0IC9eXFwuXFwvc3BlY3MuKiQvIiwiZXh0ZXJuYWwgXCJmc1wiIiwiZXh0ZXJuYWwgXCJmcy1maWxlLXRyZWVcIiIsIi9Vc2Vycy9jb21wdXRlci9Eb2N1bWVudHMvX1Byb2plY3RzL215TnBtUGFja2FnZXMvY29sbG8vdGVzdC9ydW5uZXIuanMiLCIvVXNlcnMvY29tcHV0ZXIvRG9jdW1lbnRzL19Qcm9qZWN0cy9teU5wbVBhY2thZ2VzL2NvbGxvL3NyYy9pbmRleC5qcyIsImV4dGVybmFsIFwiY2hhaVwiIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNjA0NGY0ZDU4YTEzMjEwMmI5MzMiLCJpbXBvcnQgeyBleHBlY3QgfSBmcm9tICdjaGFpJztcbmltcG9ydCBDb2xsbyBmcm9tICdTcmMvaW5kZXguanMnO1xuLy9pbXBvcnQgQ29sbG8gZnJvbSAnTGliL2luZGV4Lm1pbi5qcyc7XG5cbmNvbnN0IGMgPSBbXG4gICAge1xuICAgICAgaWQ6IDEsXG4gICAgICBuYW1lOiAnQWRhbSdcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyLFxuICAgICAgbmFtZTogJ0p1bGlhbmEnXG4gICAgfVxuXTtcblxuLy8gRm9yIHRlc3RpbmcgeW91IGNhbiB0b2dnbGUgdGhpcyBib29sZWFuIHRvIHJ1biB0aGUgcHJvbWlzaWZpZWQgdGVzdHMgb3IgdGhlIHJldHVybnNcbmNvbnN0IHByb21pc2lmeSA9IHRydWU7XG5jb25zdCBjb2xsZWN0aW9uID0gbmV3IENvbGxvKGMpO1xuXG5pZihwcm9taXNpZnkpe1xuXHRjb2xsZWN0aW9uLnByb21pc2lmeSgpO1xufVxuXG4vL2NvbnNvbGUubG9nKCdDT0xMRUNUSU9OKioqKioqKioqKioqJyxjb2xsZWN0aW9uLnByb3RvdHlwZSk7XG5cbi8vIGxpc3RcbmRlc2NyaWJlKCdUaGUgbGlzdCBmbicsICgpID0+IHtcblx0aXQoJ3Nob3VsZCByZXR1cm4gdGhlIHNhbWUgY29sbGVjdGlvbicsICgpID0+IHtcblx0XHRpZighcHJvbWlzaWZ5KSB7XG5cdFx0XHRleHBlY3QoY29sbGVjdGlvbi5saXN0KCkpLnRvLmVxdWFsKGMpO1xuXHRcdH1lbHNle1xuXHRcdFx0Y29sbGVjdGlvblxuXHRcdFx0XHQubGlzdCgpXG5cdFx0XHRcdC50aGVuKHJlcz0+e1xuXHRcdFx0XHRcdGV4cGVjdChyZXMpLnRvLmVxdWFsKGMpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goZXJyPT57XG5cdFx0XHRcdFx0ZXhwZWN0KGVycikudG8uZXF1YWwobnVsbCk7XG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG59KTtcblxuXG4vLyBmaW5kV2hlcmVcbmRlc2NyaWJlKCdUaGUgZmluZFdoZXJlIGZuJywgKCkgPT4ge1xuXHRpdCgnc2hvdWxkIHJldHVybiB0aGUgQWRhbSBvYmplY3QnLCAoKSA9PiB7XG5cdFx0aWYoIXByb21pc2lmeSl7XG5cdFx0XHRleHBlY3QoY29sbGVjdGlvbi5maW5kV2hlcmUoe2lkOjF9KSlcblx0XHRcdFx0LnRvXG5cdFx0XHRcdC5kZWVwXG5cdFx0XHRcdC5lcXVhbCh7XG5cdFx0XHRcdFx0aWQ6IDEsXG5cdFx0XHRcdFx0bmFtZTogJ0FkYW0nXG5cdFx0XHRcdH0pO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHRjb2xsZWN0aW9uLmZpbmRXaGVyZSh7aWQ6MX0pXG5cdFx0XHRcdC50aGVuKHJlcz0+e1xuXHRcdFx0XHRcdGV4cGVjdChyZXMpXG5cdFx0XHRcdFx0XHQudG9cblx0XHRcdFx0XHRcdC5kZWVwXG5cdFx0XHRcdFx0XHQuZXF1YWwoe1xuXHRcdFx0XHRcdFx0XHRpZDogMSxcblx0XHRcdFx0XHRcdFx0bmFtZTogJ0FkYW0nXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKGVycj0+e1xuXHRcdFx0XHRcdGV4cGVjdChlcnIpLnRvLmVxdWFsKG51bGwpO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xufSk7XG5cbmRlc2NyaWJlKCdUaGUgZmluZFdoZXJlIGZuJywgKCkgPT4ge1xuXHRpdCgnc2hvdWxkIHJldHVybiBudWxsIGdpdmVuIGEgYmFkIGlucHV0JywgKCkgPT4ge1xuXHRcdGlmKCFwcm9taXNpZnkpIHtcblx0XHRcdGV4cGVjdChjb2xsZWN0aW9uLmZpbmRXaGVyZShbXSkpXG5cdFx0XHRcdC50b1xuXHRcdFx0XHQuZGVlcFxuXHRcdFx0XHQuZXF1YWwobnVsbCk7XG5cdFx0fWVsc2V7XG5cdFx0XHRjb2xsZWN0aW9uXG5cdFx0XHRcdC5maW5kV2hlcmUoW10pXG5cdFx0XHRcdC50aGVuKHJlcz0+e1xuXHRcdFx0XHRcdGV4cGVjdChyZXMpXG5cdFx0XHRcdFx0XHQudG9cblx0XHRcdFx0XHRcdC5kZWVwXG5cdFx0XHRcdFx0XHQuZXF1YWwobnVsbCk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaChlcnI9Pntcblx0XHRcdFx0XHRleHBlY3QoZXJyKS50by5lcXVhbChudWxsKTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXHR9KTtcbn0pO1xuXG4vLyBleGlzdHNcbmRlc2NyaWJlKCdUaGUgZXhpc3RzIGZuJywgKCkgPT4ge1xuXHRpdCgnc2hvdWxkIHJldHVybiB0cnVlJywgKCkgPT4ge1xuXHRcdGlmKCFwcm9taXNpZnkpIHtcblx0XHRcdGV4cGVjdChjb2xsZWN0aW9uLmV4aXN0cyh7aWQ6IDJ9KSlcblx0XHRcdFx0LnRvXG5cdFx0XHRcdC5lcXVhbCh0cnVlKTtcblx0XHR9ZWxzZXtcblx0XHRcdGNvbGxlY3Rpb24uZXhpc3RzKHtpZDoyfSlcblx0XHRcdFx0LnRoZW4ocmVzPT57XG5cdFx0XHRcdFx0ZXhwZWN0KHJlcylcblx0XHRcdFx0XHRcdC50b1xuXHRcdFx0XHRcdFx0LmVxdWFsKHRydWUpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goZXJyPT57XG5cdFx0XHRcdFx0ZXhwZWN0KGVycikudG8uZXF1YWwobnVsbCk7XG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG59KTtcblxuXG5kZXNjcmliZSgnVGhlIGV4aXN0cyBmbicsICgpID0+IHtcblx0aXQoJ3Nob3VsZCByZXR1cm4gbnVsbCBnaXZlbiBhIGJhZCBpbnB1dCcsICgpID0+IHtcblx0XHRpZighcHJvbWlzaWZ5KSB7XG5cdFx0XHRleHBlY3QoY29sbGVjdGlvbi5leGlzdHMoW10pKVxuXHRcdFx0XHQudG9cblx0XHRcdFx0LmRlZXBcblx0XHRcdFx0LmVxdWFsKG51bGwpO1xuXHRcdH1lbHNle1xuXHRcdFx0Y29sbGVjdGlvbi5leGlzdHMoW10pXG5cdFx0XHRcdC50aGVuKHJlcz0+e1xuXHRcdFx0XHRcdGV4cGVjdChyZXMpXG5cdFx0XHRcdFx0XHQudG9cblx0XHRcdFx0XHRcdC5lcXVhbChudWxsKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKGVycj0+e1xuXHRcdFx0XHRcdGV4cGVjdChlcnIpLnRvLmVxdWFsKG51bGwpO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xufSk7XG5cbi8vIGluc2VydFxuZGVzY3JpYmUoJ1RoZSBpbnNlcnQgZm4nLCAoKSA9PiB7XG5cdGl0KCdzaG91bGQgcmV0dXJuIHRoZSBjb2xsZWN0aW9uIHdpdGggb25lIG1vcmUgaXRlbSBpbiBpdCcsICgpID0+IHtcblx0XHRsZXQgX2MgPSBjO1xuXG5cdFx0X2MucHVzaCh7XG5cdFx0XHRpZDogMyxcblx0XHRcdG5hbWU6ICdQYWtpIFBha2knXG5cdFx0fSk7XG5cblx0XHRpZighcHJvbWlzaWZ5KSB7XG5cdFx0XHRleHBlY3QoY29sbGVjdGlvbi5pbnNlcnQoe1xuXHRcdFx0XHRpZCAgOiAzLFxuXHRcdFx0XHRuYW1lOiAnUGFraSBQYWtpJ1xuXHRcdFx0fSkpXG5cdFx0XHRcdC50b1xuXHRcdFx0XHQuZGVlcFxuXHRcdFx0XHQuZXF1YWwoX2MpO1xuXHRcdH1lbHNle1xuXHRcdFx0Y29sbGVjdGlvbi5pbnNlcnQoe1xuXHRcdFx0XHRpZDogMyxcblx0XHRcdFx0bmFtZTogJ1Bha2kgUGFraSdcblx0XHRcdH0pXG5cdFx0XHRcdC50aGVuKHJlcz0+e1xuXHRcdFx0XHRcdGV4cGVjdChyZXMpXG5cdFx0XHRcdFx0XHQudG9cblx0XHRcdFx0XHRcdC5kZWVwXG5cdFx0XHRcdFx0XHQuZXF1YWwoX2MpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goZXJyPT57XG5cdFx0XHRcdFx0ZXhwZWN0KGVycikudG8uZXF1YWwobnVsbCk7XG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG59KTtcblxuXG5kZXNjcmliZSgnVGhlIGluc2VydCBmbicsICgpID0+IHtcblx0aXQoJ3Nob3VsZCByZXR1cm4gbnVsbCBnaXZlbiBhIGJhZCBpbnB1dCcsICgpID0+IHtcblx0XHRpZighcHJvbWlzaWZ5KSB7XG5cdFx0XHRleHBlY3QoY29sbGVjdGlvbi5pbnNlcnQoW10pKVxuXHRcdFx0XHQudG9cblx0XHRcdFx0LmVxdWFsKG51bGwpO1xuXHRcdH1lbHNle1xuXHRcdFx0Y29sbGVjdGlvbi5pbnNlcnQoW10pXG5cdFx0XHRcdC50aGVuKHJlcz0+e1xuXHRcdFx0XHRcdGV4cGVjdChyZXMpXG5cdFx0XHRcdFx0XHQudG9cblx0XHRcdFx0XHRcdC5lcXVhbChudWxsKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKGVycj0+e1xuXHRcdFx0XHRcdGV4cGVjdChlcnIpLnRvLmVxdWFsKG51bGwpO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xufSk7XG5cbi8vIGluc2VydEF0SW5kZXhcbmRlc2NyaWJlKCdUaGUgaW5zZXJ0QXRJbmRleCBmbicsICgpID0+IHtcblx0aXQoJ3Nob3VsZCByZXR1cm4gdGhlIHNhbWUgY29sbGVjdGlvbiBhcyB0aGUgdGVzdCcsICgpID0+IHtcblx0XHRsZXQgX2MgPSBjO1xuXHRcdGNvbnN0IGluZGV4ID0gMTtcblxuXHRcdF9jLnNwbGljZShpbmRleCwwLHtcblx0XHRcdGlkOiA1LFxuXHRcdFx0bmFtZTogJ01pcm9tJ1xuXHRcdH0pO1xuXG5cdFx0aWYoIXByb21pc2lmeSkge1xuXHRcdFx0ZXhwZWN0KGNvbGxlY3Rpb24uaW5zZXJ0QXRJbmRleCh7XG5cdFx0XHRcdGlkOiAzLFxuXHRcdFx0XHRuYW1lOiAnUGFraSBQYWtpJ1xuXHRcdFx0fSxpbmRleCkpXG5cdFx0XHRcdC50b1xuXHRcdFx0XHQuZGVlcFxuXHRcdFx0XHQuZXF1YWwoX2MpO1xuXHRcdH1lbHNle1xuXHRcdFx0Y29sbGVjdGlvbi5pbnNlcnRBdEluZGV4KHtcblx0XHRcdFx0XHRpZDogMyxcblx0XHRcdFx0XHRuYW1lOiAnUGFraSBQYWtpJ1xuXHRcdFx0XHR9LGluZGV4KVxuXHRcdFx0XHQudGhlbihyZXM9Pntcblx0XHRcdFx0XHRleHBlY3QocmVzKVxuXHRcdFx0XHRcdFx0LnRvXG5cdFx0XHRcdFx0XHQuZGVlcFxuXHRcdFx0XHRcdFx0LmVxdWFsKF9jKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKGVycj0+e1xuXHRcdFx0XHRcdGV4cGVjdChlcnIpLnRvLmVxdWFsKG51bGwpO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xufSk7XG5cblxuZGVzY3JpYmUoJ1RoZSBpbnNlcnRBdEluZGV4IGZuJywgKCkgPT4ge1xuXHRpdCgnc2hvdWxkIHJldHVybiBudWxsIGdpdmVuIGEgYmFkIGlucHV0JywgKCkgPT4ge1xuXHRcdGlmKCFwcm9taXNpZnkpIHtcblx0XHRcdGV4cGVjdChjb2xsZWN0aW9uLmluc2VydEF0SW5kZXgoW10pKVxuXHRcdFx0XHQudG9cblx0XHRcdFx0LmRlZXBcblx0XHRcdFx0LmVxdWFsKG51bGwpO1xuXHRcdH1lbHNle1xuXHRcdFx0Y29sbGVjdGlvbi5pbnNlcnRBdEluZGV4KFtdKVxuXHRcdFx0XHQudGhlbihyZXM9Pntcblx0XHRcdFx0XHRleHBlY3QocmVzKVxuXHRcdFx0XHRcdFx0LnRvXG5cdFx0XHRcdFx0XHQuZXF1YWwobnVsbCk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaChlcnI9Pntcblx0XHRcdFx0XHRleHBlY3QoZXJyKS50by5lcXVhbChudWxsKTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXHR9KTtcbn0pO1xuXG5cbi8vIHVwc2VydCBub3QgZm91bmRcbmRlc2NyaWJlKCdUaGUgdXBzZXJ0IFtOTyBmb3VuZCBpdGVtXSBmbicsICgpID0+IHtcblx0aXQoJ3Nob3VsZCByZXR1cm4gdGhlIHNhbWUgY29sbGVjdGlvbiBhcyB0aGUgaW5wdXQgcGx1cyB0aGUgbmV3IGl0ZW0nLCAoKSA9PiB7XG5cdFx0Y29uc3QgY29sbGVjdGlvbiA9IG5ldyBDb2xsbyhbXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiAxLFxuXHRcdFx0XHRuYW1lOiAnQWRhbSdcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiAyLFxuXHRcdFx0XHRuYW1lOiAnSnVsaWFuYSdcblx0XHRcdH1cblx0XHRdKTtcblxuXHRcdGxldCBfYyA9IFtcblx0XHRcdHtcblx0XHRcdFx0aWQ6IDEsXG5cdFx0XHRcdG5hbWU6ICdBZGFtJ1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aWQ6IDIsXG5cdFx0XHRcdG5hbWU6ICdKdWxpYW5hJ1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aWQ6IDMsXG5cdFx0XHRcdG5hbWU6ICdQYWtpIFBha2knXG5cdFx0XHR9XG5cdFx0XTtcblxuXHRcdGlmKCFwcm9taXNpZnkpIHtcblx0XHRcdGV4cGVjdChjb2xsZWN0aW9uLnVwc2VydCh7aWQ6M30se1xuXHRcdFx0XHRpZDogMyxcblx0XHRcdFx0bmFtZTogJ1Bha2kgUGFraSdcblx0XHRcdH0pKVxuXHRcdFx0XHQudG9cblx0XHRcdFx0LmRlZXBcblx0XHRcdFx0LmVxdWFsKF9jKTtcblx0XHR9ZWxzZXtcblx0XHRcdGNvbGxlY3Rpb24ucHJvbWlzaWZ5KCk7XG5cblx0XHRcdGNvbGxlY3Rpb24udXBzZXJ0KHtpZDozfSx7XG5cdFx0XHRcdFx0aWQ6IDMsXG5cdFx0XHRcdFx0bmFtZTogJ1Bha2kgUGFraSdcblx0XHRcdFx0fSlcblx0XHRcdFx0LnRoZW4ocmVzPT57XG5cdFx0XHRcdFx0ZXhwZWN0KHJlcylcblx0XHRcdFx0XHRcdC50b1xuXHRcdFx0XHRcdFx0LmVxdWFsKG51bGwpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goZXJyPT57XG5cdFx0XHRcdFx0ZXhwZWN0KGVycikudG8uZXF1YWwobnVsbCk7XG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG59KTtcblxuLy8gdXBzZXJ0IGl0ZW0gRk9VTkRcbmRlc2NyaWJlKCdUaGUgdXBzZXJ0IFtJdGVtIEZPVU5EXSBmbicsICgpID0+IHtcblx0aXQoJ3Nob3VsZCByZXR1cm4gdGhlIHNhbWUgY29sbGVjdGlvbiBhcyB0aGUgaW5wdXQgcGx1cyB0aGUgbmV3IGl0ZW0nLCAoKSA9PiB7XG5cdFx0Y29uc3QgY29sbGVjdGlvbiA9IG5ldyBDb2xsbyhbXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiAxLFxuXHRcdFx0XHRuYW1lOiAnQWRhbSdcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiAyLFxuXHRcdFx0XHRuYW1lOiAnSnVsaWFuYSdcblx0XHRcdH1cblx0XHRdKTtcblxuXHRcdGxldCBfYyA9IFtcblx0XHRcdHtcblx0XHRcdFx0aWQ6IDEsXG5cdFx0XHRcdG5hbWU6ICdBZGFtJ1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aWQ6IDIsXG5cdFx0XHRcdG5hbWU6ICdKdWxpYW5hICYgTWlsYSdcblx0XHRcdH1cblx0XHRdO1xuXG5cdFx0aWYoIXByb21pc2lmeSkge1xuXHRcdFx0ZXhwZWN0KGNvbGxlY3Rpb24udXBzZXJ0KHtpZDoyfSx7XG5cdFx0XHRcdGlkOiAyLFxuXHRcdFx0XHRuYW1lOiAnSnVsaWFuYSAmIE1pbGEnXG5cdFx0XHR9KSlcblx0XHRcdFx0LnRvXG5cdFx0XHRcdC5kZWVwXG5cdFx0XHRcdC5lcXVhbChfYyk7XG5cdFx0fWVsc2V7XG5cdFx0XHRjb2xsZWN0aW9uLnByb21pc2lmeSgpO1xuXG5cdFx0XHRleHBlY3QoY29sbGVjdGlvbi51cHNlcnQoe2lkOjJ9LHtcblx0XHRcdFx0aWQ6IDIsXG5cdFx0XHRcdG5hbWU6ICdKdWxpYW5hICYgTWlsYSdcblx0XHRcdH0pKVxuXHRcdFx0XHQudGhlbihyZXM9Pntcblx0XHRcdFx0XHRleHBlY3QocmVzKVxuXHRcdFx0XHRcdFx0LnRvXG5cdFx0XHRcdFx0XHQuZXF1YWwoX2MpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goZXJyPT57XG5cdFx0XHRcdFx0ZXhwZWN0KGVycikudG8uZXF1YWwobnVsbCk7XG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG59KTtcblxuZGVzY3JpYmUoJ1RoZSB1cHNlcnQgZm4nLCAoKSA9PiB7XG5cdGl0KCdzaG91bGQgcmV0dXJuIG51bGwgZ2l2ZW4gYSBiYWQgaW5wdXQnLCAoKSA9PiB7XG5cdFx0aWYoIXByb21pc2lmeSkge1xuXHRcdFx0ZXhwZWN0KGNvbGxlY3Rpb24udXBzZXJ0KFtdKSlcblx0XHRcdFx0LnRvXG5cdFx0XHRcdC5kZWVwXG5cdFx0XHRcdC5lcXVhbChudWxsKTtcblx0XHR9ZWxzZXtcblx0XHRcdGNvbGxlY3Rpb24udXBzZXJ0KFtdKVxuXHRcdFx0XHQudGhlbihyZXM9Pntcblx0XHRcdFx0XHRleHBlY3QocmVzKVxuXHRcdFx0XHRcdFx0LnRvXG5cdFx0XHRcdFx0XHQuZXF1YWwobnVsbCk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaChlcnI9Pntcblx0XHRcdFx0XHRleHBlY3QoZXJyKS50by5lcXVhbChudWxsKTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXHR9KTtcbn0pO1xuXG4vLyB1cGRhdGVXaGVyZVxuZGVzY3JpYmUoJ1RoZSB1cGRhdGVXaGVyZSBmbicsICgpID0+IHtcblx0aXQoJ3Nob3VsZCByZXR1cm4gdGhlIHNhbWUgY29sbGVjdGlvbiBhcyB0aGUgdGVzdCcsICgpID0+IHtcblx0XHRjb25zdCBjb2xsZWN0aW9uID0gbmV3IENvbGxvKFtcblx0XHRcdHtcblx0XHRcdFx0aWQ6IDEsXG5cdFx0XHRcdG5hbWU6ICdBZGFtJ1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aWQ6IDIsXG5cdFx0XHRcdG5hbWU6ICdKdWxpYW5hJ1xuXHRcdFx0fVxuXHRcdF0pO1xuXG5cdFx0bGV0IF9jID0gW1xuXHRcdFx0e1xuXHRcdFx0XHRpZDogMSxcblx0XHRcdFx0bmFtZTogJ0FkYW0nXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRpZDogMixcblx0XHRcdFx0bmFtZTogJ0p1bGlhbmEgJiBNaWxhJ1xuXHRcdFx0fVxuXHRcdF07XG5cblx0XHRpZighcHJvbWlzaWZ5KSB7XG5cdFx0XHRleHBlY3QoY29sbGVjdGlvbi51cGRhdGVXaGVyZSh7aWQ6Mn0se1xuXHRcdFx0XHRpZDogMixcblx0XHRcdFx0bmFtZTogJ0p1bGlhbmEgJiBNaWxhJ1xuXHRcdFx0fSkpXG5cdFx0XHRcdC50b1xuXHRcdFx0XHQuZGVlcFxuXHRcdFx0XHQuZXF1YWwoX2MpO1xuXHRcdH1lbHNle1xuXHRcdFx0Y29sbGVjdGlvbi5wcm9taXNpZnkoKTtcblxuXHRcdFx0Y29sbGVjdGlvbi51cGRhdGVXaGVyZSh7aWQ6Mn0se1xuXHRcdFx0XHRcdGlkOiAyLFxuXHRcdFx0XHRcdG5hbWU6ICdKdWxpYW5hICYgTWlsYSdcblx0XHRcdFx0fSlcblx0XHRcdFx0LnRoZW4ocmVzPT57XG5cdFx0XHRcdFx0ZXhwZWN0KHJlcylcblx0XHRcdFx0XHRcdC50b1xuXHRcdFx0XHRcdFx0LmRlZXBcblx0XHRcdFx0XHRcdC5lcXVhbChfYyk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaChlcnI9Pntcblx0XHRcdFx0XHRleHBlY3QoZXJyKS50by5lcXVhbChudWxsKTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXHR9KTtcbn0pO1xuXG5cbmRlc2NyaWJlKCdUaGUgdXBkYXRlV2hlcmUgZm4nLCAoKSA9PiB7XG5cdGl0KCdzaG91bGQgbnVsbCBudWxsIGdpdmVuIGEgYmFkIGlucHV0JywgKCkgPT4ge1xuXHRcdGlmKCFwcm9taXNpZnkpIHtcblx0XHRcdGV4cGVjdChjb2xsZWN0aW9uLnVwZGF0ZVdoZXJlKFtdKSlcblx0XHRcdFx0LnRvXG5cdFx0XHRcdC5kZWVwXG5cdFx0XHRcdC5lcXVhbChudWxsKTtcblx0XHR9ZWxzZXtcblx0XHRcdGNvbGxlY3Rpb24udXBkYXRlV2hlcmUoW10pXG5cdFx0XHRcdC50aGVuKHJlcz0+e1xuXHRcdFx0XHRcdGV4cGVjdChyZXMpXG5cdFx0XHRcdFx0XHQudG9cblx0XHRcdFx0XHRcdC5lcXVhbChudWxsKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKGVycj0+e1xuXHRcdFx0XHRcdGV4cGVjdChlcnIpLnRvLmVxdWFsKG51bGwpO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xufSk7XG5cbi8vIHJlbW92ZVdoZXJlXG5kZXNjcmliZSgnVGhlIHJlbW92ZVdoZXJlIGZuJywgKCkgPT4ge1xuXHRpdCgnc2hvdWxkIHJldHVybiB0aGUgc2FtZSBjb2xsZWN0aW9uIGFzIHRoZSB0ZXN0JywgKCkgPT4ge1xuXHRcdGNvbnN0IGNvbGxlY3Rpb24gPSBuZXcgQ29sbG8oW1xuXHRcdFx0e1xuXHRcdFx0XHRpZDogMSxcblx0XHRcdFx0bmFtZTogJ0FkYW0nXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRpZDogMixcblx0XHRcdFx0bmFtZTogJ0p1bGlhbmEnXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRpZDogMyxcblx0XHRcdFx0bmFtZTogJ0NoaWdneSdcblx0XHRcdH1cblx0XHRdKTtcblxuXHRcdGxldCBfYyA9IFtcblx0XHRcdHtcblx0XHRcdFx0aWQ6IDEsXG5cdFx0XHRcdG5hbWU6ICdBZGFtJ1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aWQ6IDIsXG5cdFx0XHRcdG5hbWU6ICdKdWxpYW5hJ1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aWQ6IDMsXG5cdFx0XHRcdG5hbWU6ICdDaGlnZ3knXG5cdFx0XHR9XG5cdFx0XTtcblxuXHRcdGNvbnN0IGtleSA9ICdpZCcsXG5cdFx0XHQgIHZhbHVlID0gMjtcblxuXHRcdGNvbnN0IGNvbGwgPSBfYy5maWx0ZXIoaXRlbSA9PiBpdGVtW2tleV0gJiYgIShpdGVtW2tleV0gPT09IHZhbHVlKSk7XG5cblx0XHRpZighcHJvbWlzaWZ5KSB7XG5cdFx0XHRleHBlY3QoY29sbGVjdGlvbi5yZW1vdmVXaGVyZSh7aWQ6Mn0pKVxuXHRcdFx0XHQudG9cblx0XHRcdFx0LmRlZXBcblx0XHRcdFx0LmVxdWFsKGNvbGwpO1xuXHRcdH1lbHNle1xuXHRcdFx0Y29sbGVjdGlvbi5wcm9taXNpZnkoKTtcblxuXHRcdFx0Y29sbGVjdGlvbi5yZW1vdmVXaGVyZSh7aWQ6Mn0pXG5cdFx0XHRcdC50aGVuKHJlcz0+e1xuXHRcdFx0XHRcdGV4cGVjdChyZXMpXG5cdFx0XHRcdFx0XHQudG9cblx0XHRcdFx0XHRcdC5kZWVwXG5cdFx0XHRcdFx0XHQuZXF1YWwoY29sbCk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaChlcnI9Pntcblx0XHRcdFx0XHRleHBlY3QoZXJyKS50by5lcXVhbChudWxsKTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXHR9KTtcbn0pO1xuXG5cbmRlc2NyaWJlKCdUaGUgcmVtb3ZlV2hlcmUgZm4nLCAoKSA9PiB7XG5cdGl0KCdzaG91bGQgcmV0dXJuIG51bGwgZ2l2ZW4gYSBiYWQgaW5wdXQnLCAoKSA9PiB7XG5cdFx0aWYoIXByb21pc2lmeSkge1xuXHRcdFx0ZXhwZWN0KGNvbGxlY3Rpb24ucmVtb3ZlV2hlcmUoW10pKVxuXHRcdFx0XHQudG9cblx0XHRcdFx0LmRlZXBcblx0XHRcdFx0LmVxdWFsKG51bGwpO1xuXHRcdH1lbHNle1xuXHRcdFx0Y29sbGVjdGlvbi5yZW1vdmVXaGVyZShbXSlcblx0XHRcdFx0LnRoZW4ocmVzPT57XG5cdFx0XHRcdFx0ZXhwZWN0KHJlcylcblx0XHRcdFx0XHRcdC50b1xuXHRcdFx0XHRcdFx0LmVxdWFsKG51bGwpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goZXJyPT57XG5cdFx0XHRcdFx0ZXhwZWN0KGVycikudG8uZXF1YWwobnVsbCk7XG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG59KTtcblxuXG4vLyBnZXRUaGVJbmRleE9mXG5kZXNjcmliZSgnVGhlIGdldFRoZUluZGV4T2YgZm4nLCAoKSA9PiB7XG5cdGl0KCdzaG91bGQgcmV0dXJuIHRoZSBpbmRleCBvZiB0aGUgaXRlbSBpbiB0aGUgY29sbGVjdGlvbicsICgpID0+IHtcblx0XHRjb25zdCBjb2xsZWN0aW9uID0gbmV3IENvbGxvKFtcblx0XHRcdHtcblx0XHRcdFx0aWQ6IDEsXG5cdFx0XHRcdG5hbWU6ICdBZGFtJ1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aWQ6IDIsXG5cdFx0XHRcdG5hbWU6ICdKdWxpYW5hJ1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aWQ6IDMsXG5cdFx0XHRcdG5hbWU6ICdDaGlnZ3knXG5cdFx0XHR9XG5cdFx0XSk7XG5cblx0XHRpZighcHJvbWlzaWZ5KSB7XG5cdFx0XHRleHBlY3QoY29sbGVjdGlvbi5nZXRUaGVJbmRleE9mKHtpZDoyfSkpXG5cdFx0XHRcdC50b1xuXHRcdFx0XHQuZXF1YWwoMSk7XG5cdFx0fWVsc2V7XG5cdFx0XHRjb2xsZWN0aW9uLnByb21pc2lmeSgpO1xuXG5cdFx0XHRjb2xsZWN0aW9uLmdldFRoZUluZGV4T2Yoe2lkOjJ9KVxuXHRcdFx0XHQudGhlbihyZXM9Pntcblx0XHRcdFx0XHRleHBlY3QocmVzKVxuXHRcdFx0XHRcdFx0LnRvXG5cdFx0XHRcdFx0XHQuZXF1YWwoMSk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaChlcnI9Pntcblx0XHRcdFx0XHRleHBlY3QoZXJyKS50by5lcXVhbChudWxsKTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXHR9KTtcbn0pO1xuXG5cbmRlc2NyaWJlKCdUaGUgZ2V0VGhlSW5kZXhPZiBmbicsICgpID0+IHtcblx0aXQoJ3Nob3VsZCByZXR1cm4gbnVsbCBnaXZlbiBhIGJhZCBpbnB1dCcsICgpID0+IHtcblx0XHRpZighcHJvbWlzaWZ5KSB7XG5cdFx0XHRleHBlY3QoY29sbGVjdGlvbi5nZXRUaGVJbmRleE9mKFtdKSlcblx0XHRcdFx0LnRvXG5cdFx0XHRcdC5kZWVwXG5cdFx0XHRcdC5lcXVhbChudWxsKTtcblx0XHR9ZWxzZXtcblx0XHRcdGNvbGxlY3Rpb24uZ2V0VGhlSW5kZXhPZihbXSlcblx0XHRcdFx0LnRoZW4ocmVzPT57XG5cdFx0XHRcdFx0ZXhwZWN0KHJlcylcblx0XHRcdFx0XHRcdC50b1xuXHRcdFx0XHRcdFx0LmVxdWFsKG51bGwpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goZXJyPT57XG5cdFx0XHRcdFx0ZXhwZWN0KGVycikudG8uZXF1YWwobnVsbCk7XG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG59KTtcblxuXG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3BlY3MvaW5kZXguc3BlYy5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbWFwID0ge1xuXHRcIi4vc3BlY3MvaW5kZXguc3BlY1wiOiAwLFxuXHRcIi4vc3BlY3MvaW5kZXguc3BlYy5qc1wiOiAwXG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpKTtcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG5cdHJldHVybiBpZDtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gMTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuIF5cXC5cXC9zcGVjcy4qJFxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImZzXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnMtZmlsZS10cmVlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZnMtZmlsZS10cmVlXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGZzRmlsZVRyZWUgZnJvbSAnZnMtZmlsZS10cmVlJztcbmltcG9ydCBmcyAgICAgICAgIGZyb20gJ2ZzJztcblxuXG5jb25zdCB0ZXN0Rm9sZGVyICAgPSAndGVzdC9zcGVjcyc7XG5cbmJ1aWxkVHJlZShmc0ZpbGVUcmVlLnN5bmMocHJvY2Vzcy5jd2QoKSArICcvJyArIHRlc3RGb2xkZXIpLCB0ZXN0Rm9sZGVyKTtcblxuZnVuY3Rpb24gYnVpbGRUcmVlKHRyZWUsIHJvb3QpIHtcbiAgICBfYnVpbGRUcmVlKHRyZWUsIHJvb3QsICcvJyk7XG59XG5cbmZ1bmN0aW9uIF9idWlsZFRyZWUodHJlZSwgcm9vdCwgcGF0aCkge1xuICAgIGZvcihsZXQgaXRlbSBpbiB0cmVlKSB7XG4gICAgICAgIGlmKHRyZWUuaGFzT3duUHJvcGVydHkoaXRlbSkpIHtcbiAgICAgICAgICAgIGxldCBpdGVtU3RhdHMgPSBmcy5sc3RhdFN5bmMoJy4vJyArIHJvb3QgKyBwYXRoICsgaXRlbSk7XG5cbiAgICAgICAgICAgIGlmKGl0ZW1TdGF0cy5pc0RpcmVjdG9yeSgpKSB7XG4gICAgICAgICAgICAgICAgZGVzY3JpYmUoaXRlbSArICcvJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBfYnVpbGRUcmVlKHRyZWVbaXRlbV0sIHJvb3QsIHBhdGggKyBpdGVtICsgJy8nKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZihpdGVtU3RhdHMuaXNGaWxlKCkpIHtcbiAgICAgICAgICAgICAgICBkZXNjcmliZShpdGVtLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBmaWxlID0gcmVxdWlyZSgnLi9zcGVjcycgKyBwYXRoICsgaXRlbSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYodHlwZW9mIGZpbGUuZGVmYXVsdCA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGUuZGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcnVubmVyLmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gY29sbG8oY29sbGVjdGlvbikge1xuXHR2YXIgb3B0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cblx0dmFyIF90aGlzID0gdGhpcztcblxuXHR2YXIgbmV4dCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogZnVuY3Rpb24gKCkge307XG5cdHZhciBlcnJvciA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogZnVuY3Rpb24gKCkge307XG5cblx0dGhpcy5fY29sbGVjdGlvbiA9IGNvbGxlY3Rpb24gfHwgW107XG5cdHRoaXMubmV4dCA9IG5leHQ7XG5cdHRoaXMuZXJyb3IgPSBlcnJvcjtcblxuXHR2YXIgc2VsZiA9IHRoaXM7XG5cdHZhciBJbnZhbGlkSW5wdXRUeXBlID0gXCJJbnZhbGlkIGlucHV0IHR5cGUuIElucHV0IG11c3QgYmUgYW4gb2JqZWN0XCI7XG5cdHZhciBOb3RGb3VuZCA9IFwiSXRlbSBub3QgZm91bmQgaW4gdGhlIGNvbGxlY3Rpb25cIjtcblxuXHR2YXIgb3B0aW9ucyA9IG9wdHMgfHwge307XG5cblx0LyoqXG4gICogU2V0dGVyIGZvciBwcm9taXNpZnlpbmcgdGhlIGFwaVxuICAqL1xuXHRzZWxmLnByb21pc2lmeSA9IGZ1bmN0aW9uICgpIHtcblx0XHRvcHRpb25zWydwcm9taXNpZnknXSA9IHRydWU7XG5cdH07XG5cblx0LyoqXG4gICogQ2hlY2sgaWYgaXMgYW4gb2JqZWN0IHdpdGggdmFsdWVzXG4gICogQHBhcmFtIGl0ZW1cbiAgKiBAcHJpdmF0ZVxuICAqL1xuXHRzZWxmLl9pc09iamVjdCA9IGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0cmV0dXJuIGl0ZW0gJiYgKHR5cGVvZiBpdGVtID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoaXRlbSkpID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyhpdGVtKS5sZW5ndGg7XG5cdH07XG5cblx0LyoqXG4gICogSW50ZXJuYWwgaW5kZXggZmV0Y2hlclxuICAqIEBwYXJhbSB2YWxcbiAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgKiBAcHJpdmF0ZVxuICAqL1xuXHRzZWxmLl9nZXRUaGVJbmRleE9mID0gZnVuY3Rpb24gKHZhbCkge1xuXHRcdHZhciBpbmRleCA9IGZhbHNlO1xuXHRcdHZhciBrZXkgPSBPYmplY3Qua2V5cyh2YWwpWzBdO1xuXG5cdFx0c2VsZi5fY29sbGVjdGlvbi5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpKSB7XG5cdFx0XHRpZiAoaXRlbVtrZXldID09PSB2YWxba2V5XSkge1xuXHRcdFx0XHRpbmRleCA9IGk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gaW5kZXg7XG5cdH07XG5cblx0LyoqXG4gICogUnNwb25zZSB1dGlsaXR5IGZuc1xuICAqIEBwYXJhbSBpbnB1dFxuICAqIEBwYXJhbSBvcHRpb25zXG4gICogQHBhcmFtIG5leHRcbiAgKiBAcmV0dXJucyB7Kn1cbiAgKi9cblx0c2VsZi5fb25TdWNjZXNzID0gZnVuY3Rpb24gKGlucHV0LCBvcHRpb25zKSB7XG5cdFx0X3RoaXMubmV4dChpbnB1dCk7XG5cblx0XHRpZiAob3B0aW9ucy5wcm9taXNpZnkpIHtcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0XHRcdHJlc29sdmUoaW5wdXQpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGlucHV0O1xuXHR9O1xuXG5cdHNlbGYuX29uRmFpbCA9IGZ1bmN0aW9uIChpbnB1dCwgb3B0aW9ucykge1xuXHRcdHZhciByZXNwb25zZSA9IG51bGw7XG5cblx0XHRfdGhpcy5lcnJvcihyZXNwb25zZSwgaW5wdXQpO1xuXG5cdFx0aWYgKG9wdGlvbnMucHJvbWlzaWZ5KSB7XG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdFx0XHRyZWplY3QocmVzcG9uc2UsIGlucHV0KTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXNwb25zZTtcblx0fTtcblxuXHQvKipcbiAgKiBQdWJsaWMgZ2V0IHRoZSBpbmRleCBvZiBtZXRob2RcbiAgKiBAcGFyYW0gdmFsXG4gICogQHJldHVybnMgeyp9XG4gICovXG5cdHNlbGYuZ2V0VGhlSW5kZXhPZiA9IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRpZiAoc2VsZi5faXNPYmplY3QodmFsKSkge1xuXHRcdFx0dmFyIGluZGV4ID0gc2VsZi5fZ2V0VGhlSW5kZXhPZih2YWwpO1xuXG5cdFx0XHRpZiAoaW5kZXgpIHtcblx0XHRcdFx0cmV0dXJuIHNlbGYuX29uU3VjY2VzcyhpbmRleCwgb3B0aW9ucyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gc2VsZi5fb25GYWlsKHsgRXJyb3I6IE5vdEZvdW5kIH0sIG9wdGlvbnMpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gc2VsZi5fb25GYWlsKHsgRXJyb3I6IEludmFsaWRJbnB1dFR5cGUgfSwgb3B0aW9ucyk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuICAqIFJldHVybiB0aGUgY3VycmVudCBjb2xsZWN0aW9uXG4gICovXG5cdHNlbGYubGlzdCA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gc2VsZi5fb25TdWNjZXNzKHNlbGYuX2NvbGxlY3Rpb24sIG9wdGlvbnMpO1xuXHR9O1xuXG5cdC8qKlxuICAqIFJldHVybiB0aGUgaXRlbSB3aGVyZSB0aGUga2V5L2FsIG1hdGNoXG4gICogQHBhcmFtIHZhbFxuICAqL1xuXHRzZWxmLmZpbmRXaGVyZSA9IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRpZiAoc2VsZi5faXNPYmplY3QodmFsKSkge1xuXHRcdFx0dmFyIGkgPSBzZWxmLl9jb2xsZWN0aW9uLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0XHR2YXIga2V5ID0gT2JqZWN0LmtleXModmFsKVswXTtcblxuXHRcdFx0XHRyZXR1cm4gaXRlbVtrZXldICYmIGl0ZW1ba2V5XSA9PT0gdmFsW2tleV07XG5cdFx0XHR9KVswXTtcblxuXHRcdFx0aWYgKGkpIHtcblx0XHRcdFx0cmV0dXJuIHNlbGYuX29uU3VjY2VzcyhpLCBvcHRpb25zKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBzZWxmLl9vblN1Y2Nlc3MobnVsbCwgb3B0aW9ucyk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBzZWxmLl9vbkZhaWwoeyBFcnJvcjogSW52YWxpZElucHV0VHlwZSB9LCBvcHRpb25zKTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG4gICogVXNlZCB0byBkZXRlcm1pbmUgaWYgYW4gaXRlbSBpcyBpbiB0aGUgY29sbGVjdGlvblxuICAqIEBwYXJhbSB2YWxcbiAgKi9cblx0c2VsZi5leGlzdHMgPSBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHNlbGYuX2lzT2JqZWN0KHZhbCkgPyBzZWxmLl9vblN1Y2Nlc3MoISFzZWxmLl9nZXRUaGVJbmRleE9mKHZhbCksIG9wdGlvbnMpIDogc2VsZi5fb25GYWlsKHsgRXJyb3I6IEludmFsaWRJbnB1dFR5cGUgfSwgb3B0aW9ucyk7XG5cdH07XG5cblx0LyoqXG4gICogSW5zZXJ0IHRoZSBpdGVtIGF0IHRoZSBlbmQgb2YgdGhlIHN0YWNrXG4gICogQHBhcmFtIGl0ZW1cbiAgKiBAcmV0dXJucyB7KnxBcnJheX1cbiAgKi9cblx0c2VsZi5pbnNlcnQgPSBmdW5jdGlvbiAoaXRlbSkge1xuXHRcdGlmIChzZWxmLl9pc09iamVjdChpdGVtKSkge1xuXHRcdFx0c2VsZi5fY29sbGVjdGlvbi5wdXNoKGl0ZW0pO1xuXG5cdFx0XHRyZXR1cm4gc2VsZi5fb25TdWNjZXNzKHNlbGYuX2NvbGxlY3Rpb24sIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdHJldHVybiBzZWxmLl9vbkZhaWwoeyBFcnJvcjogSW52YWxpZElucHV0VHlwZSB9LCBvcHRpb25zKTtcblx0fTtcblxuXHQvKipcbiAgKiBTcGxpY2UgYW4gaXRlbSBpbiBhdCBhbiBleGFjdCBwb3NpdGlvbiBpbiB0aGUgY29sbGVjdGlvblxuICAqIEBwYXJhbSBpdGVtXG4gICogQHBhcmFtIGluZGV4XG4gICogQHJldHVybnMgeyp8QXJyYXl9XG4gICovXG5cdHNlbGYuaW5zZXJ0QXRJbmRleCA9IGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuXHRcdGlmIChzZWxmLl9pc09iamVjdChpdGVtKSkge1xuXHRcdFx0c2VsZi5fY29sbGVjdGlvbi5zcGxpY2UoaW5kZXgsIDAsIGl0ZW0pO1xuXG5cdFx0XHRyZXR1cm4gc2VsZi5fb25TdWNjZXNzKHNlbGYuX2NvbGxlY3Rpb24sIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdHJldHVybiBzZWxmLl9vbkZhaWwoeyBFcnJvcjogSW52YWxpZElucHV0VHlwZSB9LCBvcHRpb25zKTtcblx0fTtcblxuXHQvKipcbiAgKiBJZiB0aGUgaXRlbSBleGlzdHMsIHBlcmZvcm0gYW4gZHVwZGF0ZSwgb3RoZXJ3aXNlIGluc2VydFxuICAqIEBwYXJhbSB2YWxcbiAgKiBAcGFyYW0gaXRlbVxuICAqIEByZXR1cm5zIHsqfVxuICAqL1xuXHRzZWxmLnVwc2VydCA9IGZ1bmN0aW9uICh2YWwsIGl0ZW0pIHtcblx0XHRpZiAoc2VsZi5faXNPYmplY3QodmFsKSAmJiBzZWxmLl9pc09iamVjdChpdGVtKSkge1xuXHRcdFx0aWYgKCFzZWxmLl9nZXRUaGVJbmRleE9mKHZhbCkpIHtcblx0XHRcdFx0c2VsZi5pbnNlcnQoaXRlbSk7XG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdC8vIFVwZGF0ZVxuXHRcdFx0XHRzZWxmLl9jb2xsZWN0aW9uID0gc2VsZi5fY29sbGVjdGlvbi5tYXAoZnVuY3Rpb24gKGl0KSB7XG5cdFx0XHRcdFx0dmFyIGtleSA9IE9iamVjdC5rZXlzKHZhbClbMF07XG5cblx0XHRcdFx0XHRpZiAoaXRba2V5XSA9PT0gdmFsW2tleV0pIHtcblx0XHRcdFx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpdCwgaXRlbSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuIGl0O1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHNlbGYuX29uU3VjY2VzcyhzZWxmLl9jb2xsZWN0aW9uLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc2VsZi5fb25GYWlsKHsgRXJyb3I6IEludmFsaWRJbnB1dFR5cGUgfSwgb3B0aW9ucyk7XG5cdH07XG5cblx0LyoqXG4gICogUmVtb3ZlIHdoZXJlIHRoZSBrZXkgYW5kIHZhbHVlIG1hdGNoXG4gICogQHBhcmFtIHZhbFxuICAqL1xuXHRzZWxmLnJlbW92ZVdoZXJlID0gZnVuY3Rpb24gKHZhbCkge1xuXHRcdGlmIChzZWxmLl9pc09iamVjdCh2YWwpKSB7XG5cdFx0XHR2YXIgaW5kZXggPSBzZWxmLl9nZXRUaGVJbmRleE9mKHZhbCk7XG5cblx0XHRcdGlmIChpbmRleCkge1xuXHRcdFx0XHRzZWxmLl9jb2xsZWN0aW9uLnNwbGljZShpbmRleCwgMSk7XG5cblx0XHRcdFx0cmV0dXJuIHNlbGYuX29uU3VjY2VzcyhzZWxmLl9jb2xsZWN0aW9uLCBvcHRpb25zKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBzZWxmLl9vbkZhaWwoeyBFcnJvcjogTm90Rm91bmQgfSwgb3B0aW9ucyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHNlbGYuX29uRmFpbCh7IEVycm9yOiBJbnZhbGlkSW5wdXRUeXBlIH0sIG9wdGlvbnMpO1xuXHR9O1xuXG5cdC8qKlxuICAqIFBlcmZvcm0gYSBub3JtYWwgdXBkYXRlIGlmIHRoZSBrZXkgYW5kIHZhbHVlIG1hdGNoXG4gICogQHBhcmFtIHZhbFxuICAqIEBwYXJhbSBpdGVtXG4gICovXG5cdHNlbGYudXBkYXRlV2hlcmUgPSBmdW5jdGlvbiAodmFsLCBpdGVtKSB7XG5cdFx0aWYgKHNlbGYuX2lzT2JqZWN0KHZhbCkgJiYgc2VsZi5faXNPYmplY3QodmFsKSkge1xuXHRcdFx0c2VsZi5fY29sbGVjdGlvbiA9IHNlbGYuX2NvbGxlY3Rpb24ubWFwKGZ1bmN0aW9uIChpdCkge1xuXG5cdFx0XHRcdHZhciBrZXkgPSBPYmplY3Qua2V5cyh2YWwpWzBdO1xuXG5cdFx0XHRcdGlmIChpdFtrZXldID09PSB2YWxba2V5XSkge1xuXHRcdFx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpdCwgaXRlbSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIGl0O1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIHNlbGYuX29uU3VjY2VzcyhzZWxmLl9jb2xsZWN0aW9uLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc2VsZi5fb25GYWlsKHsgRXJyb3I6IEludmFsaWRJbnB1dFR5cGUgfSwgb3B0aW9ucyk7XG5cdH07XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjb2xsbztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hhaVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNoYWlcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQy9sQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNuQkE7QUFDQTs7Ozs7QUNEQTtBQUNBOzs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFqQkE7QUFDQTtBQUFBO0FBQUE7QUFpQkE7QUFDQTtBQUNBOzs7Ozs7QUM5QkE7O0FBTUE7Ozs7QUFBQTs7Ozs7QUFBQTs7Ozs7O0FBQUE7Ozs7QUFBQTs7QUFBQTs7O0FBQUE7OztBQUFBOzs7O0FBQUE7Ozs7O0FBQUE7Ozs7O0FBQUE7QUEwTEE7OztBQTFMQTs7OztBQUFBO0FBQ0E7Ozs7O0FDVEE7QUFDQTs7Iiwic291cmNlUm9vdCI6IiJ9