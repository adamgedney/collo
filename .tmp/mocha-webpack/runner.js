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
var cov_1xfx4nf6ru=function(){var path="/Users/computer/Documents/_Projects/myNpmPackages/collo/src/index.js",hash="4d771c043528561c48de68030823f346dcd278fb",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/computer/Documents/_Projects/myNpmPackages/collo/src/index.js",statementMap:{"0":{start:{line:3,column:0},end:{line:5,column:3}},"1":{start:{line:7,column:0},end:{line:114,column:2}},"2":{start:{line:8,column:13},end:{line:8,column:17}},"3":{start:{line:10,column:1},end:{line:10,column:37}},"4":{start:{line:15,column:1},end:{line:17,column:3}},"5":{start:{line:16,column:2},end:{line:16,column:27}},"6":{start:{line:23,column:1},end:{line:29,column:3}},"7":{start:{line:24,column:2},end:{line:28,column:8}},"8":{start:{line:25,column:13},end:{line:25,column:32}},"9":{start:{line:27,column:3},end:{line:27,column:46}},"10":{start:{line:36,column:1},end:{line:40,column:3}},"11":{start:{line:37,column:2},end:{line:37,column:31}},"12":{start:{line:39,column:2},end:{line:39,column:27}},"13":{start:{line:48,column:1},end:{line:51,column:3}},"14":{start:{line:49,column:2},end:{line:49,column:43}},"15":{start:{line:50,column:2},end:{line:50,column:27}},"16":{start:{line:59,column:1},end:{line:81,column:3}},"17":{start:{line:60,column:24},end:{line:60,column:29}},"18":{start:{line:62,column:14},end:{line:72,column:4}},"19":{start:{line:63,column:13},end:{line:63,column:32}},"20":{start:{line:65,column:3},end:{line:71,column:4}},"21":{start:{line:66,column:4},end:{line:66,column:27}},"22":{start:{line:68,column:4},end:{line:68,column:39}},"23":{start:{line:70,column:4},end:{line:70,column:14}},"24":{start:{line:74,column:2},end:{line:80,column:3}},"25":{start:{line:75,column:3},end:{line:75,column:22}},"26":{start:{line:77,column:3},end:{line:77,column:28}},"27":{start:{line:79,column:3},end:{line:79,column:16}},"28":{start:{line:88,column:1},end:{line:94,column:3}},"29":{start:{line:89,column:2},end:{line:93,column:5}},"30":{start:{line:90,column:13},end:{line:90,column:32}},"31":{start:{line:92,column:3},end:{line:92,column:49}},"32":{start:{line:101,column:1},end:{line:111,column:3}},"33":{start:{line:102,column:2},end:{line:110,column:5}},"34":{start:{line:103,column:13},end:{line:103,column:32}},"35":{start:{line:105,column:3},end:{line:109,column:4}},"36":{start:{line:106,column:4},end:{line:106,column:39}},"37":{start:{line:108,column:4},end:{line:108,column:14}},"38":{start:{line:113,column:1},end:{line:113,column:13}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:7,column:18},end:{line:7,column:19}},loc:{start:{line:7,column:40},end:{line:114,column:1}},line:7},"1":{name:"(anonymous_1)",decl:{start:{line:15,column:13},end:{line:15,column:14}},loc:{start:{line:15,column:25},end:{line:17,column:2}},line:15},"2":{name:"(anonymous_2)",decl:{start:{line:23,column:18},end:{line:23,column:19}},loc:{start:{line:23,column:33},end:{line:29,column:2}},line:23},"3":{name:"(anonymous_3)",decl:{start:{line:24,column:34},end:{line:24,column:35}},loc:{start:{line:24,column:50},end:{line:28,column:3}},line:24},"4":{name:"(anonymous_4)",decl:{start:{line:36,column:15},end:{line:36,column:16}},loc:{start:{line:36,column:31},end:{line:40,column:2}},line:36},"5":{name:"(anonymous_5)",decl:{start:{line:48,column:22},end:{line:48,column:23}},loc:{start:{line:48,column:45},end:{line:51,column:2}},line:48},"6":{name:"(anonymous_6)",decl:{start:{line:59,column:15},end:{line:59,column:16}},loc:{start:{line:59,column:36},end:{line:81,column:2}},line:59},"7":{name:"(anonymous_7)",decl:{start:{line:62,column:36},end:{line:62,column:37}},loc:{start:{line:62,column:50},end:{line:72,column:3}},line:62},"8":{name:"(anonymous_8)",decl:{start:{line:88,column:20},end:{line:88,column:21}},loc:{start:{line:88,column:35},end:{line:94,column:2}},line:88},"9":{name:"(anonymous_9)",decl:{start:{line:89,column:34},end:{line:89,column:35}},loc:{start:{line:89,column:50},end:{line:93,column:3}},line:89},"10":{name:"(anonymous_10)",decl:{start:{line:101,column:20},end:{line:101,column:21}},loc:{start:{line:101,column:41},end:{line:111,column:2}},line:101},"11":{name:"(anonymous_11)",decl:{start:{line:102,column:31},end:{line:102,column:32}},loc:{start:{line:102,column:45},end:{line:110,column:3}},line:102}},branchMap:{"0":{loc:{start:{line:10,column:20},end:{line:10,column:36}},type:"binary-expr",locations:[{start:{line:10,column:20},end:{line:10,column:30}},{start:{line:10,column:34},end:{line:10,column:36}}],line:10},"1":{loc:{start:{line:27,column:10},end:{line:27,column:45}},type:"binary-expr",locations:[{start:{line:27,column:10},end:{line:27,column:19}},{start:{line:27,column:23},end:{line:27,column:45}}],line:27},"2":{loc:{start:{line:65,column:3},end:{line:71,column:4}},type:"if",locations:[{start:{line:65,column:3},end:{line:71,column:4}},{start:{line:65,column:3},end:{line:71,column:4}}],line:65},"3":{loc:{start:{line:74,column:2},end:{line:80,column:3}},type:"if",locations:[{start:{line:74,column:2},end:{line:80,column:3}},{start:{line:74,column:2},end:{line:80,column:3}}],line:74},"4":{loc:{start:{line:92,column:10},end:{line:92,column:48}},type:"binary-expr",locations:[{start:{line:92,column:10},end:{line:92,column:19}},{start:{line:92,column:23},end:{line:92,column:48}}],line:92},"5":{loc:{start:{line:105,column:3},end:{line:109,column:4}},type:"if",locations:[{start:{line:105,column:3},end:{line:109,column:4}},{start:{line:105,column:3},end:{line:109,column:4}}],line:105}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0},b:{"0":[0,0],"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0]},inputSourceMap:{version:3,sources:["src/index.js"],names:["collection","_collection","list","findWhere","filter","key","Object","keys","val","item","insert","push","insertAtIndex","index","splice","upsert","wasInCollection","upsrt","map","it","assign","removeWhere","updateWhere"],mappings:";;;;;;kBAAe,UAAUA,UAAV,EAAsB;AAAA;;AACpC,MAAKC,WAAL,GAAmBD,cAAc,EAAjC;;AAEA;;;AAGA,MAAKE,IAAL,GAAY;AAAA,SAAM,MAAKD,WAAX;AAAA,EAAZ;;AAEA;;;;AAIA,MAAKE,SAAL,GAAiB;AAAA,SAAO,MAAKF,WAAL,CACrBG,MADqB,CACd,gBAAQ;AACf,OAAIC,MAAMC,OAAOC,IAAP,CAAYC,GAAZ,EAAiB,CAAjB,CAAV;;AAEA,UAAOC,KAAKJ,GAAL,KAAaI,KAAKJ,GAAL,MAAcG,IAAIH,GAAJ,CAAlC;AACA,GALqB,EAKnB,CALmB,CAAP;AAAA,EAAjB;;AAOA;;;;;AAKA,MAAKK,MAAL,GAAc,gBAAQ;AACpB,QAAKT,WAAL,CAAiBU,IAAjB,CAAsBF,IAAtB;;AAEA,SAAO,MAAKR,WAAZ;AACD,EAJD;;AAMA;;;;;;AAMA,MAAKW,aAAL,GAAqB,UAACH,IAAD,EAAOI,KAAP,EAAiB;AACrC,QAAKZ,WAAL,CAAiBa,MAAjB,CAAwBD,KAAxB,EAA8B,CAA9B,EAAgCJ,IAAhC;AACA,SAAO,MAAKR,WAAZ;AACA,EAHD;;AAKA;;;;;;AAMA,MAAKc,MAAL,GAAc,UAACP,GAAD,EAAKC,IAAL,EAAc;AAC1B,MAAIO,kBAAkB,KAAtB;;AAEA,MAAMC,QAAQ,MAAKhB,WAAL,CAAiBiB,GAAjB,CAAqB,cAAM;AACxC,OAAIb,MAAMC,OAAOC,IAAP,CAAYC,GAAZ,EAAiB,CAAjB,CAAV;;AAEA,OAAGW,GAAGd,GAAH,MAAYG,IAAIH,GAAJ,CAAf,EAAwB;AACvBW,sBAAkB,IAAlB;;AAED,WAAQV,OAAOc,MAAP,CAAc,EAAd,EAAiBD,EAAjB,EAAoBV,IAApB,CAAR;AACC,IAJD,MAIK;AACJ,WAAOU,EAAP;AACA;AACD,GAVa,CAAd;;AAaA,MAAG,CAACH,eAAJ,EAAoB;AACnB,SAAKN,MAAL,CAAYD,IAAZ;;AAEA,UAAO,MAAKR,WAAZ;AACA,GAJD,MAIK;AACJ,UAAOgB,KAAP;AACA;AACF,EAvBD;;AAyBA;;;;;AAKE,MAAKI,WAAL,GAAmB;AAAA,SAAO,MAAKpB,WAAL,CACzBG,MADyB,CAClB,gBAAQ;AACf,OAAIC,MAAMC,OAAOC,IAAP,CAAYC,GAAZ,EAAiB,CAAjB,CAAV;;AAEA,UAAOC,KAAKJ,GAAL,KAAa,EAAEI,KAAKJ,GAAL,MAAcG,IAAIH,GAAJ,CAAhB,CAApB;AACA,GALyB,CAAP;AAAA,EAAnB;;AAOF;;;;;AAKA,MAAKiB,WAAL,GAAmB,UAACd,GAAD,EAAKC,IAAL;AAAA,SAAc,MAAKR,WAAL,CAAiBiB,GAAjB,CAAqB,cAAM;AAC1D,OAAIb,MAAMC,OAAOC,IAAP,CAAYC,GAAZ,EAAiB,CAAjB,CAAV;;AAEA,OAAGW,GAAGd,GAAH,MAAYG,IAAIH,GAAJ,CAAf,EAAwB;AACvB,WAAQC,OAAOc,MAAP,CAAc,EAAd,EAAiBD,EAAjB,EAAoBV,IAApB,CAAR;AACA,IAFD,MAEK;AACJ,WAAOU,EAAP;AACA;AACF,GARgC,CAAd;AAAA,EAAnB;;AAUA,QAAO,IAAP;AACA,C",file:"index.js",sourceRoot:"/Users/computer/Documents/_Projects/myNpmPackages/collo",sourcesContent:["export default function (collection) {\n\tthis._collection = collection || [];\n\n\t/**\n\t * Return the current collection\n\t */\n\tthis.list = () => this._collection;\n\n\t/**\n\t * Return the item where the key/al match\n\t * @param val\n\t */\n\tthis.findWhere = val => this._collection\n\t  .filter(item => {\n\t\t  let key = Object.keys(val)[0];\n\n\t\t  return item[key] && item[key] === val[key];\n\t  })[0];\n\n\t/**\n\t * Insert the item at the end of the stack\n\t * @param item\n\t * @returns {*|Array}\n\t */\n\tthis.insert = item => {\n\t  this._collection.push(item);\n\n\t  return this._collection;\n\t};\n\n\t/**\n\t * Splice an item in at an exact position in the collection\n\t * @param item\n\t * @param index\n\t * @returns {*|Array}\n\t */\n\tthis.insertAtIndex = (item, index) => {\n\t\tthis._collection.splice(index,0,item);\n\t\treturn this._collection;\n\t};\n\n\t/**\n\t * If the item exists, perform an dupdate, otherwise insert\n\t * @param key\n\t * @param item\n\t * @returns {*}\n\t */\n\tthis.upsert = (val,item) => {\n\t  let wasInCollection = false;\n\n\t  const upsrt = this._collection.map(it => {\n\t\t  let key = Object.keys(val)[0];\n\n\t\t  if(it[key] === val[key]){\n\t\t\t  wasInCollection = true;\n\n\t\t\t return  Object.assign({},it,item);\n\t\t  }else{\n\t\t\t  return it;\n\t\t  }\n\t  });\n\n\n\t  if(!wasInCollection){\n\t\t  this.insert(item);\n\n\t\t  return this._collection;\n\t  }else{\n\t\t  return upsrt;\n\t  }\n\t};\n\n\t/**\n\t * Remove where the key and value match\n\t * @param key\n\t * @param value\n\t */\n  \tthis.removeWhere = val => this._collection\n\t  .filter(item => {\n\t\t  let key = Object.keys(val)[0];\n\n\t\t  return item[key] && !(item[key] === val[key]);\n\t  });\n\n\t/**\n\t * Perform a normal update if the key and value match\n\t * @param key\n\t * @param item\n\t */\n\tthis.updateWhere = (val,item) => this._collection.map(it => {\n\t  let key = Object.keys(val)[0];\n\n\t  if(it[key] === val[key]){\n\t\t  return  Object.assign({},it,item);\n\t  }else{\n\t\t  return it;\n\t  }\n\t});\n\n\treturn this;\n}"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_1xfx4nf6ru.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});cov_1xfx4nf6ru.s[1]++;exports.default=function(collection){cov_1xfx4nf6ru.f[0]++;var _this=(cov_1xfx4nf6ru.s[2]++,this);cov_1xfx4nf6ru.s[3]++;this._collection=(cov_1xfx4nf6ru.b[0][0]++,collection)||(cov_1xfx4nf6ru.b[0][1]++,[]);/**
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
  * @param key
  * @param item
  * @returns {*}
  */cov_1xfx4nf6ru.s[16]++;this.upsert=function(val,item){cov_1xfx4nf6ru.f[6]++;var wasInCollection=(cov_1xfx4nf6ru.s[17]++,false);var upsrt=(cov_1xfx4nf6ru.s[18]++,_this._collection.map(function(it){cov_1xfx4nf6ru.f[7]++;var key=(cov_1xfx4nf6ru.s[19]++,Object.keys(val)[0]);cov_1xfx4nf6ru.s[20]++;if(it[key]===val[key]){cov_1xfx4nf6ru.b[2][0]++;cov_1xfx4nf6ru.s[21]++;wasInCollection=true;cov_1xfx4nf6ru.s[22]++;return Object.assign({},it,item);}else{cov_1xfx4nf6ru.b[2][1]++;cov_1xfx4nf6ru.s[23]++;return it;}}));cov_1xfx4nf6ru.s[24]++;if(!wasInCollection){cov_1xfx4nf6ru.b[3][0]++;cov_1xfx4nf6ru.s[25]++;_this.insert(item);cov_1xfx4nf6ru.s[26]++;return _this._collection;}else{cov_1xfx4nf6ru.b[3][1]++;cov_1xfx4nf6ru.s[27]++;return upsrt;}};/**
  * Remove where the key and value match
  * @param key
  * @param value
  */cov_1xfx4nf6ru.s[28]++;this.removeWhere=function(val){cov_1xfx4nf6ru.f[8]++;cov_1xfx4nf6ru.s[29]++;return _this._collection.filter(function(item){cov_1xfx4nf6ru.f[9]++;var key=(cov_1xfx4nf6ru.s[30]++,Object.keys(val)[0]);cov_1xfx4nf6ru.s[31]++;return(cov_1xfx4nf6ru.b[4][0]++,item[key])&&(cov_1xfx4nf6ru.b[4][1]++,!(item[key]===val[key]));});};/**
  * Perform a normal update if the key and value match
  * @param key
  * @param item
  */cov_1xfx4nf6ru.s[32]++;this.updateWhere=function(val,item){cov_1xfx4nf6ru.f[10]++;cov_1xfx4nf6ru.s[33]++;return _this._collection.map(function(it){cov_1xfx4nf6ru.f[11]++;var key=(cov_1xfx4nf6ru.s[34]++,Object.keys(val)[0]);cov_1xfx4nf6ru.s[35]++;if(it[key]===val[key]){cov_1xfx4nf6ru.b[5][0]++;cov_1xfx4nf6ru.s[36]++;return Object.assign({},it,item);}else{cov_1xfx4nf6ru.b[5][1]++;cov_1xfx4nf6ru.s[37]++;return it;}});};cov_1xfx4nf6ru.s[38]++;return this;};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("chai");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVubmVyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrL2Jvb3RzdHJhcCA1YzI0YWNiMWM5OWYxYWM2NWJjNCIsIi9Vc2Vycy9jb21wdXRlci9Eb2N1bWVudHMvX1Byb2plY3RzL215TnBtUGFja2FnZXMvY29sbG8vdGVzdC9zcGVjcy9pbmRleC5zcGVjLmpzIiwiL1VzZXJzL2NvbXB1dGVyL0RvY3VtZW50cy9fUHJvamVjdHMvbXlOcG1QYWNrYWdlcy9jb2xsby90ZXN0IC9eXFwuXFwvc3BlY3MuKiQvIiwiZXh0ZXJuYWwgXCJmc1wiIiwiZXh0ZXJuYWwgXCJmcy1maWxlLXRyZWVcIiIsIi9Vc2Vycy9jb21wdXRlci9Eb2N1bWVudHMvX1Byb2plY3RzL215TnBtUGFja2FnZXMvY29sbG8vdGVzdC9ydW5uZXIuanMiLCIvVXNlcnMvY29tcHV0ZXIvRG9jdW1lbnRzL19Qcm9qZWN0cy9teU5wbVBhY2thZ2VzL2NvbGxvL3NyYy9pbmRleC5qcyIsImV4dGVybmFsIFwiY2hhaVwiIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNWMyNGFjYjFjOTlmMWFjNjViYzQiLCJpbXBvcnQgeyBleHBlY3QgfSBmcm9tICdjaGFpJztcbmltcG9ydCBDb2xsbyBmcm9tICdTcmMvaW5kZXguanMnO1xuXG5jb25zdCBjID0gW1xuICAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgbmFtZTogJ0FkYW0nXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMixcbiAgICAgIG5hbWU6ICdKdWxpYW5hJ1xuICAgIH1cbl07XG5cbmNvbnN0IGNvbGxlY3Rpb24gPSBuZXcgQ29sbG8oYyk7XG5cbi8vIGxpc3RcbmRlc2NyaWJlKCdUaGUgbGlzdCBmbicsICgpID0+IHtcbiAgaXQoJ3Nob3VsZCByZXR1cm4gdGhlIHNhbWUgY29sbGVjdGlvbicsICgpID0+IHtcbiAgICBleHBlY3QoY29sbGVjdGlvbi5saXN0KCkpLnRvLmVxdWFsKGMpO1xuICB9KTtcbn0pO1xuXG4vLyBmaW5kV2hlcmVcbmRlc2NyaWJlKCdUaGUgZmluZFdoZXJlIGZuJywgKCkgPT4ge1xuICBpdCgnc2hvdWxkIHJldHVybiB0aGUgQWRhbSBvYmplY3QnLCAoKSA9PiB7XG4gICAgICBleHBlY3QoY29sbGVjdGlvbi5maW5kV2hlcmUoe2lkOjF9KSkudG8uZGVlcC5lcXVhbCh7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuYW1lOiAnQWRhbSdcbiAgICAgIH0pO1xuICAgIH0pO1xufSk7XG5cbi8vIGluc2VydFxuZGVzY3JpYmUoJ1RoZSBpbnNlcnQgZm4nLCAoKSA9PiB7XG5cdGl0KCdzaG91bGQgcmV0dXJuIHRoZSBjb2xsZWN0aW9uIHdpdGggb25lIG1vcmUgaXRlbSBpbiBpdCcsICgpID0+IHtcblx0XHRsZXQgX2MgPSBjO1xuXG5cdFx0X2MucHVzaCh7XG5cdFx0XHRpZDogMyxcblx0XHRcdG5hbWU6ICdQYWtpIFBha2knXG5cdFx0fSk7XG5cblx0XHRleHBlY3QoY29sbGVjdGlvbi5pbnNlcnQoe1xuXHRcdFx0aWQ6IDMsXG5cdFx0XHRuYW1lOiAnUGFraSBQYWtpJ1xuXHRcdH0pKS50by5kZWVwLmVxdWFsKF9jKTtcblx0fSk7XG59KTtcblxuXG4vLyBpbnNlcnRBdEluZGV4XG5kZXNjcmliZSgnVGhlIGluc2VydEF0SW5kZXggZm4nLCAoKSA9PiB7XG5cdGl0KCdzaG91bGQgcmV0dXJuIHRoZSBzYW1lIGNvbGxlY3Rpb24gYXMgdGhlIHRlc3QnLCAoKSA9PiB7XG5cdFx0bGV0IF9jID0gYztcblx0XHRjb25zdCBpbmRleCA9IDE7XG5cblx0XHRfYy5zcGxpY2UoaW5kZXgsMCx7XG5cdFx0XHRpZDogNSxcblx0XHRcdG5hbWU6ICdNaXJvbSdcblx0XHR9KTtcblxuXHRcdGV4cGVjdChjb2xsZWN0aW9uLmluc2VydEF0SW5kZXgoe1xuXHRcdFx0aWQ6IDMsXG5cdFx0XHRuYW1lOiAnUGFraSBQYWtpJ1xuXHRcdH0saW5kZXgpKS50by5kZWVwLmVxdWFsKF9jKTtcblx0fSk7XG59KTtcblxuLy8gdXBzZXJ0IG5vdCBmb3VuZFxuZGVzY3JpYmUoJ1RoZSB1cHNlcnQgW05PIGZvdW5kIGl0ZW1dIGZuJywgKCkgPT4ge1xuXHRpdCgnc2hvdWxkIHJldHVybiB0aGUgc2FtZSBjb2xsZWN0aW9uIGFzIHRoZSBpbnB1dCBwbHVzIHRoZSBuZXcgaXRlbScsICgpID0+IHtcblx0XHRjb25zdCBjb2xsZWN0aW9uID0gbmV3IENvbGxvKFtcblx0XHRcdHtcblx0XHRcdFx0aWQ6IDEsXG5cdFx0XHRcdG5hbWU6ICdBZGFtJ1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aWQ6IDIsXG5cdFx0XHRcdG5hbWU6ICdKdWxpYW5hJ1xuXHRcdFx0fVxuXHRcdF0pO1xuXG5cdFx0bGV0IF9jID0gW1xuXHRcdFx0e1xuXHRcdFx0XHRpZDogMSxcblx0XHRcdFx0bmFtZTogJ0FkYW0nXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRpZDogMixcblx0XHRcdFx0bmFtZTogJ0p1bGlhbmEnXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRpZDogMyxcblx0XHRcdFx0bmFtZTogJ1Bha2kgUGFraSdcblx0XHRcdH1cblx0XHRdO1xuXG5cdFx0ZXhwZWN0KGNvbGxlY3Rpb24udXBzZXJ0KHtpZDozfSx7XG5cdFx0XHRpZDogMyxcblx0XHRcdG5hbWU6ICdQYWtpIFBha2knXG5cdFx0fSkpLnRvLmRlZXAuZXF1YWwoX2MpO1xuXHR9KTtcbn0pO1xuXG4vLyB1cHNlcnQgaXRlbSBGT1VORFxuZGVzY3JpYmUoJ1RoZSB1cHNlcnQgW0l0ZW0gRk9VTkRdIGZuJywgKCkgPT4ge1xuXHRpdCgnc2hvdWxkIHJldHVybiB0aGUgc2FtZSBjb2xsZWN0aW9uIGFzIHRoZSBpbnB1dCBwbHVzIHRoZSBuZXcgaXRlbScsICgpID0+IHtcblx0XHRjb25zdCBjb2xsZWN0aW9uID0gbmV3IENvbGxvKFtcblx0XHRcdHtcblx0XHRcdFx0aWQ6IDEsXG5cdFx0XHRcdG5hbWU6ICdBZGFtJ1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aWQ6IDIsXG5cdFx0XHRcdG5hbWU6ICdKdWxpYW5hJ1xuXHRcdFx0fVxuXHRcdF0pO1xuXG5cdFx0bGV0IF9jID0gW1xuXHRcdFx0e1xuXHRcdFx0XHRpZDogMSxcblx0XHRcdFx0bmFtZTogJ0FkYW0nXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRpZDogMixcblx0XHRcdFx0bmFtZTogJ0p1bGlhbmEgJiBNaWxhJ1xuXHRcdFx0fVxuXHRcdF07XG5cblx0XHRleHBlY3QoY29sbGVjdGlvbi51cHNlcnQoe2lkOjJ9LHtcblx0XHRcdGlkOiAyLFxuXHRcdFx0bmFtZTogJ0p1bGlhbmEgJiBNaWxhJ1xuXHRcdH0pKS50by5kZWVwLmVxdWFsKF9jKTtcblx0fSk7XG59KTtcblxuLy8gdXBkYXRlV2hlcmVcbmRlc2NyaWJlKCdUaGUgdXBkYXRlV2hlcmUgZm4nLCAoKSA9PiB7XG5cdGl0KCdzaG91bGQgcmV0dXJuIHRoZSBzYW1lIGNvbGxlY3Rpb24gYXMgdGhlIHRlc3QnLCAoKSA9PiB7XG5cdFx0Y29uc3QgY29sbGVjdGlvbiA9IG5ldyBDb2xsbyhbXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiAxLFxuXHRcdFx0XHRuYW1lOiAnQWRhbSdcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiAyLFxuXHRcdFx0XHRuYW1lOiAnSnVsaWFuYSdcblx0XHRcdH1cblx0XHRdKTtcblxuXHRcdGxldCBfYyA9IFtcblx0XHRcdHtcblx0XHRcdFx0aWQ6IDEsXG5cdFx0XHRcdG5hbWU6ICdBZGFtJ1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aWQ6IDIsXG5cdFx0XHRcdG5hbWU6ICdKdWxpYW5hICYgTWlsYSdcblx0XHRcdH1cblx0XHRdO1xuXG5cdFx0ZXhwZWN0KGNvbGxlY3Rpb24udXBkYXRlV2hlcmUoe2lkOjJ9LHtcblx0XHRcdGlkOiAyLFxuXHRcdFx0bmFtZTogJ0p1bGlhbmEgJiBNaWxhJ1xuXHRcdH0pKS50by5kZWVwLmVxdWFsKF9jKTtcblx0fSk7XG59KTtcblxuLy8gcmVtb3ZlV2hlcmVcbmRlc2NyaWJlKCdUaGUgcmVtb3ZlV2hlcmUgZm4nLCAoKSA9PiB7XG5cdGl0KCdzaG91bGQgcmV0dXJuIHRoZSBzYW1lIGNvbGxlY3Rpb24gYXMgdGhlIHRlc3QnLCAoKSA9PiB7XG5cdFx0bGV0IF9jID0gYztcblx0XHRjb25zdCBrZXkgPSAnaWQnLFxuXHRcdFx0dmFsdWUgPSAzO1xuXG5cdFx0Y29uc3QgY29sbG8gPSBfYy5maWx0ZXIoaXRlbSA9PiBpdGVtW2tleV0gJiYgIShpdGVtW2tleV0gPT09IHZhbHVlKSk7XG5cblx0XHRleHBlY3QoY29sbGVjdGlvbi5yZW1vdmVXaGVyZSh7aWQ6M30pKS50by5kZWVwLmVxdWFsKGNvbGxvKTtcblx0fSk7XG59KTtcblxuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NwZWNzL2luZGV4LnNwZWMuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG1hcCA9IHtcblx0XCIuL3NwZWNzL2luZGV4LnNwZWNcIjogMCxcblx0XCIuL3NwZWNzL2luZGV4LnNwZWMuanNcIjogMFxufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpO1xuXHRyZXR1cm4gaWQ7XG59O1xud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDE7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLiBeXFwuXFwvc3BlY3MuKiRcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJmc1wiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzLWZpbGUtdHJlZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImZzLWZpbGUtdHJlZVwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBmc0ZpbGVUcmVlIGZyb20gJ2ZzLWZpbGUtdHJlZSc7XG5pbXBvcnQgZnMgICAgICAgICBmcm9tICdmcyc7XG5cblxuY29uc3QgdGVzdEZvbGRlciAgID0gJ3Rlc3Qvc3BlY3MnO1xuXG5idWlsZFRyZWUoZnNGaWxlVHJlZS5zeW5jKHByb2Nlc3MuY3dkKCkgKyAnLycgKyB0ZXN0Rm9sZGVyKSwgdGVzdEZvbGRlcik7XG5cbmZ1bmN0aW9uIGJ1aWxkVHJlZSh0cmVlLCByb290KSB7XG4gICAgX2J1aWxkVHJlZSh0cmVlLCByb290LCAnLycpO1xufVxuXG5mdW5jdGlvbiBfYnVpbGRUcmVlKHRyZWUsIHJvb3QsIHBhdGgpIHtcbiAgICBmb3IobGV0IGl0ZW0gaW4gdHJlZSkge1xuICAgICAgICBpZih0cmVlLmhhc093blByb3BlcnR5KGl0ZW0pKSB7XG4gICAgICAgICAgICBsZXQgaXRlbVN0YXRzID0gZnMubHN0YXRTeW5jKCcuLycgKyByb290ICsgcGF0aCArIGl0ZW0pO1xuXG4gICAgICAgICAgICBpZihpdGVtU3RhdHMuaXNEaXJlY3RvcnkoKSkge1xuICAgICAgICAgICAgICAgIGRlc2NyaWJlKGl0ZW0gKyAnLycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgX2J1aWxkVHJlZSh0cmVlW2l0ZW1dLCByb290LCBwYXRoICsgaXRlbSArICcvJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYoaXRlbVN0YXRzLmlzRmlsZSgpKSB7XG4gICAgICAgICAgICAgICAgZGVzY3JpYmUoaXRlbSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZmlsZSA9IHJlcXVpcmUoJy4vc3BlY3MnICsgcGF0aCArIGl0ZW0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBmaWxlLmRlZmF1bHQgPT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlLmRlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3J1bm5lci5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoY29sbGVjdGlvbikge1xuXHR2YXIgX3RoaXMgPSB0aGlzO1xuXG5cdHRoaXMuX2NvbGxlY3Rpb24gPSBjb2xsZWN0aW9uIHx8IFtdO1xuXG5cdC8qKlxuICAqIFJldHVybiB0aGUgY3VycmVudCBjb2xsZWN0aW9uXG4gICovXG5cdHRoaXMubGlzdCA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gX3RoaXMuX2NvbGxlY3Rpb247XG5cdH07XG5cblx0LyoqXG4gICogUmV0dXJuIHRoZSBpdGVtIHdoZXJlIHRoZSBrZXkvYWwgbWF0Y2hcbiAgKiBAcGFyYW0gdmFsXG4gICovXG5cdHRoaXMuZmluZFdoZXJlID0gZnVuY3Rpb24gKHZhbCkge1xuXHRcdHJldHVybiBfdGhpcy5fY29sbGVjdGlvbi5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBrZXkgPSBPYmplY3Qua2V5cyh2YWwpWzBdO1xuXG5cdFx0XHRyZXR1cm4gaXRlbVtrZXldICYmIGl0ZW1ba2V5XSA9PT0gdmFsW2tleV07XG5cdFx0fSlbMF07XG5cdH07XG5cblx0LyoqXG4gICogSW5zZXJ0IHRoZSBpdGVtIGF0IHRoZSBlbmQgb2YgdGhlIHN0YWNrXG4gICogQHBhcmFtIGl0ZW1cbiAgKiBAcmV0dXJucyB7KnxBcnJheX1cbiAgKi9cblx0dGhpcy5pbnNlcnQgPSBmdW5jdGlvbiAoaXRlbSkge1xuXHRcdF90aGlzLl9jb2xsZWN0aW9uLnB1c2goaXRlbSk7XG5cblx0XHRyZXR1cm4gX3RoaXMuX2NvbGxlY3Rpb247XG5cdH07XG5cblx0LyoqXG4gICogU3BsaWNlIGFuIGl0ZW0gaW4gYXQgYW4gZXhhY3QgcG9zaXRpb24gaW4gdGhlIGNvbGxlY3Rpb25cbiAgKiBAcGFyYW0gaXRlbVxuICAqIEBwYXJhbSBpbmRleFxuICAqIEByZXR1cm5zIHsqfEFycmF5fVxuICAqL1xuXHR0aGlzLmluc2VydEF0SW5kZXggPSBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcblx0XHRfdGhpcy5fY29sbGVjdGlvbi5zcGxpY2UoaW5kZXgsIDAsIGl0ZW0pO1xuXHRcdHJldHVybiBfdGhpcy5fY29sbGVjdGlvbjtcblx0fTtcblxuXHQvKipcbiAgKiBJZiB0aGUgaXRlbSBleGlzdHMsIHBlcmZvcm0gYW4gZHVwZGF0ZSwgb3RoZXJ3aXNlIGluc2VydFxuICAqIEBwYXJhbSBrZXlcbiAgKiBAcGFyYW0gaXRlbVxuICAqIEByZXR1cm5zIHsqfVxuICAqL1xuXHR0aGlzLnVwc2VydCA9IGZ1bmN0aW9uICh2YWwsIGl0ZW0pIHtcblx0XHR2YXIgd2FzSW5Db2xsZWN0aW9uID0gZmFsc2U7XG5cblx0XHR2YXIgdXBzcnQgPSBfdGhpcy5fY29sbGVjdGlvbi5tYXAoZnVuY3Rpb24gKGl0KSB7XG5cdFx0XHR2YXIga2V5ID0gT2JqZWN0LmtleXModmFsKVswXTtcblxuXHRcdFx0aWYgKGl0W2tleV0gPT09IHZhbFtrZXldKSB7XG5cdFx0XHRcdHdhc0luQ29sbGVjdGlvbiA9IHRydWU7XG5cblx0XHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGl0LCBpdGVtKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBpdDtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGlmICghd2FzSW5Db2xsZWN0aW9uKSB7XG5cdFx0XHRfdGhpcy5pbnNlcnQoaXRlbSk7XG5cblx0XHRcdHJldHVybiBfdGhpcy5fY29sbGVjdGlvbjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHVwc3J0O1xuXHRcdH1cblx0fTtcblxuXHQvKipcbiAgKiBSZW1vdmUgd2hlcmUgdGhlIGtleSBhbmQgdmFsdWUgbWF0Y2hcbiAgKiBAcGFyYW0ga2V5XG4gICogQHBhcmFtIHZhbHVlXG4gICovXG5cdHRoaXMucmVtb3ZlV2hlcmUgPSBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIF90aGlzLl9jb2xsZWN0aW9uLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGtleSA9IE9iamVjdC5rZXlzKHZhbClbMF07XG5cblx0XHRcdHJldHVybiBpdGVtW2tleV0gJiYgIShpdGVtW2tleV0gPT09IHZhbFtrZXldKTtcblx0XHR9KTtcblx0fTtcblxuXHQvKipcbiAgKiBQZXJmb3JtIGEgbm9ybWFsIHVwZGF0ZSBpZiB0aGUga2V5IGFuZCB2YWx1ZSBtYXRjaFxuICAqIEBwYXJhbSBrZXlcbiAgKiBAcGFyYW0gaXRlbVxuICAqL1xuXHR0aGlzLnVwZGF0ZVdoZXJlID0gZnVuY3Rpb24gKHZhbCwgaXRlbSkge1xuXHRcdHJldHVybiBfdGhpcy5fY29sbGVjdGlvbi5tYXAoZnVuY3Rpb24gKGl0KSB7XG5cdFx0XHR2YXIga2V5ID0gT2JqZWN0LmtleXModmFsKVswXTtcblxuXHRcdFx0aWYgKGl0W2tleV0gPT09IHZhbFtrZXldKSB7XG5cdFx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpdCwgaXRlbSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gaXQ7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjaGFpXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY2hhaVwiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDeExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDbkJBO0FBQ0E7Ozs7O0FDREE7QUFDQTs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBakJBO0FBQ0E7QUFBQTtBQUFBO0FBaUJBO0FBQ0E7QUFDQTs7Ozs7O0FDOUJBOztBQUlBOzs7QUFBQTs7OztBQUFBOzs7OztBQUFBOzs7OztBQUFBOzs7O0FBQUE7Ozs7QUFBQTtBQUNBOzs7OztBQ1BBO0FBQ0E7OyIsInNvdXJjZVJvb3QiOiIifQ==