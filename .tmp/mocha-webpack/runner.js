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

const promisify = false;
const collection = new __WEBPACK_IMPORTED_MODULE_1_Src_index_js___default.a(c,{promisify});

console.log('COLLECTION************',collection.prototype);

// list
if(!promisify){
	describe('The list fn', () => {
		it('should return the same collection', () => {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(collection.list()).to.equal(c);
		});
	});
}else{
	describe('The list fn', () => {
		it('should be thenable', () => {
			collection
				.list()
				.then(res=>{
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(res).to.equal(c);
				});
		});
	});
}

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
				});
		}
	});
});

describe('The findWhere fn', () => {
	it('should return null given a bad input', () => {
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(collection.findWhere([]))
			.to
			.deep
			.equal(null);
	});
});

// exists
if(!promisify){
	describe('The exists fn', () => {
		it('should return true', () => {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(collection.exists({id:2}))
				.to
				.equal(true);
		});
	});
}else{
	describe('The exists fn', () => {
		it('should be thenable', () => {
			collection.exists({id:2})
				.then(res=>{
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(res)
						.to
						.equal(true);
				});
		});
	});
}

describe('The exists fn', () => {
	it('should return null given a bad input', () => {
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(collection.exists([]))
			.to
			.deep
			.equal(null);
	});
});

// insert
if(!promisify){
	describe('The insert fn', () => {
		it('should return the collection with one more item in it', () => {
			let _c = c;

			_c.push({
				id: 3,
				name: 'Paki Paki'
			});

			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(collection.insert({
				id: 3,
				name: 'Paki Paki'
			}))
				.to
				.deep
				.equal(_c);
		});
	});
}else{
	describe('The insert fn', () => {
		it('should be thenable', () => {
			let _c = c;

			_c.push({
				id: 3,
				name: 'Paki Paki'
			});

			collection.insert({
				id: 3,
				name: 'Paki Paki'
			}).then(res=>{
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(res)
					.to
					.deep
					.equal(_c);
			});
		});
	});
}

describe('The insert fn', () => {
	it('should return null given a bad input', () => {
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(collection.insert([]))
			.to
			.deep
			.equal(null);
	});
});


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

			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(collection.insertAtIndex({
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
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(res)
						.to
						.deep
						.equal(_c);
				});
		});
	});
}

describe('The insertAtIndex fn', () => {
	it('should return null given a bad input', () => {
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(collection.insertAtIndex([]))
			.to
			.deep
			.equal(null);
	});
});

// upsert not found
if(!promisify){
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

			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(collection.upsert({id:3},{
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

			collection.upsert({id:3},{
				id: 3,
				name: 'Paki Paki'
			})
			.then(res=>{
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(res)
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

			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(collection.upsert({id:2},{
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

			collection.upsert({id:2},{
				id: 2,
				name: 'Juliana & Mila'
			})
			.then(res=>{
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(res)
					.to
					.deep
					.equal(_c);
			});
		});
	});
}

describe('The upsert fn', () => {
	it('should return null given a bad input', () => {
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(collection.upsert([]))
			.to
			.deep
			.equal(null);
	});
});

// updateWhere
if(!promisify){
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

			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(collection.updateWhere({id:2},{
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

			collection.updateWhere({id:2},{
				id: 2,
				name: 'Juliana & Mila'
			})
			.then(res=>{
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(res)
					.to
					.deep
					.equal(_c);
			});
		});
	});
}


describe('The updateWhere fn', () => {
	it('should null null given a bad input', () => {
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(collection.updateWhere([]))
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

			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(collection.removeWhere({id:3}))
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
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(res)
						.to
						.deep
						.equal(coll);
				});
		});
	});
}


describe('The removeWhere fn', () => {
	it('should return null given a bad input', () => {
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(collection.removeWhere([]))
			.to
			.deep
			.equal(null);
	});
});


// getTheIndexOf
if(!promisify){
	describe('The getTheIndexOf fn', () => {
		it('should return the index of the item in the collection', () => {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(collection.getTheIndexOf({id:2}))
				.to
				.equal(1);
		});
	});
}else{
	describe('The getTheIndexOf fn', () => {
		it('should be thenable and return the index of the item in the collection', () => {
			collection.getTheIndexOf({id:2})
				.then(res=>{
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(res)
						.to
						.equal(1);
				});
		});
	});
}


describe('The getTheIndexOf fn', () => {
	it('should return null given a bad input', () => {
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(collection.getTheIndexOf([]))
			.to
			.deep
			.equal(null);
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
var cov_1xfx4nf6ru=function(){var path="/Users/computer/Documents/_Projects/myNpmPackages/collo/src/index.js",hash="528d82ea1ed5402e82feeb85286560791459a59a",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/computer/Documents/_Projects/myNpmPackages/collo/src/index.js",statementMap:{"0":{start:{line:3,column:0},end:{line:5,column:3}},"1":{start:{line:7,column:14},end:{line:7,column:268}},"2":{start:{line:7,column:101},end:{line:7,column:119}},"3":{start:{line:7,column:141},end:{line:7,column:266}},"4":{start:{line:10,column:15},end:{line:10,column:85}},"5":{start:{line:12,column:13},end:{line:12,column:17}},"6":{start:{line:14,column:12},end:{line:14,column:94}},"7":{start:{line:15,column:13},end:{line:15,column:95}},"8":{start:{line:17,column:1},end:{line:17,column:37}},"9":{start:{line:18,column:1},end:{line:18,column:18}},"10":{start:{line:19,column:1},end:{line:19,column:20}},"11":{start:{line:21,column:12},end:{line:21,column:16}},"12":{start:{line:22,column:24},end:{line:22,column:69}},"13":{start:{line:23,column:16},end:{line:23,column:50}},"14":{start:{line:30,column:1},end:{line:32,column:3}},"15":{start:{line:31,column:2},end:{line:31,column:118}},"16":{start:{line:41,column:1},end:{line:52,column:3}},"17":{start:{line:42,column:14},end:{line:42,column:19}},"18":{start:{line:43,column:12},end:{line:43,column:31}},"19":{start:{line:45,column:2},end:{line:49,column:5}},"20":{start:{line:46,column:3},end:{line:48,column:4}},"21":{start:{line:47,column:4},end:{line:47,column:14}},"22":{start:{line:51,column:2},end:{line:51,column:15}},"23":{start:{line:61,column:1},end:{line:71,column:3}},"24":{start:{line:62,column:2},end:{line:62,column:20}},"25":{start:{line:64,column:2},end:{line:68,column:3}},"26":{start:{line:65,column:3},end:{line:67,column:6}},"27":{start:{line:66,column:4},end:{line:66,column:19}},"28":{start:{line:70,column:2},end:{line:70,column:15}},"29":{start:{line:73,column:1},end:{line:88,column:3}},"30":{start:{line:75,column:17},end:{line:75,column:21}},"31":{start:{line:77,column:2},end:{line:77,column:24}},"32":{start:{line:79,column:2},end:{line:79,column:56}},"33":{start:{line:81,column:2},end:{line:85,column:3}},"34":{start:{line:82,column:3},end:{line:84,column:6}},"35":{start:{line:83,column:4},end:{line:83,column:21}},"36":{start:{line:87,column:2},end:{line:87,column:18}},"37":{start:{line:95,column:1},end:{line:107,column:3}},"38":{start:{line:96,column:2},end:{line:106,column:3}},"39":{start:{line:97,column:15},end:{line:97,column:39}},"40":{start:{line:99,column:3},end:{line:103,column:4}},"41":{start:{line:100,column:4},end:{line:100,column:43}},"42":{start:{line:102,column:4},end:{line:102,column:54}},"43":{start:{line:105,column:3},end:{line:105,column:61}},"44":{start:{line:112,column:1},end:{line:114,column:3}},"45":{start:{line:113,column:2},end:{line:113,column:52}},"46":{start:{line:120,column:1},end:{line:136,column:3}},"47":{start:{line:121,column:2},end:{line:135,column:3}},"48":{start:{line:122,column:11},end:{line:126,column:8}},"49":{start:{line:123,column:14},end:{line:123,column:33}},"50":{start:{line:125,column:4},end:{line:125,column:47}},"51":{start:{line:128,column:3},end:{line:132,column:4}},"52":{start:{line:129,column:4},end:{line:129,column:39}},"53":{start:{line:131,column:4},end:{line:131,column:42}},"54":{start:{line:134,column:3},end:{line:134,column:61}},"55":{start:{line:142,column:1},end:{line:148,column:3}},"56":{start:{line:143,column:2},end:{line:147,column:3}},"57":{start:{line:144,column:3},end:{line:144,column:63}},"58":{start:{line:146,column:3},end:{line:146,column:61}},"59":{start:{line:155,column:1},end:{line:163,column:3}},"60":{start:{line:156,column:2},end:{line:162,column:3}},"61":{start:{line:157,column:3},end:{line:157,column:31}},"62":{start:{line:159,column:3},end:{line:159,column:53}},"63":{start:{line:161,column:3},end:{line:161,column:61}},"64":{start:{line:171,column:1},end:{line:179,column:3}},"65":{start:{line:172,column:2},end:{line:178,column:3}},"66":{start:{line:173,column:3},end:{line:173,column:43}},"67":{start:{line:175,column:3},end:{line:175,column:53}},"68":{start:{line:177,column:3},end:{line:177,column:61}},"69":{start:{line:187,column:1},end:{line:207,column:3}},"70":{start:{line:188,column:2},end:{line:206,column:3}},"71":{start:{line:189,column:3},end:{line:201,column:4}},"72":{start:{line:190,column:4},end:{line:190,column:22}},"73":{start:{line:192,column:4},end:{line:200,column:7}},"74":{start:{line:193,column:15},end:{line:193,column:34}},"75":{start:{line:195,column:5},end:{line:197,column:6}},"76":{start:{line:196,column:6},end:{line:196,column:41}},"77":{start:{line:199,column:5},end:{line:199,column:15}},"78":{start:{line:203,column:3},end:{line:203,column:53}},"79":{start:{line:205,column:3},end:{line:205,column:61}},"80":{start:{line:213,column:1},end:{line:227,column:3}},"81":{start:{line:214,column:2},end:{line:226,column:3}},"82":{start:{line:215,column:15},end:{line:215,column:39}},"83":{start:{line:217,column:3},end:{line:223,column:4}},"84":{start:{line:218,column:4},end:{line:218,column:38}},"85":{start:{line:220,column:4},end:{line:220,column:54}},"86":{start:{line:222,column:4},end:{line:222,column:54}},"87":{start:{line:225,column:3},end:{line:225,column:61}},"88":{start:{line:234,column:1},end:{line:251,column:3}},"89":{start:{line:235,column:2},end:{line:250,column:3}},"90":{start:{line:236,column:3},end:{line:245,column:6}},"91":{start:{line:238,column:14},end:{line:238,column:33}},"92":{start:{line:240,column:4},end:{line:244,column:5}},"93":{start:{line:241,column:5},end:{line:241,column:40}},"94":{start:{line:243,column:5},end:{line:243,column:15}},"95":{start:{line:247,column:3},end:{line:247,column:53}},"96":{start:{line:249,column:3},end:{line:249,column:61}},"97":{start:{line:253,column:1},end:{line:253,column:13}},"98":{start:{line:256,column:0},end:{line:256,column:24}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:7,column:84},end:{line:7,column:85}},loc:{start:{line:7,column:99},end:{line:7,column:121}},line:7},"1":{name:"(anonymous_1)",decl:{start:{line:7,column:124},end:{line:7,column:125}},loc:{start:{line:7,column:139},end:{line:7,column:268}},line:7},"2":{name:"collo",decl:{start:{line:9,column:9},end:{line:9,column:14}},loc:{start:{line:9,column:27},end:{line:254,column:1}},line:9},"3":{name:"(anonymous_3)",decl:{start:{line:14,column:80},end:{line:14,column:81}},loc:{start:{line:14,column:92},end:{line:14,column:94}},line:14},"4":{name:"(anonymous_4)",decl:{start:{line:15,column:81},end:{line:15,column:82}},loc:{start:{line:15,column:93},end:{line:15,column:95}},line:15},"5":{name:"(anonymous_5)",decl:{start:{line:30,column:18},end:{line:30,column:19}},loc:{start:{line:30,column:34},end:{line:32,column:2}},line:30},"6":{name:"(anonymous_6)",decl:{start:{line:41,column:23},end:{line:41,column:24}},loc:{start:{line:41,column:38},end:{line:52,column:2}},line:41},"7":{name:"(anonymous_7)",decl:{start:{line:45,column:27},end:{line:45,column:28}},loc:{start:{line:45,column:46},end:{line:49,column:3}},line:45},"8":{name:"(anonymous_8)",decl:{start:{line:61,column:19},end:{line:61,column:20}},loc:{start:{line:61,column:45},end:{line:71,column:2}},line:61},"9":{name:"(anonymous_9)",decl:{start:{line:65,column:22},end:{line:65,column:23}},loc:{start:{line:65,column:49},end:{line:67,column:4}},line:65},"10":{name:"(anonymous_10)",decl:{start:{line:73,column:16},end:{line:73,column:17}},loc:{start:{line:73,column:42},end:{line:88,column:2}},line:73},"11":{name:"(anonymous_11)",decl:{start:{line:82,column:22},end:{line:82,column:23}},loc:{start:{line:82,column:49},end:{line:84,column:4}},line:82},"12":{name:"(anonymous_12)",decl:{start:{line:95,column:22},end:{line:95,column:23}},loc:{start:{line:95,column:37},end:{line:107,column:2}},line:95},"13":{name:"(anonymous_13)",decl:{start:{line:112,column:13},end:{line:112,column:14}},loc:{start:{line:112,column:25},end:{line:114,column:2}},line:112},"14":{name:"(anonymous_14)",decl:{start:{line:120,column:18},end:{line:120,column:19}},loc:{start:{line:120,column:33},end:{line:136,column:2}},line:120},"15":{name:"(anonymous_15)",decl:{start:{line:122,column:35},end:{line:122,column:36}},loc:{start:{line:122,column:51},end:{line:126,column:4}},line:122},"16":{name:"(anonymous_16)",decl:{start:{line:142,column:15},end:{line:142,column:16}},loc:{start:{line:142,column:30},end:{line:148,column:2}},line:142},"17":{name:"(anonymous_17)",decl:{start:{line:155,column:15},end:{line:155,column:16}},loc:{start:{line:155,column:31},end:{line:163,column:2}},line:155},"18":{name:"(anonymous_18)",decl:{start:{line:171,column:22},end:{line:171,column:23}},loc:{start:{line:171,column:45},end:{line:179,column:2}},line:171},"19":{name:"(anonymous_19)",decl:{start:{line:187,column:15},end:{line:187,column:16}},loc:{start:{line:187,column:36},end:{line:207,column:2}},line:187},"20":{name:"(anonymous_20)",decl:{start:{line:192,column:44},end:{line:192,column:45}},loc:{start:{line:192,column:58},end:{line:200,column:5}},line:192},"21":{name:"(anonymous_21)",decl:{start:{line:213,column:20},end:{line:213,column:21}},loc:{start:{line:213,column:35},end:{line:227,column:2}},line:213},"22":{name:"(anonymous_22)",decl:{start:{line:234,column:20},end:{line:234,column:21}},loc:{start:{line:234,column:41},end:{line:251,column:2}},line:234},"23":{name:"(anonymous_23)",decl:{start:{line:236,column:43},end:{line:236,column:44}},loc:{start:{line:236,column:57},end:{line:245,column:4}},line:236}},branchMap:{"0":{loc:{start:{line:7,column:14},end:{line:7,column:268}},type:"cond-expr",locations:[{start:{line:7,column:84},end:{line:7,column:121}},{start:{line:7,column:124},end:{line:7,column:268}}],line:7},"1":{loc:{start:{line:7,column:14},end:{line:7,column:81}},type:"binary-expr",locations:[{start:{line:7,column:14},end:{line:7,column:42}},{start:{line:7,column:46},end:{line:7,column:81}}],line:7},"2":{loc:{start:{line:7,column:148},end:{line:7,column:265}},type:"cond-expr",locations:[{start:{line:7,column:244},end:{line:7,column:252}},{start:{line:7,column:255},end:{line:7,column:265}}],line:7},"3":{loc:{start:{line:7,column:148},end:{line:7,column:241}},type:"binary-expr",locations:[{start:{line:7,column:148},end:{line:7,column:151}},{start:{line:7,column:155},end:{line:7,column:183}},{start:{line:7,column:187},end:{line:7,column:213}},{start:{line:7,column:217},end:{line:7,column:241}}],line:7},"4":{loc:{start:{line:10,column:15},end:{line:10,column:85}},type:"cond-expr",locations:[{start:{line:10,column:68},end:{line:10,column:80}},{start:{line:10,column:83},end:{line:10,column:85}}],line:10},"5":{loc:{start:{line:10,column:15},end:{line:10,column:65}},type:"binary-expr",locations:[{start:{line:10,column:15},end:{line:10,column:35}},{start:{line:10,column:39},end:{line:10,column:65}}],line:10},"6":{loc:{start:{line:14,column:12},end:{line:14,column:94}},type:"cond-expr",locations:[{start:{line:14,column:65},end:{line:14,column:77}},{start:{line:14,column:80},end:{line:14,column:94}}],line:14},"7":{loc:{start:{line:14,column:12},end:{line:14,column:62}},type:"binary-expr",locations:[{start:{line:14,column:12},end:{line:14,column:32}},{start:{line:14,column:36},end:{line:14,column:62}}],line:14},"8":{loc:{start:{line:15,column:13},end:{line:15,column:95}},type:"cond-expr",locations:[{start:{line:15,column:66},end:{line:15,column:78}},{start:{line:15,column:81},end:{line:15,column:95}}],line:15},"9":{loc:{start:{line:15,column:13},end:{line:15,column:63}},type:"binary-expr",locations:[{start:{line:15,column:13},end:{line:15,column:33}},{start:{line:15,column:37},end:{line:15,column:63}}],line:15},"10":{loc:{start:{line:17,column:20},end:{line:17,column:36}},type:"binary-expr",locations:[{start:{line:17,column:20},end:{line:17,column:30}},{start:{line:17,column:34},end:{line:17,column:36}}],line:17},"11":{loc:{start:{line:31,column:9},end:{line:31,column:117}},type:"binary-expr",locations:[{start:{line:31,column:9},end:{line:31,column:13}},{start:{line:31,column:17},end:{line:31,column:89}},{start:{line:31,column:93},end:{line:31,column:117}}],line:31},"12":{loc:{start:{line:31,column:18},end:{line:31,column:75}},type:"cond-expr",locations:[{start:{line:31,column:48},end:{line:31,column:59}},{start:{line:31,column:62},end:{line:31,column:75}}],line:31},"13":{loc:{start:{line:46,column:3},end:{line:48,column:4}},type:"if",locations:[{start:{line:46,column:3},end:{line:48,column:4}},{start:{line:46,column:3},end:{line:48,column:4}}],line:46},"14":{loc:{start:{line:64,column:2},end:{line:68,column:3}},type:"if",locations:[{start:{line:64,column:2},end:{line:68,column:3}},{start:{line:64,column:2},end:{line:68,column:3}}],line:64},"15":{loc:{start:{line:81,column:2},end:{line:85,column:3}},type:"if",locations:[{start:{line:81,column:2},end:{line:85,column:3}},{start:{line:81,column:2},end:{line:85,column:3}}],line:81},"16":{loc:{start:{line:96,column:2},end:{line:106,column:3}},type:"if",locations:[{start:{line:96,column:2},end:{line:106,column:3}},{start:{line:96,column:2},end:{line:106,column:3}}],line:96},"17":{loc:{start:{line:99,column:3},end:{line:103,column:4}},type:"if",locations:[{start:{line:99,column:3},end:{line:103,column:4}},{start:{line:99,column:3},end:{line:103,column:4}}],line:99},"18":{loc:{start:{line:121,column:2},end:{line:135,column:3}},type:"if",locations:[{start:{line:121,column:2},end:{line:135,column:3}},{start:{line:121,column:2},end:{line:135,column:3}}],line:121},"19":{loc:{start:{line:125,column:11},end:{line:125,column:46}},type:"binary-expr",locations:[{start:{line:125,column:11},end:{line:125,column:20}},{start:{line:125,column:24},end:{line:125,column:46}}],line:125},"20":{loc:{start:{line:128,column:3},end:{line:132,column:4}},type:"if",locations:[{start:{line:128,column:3},end:{line:132,column:4}},{start:{line:128,column:3},end:{line:132,column:4}}],line:128},"21":{loc:{start:{line:143,column:2},end:{line:147,column:3}},type:"if",locations:[{start:{line:143,column:2},end:{line:147,column:3}},{start:{line:143,column:2},end:{line:147,column:3}}],line:143},"22":{loc:{start:{line:156,column:2},end:{line:162,column:3}},type:"if",locations:[{start:{line:156,column:2},end:{line:162,column:3}},{start:{line:156,column:2},end:{line:162,column:3}}],line:156},"23":{loc:{start:{line:172,column:2},end:{line:178,column:3}},type:"if",locations:[{start:{line:172,column:2},end:{line:178,column:3}},{start:{line:172,column:2},end:{line:178,column:3}}],line:172},"24":{loc:{start:{line:188,column:2},end:{line:206,column:3}},type:"if",locations:[{start:{line:188,column:2},end:{line:206,column:3}},{start:{line:188,column:2},end:{line:206,column:3}}],line:188},"25":{loc:{start:{line:188,column:6},end:{line:188,column:49}},type:"binary-expr",locations:[{start:{line:188,column:6},end:{line:188,column:25}},{start:{line:188,column:29},end:{line:188,column:49}}],line:188},"26":{loc:{start:{line:189,column:3},end:{line:201,column:4}},type:"if",locations:[{start:{line:189,column:3},end:{line:201,column:4}},{start:{line:189,column:3},end:{line:201,column:4}}],line:189},"27":{loc:{start:{line:195,column:5},end:{line:197,column:6}},type:"if",locations:[{start:{line:195,column:5},end:{line:197,column:6}},{start:{line:195,column:5},end:{line:197,column:6}}],line:195},"28":{loc:{start:{line:214,column:2},end:{line:226,column:3}},type:"if",locations:[{start:{line:214,column:2},end:{line:226,column:3}},{start:{line:214,column:2},end:{line:226,column:3}}],line:214},"29":{loc:{start:{line:217,column:3},end:{line:223,column:4}},type:"if",locations:[{start:{line:217,column:3},end:{line:223,column:4}},{start:{line:217,column:3},end:{line:223,column:4}}],line:217},"30":{loc:{start:{line:235,column:2},end:{line:250,column:3}},type:"if",locations:[{start:{line:235,column:2},end:{line:250,column:3}},{start:{line:235,column:2},end:{line:250,column:3}}],line:235},"31":{loc:{start:{line:235,column:6},end:{line:235,column:48}},type:"binary-expr",locations:[{start:{line:235,column:6},end:{line:235,column:25}},{start:{line:235,column:29},end:{line:235,column:48}}],line:235},"32":{loc:{start:{line:240,column:4},end:{line:244,column:5}},type:"if",locations:[{start:{line:240,column:4},end:{line:244,column:5}},{start:{line:240,column:4},end:{line:244,column:5}}],line:240}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"49":0,"50":0,"51":0,"52":0,"53":0,"54":0,"55":0,"56":0,"57":0,"58":0,"59":0,"60":0,"61":0,"62":0,"63":0,"64":0,"65":0,"66":0,"67":0,"68":0,"69":0,"70":0,"71":0,"72":0,"73":0,"74":0,"75":0,"76":0,"77":0,"78":0,"79":0,"80":0,"81":0,"82":0,"83":0,"84":0,"85":0,"86":0,"87":0,"88":0,"89":0,"90":0,"91":0,"92":0,"93":0,"94":0,"95":0,"96":0,"97":0,"98":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0},b:{"0":[0,0],"1":[0,0],"2":[0,0],"3":[0,0,0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0],"9":[0,0],"10":[0,0],"11":[0,0,0],"12":[0,0],"13":[0,0],"14":[0,0],"15":[0,0],"16":[0,0],"17":[0,0],"18":[0,0],"19":[0,0],"20":[0,0],"21":[0,0],"22":[0,0],"23":[0,0],"24":[0,0],"25":[0,0],"26":[0,0],"27":[0,0],"28":[0,0],"29":[0,0],"30":[0,0],"31":[0,0],"32":[0,0]},inputSourceMap:{version:3,sources:["src/index.js"],names:["collo","collection","options","next","error","_collection","self","InvalidInputType","NotFound","_isObject","item","Object","keys","length","_getTheIndexOf","val","index","key","forEach","i","_onSuccess","input","promisify","Promise","resolve","reject","_onFail","response","console","log","getTheIndexOf","Error","list","findWhere","filter","exists","insert","push","insertAtIndex","splice","upsert","map","it","assign","removeWhere","updateWhere"],mappings:"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",file:"index.js",sourceRoot:"/Users/computer/Documents/_Projects/myNpmPackages/collo",sourcesContent:["function collo(collection, options={}, next=()=>{}, error=()=>{}) {\n\tthis._collection = collection || [];\n\tthis.next = next;\n\tthis.error = error;\n\t\n\tconst self = this;\n\tconst InvalidInputType = \"Invalid input type. Input must be an object\";\n\tconst NotFound = \"Item not found in the collection\";\n\n\t/**\n\t * Check if is an object with values\n\t * @param item\n\t * @private\n\t */\n\tself._isObject = (item)=>{\n\t\treturn item && typeof item === 'object' && Object.keys(item).length;\n\t};\n\n\t/**\n\t * Internal index fetcher\n\t * @todo : hide private methods in the prototype\n\t * @param val\n\t * @returns {boolean}\n\t * @private\n\t */\n\tself._getTheIndexOf = (val)=>{\n\t\tlet index = false;\n\t\tlet key = Object.keys(val)[0];\n\n\t\tself._collection.forEach((item,i)=>{\n\t\t\tif(item[key] === val[key]){\n\t\t\t\tindex = i;\n\t\t\t}\n\t\t});\n\n\t\treturn index;\n\t};\n\n\n\t/**\n\t * Rsponse utility fns\n\t * @param input\n\t * @param options\n\t * @param next\n\t * @returns {*}\n\t */\n\tself._onSuccess = (input,options)=>{\n\t\tthis.next(input);\n\n\t\tif(options.promisify){\n\t\t\treturn new Promise(function (resolve, reject) {\n\t\t\t\tresolve(input);\n\t\t\t});\n\t\t}\n\n\t\treturn input;\n\t};\n\n\tself._onFail = (input,options)=>{\n\t\t//const response = input.hasOwnProperty('Error') ? null : input;\n\t\tconst response = null;\n\n\t\tthis.error(response);\n\n\t\tconsole.log('ERROR',response,input,options,this);\n\n\t\tif(options.promisify){\n\t\t\treturn new Promise(function (resolve, reject) {\n\t\t\t\treject(response);\n\t\t\t});\n\t\t}\n\n\t\treturn response;\n\t};\n\n\t/**\n\t * Public get the index of method\n\t * @param val\n\t * @returns {*}\n\t */\n\tself.getTheIndexOf = val=>{\n\t\tif(self._isObject(val)) {\n\t\t\tlet index = self._getTheIndexOf(val);\n\n\t\t\tif(index) {\n\t\t\t\treturn self._onSuccess(index,options)\n\t\t\t}else{\n\t\t\t\treturn self._onFail({Error:NotFound},options)\n\t\t\t}\n\t\t}else{\n\t\t\treturn self._onFail({Error:InvalidInputType},options);\n\t\t}\n\t};\n\n\t/**\n\t * Return the current collection\n\t */\n\tself.list = ()=>self._onSuccess(self._collection,options);\n\n\t/**\n\t * Return the item where the key/al match\n\t * @param val\n\t */\n\tself.findWhere = val => {\n\t\tif(self._isObject(val)) {\n\t\t\tconst i = self._collection\n\t\t\t\t.filter(item => {\n\t\t\t\t\tlet key = Object.keys(val)[0];\n\n\t\t\t\t\treturn item[key] && item[key] === val[key];\n\t\t\t\t})[0];\n\n\t\t\tif (i) {\n\t\t\t\treturn self._onSuccess(i,options);\n\t\t\t} else {\n\t\t\t\treturn self._onSuccess(null,options)\n\t\t\t}\n\t\t}else{\n\t\t\treturn self._onFail({Error:InvalidInputType},options);\n\t\t}\n\t};\n\n\t/**\n\t * Used to determine if an item is in the collection\n\t * @param val\n\t */\n\tself.exists = val => {\n\t\tif(self._isObject(val)) {\n\t\t\treturn self._onSuccess(!!self._getTheIndexOf(val),options);\n\t\t}else{\n\t\t\treturn self._onFail({Error:InvalidInputType},options);\n\t\t}\n\t};\n\n\t/**\n\t * Insert the item at the end of the stack\n\t * @param item\n\t * @returns {*|Array}\n\t */\n\tself.insert = item => {\n\t\tif(self._isObject(item)){\n\t\t\tself._collection.push(item);\n\n\t\t\treturn self._onSuccess(self._collection,options);\n\t\t}else{\n\t\t\treturn self._onFail({Error:InvalidInputType},options);\n\t\t}\n\t};\n\n\t/**\n\t * Splice an item in at an exact position in the collection\n\t * @param item\n\t * @param index\n\t * @returns {*|Array}\n\t */\n\tself.insertAtIndex = (item, index) => {\n\t\tif(self._isObject(item)) {\n\t\t\tself._collection.splice(index, 0, item);\n\n\t\t\treturn self._onSuccess(self._collection,options);\n\t\t}else{\n\t\t\treturn self._onFail({Error:InvalidInputType},options);\n\t\t}\n\t};\n\n\t/**\n\t * If the item exists, perform an dupdate, otherwise insert\n\t * @param val\n\t * @param item\n\t * @returns {*}\n\t */\n\tself.upsert = (val,item) => {\n\t\tif(self._isObject(val) && self._isObject(item)) {\n\t\t\tif (!self._getTheIndexOf(val)) {\n\t\t\t\tself.insert(item);\n\t\t\t} else {\n\t\t\t\tself._collection = self._collection.map(it => {\n\t\t\t\t\tlet key = Object.keys(val)[0];\n\n\t\t\t\t\tif (it[key] === val[key]) {\n\t\t\t\t\t\treturn Object.assign({}, it, item);\n\t\t\t\t\t}\n\n\t\t\t\t\treturn it;\n\t\t\t\t});\n\t\t\t}\n\n\t\t\treturn self._onSuccess(self._collection,options);\n\t\t}else{\n\t\t\treturn self._onFail({Error:InvalidInputType},options);\n\t\t}\n\t};\n\n\t/**\n\t * Remove where the key and value match\n\t * @param val\n\t */\n  \tself.removeWhere = val => {\n\t\tif(self._isObject(val)) {\n\t\t\tconst index = self._getTheIndexOf(val);\n\n\t\t\tif(index) {\n\t\t\t\tself._collection.splice(index, 1);\n\n\t\t\t\treturn self._onSuccess(self._collection,options);\n\t\t\t}else{\n\t\t\t\treturn self._onFail({Error:NotFound},options);\t\t\t}\n\t\t}else{\n\t\t\treturn self._onFail({Error:InvalidInputType},options);\n\t\t}\n\t};\n\n\t/**\n\t * Perform a normal update if the key and value match\n\t * @param val\n\t * @param item\n\t */\n\tself.updateWhere = (val,item) => {\n\t\tif(self._isObject(val) && self._isObject(val)){\n\t\t\tself._collection = self._collection.map(it => {\n\n\t\t\t\tlet key = Object.keys(val)[0];\n\n\t\t\t\tif(it[key] === val[key]){\n\t\t\t\t\treturn  Object.assign({},it,item);\n\t\t\t\t}else{\n\t\t\t\t\treturn it;\n\t\t\t\t}\n\t\t\t});\n\n\t\t\treturn self._onSuccess(self._collection,options);\n\t\t}else{\n\t\t\treturn self._onFail({Error:InvalidInputType},options);\n\t\t}\n\t};\n\n\treturn this;\n};\n\n\nexport default collo;\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_1xfx4nf6ru.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});var _typeof=(cov_1xfx4nf6ru.s[1]++,(cov_1xfx4nf6ru.b[1][0]++,typeof Symbol==="function")&&(cov_1xfx4nf6ru.b[1][1]++,typeof Symbol.iterator==="symbol")?(cov_1xfx4nf6ru.b[0][0]++,function(obj){cov_1xfx4nf6ru.f[0]++;cov_1xfx4nf6ru.s[2]++;return typeof obj;}):(cov_1xfx4nf6ru.b[0][1]++,function(obj){cov_1xfx4nf6ru.f[1]++;cov_1xfx4nf6ru.s[3]++;return(cov_1xfx4nf6ru.b[3][0]++,obj)&&(cov_1xfx4nf6ru.b[3][1]++,typeof Symbol==="function")&&(cov_1xfx4nf6ru.b[3][2]++,obj.constructor===Symbol)&&(cov_1xfx4nf6ru.b[3][3]++,obj!==Symbol.prototype)?(cov_1xfx4nf6ru.b[2][0]++,"symbol"):(cov_1xfx4nf6ru.b[2][1]++,typeof obj);}));function collo(collection){cov_1xfx4nf6ru.f[2]++;var options=(cov_1xfx4nf6ru.s[4]++,(cov_1xfx4nf6ru.b[5][0]++,arguments.length>1)&&(cov_1xfx4nf6ru.b[5][1]++,arguments[1]!==undefined)?(cov_1xfx4nf6ru.b[4][0]++,arguments[1]):(cov_1xfx4nf6ru.b[4][1]++,{}));var _this=(cov_1xfx4nf6ru.s[5]++,this);var next=(cov_1xfx4nf6ru.s[6]++,(cov_1xfx4nf6ru.b[7][0]++,arguments.length>2)&&(cov_1xfx4nf6ru.b[7][1]++,arguments[2]!==undefined)?(cov_1xfx4nf6ru.b[6][0]++,arguments[2]):(cov_1xfx4nf6ru.b[6][1]++,function(){cov_1xfx4nf6ru.f[3]++;}));var error=(cov_1xfx4nf6ru.s[7]++,(cov_1xfx4nf6ru.b[9][0]++,arguments.length>3)&&(cov_1xfx4nf6ru.b[9][1]++,arguments[3]!==undefined)?(cov_1xfx4nf6ru.b[8][0]++,arguments[3]):(cov_1xfx4nf6ru.b[8][1]++,function(){cov_1xfx4nf6ru.f[4]++;}));cov_1xfx4nf6ru.s[8]++;this._collection=(cov_1xfx4nf6ru.b[10][0]++,collection)||(cov_1xfx4nf6ru.b[10][1]++,[]);cov_1xfx4nf6ru.s[9]++;this.next=next;cov_1xfx4nf6ru.s[10]++;this.error=error;var self=(cov_1xfx4nf6ru.s[11]++,this);var InvalidInputType=(cov_1xfx4nf6ru.s[12]++,"Invalid input type. Input must be an object");var NotFound=(cov_1xfx4nf6ru.s[13]++,"Item not found in the collection");/**
  * Check if is an object with values
  * @param item
  * @private
  */cov_1xfx4nf6ru.s[14]++;self._isObject=function(item){cov_1xfx4nf6ru.f[5]++;cov_1xfx4nf6ru.s[15]++;return(cov_1xfx4nf6ru.b[11][0]++,item)&&(cov_1xfx4nf6ru.b[11][1]++,(typeof item==="undefined"?(cov_1xfx4nf6ru.b[12][0]++,"undefined"):(cov_1xfx4nf6ru.b[12][1]++,_typeof(item)))==='object')&&(cov_1xfx4nf6ru.b[11][2]++,Object.keys(item).length);};/**
  * Internal index fetcher
  * @todo : hide private methods in the prototype
  * @param val
  * @returns {boolean}
  * @private
  */cov_1xfx4nf6ru.s[16]++;self._getTheIndexOf=function(val){cov_1xfx4nf6ru.f[6]++;var index=(cov_1xfx4nf6ru.s[17]++,false);var key=(cov_1xfx4nf6ru.s[18]++,Object.keys(val)[0]);cov_1xfx4nf6ru.s[19]++;self._collection.forEach(function(item,i){cov_1xfx4nf6ru.f[7]++;cov_1xfx4nf6ru.s[20]++;if(item[key]===val[key]){cov_1xfx4nf6ru.b[13][0]++;cov_1xfx4nf6ru.s[21]++;index=i;}else{cov_1xfx4nf6ru.b[13][1]++;}});cov_1xfx4nf6ru.s[22]++;return index;};/**
  * Rsponse utility fns
  * @param input
  * @param options
  * @param next
  * @returns {*}
  */cov_1xfx4nf6ru.s[23]++;self._onSuccess=function(input,options){cov_1xfx4nf6ru.f[8]++;cov_1xfx4nf6ru.s[24]++;_this.next(input);cov_1xfx4nf6ru.s[25]++;if(options.promisify){cov_1xfx4nf6ru.b[14][0]++;cov_1xfx4nf6ru.s[26]++;return new Promise(function(resolve,reject){cov_1xfx4nf6ru.f[9]++;cov_1xfx4nf6ru.s[27]++;resolve(input);});}else{cov_1xfx4nf6ru.b[14][1]++;}cov_1xfx4nf6ru.s[28]++;return input;};cov_1xfx4nf6ru.s[29]++;self._onFail=function(input,options){cov_1xfx4nf6ru.f[10]++;//const response = input.hasOwnProperty('Error') ? null : input;
var response=(cov_1xfx4nf6ru.s[30]++,null);cov_1xfx4nf6ru.s[31]++;_this.error(response);cov_1xfx4nf6ru.s[32]++;console.log('ERROR',response,input,options,_this);cov_1xfx4nf6ru.s[33]++;if(options.promisify){cov_1xfx4nf6ru.b[15][0]++;cov_1xfx4nf6ru.s[34]++;return new Promise(function(resolve,reject){cov_1xfx4nf6ru.f[11]++;cov_1xfx4nf6ru.s[35]++;reject(response);});}else{cov_1xfx4nf6ru.b[15][1]++;}cov_1xfx4nf6ru.s[36]++;return response;};/**
  * Public get the index of method
  * @param val
  * @returns {*}
  */cov_1xfx4nf6ru.s[37]++;self.getTheIndexOf=function(val){cov_1xfx4nf6ru.f[12]++;cov_1xfx4nf6ru.s[38]++;if(self._isObject(val)){cov_1xfx4nf6ru.b[16][0]++;var index=(cov_1xfx4nf6ru.s[39]++,self._getTheIndexOf(val));cov_1xfx4nf6ru.s[40]++;if(index){cov_1xfx4nf6ru.b[17][0]++;cov_1xfx4nf6ru.s[41]++;return self._onSuccess(index,options);}else{cov_1xfx4nf6ru.b[17][1]++;cov_1xfx4nf6ru.s[42]++;return self._onFail({Error:NotFound},options);}}else{cov_1xfx4nf6ru.b[16][1]++;cov_1xfx4nf6ru.s[43]++;return self._onFail({Error:InvalidInputType},options);}};/**
  * Return the current collection
  */cov_1xfx4nf6ru.s[44]++;self.list=function(){cov_1xfx4nf6ru.f[13]++;cov_1xfx4nf6ru.s[45]++;return self._onSuccess(self._collection,options);};/**
  * Return the item where the key/al match
  * @param val
  */cov_1xfx4nf6ru.s[46]++;self.findWhere=function(val){cov_1xfx4nf6ru.f[14]++;cov_1xfx4nf6ru.s[47]++;if(self._isObject(val)){cov_1xfx4nf6ru.b[18][0]++;var i=(cov_1xfx4nf6ru.s[48]++,self._collection.filter(function(item){cov_1xfx4nf6ru.f[15]++;var key=(cov_1xfx4nf6ru.s[49]++,Object.keys(val)[0]);cov_1xfx4nf6ru.s[50]++;return(cov_1xfx4nf6ru.b[19][0]++,item[key])&&(cov_1xfx4nf6ru.b[19][1]++,item[key]===val[key]);})[0]);cov_1xfx4nf6ru.s[51]++;if(i){cov_1xfx4nf6ru.b[20][0]++;cov_1xfx4nf6ru.s[52]++;return self._onSuccess(i,options);}else{cov_1xfx4nf6ru.b[20][1]++;cov_1xfx4nf6ru.s[53]++;return self._onSuccess(null,options);}}else{cov_1xfx4nf6ru.b[18][1]++;cov_1xfx4nf6ru.s[54]++;return self._onFail({Error:InvalidInputType},options);}};/**
  * Used to determine if an item is in the collection
  * @param val
  */cov_1xfx4nf6ru.s[55]++;self.exists=function(val){cov_1xfx4nf6ru.f[16]++;cov_1xfx4nf6ru.s[56]++;if(self._isObject(val)){cov_1xfx4nf6ru.b[21][0]++;cov_1xfx4nf6ru.s[57]++;return self._onSuccess(!!self._getTheIndexOf(val),options);}else{cov_1xfx4nf6ru.b[21][1]++;cov_1xfx4nf6ru.s[58]++;return self._onFail({Error:InvalidInputType},options);}};/**
  * Insert the item at the end of the stack
  * @param item
  * @returns {*|Array}
  */cov_1xfx4nf6ru.s[59]++;self.insert=function(item){cov_1xfx4nf6ru.f[17]++;cov_1xfx4nf6ru.s[60]++;if(self._isObject(item)){cov_1xfx4nf6ru.b[22][0]++;cov_1xfx4nf6ru.s[61]++;self._collection.push(item);cov_1xfx4nf6ru.s[62]++;return self._onSuccess(self._collection,options);}else{cov_1xfx4nf6ru.b[22][1]++;cov_1xfx4nf6ru.s[63]++;return self._onFail({Error:InvalidInputType},options);}};/**
  * Splice an item in at an exact position in the collection
  * @param item
  * @param index
  * @returns {*|Array}
  */cov_1xfx4nf6ru.s[64]++;self.insertAtIndex=function(item,index){cov_1xfx4nf6ru.f[18]++;cov_1xfx4nf6ru.s[65]++;if(self._isObject(item)){cov_1xfx4nf6ru.b[23][0]++;cov_1xfx4nf6ru.s[66]++;self._collection.splice(index,0,item);cov_1xfx4nf6ru.s[67]++;return self._onSuccess(self._collection,options);}else{cov_1xfx4nf6ru.b[23][1]++;cov_1xfx4nf6ru.s[68]++;return self._onFail({Error:InvalidInputType},options);}};/**
  * If the item exists, perform an dupdate, otherwise insert
  * @param val
  * @param item
  * @returns {*}
  */cov_1xfx4nf6ru.s[69]++;self.upsert=function(val,item){cov_1xfx4nf6ru.f[19]++;cov_1xfx4nf6ru.s[70]++;if((cov_1xfx4nf6ru.b[25][0]++,self._isObject(val))&&(cov_1xfx4nf6ru.b[25][1]++,self._isObject(item))){cov_1xfx4nf6ru.b[24][0]++;cov_1xfx4nf6ru.s[71]++;if(!self._getTheIndexOf(val)){cov_1xfx4nf6ru.b[26][0]++;cov_1xfx4nf6ru.s[72]++;self.insert(item);}else{cov_1xfx4nf6ru.b[26][1]++;cov_1xfx4nf6ru.s[73]++;self._collection=self._collection.map(function(it){cov_1xfx4nf6ru.f[20]++;var key=(cov_1xfx4nf6ru.s[74]++,Object.keys(val)[0]);cov_1xfx4nf6ru.s[75]++;if(it[key]===val[key]){cov_1xfx4nf6ru.b[27][0]++;cov_1xfx4nf6ru.s[76]++;return Object.assign({},it,item);}else{cov_1xfx4nf6ru.b[27][1]++;}cov_1xfx4nf6ru.s[77]++;return it;});}cov_1xfx4nf6ru.s[78]++;return self._onSuccess(self._collection,options);}else{cov_1xfx4nf6ru.b[24][1]++;cov_1xfx4nf6ru.s[79]++;return self._onFail({Error:InvalidInputType},options);}};/**
  * Remove where the key and value match
  * @param val
  */cov_1xfx4nf6ru.s[80]++;self.removeWhere=function(val){cov_1xfx4nf6ru.f[21]++;cov_1xfx4nf6ru.s[81]++;if(self._isObject(val)){cov_1xfx4nf6ru.b[28][0]++;var index=(cov_1xfx4nf6ru.s[82]++,self._getTheIndexOf(val));cov_1xfx4nf6ru.s[83]++;if(index){cov_1xfx4nf6ru.b[29][0]++;cov_1xfx4nf6ru.s[84]++;self._collection.splice(index,1);cov_1xfx4nf6ru.s[85]++;return self._onSuccess(self._collection,options);}else{cov_1xfx4nf6ru.b[29][1]++;cov_1xfx4nf6ru.s[86]++;return self._onFail({Error:NotFound},options);}}else{cov_1xfx4nf6ru.b[28][1]++;cov_1xfx4nf6ru.s[87]++;return self._onFail({Error:InvalidInputType},options);}};/**
  * Perform a normal update if the key and value match
  * @param val
  * @param item
  */cov_1xfx4nf6ru.s[88]++;self.updateWhere=function(val,item){cov_1xfx4nf6ru.f[22]++;cov_1xfx4nf6ru.s[89]++;if((cov_1xfx4nf6ru.b[31][0]++,self._isObject(val))&&(cov_1xfx4nf6ru.b[31][1]++,self._isObject(val))){cov_1xfx4nf6ru.b[30][0]++;cov_1xfx4nf6ru.s[90]++;self._collection=self._collection.map(function(it){cov_1xfx4nf6ru.f[23]++;var key=(cov_1xfx4nf6ru.s[91]++,Object.keys(val)[0]);cov_1xfx4nf6ru.s[92]++;if(it[key]===val[key]){cov_1xfx4nf6ru.b[32][0]++;cov_1xfx4nf6ru.s[93]++;return Object.assign({},it,item);}else{cov_1xfx4nf6ru.b[32][1]++;cov_1xfx4nf6ru.s[94]++;return it;}});cov_1xfx4nf6ru.s[95]++;return self._onSuccess(self._collection,options);}else{cov_1xfx4nf6ru.b[30][1]++;cov_1xfx4nf6ru.s[96]++;return self._onFail({Error:InvalidInputType},options);}};cov_1xfx4nf6ru.s[97]++;return this;};cov_1xfx4nf6ru.s[98]++;exports.default=collo;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("chai");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVubmVyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrL2Jvb3RzdHJhcCAyZjA0YTI4OTFlNzc0NDdiM2Y4MiIsIi9Vc2Vycy9jb21wdXRlci9Eb2N1bWVudHMvX1Byb2plY3RzL215TnBtUGFja2FnZXMvY29sbG8vdGVzdC9zcGVjcy9pbmRleC5zcGVjLmpzIiwiL1VzZXJzL2NvbXB1dGVyL0RvY3VtZW50cy9fUHJvamVjdHMvbXlOcG1QYWNrYWdlcy9jb2xsby90ZXN0IC9eXFwuXFwvc3BlY3MuKiQvIiwiZXh0ZXJuYWwgXCJmc1wiIiwiZXh0ZXJuYWwgXCJmcy1maWxlLXRyZWVcIiIsIi9Vc2Vycy9jb21wdXRlci9Eb2N1bWVudHMvX1Byb2plY3RzL215TnBtUGFja2FnZXMvY29sbG8vdGVzdC9ydW5uZXIuanMiLCIvVXNlcnMvY29tcHV0ZXIvRG9jdW1lbnRzL19Qcm9qZWN0cy9teU5wbVBhY2thZ2VzL2NvbGxvL3NyYy9pbmRleC5qcyIsImV4dGVybmFsIFwiY2hhaVwiIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMmYwNGEyODkxZTc3NDQ3YjNmODIiLCJpbXBvcnQgeyBleHBlY3QgfSBmcm9tICdjaGFpJztcbmltcG9ydCBDb2xsbyBmcm9tICdTcmMvaW5kZXguanMnO1xuLy9pbXBvcnQgQ29sbG8gZnJvbSAnTGliL2luZGV4Lm1pbi5qcyc7XG5cbmNvbnN0IGMgPSBbXG4gICAge1xuICAgICAgaWQ6IDEsXG4gICAgICBuYW1lOiAnQWRhbSdcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyLFxuICAgICAgbmFtZTogJ0p1bGlhbmEnXG4gICAgfVxuXTtcblxuY29uc3QgcHJvbWlzaWZ5ID0gZmFsc2U7XG5jb25zdCBjb2xsZWN0aW9uID0gbmV3IENvbGxvKGMse3Byb21pc2lmeX0pO1xuXG5jb25zb2xlLmxvZygnQ09MTEVDVElPTioqKioqKioqKioqKicsY29sbGVjdGlvbi5wcm90b3R5cGUpO1xuXG4vLyBsaXN0XG5pZighcHJvbWlzaWZ5KXtcblx0ZGVzY3JpYmUoJ1RoZSBsaXN0IGZuJywgKCkgPT4ge1xuXHRcdGl0KCdzaG91bGQgcmV0dXJuIHRoZSBzYW1lIGNvbGxlY3Rpb24nLCAoKSA9PiB7XG5cdFx0XHRleHBlY3QoY29sbGVjdGlvbi5saXN0KCkpLnRvLmVxdWFsKGMpO1xuXHRcdH0pO1xuXHR9KTtcbn1lbHNle1xuXHRkZXNjcmliZSgnVGhlIGxpc3QgZm4nLCAoKSA9PiB7XG5cdFx0aXQoJ3Nob3VsZCBiZSB0aGVuYWJsZScsICgpID0+IHtcblx0XHRcdGNvbGxlY3Rpb25cblx0XHRcdFx0Lmxpc3QoKVxuXHRcdFx0XHQudGhlbihyZXM9Pntcblx0XHRcdFx0XHRleHBlY3QocmVzKS50by5lcXVhbChjKTtcblx0XHRcdFx0fSk7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG4vLyBmaW5kV2hlcmVcbmRlc2NyaWJlKCdUaGUgZmluZFdoZXJlIGZuJywgKCkgPT4ge1xuXHRpdCgnc2hvdWxkIHJldHVybiB0aGUgQWRhbSBvYmplY3QnLCAoKSA9PiB7XG5cdFx0aWYoIXByb21pc2lmeSl7XG5cdFx0XHRleHBlY3QoY29sbGVjdGlvbi5maW5kV2hlcmUoe2lkOjF9KSlcblx0XHRcdFx0LnRvXG5cdFx0XHRcdC5kZWVwXG5cdFx0XHRcdC5lcXVhbCh7XG5cdFx0XHRcdFx0aWQ6IDEsXG5cdFx0XHRcdFx0bmFtZTogJ0FkYW0nXG5cdFx0XHRcdH0pO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHRjb2xsZWN0aW9uLmZpbmRXaGVyZSh7aWQ6MX0pXG5cdFx0XHRcdC50aGVuKHJlcz0+e1xuXHRcdFx0XHRcdGV4cGVjdChyZXMpXG5cdFx0XHRcdFx0XHQudG9cblx0XHRcdFx0XHRcdC5kZWVwXG5cdFx0XHRcdFx0XHQuZXF1YWwoe1xuXHRcdFx0XHRcdFx0XHRpZDogMSxcblx0XHRcdFx0XHRcdFx0bmFtZTogJ0FkYW0nXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXHR9KTtcbn0pO1xuXG5kZXNjcmliZSgnVGhlIGZpbmRXaGVyZSBmbicsICgpID0+IHtcblx0aXQoJ3Nob3VsZCByZXR1cm4gbnVsbCBnaXZlbiBhIGJhZCBpbnB1dCcsICgpID0+IHtcblx0XHRleHBlY3QoY29sbGVjdGlvbi5maW5kV2hlcmUoW10pKVxuXHRcdFx0LnRvXG5cdFx0XHQuZGVlcFxuXHRcdFx0LmVxdWFsKG51bGwpO1xuXHR9KTtcbn0pO1xuXG4vLyBleGlzdHNcbmlmKCFwcm9taXNpZnkpe1xuXHRkZXNjcmliZSgnVGhlIGV4aXN0cyBmbicsICgpID0+IHtcblx0XHRpdCgnc2hvdWxkIHJldHVybiB0cnVlJywgKCkgPT4ge1xuXHRcdFx0ZXhwZWN0KGNvbGxlY3Rpb24uZXhpc3RzKHtpZDoyfSkpXG5cdFx0XHRcdC50b1xuXHRcdFx0XHQuZXF1YWwodHJ1ZSk7XG5cdFx0fSk7XG5cdH0pO1xufWVsc2V7XG5cdGRlc2NyaWJlKCdUaGUgZXhpc3RzIGZuJywgKCkgPT4ge1xuXHRcdGl0KCdzaG91bGQgYmUgdGhlbmFibGUnLCAoKSA9PiB7XG5cdFx0XHRjb2xsZWN0aW9uLmV4aXN0cyh7aWQ6Mn0pXG5cdFx0XHRcdC50aGVuKHJlcz0+e1xuXHRcdFx0XHRcdGV4cGVjdChyZXMpXG5cdFx0XHRcdFx0XHQudG9cblx0XHRcdFx0XHRcdC5lcXVhbCh0cnVlKTtcblx0XHRcdFx0fSk7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5kZXNjcmliZSgnVGhlIGV4aXN0cyBmbicsICgpID0+IHtcblx0aXQoJ3Nob3VsZCByZXR1cm4gbnVsbCBnaXZlbiBhIGJhZCBpbnB1dCcsICgpID0+IHtcblx0XHRleHBlY3QoY29sbGVjdGlvbi5leGlzdHMoW10pKVxuXHRcdFx0LnRvXG5cdFx0XHQuZGVlcFxuXHRcdFx0LmVxdWFsKG51bGwpO1xuXHR9KTtcbn0pO1xuXG4vLyBpbnNlcnRcbmlmKCFwcm9taXNpZnkpe1xuXHRkZXNjcmliZSgnVGhlIGluc2VydCBmbicsICgpID0+IHtcblx0XHRpdCgnc2hvdWxkIHJldHVybiB0aGUgY29sbGVjdGlvbiB3aXRoIG9uZSBtb3JlIGl0ZW0gaW4gaXQnLCAoKSA9PiB7XG5cdFx0XHRsZXQgX2MgPSBjO1xuXG5cdFx0XHRfYy5wdXNoKHtcblx0XHRcdFx0aWQ6IDMsXG5cdFx0XHRcdG5hbWU6ICdQYWtpIFBha2knXG5cdFx0XHR9KTtcblxuXHRcdFx0ZXhwZWN0KGNvbGxlY3Rpb24uaW5zZXJ0KHtcblx0XHRcdFx0aWQ6IDMsXG5cdFx0XHRcdG5hbWU6ICdQYWtpIFBha2knXG5cdFx0XHR9KSlcblx0XHRcdFx0LnRvXG5cdFx0XHRcdC5kZWVwXG5cdFx0XHRcdC5lcXVhbChfYyk7XG5cdFx0fSk7XG5cdH0pO1xufWVsc2V7XG5cdGRlc2NyaWJlKCdUaGUgaW5zZXJ0IGZuJywgKCkgPT4ge1xuXHRcdGl0KCdzaG91bGQgYmUgdGhlbmFibGUnLCAoKSA9PiB7XG5cdFx0XHRsZXQgX2MgPSBjO1xuXG5cdFx0XHRfYy5wdXNoKHtcblx0XHRcdFx0aWQ6IDMsXG5cdFx0XHRcdG5hbWU6ICdQYWtpIFBha2knXG5cdFx0XHR9KTtcblxuXHRcdFx0Y29sbGVjdGlvbi5pbnNlcnQoe1xuXHRcdFx0XHRpZDogMyxcblx0XHRcdFx0bmFtZTogJ1Bha2kgUGFraSdcblx0XHRcdH0pLnRoZW4ocmVzPT57XG5cdFx0XHRcdGV4cGVjdChyZXMpXG5cdFx0XHRcdFx0LnRvXG5cdFx0XHRcdFx0LmRlZXBcblx0XHRcdFx0XHQuZXF1YWwoX2MpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5kZXNjcmliZSgnVGhlIGluc2VydCBmbicsICgpID0+IHtcblx0aXQoJ3Nob3VsZCByZXR1cm4gbnVsbCBnaXZlbiBhIGJhZCBpbnB1dCcsICgpID0+IHtcblx0XHRleHBlY3QoY29sbGVjdGlvbi5pbnNlcnQoW10pKVxuXHRcdFx0LnRvXG5cdFx0XHQuZGVlcFxuXHRcdFx0LmVxdWFsKG51bGwpO1xuXHR9KTtcbn0pO1xuXG5cbi8vIGluc2VydEF0SW5kZXhcbmlmKCFwcm9taXNpZnkpe1xuXHRkZXNjcmliZSgnVGhlIGluc2VydEF0SW5kZXggZm4nLCAoKSA9PiB7XG5cdFx0aXQoJ3Nob3VsZCByZXR1cm4gdGhlIHNhbWUgY29sbGVjdGlvbiBhcyB0aGUgdGVzdCcsICgpID0+IHtcblx0XHRcdGxldCBfYyA9IGM7XG5cdFx0XHRjb25zdCBpbmRleCA9IDE7XG5cblx0XHRcdF9jLnNwbGljZShpbmRleCwwLHtcblx0XHRcdFx0aWQ6IDUsXG5cdFx0XHRcdG5hbWU6ICdNaXJvbSdcblx0XHRcdH0pO1xuXG5cdFx0XHRleHBlY3QoY29sbGVjdGlvbi5pbnNlcnRBdEluZGV4KHtcblx0XHRcdFx0aWQ6IDMsXG5cdFx0XHRcdG5hbWU6ICdQYWtpIFBha2knXG5cdFx0XHR9LGluZGV4KSlcblx0XHRcdFx0LnRvXG5cdFx0XHRcdC5kZWVwXG5cdFx0XHRcdC5lcXVhbChfYyk7XG5cdFx0fSk7XG5cdH0pO1xufWVsc2V7XG5cdGRlc2NyaWJlKCdUaGUgaW5zZXJ0QXRJbmRleCBmbicsICgpID0+IHtcblx0XHRpdCgnc2hvdWxkIGJlIHRoZW5hYmxlJywgKCkgPT4ge1xuXHRcdFx0bGV0IF9jID0gYztcblx0XHRcdGNvbnN0IGluZGV4ID0gMTtcblxuXHRcdFx0X2Muc3BsaWNlKGluZGV4LDAse1xuXHRcdFx0XHRpZDogNSxcblx0XHRcdFx0bmFtZTogJ01pcm9tJ1xuXHRcdFx0fSk7XG5cblx0XHRcdGNvbGxlY3Rpb24uaW5zZXJ0QXRJbmRleCh7XG5cdFx0XHRcdGlkOiAzLFxuXHRcdFx0XHRuYW1lOiAnUGFraSBQYWtpJ1xuXHRcdFx0fSxpbmRleClcblx0XHRcdFx0LnRoZW4ocmVzPT57XG5cdFx0XHRcdFx0ZXhwZWN0KHJlcylcblx0XHRcdFx0XHRcdC50b1xuXHRcdFx0XHRcdFx0LmRlZXBcblx0XHRcdFx0XHRcdC5lcXVhbChfYyk7XG5cdFx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuZGVzY3JpYmUoJ1RoZSBpbnNlcnRBdEluZGV4IGZuJywgKCkgPT4ge1xuXHRpdCgnc2hvdWxkIHJldHVybiBudWxsIGdpdmVuIGEgYmFkIGlucHV0JywgKCkgPT4ge1xuXHRcdGV4cGVjdChjb2xsZWN0aW9uLmluc2VydEF0SW5kZXgoW10pKVxuXHRcdFx0LnRvXG5cdFx0XHQuZGVlcFxuXHRcdFx0LmVxdWFsKG51bGwpO1xuXHR9KTtcbn0pO1xuXG4vLyB1cHNlcnQgbm90IGZvdW5kXG5pZighcHJvbWlzaWZ5KXtcblx0ZGVzY3JpYmUoJ1RoZSB1cHNlcnQgW05PIGZvdW5kIGl0ZW1dIGZuJywgKCkgPT4ge1xuXHRcdGl0KCdzaG91bGQgcmV0dXJuIHRoZSBzYW1lIGNvbGxlY3Rpb24gYXMgdGhlIGlucHV0IHBsdXMgdGhlIG5ldyBpdGVtJywgKCkgPT4ge1xuXHRcdFx0Y29uc3QgY29sbGVjdGlvbiA9IG5ldyBDb2xsbyhbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpZDogMSxcblx0XHRcdFx0XHRuYW1lOiAnQWRhbSdcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGlkOiAyLFxuXHRcdFx0XHRcdG5hbWU6ICdKdWxpYW5hJ1xuXHRcdFx0XHR9XG5cdFx0XHRdKTtcblxuXHRcdFx0bGV0IF9jID0gW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWQ6IDEsXG5cdFx0XHRcdFx0bmFtZTogJ0FkYW0nXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpZDogMixcblx0XHRcdFx0XHRuYW1lOiAnSnVsaWFuYSdcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGlkOiAzLFxuXHRcdFx0XHRcdG5hbWU6ICdQYWtpIFBha2knXG5cdFx0XHRcdH1cblx0XHRcdF07XG5cblx0XHRcdGV4cGVjdChjb2xsZWN0aW9uLnVwc2VydCh7aWQ6M30se1xuXHRcdFx0XHRpZDogMyxcblx0XHRcdFx0bmFtZTogJ1Bha2kgUGFraSdcblx0XHRcdH0pKVxuXHRcdFx0LnRvXG5cdFx0XHQuZGVlcFxuXHRcdFx0LmVxdWFsKF9jKTtcblx0XHR9KTtcblx0fSk7XG59ZWxzZXtcblx0ZGVzY3JpYmUoJ1RoZSB1cHNlcnQgW05PIGZvdW5kIGl0ZW1dIGZuJywgKCkgPT4ge1xuXHRcdGl0KCdzaG91bGQgYmUgdGhlbmFibGUgYW5kIHJldHVybiB0aGUgc2FtZSBjb2xsZWN0aW9uIGFzIHRoZSBpbnB1dCBwbHVzIHRoZSBuZXcgaXRlbScsICgpID0+IHtcblx0XHRcdGNvbnN0IGNvbGxlY3Rpb24gPSBuZXcgQ29sbG8oW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWQ6IDEsXG5cdFx0XHRcdFx0bmFtZTogJ0FkYW0nXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpZDogMixcblx0XHRcdFx0XHRuYW1lOiAnSnVsaWFuYSdcblx0XHRcdFx0fVxuXHRcdFx0XSk7XG5cblx0XHRcdGxldCBfYyA9IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGlkOiAxLFxuXHRcdFx0XHRcdG5hbWU6ICdBZGFtJ1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWQ6IDIsXG5cdFx0XHRcdFx0bmFtZTogJ0p1bGlhbmEnXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpZDogMyxcblx0XHRcdFx0XHRuYW1lOiAnUGFraSBQYWtpJ1xuXHRcdFx0XHR9XG5cdFx0XHRdO1xuXG5cdFx0XHRjb2xsZWN0aW9uLnVwc2VydCh7aWQ6M30se1xuXHRcdFx0XHRpZDogMyxcblx0XHRcdFx0bmFtZTogJ1Bha2kgUGFraSdcblx0XHRcdH0pXG5cdFx0XHQudGhlbihyZXM9Pntcblx0XHRcdFx0ZXhwZWN0KHJlcylcblx0XHRcdFx0XHQudG9cblx0XHRcdFx0XHQuZGVlcFxuXHRcdFx0XHRcdC5lcXVhbChfYyk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fSk7XG59XG5cbi8vIHVwc2VydCBpdGVtIEZPVU5EXG5pZighcHJvbWlzaWZ5KXtcblx0ZGVzY3JpYmUoJ1RoZSB1cHNlcnQgW0l0ZW0gRk9VTkRdIGZuJywgKCkgPT4ge1xuXHRcdGl0KCdzaG91bGQgcmV0dXJuIHRoZSBzYW1lIGNvbGxlY3Rpb24gYXMgdGhlIGlucHV0IHBsdXMgdGhlIG5ldyBpdGVtJywgKCkgPT4ge1xuXHRcdFx0Y29uc3QgY29sbGVjdGlvbiA9IG5ldyBDb2xsbyhbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpZDogMSxcblx0XHRcdFx0XHRuYW1lOiAnQWRhbSdcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGlkOiAyLFxuXHRcdFx0XHRcdG5hbWU6ICdKdWxpYW5hJ1xuXHRcdFx0XHR9XG5cdFx0XHRdKTtcblxuXHRcdFx0bGV0IF9jID0gW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWQ6IDEsXG5cdFx0XHRcdFx0bmFtZTogJ0FkYW0nXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpZDogMixcblx0XHRcdFx0XHRuYW1lOiAnSnVsaWFuYSAmIE1pbGEnXG5cdFx0XHRcdH1cblx0XHRcdF07XG5cblx0XHRcdGV4cGVjdChjb2xsZWN0aW9uLnVwc2VydCh7aWQ6Mn0se1xuXHRcdFx0XHRpZDogMixcblx0XHRcdFx0bmFtZTogJ0p1bGlhbmEgJiBNaWxhJ1xuXHRcdFx0fSkpXG5cdFx0XHQudG9cblx0XHRcdC5kZWVwXG5cdFx0XHQuZXF1YWwoX2MpO1xuXHRcdH0pO1xuXHR9KTtcbn1lbHNle1xuXHRkZXNjcmliZSgnVGhlIHVwc2VydCBbSXRlbSBGT1VORF0gZm4nLCAoKSA9PiB7XG5cdFx0aXQoJ3Nob3VsZCBiZSB0aGVuYWJsZSBhbmQgcmV0dXJuIHRoZSBzYW1lIGNvbGxlY3Rpb24gYXMgdGhlIGlucHV0IHBsdXMgdGhlIG5ldyBpdGVtJywgKCkgPT4ge1xuXHRcdFx0Y29uc3QgY29sbGVjdGlvbiA9IG5ldyBDb2xsbyhbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpZDogMSxcblx0XHRcdFx0XHRuYW1lOiAnQWRhbSdcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGlkOiAyLFxuXHRcdFx0XHRcdG5hbWU6ICdKdWxpYW5hJ1xuXHRcdFx0XHR9XG5cdFx0XHRdKTtcblxuXHRcdFx0bGV0IF9jID0gW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWQ6IDEsXG5cdFx0XHRcdFx0bmFtZTogJ0FkYW0nXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpZDogMixcblx0XHRcdFx0XHRuYW1lOiAnSnVsaWFuYSAmIE1pbGEnXG5cdFx0XHRcdH1cblx0XHRcdF07XG5cblx0XHRcdGNvbGxlY3Rpb24udXBzZXJ0KHtpZDoyfSx7XG5cdFx0XHRcdGlkOiAyLFxuXHRcdFx0XHRuYW1lOiAnSnVsaWFuYSAmIE1pbGEnXG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4ocmVzPT57XG5cdFx0XHRcdGV4cGVjdChyZXMpXG5cdFx0XHRcdFx0LnRvXG5cdFx0XHRcdFx0LmRlZXBcblx0XHRcdFx0XHQuZXF1YWwoX2MpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5kZXNjcmliZSgnVGhlIHVwc2VydCBmbicsICgpID0+IHtcblx0aXQoJ3Nob3VsZCByZXR1cm4gbnVsbCBnaXZlbiBhIGJhZCBpbnB1dCcsICgpID0+IHtcblx0XHRleHBlY3QoY29sbGVjdGlvbi51cHNlcnQoW10pKVxuXHRcdFx0LnRvXG5cdFx0XHQuZGVlcFxuXHRcdFx0LmVxdWFsKG51bGwpO1xuXHR9KTtcbn0pO1xuXG4vLyB1cGRhdGVXaGVyZVxuaWYoIXByb21pc2lmeSl7XG5cdGRlc2NyaWJlKCdUaGUgdXBkYXRlV2hlcmUgZm4nLCAoKSA9PiB7XG5cdFx0aXQoJ3Nob3VsZCByZXR1cm4gdGhlIHNhbWUgY29sbGVjdGlvbiBhcyB0aGUgdGVzdCcsICgpID0+IHtcblx0XHRcdGNvbnN0IGNvbGxlY3Rpb24gPSBuZXcgQ29sbG8oW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWQ6IDEsXG5cdFx0XHRcdFx0bmFtZTogJ0FkYW0nXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpZDogMixcblx0XHRcdFx0XHRuYW1lOiAnSnVsaWFuYSdcblx0XHRcdFx0fVxuXHRcdFx0XSk7XG5cblx0XHRcdGxldCBfYyA9IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGlkOiAxLFxuXHRcdFx0XHRcdG5hbWU6ICdBZGFtJ1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWQ6IDIsXG5cdFx0XHRcdFx0bmFtZTogJ0p1bGlhbmEgJiBNaWxhJ1xuXHRcdFx0XHR9XG5cdFx0XHRdO1xuXG5cdFx0XHRleHBlY3QoY29sbGVjdGlvbi51cGRhdGVXaGVyZSh7aWQ6Mn0se1xuXHRcdFx0XHRpZDogMixcblx0XHRcdFx0bmFtZTogJ0p1bGlhbmEgJiBNaWxhJ1xuXHRcdFx0fSkpXG5cdFx0XHRcdC50b1xuXHRcdFx0XHQuZGVlcFxuXHRcdFx0XHQuZXF1YWwoX2MpO1xuXHRcdH0pO1xuXHR9KTtcbn1lbHNle1xuXHRkZXNjcmliZSgnVGhlIHVwZGF0ZVdoZXJlIGZuJywgKCkgPT4ge1xuXHRcdGl0KCdzaG91bGQgYmUgdGhlbmFibGUgYW5kIHJldHVybiB0aGUgc2FtZSBjb2xsZWN0aW9uIGFzIHRoZSB0ZXN0JywgKCkgPT4ge1xuXHRcdFx0Y29uc3QgY29sbGVjdGlvbiA9IG5ldyBDb2xsbyhbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpZDogMSxcblx0XHRcdFx0XHRuYW1lOiAnQWRhbSdcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGlkOiAyLFxuXHRcdFx0XHRcdG5hbWU6ICdKdWxpYW5hJ1xuXHRcdFx0XHR9XG5cdFx0XHRdKTtcblxuXHRcdFx0bGV0IF9jID0gW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWQ6IDEsXG5cdFx0XHRcdFx0bmFtZTogJ0FkYW0nXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpZDogMixcblx0XHRcdFx0XHRuYW1lOiAnSnVsaWFuYSAmIE1pbGEnXG5cdFx0XHRcdH1cblx0XHRcdF07XG5cblx0XHRcdGNvbGxlY3Rpb24udXBkYXRlV2hlcmUoe2lkOjJ9LHtcblx0XHRcdFx0aWQ6IDIsXG5cdFx0XHRcdG5hbWU6ICdKdWxpYW5hICYgTWlsYSdcblx0XHRcdH0pXG5cdFx0XHQudGhlbihyZXM9Pntcblx0XHRcdFx0ZXhwZWN0KHJlcylcblx0XHRcdFx0XHQudG9cblx0XHRcdFx0XHQuZGVlcFxuXHRcdFx0XHRcdC5lcXVhbChfYyk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fSk7XG59XG5cblxuZGVzY3JpYmUoJ1RoZSB1cGRhdGVXaGVyZSBmbicsICgpID0+IHtcblx0aXQoJ3Nob3VsZCBudWxsIG51bGwgZ2l2ZW4gYSBiYWQgaW5wdXQnLCAoKSA9PiB7XG5cdFx0ZXhwZWN0KGNvbGxlY3Rpb24udXBkYXRlV2hlcmUoW10pKVxuXHRcdFx0LnRvXG5cdFx0XHQuZGVlcFxuXHRcdFx0LmVxdWFsKG51bGwpO1xuXHR9KTtcbn0pO1xuXG4vLyByZW1vdmVXaGVyZVxuaWYoIXByb21pc2lmeSl7XG5cdGRlc2NyaWJlKCdUaGUgcmVtb3ZlV2hlcmUgZm4nLCAoKSA9PiB7XG5cdFx0aXQoJ3Nob3VsZCByZXR1cm4gdGhlIHNhbWUgY29sbGVjdGlvbiBhcyB0aGUgdGVzdCcsICgpID0+IHtcblx0XHRcdGxldCBfYyA9IGM7XG5cdFx0XHRjb25zdCBrZXkgPSAnaWQnLFxuXHRcdFx0XHQgIHZhbHVlID0gMztcblxuXHRcdFx0Y29uc3QgY29sbCA9IF9jLmZpbHRlcihpdGVtID0+IGl0ZW1ba2V5XSAmJiAhKGl0ZW1ba2V5XSA9PT0gdmFsdWUpKTtcblxuXHRcdFx0ZXhwZWN0KGNvbGxlY3Rpb24ucmVtb3ZlV2hlcmUoe2lkOjN9KSlcblx0XHRcdFx0LnRvXG5cdFx0XHRcdC5kZWVwXG5cdFx0XHRcdC5lcXVhbChjb2xsKTtcblx0XHR9KTtcblx0fSk7XG59ZWxzZXtcblx0ZGVzY3JpYmUoJ1RoZSByZW1vdmVXaGVyZSBmbicsICgpID0+IHtcblx0XHRpdCgnc2hvdWxkIGJlIHRoZW5hYmxlIGFuZCByZXR1cm4gdGhlIHNhbWUgY29sbGVjdGlvbiBhcyB0aGUgdGVzdCcsICgpID0+IHtcblx0XHRcdGxldCBfYyA9IGM7XG5cdFx0XHRjb25zdCBrZXkgPSAnaWQnLFxuXHRcdFx0XHQgIHZhbHVlID0gMjtcblxuXHRcdFx0Y29uc3QgY29sbCA9IF9jLmZpbHRlcihpdGVtID0+IGl0ZW1ba2V5XSAmJiAhKGl0ZW1ba2V5XSA9PT0gdmFsdWUpKTtcblxuXHRcdFx0Y29sbGVjdGlvbi5yZW1vdmVXaGVyZSh7aWQ6Mn0pXG5cdFx0XHRcdC50aGVuKHJlcz0+e1xuXHRcdFx0XHRcdGV4cGVjdChyZXMpXG5cdFx0XHRcdFx0XHQudG9cblx0XHRcdFx0XHRcdC5kZWVwXG5cdFx0XHRcdFx0XHQuZXF1YWwoY29sbCk7XG5cdFx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuXG5kZXNjcmliZSgnVGhlIHJlbW92ZVdoZXJlIGZuJywgKCkgPT4ge1xuXHRpdCgnc2hvdWxkIHJldHVybiBudWxsIGdpdmVuIGEgYmFkIGlucHV0JywgKCkgPT4ge1xuXHRcdGV4cGVjdChjb2xsZWN0aW9uLnJlbW92ZVdoZXJlKFtdKSlcblx0XHRcdC50b1xuXHRcdFx0LmRlZXBcblx0XHRcdC5lcXVhbChudWxsKTtcblx0fSk7XG59KTtcblxuXG4vLyBnZXRUaGVJbmRleE9mXG5pZighcHJvbWlzaWZ5KXtcblx0ZGVzY3JpYmUoJ1RoZSBnZXRUaGVJbmRleE9mIGZuJywgKCkgPT4ge1xuXHRcdGl0KCdzaG91bGQgcmV0dXJuIHRoZSBpbmRleCBvZiB0aGUgaXRlbSBpbiB0aGUgY29sbGVjdGlvbicsICgpID0+IHtcblx0XHRcdGV4cGVjdChjb2xsZWN0aW9uLmdldFRoZUluZGV4T2Yoe2lkOjJ9KSlcblx0XHRcdFx0LnRvXG5cdFx0XHRcdC5lcXVhbCgxKTtcblx0XHR9KTtcblx0fSk7XG59ZWxzZXtcblx0ZGVzY3JpYmUoJ1RoZSBnZXRUaGVJbmRleE9mIGZuJywgKCkgPT4ge1xuXHRcdGl0KCdzaG91bGQgYmUgdGhlbmFibGUgYW5kIHJldHVybiB0aGUgaW5kZXggb2YgdGhlIGl0ZW0gaW4gdGhlIGNvbGxlY3Rpb24nLCAoKSA9PiB7XG5cdFx0XHRjb2xsZWN0aW9uLmdldFRoZUluZGV4T2Yoe2lkOjJ9KVxuXHRcdFx0XHQudGhlbihyZXM9Pntcblx0XHRcdFx0XHRleHBlY3QocmVzKVxuXHRcdFx0XHRcdFx0LnRvXG5cdFx0XHRcdFx0XHQuZXF1YWwoMSk7XG5cdFx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuXG5kZXNjcmliZSgnVGhlIGdldFRoZUluZGV4T2YgZm4nLCAoKSA9PiB7XG5cdGl0KCdzaG91bGQgcmV0dXJuIG51bGwgZ2l2ZW4gYSBiYWQgaW5wdXQnLCAoKSA9PiB7XG5cdFx0ZXhwZWN0KGNvbGxlY3Rpb24uZ2V0VGhlSW5kZXhPZihbXSkpXG5cdFx0XHQudG9cblx0XHRcdC5kZWVwXG5cdFx0XHQuZXF1YWwobnVsbCk7XG5cdH0pO1xufSk7XG5cblxuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NwZWNzL2luZGV4LnNwZWMuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG1hcCA9IHtcblx0XCIuL3NwZWNzL2luZGV4LnNwZWNcIjogMCxcblx0XCIuL3NwZWNzL2luZGV4LnNwZWMuanNcIjogMFxufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpO1xuXHRyZXR1cm4gaWQ7XG59O1xud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDE7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLiBeXFwuXFwvc3BlY3MuKiRcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJmc1wiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzLWZpbGUtdHJlZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImZzLWZpbGUtdHJlZVwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBmc0ZpbGVUcmVlIGZyb20gJ2ZzLWZpbGUtdHJlZSc7XG5pbXBvcnQgZnMgICAgICAgICBmcm9tICdmcyc7XG5cblxuY29uc3QgdGVzdEZvbGRlciAgID0gJ3Rlc3Qvc3BlY3MnO1xuXG5idWlsZFRyZWUoZnNGaWxlVHJlZS5zeW5jKHByb2Nlc3MuY3dkKCkgKyAnLycgKyB0ZXN0Rm9sZGVyKSwgdGVzdEZvbGRlcik7XG5cbmZ1bmN0aW9uIGJ1aWxkVHJlZSh0cmVlLCByb290KSB7XG4gICAgX2J1aWxkVHJlZSh0cmVlLCByb290LCAnLycpO1xufVxuXG5mdW5jdGlvbiBfYnVpbGRUcmVlKHRyZWUsIHJvb3QsIHBhdGgpIHtcbiAgICBmb3IobGV0IGl0ZW0gaW4gdHJlZSkge1xuICAgICAgICBpZih0cmVlLmhhc093blByb3BlcnR5KGl0ZW0pKSB7XG4gICAgICAgICAgICBsZXQgaXRlbVN0YXRzID0gZnMubHN0YXRTeW5jKCcuLycgKyByb290ICsgcGF0aCArIGl0ZW0pO1xuXG4gICAgICAgICAgICBpZihpdGVtU3RhdHMuaXNEaXJlY3RvcnkoKSkge1xuICAgICAgICAgICAgICAgIGRlc2NyaWJlKGl0ZW0gKyAnLycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgX2J1aWxkVHJlZSh0cmVlW2l0ZW1dLCByb290LCBwYXRoICsgaXRlbSArICcvJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYoaXRlbVN0YXRzLmlzRmlsZSgpKSB7XG4gICAgICAgICAgICAgICAgZGVzY3JpYmUoaXRlbSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZmlsZSA9IHJlcXVpcmUoJy4vc3BlY3MnICsgcGF0aCArIGl0ZW0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBmaWxlLmRlZmF1bHQgPT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlLmRlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3J1bm5lci5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmZ1bmN0aW9uIGNvbGxvKGNvbGxlY3Rpb24pIHtcblx0dmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG5cdHZhciBfdGhpcyA9IHRoaXM7XG5cblx0dmFyIG5leHQgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IGZ1bmN0aW9uICgpIHt9O1xuXHR2YXIgZXJyb3IgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IGZ1bmN0aW9uICgpIHt9O1xuXG5cdHRoaXMuX2NvbGxlY3Rpb24gPSBjb2xsZWN0aW9uIHx8IFtdO1xuXHR0aGlzLm5leHQgPSBuZXh0O1xuXHR0aGlzLmVycm9yID0gZXJyb3I7XG5cblx0dmFyIHNlbGYgPSB0aGlzO1xuXHR2YXIgSW52YWxpZElucHV0VHlwZSA9IFwiSW52YWxpZCBpbnB1dCB0eXBlLiBJbnB1dCBtdXN0IGJlIGFuIG9iamVjdFwiO1xuXHR2YXIgTm90Rm91bmQgPSBcIkl0ZW0gbm90IGZvdW5kIGluIHRoZSBjb2xsZWN0aW9uXCI7XG5cblx0LyoqXG4gICogQ2hlY2sgaWYgaXMgYW4gb2JqZWN0IHdpdGggdmFsdWVzXG4gICogQHBhcmFtIGl0ZW1cbiAgKiBAcHJpdmF0ZVxuICAqL1xuXHRzZWxmLl9pc09iamVjdCA9IGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0cmV0dXJuIGl0ZW0gJiYgKHR5cGVvZiBpdGVtID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoaXRlbSkpID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyhpdGVtKS5sZW5ndGg7XG5cdH07XG5cblx0LyoqXG4gICogSW50ZXJuYWwgaW5kZXggZmV0Y2hlclxuICAqIEB0b2RvIDogaGlkZSBwcml2YXRlIG1ldGhvZHMgaW4gdGhlIHByb3RvdHlwZVxuICAqIEBwYXJhbSB2YWxcbiAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgKiBAcHJpdmF0ZVxuICAqL1xuXHRzZWxmLl9nZXRUaGVJbmRleE9mID0gZnVuY3Rpb24gKHZhbCkge1xuXHRcdHZhciBpbmRleCA9IGZhbHNlO1xuXHRcdHZhciBrZXkgPSBPYmplY3Qua2V5cyh2YWwpWzBdO1xuXG5cdFx0c2VsZi5fY29sbGVjdGlvbi5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpKSB7XG5cdFx0XHRpZiAoaXRlbVtrZXldID09PSB2YWxba2V5XSkge1xuXHRcdFx0XHRpbmRleCA9IGk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gaW5kZXg7XG5cdH07XG5cblx0LyoqXG4gICogUnNwb25zZSB1dGlsaXR5IGZuc1xuICAqIEBwYXJhbSBpbnB1dFxuICAqIEBwYXJhbSBvcHRpb25zXG4gICogQHBhcmFtIG5leHRcbiAgKiBAcmV0dXJucyB7Kn1cbiAgKi9cblx0c2VsZi5fb25TdWNjZXNzID0gZnVuY3Rpb24gKGlucHV0LCBvcHRpb25zKSB7XG5cdFx0X3RoaXMubmV4dChpbnB1dCk7XG5cblx0XHRpZiAob3B0aW9ucy5wcm9taXNpZnkpIHtcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0XHRcdHJlc29sdmUoaW5wdXQpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGlucHV0O1xuXHR9O1xuXG5cdHNlbGYuX29uRmFpbCA9IGZ1bmN0aW9uIChpbnB1dCwgb3B0aW9ucykge1xuXHRcdC8vY29uc3QgcmVzcG9uc2UgPSBpbnB1dC5oYXNPd25Qcm9wZXJ0eSgnRXJyb3InKSA/IG51bGwgOiBpbnB1dDtcblx0XHR2YXIgcmVzcG9uc2UgPSBudWxsO1xuXG5cdFx0X3RoaXMuZXJyb3IocmVzcG9uc2UpO1xuXG5cdFx0Y29uc29sZS5sb2coJ0VSUk9SJywgcmVzcG9uc2UsIGlucHV0LCBvcHRpb25zLCBfdGhpcyk7XG5cblx0XHRpZiAob3B0aW9ucy5wcm9taXNpZnkpIHtcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0XHRcdHJlamVjdChyZXNwb25zZSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzcG9uc2U7XG5cdH07XG5cblx0LyoqXG4gICogUHVibGljIGdldCB0aGUgaW5kZXggb2YgbWV0aG9kXG4gICogQHBhcmFtIHZhbFxuICAqIEByZXR1cm5zIHsqfVxuICAqL1xuXHRzZWxmLmdldFRoZUluZGV4T2YgPSBmdW5jdGlvbiAodmFsKSB7XG5cdFx0aWYgKHNlbGYuX2lzT2JqZWN0KHZhbCkpIHtcblx0XHRcdHZhciBpbmRleCA9IHNlbGYuX2dldFRoZUluZGV4T2YodmFsKTtcblxuXHRcdFx0aWYgKGluZGV4KSB7XG5cdFx0XHRcdHJldHVybiBzZWxmLl9vblN1Y2Nlc3MoaW5kZXgsIG9wdGlvbnMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHNlbGYuX29uRmFpbCh7IEVycm9yOiBOb3RGb3VuZCB9LCBvcHRpb25zKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHNlbGYuX29uRmFpbCh7IEVycm9yOiBJbnZhbGlkSW5wdXRUeXBlIH0sIG9wdGlvbnMpO1xuXHRcdH1cblx0fTtcblxuXHQvKipcbiAgKiBSZXR1cm4gdGhlIGN1cnJlbnQgY29sbGVjdGlvblxuICAqL1xuXHRzZWxmLmxpc3QgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHNlbGYuX29uU3VjY2VzcyhzZWxmLl9jb2xsZWN0aW9uLCBvcHRpb25zKTtcblx0fTtcblxuXHQvKipcbiAgKiBSZXR1cm4gdGhlIGl0ZW0gd2hlcmUgdGhlIGtleS9hbCBtYXRjaFxuICAqIEBwYXJhbSB2YWxcbiAgKi9cblx0c2VsZi5maW5kV2hlcmUgPSBmdW5jdGlvbiAodmFsKSB7XG5cdFx0aWYgKHNlbGYuX2lzT2JqZWN0KHZhbCkpIHtcblx0XHRcdHZhciBpID0gc2VsZi5fY29sbGVjdGlvbi5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdFx0dmFyIGtleSA9IE9iamVjdC5rZXlzKHZhbClbMF07XG5cblx0XHRcdFx0cmV0dXJuIGl0ZW1ba2V5XSAmJiBpdGVtW2tleV0gPT09IHZhbFtrZXldO1xuXHRcdFx0fSlbMF07XG5cblx0XHRcdGlmIChpKSB7XG5cdFx0XHRcdHJldHVybiBzZWxmLl9vblN1Y2Nlc3MoaSwgb3B0aW9ucyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gc2VsZi5fb25TdWNjZXNzKG51bGwsIG9wdGlvbnMpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gc2VsZi5fb25GYWlsKHsgRXJyb3I6IEludmFsaWRJbnB1dFR5cGUgfSwgb3B0aW9ucyk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuICAqIFVzZWQgdG8gZGV0ZXJtaW5lIGlmIGFuIGl0ZW0gaXMgaW4gdGhlIGNvbGxlY3Rpb25cbiAgKiBAcGFyYW0gdmFsXG4gICovXG5cdHNlbGYuZXhpc3RzID0gZnVuY3Rpb24gKHZhbCkge1xuXHRcdGlmIChzZWxmLl9pc09iamVjdCh2YWwpKSB7XG5cdFx0XHRyZXR1cm4gc2VsZi5fb25TdWNjZXNzKCEhc2VsZi5fZ2V0VGhlSW5kZXhPZih2YWwpLCBvcHRpb25zKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHNlbGYuX29uRmFpbCh7IEVycm9yOiBJbnZhbGlkSW5wdXRUeXBlIH0sIG9wdGlvbnMpO1xuXHRcdH1cblx0fTtcblxuXHQvKipcbiAgKiBJbnNlcnQgdGhlIGl0ZW0gYXQgdGhlIGVuZCBvZiB0aGUgc3RhY2tcbiAgKiBAcGFyYW0gaXRlbVxuICAqIEByZXR1cm5zIHsqfEFycmF5fVxuICAqL1xuXHRzZWxmLmluc2VydCA9IGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0aWYgKHNlbGYuX2lzT2JqZWN0KGl0ZW0pKSB7XG5cdFx0XHRzZWxmLl9jb2xsZWN0aW9uLnB1c2goaXRlbSk7XG5cblx0XHRcdHJldHVybiBzZWxmLl9vblN1Y2Nlc3Moc2VsZi5fY29sbGVjdGlvbiwgb3B0aW9ucyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBzZWxmLl9vbkZhaWwoeyBFcnJvcjogSW52YWxpZElucHV0VHlwZSB9LCBvcHRpb25zKTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG4gICogU3BsaWNlIGFuIGl0ZW0gaW4gYXQgYW4gZXhhY3QgcG9zaXRpb24gaW4gdGhlIGNvbGxlY3Rpb25cbiAgKiBAcGFyYW0gaXRlbVxuICAqIEBwYXJhbSBpbmRleFxuICAqIEByZXR1cm5zIHsqfEFycmF5fVxuICAqL1xuXHRzZWxmLmluc2VydEF0SW5kZXggPSBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcblx0XHRpZiAoc2VsZi5faXNPYmplY3QoaXRlbSkpIHtcblx0XHRcdHNlbGYuX2NvbGxlY3Rpb24uc3BsaWNlKGluZGV4LCAwLCBpdGVtKTtcblxuXHRcdFx0cmV0dXJuIHNlbGYuX29uU3VjY2VzcyhzZWxmLl9jb2xsZWN0aW9uLCBvcHRpb25zKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHNlbGYuX29uRmFpbCh7IEVycm9yOiBJbnZhbGlkSW5wdXRUeXBlIH0sIG9wdGlvbnMpO1xuXHRcdH1cblx0fTtcblxuXHQvKipcbiAgKiBJZiB0aGUgaXRlbSBleGlzdHMsIHBlcmZvcm0gYW4gZHVwZGF0ZSwgb3RoZXJ3aXNlIGluc2VydFxuICAqIEBwYXJhbSB2YWxcbiAgKiBAcGFyYW0gaXRlbVxuICAqIEByZXR1cm5zIHsqfVxuICAqL1xuXHRzZWxmLnVwc2VydCA9IGZ1bmN0aW9uICh2YWwsIGl0ZW0pIHtcblx0XHRpZiAoc2VsZi5faXNPYmplY3QodmFsKSAmJiBzZWxmLl9pc09iamVjdChpdGVtKSkge1xuXHRcdFx0aWYgKCFzZWxmLl9nZXRUaGVJbmRleE9mKHZhbCkpIHtcblx0XHRcdFx0c2VsZi5pbnNlcnQoaXRlbSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzZWxmLl9jb2xsZWN0aW9uID0gc2VsZi5fY29sbGVjdGlvbi5tYXAoZnVuY3Rpb24gKGl0KSB7XG5cdFx0XHRcdFx0dmFyIGtleSA9IE9iamVjdC5rZXlzKHZhbClbMF07XG5cblx0XHRcdFx0XHRpZiAoaXRba2V5XSA9PT0gdmFsW2tleV0pIHtcblx0XHRcdFx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpdCwgaXRlbSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuIGl0O1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHNlbGYuX29uU3VjY2VzcyhzZWxmLl9jb2xsZWN0aW9uLCBvcHRpb25zKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHNlbGYuX29uRmFpbCh7IEVycm9yOiBJbnZhbGlkSW5wdXRUeXBlIH0sIG9wdGlvbnMpO1xuXHRcdH1cblx0fTtcblxuXHQvKipcbiAgKiBSZW1vdmUgd2hlcmUgdGhlIGtleSBhbmQgdmFsdWUgbWF0Y2hcbiAgKiBAcGFyYW0gdmFsXG4gICovXG5cdHNlbGYucmVtb3ZlV2hlcmUgPSBmdW5jdGlvbiAodmFsKSB7XG5cdFx0aWYgKHNlbGYuX2lzT2JqZWN0KHZhbCkpIHtcblx0XHRcdHZhciBpbmRleCA9IHNlbGYuX2dldFRoZUluZGV4T2YodmFsKTtcblxuXHRcdFx0aWYgKGluZGV4KSB7XG5cdFx0XHRcdHNlbGYuX2NvbGxlY3Rpb24uc3BsaWNlKGluZGV4LCAxKTtcblxuXHRcdFx0XHRyZXR1cm4gc2VsZi5fb25TdWNjZXNzKHNlbGYuX2NvbGxlY3Rpb24sIG9wdGlvbnMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHNlbGYuX29uRmFpbCh7IEVycm9yOiBOb3RGb3VuZCB9LCBvcHRpb25zKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHNlbGYuX29uRmFpbCh7IEVycm9yOiBJbnZhbGlkSW5wdXRUeXBlIH0sIG9wdGlvbnMpO1xuXHRcdH1cblx0fTtcblxuXHQvKipcbiAgKiBQZXJmb3JtIGEgbm9ybWFsIHVwZGF0ZSBpZiB0aGUga2V5IGFuZCB2YWx1ZSBtYXRjaFxuICAqIEBwYXJhbSB2YWxcbiAgKiBAcGFyYW0gaXRlbVxuICAqL1xuXHRzZWxmLnVwZGF0ZVdoZXJlID0gZnVuY3Rpb24gKHZhbCwgaXRlbSkge1xuXHRcdGlmIChzZWxmLl9pc09iamVjdCh2YWwpICYmIHNlbGYuX2lzT2JqZWN0KHZhbCkpIHtcblx0XHRcdHNlbGYuX2NvbGxlY3Rpb24gPSBzZWxmLl9jb2xsZWN0aW9uLm1hcChmdW5jdGlvbiAoaXQpIHtcblxuXHRcdFx0XHR2YXIga2V5ID0gT2JqZWN0LmtleXModmFsKVswXTtcblxuXHRcdFx0XHRpZiAoaXRba2V5XSA9PT0gdmFsW2tleV0pIHtcblx0XHRcdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgaXQsIGl0ZW0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiBpdDtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiBzZWxmLl9vblN1Y2Nlc3Moc2VsZi5fY29sbGVjdGlvbiwgb3B0aW9ucyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBzZWxmLl9vbkZhaWwoeyBFcnJvcjogSW52YWxpZElucHV0VHlwZSB9LCBvcHRpb25zKTtcblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjb2xsbztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hhaVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNoYWlcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDamlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ25CQTtBQUNBOzs7OztBQ0RBO0FBQ0E7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQWpCQTtBQUNBO0FBQUE7QUFBQTtBQWlCQTtBQUNBO0FBQ0E7Ozs7OztBQzlCQTs7OztBQU1BOzs7Ozs7QUFBQTs7Ozs7O0FBQUE7QUFrRUE7Ozs7QUFsRUE7O0FBQUE7OztBQUFBOzs7QUFBQTs7OztBQUFBOzs7OztBQUFBOzs7OztBQUFBOzs7QUFBQTs7OztBQUFBO0FBQ0E7Ozs7O0FDVEE7QUFDQTs7Iiwic291cmNlUm9vdCI6IiJ9