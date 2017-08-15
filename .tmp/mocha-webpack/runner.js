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
  ],
  collection = new __WEBPACK_IMPORTED_MODULE_1_Src_index_js__["Collection"](c);

console.log(collection);

// list
describe('The list fn ', () => {
  it('should return the same collection', () => {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(collection.list()).to.equal(c);
  });
});

// findWhere
describe('The findWhere fn ', () => {
  it('should return the Adam object', () => {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(collection.findWhere('id',1)).to.deep.equal({
    id: 1,
    name: 'Adam'
  });
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
var cov_1xfx4nf6ru=function(){var path="/Users/computer/Documents/_Projects/myNpmPackages/collo/src/index.js",hash="563b2b15e98f2cdb5a5296f2d7f56d819b2150b6",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/computer/Documents/_Projects/myNpmPackages/collo/src/index.js",statementMap:{"0":{start:{line:3,column:0},end:{line:5,column:3}},"1":{start:{line:6,column:17},end:{line:24,column:1}},"2":{start:{line:8,column:2},end:{line:10,column:4}},"3":{start:{line:9,column:4},end:{line:9,column:22}},"4":{start:{line:12,column:2},end:{line:16,column:4}},"5":{start:{line:13,column:4},end:{line:15,column:10}},"6":{start:{line:14,column:6},end:{line:14,column:46}},"7":{start:{line:18,column:2},end:{line:18,column:31}},"8":{start:{line:19,column:2},end:{line:19,column:31}},"9":{start:{line:20,column:2},end:{line:20,column:31}},"10":{start:{line:21,column:2},end:{line:21,column:31}},"11":{start:{line:23,column:2},end:{line:23,column:14}}},fnMap:{"0":{name:"Collection",decl:{start:{line:6,column:47},end:{line:6,column:57}},loc:{start:{line:6,column:70},end:{line:24,column:1}},line:6},"1":{name:"(anonymous_1)",decl:{start:{line:8,column:14},end:{line:8,column:15}},loc:{start:{line:8,column:26},end:{line:10,column:3}},line:8},"2":{name:"(anonymous_2)",decl:{start:{line:12,column:19},end:{line:12,column:20}},loc:{start:{line:12,column:41},end:{line:16,column:3}},line:12},"3":{name:"(anonymous_3)",decl:{start:{line:13,column:29},end:{line:13,column:30}},loc:{start:{line:13,column:45},end:{line:15,column:5}},line:13},"4":{name:"(anonymous_4)",decl:{start:{line:18,column:16},end:{line:18,column:17}},loc:{start:{line:18,column:28},end:{line:18,column:30}},line:18},"5":{name:"(anonymous_5)",decl:{start:{line:19,column:16},end:{line:19,column:17}},loc:{start:{line:19,column:28},end:{line:19,column:30}},line:19},"6":{name:"(anonymous_6)",decl:{start:{line:20,column:16},end:{line:20,column:17}},loc:{start:{line:20,column:28},end:{line:20,column:30}},line:20},"7":{name:"(anonymous_7)",decl:{start:{line:21,column:16},end:{line:21,column:17}},loc:{start:{line:21,column:28},end:{line:21,column:30}},line:21}},branchMap:{"0":{loc:{start:{line:14,column:13},end:{line:14,column:45}},type:"binary-expr",locations:[{start:{line:14,column:13},end:{line:14,column:22}},{start:{line:14,column:26},end:{line:14,column:45}}],line:14}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0},b:{"0":[0,0]},inputSourceMap:{version:3,sources:["src/index.js"],names:["Collection","collection","list","findWhere","key","value","filter","item","insert","upsert","remove","update"],mappings:";;;;;AACO,IAAMA,kCAAa,SAAbA,UAAa,CAAUC,UAAV,EAAqB;;AAE7C,OAAKC,IAAL,GAAY;AAAA,WAAID,UAAJ;AAAA,GAAZ;;AAEA,OAAKE,SAAL,GAAiB,UAACC,GAAD,EAAKC,KAAL;AAAA,WAAaJ,WACzBK,MADyB,CAClB;AAAA,aAAMC,KAAKH,GAAL,KAAaG,KAAKH,GAAL,MAAcC,KAAjC;AAAA,KADkB,EACsB,CADtB,CAAb;AAAA,GAAjB;;AAGA,OAAKG,MAAL,GAAc,YAAI,CAAE,CAApB;AACA,OAAKC,MAAL,GAAc,YAAI,CAAE,CAApB;AACA,OAAKC,MAAL,GAAc,YAAI,CAAE,CAApB;AACA,OAAKC,MAAL,GAAc,YAAI,CAAE,CAApB;;AAEA,SAAO,IAAP;AACD,CAbM",file:"index.js",sourceRoot:"/Users/computer/Documents/_Projects/myNpmPackages/collo",sourcesContent:["\nexport const Collection = function (collection){\n\n  this.list = ()=>collection;\n\n  this.findWhere = (key,value)=>collection\n      .filter(item=>item[key] && item[key] === value)[0];\n\n  this.insert = ()=>{};\n  this.upsert = ()=>{};\n  this.remove = ()=>{};\n  this.update = ()=>{};\n\n  return this;\n};\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_1xfx4nf6ru.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});var Collection=(cov_1xfx4nf6ru.s[1]++,exports.Collection=function Collection(collection){cov_1xfx4nf6ru.f[0]++;cov_1xfx4nf6ru.s[2]++;this.list=function(){cov_1xfx4nf6ru.f[1]++;cov_1xfx4nf6ru.s[3]++;return collection;};cov_1xfx4nf6ru.s[4]++;this.findWhere=function(key,value){cov_1xfx4nf6ru.f[2]++;cov_1xfx4nf6ru.s[5]++;return collection.filter(function(item){cov_1xfx4nf6ru.f[3]++;cov_1xfx4nf6ru.s[6]++;return(cov_1xfx4nf6ru.b[0][0]++,item[key])&&(cov_1xfx4nf6ru.b[0][1]++,item[key]===value);})[0];};cov_1xfx4nf6ru.s[7]++;this.insert=function(){cov_1xfx4nf6ru.f[4]++;};cov_1xfx4nf6ru.s[8]++;this.upsert=function(){cov_1xfx4nf6ru.f[5]++;};cov_1xfx4nf6ru.s[9]++;this.remove=function(){cov_1xfx4nf6ru.f[6]++;};cov_1xfx4nf6ru.s[10]++;this.update=function(){cov_1xfx4nf6ru.f[7]++;};cov_1xfx4nf6ru.s[11]++;return this;});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("chai");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVubmVyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrL2Jvb3RzdHJhcCBiMDg2YWYwZWY4MzJmMWNlMTRjMCIsIi9Vc2Vycy9jb21wdXRlci9Eb2N1bWVudHMvX1Byb2plY3RzL215TnBtUGFja2FnZXMvY29sbG8vdGVzdC9zcGVjcy9pbmRleC5zcGVjLmpzIiwiL1VzZXJzL2NvbXB1dGVyL0RvY3VtZW50cy9fUHJvamVjdHMvbXlOcG1QYWNrYWdlcy9jb2xsby90ZXN0IC9eXFwuXFwvc3BlY3MuKiQvIiwiZXh0ZXJuYWwgXCJmc1wiIiwiZXh0ZXJuYWwgXCJmcy1maWxlLXRyZWVcIiIsIi9Vc2Vycy9jb21wdXRlci9Eb2N1bWVudHMvX1Byb2plY3RzL215TnBtUGFja2FnZXMvY29sbG8vdGVzdC9ydW5uZXIuanMiLCIvVXNlcnMvY29tcHV0ZXIvRG9jdW1lbnRzL19Qcm9qZWN0cy9teU5wbVBhY2thZ2VzL2NvbGxvL3NyYy9pbmRleC5qcyIsImV4dGVybmFsIFwiY2hhaVwiIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYjA4NmFmMGVmODMyZjFjZTE0YzAiLCJpbXBvcnQgeyBleHBlY3QgfSBmcm9tICdjaGFpJztcblxuaW1wb3J0IHtDb2xsZWN0aW9ufSBmcm9tICdTcmMvaW5kZXguanMnO1xuXG5jb25zdCBjID0gW1xuICAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgbmFtZTogJ0FkYW0nXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMixcbiAgICAgIG5hbWU6ICdKdWxpYW5hJ1xuICAgIH1cbiAgXSxcbiAgY29sbGVjdGlvbiA9IG5ldyBDb2xsZWN0aW9uKGMpO1xuXG5jb25zb2xlLmxvZyhjb2xsZWN0aW9uKTtcblxuLy8gbGlzdFxuZGVzY3JpYmUoJ1RoZSBsaXN0IGZuICcsICgpID0+IHtcbiAgaXQoJ3Nob3VsZCByZXR1cm4gdGhlIHNhbWUgY29sbGVjdGlvbicsICgpID0+IHtcbiAgICBleHBlY3QoY29sbGVjdGlvbi5saXN0KCkpLnRvLmVxdWFsKGMpO1xuICB9KTtcbn0pO1xuXG4vLyBmaW5kV2hlcmVcbmRlc2NyaWJlKCdUaGUgZmluZFdoZXJlIGZuICcsICgpID0+IHtcbiAgaXQoJ3Nob3VsZCByZXR1cm4gdGhlIEFkYW0gb2JqZWN0JywgKCkgPT4ge1xuICBleHBlY3QoY29sbGVjdGlvbi5maW5kV2hlcmUoJ2lkJywxKSkudG8uZGVlcC5lcXVhbCh7XG4gICAgaWQ6IDEsXG4gICAgbmFtZTogJ0FkYW0nXG4gIH0pO1xufSk7XG59KTtcblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcGVjcy9pbmRleC5zcGVjLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBtYXAgPSB7XG5cdFwiLi9zcGVjcy9pbmRleC5zcGVjXCI6IDAsXG5cdFwiLi9zcGVjcy9pbmRleC5zcGVjLmpzXCI6IDBcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18od2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkpO1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKTtcblx0cmV0dXJuIGlkO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSAxO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4gXlxcLlxcL3NwZWNzLiokXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZnNcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcy1maWxlLXRyZWVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJmcy1maWxlLXRyZWVcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgZnNGaWxlVHJlZSBmcm9tICdmcy1maWxlLXRyZWUnO1xuaW1wb3J0IGZzICAgICAgICAgZnJvbSAnZnMnO1xuXG5cbmNvbnN0IHRlc3RGb2xkZXIgICA9ICd0ZXN0L3NwZWNzJztcblxuYnVpbGRUcmVlKGZzRmlsZVRyZWUuc3luYyhwcm9jZXNzLmN3ZCgpICsgJy8nICsgdGVzdEZvbGRlciksIHRlc3RGb2xkZXIpO1xuXG5mdW5jdGlvbiBidWlsZFRyZWUodHJlZSwgcm9vdCkge1xuICAgIF9idWlsZFRyZWUodHJlZSwgcm9vdCwgJy8nKTtcbn1cblxuZnVuY3Rpb24gX2J1aWxkVHJlZSh0cmVlLCByb290LCBwYXRoKSB7XG4gICAgZm9yKGxldCBpdGVtIGluIHRyZWUpIHtcbiAgICAgICAgaWYodHJlZS5oYXNPd25Qcm9wZXJ0eShpdGVtKSkge1xuICAgICAgICAgICAgbGV0IGl0ZW1TdGF0cyA9IGZzLmxzdGF0U3luYygnLi8nICsgcm9vdCArIHBhdGggKyBpdGVtKTtcblxuICAgICAgICAgICAgaWYoaXRlbVN0YXRzLmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgICAgICAgICAgICBkZXNjcmliZShpdGVtICsgJy8nLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIF9idWlsZFRyZWUodHJlZVtpdGVtXSwgcm9vdCwgcGF0aCArIGl0ZW0gKyAnLycpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmKGl0ZW1TdGF0cy5pc0ZpbGUoKSkge1xuICAgICAgICAgICAgICAgIGRlc2NyaWJlKGl0ZW0sICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZpbGUgPSByZXF1aXJlKCcuL3NwZWNzJyArIHBhdGggKyBpdGVtKTtcblxuICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YgZmlsZS5kZWZhdWx0ID09PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZS5kZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ydW5uZXIuanMiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBDb2xsZWN0aW9uID0gZXhwb3J0cy5Db2xsZWN0aW9uID0gZnVuY3Rpb24gQ29sbGVjdGlvbihjb2xsZWN0aW9uKSB7XG5cbiAgdGhpcy5saXN0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjb2xsZWN0aW9uO1xuICB9O1xuXG4gIHRoaXMuZmluZFdoZXJlID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICByZXR1cm4gY29sbGVjdGlvbi5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtW2tleV0gJiYgaXRlbVtrZXldID09PSB2YWx1ZTtcbiAgICB9KVswXTtcbiAgfTtcblxuICB0aGlzLmluc2VydCA9IGZ1bmN0aW9uICgpIHt9O1xuICB0aGlzLnVwc2VydCA9IGZ1bmN0aW9uICgpIHt9O1xuICB0aGlzLnJlbW92ZSA9IGZ1bmN0aW9uICgpIHt9O1xuICB0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHt9O1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hhaVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNoYWlcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNuQkE7QUFDQTs7Ozs7QUNEQTtBQUNBOzs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFqQkE7QUFDQTtBQUFBO0FBQUE7QUFpQkE7QUFDQTtBQUNBOzs7Ozs7QUM5QkE7QUFDQTs7Ozs7QUNIQTtBQUNBOzsiLCJzb3VyY2VSb290IjoiIn0=