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

const collection = new __WEBPACK_IMPORTED_MODULE_1_Src_index_js___default.a(c);

// list
describe('The list fn', () => {
  it('should return the same collection', () => {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(collection.list()).to.equal(c);
  });
});

// findWhere
describe('The findWhere fn', () => {
  it('should return the Adam object', () => {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(collection.findWhere({id:1}))
		  .to
		  .deep
		  .equal({
				id: 1,
				name: 'Adam'
			  });
    });
});

// exists
describe('The exists fn', () => {
	it('should return true', () => {
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(collection.exists({id:2}))
			.to
			.equal(true);
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

		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(collection.insert({
			id: 3,
			name: 'Paki Paki'
		}))
			.to
			.deep
			.equal(_c);
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

		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(collection.insertAtIndex({
			id: 3,
			name: 'Paki Paki'
		},index))
			.to
			.deep
			.equal(_c);
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

		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(collection.upsert({id:3},{
			id: 3,
			name: 'Paki Paki'
		}))
			.to
			.deep
			.equal(_c);
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

		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(collection.upsert({id:2},{
			id: 2,
			name: 'Juliana & Mila'
		}))
			.to
			.deep
			.equal(_c);
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

		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(collection.updateWhere({id:2},{
			id: 2,
			name: 'Juliana & Mila'
		}))
			.to
			.deep
			.equal(_c);
	});
});

// removeWhere
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
var cov_1xfx4nf6ru=function(){var path="/Users/computer/Documents/_Projects/myNpmPackages/collo/src/index.js",hash="f7d799336bb1aaaae018217620c63887e1b979b8",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/computer/Documents/_Projects/myNpmPackages/collo/src/index.js",statementMap:{"0":{start:{line:3,column:0},end:{line:5,column:3}},"1":{start:{line:7,column:0},end:{line:121,column:2}},"2":{start:{line:8,column:13},end:{line:8,column:17}},"3":{start:{line:10,column:1},end:{line:10,column:37}},"4":{start:{line:15,column:1},end:{line:17,column:3}},"5":{start:{line:16,column:2},end:{line:16,column:27}},"6":{start:{line:23,column:1},end:{line:29,column:3}},"7":{start:{line:24,column:2},end:{line:28,column:8}},"8":{start:{line:25,column:13},end:{line:25,column:32}},"9":{start:{line:27,column:3},end:{line:27,column:46}},"10":{start:{line:35,column:1},end:{line:37,column:3}},"11":{start:{line:36,column:2},end:{line:36,column:32}},"12":{start:{line:44,column:1},end:{line:48,column:3}},"13":{start:{line:45,column:2},end:{line:45,column:31}},"14":{start:{line:47,column:2},end:{line:47,column:27}},"15":{start:{line:56,column:1},end:{line:59,column:3}},"16":{start:{line:57,column:2},end:{line:57,column:43}},"17":{start:{line:58,column:2},end:{line:58,column:27}},"18":{start:{line:67,column:1},end:{line:89,column:3}},"19":{start:{line:68,column:24},end:{line:68,column:29}},"20":{start:{line:70,column:14},end:{line:80,column:4}},"21":{start:{line:71,column:13},end:{line:71,column:32}},"22":{start:{line:73,column:3},end:{line:79,column:4}},"23":{start:{line:74,column:4},end:{line:74,column:27}},"24":{start:{line:76,column:4},end:{line:76,column:39}},"25":{start:{line:78,column:4},end:{line:78,column:14}},"26":{start:{line:82,column:2},end:{line:88,column:3}},"27":{start:{line:83,column:3},end:{line:83,column:22}},"28":{start:{line:85,column:3},end:{line:85,column:28}},"29":{start:{line:87,column:3},end:{line:87,column:16}},"30":{start:{line:95,column:1},end:{line:101,column:3}},"31":{start:{line:96,column:2},end:{line:100,column:5}},"32":{start:{line:97,column:13},end:{line:97,column:32}},"33":{start:{line:99,column:3},end:{line:99,column:49}},"34":{start:{line:108,column:1},end:{line:118,column:3}},"35":{start:{line:109,column:2},end:{line:117,column:5}},"36":{start:{line:110,column:13},end:{line:110,column:32}},"37":{start:{line:112,column:3},end:{line:116,column:4}},"38":{start:{line:113,column:4},end:{line:113,column:39}},"39":{start:{line:115,column:4},end:{line:115,column:14}},"40":{start:{line:120,column:1},end:{line:120,column:13}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:7,column:18},end:{line:7,column:19}},loc:{start:{line:7,column:40},end:{line:121,column:1}},line:7},"1":{name:"(anonymous_1)",decl:{start:{line:15,column:13},end:{line:15,column:14}},loc:{start:{line:15,column:25},end:{line:17,column:2}},line:15},"2":{name:"(anonymous_2)",decl:{start:{line:23,column:18},end:{line:23,column:19}},loc:{start:{line:23,column:33},end:{line:29,column:2}},line:23},"3":{name:"(anonymous_3)",decl:{start:{line:24,column:34},end:{line:24,column:35}},loc:{start:{line:24,column:50},end:{line:28,column:3}},line:24},"4":{name:"(anonymous_4)",decl:{start:{line:35,column:15},end:{line:35,column:16}},loc:{start:{line:35,column:30},end:{line:37,column:2}},line:35},"5":{name:"(anonymous_5)",decl:{start:{line:44,column:15},end:{line:44,column:16}},loc:{start:{line:44,column:31},end:{line:48,column:2}},line:44},"6":{name:"(anonymous_6)",decl:{start:{line:56,column:22},end:{line:56,column:23}},loc:{start:{line:56,column:45},end:{line:59,column:2}},line:56},"7":{name:"(anonymous_7)",decl:{start:{line:67,column:15},end:{line:67,column:16}},loc:{start:{line:67,column:36},end:{line:89,column:2}},line:67},"8":{name:"(anonymous_8)",decl:{start:{line:70,column:36},end:{line:70,column:37}},loc:{start:{line:70,column:50},end:{line:80,column:3}},line:70},"9":{name:"(anonymous_9)",decl:{start:{line:95,column:20},end:{line:95,column:21}},loc:{start:{line:95,column:35},end:{line:101,column:2}},line:95},"10":{name:"(anonymous_10)",decl:{start:{line:96,column:34},end:{line:96,column:35}},loc:{start:{line:96,column:50},end:{line:100,column:3}},line:96},"11":{name:"(anonymous_11)",decl:{start:{line:108,column:20},end:{line:108,column:21}},loc:{start:{line:108,column:41},end:{line:118,column:2}},line:108},"12":{name:"(anonymous_12)",decl:{start:{line:109,column:31},end:{line:109,column:32}},loc:{start:{line:109,column:45},end:{line:117,column:3}},line:109}},branchMap:{"0":{loc:{start:{line:10,column:20},end:{line:10,column:36}},type:"binary-expr",locations:[{start:{line:10,column:20},end:{line:10,column:30}},{start:{line:10,column:34},end:{line:10,column:36}}],line:10},"1":{loc:{start:{line:27,column:10},end:{line:27,column:45}},type:"binary-expr",locations:[{start:{line:27,column:10},end:{line:27,column:19}},{start:{line:27,column:23},end:{line:27,column:45}}],line:27},"2":{loc:{start:{line:73,column:3},end:{line:79,column:4}},type:"if",locations:[{start:{line:73,column:3},end:{line:79,column:4}},{start:{line:73,column:3},end:{line:79,column:4}}],line:73},"3":{loc:{start:{line:82,column:2},end:{line:88,column:3}},type:"if",locations:[{start:{line:82,column:2},end:{line:88,column:3}},{start:{line:82,column:2},end:{line:88,column:3}}],line:82},"4":{loc:{start:{line:99,column:10},end:{line:99,column:48}},type:"binary-expr",locations:[{start:{line:99,column:10},end:{line:99,column:19}},{start:{line:99,column:23},end:{line:99,column:48}}],line:99},"5":{loc:{start:{line:112,column:3},end:{line:116,column:4}},type:"if",locations:[{start:{line:112,column:3},end:{line:116,column:4}},{start:{line:112,column:3},end:{line:116,column:4}}],line:112}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0},b:{"0":[0,0],"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0]},inputSourceMap:{version:3,sources:["src/index.js"],names:["collection","_collection","list","findWhere","filter","key","Object","keys","val","item","exists","insert","push","insertAtIndex","index","splice","upsert","wasInCollection","upsrt","map","it","assign","removeWhere","updateWhere"],mappings:";;;;;;kBAAe,UAAUA,UAAV,EAAsB;AAAA;;AACpC,MAAKC,WAAL,GAAmBD,cAAc,EAAjC;;AAEA;;;AAGA,MAAKE,IAAL,GAAY;AAAA,SAAM,MAAKD,WAAX;AAAA,EAAZ;;AAEA;;;;AAIA,MAAKE,SAAL,GAAiB;AAAA,SAAO,MAAKF,WAAL,CACrBG,MADqB,CACd,gBAAQ;AACf,OAAIC,MAAMC,OAAOC,IAAP,CAAYC,GAAZ,EAAiB,CAAjB,CAAV;;AAEA,UAAOC,KAAKJ,GAAL,KAAaI,KAAKJ,GAAL,MAAcG,IAAIH,GAAJ,CAAlC;AACA,GALqB,EAKnB,CALmB,CAAP;AAAA,EAAjB;;AAOA;;;;AAIA,MAAKK,MAAL,GAAc;AAAA,SAAO,CAAC,CAAC,MAAKP,SAAL,CAAeK,GAAf,CAAT;AAAA,EAAd;;AAEA;;;;;AAKA,MAAKG,MAAL,GAAc,gBAAQ;AACpB,QAAKV,WAAL,CAAiBW,IAAjB,CAAsBH,IAAtB;;AAEA,SAAO,MAAKR,WAAZ;AACD,EAJD;;AAMA;;;;;;AAMA,MAAKY,aAAL,GAAqB,UAACJ,IAAD,EAAOK,KAAP,EAAiB;AACrC,QAAKb,WAAL,CAAiBc,MAAjB,CAAwBD,KAAxB,EAA8B,CAA9B,EAAgCL,IAAhC;AACA,SAAO,MAAKR,WAAZ;AACA,EAHD;;AAKA;;;;;;AAMA,MAAKe,MAAL,GAAc,UAACR,GAAD,EAAKC,IAAL,EAAc;AAC1B,MAAIQ,kBAAkB,KAAtB;;AAEA,MAAMC,QAAQ,MAAKjB,WAAL,CAAiBkB,GAAjB,CAAqB,cAAM;AACxC,OAAId,MAAMC,OAAOC,IAAP,CAAYC,GAAZ,EAAiB,CAAjB,CAAV;;AAEA,OAAGY,GAAGf,GAAH,MAAYG,IAAIH,GAAJ,CAAf,EAAwB;AACvBY,sBAAkB,IAAlB;;AAED,WAAQX,OAAOe,MAAP,CAAc,EAAd,EAAiBD,EAAjB,EAAoBX,IAApB,CAAR;AACC,IAJD,MAIK;AACJ,WAAOW,EAAP;AACA;AACD,GAVa,CAAd;;AAaA,MAAG,CAACH,eAAJ,EAAoB;AACnB,SAAKN,MAAL,CAAYF,IAAZ;;AAEA,UAAO,MAAKR,WAAZ;AACA,GAJD,MAIK;AACJ,UAAOiB,KAAP;AACA;AACF,EAvBD;;AAyBA;;;;AAIE,MAAKI,WAAL,GAAmB;AAAA,SAAO,MAAKrB,WAAL,CACzBG,MADyB,CAClB,gBAAQ;AACf,OAAIC,MAAMC,OAAOC,IAAP,CAAYC,GAAZ,EAAiB,CAAjB,CAAV;;AAEA,UAAOC,KAAKJ,GAAL,KAAa,EAAEI,KAAKJ,GAAL,MAAcG,IAAIH,GAAJ,CAAhB,CAApB;AACA,GALyB,CAAP;AAAA,EAAnB;;AAOF;;;;;AAKA,MAAKkB,WAAL,GAAmB,UAACf,GAAD,EAAKC,IAAL;AAAA,SAAc,MAAKR,WAAL,CAAiBkB,GAAjB,CAAqB,cAAM;AAC1D,OAAId,MAAMC,OAAOC,IAAP,CAAYC,GAAZ,EAAiB,CAAjB,CAAV;;AAEA,OAAGY,GAAGf,GAAH,MAAYG,IAAIH,GAAJ,CAAf,EAAwB;AACvB,WAAQC,OAAOe,MAAP,CAAc,EAAd,EAAiBD,EAAjB,EAAoBX,IAApB,CAAR;AACA,IAFD,MAEK;AACJ,WAAOW,EAAP;AACA;AACF,GARgC,CAAd;AAAA,EAAnB;;AAUA,QAAO,IAAP;AACA,C;;AAAA",file:"index.js",sourceRoot:"/Users/computer/Documents/_Projects/myNpmPackages/collo",sourcesContent:["export default function (collection) {\n\tthis._collection = collection || [];\n\n\t/**\n\t * Return the current collection\n\t */\n\tthis.list = () => this._collection;\n\n\t/**\n\t * Return the item where the key/al match\n\t * @param val\n\t */\n\tthis.findWhere = val => this._collection\n\t  .filter(item => {\n\t\t  let key = Object.keys(val)[0];\n\n\t\t  return item[key] && item[key] === val[key];\n\t  })[0];\n\n\t/**\n\t * Used to determine if an item is in the collection\n\t * @param val\n\t */\n\tthis.exists = val => !!this.findWhere(val);\n\n\t/**\n\t * Insert the item at the end of the stack\n\t * @param item\n\t * @returns {*|Array}\n\t */\n\tthis.insert = item => {\n\t  this._collection.push(item);\n\n\t  return this._collection;\n\t};\n\n\t/**\n\t * Splice an item in at an exact position in the collection\n\t * @param item\n\t * @param index\n\t * @returns {*|Array}\n\t */\n\tthis.insertAtIndex = (item, index) => {\n\t\tthis._collection.splice(index,0,item);\n\t\treturn this._collection;\n\t};\n\n\t/**\n\t * If the item exists, perform an dupdate, otherwise insert\n\t * @param val\n\t * @param item\n\t * @returns {*}\n\t */\n\tthis.upsert = (val,item) => {\n\t  let wasInCollection = false;\n\n\t  const upsrt = this._collection.map(it => {\n\t\t  let key = Object.keys(val)[0];\n\n\t\t  if(it[key] === val[key]){\n\t\t\t  wasInCollection = true;\n\n\t\t\t return  Object.assign({},it,item);\n\t\t  }else{\n\t\t\t  return it;\n\t\t  }\n\t  });\n\n\n\t  if(!wasInCollection){\n\t\t  this.insert(item);\n\n\t\t  return this._collection;\n\t  }else{\n\t\t  return upsrt;\n\t  }\n\t};\n\n\t/**\n\t * Remove where the key and value match\n\t * @param val\n\t */\n  \tthis.removeWhere = val => this._collection\n\t  .filter(item => {\n\t\t  let key = Object.keys(val)[0];\n\n\t\t  return item[key] && !(item[key] === val[key]);\n\t  });\n\n\t/**\n\t * Perform a normal update if the key and value match\n\t * @param val\n\t * @param item\n\t */\n\tthis.updateWhere = (val,item) => this._collection.map(it => {\n\t  let key = Object.keys(val)[0];\n\n\t  if(it[key] === val[key]){\n\t\t  return  Object.assign({},it,item);\n\t  }else{\n\t\t  return it;\n\t  }\n\t});\n\n\treturn this;\n};"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_1xfx4nf6ru.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});cov_1xfx4nf6ru.s[1]++;exports.default=function(collection){cov_1xfx4nf6ru.f[0]++;var _this=(cov_1xfx4nf6ru.s[2]++,this);cov_1xfx4nf6ru.s[3]++;this._collection=(cov_1xfx4nf6ru.b[0][0]++,collection)||(cov_1xfx4nf6ru.b[0][1]++,[]);/**
  * Return the current collection
  */cov_1xfx4nf6ru.s[4]++;this.list=function(){cov_1xfx4nf6ru.f[1]++;cov_1xfx4nf6ru.s[5]++;return _this._collection;};/**
  * Return the item where the key/al match
  * @param val
  */cov_1xfx4nf6ru.s[6]++;this.findWhere=function(val){cov_1xfx4nf6ru.f[2]++;cov_1xfx4nf6ru.s[7]++;return _this._collection.filter(function(item){cov_1xfx4nf6ru.f[3]++;var key=(cov_1xfx4nf6ru.s[8]++,Object.keys(val)[0]);cov_1xfx4nf6ru.s[9]++;return(cov_1xfx4nf6ru.b[1][0]++,item[key])&&(cov_1xfx4nf6ru.b[1][1]++,item[key]===val[key]);})[0];};/**
  * Used to determine if an item is in the collection
  * @param val
  */cov_1xfx4nf6ru.s[10]++;this.exists=function(val){cov_1xfx4nf6ru.f[4]++;cov_1xfx4nf6ru.s[11]++;return!!_this.findWhere(val);};/**
  * Insert the item at the end of the stack
  * @param item
  * @returns {*|Array}
  */cov_1xfx4nf6ru.s[12]++;this.insert=function(item){cov_1xfx4nf6ru.f[5]++;cov_1xfx4nf6ru.s[13]++;_this._collection.push(item);cov_1xfx4nf6ru.s[14]++;return _this._collection;};/**
  * Splice an item in at an exact position in the collection
  * @param item
  * @param index
  * @returns {*|Array}
  */cov_1xfx4nf6ru.s[15]++;this.insertAtIndex=function(item,index){cov_1xfx4nf6ru.f[6]++;cov_1xfx4nf6ru.s[16]++;_this._collection.splice(index,0,item);cov_1xfx4nf6ru.s[17]++;return _this._collection;};/**
  * If the item exists, perform an dupdate, otherwise insert
  * @param val
  * @param item
  * @returns {*}
  */cov_1xfx4nf6ru.s[18]++;this.upsert=function(val,item){cov_1xfx4nf6ru.f[7]++;var wasInCollection=(cov_1xfx4nf6ru.s[19]++,false);var upsrt=(cov_1xfx4nf6ru.s[20]++,_this._collection.map(function(it){cov_1xfx4nf6ru.f[8]++;var key=(cov_1xfx4nf6ru.s[21]++,Object.keys(val)[0]);cov_1xfx4nf6ru.s[22]++;if(it[key]===val[key]){cov_1xfx4nf6ru.b[2][0]++;cov_1xfx4nf6ru.s[23]++;wasInCollection=true;cov_1xfx4nf6ru.s[24]++;return Object.assign({},it,item);}else{cov_1xfx4nf6ru.b[2][1]++;cov_1xfx4nf6ru.s[25]++;return it;}}));cov_1xfx4nf6ru.s[26]++;if(!wasInCollection){cov_1xfx4nf6ru.b[3][0]++;cov_1xfx4nf6ru.s[27]++;_this.insert(item);cov_1xfx4nf6ru.s[28]++;return _this._collection;}else{cov_1xfx4nf6ru.b[3][1]++;cov_1xfx4nf6ru.s[29]++;return upsrt;}};/**
  * Remove where the key and value match
  * @param val
  */cov_1xfx4nf6ru.s[30]++;this.removeWhere=function(val){cov_1xfx4nf6ru.f[9]++;cov_1xfx4nf6ru.s[31]++;return _this._collection.filter(function(item){cov_1xfx4nf6ru.f[10]++;var key=(cov_1xfx4nf6ru.s[32]++,Object.keys(val)[0]);cov_1xfx4nf6ru.s[33]++;return(cov_1xfx4nf6ru.b[4][0]++,item[key])&&(cov_1xfx4nf6ru.b[4][1]++,!(item[key]===val[key]));});};/**
  * Perform a normal update if the key and value match
  * @param val
  * @param item
  */cov_1xfx4nf6ru.s[34]++;this.updateWhere=function(val,item){cov_1xfx4nf6ru.f[11]++;cov_1xfx4nf6ru.s[35]++;return _this._collection.map(function(it){cov_1xfx4nf6ru.f[12]++;var key=(cov_1xfx4nf6ru.s[36]++,Object.keys(val)[0]);cov_1xfx4nf6ru.s[37]++;if(it[key]===val[key]){cov_1xfx4nf6ru.b[5][0]++;cov_1xfx4nf6ru.s[38]++;return Object.assign({},it,item);}else{cov_1xfx4nf6ru.b[5][1]++;cov_1xfx4nf6ru.s[39]++;return it;}});};cov_1xfx4nf6ru.s[40]++;return this;};;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("chai");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVubmVyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrL2Jvb3RzdHJhcCA4MzNlZDhkZTZhOGRiY2U0ZTE1YiIsIi9Vc2Vycy9jb21wdXRlci9Eb2N1bWVudHMvX1Byb2plY3RzL215TnBtUGFja2FnZXMvY29sbG8vdGVzdC9zcGVjcy9pbmRleC5zcGVjLmpzIiwiL1VzZXJzL2NvbXB1dGVyL0RvY3VtZW50cy9fUHJvamVjdHMvbXlOcG1QYWNrYWdlcy9jb2xsby90ZXN0IC9eXFwuXFwvc3BlY3MuKiQvIiwiZXh0ZXJuYWwgXCJmc1wiIiwiZXh0ZXJuYWwgXCJmcy1maWxlLXRyZWVcIiIsInRlc3QvcnVubmVyLmpzIiwiL1VzZXJzL2NvbXB1dGVyL0RvY3VtZW50cy9fUHJvamVjdHMvbXlOcG1QYWNrYWdlcy9jb2xsby9zcmMvaW5kZXguanMiLCJleHRlcm5hbCBcImNoYWlcIiJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDgzM2VkOGRlNmE4ZGJjZTRlMTViIiwiaW1wb3J0IHsgZXhwZWN0IH0gZnJvbSAnY2hhaSc7XG5pbXBvcnQgQ29sbG8gZnJvbSAnU3JjL2luZGV4LmpzJztcbi8vaW1wb3J0IENvbGxvIGZyb20gJ0xpYi9pbmRleC5taW4uanMnO1xuXG5jb25zdCBjID0gW1xuICAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgbmFtZTogJ0FkYW0nXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMixcbiAgICAgIG5hbWU6ICdKdWxpYW5hJ1xuICAgIH1cbl07XG5cbmNvbnN0IGNvbGxlY3Rpb24gPSBuZXcgQ29sbG8oYyk7XG5cbi8vIGxpc3RcbmRlc2NyaWJlKCdUaGUgbGlzdCBmbicsICgpID0+IHtcbiAgaXQoJ3Nob3VsZCByZXR1cm4gdGhlIHNhbWUgY29sbGVjdGlvbicsICgpID0+IHtcbiAgICBleHBlY3QoY29sbGVjdGlvbi5saXN0KCkpLnRvLmVxdWFsKGMpO1xuICB9KTtcbn0pO1xuXG4vLyBmaW5kV2hlcmVcbmRlc2NyaWJlKCdUaGUgZmluZFdoZXJlIGZuJywgKCkgPT4ge1xuICBpdCgnc2hvdWxkIHJldHVybiB0aGUgQWRhbSBvYmplY3QnLCAoKSA9PiB7XG4gICAgICBleHBlY3QoY29sbGVjdGlvbi5maW5kV2hlcmUoe2lkOjF9KSlcblx0XHQgIC50b1xuXHRcdCAgLmRlZXBcblx0XHQgIC5lcXVhbCh7XG5cdFx0XHRcdGlkOiAxLFxuXHRcdFx0XHRuYW1lOiAnQWRhbSdcblx0XHRcdCAgfSk7XG4gICAgfSk7XG59KTtcblxuLy8gZXhpc3RzXG5kZXNjcmliZSgnVGhlIGV4aXN0cyBmbicsICgpID0+IHtcblx0aXQoJ3Nob3VsZCByZXR1cm4gdHJ1ZScsICgpID0+IHtcblx0XHRleHBlY3QoY29sbGVjdGlvbi5leGlzdHMoe2lkOjJ9KSlcblx0XHRcdC50b1xuXHRcdFx0LmVxdWFsKHRydWUpO1xuXHR9KTtcbn0pO1xuXG4vLyBpbnNlcnRcbmRlc2NyaWJlKCdUaGUgaW5zZXJ0IGZuJywgKCkgPT4ge1xuXHRpdCgnc2hvdWxkIHJldHVybiB0aGUgY29sbGVjdGlvbiB3aXRoIG9uZSBtb3JlIGl0ZW0gaW4gaXQnLCAoKSA9PiB7XG5cdFx0bGV0IF9jID0gYztcblxuXHRcdF9jLnB1c2goe1xuXHRcdFx0aWQ6IDMsXG5cdFx0XHRuYW1lOiAnUGFraSBQYWtpJ1xuXHRcdH0pO1xuXG5cdFx0ZXhwZWN0KGNvbGxlY3Rpb24uaW5zZXJ0KHtcblx0XHRcdGlkOiAzLFxuXHRcdFx0bmFtZTogJ1Bha2kgUGFraSdcblx0XHR9KSlcblx0XHRcdC50b1xuXHRcdFx0LmRlZXBcblx0XHRcdC5lcXVhbChfYyk7XG5cdH0pO1xufSk7XG5cblxuLy8gaW5zZXJ0QXRJbmRleFxuZGVzY3JpYmUoJ1RoZSBpbnNlcnRBdEluZGV4IGZuJywgKCkgPT4ge1xuXHRpdCgnc2hvdWxkIHJldHVybiB0aGUgc2FtZSBjb2xsZWN0aW9uIGFzIHRoZSB0ZXN0JywgKCkgPT4ge1xuXHRcdGxldCBfYyA9IGM7XG5cdFx0Y29uc3QgaW5kZXggPSAxO1xuXG5cdFx0X2Muc3BsaWNlKGluZGV4LDAse1xuXHRcdFx0aWQ6IDUsXG5cdFx0XHRuYW1lOiAnTWlyb20nXG5cdFx0fSk7XG5cblx0XHRleHBlY3QoY29sbGVjdGlvbi5pbnNlcnRBdEluZGV4KHtcblx0XHRcdGlkOiAzLFxuXHRcdFx0bmFtZTogJ1Bha2kgUGFraSdcblx0XHR9LGluZGV4KSlcblx0XHRcdC50b1xuXHRcdFx0LmRlZXBcblx0XHRcdC5lcXVhbChfYyk7XG5cdH0pO1xufSk7XG5cbi8vIHVwc2VydCBub3QgZm91bmRcbmRlc2NyaWJlKCdUaGUgdXBzZXJ0IFtOTyBmb3VuZCBpdGVtXSBmbicsICgpID0+IHtcblx0aXQoJ3Nob3VsZCByZXR1cm4gdGhlIHNhbWUgY29sbGVjdGlvbiBhcyB0aGUgaW5wdXQgcGx1cyB0aGUgbmV3IGl0ZW0nLCAoKSA9PiB7XG5cdFx0Y29uc3QgY29sbGVjdGlvbiA9IG5ldyBDb2xsbyhbXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiAxLFxuXHRcdFx0XHRuYW1lOiAnQWRhbSdcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiAyLFxuXHRcdFx0XHRuYW1lOiAnSnVsaWFuYSdcblx0XHRcdH1cblx0XHRdKTtcblxuXHRcdGxldCBfYyA9IFtcblx0XHRcdHtcblx0XHRcdFx0aWQ6IDEsXG5cdFx0XHRcdG5hbWU6ICdBZGFtJ1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aWQ6IDIsXG5cdFx0XHRcdG5hbWU6ICdKdWxpYW5hJ1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aWQ6IDMsXG5cdFx0XHRcdG5hbWU6ICdQYWtpIFBha2knXG5cdFx0XHR9XG5cdFx0XTtcblxuXHRcdGV4cGVjdChjb2xsZWN0aW9uLnVwc2VydCh7aWQ6M30se1xuXHRcdFx0aWQ6IDMsXG5cdFx0XHRuYW1lOiAnUGFraSBQYWtpJ1xuXHRcdH0pKVxuXHRcdFx0LnRvXG5cdFx0XHQuZGVlcFxuXHRcdFx0LmVxdWFsKF9jKTtcblx0fSk7XG59KTtcblxuLy8gdXBzZXJ0IGl0ZW0gRk9VTkRcbmRlc2NyaWJlKCdUaGUgdXBzZXJ0IFtJdGVtIEZPVU5EXSBmbicsICgpID0+IHtcblx0aXQoJ3Nob3VsZCByZXR1cm4gdGhlIHNhbWUgY29sbGVjdGlvbiBhcyB0aGUgaW5wdXQgcGx1cyB0aGUgbmV3IGl0ZW0nLCAoKSA9PiB7XG5cdFx0Y29uc3QgY29sbGVjdGlvbiA9IG5ldyBDb2xsbyhbXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiAxLFxuXHRcdFx0XHRuYW1lOiAnQWRhbSdcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiAyLFxuXHRcdFx0XHRuYW1lOiAnSnVsaWFuYSdcblx0XHRcdH1cblx0XHRdKTtcblxuXHRcdGxldCBfYyA9IFtcblx0XHRcdHtcblx0XHRcdFx0aWQ6IDEsXG5cdFx0XHRcdG5hbWU6ICdBZGFtJ1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aWQ6IDIsXG5cdFx0XHRcdG5hbWU6ICdKdWxpYW5hICYgTWlsYSdcblx0XHRcdH1cblx0XHRdO1xuXG5cdFx0ZXhwZWN0KGNvbGxlY3Rpb24udXBzZXJ0KHtpZDoyfSx7XG5cdFx0XHRpZDogMixcblx0XHRcdG5hbWU6ICdKdWxpYW5hICYgTWlsYSdcblx0XHR9KSlcblx0XHRcdC50b1xuXHRcdFx0LmRlZXBcblx0XHRcdC5lcXVhbChfYyk7XG5cdH0pO1xufSk7XG5cbi8vIHVwZGF0ZVdoZXJlXG5kZXNjcmliZSgnVGhlIHVwZGF0ZVdoZXJlIGZuJywgKCkgPT4ge1xuXHRpdCgnc2hvdWxkIHJldHVybiB0aGUgc2FtZSBjb2xsZWN0aW9uIGFzIHRoZSB0ZXN0JywgKCkgPT4ge1xuXHRcdGNvbnN0IGNvbGxlY3Rpb24gPSBuZXcgQ29sbG8oW1xuXHRcdFx0e1xuXHRcdFx0XHRpZDogMSxcblx0XHRcdFx0bmFtZTogJ0FkYW0nXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRpZDogMixcblx0XHRcdFx0bmFtZTogJ0p1bGlhbmEnXG5cdFx0XHR9XG5cdFx0XSk7XG5cblx0XHRsZXQgX2MgPSBbXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiAxLFxuXHRcdFx0XHRuYW1lOiAnQWRhbSdcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiAyLFxuXHRcdFx0XHRuYW1lOiAnSnVsaWFuYSAmIE1pbGEnXG5cdFx0XHR9XG5cdFx0XTtcblxuXHRcdGV4cGVjdChjb2xsZWN0aW9uLnVwZGF0ZVdoZXJlKHtpZDoyfSx7XG5cdFx0XHRpZDogMixcblx0XHRcdG5hbWU6ICdKdWxpYW5hICYgTWlsYSdcblx0XHR9KSlcblx0XHRcdC50b1xuXHRcdFx0LmRlZXBcblx0XHRcdC5lcXVhbChfYyk7XG5cdH0pO1xufSk7XG5cbi8vIHJlbW92ZVdoZXJlXG5kZXNjcmliZSgnVGhlIHJlbW92ZVdoZXJlIGZuJywgKCkgPT4ge1xuXHRpdCgnc2hvdWxkIHJldHVybiB0aGUgc2FtZSBjb2xsZWN0aW9uIGFzIHRoZSB0ZXN0JywgKCkgPT4ge1xuXHRcdGxldCBfYyA9IGM7XG5cdFx0Y29uc3Qga2V5ID0gJ2lkJyxcblx0XHRcdHZhbHVlID0gMztcblxuXHRcdGNvbnN0IGNvbGwgPSBfYy5maWx0ZXIoaXRlbSA9PiBpdGVtW2tleV0gJiYgIShpdGVtW2tleV0gPT09IHZhbHVlKSk7XG5cblx0XHRleHBlY3QoY29sbGVjdGlvbi5yZW1vdmVXaGVyZSh7aWQ6M30pKVxuXHRcdFx0LnRvXG5cdFx0XHQuZGVlcFxuXHRcdFx0LmVxdWFsKGNvbGwpO1xuXHR9KTtcbn0pO1xuXG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3BlY3MvaW5kZXguc3BlYy5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbWFwID0ge1xuXHRcIi4vc3BlY3MvaW5kZXguc3BlY1wiOiAwLFxuXHRcIi4vc3BlY3MvaW5kZXguc3BlYy5qc1wiOiAwXG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpKTtcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG5cdHJldHVybiBpZDtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gMTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuIF5cXC5cXC9zcGVjcy4qJFxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImZzXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnMtZmlsZS10cmVlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZnMtZmlsZS10cmVlXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGZzRmlsZVRyZWUgZnJvbSAnZnMtZmlsZS10cmVlJztcbmltcG9ydCBmcyAgICAgICAgIGZyb20gJ2ZzJztcblxuXG5jb25zdCB0ZXN0Rm9sZGVyICAgPSAndGVzdC9zcGVjcyc7XG5cbmJ1aWxkVHJlZShmc0ZpbGVUcmVlLnN5bmMocHJvY2Vzcy5jd2QoKSArICcvJyArIHRlc3RGb2xkZXIpLCB0ZXN0Rm9sZGVyKTtcblxuZnVuY3Rpb24gYnVpbGRUcmVlKHRyZWUsIHJvb3QpIHtcbiAgICBfYnVpbGRUcmVlKHRyZWUsIHJvb3QsICcvJyk7XG59XG5cbmZ1bmN0aW9uIF9idWlsZFRyZWUodHJlZSwgcm9vdCwgcGF0aCkge1xuICAgIGZvcihsZXQgaXRlbSBpbiB0cmVlKSB7XG4gICAgICAgIGlmKHRyZWUuaGFzT3duUHJvcGVydHkoaXRlbSkpIHtcbiAgICAgICAgICAgIGxldCBpdGVtU3RhdHMgPSBmcy5sc3RhdFN5bmMoJy4vJyArIHJvb3QgKyBwYXRoICsgaXRlbSk7XG5cbiAgICAgICAgICAgIGlmKGl0ZW1TdGF0cy5pc0RpcmVjdG9yeSgpKSB7XG4gICAgICAgICAgICAgICAgZGVzY3JpYmUoaXRlbSArICcvJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBfYnVpbGRUcmVlKHRyZWVbaXRlbV0sIHJvb3QsIHBhdGggKyBpdGVtICsgJy8nKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZihpdGVtU3RhdHMuaXNGaWxlKCkpIHtcbiAgICAgICAgICAgICAgICBkZXNjcmliZShpdGVtLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBmaWxlID0gcmVxdWlyZSgnLi9zcGVjcycgKyBwYXRoICsgaXRlbSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYodHlwZW9mIGZpbGUuZGVmYXVsdCA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGUuZGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHRlc3QvcnVubmVyLmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uKSB7XG5cdHZhciBfdGhpcyA9IHRoaXM7XG5cblx0dGhpcy5fY29sbGVjdGlvbiA9IGNvbGxlY3Rpb24gfHwgW107XG5cblx0LyoqXG4gICogUmV0dXJuIHRoZSBjdXJyZW50IGNvbGxlY3Rpb25cbiAgKi9cblx0dGhpcy5saXN0ID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBfdGhpcy5fY29sbGVjdGlvbjtcblx0fTtcblxuXHQvKipcbiAgKiBSZXR1cm4gdGhlIGl0ZW0gd2hlcmUgdGhlIGtleS9hbCBtYXRjaFxuICAqIEBwYXJhbSB2YWxcbiAgKi9cblx0dGhpcy5maW5kV2hlcmUgPSBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIF90aGlzLl9jb2xsZWN0aW9uLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGtleSA9IE9iamVjdC5rZXlzKHZhbClbMF07XG5cblx0XHRcdHJldHVybiBpdGVtW2tleV0gJiYgaXRlbVtrZXldID09PSB2YWxba2V5XTtcblx0XHR9KVswXTtcblx0fTtcblxuXHQvKipcbiAgKiBVc2VkIHRvIGRldGVybWluZSBpZiBhbiBpdGVtIGlzIGluIHRoZSBjb2xsZWN0aW9uXG4gICogQHBhcmFtIHZhbFxuICAqL1xuXHR0aGlzLmV4aXN0cyA9IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gISFfdGhpcy5maW5kV2hlcmUodmFsKTtcblx0fTtcblxuXHQvKipcbiAgKiBJbnNlcnQgdGhlIGl0ZW0gYXQgdGhlIGVuZCBvZiB0aGUgc3RhY2tcbiAgKiBAcGFyYW0gaXRlbVxuICAqIEByZXR1cm5zIHsqfEFycmF5fVxuICAqL1xuXHR0aGlzLmluc2VydCA9IGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0X3RoaXMuX2NvbGxlY3Rpb24ucHVzaChpdGVtKTtcblxuXHRcdHJldHVybiBfdGhpcy5fY29sbGVjdGlvbjtcblx0fTtcblxuXHQvKipcbiAgKiBTcGxpY2UgYW4gaXRlbSBpbiBhdCBhbiBleGFjdCBwb3NpdGlvbiBpbiB0aGUgY29sbGVjdGlvblxuICAqIEBwYXJhbSBpdGVtXG4gICogQHBhcmFtIGluZGV4XG4gICogQHJldHVybnMgeyp8QXJyYXl9XG4gICovXG5cdHRoaXMuaW5zZXJ0QXRJbmRleCA9IGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuXHRcdF90aGlzLl9jb2xsZWN0aW9uLnNwbGljZShpbmRleCwgMCwgaXRlbSk7XG5cdFx0cmV0dXJuIF90aGlzLl9jb2xsZWN0aW9uO1xuXHR9O1xuXG5cdC8qKlxuICAqIElmIHRoZSBpdGVtIGV4aXN0cywgcGVyZm9ybSBhbiBkdXBkYXRlLCBvdGhlcndpc2UgaW5zZXJ0XG4gICogQHBhcmFtIHZhbFxuICAqIEBwYXJhbSBpdGVtXG4gICogQHJldHVybnMgeyp9XG4gICovXG5cdHRoaXMudXBzZXJ0ID0gZnVuY3Rpb24gKHZhbCwgaXRlbSkge1xuXHRcdHZhciB3YXNJbkNvbGxlY3Rpb24gPSBmYWxzZTtcblxuXHRcdHZhciB1cHNydCA9IF90aGlzLl9jb2xsZWN0aW9uLm1hcChmdW5jdGlvbiAoaXQpIHtcblx0XHRcdHZhciBrZXkgPSBPYmplY3Qua2V5cyh2YWwpWzBdO1xuXG5cdFx0XHRpZiAoaXRba2V5XSA9PT0gdmFsW2tleV0pIHtcblx0XHRcdFx0d2FzSW5Db2xsZWN0aW9uID0gdHJ1ZTtcblxuXHRcdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgaXQsIGl0ZW0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGl0O1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0aWYgKCF3YXNJbkNvbGxlY3Rpb24pIHtcblx0XHRcdF90aGlzLmluc2VydChpdGVtKTtcblxuXHRcdFx0cmV0dXJuIF90aGlzLl9jb2xsZWN0aW9uO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdXBzcnQ7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuICAqIFJlbW92ZSB3aGVyZSB0aGUga2V5IGFuZCB2YWx1ZSBtYXRjaFxuICAqIEBwYXJhbSB2YWxcbiAgKi9cblx0dGhpcy5yZW1vdmVXaGVyZSA9IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gX3RoaXMuX2NvbGxlY3Rpb24uZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIga2V5ID0gT2JqZWN0LmtleXModmFsKVswXTtcblxuXHRcdFx0cmV0dXJuIGl0ZW1ba2V5XSAmJiAhKGl0ZW1ba2V5XSA9PT0gdmFsW2tleV0pO1xuXHRcdH0pO1xuXHR9O1xuXG5cdC8qKlxuICAqIFBlcmZvcm0gYSBub3JtYWwgdXBkYXRlIGlmIHRoZSBrZXkgYW5kIHZhbHVlIG1hdGNoXG4gICogQHBhcmFtIHZhbFxuICAqIEBwYXJhbSBpdGVtXG4gICovXG5cdHRoaXMudXBkYXRlV2hlcmUgPSBmdW5jdGlvbiAodmFsLCBpdGVtKSB7XG5cdFx0cmV0dXJuIF90aGlzLl9jb2xsZWN0aW9uLm1hcChmdW5jdGlvbiAoaXQpIHtcblx0XHRcdHZhciBrZXkgPSBPYmplY3Qua2V5cyh2YWwpWzBdO1xuXG5cdFx0XHRpZiAoaXRba2V5XSA9PT0gdmFsW2tleV0pIHtcblx0XHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGl0LCBpdGVtKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBpdDtcblx0XHRcdH1cblx0XHR9KTtcblx0fTtcblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hhaVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNoYWlcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QTs7Ozs7QUNoRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDck5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNsQkE7Ozs7OztBQ0FBOzs7Ozs7Ozs7QUNBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBakJBO0FBQ0E7QUFBQTtBQUFBO0FBaUJBO0FBQ0E7Ozs7Ozs7QUMvQkE7O0FBTUE7OztBQUFBOzs7QUFBQTs7OztBQUFBOzs7OztBQUFBOzs7OztBQUFBOzs7QUFBQTs7OztBQUFBOzs7Ozs7QUNOQTs7O0EiLCJzb3VyY2VSb290IjoiIn0=