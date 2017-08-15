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

const collection = new __WEBPACK_IMPORTED_MODULE_1_Src_index_js__["Collo"](c);

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
		const collection = new __WEBPACK_IMPORTED_MODULE_1_Src_index_js__["Collo"]([
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
		const collection = new __WEBPACK_IMPORTED_MODULE_1_Src_index_js__["Collo"]([
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
		const collection = new __WEBPACK_IMPORTED_MODULE_1_Src_index_js__["Collo"]([
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
var cov_1xfx4nf6ru=function(){var path="/Users/computer/Documents/_Projects/myNpmPackages/collo/src/index.js",hash="194654b7fd5033cc43480ace41c1e62535309ca4",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/computer/Documents/_Projects/myNpmPackages/collo/src/index.js",statementMap:{"0":{start:{line:3,column:0},end:{line:5,column:3}},"1":{start:{line:6,column:12},end:{line:112,column:1}},"2":{start:{line:7,column:13},end:{line:7,column:17}},"3":{start:{line:9,column:1},end:{line:9,column:37}},"4":{start:{line:14,column:1},end:{line:16,column:3}},"5":{start:{line:15,column:2},end:{line:15,column:27}},"6":{start:{line:22,column:1},end:{line:28,column:3}},"7":{start:{line:23,column:2},end:{line:27,column:8}},"8":{start:{line:24,column:13},end:{line:24,column:32}},"9":{start:{line:26,column:3},end:{line:26,column:46}},"10":{start:{line:35,column:1},end:{line:39,column:3}},"11":{start:{line:36,column:2},end:{line:36,column:31}},"12":{start:{line:38,column:2},end:{line:38,column:27}},"13":{start:{line:47,column:1},end:{line:50,column:3}},"14":{start:{line:48,column:2},end:{line:48,column:43}},"15":{start:{line:49,column:2},end:{line:49,column:27}},"16":{start:{line:58,column:1},end:{line:80,column:3}},"17":{start:{line:59,column:24},end:{line:59,column:29}},"18":{start:{line:61,column:14},end:{line:71,column:4}},"19":{start:{line:62,column:13},end:{line:62,column:32}},"20":{start:{line:64,column:3},end:{line:70,column:4}},"21":{start:{line:65,column:4},end:{line:65,column:27}},"22":{start:{line:67,column:4},end:{line:67,column:39}},"23":{start:{line:69,column:4},end:{line:69,column:14}},"24":{start:{line:73,column:2},end:{line:79,column:3}},"25":{start:{line:74,column:3},end:{line:74,column:22}},"26":{start:{line:76,column:3},end:{line:76,column:28}},"27":{start:{line:78,column:3},end:{line:78,column:16}},"28":{start:{line:86,column:1},end:{line:92,column:3}},"29":{start:{line:87,column:2},end:{line:91,column:5}},"30":{start:{line:88,column:13},end:{line:88,column:32}},"31":{start:{line:90,column:3},end:{line:90,column:49}},"32":{start:{line:99,column:1},end:{line:109,column:3}},"33":{start:{line:100,column:2},end:{line:108,column:5}},"34":{start:{line:101,column:13},end:{line:101,column:32}},"35":{start:{line:103,column:3},end:{line:107,column:4}},"36":{start:{line:104,column:4},end:{line:104,column:39}},"37":{start:{line:106,column:4},end:{line:106,column:14}},"38":{start:{line:111,column:1},end:{line:111,column:13}}},fnMap:{"0":{name:"Collo",decl:{start:{line:6,column:37},end:{line:6,column:42}},loc:{start:{line:6,column:55},end:{line:112,column:1}},line:6},"1":{name:"(anonymous_1)",decl:{start:{line:14,column:13},end:{line:14,column:14}},loc:{start:{line:14,column:25},end:{line:16,column:2}},line:14},"2":{name:"(anonymous_2)",decl:{start:{line:22,column:18},end:{line:22,column:19}},loc:{start:{line:22,column:33},end:{line:28,column:2}},line:22},"3":{name:"(anonymous_3)",decl:{start:{line:23,column:34},end:{line:23,column:35}},loc:{start:{line:23,column:50},end:{line:27,column:3}},line:23},"4":{name:"(anonymous_4)",decl:{start:{line:35,column:15},end:{line:35,column:16}},loc:{start:{line:35,column:31},end:{line:39,column:2}},line:35},"5":{name:"(anonymous_5)",decl:{start:{line:47,column:22},end:{line:47,column:23}},loc:{start:{line:47,column:45},end:{line:50,column:2}},line:47},"6":{name:"(anonymous_6)",decl:{start:{line:58,column:15},end:{line:58,column:16}},loc:{start:{line:58,column:36},end:{line:80,column:2}},line:58},"7":{name:"(anonymous_7)",decl:{start:{line:61,column:36},end:{line:61,column:37}},loc:{start:{line:61,column:50},end:{line:71,column:3}},line:61},"8":{name:"(anonymous_8)",decl:{start:{line:86,column:20},end:{line:86,column:21}},loc:{start:{line:86,column:35},end:{line:92,column:2}},line:86},"9":{name:"(anonymous_9)",decl:{start:{line:87,column:34},end:{line:87,column:35}},loc:{start:{line:87,column:50},end:{line:91,column:3}},line:87},"10":{name:"(anonymous_10)",decl:{start:{line:99,column:20},end:{line:99,column:21}},loc:{start:{line:99,column:41},end:{line:109,column:2}},line:99},"11":{name:"(anonymous_11)",decl:{start:{line:100,column:31},end:{line:100,column:32}},loc:{start:{line:100,column:45},end:{line:108,column:3}},line:100}},branchMap:{"0":{loc:{start:{line:9,column:20},end:{line:9,column:36}},type:"binary-expr",locations:[{start:{line:9,column:20},end:{line:9,column:30}},{start:{line:9,column:34},end:{line:9,column:36}}],line:9},"1":{loc:{start:{line:26,column:10},end:{line:26,column:45}},type:"binary-expr",locations:[{start:{line:26,column:10},end:{line:26,column:19}},{start:{line:26,column:23},end:{line:26,column:45}}],line:26},"2":{loc:{start:{line:64,column:3},end:{line:70,column:4}},type:"if",locations:[{start:{line:64,column:3},end:{line:70,column:4}},{start:{line:64,column:3},end:{line:70,column:4}}],line:64},"3":{loc:{start:{line:73,column:2},end:{line:79,column:3}},type:"if",locations:[{start:{line:73,column:2},end:{line:79,column:3}},{start:{line:73,column:2},end:{line:79,column:3}}],line:73},"4":{loc:{start:{line:90,column:10},end:{line:90,column:48}},type:"binary-expr",locations:[{start:{line:90,column:10},end:{line:90,column:19}},{start:{line:90,column:23},end:{line:90,column:48}}],line:90},"5":{loc:{start:{line:103,column:3},end:{line:107,column:4}},type:"if",locations:[{start:{line:103,column:3},end:{line:107,column:4}},{start:{line:103,column:3},end:{line:107,column:4}}],line:103}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0},b:{"0":[0,0],"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0]},inputSourceMap:{version:3,sources:["src/index.js"],names:["Collo","collection","_collection","list","findWhere","filter","key","Object","keys","val","item","insert","push","insertAtIndex","index","splice","upsert","wasInCollection","upsrt","map","it","assign","removeWhere","updateWhere"],mappings:";;;;;AAAO,IAAMA,wBAAS,SAATA,KAAS,CAAUC,UAAV,EAAsB;AAAA;;AAC3C,MAAKC,WAAL,GAAmBD,cAAc,EAAjC;;AAEA;;;AAGA,MAAKE,IAAL,GAAY;AAAA,SAAM,MAAKD,WAAX;AAAA,EAAZ;;AAEA;;;;AAIA,MAAKE,SAAL,GAAiB;AAAA,SAAO,MAAKF,WAAL,CACrBG,MADqB,CACd,gBAAQ;AACf,OAAIC,MAAMC,OAAOC,IAAP,CAAYC,GAAZ,EAAiB,CAAjB,CAAV;;AAEA,UAAOC,KAAKJ,GAAL,KAAaI,KAAKJ,GAAL,MAAcG,IAAIH,GAAJ,CAAlC;AACA,GALqB,EAKnB,CALmB,CAAP;AAAA,EAAjB;;AAOA;;;;;AAKA,MAAKK,MAAL,GAAc,gBAAQ;AACpB,QAAKT,WAAL,CAAiBU,IAAjB,CAAsBF,IAAtB;;AAEA,SAAO,MAAKR,WAAZ;AACD,EAJD;;AAMA;;;;;;AAMA,MAAKW,aAAL,GAAqB,UAACH,IAAD,EAAOI,KAAP,EAAiB;AACrC,QAAKZ,WAAL,CAAiBa,MAAjB,CAAwBD,KAAxB,EAA8B,CAA9B,EAAgCJ,IAAhC;AACA,SAAO,MAAKR,WAAZ;AACA,EAHD;;AAKA;;;;;;AAMA,MAAKc,MAAL,GAAc,UAACP,GAAD,EAAKC,IAAL,EAAc;AAC1B,MAAIO,kBAAkB,KAAtB;;AAEA,MAAMC,QAAQ,MAAKhB,WAAL,CAAiBiB,GAAjB,CAAqB,cAAM;AACxC,OAAIb,MAAMC,OAAOC,IAAP,CAAYC,GAAZ,EAAiB,CAAjB,CAAV;;AAEA,OAAGW,GAAGd,GAAH,MAAYG,IAAIH,GAAJ,CAAf,EAAwB;AACvBW,sBAAkB,IAAlB;;AAED,WAAQV,OAAOc,MAAP,CAAc,EAAd,EAAiBD,EAAjB,EAAoBV,IAApB,CAAR;AACC,IAJD,MAIK;AACJ,WAAOU,EAAP;AACA;AACD,GAVa,CAAd;;AAaA,MAAG,CAACH,eAAJ,EAAoB;AACnB,SAAKN,MAAL,CAAYD,IAAZ;;AAEA,UAAO,MAAKR,WAAZ;AACA,GAJD,MAIK;AACJ,UAAOgB,KAAP;AACA;AACF,EAvBD;;AAyBA;;;;AAIE,MAAKI,WAAL,GAAmB;AAAA,SAAO,MAAKpB,WAAL,CACzBG,MADyB,CAClB,gBAAQ;AACf,OAAIC,MAAMC,OAAOC,IAAP,CAAYC,GAAZ,EAAiB,CAAjB,CAAV;;AAEA,UAAOC,KAAKJ,GAAL,KAAa,EAAEI,KAAKJ,GAAL,MAAcG,IAAIH,GAAJ,CAAhB,CAApB;AACA,GALyB,CAAP;AAAA,EAAnB;;AAOF;;;;;AAKA,MAAKiB,WAAL,GAAmB,UAACd,GAAD,EAAKC,IAAL;AAAA,SAAc,MAAKR,WAAL,CAAiBiB,GAAjB,CAAqB,cAAM;AAC1D,OAAIb,MAAMC,OAAOC,IAAP,CAAYC,GAAZ,EAAiB,CAAjB,CAAV;;AAEA,OAAGW,GAAGd,GAAH,MAAYG,IAAIH,GAAJ,CAAf,EAAwB;AACvB,WAAQC,OAAOc,MAAP,CAAc,EAAd,EAAiBD,EAAjB,EAAoBV,IAApB,CAAR;AACA,IAFD,MAEK;AACJ,WAAOU,EAAP;AACA;AACF,GARgC,CAAd;AAAA,EAAnB;;AAUA,QAAO,IAAP;AACA,CAnGM",file:"index.js",sourceRoot:"/Users/computer/Documents/_Projects/myNpmPackages/collo",sourcesContent:["export const Collo  = function (collection) {\n\tthis._collection = collection || [];\n\n\t/**\n\t * Return the current collection\n\t */\n\tthis.list = () => this._collection;\n\n\t/**\n\t * Return the item where the key/al match\n\t * @param val\n\t */\n\tthis.findWhere = val => this._collection\n\t  .filter(item => {\n\t\t  let key = Object.keys(val)[0];\n\n\t\t  return item[key] && item[key] === val[key];\n\t  })[0];\n\n\t/**\n\t * Insert the item at the end of the stack\n\t * @param item\n\t * @returns {*|Array}\n\t */\n\tthis.insert = item => {\n\t  this._collection.push(item);\n\n\t  return this._collection;\n\t};\n\n\t/**\n\t * Splice an item in at an exact position in the collection\n\t * @param item\n\t * @param index\n\t * @returns {*|Array}\n\t */\n\tthis.insertAtIndex = (item, index) => {\n\t\tthis._collection.splice(index,0,item);\n\t\treturn this._collection;\n\t};\n\n\t/**\n\t * If the item exists, perform an dupdate, otherwise insert\n\t * @param val\n\t * @param item\n\t * @returns {*}\n\t */\n\tthis.upsert = (val,item) => {\n\t  let wasInCollection = false;\n\n\t  const upsrt = this._collection.map(it => {\n\t\t  let key = Object.keys(val)[0];\n\n\t\t  if(it[key] === val[key]){\n\t\t\t  wasInCollection = true;\n\n\t\t\t return  Object.assign({},it,item);\n\t\t  }else{\n\t\t\t  return it;\n\t\t  }\n\t  });\n\n\n\t  if(!wasInCollection){\n\t\t  this.insert(item);\n\n\t\t  return this._collection;\n\t  }else{\n\t\t  return upsrt;\n\t  }\n\t};\n\n\t/**\n\t * Remove where the key and value match\n\t * @param val\n\t */\n  \tthis.removeWhere = val => this._collection\n\t  .filter(item => {\n\t\t  let key = Object.keys(val)[0];\n\n\t\t  return item[key] && !(item[key] === val[key]);\n\t  });\n\n\t/**\n\t * Perform a normal update if the key and value match\n\t * @param val\n\t * @param item\n\t */\n\tthis.updateWhere = (val,item) => this._collection.map(it => {\n\t  let key = Object.keys(val)[0];\n\n\t  if(it[key] === val[key]){\n\t\t  return  Object.assign({},it,item);\n\t  }else{\n\t\t  return it;\n\t  }\n\t});\n\n\treturn this;\n};"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_1xfx4nf6ru.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});var Collo=(cov_1xfx4nf6ru.s[1]++,exports.Collo=function Collo(collection){cov_1xfx4nf6ru.f[0]++;var _this=(cov_1xfx4nf6ru.s[2]++,this);cov_1xfx4nf6ru.s[3]++;this._collection=(cov_1xfx4nf6ru.b[0][0]++,collection)||(cov_1xfx4nf6ru.b[0][1]++,[]);/**
  * Return the current collection
  */cov_1xfx4nf6ru.s[4]++;this.list=function(){cov_1xfx4nf6ru.f[1]++;cov_1xfx4nf6ru.s[5]++;return _this._collection;};/**
  * Return the item where the key/al match
  * @param val
  */cov_1xfx4nf6ru.s[6]++;this.findWhere=function(val){cov_1xfx4nf6ru.f[2]++;cov_1xfx4nf6ru.s[7]++;return _this._collection.filter(function(item){cov_1xfx4nf6ru.f[3]++;var key=(cov_1xfx4nf6ru.s[8]++,Object.keys(val)[0]);cov_1xfx4nf6ru.s[9]++;return(cov_1xfx4nf6ru.b[1][0]++,item[key])&&(cov_1xfx4nf6ru.b[1][1]++,item[key]===val[key]);})[0];};/**
  * Insert the item at the end of the stack
  * @param item
  * @returns {*|Array}
  */cov_1xfx4nf6ru.s[10]++;this.insert=function(item){cov_1xfx4nf6ru.f[4]++;cov_1xfx4nf6ru.s[11]++;_this._collection.push(item);cov_1xfx4nf6ru.s[12]++;return _this._collection;};/**
  * Splice an item in at an exact position in the collection
  * @param item
  * @param index
  * @returns {*|Array}
  */cov_1xfx4nf6ru.s[13]++;this.insertAtIndex=function(item,index){cov_1xfx4nf6ru.f[5]++;cov_1xfx4nf6ru.s[14]++;_this._collection.splice(index,0,item);cov_1xfx4nf6ru.s[15]++;return _this._collection;};/**
  * If the item exists, perform an dupdate, otherwise insert
  * @param val
  * @param item
  * @returns {*}
  */cov_1xfx4nf6ru.s[16]++;this.upsert=function(val,item){cov_1xfx4nf6ru.f[6]++;var wasInCollection=(cov_1xfx4nf6ru.s[17]++,false);var upsrt=(cov_1xfx4nf6ru.s[18]++,_this._collection.map(function(it){cov_1xfx4nf6ru.f[7]++;var key=(cov_1xfx4nf6ru.s[19]++,Object.keys(val)[0]);cov_1xfx4nf6ru.s[20]++;if(it[key]===val[key]){cov_1xfx4nf6ru.b[2][0]++;cov_1xfx4nf6ru.s[21]++;wasInCollection=true;cov_1xfx4nf6ru.s[22]++;return Object.assign({},it,item);}else{cov_1xfx4nf6ru.b[2][1]++;cov_1xfx4nf6ru.s[23]++;return it;}}));cov_1xfx4nf6ru.s[24]++;if(!wasInCollection){cov_1xfx4nf6ru.b[3][0]++;cov_1xfx4nf6ru.s[25]++;_this.insert(item);cov_1xfx4nf6ru.s[26]++;return _this._collection;}else{cov_1xfx4nf6ru.b[3][1]++;cov_1xfx4nf6ru.s[27]++;return upsrt;}};/**
  * Remove where the key and value match
  * @param val
  */cov_1xfx4nf6ru.s[28]++;this.removeWhere=function(val){cov_1xfx4nf6ru.f[8]++;cov_1xfx4nf6ru.s[29]++;return _this._collection.filter(function(item){cov_1xfx4nf6ru.f[9]++;var key=(cov_1xfx4nf6ru.s[30]++,Object.keys(val)[0]);cov_1xfx4nf6ru.s[31]++;return(cov_1xfx4nf6ru.b[4][0]++,item[key])&&(cov_1xfx4nf6ru.b[4][1]++,!(item[key]===val[key]));});};/**
  * Perform a normal update if the key and value match
  * @param val
  * @param item
  */cov_1xfx4nf6ru.s[32]++;this.updateWhere=function(val,item){cov_1xfx4nf6ru.f[10]++;cov_1xfx4nf6ru.s[33]++;return _this._collection.map(function(it){cov_1xfx4nf6ru.f[11]++;var key=(cov_1xfx4nf6ru.s[34]++,Object.keys(val)[0]);cov_1xfx4nf6ru.s[35]++;if(it[key]===val[key]){cov_1xfx4nf6ru.b[5][0]++;cov_1xfx4nf6ru.s[36]++;return Object.assign({},it,item);}else{cov_1xfx4nf6ru.b[5][1]++;cov_1xfx4nf6ru.s[37]++;return it;}});};cov_1xfx4nf6ru.s[38]++;return this;});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("chai");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVubmVyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrL2Jvb3RzdHJhcCA2NmJlNzcwNTQxNjVjM2ZjMWM1OCIsIi9Vc2Vycy9jb21wdXRlci9Eb2N1bWVudHMvX1Byb2plY3RzL215TnBtUGFja2FnZXMvY29sbG8vdGVzdC9zcGVjcy9pbmRleC5zcGVjLmpzIiwiL1VzZXJzL2NvbXB1dGVyL0RvY3VtZW50cy9fUHJvamVjdHMvbXlOcG1QYWNrYWdlcy9jb2xsby90ZXN0IC9eXFwuXFwvc3BlY3MuKiQvIiwiZXh0ZXJuYWwgXCJmc1wiIiwiZXh0ZXJuYWwgXCJmcy1maWxlLXRyZWVcIiIsIi9Vc2Vycy9jb21wdXRlci9Eb2N1bWVudHMvX1Byb2plY3RzL215TnBtUGFja2FnZXMvY29sbG8vdGVzdC9ydW5uZXIuanMiLCIvVXNlcnMvY29tcHV0ZXIvRG9jdW1lbnRzL19Qcm9qZWN0cy9teU5wbVBhY2thZ2VzL2NvbGxvL3NyYy9pbmRleC5qcyIsImV4dGVybmFsIFwiY2hhaVwiIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNjZiZTc3MDU0MTY1YzNmYzFjNTgiLCJpbXBvcnQgeyBleHBlY3QgfSBmcm9tICdjaGFpJztcbmltcG9ydCB7IENvbGxvIH0gZnJvbSAnU3JjL2luZGV4LmpzJztcblxuY29uc3QgYyA9IFtcbiAgICB7XG4gICAgICBpZDogMSxcbiAgICAgIG5hbWU6ICdBZGFtJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDIsXG4gICAgICBuYW1lOiAnSnVsaWFuYSdcbiAgICB9XG5dO1xuXG5jb25zdCBjb2xsZWN0aW9uID0gbmV3IENvbGxvKGMpO1xuXG4vLyBsaXN0XG5kZXNjcmliZSgnVGhlIGxpc3QgZm4nLCAoKSA9PiB7XG4gIGl0KCdzaG91bGQgcmV0dXJuIHRoZSBzYW1lIGNvbGxlY3Rpb24nLCAoKSA9PiB7XG4gICAgZXhwZWN0KGNvbGxlY3Rpb24ubGlzdCgpKS50by5lcXVhbChjKTtcbiAgfSk7XG59KTtcblxuLy8gZmluZFdoZXJlXG5kZXNjcmliZSgnVGhlIGZpbmRXaGVyZSBmbicsICgpID0+IHtcbiAgaXQoJ3Nob3VsZCByZXR1cm4gdGhlIEFkYW0gb2JqZWN0JywgKCkgPT4ge1xuICAgICAgZXhwZWN0KGNvbGxlY3Rpb24uZmluZFdoZXJlKHtpZDoxfSkpLnRvLmRlZXAuZXF1YWwoe1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmFtZTogJ0FkYW0nXG4gICAgICB9KTtcbiAgICB9KTtcbn0pO1xuXG4vLyBpbnNlcnRcbmRlc2NyaWJlKCdUaGUgaW5zZXJ0IGZuJywgKCkgPT4ge1xuXHRpdCgnc2hvdWxkIHJldHVybiB0aGUgY29sbGVjdGlvbiB3aXRoIG9uZSBtb3JlIGl0ZW0gaW4gaXQnLCAoKSA9PiB7XG5cdFx0bGV0IF9jID0gYztcblxuXHRcdF9jLnB1c2goe1xuXHRcdFx0aWQ6IDMsXG5cdFx0XHRuYW1lOiAnUGFraSBQYWtpJ1xuXHRcdH0pO1xuXG5cdFx0ZXhwZWN0KGNvbGxlY3Rpb24uaW5zZXJ0KHtcblx0XHRcdGlkOiAzLFxuXHRcdFx0bmFtZTogJ1Bha2kgUGFraSdcblx0XHR9KSkudG8uZGVlcC5lcXVhbChfYyk7XG5cdH0pO1xufSk7XG5cblxuLy8gaW5zZXJ0QXRJbmRleFxuZGVzY3JpYmUoJ1RoZSBpbnNlcnRBdEluZGV4IGZuJywgKCkgPT4ge1xuXHRpdCgnc2hvdWxkIHJldHVybiB0aGUgc2FtZSBjb2xsZWN0aW9uIGFzIHRoZSB0ZXN0JywgKCkgPT4ge1xuXHRcdGxldCBfYyA9IGM7XG5cdFx0Y29uc3QgaW5kZXggPSAxO1xuXG5cdFx0X2Muc3BsaWNlKGluZGV4LDAse1xuXHRcdFx0aWQ6IDUsXG5cdFx0XHRuYW1lOiAnTWlyb20nXG5cdFx0fSk7XG5cblx0XHRleHBlY3QoY29sbGVjdGlvbi5pbnNlcnRBdEluZGV4KHtcblx0XHRcdGlkOiAzLFxuXHRcdFx0bmFtZTogJ1Bha2kgUGFraSdcblx0XHR9LGluZGV4KSkudG8uZGVlcC5lcXVhbChfYyk7XG5cdH0pO1xufSk7XG5cbi8vIHVwc2VydCBub3QgZm91bmRcbmRlc2NyaWJlKCdUaGUgdXBzZXJ0IFtOTyBmb3VuZCBpdGVtXSBmbicsICgpID0+IHtcblx0aXQoJ3Nob3VsZCByZXR1cm4gdGhlIHNhbWUgY29sbGVjdGlvbiBhcyB0aGUgaW5wdXQgcGx1cyB0aGUgbmV3IGl0ZW0nLCAoKSA9PiB7XG5cdFx0Y29uc3QgY29sbGVjdGlvbiA9IG5ldyBDb2xsbyhbXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiAxLFxuXHRcdFx0XHRuYW1lOiAnQWRhbSdcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiAyLFxuXHRcdFx0XHRuYW1lOiAnSnVsaWFuYSdcblx0XHRcdH1cblx0XHRdKTtcblxuXHRcdGxldCBfYyA9IFtcblx0XHRcdHtcblx0XHRcdFx0aWQ6IDEsXG5cdFx0XHRcdG5hbWU6ICdBZGFtJ1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aWQ6IDIsXG5cdFx0XHRcdG5hbWU6ICdKdWxpYW5hJ1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aWQ6IDMsXG5cdFx0XHRcdG5hbWU6ICdQYWtpIFBha2knXG5cdFx0XHR9XG5cdFx0XTtcblxuXHRcdGV4cGVjdChjb2xsZWN0aW9uLnVwc2VydCh7aWQ6M30se1xuXHRcdFx0aWQ6IDMsXG5cdFx0XHRuYW1lOiAnUGFraSBQYWtpJ1xuXHRcdH0pKS50by5kZWVwLmVxdWFsKF9jKTtcblx0fSk7XG59KTtcblxuLy8gdXBzZXJ0IGl0ZW0gRk9VTkRcbmRlc2NyaWJlKCdUaGUgdXBzZXJ0IFtJdGVtIEZPVU5EXSBmbicsICgpID0+IHtcblx0aXQoJ3Nob3VsZCByZXR1cm4gdGhlIHNhbWUgY29sbGVjdGlvbiBhcyB0aGUgaW5wdXQgcGx1cyB0aGUgbmV3IGl0ZW0nLCAoKSA9PiB7XG5cdFx0Y29uc3QgY29sbGVjdGlvbiA9IG5ldyBDb2xsbyhbXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiAxLFxuXHRcdFx0XHRuYW1lOiAnQWRhbSdcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiAyLFxuXHRcdFx0XHRuYW1lOiAnSnVsaWFuYSdcblx0XHRcdH1cblx0XHRdKTtcblxuXHRcdGxldCBfYyA9IFtcblx0XHRcdHtcblx0XHRcdFx0aWQ6IDEsXG5cdFx0XHRcdG5hbWU6ICdBZGFtJ1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aWQ6IDIsXG5cdFx0XHRcdG5hbWU6ICdKdWxpYW5hICYgTWlsYSdcblx0XHRcdH1cblx0XHRdO1xuXG5cdFx0ZXhwZWN0KGNvbGxlY3Rpb24udXBzZXJ0KHtpZDoyfSx7XG5cdFx0XHRpZDogMixcblx0XHRcdG5hbWU6ICdKdWxpYW5hICYgTWlsYSdcblx0XHR9KSkudG8uZGVlcC5lcXVhbChfYyk7XG5cdH0pO1xufSk7XG5cbi8vIHVwZGF0ZVdoZXJlXG5kZXNjcmliZSgnVGhlIHVwZGF0ZVdoZXJlIGZuJywgKCkgPT4ge1xuXHRpdCgnc2hvdWxkIHJldHVybiB0aGUgc2FtZSBjb2xsZWN0aW9uIGFzIHRoZSB0ZXN0JywgKCkgPT4ge1xuXHRcdGNvbnN0IGNvbGxlY3Rpb24gPSBuZXcgQ29sbG8oW1xuXHRcdFx0e1xuXHRcdFx0XHRpZDogMSxcblx0XHRcdFx0bmFtZTogJ0FkYW0nXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRpZDogMixcblx0XHRcdFx0bmFtZTogJ0p1bGlhbmEnXG5cdFx0XHR9XG5cdFx0XSk7XG5cblx0XHRsZXQgX2MgPSBbXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiAxLFxuXHRcdFx0XHRuYW1lOiAnQWRhbSdcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiAyLFxuXHRcdFx0XHRuYW1lOiAnSnVsaWFuYSAmIE1pbGEnXG5cdFx0XHR9XG5cdFx0XTtcblxuXHRcdGV4cGVjdChjb2xsZWN0aW9uLnVwZGF0ZVdoZXJlKHtpZDoyfSx7XG5cdFx0XHRpZDogMixcblx0XHRcdG5hbWU6ICdKdWxpYW5hICYgTWlsYSdcblx0XHR9KSkudG8uZGVlcC5lcXVhbChfYyk7XG5cdH0pO1xufSk7XG5cbi8vIHJlbW92ZVdoZXJlXG5kZXNjcmliZSgnVGhlIHJlbW92ZVdoZXJlIGZuJywgKCkgPT4ge1xuXHRpdCgnc2hvdWxkIHJldHVybiB0aGUgc2FtZSBjb2xsZWN0aW9uIGFzIHRoZSB0ZXN0JywgKCkgPT4ge1xuXHRcdGxldCBfYyA9IGM7XG5cdFx0Y29uc3Qga2V5ID0gJ2lkJyxcblx0XHRcdHZhbHVlID0gMztcblxuXHRcdGNvbnN0IGNvbGxvID0gX2MuZmlsdGVyKGl0ZW0gPT4gaXRlbVtrZXldICYmICEoaXRlbVtrZXldID09PSB2YWx1ZSkpO1xuXG5cdFx0ZXhwZWN0KGNvbGxlY3Rpb24ucmVtb3ZlV2hlcmUoe2lkOjN9KSkudG8uZGVlcC5lcXVhbChjb2xsbyk7XG5cdH0pO1xufSk7XG5cblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcGVjcy9pbmRleC5zcGVjLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBtYXAgPSB7XG5cdFwiLi9zcGVjcy9pbmRleC5zcGVjXCI6IDAsXG5cdFwiLi9zcGVjcy9pbmRleC5zcGVjLmpzXCI6IDBcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18od2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkpO1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKTtcblx0cmV0dXJuIGlkO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSAxO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4gXlxcLlxcL3NwZWNzLiokXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZnNcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcy1maWxlLXRyZWVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJmcy1maWxlLXRyZWVcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgZnNGaWxlVHJlZSBmcm9tICdmcy1maWxlLXRyZWUnO1xuaW1wb3J0IGZzICAgICAgICAgZnJvbSAnZnMnO1xuXG5cbmNvbnN0IHRlc3RGb2xkZXIgICA9ICd0ZXN0L3NwZWNzJztcblxuYnVpbGRUcmVlKGZzRmlsZVRyZWUuc3luYyhwcm9jZXNzLmN3ZCgpICsgJy8nICsgdGVzdEZvbGRlciksIHRlc3RGb2xkZXIpO1xuXG5mdW5jdGlvbiBidWlsZFRyZWUodHJlZSwgcm9vdCkge1xuICAgIF9idWlsZFRyZWUodHJlZSwgcm9vdCwgJy8nKTtcbn1cblxuZnVuY3Rpb24gX2J1aWxkVHJlZSh0cmVlLCByb290LCBwYXRoKSB7XG4gICAgZm9yKGxldCBpdGVtIGluIHRyZWUpIHtcbiAgICAgICAgaWYodHJlZS5oYXNPd25Qcm9wZXJ0eShpdGVtKSkge1xuICAgICAgICAgICAgbGV0IGl0ZW1TdGF0cyA9IGZzLmxzdGF0U3luYygnLi8nICsgcm9vdCArIHBhdGggKyBpdGVtKTtcblxuICAgICAgICAgICAgaWYoaXRlbVN0YXRzLmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgICAgICAgICAgICBkZXNjcmliZShpdGVtICsgJy8nLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIF9idWlsZFRyZWUodHJlZVtpdGVtXSwgcm9vdCwgcGF0aCArIGl0ZW0gKyAnLycpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmKGl0ZW1TdGF0cy5pc0ZpbGUoKSkge1xuICAgICAgICAgICAgICAgIGRlc2NyaWJlKGl0ZW0sICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZpbGUgPSByZXF1aXJlKCcuL3NwZWNzJyArIHBhdGggKyBpdGVtKTtcblxuICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YgZmlsZS5kZWZhdWx0ID09PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZS5kZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ydW5uZXIuanMiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcbnZhciBDb2xsbyA9IGV4cG9ydHMuQ29sbG8gPSBmdW5jdGlvbiBDb2xsbyhjb2xsZWN0aW9uKSB7XG5cdHZhciBfdGhpcyA9IHRoaXM7XG5cblx0dGhpcy5fY29sbGVjdGlvbiA9IGNvbGxlY3Rpb24gfHwgW107XG5cblx0LyoqXG4gICogUmV0dXJuIHRoZSBjdXJyZW50IGNvbGxlY3Rpb25cbiAgKi9cblx0dGhpcy5saXN0ID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBfdGhpcy5fY29sbGVjdGlvbjtcblx0fTtcblxuXHQvKipcbiAgKiBSZXR1cm4gdGhlIGl0ZW0gd2hlcmUgdGhlIGtleS9hbCBtYXRjaFxuICAqIEBwYXJhbSB2YWxcbiAgKi9cblx0dGhpcy5maW5kV2hlcmUgPSBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIF90aGlzLl9jb2xsZWN0aW9uLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGtleSA9IE9iamVjdC5rZXlzKHZhbClbMF07XG5cblx0XHRcdHJldHVybiBpdGVtW2tleV0gJiYgaXRlbVtrZXldID09PSB2YWxba2V5XTtcblx0XHR9KVswXTtcblx0fTtcblxuXHQvKipcbiAgKiBJbnNlcnQgdGhlIGl0ZW0gYXQgdGhlIGVuZCBvZiB0aGUgc3RhY2tcbiAgKiBAcGFyYW0gaXRlbVxuICAqIEByZXR1cm5zIHsqfEFycmF5fVxuICAqL1xuXHR0aGlzLmluc2VydCA9IGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0X3RoaXMuX2NvbGxlY3Rpb24ucHVzaChpdGVtKTtcblxuXHRcdHJldHVybiBfdGhpcy5fY29sbGVjdGlvbjtcblx0fTtcblxuXHQvKipcbiAgKiBTcGxpY2UgYW4gaXRlbSBpbiBhdCBhbiBleGFjdCBwb3NpdGlvbiBpbiB0aGUgY29sbGVjdGlvblxuICAqIEBwYXJhbSBpdGVtXG4gICogQHBhcmFtIGluZGV4XG4gICogQHJldHVybnMgeyp8QXJyYXl9XG4gICovXG5cdHRoaXMuaW5zZXJ0QXRJbmRleCA9IGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuXHRcdF90aGlzLl9jb2xsZWN0aW9uLnNwbGljZShpbmRleCwgMCwgaXRlbSk7XG5cdFx0cmV0dXJuIF90aGlzLl9jb2xsZWN0aW9uO1xuXHR9O1xuXG5cdC8qKlxuICAqIElmIHRoZSBpdGVtIGV4aXN0cywgcGVyZm9ybSBhbiBkdXBkYXRlLCBvdGhlcndpc2UgaW5zZXJ0XG4gICogQHBhcmFtIHZhbFxuICAqIEBwYXJhbSBpdGVtXG4gICogQHJldHVybnMgeyp9XG4gICovXG5cdHRoaXMudXBzZXJ0ID0gZnVuY3Rpb24gKHZhbCwgaXRlbSkge1xuXHRcdHZhciB3YXNJbkNvbGxlY3Rpb24gPSBmYWxzZTtcblxuXHRcdHZhciB1cHNydCA9IF90aGlzLl9jb2xsZWN0aW9uLm1hcChmdW5jdGlvbiAoaXQpIHtcblx0XHRcdHZhciBrZXkgPSBPYmplY3Qua2V5cyh2YWwpWzBdO1xuXG5cdFx0XHRpZiAoaXRba2V5XSA9PT0gdmFsW2tleV0pIHtcblx0XHRcdFx0d2FzSW5Db2xsZWN0aW9uID0gdHJ1ZTtcblxuXHRcdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgaXQsIGl0ZW0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGl0O1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0aWYgKCF3YXNJbkNvbGxlY3Rpb24pIHtcblx0XHRcdF90aGlzLmluc2VydChpdGVtKTtcblxuXHRcdFx0cmV0dXJuIF90aGlzLl9jb2xsZWN0aW9uO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdXBzcnQ7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuICAqIFJlbW92ZSB3aGVyZSB0aGUga2V5IGFuZCB2YWx1ZSBtYXRjaFxuICAqIEBwYXJhbSB2YWxcbiAgKi9cblx0dGhpcy5yZW1vdmVXaGVyZSA9IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gX3RoaXMuX2NvbGxlY3Rpb24uZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIga2V5ID0gT2JqZWN0LmtleXModmFsKVswXTtcblxuXHRcdFx0cmV0dXJuIGl0ZW1ba2V5XSAmJiAhKGl0ZW1ba2V5XSA9PT0gdmFsW2tleV0pO1xuXHRcdH0pO1xuXHR9O1xuXG5cdC8qKlxuICAqIFBlcmZvcm0gYSBub3JtYWwgdXBkYXRlIGlmIHRoZSBrZXkgYW5kIHZhbHVlIG1hdGNoXG4gICogQHBhcmFtIHZhbFxuICAqIEBwYXJhbSBpdGVtXG4gICovXG5cdHRoaXMudXBkYXRlV2hlcmUgPSBmdW5jdGlvbiAodmFsLCBpdGVtKSB7XG5cdFx0cmV0dXJuIF90aGlzLl9jb2xsZWN0aW9uLm1hcChmdW5jdGlvbiAoaXQpIHtcblx0XHRcdHZhciBrZXkgPSBPYmplY3Qua2V5cyh2YWwpWzBdO1xuXG5cdFx0XHRpZiAoaXRba2V5XSA9PT0gdmFsW2tleV0pIHtcblx0XHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGl0LCBpdGVtKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBpdDtcblx0XHRcdH1cblx0XHR9KTtcblx0fTtcblxuXHRyZXR1cm4gdGhpcztcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNoYWlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjaGFpXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUN4TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNuQkE7QUFDQTs7Ozs7QUNEQTtBQUNBOzs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFqQkE7QUFDQTtBQUFBO0FBQUE7QUFpQkE7QUFDQTtBQUNBOzs7Ozs7QUM5QkE7O0FBR0E7OztBQUFBOzs7O0FBQUE7Ozs7O0FBQUE7Ozs7O0FBQUE7OztBQUFBOzs7O0FBQUE7QUFDQTs7Ozs7QUNOQTtBQUNBOzsiLCJzb3VyY2VSb290IjoiIn0=