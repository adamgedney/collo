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
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(collection.findWhere({id:1})).to.deep.equal({
        id: 1,
        name: 'Adam'
      });
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
		})).to.deep.equal(_c);
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
		},index)).to.deep.equal(_c);
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
		})).to.deep.equal(_c);
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
		})).to.deep.equal(_c);
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
		})).to.deep.equal(_c);
	});
});

// removeWhere
describe('The removeWhere fn', () => {
	it('should return the same collection as the test', () => {
		let _c = c;
		const key = 'id',
			value = 3;

		const collo = _c.filter(item => item[key] && !(item[key] === value));

		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(collection.removeWhere({id:3})).to.deep.equal(collo);
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
var cov_1xfx4nf6ru=function(){var path="/Users/computer/Documents/_Projects/myNpmPackages/collo/src/index.js",hash="51a7bbb14878811f4109a4e846f39420750d6a21",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/computer/Documents/_Projects/myNpmPackages/collo/src/index.js",statementMap:{"0":{start:{line:3,column:0},end:{line:109,column:2}},"1":{start:{line:4,column:13},end:{line:4,column:17}},"2":{start:{line:6,column:1},end:{line:6,column:37}},"3":{start:{line:11,column:1},end:{line:13,column:3}},"4":{start:{line:12,column:2},end:{line:12,column:27}},"5":{start:{line:19,column:1},end:{line:25,column:3}},"6":{start:{line:20,column:2},end:{line:24,column:8}},"7":{start:{line:21,column:13},end:{line:21,column:32}},"8":{start:{line:23,column:3},end:{line:23,column:46}},"9":{start:{line:32,column:1},end:{line:36,column:3}},"10":{start:{line:33,column:2},end:{line:33,column:31}},"11":{start:{line:35,column:2},end:{line:35,column:27}},"12":{start:{line:44,column:1},end:{line:47,column:3}},"13":{start:{line:45,column:2},end:{line:45,column:43}},"14":{start:{line:46,column:2},end:{line:46,column:27}},"15":{start:{line:55,column:1},end:{line:77,column:3}},"16":{start:{line:56,column:24},end:{line:56,column:29}},"17":{start:{line:58,column:14},end:{line:68,column:4}},"18":{start:{line:59,column:13},end:{line:59,column:32}},"19":{start:{line:61,column:3},end:{line:67,column:4}},"20":{start:{line:62,column:4},end:{line:62,column:27}},"21":{start:{line:64,column:4},end:{line:64,column:39}},"22":{start:{line:66,column:4},end:{line:66,column:14}},"23":{start:{line:70,column:2},end:{line:76,column:3}},"24":{start:{line:71,column:3},end:{line:71,column:22}},"25":{start:{line:73,column:3},end:{line:73,column:28}},"26":{start:{line:75,column:3},end:{line:75,column:16}},"27":{start:{line:83,column:1},end:{line:89,column:3}},"28":{start:{line:84,column:2},end:{line:88,column:5}},"29":{start:{line:85,column:13},end:{line:85,column:32}},"30":{start:{line:87,column:3},end:{line:87,column:49}},"31":{start:{line:96,column:1},end:{line:106,column:3}},"32":{start:{line:97,column:2},end:{line:105,column:5}},"33":{start:{line:98,column:13},end:{line:98,column:32}},"34":{start:{line:100,column:3},end:{line:104,column:4}},"35":{start:{line:101,column:4},end:{line:101,column:39}},"36":{start:{line:103,column:4},end:{line:103,column:14}},"37":{start:{line:108,column:1},end:{line:108,column:13}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:3,column:17},end:{line:3,column:18}},loc:{start:{line:3,column:39},end:{line:109,column:1}},line:3},"1":{name:"(anonymous_1)",decl:{start:{line:11,column:13},end:{line:11,column:14}},loc:{start:{line:11,column:25},end:{line:13,column:2}},line:11},"2":{name:"(anonymous_2)",decl:{start:{line:19,column:18},end:{line:19,column:19}},loc:{start:{line:19,column:33},end:{line:25,column:2}},line:19},"3":{name:"(anonymous_3)",decl:{start:{line:20,column:34},end:{line:20,column:35}},loc:{start:{line:20,column:50},end:{line:24,column:3}},line:20},"4":{name:"(anonymous_4)",decl:{start:{line:32,column:15},end:{line:32,column:16}},loc:{start:{line:32,column:31},end:{line:36,column:2}},line:32},"5":{name:"(anonymous_5)",decl:{start:{line:44,column:22},end:{line:44,column:23}},loc:{start:{line:44,column:45},end:{line:47,column:2}},line:44},"6":{name:"(anonymous_6)",decl:{start:{line:55,column:15},end:{line:55,column:16}},loc:{start:{line:55,column:36},end:{line:77,column:2}},line:55},"7":{name:"(anonymous_7)",decl:{start:{line:58,column:36},end:{line:58,column:37}},loc:{start:{line:58,column:50},end:{line:68,column:3}},line:58},"8":{name:"(anonymous_8)",decl:{start:{line:83,column:20},end:{line:83,column:21}},loc:{start:{line:83,column:35},end:{line:89,column:2}},line:83},"9":{name:"(anonymous_9)",decl:{start:{line:84,column:34},end:{line:84,column:35}},loc:{start:{line:84,column:50},end:{line:88,column:3}},line:84},"10":{name:"(anonymous_10)",decl:{start:{line:96,column:20},end:{line:96,column:21}},loc:{start:{line:96,column:41},end:{line:106,column:2}},line:96},"11":{name:"(anonymous_11)",decl:{start:{line:97,column:31},end:{line:97,column:32}},loc:{start:{line:97,column:45},end:{line:105,column:3}},line:97}},branchMap:{"0":{loc:{start:{line:6,column:20},end:{line:6,column:36}},type:"binary-expr",locations:[{start:{line:6,column:20},end:{line:6,column:30}},{start:{line:6,column:34},end:{line:6,column:36}}],line:6},"1":{loc:{start:{line:23,column:10},end:{line:23,column:45}},type:"binary-expr",locations:[{start:{line:23,column:10},end:{line:23,column:19}},{start:{line:23,column:23},end:{line:23,column:45}}],line:23},"2":{loc:{start:{line:61,column:3},end:{line:67,column:4}},type:"if",locations:[{start:{line:61,column:3},end:{line:67,column:4}},{start:{line:61,column:3},end:{line:67,column:4}}],line:61},"3":{loc:{start:{line:70,column:2},end:{line:76,column:3}},type:"if",locations:[{start:{line:70,column:2},end:{line:76,column:3}},{start:{line:70,column:2},end:{line:76,column:3}}],line:70},"4":{loc:{start:{line:87,column:10},end:{line:87,column:48}},type:"binary-expr",locations:[{start:{line:87,column:10},end:{line:87,column:19}},{start:{line:87,column:23},end:{line:87,column:48}}],line:87},"5":{loc:{start:{line:100,column:3},end:{line:104,column:4}},type:"if",locations:[{start:{line:100,column:3},end:{line:104,column:4}},{start:{line:100,column:3},end:{line:104,column:4}}],line:100}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0},b:{"0":[0,0],"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0]},inputSourceMap:{version:3,sources:["src/index.js"],names:["module","exports","collection","_collection","list","findWhere","filter","key","Object","keys","val","item","insert","push","insertAtIndex","index","splice","upsert","wasInCollection","upsrt","map","it","assign","removeWhere","updateWhere"],mappings:";;AAAAA,OAAOC,OAAP,GAAkB,UAAUC,UAAV,EAAsB;AAAA;;AACvC,MAAKC,WAAL,GAAmBD,cAAc,EAAjC;;AAEA;;;AAGA,MAAKE,IAAL,GAAY;AAAA,SAAM,MAAKD,WAAX;AAAA,EAAZ;;AAEA;;;;AAIA,MAAKE,SAAL,GAAiB;AAAA,SAAO,MAAKF,WAAL,CACrBG,MADqB,CACd,gBAAQ;AACf,OAAIC,MAAMC,OAAOC,IAAP,CAAYC,GAAZ,EAAiB,CAAjB,CAAV;;AAEA,UAAOC,KAAKJ,GAAL,KAAaI,KAAKJ,GAAL,MAAcG,IAAIH,GAAJ,CAAlC;AACA,GALqB,EAKnB,CALmB,CAAP;AAAA,EAAjB;;AAOA;;;;;AAKA,MAAKK,MAAL,GAAc,gBAAQ;AACpB,QAAKT,WAAL,CAAiBU,IAAjB,CAAsBF,IAAtB;;AAEA,SAAO,MAAKR,WAAZ;AACD,EAJD;;AAMA;;;;;;AAMA,MAAKW,aAAL,GAAqB,UAACH,IAAD,EAAOI,KAAP,EAAiB;AACrC,QAAKZ,WAAL,CAAiBa,MAAjB,CAAwBD,KAAxB,EAA8B,CAA9B,EAAgCJ,IAAhC;AACA,SAAO,MAAKR,WAAZ;AACA,EAHD;;AAKA;;;;;;AAMA,MAAKc,MAAL,GAAc,UAACP,GAAD,EAAKC,IAAL,EAAc;AAC1B,MAAIO,kBAAkB,KAAtB;;AAEA,MAAMC,QAAQ,MAAKhB,WAAL,CAAiBiB,GAAjB,CAAqB,cAAM;AACxC,OAAIb,MAAMC,OAAOC,IAAP,CAAYC,GAAZ,EAAiB,CAAjB,CAAV;;AAEA,OAAGW,GAAGd,GAAH,MAAYG,IAAIH,GAAJ,CAAf,EAAwB;AACvBW,sBAAkB,IAAlB;;AAED,WAAQV,OAAOc,MAAP,CAAc,EAAd,EAAiBD,EAAjB,EAAoBV,IAApB,CAAR;AACC,IAJD,MAIK;AACJ,WAAOU,EAAP;AACA;AACD,GAVa,CAAd;;AAaA,MAAG,CAACH,eAAJ,EAAoB;AACnB,SAAKN,MAAL,CAAYD,IAAZ;;AAEA,UAAO,MAAKR,WAAZ;AACA,GAJD,MAIK;AACJ,UAAOgB,KAAP;AACA;AACF,EAvBD;;AAyBA;;;;AAIE,MAAKI,WAAL,GAAmB;AAAA,SAAO,MAAKpB,WAAL,CACzBG,MADyB,CAClB,gBAAQ;AACf,OAAIC,MAAMC,OAAOC,IAAP,CAAYC,GAAZ,EAAiB,CAAjB,CAAV;;AAEA,UAAOC,KAAKJ,GAAL,KAAa,EAAEI,KAAKJ,GAAL,MAAcG,IAAIH,GAAJ,CAAhB,CAApB;AACA,GALyB,CAAP;AAAA,EAAnB;;AAOF;;;;;AAKA,MAAKiB,WAAL,GAAmB,UAACd,GAAD,EAAKC,IAAL;AAAA,SAAc,MAAKR,WAAL,CAAiBiB,GAAjB,CAAqB,cAAM;AAC1D,OAAIb,MAAMC,OAAOC,IAAP,CAAYC,GAAZ,EAAiB,CAAjB,CAAV;;AAEA,OAAGW,GAAGd,GAAH,MAAYG,IAAIH,GAAJ,CAAf,EAAwB;AACvB,WAAQC,OAAOc,MAAP,CAAc,EAAd,EAAiBD,EAAjB,EAAoBV,IAApB,CAAR;AACA,IAFD,MAEK;AACJ,WAAOU,EAAP;AACA;AACF,GARgC,CAAd;AAAA,EAAnB;;AAUA,QAAO,IAAP;AACA,CAnGD",file:"index.js",sourceRoot:"/Users/computer/Documents/_Projects/myNpmPackages/collo",sourcesContent:["module.exports =  function (collection) {\n\tthis._collection = collection || [];\n\n\t/**\n\t * Return the current collection\n\t */\n\tthis.list = () => this._collection;\n\n\t/**\n\t * Return the item where the key/al match\n\t * @param val\n\t */\n\tthis.findWhere = val => this._collection\n\t  .filter(item => {\n\t\t  let key = Object.keys(val)[0];\n\n\t\t  return item[key] && item[key] === val[key];\n\t  })[0];\n\n\t/**\n\t * Insert the item at the end of the stack\n\t * @param item\n\t * @returns {*|Array}\n\t */\n\tthis.insert = item => {\n\t  this._collection.push(item);\n\n\t  return this._collection;\n\t};\n\n\t/**\n\t * Splice an item in at an exact position in the collection\n\t * @param item\n\t * @param index\n\t * @returns {*|Array}\n\t */\n\tthis.insertAtIndex = (item, index) => {\n\t\tthis._collection.splice(index,0,item);\n\t\treturn this._collection;\n\t};\n\n\t/**\n\t * If the item exists, perform an dupdate, otherwise insert\n\t * @param val\n\t * @param item\n\t * @returns {*}\n\t */\n\tthis.upsert = (val,item) => {\n\t  let wasInCollection = false;\n\n\t  const upsrt = this._collection.map(it => {\n\t\t  let key = Object.keys(val)[0];\n\n\t\t  if(it[key] === val[key]){\n\t\t\t  wasInCollection = true;\n\n\t\t\t return  Object.assign({},it,item);\n\t\t  }else{\n\t\t\t  return it;\n\t\t  }\n\t  });\n\n\n\t  if(!wasInCollection){\n\t\t  this.insert(item);\n\n\t\t  return this._collection;\n\t  }else{\n\t\t  return upsrt;\n\t  }\n\t};\n\n\t/**\n\t * Remove where the key and value match\n\t * @param val\n\t */\n  \tthis.removeWhere = val => this._collection\n\t  .filter(item => {\n\t\t  let key = Object.keys(val)[0];\n\n\t\t  return item[key] && !(item[key] === val[key]);\n\t  });\n\n\t/**\n\t * Perform a normal update if the key and value match\n\t * @param val\n\t * @param item\n\t */\n\tthis.updateWhere = (val,item) => this._collection.map(it => {\n\t  let key = Object.keys(val)[0];\n\n\t  if(it[key] === val[key]){\n\t\t  return  Object.assign({},it,item);\n\t  }else{\n\t\t  return it;\n\t  }\n\t});\n\n\treturn this;\n};"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_1xfx4nf6ru.s[0]++;module.exports=function(collection){cov_1xfx4nf6ru.f[0]++;var _this=(cov_1xfx4nf6ru.s[1]++,this);cov_1xfx4nf6ru.s[2]++;this._collection=(cov_1xfx4nf6ru.b[0][0]++,collection)||(cov_1xfx4nf6ru.b[0][1]++,[]);/**
  * Return the current collection
  */cov_1xfx4nf6ru.s[3]++;this.list=function(){cov_1xfx4nf6ru.f[1]++;cov_1xfx4nf6ru.s[4]++;return _this._collection;};/**
  * Return the item where the key/al match
  * @param val
  */cov_1xfx4nf6ru.s[5]++;this.findWhere=function(val){cov_1xfx4nf6ru.f[2]++;cov_1xfx4nf6ru.s[6]++;return _this._collection.filter(function(item){cov_1xfx4nf6ru.f[3]++;var key=(cov_1xfx4nf6ru.s[7]++,Object.keys(val)[0]);cov_1xfx4nf6ru.s[8]++;return(cov_1xfx4nf6ru.b[1][0]++,item[key])&&(cov_1xfx4nf6ru.b[1][1]++,item[key]===val[key]);})[0];};/**
  * Insert the item at the end of the stack
  * @param item
  * @returns {*|Array}
  */cov_1xfx4nf6ru.s[9]++;this.insert=function(item){cov_1xfx4nf6ru.f[4]++;cov_1xfx4nf6ru.s[10]++;_this._collection.push(item);cov_1xfx4nf6ru.s[11]++;return _this._collection;};/**
  * Splice an item in at an exact position in the collection
  * @param item
  * @param index
  * @returns {*|Array}
  */cov_1xfx4nf6ru.s[12]++;this.insertAtIndex=function(item,index){cov_1xfx4nf6ru.f[5]++;cov_1xfx4nf6ru.s[13]++;_this._collection.splice(index,0,item);cov_1xfx4nf6ru.s[14]++;return _this._collection;};/**
  * If the item exists, perform an dupdate, otherwise insert
  * @param val
  * @param item
  * @returns {*}
  */cov_1xfx4nf6ru.s[15]++;this.upsert=function(val,item){cov_1xfx4nf6ru.f[6]++;var wasInCollection=(cov_1xfx4nf6ru.s[16]++,false);var upsrt=(cov_1xfx4nf6ru.s[17]++,_this._collection.map(function(it){cov_1xfx4nf6ru.f[7]++;var key=(cov_1xfx4nf6ru.s[18]++,Object.keys(val)[0]);cov_1xfx4nf6ru.s[19]++;if(it[key]===val[key]){cov_1xfx4nf6ru.b[2][0]++;cov_1xfx4nf6ru.s[20]++;wasInCollection=true;cov_1xfx4nf6ru.s[21]++;return Object.assign({},it,item);}else{cov_1xfx4nf6ru.b[2][1]++;cov_1xfx4nf6ru.s[22]++;return it;}}));cov_1xfx4nf6ru.s[23]++;if(!wasInCollection){cov_1xfx4nf6ru.b[3][0]++;cov_1xfx4nf6ru.s[24]++;_this.insert(item);cov_1xfx4nf6ru.s[25]++;return _this._collection;}else{cov_1xfx4nf6ru.b[3][1]++;cov_1xfx4nf6ru.s[26]++;return upsrt;}};/**
  * Remove where the key and value match
  * @param val
  */cov_1xfx4nf6ru.s[27]++;this.removeWhere=function(val){cov_1xfx4nf6ru.f[8]++;cov_1xfx4nf6ru.s[28]++;return _this._collection.filter(function(item){cov_1xfx4nf6ru.f[9]++;var key=(cov_1xfx4nf6ru.s[29]++,Object.keys(val)[0]);cov_1xfx4nf6ru.s[30]++;return(cov_1xfx4nf6ru.b[4][0]++,item[key])&&(cov_1xfx4nf6ru.b[4][1]++,!(item[key]===val[key]));});};/**
  * Perform a normal update if the key and value match
  * @param val
  * @param item
  */cov_1xfx4nf6ru.s[31]++;this.updateWhere=function(val,item){cov_1xfx4nf6ru.f[10]++;cov_1xfx4nf6ru.s[32]++;return _this._collection.map(function(it){cov_1xfx4nf6ru.f[11]++;var key=(cov_1xfx4nf6ru.s[33]++,Object.keys(val)[0]);cov_1xfx4nf6ru.s[34]++;if(it[key]===val[key]){cov_1xfx4nf6ru.b[5][0]++;cov_1xfx4nf6ru.s[35]++;return Object.assign({},it,item);}else{cov_1xfx4nf6ru.b[5][1]++;cov_1xfx4nf6ru.s[36]++;return it;}});};cov_1xfx4nf6ru.s[37]++;return this;};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("chai");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVubmVyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrL2Jvb3RzdHJhcCBiNDQ0NGFlNWM3YWQyNjAzY2IyZCIsIi9Vc2Vycy9jb21wdXRlci9Eb2N1bWVudHMvX1Byb2plY3RzL215TnBtUGFja2FnZXMvY29sbG8vdGVzdC9zcGVjcy9pbmRleC5zcGVjLmpzIiwiL1VzZXJzL2NvbXB1dGVyL0RvY3VtZW50cy9fUHJvamVjdHMvbXlOcG1QYWNrYWdlcy9jb2xsby90ZXN0IC9eXFwuXFwvc3BlY3MuKiQvIiwiZXh0ZXJuYWwgXCJmc1wiIiwiZXh0ZXJuYWwgXCJmcy1maWxlLXRyZWVcIiIsInRlc3QvcnVubmVyLmpzIiwiL1VzZXJzL2NvbXB1dGVyL0RvY3VtZW50cy9fUHJvamVjdHMvbXlOcG1QYWNrYWdlcy9jb2xsby9zcmMvaW5kZXguanMiLCJleHRlcm5hbCBcImNoYWlcIiJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGI0NDQ0YWU1YzdhZDI2MDNjYjJkIiwiaW1wb3J0IHsgZXhwZWN0IH0gZnJvbSAnY2hhaSc7XG5pbXBvcnQgQ29sbG8gZnJvbSAnU3JjL2luZGV4LmpzJztcbi8vaW1wb3J0IENvbGxvIGZyb20gJ0xpYi9pbmRleC5taW4uanMnO1xuXG5jb25zdCBjID0gW1xuICAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgbmFtZTogJ0FkYW0nXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMixcbiAgICAgIG5hbWU6ICdKdWxpYW5hJ1xuICAgIH1cbl07XG5cbmNvbnN0IGNvbGxlY3Rpb24gPSBuZXcgQ29sbG8oYyk7XG5cbi8vIGxpc3RcbmRlc2NyaWJlKCdUaGUgbGlzdCBmbicsICgpID0+IHtcbiAgaXQoJ3Nob3VsZCByZXR1cm4gdGhlIHNhbWUgY29sbGVjdGlvbicsICgpID0+IHtcbiAgICBleHBlY3QoY29sbGVjdGlvbi5saXN0KCkpLnRvLmVxdWFsKGMpO1xuICB9KTtcbn0pO1xuXG4vLyBmaW5kV2hlcmVcbmRlc2NyaWJlKCdUaGUgZmluZFdoZXJlIGZuJywgKCkgPT4ge1xuICBpdCgnc2hvdWxkIHJldHVybiB0aGUgQWRhbSBvYmplY3QnLCAoKSA9PiB7XG4gICAgICBleHBlY3QoY29sbGVjdGlvbi5maW5kV2hlcmUoe2lkOjF9KSkudG8uZGVlcC5lcXVhbCh7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuYW1lOiAnQWRhbSdcbiAgICAgIH0pO1xuICAgIH0pO1xufSk7XG5cbi8vIGluc2VydFxuZGVzY3JpYmUoJ1RoZSBpbnNlcnQgZm4nLCAoKSA9PiB7XG5cdGl0KCdzaG91bGQgcmV0dXJuIHRoZSBjb2xsZWN0aW9uIHdpdGggb25lIG1vcmUgaXRlbSBpbiBpdCcsICgpID0+IHtcblx0XHRsZXQgX2MgPSBjO1xuXG5cdFx0X2MucHVzaCh7XG5cdFx0XHRpZDogMyxcblx0XHRcdG5hbWU6ICdQYWtpIFBha2knXG5cdFx0fSk7XG5cblx0XHRleHBlY3QoY29sbGVjdGlvbi5pbnNlcnQoe1xuXHRcdFx0aWQ6IDMsXG5cdFx0XHRuYW1lOiAnUGFraSBQYWtpJ1xuXHRcdH0pKS50by5kZWVwLmVxdWFsKF9jKTtcblx0fSk7XG59KTtcblxuXG4vLyBpbnNlcnRBdEluZGV4XG5kZXNjcmliZSgnVGhlIGluc2VydEF0SW5kZXggZm4nLCAoKSA9PiB7XG5cdGl0KCdzaG91bGQgcmV0dXJuIHRoZSBzYW1lIGNvbGxlY3Rpb24gYXMgdGhlIHRlc3QnLCAoKSA9PiB7XG5cdFx0bGV0IF9jID0gYztcblx0XHRjb25zdCBpbmRleCA9IDE7XG5cblx0XHRfYy5zcGxpY2UoaW5kZXgsMCx7XG5cdFx0XHRpZDogNSxcblx0XHRcdG5hbWU6ICdNaXJvbSdcblx0XHR9KTtcblxuXHRcdGV4cGVjdChjb2xsZWN0aW9uLmluc2VydEF0SW5kZXgoe1xuXHRcdFx0aWQ6IDMsXG5cdFx0XHRuYW1lOiAnUGFraSBQYWtpJ1xuXHRcdH0saW5kZXgpKS50by5kZWVwLmVxdWFsKF9jKTtcblx0fSk7XG59KTtcblxuLy8gdXBzZXJ0IG5vdCBmb3VuZFxuZGVzY3JpYmUoJ1RoZSB1cHNlcnQgW05PIGZvdW5kIGl0ZW1dIGZuJywgKCkgPT4ge1xuXHRpdCgnc2hvdWxkIHJldHVybiB0aGUgc2FtZSBjb2xsZWN0aW9uIGFzIHRoZSBpbnB1dCBwbHVzIHRoZSBuZXcgaXRlbScsICgpID0+IHtcblx0XHRjb25zdCBjb2xsZWN0aW9uID0gbmV3IENvbGxvKFtcblx0XHRcdHtcblx0XHRcdFx0aWQ6IDEsXG5cdFx0XHRcdG5hbWU6ICdBZGFtJ1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aWQ6IDIsXG5cdFx0XHRcdG5hbWU6ICdKdWxpYW5hJ1xuXHRcdFx0fVxuXHRcdF0pO1xuXG5cdFx0bGV0IF9jID0gW1xuXHRcdFx0e1xuXHRcdFx0XHRpZDogMSxcblx0XHRcdFx0bmFtZTogJ0FkYW0nXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRpZDogMixcblx0XHRcdFx0bmFtZTogJ0p1bGlhbmEnXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRpZDogMyxcblx0XHRcdFx0bmFtZTogJ1Bha2kgUGFraSdcblx0XHRcdH1cblx0XHRdO1xuXG5cdFx0ZXhwZWN0KGNvbGxlY3Rpb24udXBzZXJ0KHtpZDozfSx7XG5cdFx0XHRpZDogMyxcblx0XHRcdG5hbWU6ICdQYWtpIFBha2knXG5cdFx0fSkpLnRvLmRlZXAuZXF1YWwoX2MpO1xuXHR9KTtcbn0pO1xuXG4vLyB1cHNlcnQgaXRlbSBGT1VORFxuZGVzY3JpYmUoJ1RoZSB1cHNlcnQgW0l0ZW0gRk9VTkRdIGZuJywgKCkgPT4ge1xuXHRpdCgnc2hvdWxkIHJldHVybiB0aGUgc2FtZSBjb2xsZWN0aW9uIGFzIHRoZSBpbnB1dCBwbHVzIHRoZSBuZXcgaXRlbScsICgpID0+IHtcblx0XHRjb25zdCBjb2xsZWN0aW9uID0gbmV3IENvbGxvKFtcblx0XHRcdHtcblx0XHRcdFx0aWQ6IDEsXG5cdFx0XHRcdG5hbWU6ICdBZGFtJ1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aWQ6IDIsXG5cdFx0XHRcdG5hbWU6ICdKdWxpYW5hJ1xuXHRcdFx0fVxuXHRcdF0pO1xuXG5cdFx0bGV0IF9jID0gW1xuXHRcdFx0e1xuXHRcdFx0XHRpZDogMSxcblx0XHRcdFx0bmFtZTogJ0FkYW0nXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRpZDogMixcblx0XHRcdFx0bmFtZTogJ0p1bGlhbmEgJiBNaWxhJ1xuXHRcdFx0fVxuXHRcdF07XG5cblx0XHRleHBlY3QoY29sbGVjdGlvbi51cHNlcnQoe2lkOjJ9LHtcblx0XHRcdGlkOiAyLFxuXHRcdFx0bmFtZTogJ0p1bGlhbmEgJiBNaWxhJ1xuXHRcdH0pKS50by5kZWVwLmVxdWFsKF9jKTtcblx0fSk7XG59KTtcblxuLy8gdXBkYXRlV2hlcmVcbmRlc2NyaWJlKCdUaGUgdXBkYXRlV2hlcmUgZm4nLCAoKSA9PiB7XG5cdGl0KCdzaG91bGQgcmV0dXJuIHRoZSBzYW1lIGNvbGxlY3Rpb24gYXMgdGhlIHRlc3QnLCAoKSA9PiB7XG5cdFx0Y29uc3QgY29sbGVjdGlvbiA9IG5ldyBDb2xsbyhbXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiAxLFxuXHRcdFx0XHRuYW1lOiAnQWRhbSdcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiAyLFxuXHRcdFx0XHRuYW1lOiAnSnVsaWFuYSdcblx0XHRcdH1cblx0XHRdKTtcblxuXHRcdGxldCBfYyA9IFtcblx0XHRcdHtcblx0XHRcdFx0aWQ6IDEsXG5cdFx0XHRcdG5hbWU6ICdBZGFtJ1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aWQ6IDIsXG5cdFx0XHRcdG5hbWU6ICdKdWxpYW5hICYgTWlsYSdcblx0XHRcdH1cblx0XHRdO1xuXG5cdFx0ZXhwZWN0KGNvbGxlY3Rpb24udXBkYXRlV2hlcmUoe2lkOjJ9LHtcblx0XHRcdGlkOiAyLFxuXHRcdFx0bmFtZTogJ0p1bGlhbmEgJiBNaWxhJ1xuXHRcdH0pKS50by5kZWVwLmVxdWFsKF9jKTtcblx0fSk7XG59KTtcblxuLy8gcmVtb3ZlV2hlcmVcbmRlc2NyaWJlKCdUaGUgcmVtb3ZlV2hlcmUgZm4nLCAoKSA9PiB7XG5cdGl0KCdzaG91bGQgcmV0dXJuIHRoZSBzYW1lIGNvbGxlY3Rpb24gYXMgdGhlIHRlc3QnLCAoKSA9PiB7XG5cdFx0bGV0IF9jID0gYztcblx0XHRjb25zdCBrZXkgPSAnaWQnLFxuXHRcdFx0dmFsdWUgPSAzO1xuXG5cdFx0Y29uc3QgY29sbG8gPSBfYy5maWx0ZXIoaXRlbSA9PiBpdGVtW2tleV0gJiYgIShpdGVtW2tleV0gPT09IHZhbHVlKSk7XG5cblx0XHRleHBlY3QoY29sbGVjdGlvbi5yZW1vdmVXaGVyZSh7aWQ6M30pKS50by5kZWVwLmVxdWFsKGNvbGxvKTtcblx0fSk7XG59KTtcblxuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NwZWNzL2luZGV4LnNwZWMuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG1hcCA9IHtcblx0XCIuL3NwZWNzL2luZGV4LnNwZWNcIjogMCxcblx0XCIuL3NwZWNzL2luZGV4LnNwZWMuanNcIjogMFxufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpO1xuXHRyZXR1cm4gaWQ7XG59O1xud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDE7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLiBeXFwuXFwvc3BlY3MuKiRcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJmc1wiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzLWZpbGUtdHJlZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImZzLWZpbGUtdHJlZVwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBmc0ZpbGVUcmVlIGZyb20gJ2ZzLWZpbGUtdHJlZSc7XG5pbXBvcnQgZnMgICAgICAgICBmcm9tICdmcyc7XG5cblxuY29uc3QgdGVzdEZvbGRlciAgID0gJ3Rlc3Qvc3BlY3MnO1xuXG5idWlsZFRyZWUoZnNGaWxlVHJlZS5zeW5jKHByb2Nlc3MuY3dkKCkgKyAnLycgKyB0ZXN0Rm9sZGVyKSwgdGVzdEZvbGRlcik7XG5cbmZ1bmN0aW9uIGJ1aWxkVHJlZSh0cmVlLCByb290KSB7XG4gICAgX2J1aWxkVHJlZSh0cmVlLCByb290LCAnLycpO1xufVxuXG5mdW5jdGlvbiBfYnVpbGRUcmVlKHRyZWUsIHJvb3QsIHBhdGgpIHtcbiAgICBmb3IobGV0IGl0ZW0gaW4gdHJlZSkge1xuICAgICAgICBpZih0cmVlLmhhc093blByb3BlcnR5KGl0ZW0pKSB7XG4gICAgICAgICAgICBsZXQgaXRlbVN0YXRzID0gZnMubHN0YXRTeW5jKCcuLycgKyByb290ICsgcGF0aCArIGl0ZW0pO1xuXG4gICAgICAgICAgICBpZihpdGVtU3RhdHMuaXNEaXJlY3RvcnkoKSkge1xuICAgICAgICAgICAgICAgIGRlc2NyaWJlKGl0ZW0gKyAnLycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgX2J1aWxkVHJlZSh0cmVlW2l0ZW1dLCByb290LCBwYXRoICsgaXRlbSArICcvJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYoaXRlbVN0YXRzLmlzRmlsZSgpKSB7XG4gICAgICAgICAgICAgICAgZGVzY3JpYmUoaXRlbSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZmlsZSA9IHJlcXVpcmUoJy4vc3BlY3MnICsgcGF0aCArIGl0ZW0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBmaWxlLmRlZmF1bHQgPT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlLmRlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB0ZXN0L3J1bm5lci5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uKSB7XG5cdHZhciBfdGhpcyA9IHRoaXM7XG5cblx0dGhpcy5fY29sbGVjdGlvbiA9IGNvbGxlY3Rpb24gfHwgW107XG5cblx0LyoqXG4gICogUmV0dXJuIHRoZSBjdXJyZW50IGNvbGxlY3Rpb25cbiAgKi9cblx0dGhpcy5saXN0ID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBfdGhpcy5fY29sbGVjdGlvbjtcblx0fTtcblxuXHQvKipcbiAgKiBSZXR1cm4gdGhlIGl0ZW0gd2hlcmUgdGhlIGtleS9hbCBtYXRjaFxuICAqIEBwYXJhbSB2YWxcbiAgKi9cblx0dGhpcy5maW5kV2hlcmUgPSBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIF90aGlzLl9jb2xsZWN0aW9uLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGtleSA9IE9iamVjdC5rZXlzKHZhbClbMF07XG5cblx0XHRcdHJldHVybiBpdGVtW2tleV0gJiYgaXRlbVtrZXldID09PSB2YWxba2V5XTtcblx0XHR9KVswXTtcblx0fTtcblxuXHQvKipcbiAgKiBJbnNlcnQgdGhlIGl0ZW0gYXQgdGhlIGVuZCBvZiB0aGUgc3RhY2tcbiAgKiBAcGFyYW0gaXRlbVxuICAqIEByZXR1cm5zIHsqfEFycmF5fVxuICAqL1xuXHR0aGlzLmluc2VydCA9IGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0X3RoaXMuX2NvbGxlY3Rpb24ucHVzaChpdGVtKTtcblxuXHRcdHJldHVybiBfdGhpcy5fY29sbGVjdGlvbjtcblx0fTtcblxuXHQvKipcbiAgKiBTcGxpY2UgYW4gaXRlbSBpbiBhdCBhbiBleGFjdCBwb3NpdGlvbiBpbiB0aGUgY29sbGVjdGlvblxuICAqIEBwYXJhbSBpdGVtXG4gICogQHBhcmFtIGluZGV4XG4gICogQHJldHVybnMgeyp8QXJyYXl9XG4gICovXG5cdHRoaXMuaW5zZXJ0QXRJbmRleCA9IGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuXHRcdF90aGlzLl9jb2xsZWN0aW9uLnNwbGljZShpbmRleCwgMCwgaXRlbSk7XG5cdFx0cmV0dXJuIF90aGlzLl9jb2xsZWN0aW9uO1xuXHR9O1xuXG5cdC8qKlxuICAqIElmIHRoZSBpdGVtIGV4aXN0cywgcGVyZm9ybSBhbiBkdXBkYXRlLCBvdGhlcndpc2UgaW5zZXJ0XG4gICogQHBhcmFtIHZhbFxuICAqIEBwYXJhbSBpdGVtXG4gICogQHJldHVybnMgeyp9XG4gICovXG5cdHRoaXMudXBzZXJ0ID0gZnVuY3Rpb24gKHZhbCwgaXRlbSkge1xuXHRcdHZhciB3YXNJbkNvbGxlY3Rpb24gPSBmYWxzZTtcblxuXHRcdHZhciB1cHNydCA9IF90aGlzLl9jb2xsZWN0aW9uLm1hcChmdW5jdGlvbiAoaXQpIHtcblx0XHRcdHZhciBrZXkgPSBPYmplY3Qua2V5cyh2YWwpWzBdO1xuXG5cdFx0XHRpZiAoaXRba2V5XSA9PT0gdmFsW2tleV0pIHtcblx0XHRcdFx0d2FzSW5Db2xsZWN0aW9uID0gdHJ1ZTtcblxuXHRcdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgaXQsIGl0ZW0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGl0O1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0aWYgKCF3YXNJbkNvbGxlY3Rpb24pIHtcblx0XHRcdF90aGlzLmluc2VydChpdGVtKTtcblxuXHRcdFx0cmV0dXJuIF90aGlzLl9jb2xsZWN0aW9uO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdXBzcnQ7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuICAqIFJlbW92ZSB3aGVyZSB0aGUga2V5IGFuZCB2YWx1ZSBtYXRjaFxuICAqIEBwYXJhbSB2YWxcbiAgKi9cblx0dGhpcy5yZW1vdmVXaGVyZSA9IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gX3RoaXMuX2NvbGxlY3Rpb24uZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIga2V5ID0gT2JqZWN0LmtleXModmFsKVswXTtcblxuXHRcdFx0cmV0dXJuIGl0ZW1ba2V5XSAmJiAhKGl0ZW1ba2V5XSA9PT0gdmFsW2tleV0pO1xuXHRcdH0pO1xuXHR9O1xuXG5cdC8qKlxuICAqIFBlcmZvcm0gYSBub3JtYWwgdXBkYXRlIGlmIHRoZSBrZXkgYW5kIHZhbHVlIG1hdGNoXG4gICogQHBhcmFtIHZhbFxuICAqIEBwYXJhbSBpdGVtXG4gICovXG5cdHRoaXMudXBkYXRlV2hlcmUgPSBmdW5jdGlvbiAodmFsLCBpdGVtKSB7XG5cdFx0cmV0dXJuIF90aGlzLl9jb2xsZWN0aW9uLm1hcChmdW5jdGlvbiAoaXQpIHtcblx0XHRcdHZhciBrZXkgPSBPYmplY3Qua2V5cyh2YWwpWzBdO1xuXG5cdFx0XHRpZiAoaXRba2V5XSA9PT0gdmFsW2tleV0pIHtcblx0XHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGl0LCBpdGVtKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBpdDtcblx0XHRcdH1cblx0XHR9KTtcblx0fTtcblxuXHRyZXR1cm4gdGhpcztcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNoYWlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjaGFpXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0E7Ozs7O0FDaEVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3ZMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDbEJBOzs7Ozs7QUNBQTs7Ozs7Ozs7O0FDQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQWpCQTtBQUNBO0FBQUE7QUFBQTtBQWlCQTtBQUNBOzs7Ozs7O0FDL0JBOztBQUVBOzs7QUFBQTs7OztBQUFBOzs7OztBQUFBOzs7OztBQUFBOzs7QUFBQTs7OztBQUFBOzs7Ozs7QUNGQTs7O0EiLCJzb3VyY2VSb290IjoiIn0=