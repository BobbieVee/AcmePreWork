/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _AcmeDB = __webpack_require__(1);

	var _AcmeDB2 = _interopRequireDefault(_AcmeDB);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var users = [{ name: 'Moe' }]; // import AcmeDB from './AcmeDB';

	//  var acmeDb = new AcmeDB({name: 'Bobby'})

	// console.log('index.js file.  Hi!');

	// console.log('acmeDb = ', acmeDb)
	// acmeDb.sayHi();

	var db = new _AcmeDB2.default({ users: users });

	console.log(db.users.length); //should equal 1
	console.log(db.users[0].id); //should equal 1

	db.addUser({ name: 'Larry' });

	console.log(db.showUsers()); //should be 'Moe, Larry'
	console.log(db.findById(2).name); //should be Larry

	db.addUser({ name: 'Curly' });
	db.removeUserById(1);

	console.log(db.users[0].name); //should be Larry

	db.editUser({ id: 2, name: 'Laary' });

	console.log(db.showUsers()); //should be 'Laary, Curly'

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AcmeDB = function () {
		function AcmeDB(_ref) {
			var users = _ref.users;

			_classCallCheck(this, AcmeDB);

			this.users = users;
			this.users[0].id = 1;
		}

		_createClass(AcmeDB, [{
			key: "addUser",
			value: function addUser(newName) {
				// collect last id used
				var lastId = this.users[this.users.length - 1].id;
				this.users.push(newName);
				this.users[this.users.length - 1].id = lastId + 1;
			}
		}, {
			key: "showUsers",
			value: function showUsers() {
				var userList = [];
				this.users.forEach(function (user) {
					userList.push(user.name);
				});
				return userList.join();
			}
		}, {
			key: "findById",
			value: function findById(id) {
				var userObj;
				this.users.forEach(function (user) {
					if (user.id === id) userObj = user;
				});
				return userObj;
			}
		}, {
			key: "removeUserById",
			value: function removeUserById(id) {
				var removeIndex = 0;
				this.users.forEach(function (user, index) {
					if (id === user.id) {
						removeIndex = index;
					}
				});
				this.users.splice(removeIndex, 1);
			}
		}, {
			key: "editUser",
			value: function editUser(obj) {
				var changeIndex = 0;
				this.users.forEach(function (user, index) {
					if (obj.id === user.id) {
						changeIndex = index;
					}
				});
				this.users[changeIndex] = obj;
			}
		}]);

		return AcmeDB;
	}();

	exports.default = AcmeDB;

/***/ }
/******/ ]);