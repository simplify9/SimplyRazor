/*!
 * Quill Editor v1.3.7
 * https://quilljs.com/
 * Copyright (c) 2014, Jason Chen
 * Copyright (c) 2013, salesforce.com
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Quill"] = factory();
	else
		root["Quill"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 109);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var container_1 = __webpack_require__(17);
var format_1 = __webpack_require__(18);
var leaf_1 = __webpack_require__(19);
var scroll_1 = __webpack_require__(45);
var inline_1 = __webpack_require__(46);
var block_1 = __webpack_require__(47);
var embed_1 = __webpack_require__(48);
var text_1 = __webpack_require__(49);
var attributor_1 = __webpack_require__(12);
var class_1 = __webpack_require__(32);
var style_1 = __webpack_require__(33);
var store_1 = __webpack_require__(31);
var Registry = __webpack_require__(1);
var Parchment = {
    Scope: Registry.Scope,
    create: Registry.create,
    find: Registry.find,
    query: Registry.query,
    register: Registry.register,
    Container: container_1.default,
    Format: format_1.default,
    Leaf: leaf_1.default,
    Embed: embed_1.default,
    Scroll: scroll_1.default,
    Block: block_1.default,
    Inline: inline_1.default,
    Text: text_1.default,
    Attributor: {
        Attribute: attributor_1.default,
        Class: class_1.default,
        Style: style_1.default,
        Store: store_1.default,
    },
};
exports.default = Parchment;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ParchmentError = /** @class */ (function (_super) {
    __extends(ParchmentError, _super);
    function ParchmentError(message) {
        var _this = this;
        message = '[Parchment] ' + message;
        _this = _super.call(this, message) || this;
        _this.message = message;
        _this.name = _this.constructor.name;
        return _this;
    }
    return ParchmentError;
}(Error));
exports.ParchmentError = ParchmentError;
var attributes = {};
var classes = {};
var tags = {};
var types = {};
exports.DATA_KEY = '__blot';
var Scope;
(function (Scope) {
    Scope[Scope["TYPE"] = 3] = "TYPE";
    Scope[Scope["LEVEL"] = 12] = "LEVEL";
    Scope[Scope["ATTRIBUTE"] = 13] = "ATTRIBUTE";
    Scope[Scope["BLOT"] = 14] = "BLOT";
    Scope[Scope["INLINE"] = 7] = "INLINE";
    Scope[Scope["BLOCK"] = 11] = "BLOCK";
    Scope[Scope["BLOCK_BLOT"] = 10] = "BLOCK_BLOT";
    Scope[Scope["INLINE_BLOT"] = 6] = "INLINE_BLOT";
    Scope[Scope["BLOCK_ATTRIBUTE"] = 9] = "BLOCK_ATTRIBUTE";
    Scope[Scope["INLINE_ATTRIBUTE"] = 5] = "INLINE_ATTRIBUTE";
    Scope[Scope["ANY"] = 15] = "ANY";
})(Scope = exports.Scope || (exports.Scope = {}));
function create(input, value) {
    var match = query(input);
    if (match == null) {
        throw new ParchmentError("Unable to create " + input + " blot");
    }
    var BlotClass = match;
    var node = 
    // @ts-ignore
    input instanceof Node || input['nodeType'] === Node.TEXT_NODE ? input : BlotClass.create(value);
    return new BlotClass(node, value);
}
exports.create = create;
function find(node, bubble) {
    if (bubble === void 0) { bubble = false; }
    if (node == null)
        return null;
    // @ts-ignore
    if (node[exports.DATA_KEY] != null)
        return node[exports.DATA_KEY].blot;
    if (bubble)
        return find(node.parentNode, bubble);
    return null;
}
exports.find = find;
function query(query, scope) {
    if (scope === void 0) { scope = Scope.ANY; }
    var match;
    if (typeof query === 'string') {
        match = types[query] || attributes[query];
        // @ts-ignore
    }
    else if (query instanceof Text || query['nodeType'] === Node.TEXT_NODE) {
        match = types['text'];
    }
    else if (typeof query === 'number') {
        if (query & Scope.LEVEL & Scope.BLOCK) {
            match = types['block'];
        }
        else if (query & Scope.LEVEL & Scope.INLINE) {
            match = types['inline'];
        }
    }
    else if (query instanceof HTMLElement) {
        var names = (query.getAttribute('class') || '').split(/\s+/);
        for (var i in names) {
            match = classes[names[i]];
            if (match)
                break;
        }
        match = match || tags[query.tagName];
    }
    if (match == null)
        return null;
    // @ts-ignore
    if (scope & Scope.LEVEL & match.scope && scope & Scope.TYPE & match.scope)
        return match;
    return null;
}
exports.query = query;
function register() {
    var Definitions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Definitions[_i] = arguments[_i];
    }
    if (Definitions.length > 1) {
        return Definitions.map(function (d) {
            return register(d);
        });
    }
    var Definition = Definitions[0];
    if (typeof Definition.blotName !== 'string' && typeof Definition.attrName !== 'string') {
        throw new ParchmentError('Invalid definition');
    }
    else if (Definition.blotName === 'abstract') {
        throw new ParchmentError('Cannot register abstract class');
    }
    types[Definition.blotName || Definition.attrName] = Definition;
    if (typeof Definition.keyName === 'string') {
        attributes[Definition.keyName] = Definition;
    }
    else {
        if (Definition.className != null) {
            classes[Definition.className] = Definition;
        }
        if (Definition.tagName != null) {
            if (Array.isArray(Definition.tagName)) {
                Definition.tagName = Definition.tagName.map(function (tagName) {
                    return tagName.toUpperCase();
                });
            }
            else {
                Definition.tagName = Definition.tagName.toUpperCase();
            }
            var tagNames = Array.isArray(Definition.tagName) ? Definition.tagName : [Definition.tagName];
            tagNames.forEach(function (tag) {
                if (tags[tag] == null || Definition.className == null) {
                    tags[tag] = Definition;
                }
            });
        }
    }
    return Definition;
}
exports.register = register;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var diff = __webpack_require__(51);
var equal = __webpack_require__(11);
var extend = __webpack_require__(3);
var op = __webpack_require__(20);


var NULL_CHARACTER = String.fromCharCode(0);  // Placeholder char for embed in diff()


var Delta = function (ops) {
  // Assume we are given a well formed ops
  if (Array.isArray(ops)) {
    this.ops = ops;
  } else if (ops != null && Array.isArray(ops.ops)) {
    this.ops = ops.ops;
  } else {
    this.ops = [];
  }
};


Delta.prototype.insert = function (text, attributes) {
  var newOp = {};
  if (text.length === 0) return this;
  newOp.insert = text;
  if (attributes != null && typeof attributes === 'object' && Object.keys(attributes).length > 0) {
    newOp.attributes = attributes;
  }
  return this.push(newOp);
};

Delta.prototype['delete'] = function (length) {
  if (length <= 0) return this;
  return this.push({ 'delete': length });
};

Delta.prototype.retain = function (length, attributes) {
  if (length <= 0) return this;
  var newOp = { retain: length };
  if (attributes != null && typeof attributes === 'object' && Object.keys(attributes).length > 0) {
    newOp.attributes = attributes;
  }
  return this.push(newOp);
};

Delta.prototype.push = function (newOp) {
  var index = this.ops.length;
  var lastOp = this.ops[index - 1];
  newOp = extend(true, {}, newOp);
  if (typeof lastOp === 'object') {
    if (typeof newOp['delete'] === 'number' && typeof lastOp['delete'] === 'number') {
      this.ops[index - 1] = { 'delete': lastOp['delete'] + newOp['delete'] };
      return this;
    }
    // Since it does not matter if we insert before or after deleting at the same index,
    // always prefer to insert first
    if (typeof lastOp['delete'] === 'number' && newOp.insert != null) {
      index -= 1;
      lastOp = this.ops[index - 1];
      if (typeof lastOp !== 'object') {
        this.ops.unshift(newOp);
        return this;
      }
    }
    if (equal(newOp.attributes, lastOp.attributes)) {
      if (typeof newOp.insert === 'string' && typeof lastOp.insert === 'string') {
        this.ops[index - 1] = { insert: lastOp.insert + newOp.insert };
        if (typeof newOp.attributes === 'object') this.ops[index - 1].attributes = newOp.attributes
        return this;
      } else if (typeof newOp.retain === 'number' && typeof lastOp.retain === 'number') {
        this.ops[index - 1] = { retain: lastOp.retain + newOp.retain };
        if (typeof newOp.attributes === 'object') this.ops[index - 1].attributes = newOp.attributes
        return this;
      }
    }
  }
  if (index === this.ops.length) {
    this.ops.push(newOp);
  } else {
    this.ops.splice(index, 0, newOp);
  }
  return this;
};

Delta.prototype.chop = function () {
  var lastOp = this.ops[this.ops.length - 1];
  if (lastOp && lastOp.retain && !lastOp.attributes) {
    this.ops.pop();
  }
  return this;
};

Delta.prototype.filter = function (predicate) {
  return this.ops.filter(predicate);
};

Delta.prototype.forEach = function (predicate) {
  this.ops.forEach(predicate);
};

Delta.prototype.map = function (predicate) {
  return this.ops.map(predicate);
};

Delta.prototype.partition = function (predicate) {
  var passed = [], failed = [];
  this.forEach(function(op) {
    var target = predicate(op) ? passed : failed;
    target.push(op);
  });
  return [passed, failed];
};

Delta.prototype.reduce = function (predicate, initial) {
  return this.ops.reduce(predicate, initial);
};

Delta.prototype.changeLength = function () {
  return this.reduce(function (length, elem) {
    if (elem.insert) {
      return length + op.length(elem);
    } else if (elem.delete) {
      return length - elem.delete;
    }
    return length;
  }, 0);
};

Delta.prototype.length = function () {
  return this.reduce(function (length, elem) {
    return length + op.length(elem);
  }, 0);
};

Delta.prototype.slice = function (start, end) {
  start = start || 0;
  if (typeof end !== 'number') end = Infinity;
  var ops = [];
  var iter = op.iterator(this.ops);
  var index = 0;
  while (index < end && iter.hasNext()) {
    var nextOp;
    if (index < start) {
      nextOp = iter.next(start - index);
    } else {
      nextOp = iter.next(end - index);
      ops.push(nextOp);
    }
    index += op.length(nextOp);
  }
  return new Delta(ops);
};


Delta.prototype.compose = function (other) {
  var thisIter = op.iterator(this.ops);
  var otherIter = op.iterator(other.ops);
  var ops = [];
  var firstOther = otherIter.peek();
  if (firstOther != null && typeof firstOther.retain === 'number' && firstOther.attributes == null) {
    var firstLeft = firstOther.retain;
    while (thisIter.peekType() === 'insert' && thisIter.peekLength() <= firstLeft) {
      firstLeft -= thisIter.peekLength();
      ops.push(thisIter.next());
    }
    if (firstOther.retain - firstLeft > 0) {
      otherIter.next(firstOther.retain - firstLeft);
    }
  }
  var delta = new Delta(ops);
  while (thisIter.hasNext() || otherIter.hasNext()) {
    if (otherIter.peekType() === 'insert') {
      delta.push(otherIter.next());
    } else if (thisIter.peekType() === 'delete') {
      delta.push(thisIter.next());
    } else {
      var length = Math.min(thisIter.peekLength(), otherIter.peekLength());
      var thisOp = thisIter.next(length);
      var otherOp = otherIter.next(length);
      if (typeof otherOp.retain === 'number') {
        var newOp = {};
        if (typeof thisOp.retain === 'number') {
          newOp.retain = length;
        } else {
          newOp.insert = thisOp.insert;
        }
        // Preserve null when composing with a retain, otherwise remove it for inserts
        var attributes = op.attributes.compose(thisOp.attributes, otherOp.attributes, typeof thisOp.retain === 'number');
        if (attributes) newOp.attributes = attributes;
        delta.push(newOp);

        // Optimization if rest of other is just retain
        if (!otherIter.hasNext() && equal(delta.ops[delta.ops.length - 1], newOp)) {
          var rest = new Delta(thisIter.rest());
          return delta.concat(rest).chop();
        }

      // Other op should be delete, we could be an insert or retain
      // Insert + delete cancels out
      } else if (typeof otherOp['delete'] === 'number' && typeof thisOp.retain === 'number') {
        delta.push(otherOp);
      }
    }
  }
  return delta.chop();
};

Delta.prototype.concat = function (other) {
  var delta = new Delta(this.ops.slice());
  if (other.ops.length > 0) {
    delta.push(other.ops[0]);
    delta.ops = delta.ops.concat(other.ops.slice(1));
  }
  return delta;
};

Delta.prototype.diff = function (other, index) {
  if (this.ops === other.ops) {
    return new Delta();
  }
  var strings = [this, other].map(function (delta) {
    return delta.map(function (op) {
      if (op.insert != null) {
        return typeof op.insert === 'string' ? op.insert : NULL_CHARACTER;
      }
      var prep = (delta === other) ? 'on' : 'with';
      throw new Error('diff() called ' + prep + ' non-document');
    }).join('');
  });
  var delta = new Delta();
  var diffResult = diff(strings[0], strings[1], index);
  var thisIter = op.iterator(this.ops);
  var otherIter = op.iterator(other.ops);
  diffResult.forEach(function (component) {
    var length = component[1].length;
    while (length > 0) {
      var opLength = 0;
      switch (component[0]) {
        case diff.INSERT:
          opLength = Math.min(otherIter.peekLength(), length);
          delta.push(otherIter.next(opLength));
          break;
        case diff.DELETE:
          opLength = Math.min(length, thisIter.peekLength());
          thisIter.next(opLength);
          delta['delete'](opLength);
          break;
        case diff.EQUAL:
          opLength = Math.min(thisIter.peekLength(), otherIter.peekLength(), length);
          var thisOp = thisIter.next(opLength);
          var otherOp = otherIter.next(opLength);
          if (equal(thisOp.insert, otherOp.insert)) {
            delta.retain(opLength, op.attributes.diff(thisOp.attributes, otherOp.attributes));
          } else {
            delta.push(otherOp)['delete'](opLength);
          }
          break;
      }
      length -= opLength;
    }
  });
  return delta.chop();
};

Delta.prototype.eachLine = function (predicate, newline) {
  newline = newline || '\n';
  var iter = op.iterator(this.ops);
  var line = new Delta();
  var i = 0;
  while (iter.hasNext()) {
    if (iter.peekType() !== 'insert') return;
    var thisOp = iter.peek();
    var start = op.length(thisOp) - iter.peekLength();
    var index = typeof thisOp.insert === 'string' ?
      thisOp.insert.indexOf(newline, start) - start : -1;
    if (index < 0) {
      line.push(iter.next());
    } else if (index > 0) {
      line.push(iter.next(index));
    } else {
      if (predicate(line, iter.next(1).attributes || {}, i) === false) {
        return;
      }
      i += 1;
      line = new Delta();
    }
  }
  if (line.length() > 0) {
    predicate(line, {}, i);
  }
};

Delta.prototype.transform = function (other, priority) {
  priority = !!priority;
  if (typeof other === 'number') {
    return this.transformPosition(other, priority);
  }
  var thisIter = op.iterator(this.ops);
  var otherIter = op.iterator(other.ops);
  var delta = new Delta();
  while (thisIter.hasNext() || otherIter.hasNext()) {
    if (thisIter.peekType() === 'insert' && (priority || otherIter.peekType() !== 'insert')) {
      delta.retain(op.length(thisIter.next()));
    } else if (otherIter.peekType() === 'insert') {
      delta.push(otherIter.next());
    } else {
      var length = Math.min(thisIter.peekLength(), otherIter.peekLength());
      var thisOp = thisIter.next(length);
      var otherOp = otherIter.next(length);
      if (thisOp['delete']) {
        // Our delete either makes their delete redundant or removes their retain
        continue;
      } else if (otherOp['delete']) {
        delta.push(otherOp);
      } else {
        // We retain either their retain or insert
        delta.retain(length, op.attributes.transform(thisOp.attributes, otherOp.attributes, priority));
      }
    }
  }
  return delta.chop();
};

Delta.prototype.transformPosition = function (index, priority) {
  priority = !!priority;
  var thisIter = op.iterator(this.ops);
  var offset = 0;
  while (thisIter.hasNext() && offset <= index) {
    var length = thisIter.peekLength();
    var nextType = thisIter.peekType();
    thisIter.next();
    if (nextType === 'delete') {
      index -= Math.min(length, index - offset);
      continue;
    } else if (nextType === 'insert' && (offset < index || !priority)) {
      index += length;
    }
    offset += length;
  }
  return index;
};


module.exports = Delta;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

'use strict';

var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var defineProperty = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;

var isArray = function isArray(arr) {
	if (typeof Array.isArray === 'function') {
		return Array.isArray(arr);
	}

	return toStr.call(arr) === '[object Array]';
};

var isPlainObject = function isPlainObject(obj) {
	if (!obj || toStr.call(obj) !== '[object Object]') {
		return false;
	}

	var hasOwnConstructor = hasOwn.call(obj, 'constructor');
	var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
	// Not own constructor property must be Object
	if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
		return false;
	}

	// Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own.
	var key;
	for (key in obj) { /**/ }

	return typeof key === 'undefined' || hasOwn.call(obj, key);
};

// If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target
var setProperty = function setProperty(target, options) {
	if (defineProperty && options.name === '__proto__') {
		defineProperty(target, options.name, {
			enumerable: true,
			configurable: true,
			value: options.newValue,
			writable: true
		});
	} else {
		target[options.name] = options.newValue;
	}
};

// Return undefined instead of __proto__ if '__proto__' is not an own property
var getProperty = function getProperty(obj, name) {
	if (name === '__proto__') {
		if (!hasOwn.call(obj, name)) {
			return void 0;
		} else if (gOPD) {
			// In early versions of node, obj['__proto__'] is buggy when obj has
			// __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
			return gOPD(obj, name).value;
		}
	}

	return obj[name];
};

module.exports = function extend() {
	var options, name, src, copy, copyIsArray, clone;
	var target = arguments[0];
	var i = 1;
	var length = arguments.length;
	var deep = false;

	// Handle a deep copy situation
	if (typeof target === 'boolean') {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}
	if (target == null || (typeof target !== 'object' && typeof target !== 'function')) {
		target = {};
	}

	for (; i < length; ++i) {
		options = arguments[i];
		// Only deal with non-null/undefined values
		if (options != null) {
			// Extend the base object
			for (name in options) {
				src = getProperty(target, name);
				copy = getProperty(options, name);

				// Prevent never-ending loop
				if (target !== copy) {
					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && isArray(src) ? src : [];
						} else {
							clone = src && isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						setProperty(target, { name: name, newValue: extend(deep, clone, copy) });

					// Don't bring in undefined values
					} else if (typeof copy !== 'undefined') {
						setProperty(target, { name: name, newValue: copy });
					}
				}
			}
		}
	}

	// Return the modified object
	return target;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BlockEmbed = exports.bubbleFormats = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _extend = __webpack_require__(3);

var _extend2 = _interopRequireDefault(_extend);

var _quillDelta = __webpack_require__(2);

var _quillDelta2 = _interopRequireDefault(_quillDelta);

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _break = __webpack_require__(16);

var _break2 = _interopRequireDefault(_break);

var _inline = __webpack_require__(6);

var _inline2 = _interopRequireDefault(_inline);

var _text = __webpack_require__(7);

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NEWLINE_LENGTH = 1;

var BlockEmbed = function (_Parchment$Embed) {
  _inherits(BlockEmbed, _Parchment$Embed);

  function BlockEmbed() {
    _classCallCheck(this, BlockEmbed);

    return _possibleConstructorReturn(this, (BlockEmbed.__proto__ || Object.getPrototypeOf(BlockEmbed)).apply(this, arguments));
  }

  _createClass(BlockEmbed, [{
    key: 'attach',
    value: function attach() {
      _get(BlockEmbed.prototype.__proto__ || Object.getPrototypeOf(BlockEmbed.prototype), 'attach', this).call(this);
      this.attributes = new _parchment2.default.Attributor.Store(this.domNode);
    }
  }, {
    key: 'delta',
    value: function delta() {
      return new _quillDelta2.default().insert(this.value(), (0, _extend2.default)(this.formats(), this.attributes.values()));
    }
  }, {
    key: 'format',
    value: function format(name, value) {
      var attribute = _parchment2.default.query(name, _parchment2.default.Scope.BLOCK_ATTRIBUTE);
      if (attribute != null) {
        this.attributes.attribute(attribute, value);
      }
    }
  }, {
    key: 'formatAt',
    value: function formatAt(index, length, name, value) {
      this.format(name, value);
    }
  }, {
    key: 'insertAt',
    value: function insertAt(index, value, def) {
      if (typeof value === 'string' && value.endsWith('\n')) {
        var block = _parchment2.default.create(Block.blotName);
        this.parent.insertBefore(block, index === 0 ? this : this.next);
        block.insertAt(0, value.slice(0, -1));
      } else {
        _get(BlockEmbed.prototype.__proto__ || Object.getPrototypeOf(BlockEmbed.prototype), 'insertAt', this).call(this, index, value, def);
      }
    }
  }]);

  return BlockEmbed;
}(_parchment2.default.Embed);

BlockEmbed.scope = _parchment2.default.Scope.BLOCK_BLOT;
// It is important for cursor behavior BlockEmbeds use tags that are block level elements


var Block = function (_Parchment$Block) {
  _inherits(Block, _Parchment$Block);

  function Block(domNode) {
    _classCallCheck(this, Block);

    var _this2 = _possibleConstructorReturn(this, (Block.__proto__ || Object.getPrototypeOf(Block)).call(this, domNode));

    _this2.cache = {};
    return _this2;
  }

  _createClass(Block, [{
    key: 'delta',
    value: function delta() {
      if (this.cache.delta == null) {
        this.cache.delta = this.descendants(_parchment2.default.Leaf).reduce(function (delta, leaf) {
          if (leaf.length() === 0) {
            return delta;
          } else {
            return delta.insert(leaf.value(), bubbleFormats(leaf));
          }
        }, new _quillDelta2.default()).insert('\n', bubbleFormats(this));
      }
      return this.cache.delta;
    }
  }, {
    key: 'deleteAt',
    value: function deleteAt(index, length) {
      _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'deleteAt', this).call(this, index, length);
      this.cache = {};
    }
  }, {
    key: 'formatAt',
    value: function formatAt(index, length, name, value) {
      if (length <= 0) return;
      if (_parchment2.default.query(name, _parchment2.default.Scope.BLOCK)) {
        if (index + length === this.length()) {
          this.format(name, value);
        }
      } else {
        _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'formatAt', this).call(this, index, Math.min(length, this.length() - index - 1), name, value);
      }
      this.cache = {};
    }
  }, {
    key: 'insertAt',
    value: function insertAt(index, value, def) {
      if (def != null) return _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'insertAt', this).call(this, index, value, def);
      if (value.length === 0) return;
      var lines = value.split('\n');
      var text = lines.shift();
      if (text.length > 0) {
        if (index < this.length() - 1 || this.children.tail == null) {
          _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'insertAt', this).call(this, Math.min(index, this.length() - 1), text);
        } else {
          this.children.tail.insertAt(this.children.tail.length(), text);
        }
        this.cache = {};
      }
      var block = this;
      lines.reduce(function (index, line) {
        block = block.split(index, true);
        block.insertAt(0, line);
        return line.length;
      }, index + text.length);
    }
  }, {
    key: 'insertBefore',
    value: function insertBefore(blot, ref) {
      var head = this.children.head;
      _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'insertBefore', this).call(this, blot, ref);
      if (head instanceof _break2.default) {
        head.remove();
      }
      this.cache = {};
    }
  }, {
    key: 'length',
    value: function length() {
      if (this.cache.length == null) {
        this.cache.length = _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'length', this).call(this) + NEWLINE_LENGTH;
      }
      return this.cache.length;
    }
  }, {
    key: 'moveChildren',
    value: function moveChildren(target, ref) {
      _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'moveChildren', this).call(this, target, ref);
      this.cache = {};
    }
  }, {
    key: 'optimize',
    value: function optimize(context) {
      _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'optimize', this).call(this, context);
      this.cache = {};
    }
  }, {
    key: 'path',
    value: function path(index) {
      return _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'path', this).call(this, index, true);
    }
  }, {
    key: 'removeChild',
    value: function removeChild(child) {
      _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'removeChild', this).call(this, child);
      this.cache = {};
    }
  }, {
    key: 'split',
    value: function split(index) {
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (force && (index === 0 || index >= this.length() - NEWLINE_LENGTH)) {
        var clone = this.clone();
        if (index === 0) {
          this.parent.insertBefore(clone, this);
          return this;
        } else {
          this.parent.insertBefore(clone, this.next);
          return clone;
        }
      } else {
        var next = _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'split', this).call(this, index, force);
        this.cache = {};
        return next;
      }
    }
  }]);

  return Block;
}(_parchment2.default.Block);

Block.blotName = 'block';
Block.tagName = 'P';
Block.defaultChild = 'break';
Block.allowedChildren = [_inline2.default, _parchment2.default.Embed, _text2.default];

function bubbleFormats(blot) {
  var formats = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (blot == null) return formats;
  if (typeof blot.formats === 'function') {
    formats = (0, _extend2.default)(formats, blot.formats());
  }
  if (blot.parent == null || blot.parent.blotName == 'scroll' || blot.parent.statics.scope !== blot.statics.scope) {
    return formats;
  }
  return bubbleFormats(blot.parent, formats);
}

exports.bubbleFormats = bubbleFormats;
exports.BlockEmbed = BlockEmbed;
exports.default = Block;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.overload = exports.expandConfig = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(50);

var _quillDelta = __webpack_require__(2);

var _quillDelta2 = _interopRequireDefault(_quillDelta);

var _editor = __webpack_require__(14);

var _editor2 = _interopRequireDefault(_editor);

var _emitter3 = __webpack_require__(8);

var _emitter4 = _interopRequireDefault(_emitter3);

var _module = __webpack_require__(9);

var _module2 = _interopRequireDefault(_module);

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _selection = __webpack_require__(15);

var _selection2 = _interopRequireDefault(_selection);

var _extend = __webpack_require__(3);

var _extend2 = _interopRequireDefault(_extend);

var _logger = __webpack_require__(10);

var _logger2 = _interopRequireDefault(_logger);

var _theme = __webpack_require__(34);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var debug = (0, _logger2.default)('quill');

var Quill = function () {
  _createClass(Quill, null, [{
    key: 'debug',
    value: function debug(limit) {
      if (limit === true) {
        limit = 'log';
      }
      _logger2.default.level(limit);
    }
  }, {
    key: 'find',
    value: function find(node) {
      return node.__quill || _parchment2.default.find(node);
    }
  }, {
    key: 'import',
    value: function _import(name) {
      if (this.imports[name] == null) {
        debug.error('Cannot import ' + name + '. Are you sure it was registered?');
      }
      return this.imports[name];
    }
  }, {
    key: 'register',
    value: function register(path, target) {
      var _this = this;

      var overwrite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (typeof path !== 'string') {
        var name = path.attrName || path.blotName;
        if (typeof name === 'string') {
          // register(Blot | Attributor, overwrite)
          this.register('formats/' + name, path, target);
        } else {
          Object.keys(path).forEach(function (key) {
            _this.register(key, path[key], target);
          });
        }
      } else {
        if (this.imports[path] != null && !overwrite) {
          debug.warn('Overwriting ' + path + ' with', target);
        }
        this.imports[path] = target;
        if ((path.startsWith('blots/') || path.startsWith('formats/')) && target.blotName !== 'abstract') {
          _parchment2.default.register(target);
        } else if (path.startsWith('modules') && typeof target.register === 'function') {
          target.register();
        }
      }
    }
  }]);

  function Quill(container) {
    var _this2 = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Quill);

    this.options = expandConfig(container, options);
    this.container = this.options.container;
    if (this.container == null) {
      return debug.error('Invalid Quill container', container);
    }
    if (this.options.debug) {
      Quill.debug(this.options.debug);
    }
    var html = this.container.innerHTML.trim();
    this.container.classList.add('ql-container');
    this.container.innerHTML = '';
    this.container.__quill = this;
    this.root = this.addContainer('ql-editor');
    this.root.classList.add('ql-blank');
    this.root.setAttribute('data-gramm', false);
    this.scrollingContainer = this.options.scrollingContainer || this.root;
    this.emitter = new _emitter4.default();
    this.scroll = _parchment2.default.create(this.root, {
      emitter: this.emitter,
      whitelist: this.options.formats
    });
    this.editor = new _editor2.default(this.scroll);
    this.selection = new _selection2.default(this.scroll, this.emitter);
    this.theme = new this.options.theme(this, this.options);
    this.keyboard = this.theme.addModule('keyboard');
    this.clipboard = this.theme.addModule('clipboard');
    this.history = this.theme.addModule('history');
    this.theme.init();
    this.emitter.on(_emitter4.default.events.EDITOR_CHANGE, function (type) {
      if (type === _emitter4.default.events.TEXT_CHANGE) {
        _this2.root.classList.toggle('ql-blank', _this2.editor.isBlank());
      }
    });
    this.emitter.on(_emitter4.default.events.SCROLL_UPDATE, function (source, mutations) {
      var range = _this2.selection.lastRange;
      var index = range && range.length === 0 ? range.index : undefined;
      modify.call(_this2, function () {
        return _this2.editor.update(null, mutations, index);
      }, source);
    });
    var contents = this.clipboard.convert('<div class=\'ql-editor\' style="white-space: normal;">' + html + '<p><br></p></div>');
    this.setContents(contents);
    this.history.clear();
    if (this.options.placeholder) {
      this.root.setAttribute('data-placeholder', this.options.placeholder);
    }
    if (this.options.readOnly) {
      this.disable();
    }
  }

  _createClass(Quill, [{
    key: 'addContainer',
    value: function addContainer(container) {
      var refNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (typeof container === 'string') {
        var className = container;
        container = document.createElement('div');
        container.classList.add(className);
      }
      this.container.insertBefore(container, refNode);
      return container;
    }
  }, {
    key: 'blur',
    value: function blur() {
      this.selection.setRange(null);
    }
  }, {
    key: 'deleteText',
    value: function deleteText(index, length, source) {
      var _this3 = this;

      var _overload = overload(index, length, source);

      var _overload2 = _slicedToArray(_overload, 4);

      index = _overload2[0];
      length = _overload2[1];
      source = _overload2[3];

      return modify.call(this, function () {
        return _this3.editor.deleteText(index, length);
      }, source, index, -1 * length);
    }
  }, {
    key: 'disable',
    value: function disable() {
      this.enable(false);
    }
  }, {
    key: 'enable',
    value: function enable() {
      var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this.scroll.enable(enabled);
      this.container.classList.toggle('ql-disabled', !enabled);
    }
  }, {
    key: 'focus',
    value: function focus() {
      var scrollTop = this.scrollingContainer.scrollTop;
      this.selection.focus();
      this.scrollingContainer.scrollTop = scrollTop;
      this.scrollIntoView();
    }
  }, {
    key: 'format',
    value: function format(name, value) {
      var _this4 = this;

      var source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _emitter4.default.sources.API;

      return modify.call(this, function () {
        var range = _this4.getSelection(true);
        var change = new _quillDelta2.default();
        if (range == null) {
          return change;
        } else if (_parchment2.default.query(name, _parchment2.default.Scope.BLOCK)) {
          change = _this4.editor.formatLine(range.index, range.length, _defineProperty({}, name, value));
        } else if (range.length === 0) {
          _this4.selection.format(name, value);
          return change;
        } else {
          change = _this4.editor.formatText(range.index, range.length, _defineProperty({}, name, value));
        }
        _this4.setSelection(range, _emitter4.default.sources.SILENT);
        return change;
      }, source);
    }
  }, {
    key: 'formatLine',
    value: function formatLine(index, length, name, value, source) {
      var _this5 = this;

      var formats = void 0;

      var _overload3 = overload(index, length, name, value, source);

      var _overload4 = _slicedToArray(_overload3, 4);

      index = _overload4[0];
      length = _overload4[1];
      formats = _overload4[2];
      source = _overload4[3];

      return modify.call(this, function () {
        return _this5.editor.formatLine(index, length, formats);
      }, source, index, 0);
    }
  }, {
    key: 'formatText',
    value: function formatText(index, length, name, value, source) {
      var _this6 = this;

      var formats = void 0;

      var _overload5 = overload(index, length, name, value, source);

      var _overload6 = _slicedToArray(_overload5, 4);

      index = _overload6[0];
      length = _overload6[1];
      formats = _overload6[2];
      source = _overload6[3];

      return modify.call(this, function () {
        return _this6.editor.formatText(index, length, formats);
      }, source, index, 0);
    }
  }, {
    key: 'getBounds',
    value: function getBounds(index) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var bounds = void 0;
      if (typeof index === 'number') {
        bounds = this.selection.getBounds(index, length);
      } else {
        bounds = this.selection.getBounds(index.index, index.length);
      }
      var containerBounds = this.container.getBoundingClientRect();
      return {
        bottom: bounds.bottom - containerBounds.top,
        height: bounds.height,
        left: bounds.left - containerBounds.left,
        right: bounds.right - containerBounds.left,
        top: bounds.top - containerBounds.top,
        width: bounds.width
      };
    }
  }, {
    key: 'getContents',
    value: function getContents() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.getLength() - index;

      var _overload7 = overload(index, length);

      var _overload8 = _slicedToArray(_overload7, 2);

      index = _overload8[0];
      length = _overload8[1];

      return this.editor.getContents(index, length);
    }
  }, {
    key: 'getFormat',
    value: function getFormat() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getSelection(true);
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (typeof index === 'number') {
        return this.editor.getFormat(index, length);
      } else {
        return this.editor.getFormat(index.index, index.length);
      }
    }
  }, {
    key: 'getIndex',
    value: function getIndex(blot) {
      return blot.offset(this.scroll);
    }
  }, {
    key: 'getLength',
    value: function getLength() {
      return this.scroll.length();
    }
  }, {
    key: 'getLeaf',
    value: function getLeaf(index) {
      return this.scroll.leaf(index);
    }
  }, {
    key: 'getLine',
    value: function getLine(index) {
      return this.scroll.line(index);
    }
  }, {
    key: 'getLines',
    value: function getLines() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.MAX_VALUE;

      if (typeof index !== 'number') {
        return this.scroll.lines(index.index, index.length);
      } else {
        return this.scroll.lines(index, length);
      }
    }
  }, {
    key: 'getModule',
    value: function getModule(name) {
      return this.theme.modules[name];
    }
  }, {
    key: 'getSelection',
    value: function getSelection() {
      var focus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (focus) this.focus();
      this.update(); // Make sure we access getRange with editor in consistent state
      return this.selection.getRange()[0];
    }
  }, {
    key: 'getText',
    value: function getText() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.getLength() - index;

      var _overload9 = overload(index, length);

      var _overload10 = _slicedToArray(_overload9, 2);

      index = _overload10[0];
      length = _overload10[1];

      return this.editor.getText(index, length);
    }
  }, {
    key: 'hasFocus',
    value: function hasFocus() {
      return this.selection.hasFocus();
    }
  }, {
    key: 'insertEmbed',
    value: function insertEmbed(index, embed, value) {
      var _this7 = this;

      var source = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Quill.sources.API;

      return modify.call(this, function () {
        return _this7.editor.insertEmbed(index, embed, value);
      }, source, index);
    }
  }, {
    key: 'insertText',
    value: function insertText(index, text, name, value, source) {
      var _this8 = this;

      var formats = void 0;

      var _overload11 = overload(index, 0, name, value, source);

      var _overload12 = _slicedToArray(_overload11, 4);

      index = _overload12[0];
      formats = _overload12[2];
      source = _overload12[3];

      return modify.call(this, function () {
        return _this8.editor.insertText(index, text, formats);
      }, source, index, text.length);
    }
  }, {
    key: 'isEnabled',
    value: function isEnabled() {
      return !this.container.classList.contains('ql-disabled');
    }
  }, {
    key: 'off',
    value: function off() {
      return this.emitter.off.apply(this.emitter, arguments);
    }
  }, {
    key: 'on',
    value: function on() {
      return this.emitter.on.apply(this.emitter, arguments);
    }
  }, {
    key: 'once',
    value: function once() {
      return this.emitter.once.apply(this.emitter, arguments);
    }
  }, {
    key: 'pasteHTML',
    value: function pasteHTML(index, html, source) {
      this.clipboard.dangerouslyPasteHTML(index, html, source);
    }
  }, {
    key: 'removeFormat',
    value: function removeFormat(index, length, source) {
      var _this9 = this;

      var _overload13 = overload(index, length, source);

      var _overload14 = _slicedToArray(_overload13, 4);

      index = _overload14[0];
      length = _overload14[1];
      source = _overload14[3];

      return modify.call(this, function () {
        return _this9.editor.removeFormat(index, length);
      }, source, index);
    }
  }, {
    key: 'scrollIntoView',
    value: function scrollIntoView() {
      this.selection.scrollIntoView(this.scrollingContainer);
    }
  }, {
    key: 'setContents',
    value: function setContents(delta) {
      var _this10 = this;

      var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _emitter4.default.sources.API;

      return modify.call(this, function () {
        delta = new _quillDelta2.default(delta);
        var length = _this10.getLength();
        var deleted = _this10.editor.deleteText(0, length);
        var applied = _this10.editor.applyDelta(delta);
        var lastOp = applied.ops[applied.ops.length - 1];
        if (lastOp != null && typeof lastOp.insert === 'string' && lastOp.insert[lastOp.insert.length - 1] === '\n') {
          _this10.editor.deleteText(_this10.getLength() - 1, 1);
          applied.delete(1);
        }
        var ret = deleted.compose(applied);
        return ret;
      }, source);
    }
  }, {
    key: 'setSelection',
    value: function setSelection(index, length, source) {
      if (index == null) {
        this.selection.setRange(null, length || Quill.sources.API);
      } else {
        var _overload15 = overload(index, length, source);

        var _overload16 = _slicedToArray(_overload15, 4);

        index = _overload16[0];
        length = _overload16[1];
        source = _overload16[3];

        this.selection.setRange(new _selection.Range(index, length), source);
        if (source !== _emitter4.default.sources.SILENT) {
          this.selection.scrollIntoView(this.scrollingContainer);
        }
      }
    }
  }, {
    key: 'setText',
    value: function setText(text) {
      var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _emitter4.default.sources.API;

      var delta = new _quillDelta2.default().insert(text);
      return this.setContents(delta, source);
    }
  }, {
    key: 'update',
    value: function update() {
      var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _emitter4.default.sources.USER;

      var change = this.scroll.update(source); // Will update selection before selection.update() does if text changes
      this.selection.update(source);
      return change;
    }
  }, {
    key: 'updateContents',
    value: function updateContents(delta) {
      var _this11 = this;

      var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _emitter4.default.sources.API;

      return modify.call(this, function () {
        delta = new _quillDelta2.default(delta);
        return _this11.editor.applyDelta(delta, source);
      }, source, true);
    }
  }]);

  return Quill;
}();

Quill.DEFAULTS = {
  bounds: null,
  formats: null,
  modules: {},
  placeholder: '',
  readOnly: false,
  scrollingContainer: null,
  strict: true,
  theme: 'default'
};
Quill.events = _emitter4.default.events;
Quill.sources = _emitter4.default.sources;
// eslint-disable-next-line no-undef
Quill.version =  false ? 'dev' : "1.3.7";

Quill.imports = {
  'delta': _quillDelta2.default,
  'parchment': _parchment2.default,
  'core/module': _module2.default,
  'core/theme': _theme2.default
};

function expandConfig(container, userConfig) {
  userConfig = (0, _extend2.default)(true, {
    container: container,
    modules: {
      clipboard: true,
      keyboard: true,
      history: true
    }
  }, userConfig);
  if (!userConfig.theme || userConfig.theme === Quill.DEFAULTS.theme) {
    userConfig.theme = _theme2.default;
  } else {
    userConfig.theme = Quill.import('themes/' + userConfig.theme);
    if (userConfig.theme == null) {
      throw new Error('Invalid theme ' + userConfig.theme + '. Did you register it?');
    }
  }
  var themeConfig = (0, _extend2.default)(true, {}, userConfig.theme.DEFAULTS);
  [themeConfig, userConfig].forEach(function (config) {
    config.modules = config.modules || {};
    Object.keys(config.modules).forEach(function (module) {
      if (config.modules[module] === true) {
        config.modules[module] = {};
      }
    });
  });
  var moduleNames = Object.keys(themeConfig.modules).concat(Object.keys(userConfig.modules));
  var moduleConfig = moduleNames.reduce(function (config, name) {
    var moduleClass = Quill.import('modules/' + name);
    if (moduleClass == null) {
      debug.error('Cannot load ' + name + ' module. Are you sure you registered it?');
    } else {
      config[name] = moduleClass.DEFAULTS || {};
    }
    return config;
  }, {});
  // Special case toolbar shorthand
  if (userConfig.modules != null && userConfig.modules.toolbar && userConfig.modules.toolbar.constructor !== Object) {
    userConfig.modules.toolbar = {
      container: userConfig.modules.toolbar
    };
  }
  userConfig = (0, _extend2.default)(true, {}, Quill.DEFAULTS, { modules: moduleConfig }, themeConfig, userConfig);
  ['bounds', 'container', 'scrollingContainer'].forEach(function (key) {
    if (typeof userConfig[key] === 'string') {
      userConfig[key] = document.querySelector(userConfig[key]);
    }
  });
  userConfig.modules = Object.keys(userConfig.modules).reduce(function (config, name) {
    if (userConfig.modules[name]) {
      config[name] = userConfig.modules[name];
    }
    return config;
  }, {});
  return userConfig;
}

// Handle selection preservation and TEXT_CHANGE emission
// common to modification APIs
function modify(modifier, source, index, shift) {
  if (this.options.strict && !this.isEnabled() && source === _emitter4.default.sources.USER) {
    return new _quillDelta2.default();
  }
  var range = index == null ? null : this.getSelection();
  var oldDelta = this.editor.delta;
  var change = modifier();
  if (range != null) {
    if (index === true) index = range.index;
    if (shift == null) {
      range = shiftRange(range, change, source);
    } else if (shift !== 0) {
      range = shiftRange(range, index, shift, source);
    }
    this.setSelection(range, _emitter4.default.sources.SILENT);
  }
  if (change.length() > 0) {
    var _emitter;

    var args = [_emitter4.default.events.TEXT_CHANGE, change, oldDelta, source];
    (_emitter = this.emitter).emit.apply(_emitter, [_emitter4.default.events.EDITOR_CHANGE].concat(args));
    if (source !== _emitter4.default.sources.SILENT) {
      var _emitter2;

      (_emitter2 = this.emitter).emit.apply(_emitter2, args);
    }
  }
  return change;
}

function overload(index, length, name, value, source) {
  var formats = {};
  if (typeof index.index === 'number' && typeof index.length === 'number') {
    // Allow for throwaway end (used by insertText/insertEmbed)
    if (typeof length !== 'number') {
      source = value, value = name, name = length, length = index.length, index = index.index;
    } else {
      length = index.length, index = index.index;
    }
  } else if (typeof length !== 'number') {
    source = value, value = name, name = length, length = 0;
  }
  // Handle format being object, two format name/value strings or excluded
  if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
    formats = name;
    source = value;
  } else if (typeof name === 'string') {
    if (value != null) {
      formats[name] = value;
    } else {
      source = name;
    }
  }
  // Handle optional source
  source = source || _emitter4.default.sources.API;
  return [index, length, formats, source];
}

function shiftRange(range, index, length, source) {
  if (range == null) return null;
  var start = void 0,
      end = void 0;
  if (index instanceof _quillDelta2.default) {
    var _map = [range.index, range.index + range.length].map(function (pos) {
      return index.transformPosition(pos, source !== _emitter4.default.sources.USER);
    });

    var _map2 = _slicedToArray(_map, 2);

    start = _map2[0];
    end = _map2[1];
  } else {
    var _map3 = [range.index, range.index + range.length].map(function (pos) {
      if (pos < index || pos === index && source === _emitter4.default.sources.USER) return pos;
      if (length >= 0) {
        return pos + length;
      } else {
        return Math.max(index, pos + length);
      }
    });

    var _map4 = _slicedToArray(_map3, 2);

    start = _map4[0];
    end = _map4[1];
  }
  return new _selection.Range(start, end - start);
}

exports.expandConfig = expandConfig;
exports.overload = overload;
exports.default = Quill;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _text = __webpack_require__(7);

var _text2 = _interopRequireDefault(_text);

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Inline = function (_Parchment$Inline) {
  _inherits(Inline, _Parchment$Inline);

  function Inline() {
    _classCallCheck(this, Inline);

    return _possibleConstructorReturn(this, (Inline.__proto__ || Object.getPrototypeOf(Inline)).apply(this, arguments));
  }

  _createClass(Inline, [{
    key: 'formatAt',
    value: function formatAt(index, length, name, value) {
      if (Inline.compare(this.statics.blotName, name) < 0 && _parchment2.default.query(name, _parchment2.default.Scope.BLOT)) {
        var blot = this.isolate(index, length);
        if (value) {
          blot.wrap(name, value);
        }
      } else {
        _get(Inline.prototype.__proto__ || Object.getPrototypeOf(Inline.prototype), 'formatAt', this).call(this, index, length, name, value);
      }
    }
  }, {
    key: 'optimize',
    value: function optimize(context) {
      _get(Inline.prototype.__proto__ || Object.getPrototypeOf(Inline.prototype), 'optimize', this).call(this, context);
      if (this.parent instanceof Inline && Inline.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
        var parent = this.parent.isolate(this.offset(), this.length());
        this.moveChildren(parent);
        parent.wrap(this);
      }
    }
  }], [{
    key: 'compare',
    value: function compare(self, other) {
      var selfIndex = Inline.order.indexOf(self);
      var otherIndex = Inline.order.indexOf(other);
      if (selfIndex >= 0 || otherIndex >= 0) {
        return selfIndex - otherIndex;
      } else if (self === other) {
        return 0;
      } else if (self < other) {
        return -1;
      } else {
        return 1;
      }
    }
  }]);

  return Inline;
}(_parchment2.default.Inline);

Inline.allowedChildren = [Inline, _parchment2.default.Embed, _text2.default];
// Lower index means deeper in the DOM tree, since not found (-1) is for embeds
Inline.order = ['cursor', 'inline', // Must be lower
'underline', 'strike', 'italic', 'bold', 'script', 'link', 'code' // Must be higher
];

exports.default = Inline;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextBlot = function (_Parchment$Text) {
  _inherits(TextBlot, _Parchment$Text);

  function TextBlot() {
    _classCallCheck(this, TextBlot);

    return _possibleConstructorReturn(this, (TextBlot.__proto__ || Object.getPrototypeOf(TextBlot)).apply(this, arguments));
  }

  return TextBlot;
}(_parchment2.default.Text);

exports.default = TextBlot;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _eventemitter = __webpack_require__(54);

var _eventemitter2 = _interopRequireDefault(_eventemitter);

var _logger = __webpack_require__(10);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var debug = (0, _logger2.default)('quill:events');

var EVENTS = ['selectionchange', 'mousedown', 'mouseup', 'click'];

EVENTS.forEach(function (eventName) {
  document.addEventListener(eventName, function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    [].slice.call(document.querySelectorAll('.ql-container')).forEach(function (node) {
      // TODO use WeakMap
      if (node.__quill && node.__quill.emitter) {
        var _node$__quill$emitter;

        (_node$__quill$emitter = node.__quill.emitter).handleDOM.apply(_node$__quill$emitter, args);
      }
    });
  });
});

var Emitter = function (_EventEmitter) {
  _inherits(Emitter, _EventEmitter);

  function Emitter() {
    _classCallCheck(this, Emitter);

    var _this = _possibleConstructorReturn(this, (Emitter.__proto__ || Object.getPrototypeOf(Emitter)).call(this));

    _this.listeners = {};
    _this.on('error', debug.error);
    return _this;
  }

  _createClass(Emitter, [{
    key: 'emit',
    value: function emit() {
      debug.log.apply(debug, arguments);
      _get(Emitter.prototype.__proto__ || Object.getPrototypeOf(Emitter.prototype), 'emit', this).apply(this, arguments);
    }
  }, {
    key: 'handleDOM',
    value: function handleDOM(event) {
      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      (this.listeners[event.type] || []).forEach(function (_ref) {
        var node = _ref.node,
            handler = _ref.handler;

        if (event.target === node || node.contains(event.target)) {
          handler.apply(undefined, [event].concat(args));
        }
      });
    }
  }, {
    key: 'listenDOM',
    value: function listenDOM(eventName, node, handler) {
      if (!this.listeners[eventName]) {
        this.listeners[eventName] = [];
      }
      this.listeners[eventName].push({ node: node, handler: handler });
    }
  }]);

  return Emitter;
}(_eventemitter2.default);

Emitter.events = {
  EDITOR_CHANGE: 'editor-change',
  SCROLL_BEFORE_UPDATE: 'scroll-before-update',
  SCROLL_OPTIMIZE: 'scroll-optimize',
  SCROLL_UPDATE: 'scroll-update',
  SELECTION_CHANGE: 'selection-change',
  TEXT_CHANGE: 'text-change'
};
Emitter.sources = {
  API: 'api',
  SILENT: 'silent',
  USER: 'user'
};

exports.default = Emitter;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Module = function Module(quill) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  _classCallCheck(this, Module);

  this.quill = quill;
  this.options = options;
};

Module.DEFAULTS = {};

exports.default = Module;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var levels = ['error', 'warn', 'log', 'info'];
var level = 'warn';

function debug(method) {
  if (levels.indexOf(method) <= levels.indexOf(level)) {
    var _console;

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    (_console = console)[method].apply(_console, args); // eslint-disable-line no-console
  }
}

function namespace(ns) {
  return levels.reduce(function (logger, method) {
    logger[method] = debug.bind(console, method, ns);
    return logger;
  }, {});
}

debug.level = namespace.level = function (newLevel) {
  level = newLevel;
};

exports.default = namespace;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var pSlice = Array.prototype.slice;
var objectKeys = __webpack_require__(52);
var isArguments = __webpack_require__(53);

var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
    return opts.strict ? actual === expected : actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected, opts);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer (x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b);
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return typeof a === typeof b;
}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Registry = __webpack_require__(1);
var Attributor = /** @class */ (function () {
    function Attributor(attrName, keyName, options) {
        if (options === void 0) { options = {}; }
        this.attrName = attrName;
        this.keyName = keyName;
        var attributeBit = Registry.Scope.TYPE & Registry.Scope.ATTRIBUTE;
        if (options.scope != null) {
            // Ignore type bits, force attribute bit
            this.scope = (options.scope & Registry.Scope.LEVEL) | attributeBit;
        }
        else {
            this.scope = Registry.Scope.ATTRIBUTE;
        }
        if (options.whitelist != null)
            this.whitelist = options.whitelist;
    }
    Attributor.keys = function (node) {
        return [].map.call(node.attributes, function (item) {
            return item.name;
        });
    };
    Attributor.prototype.add = function (node, value) {
        if (!this.canAdd(node, value))
            return false;
        node.setAttribute(this.keyName, value);
        return true;
    };
    Attributor.prototype.canAdd = function (node, value) {
        var match = Registry.query(node, Registry.Scope.BLOT & (this.scope | Registry.Scope.TYPE));
        if (match == null)
            return false;
        if (this.whitelist == null)
            return true;
        if (typeof value === 'string') {
            return this.whitelist.indexOf(value.replace(/["']/g, '')) > -1;
        }
        else {
            return this.whitelist.indexOf(value) > -1;
        }
    };
    Attributor.prototype.remove = function (node) {
        node.removeAttribute(this.keyName);
    };
    Attributor.prototype.value = function (node) {
        var value = node.getAttribute(this.keyName);
        if (this.canAdd(node, value) && value) {
            return value;
        }
        return '';
    };
    return Attributor;
}());
exports.default = Attributor;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Code = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _quillDelta = __webpack_require__(2);

var _quillDelta2 = _interopRequireDefault(_quillDelta);

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _block = __webpack_require__(4);

var _block2 = _interopRequireDefault(_block);

var _inline = __webpack_require__(6);

var _inline2 = _interopRequireDefault(_inline);

var _text = __webpack_require__(7);

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Code = function (_Inline) {
  _inherits(Code, _Inline);

  function Code() {
    _classCallCheck(this, Code);

    return _possibleConstructorReturn(this, (Code.__proto__ || Object.getPrototypeOf(Code)).apply(this, arguments));
  }

  return Code;
}(_inline2.default);

Code.blotName = 'code';
Code.tagName = 'CODE';

var CodeBlock = function (_Block) {
  _inherits(CodeBlock, _Block);

  function CodeBlock() {
    _classCallCheck(this, CodeBlock);

    return _possibleConstructorReturn(this, (CodeBlock.__proto__ || Object.getPrototypeOf(CodeBlock)).apply(this, arguments));
  }

  _createClass(CodeBlock, [{
    key: 'delta',
    value: function delta() {
      var _this3 = this;

      var text = this.domNode.textContent;
      if (text.endsWith('\n')) {
        // Should always be true
        text = text.slice(0, -1);
      }
      return text.split('\n').reduce(function (delta, frag) {
        return delta.insert(frag).insert('\n', _this3.formats());
      }, new _quillDelta2.default());
    }
  }, {
    key: 'format',
    value: function format(name, value) {
      if (name === this.statics.blotName && value) return;

      var _descendant = this.descendant(_text2.default, this.length() - 1),
          _descendant2 = _slicedToArray(_descendant, 1),
          text = _descendant2[0];

      if (text != null) {
        text.deleteAt(text.length() - 1, 1);
      }
      _get(CodeBlock.prototype.__proto__ || Object.getPrototypeOf(CodeBlock.prototype), 'format', this).call(this, name, value);
    }
  }, {
    key: 'formatAt',
    value: function formatAt(index, length, name, value) {
      if (length === 0) return;
      if (_parchment2.default.query(name, _parchment2.default.Scope.BLOCK) == null || name === this.statics.blotName && value === this.statics.formats(this.domNode)) {
        return;
      }
      var nextNewline = this.newlineIndex(index);
      if (nextNewline < 0 || nextNewline >= index + length) return;
      var prevNewline = this.newlineIndex(index, true) + 1;
      var isolateLength = nextNewline - prevNewline + 1;
      var blot = this.isolate(prevNewline, isolateLength);
      var next = blot.next;
      blot.format(name, value);
      if (next instanceof CodeBlock) {
        next.formatAt(0, index - prevNewline + length - isolateLength, name, value);
      }
    }
  }, {
    key: 'insertAt',
    value: function insertAt(index, value, def) {
      if (def != null) return;

      var _descendant3 = this.descendant(_text2.default, index),
          _descendant4 = _slicedToArray(_descendant3, 2),
          text = _descendant4[0],
          offset = _descendant4[1];

      text.insertAt(offset, value);
    }
  }, {
    key: 'length',
    value: function length() {
      var length = this.domNode.textContent.length;
      if (!this.domNode.textContent.endsWith('\n')) {
        return length + 1;
      }
      return length;
    }
  }, {
    key: 'newlineIndex',
    value: function newlineIndex(searchIndex) {
      var reverse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!reverse) {
        var offset = this.domNode.textContent.slice(searchIndex).indexOf('\n');
        return offset > -1 ? searchIndex + offset : -1;
      } else {
        return this.domNode.textContent.slice(0, searchIndex).lastIndexOf('\n');
      }
    }
  }, {
    key: 'optimize',
    value: function optimize(context) {
      if (!this.domNode.textContent.endsWith('\n')) {
        this.appendChild(_parchment2.default.create('text', '\n'));
      }
      _get(CodeBlock.prototype.__proto__ || Object.getPrototypeOf(CodeBlock.prototype), 'optimize', this).call(this, context);
      var next = this.next;
      if (next != null && next.prev === this && next.statics.blotName === this.statics.blotName && this.statics.formats(this.domNode) === next.statics.formats(next.domNode)) {
        next.optimize(context);
        next.moveChildren(this);
        next.remove();
      }
    }
  }, {
    key: 'replace',
    value: function replace(target) {
      _get(CodeBlock.prototype.__proto__ || Object.getPrototypeOf(CodeBlock.prototype), 'replace', this).call(this, target);
      [].slice.call(this.domNode.querySelectorAll('*')).forEach(function (node) {
        var blot = _parchment2.default.find(node);
        if (blot == null) {
          node.parentNode.removeChild(node);
        } else if (blot instanceof _parchment2.default.Embed) {
          blot.remove();
        } else {
          blot.unwrap();
        }
      });
    }
  }], [{
    key: 'create',
    value: function create(value) {
      var domNode = _get(CodeBlock.__proto__ || Object.getPrototypeOf(CodeBlock), 'create', this).call(this, value);
      domNode.setAttribute('spellcheck', false);
      return domNode;
    }
  }, {
    key: 'formats',
    value: function formats() {
      return true;
    }
  }]);

  return CodeBlock;
}(_block2.default);

CodeBlock.blotName = 'code-block';
CodeBlock.tagName = 'PRE';
CodeBlock.TAB = '  ';

exports.Code = Code;
exports.default = CodeBlock;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _quillDelta = __webpack_require__(2);

var _quillDelta2 = _interopRequireDefault(_quillDelta);

var _op = __webpack_require__(20);

var _op2 = _interopRequireDefault(_op);

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _code = __webpack_require__(13);

var _code2 = _interopRequireDefault(_code);

var _cursor = __webpack_require__(24);

var _cursor2 = _interopRequireDefault(_cursor);

var _block = __webpack_require__(4);

var _block2 = _interopRequireDefault(_block);

var _break = __webpack_require__(16);

var _break2 = _interopRequireDefault(_break);

var _clone = __webpack_require__(21);

var _clone2 = _interopRequireDefault(_clone);

var _deepEqual = __webpack_require__(11);

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _extend = __webpack_require__(3);

var _extend2 = _interopRequireDefault(_extend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ASCII = /^[ -~]*$/;

var Editor = function () {
  function Editor(scroll) {
    _classCallCheck(this, Editor);

    this.scroll = scroll;
    this.delta = this.getDelta();
  }

  _createClass(Editor, [{
    key: 'applyDelta',
    value: function applyDelta(delta) {
      var _this = this;

      var consumeNextNewline = false;
      this.scroll.update();
      var scrollLength = this.scroll.length();
      this.scroll.batchStart();
      delta = normalizeDelta(delta);
      delta.reduce(function (index, op) {
        var length = op.retain || op.delete || op.insert.length || 1;
        var attributes = op.attributes || {};
        if (op.insert != null) {
          if (typeof op.insert === 'string') {
            var text = op.insert;
            if (text.endsWith('\n') && consumeNextNewline) {
              consumeNextNewline = false;
              text = text.slice(0, -1);
            }
            if (index >= scrollLength && !text.endsWith('\n')) {
              consumeNextNewline = true;
            }
            _this.scroll.insertAt(index, text);

            var _scroll$line = _this.scroll.line(index),
                _scroll$line2 = _slicedToArray(_scroll$line, 2),
                line = _scroll$line2[0],
                offset = _scroll$line2[1];

            var formats = (0, _extend2.default)({}, (0, _block.bubbleFormats)(line));
            if (line instanceof _block2.default) {
              var _line$descendant = line.descendant(_parchment2.default.Leaf, offset),
                  _line$descendant2 = _slicedToArray(_line$descendant, 1),
                  leaf = _line$descendant2[0];

              formats = (0, _extend2.default)(formats, (0, _block.bubbleFormats)(leaf));
            }
            attributes = _op2.default.attributes.diff(formats, attributes) || {};
          } else if (_typeof(op.insert) === 'object') {
            var key = Object.keys(op.insert)[0]; // There should only be one key
            if (key == null) return index;
            _this.scroll.insertAt(index, key, op.insert[key]);
          }
          scrollLength += length;
        }
        Object.keys(attributes).forEach(function (name) {
          _this.scroll.formatAt(index, length, name, attributes[name]);
        });
        return index + length;
      }, 0);
      delta.reduce(function (index, op) {
        if (typeof op.delete === 'number') {
          _this.scroll.deleteAt(index, op.delete);
          return index;
        }
        return index + (op.retain || op.insert.length || 1);
      }, 0);
      this.scroll.batchEnd();
      return this.update(delta);
    }
  }, {
    key: 'deleteText',
    value: function deleteText(index, length) {
      this.scroll.deleteAt(index, length);
      return this.update(new _quillDelta2.default().retain(index).delete(length));
    }
  }, {
    key: 'formatLine',
    value: function formatLine(index, length) {
      var _this2 = this;

      var formats = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      this.scroll.update();
      Object.keys(formats).forEach(function (format) {
        if (_this2.scroll.whitelist != null && !_this2.scroll.whitelist[format]) return;
        var lines = _this2.scroll.lines(index, Math.max(length, 1));
        var lengthRemaining = length;
        lines.forEach(function (line) {
          var lineLength = line.length();
          if (!(line instanceof _code2.default)) {
            line.format(format, formats[format]);
          } else {
            var codeIndex = index - line.offset(_this2.scroll);
            var codeLength = line.newlineIndex(codeIndex + lengthRemaining) - codeIndex + 1;
            line.formatAt(codeIndex, codeLength, format, formats[format]);
          }
          lengthRemaining -= lineLength;
        });
      });
      this.scroll.optimize();
      return this.update(new _quillDelta2.default().retain(index).retain(length, (0, _clone2.default)(formats)));
    }
  }, {
    key: 'formatText',
    value: function formatText(index, length) {
      var _this3 = this;

      var formats = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      Object.keys(formats).forEach(function (format) {
        _this3.scroll.formatAt(index, length, format, formats[format]);
      });
      return this.update(new _quillDelta2.default().retain(index).retain(length, (0, _clone2.default)(formats)));
    }
  }, {
    key: 'getContents',
    value: function getContents(index, length) {
      return this.delta.slice(index, index + length);
    }
  }, {
    key: 'getDelta',
    value: function getDelta() {
      return this.scroll.lines().reduce(function (delta, line) {
        return delta.concat(line.delta());
      }, new _quillDelta2.default());
    }
  }, {
    key: 'getFormat',
    value: function getFormat(index) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var lines = [],
          leaves = [];
      if (length === 0) {
        this.scroll.path(index).forEach(function (path) {
          var _path = _slicedToArray(path, 1),
              blot = _path[0];

          if (blot instanceof _block2.default) {
            lines.push(blot);
          } else if (blot instanceof _parchment2.default.Leaf) {
            leaves.push(blot);
          }
        });
      } else {
        lines = this.scroll.lines(index, length);
        leaves = this.scroll.descendants(_parchment2.default.Leaf, index, length);
      }
      var formatsArr = [lines, leaves].map(function (blots) {
        if (blots.length === 0) return {};
        var formats = (0, _block.bubbleFormats)(blots.shift());
        while (Object.keys(formats).length > 0) {
          var blot = blots.shift();
          if (blot == null) return formats;
          formats = combineFormats((0, _block.bubbleFormats)(blot), formats);
        }
        return formats;
      });
      return _extend2.default.apply(_extend2.default, formatsArr);
    }
  }, {
    key: 'getText',
    value: function getText(index, length) {
      return this.getContents(index, length).filter(function (op) {
        return typeof op.insert === 'string';
      }).map(function (op) {
        return op.insert;
      }).join('');
    }
  }, {
    key: 'insertEmbed',
    value: function insertEmbed(index, embed, value) {
      this.scroll.insertAt(index, embed, value);
      return this.update(new _quillDelta2.default().retain(index).insert(_defineProperty({}, embed, value)));
    }
  }, {
    key: 'insertText',
    value: function insertText(index, text) {
      var _this4 = this;

      var formats = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      text = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
      this.scroll.insertAt(index, text);
      Object.keys(formats).forEach(function (format) {
        _this4.scroll.formatAt(index, text.length, format, formats[format]);
      });
      return this.update(new _quillDelta2.default().retain(index).insert(text, (0, _clone2.default)(formats)));
    }
  }, {
    key: 'isBlank',
    value: function isBlank() {
      if (this.scroll.children.length == 0) return true;
      if (this.scroll.children.length > 1) return false;
      var block = this.scroll.children.head;
      if (block.statics.blotName !== _block2.default.blotName) return false;
      if (block.children.length > 1) return false;
      return block.children.head instanceof _break2.default;
    }
  }, {
    key: 'removeFormat',
    value: function removeFormat(index, length) {
      var text = this.getText(index, length);

      var _scroll$line3 = this.scroll.line(index + length),
          _scroll$line4 = _slicedToArray(_scroll$line3, 2),
          line = _scroll$line4[0],
          offset = _scroll$line4[1];

      var suffixLength = 0,
          suffix = new _quillDelta2.default();
      if (line != null) {
        if (!(line instanceof _code2.default)) {
          suffixLength = line.length() - offset;
        } else {
          suffixLength = line.newlineIndex(offset) - offset + 1;
        }
        suffix = line.delta().slice(offset, offset + suffixLength - 1).insert('\n');
      }
      var contents = this.getContents(index, length + suffixLength);
      var diff = contents.diff(new _quillDelta2.default().insert(text).concat(suffix));
      var delta = new _quillDelta2.default().retain(index).concat(diff);
      return this.applyDelta(delta);
    }
  }, {
    key: 'update',
    value: function update(change) {
      var mutations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var cursorIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

      var oldDelta = this.delta;
      if (mutations.length === 1 && mutations[0].type === 'characterData' && mutations[0].target.data.match(ASCII) && _parchment2.default.find(mutations[0].target)) {
        // Optimization for character changes
        var textBlot = _parchment2.default.find(mutations[0].target);
        var formats = (0, _block.bubbleFormats)(textBlot);
        var index = textBlot.offset(this.scroll);
        var oldValue = mutations[0].oldValue.replace(_cursor2.default.CONTENTS, '');
        var oldText = new _quillDelta2.default().insert(oldValue);
        var newText = new _quillDelta2.default().insert(textBlot.value());
        var diffDelta = new _quillDelta2.default().retain(index).concat(oldText.diff(newText, cursorIndex));
        change = diffDelta.reduce(function (delta, op) {
          if (op.insert) {
            return delta.insert(op.insert, formats);
          } else {
            return delta.push(op);
          }
        }, new _quillDelta2.default());
        this.delta = oldDelta.compose(change);
      } else {
        this.delta = this.getDelta();
        if (!change || !(0, _deepEqual2.default)(oldDelta.compose(change), this.delta)) {
          change = oldDelta.diff(this.delta, cursorIndex);
        }
      }
      return change;
    }
  }]);

  return Editor;
}();

function combineFormats(formats, combined) {
  return Object.keys(combined).reduce(function (merged, name) {
    if (formats[name] == null) return merged;
    if (combined[name] === formats[name]) {
      merged[name] = combined[name];
    } else if (Array.isArray(combined[name])) {
      if (combined[name].indexOf(formats[name]) < 0) {
        merged[name] = combined[name].concat([formats[name]]);
      }
    } else {
      merged[name] = [combined[name], formats[name]];
    }
    return merged;
  }, {});
}

function normalizeDelta(delta) {
  return delta.reduce(function (delta, op) {
    if (op.insert === 1) {
      var attributes = (0, _clone2.default)(op.attributes);
      delete attributes['image'];
      return delta.insert({ image: op.attributes.image }, attributes);
    }
    if (op.attributes != null && (op.attributes.list === true || op.attributes.bullet === true)) {
      op = (0, _clone2.default)(op);
      if (op.attributes.list) {
        op.attributes.list = 'ordered';
      } else {
        op.attributes.list = 'bullet';
        delete op.attributes.bullet;
      }
    }
    if (typeof op.insert === 'string') {
      var text = op.insert.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
      return delta.insert(text, op.attributes);
    }
    return delta.push(op);
  }, new _quillDelta2.default());
}

exports.default = Editor;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Range = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _clone = __webpack_require__(21);

var _clone2 = _interopRequireDefault(_clone);

var _deepEqual = __webpack_require__(11);

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _emitter3 = __webpack_require__(8);

var _emitter4 = _interopRequireDefault(_emitter3);

var _logger = __webpack_require__(10);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var debug = (0, _logger2.default)('quill:selection');

var Range = function Range(index) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  _classCallCheck(this, Range);

  this.index = index;
  this.length = length;
};

var Selection = function () {
  function Selection(scroll, emitter) {
    var _this = this;

    _classCallCheck(this, Selection);

    this.emitter = emitter;
    this.scroll = scroll;
    this.composing = false;
    this.mouseDown = false;
    this.root = this.scroll.domNode;
    this.cursor = _parchment2.default.create('cursor', this);
    // savedRange is last non-null range
    this.lastRange = this.savedRange = new Range(0, 0);
    this.handleComposition();
    this.handleDragging();
    this.emitter.listenDOM('selectionchange', document, function () {
      if (!_this.mouseDown) {
        setTimeout(_this.update.bind(_this, _emitter4.default.sources.USER), 1);
      }
    });
    this.emitter.on(_emitter4.default.events.EDITOR_CHANGE, function (type, delta) {
      if (type === _emitter4.default.events.TEXT_CHANGE && delta.length() > 0) {
        _this.update(_emitter4.default.sources.SILENT);
      }
    });
    this.emitter.on(_emitter4.default.events.SCROLL_BEFORE_UPDATE, function () {
      if (!_this.hasFocus()) return;
      var native = _this.getNativeRange();
      if (native == null) return;
      if (native.start.node === _this.cursor.textNode) return; // cursor.restore() will handle
      // TODO unclear if this has negative side effects
      _this.emitter.once(_emitter4.default.events.SCROLL_UPDATE, function () {
        try {
          _this.setNativeRange(native.start.node, native.start.offset, native.end.node, native.end.offset);
        } catch (ignored) {}
      });
    });
    this.emitter.on(_emitter4.default.events.SCROLL_OPTIMIZE, function (mutations, context) {
      if (context.range) {
        var _context$range = context.range,
            startNode = _context$range.startNode,
            startOffset = _context$range.startOffset,
            endNode = _context$range.endNode,
            endOffset = _context$range.endOffset;

        _this.setNativeRange(startNode, startOffset, endNode, endOffset);
      }
    });
    this.update(_emitter4.default.sources.SILENT);
  }

  _createClass(Selection, [{
    key: 'handleComposition',
    value: function handleComposition() {
      var _this2 = this;

      this.root.addEventListener('compositionstart', function () {
        _this2.composing = true;
      });
      this.root.addEventListener('compositionend', function () {
        _this2.composing = false;
        if (_this2.cursor.parent) {
          var range = _this2.cursor.restore();
          if (!range) return;
          setTimeout(function () {
            _this2.setNativeRange(range.startNode, range.startOffset, range.endNode, range.endOffset);
          }, 1);
        }
      });
    }
  }, {
    key: 'handleDragging',
    value: function handleDragging() {
      var _this3 = this;

      this.emitter.listenDOM('mousedown', document.body, function () {
        _this3.mouseDown = true;
      });
      this.emitter.listenDOM('mouseup', document.body, function () {
        _this3.mouseDown = false;
        _this3.update(_emitter4.default.sources.USER);
      });
    }
  }, {
    key: 'focus',
    value: function focus() {
      if (this.hasFocus()) return;
      this.root.focus();
      this.setRange(this.savedRange);
    }
  }, {
    key: 'format',
    value: function format(_format, value) {
      if (this.scroll.whitelist != null && !this.scroll.whitelist[_format]) return;
      this.scroll.update();
      var nativeRange = this.getNativeRange();
      if (nativeRange == null || !nativeRange.native.collapsed || _parchment2.default.query(_format, _parchment2.default.Scope.BLOCK)) return;
      if (nativeRange.start.node !== this.cursor.textNode) {
        var blot = _parchment2.default.find(nativeRange.start.node, false);
        if (blot == null) return;
        // TODO Give blot ability to not split
        if (blot instanceof _parchment2.default.Leaf) {
          var after = blot.split(nativeRange.start.offset);
          blot.parent.insertBefore(this.cursor, after);
        } else {
          blot.insertBefore(this.cursor, nativeRange.start.node); // Should never happen
        }
        this.cursor.attach();
      }
      this.cursor.format(_format, value);
      this.scroll.optimize();
      this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length);
      this.update();
    }
  }, {
    key: 'getBounds',
    value: function getBounds(index) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var scrollLength = this.scroll.length();
      index = Math.min(index, scrollLength - 1);
      length = Math.min(index + length, scrollLength - 1) - index;
      var node = void 0,
          _scroll$leaf = this.scroll.leaf(index),
          _scroll$leaf2 = _slicedToArray(_scroll$leaf, 2),
          leaf = _scroll$leaf2[0],
          offset = _scroll$leaf2[1];
      if (leaf == null) return null;

      var _leaf$position = leaf.position(offset, true);

      var _leaf$position2 = _slicedToArray(_leaf$position, 2);

      node = _leaf$position2[0];
      offset = _leaf$position2[1];

      var range = document.createRange();
      if (length > 0) {
        range.setStart(node, offset);

        var _scroll$leaf3 = this.scroll.leaf(index + length);

        var _scroll$leaf4 = _slicedToArray(_scroll$leaf3, 2);

        leaf = _scroll$leaf4[0];
        offset = _scroll$leaf4[1];

        if (leaf == null) return null;

        var _leaf$position3 = leaf.position(offset, true);

        var _leaf$position4 = _slicedToArray(_leaf$position3, 2);

        node = _leaf$position4[0];
        offset = _leaf$position4[1];

        range.setEnd(node, offset);
        return range.getBoundingClientRect();
      } else {
        var side = 'left';
        var rect = void 0;
        if (node instanceof Text) {
          if (offset < node.data.length) {
            range.setStart(node, offset);
            range.setEnd(node, offset + 1);
          } else {
            range.setStart(node, offset - 1);
            range.setEnd(node, offset);
            side = 'right';
          }
          rect = range.getBoundingClientRect();
        } else {
          rect = leaf.domNode.getBoundingClientRect();
          if (offset > 0) side = 'right';
        }
        return {
          bottom: rect.top + rect.height,
          height: rect.height,
          left: rect[side],
          right: rect[side],
          top: rect.top,
          width: 0
        };
      }
    }
  }, {
    key: 'getNativeRange',
    value: function getNativeRange() {
      var selection = document.getSelection();
      if (selection == null || selection.rangeCount <= 0) return null;
      var nativeRange = selection.getRangeAt(0);
      if (nativeRange == null) return null;
      var range = this.normalizeNative(nativeRange);
      debug.info('getNativeRange', range);
      return range;
    }
  }, {
    key: 'getRange',
    value: function getRange() {
      var normalized = this.getNativeRange();
      if (normalized == null) return [null, null];
      var range = this.normalizedToRange(normalized);
      return [range, normalized];
    }
  }, {
    key: 'hasFocus',
    value: function hasFocus() {
      return document.activeElement === this.root;
    }
  }, {
    key: 'normalizedToRange',
    value: function normalizedToRange(range) {
      var _this4 = this;

      var positions = [[range.start.node, range.start.offset]];
      if (!range.native.collapsed) {
        positions.push([range.end.node, range.end.offset]);
      }
      var indexes = positions.map(function (position) {
        var _position = _slicedToArray(position, 2),
            node = _position[0],
            offset = _position[1];

        var blot = _parchment2.default.find(node, true);
        var index = blot.offset(_this4.scroll);
        if (offset === 0) {
          return index;
        } else if (blot instanceof _parchment2.default.Container) {
          return index + blot.length();
        } else {
          return index + blot.index(node, offset);
        }
      });
      var end = Math.min(Math.max.apply(Math, _toConsumableArray(indexes)), this.scroll.length() - 1);
      var start = Math.min.apply(Math, [end].concat(_toConsumableArray(indexes)));
      return new Range(start, end - start);
    }
  }, {
    key: 'normalizeNative',
    value: function normalizeNative(nativeRange) {
      if (!contains(this.root, nativeRange.startContainer) || !nativeRange.collapsed && !contains(this.root, nativeRange.endContainer)) {
        return null;
      }
      var range = {
        start: { node: nativeRange.startContainer, offset: nativeRange.startOffset },
        end: { node: nativeRange.endContainer, offset: nativeRange.endOffset },
        native: nativeRange
      };
      [range.start, range.end].forEach(function (position) {
        var node = position.node,
            offset = position.offset;
        while (!(node instanceof Text) && node.childNodes.length > 0) {
          if (node.childNodes.length > offset) {
            node = node.childNodes[offset];
            offset = 0;
          } else if (node.childNodes.length === offset) {
            node = node.lastChild;
            offset = node instanceof Text ? node.data.length : node.childNodes.length + 1;
          } else {
            break;
          }
        }
        position.node = node, position.offset = offset;
      });
      return range;
    }
  }, {
    key: 'rangeToNative',
    value: function rangeToNative(range) {
      var _this5 = this;

      var indexes = range.collapsed ? [range.index] : [range.index, range.index + range.length];
      var args = [];
      var scrollLength = this.scroll.length();
      indexes.forEach(function (index, i) {
        index = Math.min(scrollLength - 1, index);
        var node = void 0,
            _scroll$leaf5 = _this5.scroll.leaf(index),
            _scroll$leaf6 = _slicedToArray(_scroll$leaf5, 2),
            leaf = _scroll$leaf6[0],
            offset = _scroll$leaf6[1];
        var _leaf$position5 = leaf.position(offset, i !== 0);

        var _leaf$position6 = _slicedToArray(_leaf$position5, 2);

        node = _leaf$position6[0];
        offset = _leaf$position6[1];

        args.push(node, offset);
      });
      if (args.length < 2) {
        args = args.concat(args);
      }
      return args;
    }
  }, {
    key: 'scrollIntoView',
    value: function scrollIntoView(scrollingContainer) {
      var range = this.lastRange;
      if (range == null) return;
      var bounds = this.getBounds(range.index, range.length);
      if (bounds == null) return;
      var limit = this.scroll.length() - 1;

      var _scroll$line = this.scroll.line(Math.min(range.index, limit)),
          _scroll$line2 = _slicedToArray(_scroll$line, 1),
          first = _scroll$line2[0];

      var last = first;
      if (range.length > 0) {
        var _scroll$line3 = this.scroll.line(Math.min(range.index + range.length, limit));

        var _scroll$line4 = _slicedToArray(_scroll$line3, 1);

        last = _scroll$line4[0];
      }
      if (first == null || last == null) return;
      var scrollBounds = scrollingContainer.getBoundingClientRect();
      if (bounds.top < scrollBounds.top) {
        scrollingContainer.scrollTop -= scrollBounds.top - bounds.top;
      } else if (bounds.bottom > scrollBounds.bottom) {
        scrollingContainer.scrollTop += bounds.bottom - scrollBounds.bottom;
      }
    }
  }, {
    key: 'setNativeRange',
    value: function setNativeRange(startNode, startOffset) {
      var endNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : startNode;
      var endOffset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : startOffset;
      var force = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

      debug.info('setNativeRange', startNode, startOffset, endNode, endOffset);
      if (startNode != null && (this.root.parentNode == null || startNode.parentNode == null || endNode.parentNode == null)) {
        return;
      }
      var selection = document.getSelection();
      if (selection == null) return;
      if (startNode != null) {
        if (!this.hasFocus()) this.root.focus();
        var native = (this.getNativeRange() || {}).native;
        if (native == null || force || startNode !== native.startContainer || startOffset !== native.startOffset || endNode !== native.endContainer || endOffset !== native.endOffset) {

          if (startNode.tagName == "BR") {
            startOffset = [].indexOf.call(startNode.parentNode.childNodes, startNode);
            startNode = startNode.parentNode;
          }
          if (endNode.tagName == "BR") {
            endOffset = [].indexOf.call(endNode.parentNode.childNodes, endNode);
            endNode = endNode.parentNode;
          }
          var range = document.createRange();
          range.setStart(startNode, startOffset);
          range.setEnd(endNode, endOffset);
          selection.removeAllRanges();
          selection.addRange(range);
        }
      } else {
        selection.removeAllRanges();
        this.root.blur();
        document.body.focus(); // root.blur() not enough on IE11+Travis+SauceLabs (but not local VMs)
      }
    }
  }, {
    key: 'setRange',
    value: function setRange(range) {
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _emitter4.default.sources.API;

      if (typeof force === 'string') {
        source = force;
        force = false;
      }
      debug.info('setRange', range);
      if (range != null) {
        var args = this.rangeToNative(range);
        this.setNativeRange.apply(this, _toConsumableArray(args).concat([force]));
      } else {
        this.setNativeRange(null);
      }
      this.update(source);
    }
  }, {
    key: 'update',
    value: function update() {
      var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _emitter4.default.sources.USER;

      var oldRange = this.lastRange;

      var _getRange = this.getRange(),
          _getRange2 = _slicedToArray(_getRange, 2),
          lastRange = _getRange2[0],
          nativeRange = _getRange2[1];

      this.lastRange = lastRange;
      if (this.lastRange != null) {
        this.savedRange = this.lastRange;
      }
      if (!(0, _deepEqual2.default)(oldRange, this.lastRange)) {
        var _emitter;

        if (!this.composing && nativeRange != null && nativeRange.native.collapsed && nativeRange.start.node !== this.cursor.textNode) {
          this.cursor.restore();
        }
        var args = [_emitter4.default.events.SELECTION_CHANGE, (0, _clone2.default)(this.lastRange), (0, _clone2.default)(oldRange), source];
        (_emitter = this.emitter).emit.apply(_emitter, [_emitter4.default.events.EDITOR_CHANGE].concat(args));
        if (source !== _emitter4.default.sources.SILENT) {
          var _emitter2;

          (_emitter2 = this.emitter).emit.apply(_emitter2, args);
        }
      }
    }
  }]);

  return Selection;
}();

function contains(parent, descendant) {
  try {
    // Firefox inserts inaccessible nodes around video elements
    descendant.parentNode;
  } catch (e) {
    return false;
  }
  // IE11 has bug with Text nodes
  // https://connect.microsoft.com/IE/feedback/details/780874/node-contains-is-incorrect
  if (descendant instanceof Text) {
    descendant = descendant.parentNode;
  }
  return parent.contains(descendant);
}

exports.Range = Range;
exports.default = Selection;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Break = function (_Parchment$Embed) {
  _inherits(Break, _Parchment$Embed);

  function Break() {
    _classCallCheck(this, Break);

    return _possibleConstructorReturn(this, (Break.__proto__ || Object.getPrototypeOf(Break)).apply(this, arguments));
  }

  _createClass(Break, [{
    key: 'insertInto',
    value: function insertInto(parent, ref) {
      if (parent.children.length === 0) {
        _get(Break.prototype.__proto__ || Object.getPrototypeOf(Break.prototype), 'insertInto', this).call(this, parent, ref);
      } else {
        this.remove();
      }
    }
  }, {
    key: 'length',
    value: function length() {
      return 0;
    }
  }, {
    key: 'value',
    value: function value() {
      return '';
    }
  }], [{
    key: 'value',
    value: function value() {
      return undefined;
    }
  }]);

  return Break;
}(_parchment2.default.Embed);

Break.blotName = 'break';
Break.tagName = 'BR';

exports.default = Break;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var linked_list_1 = __webpack_require__(44);
var shadow_1 = __webpack_require__(30);
var Registry = __webpack_require__(1);
var ContainerBlot = /** @class */ (function (_super) {
    __extends(ContainerBlot, _super);
    function ContainerBlot(domNode) {
        var _this = _super.call(this, domNode) || this;
        _this.build();
        return _this;
    }
    ContainerBlot.prototype.appendChild = function (other) {
        this.insertBefore(other);
    };
    ContainerBlot.prototype.attach = function () {
        _super.prototype.attach.call(this);
        this.children.forEach(function (child) {
            child.attach();
        });
    };
    ContainerBlot.prototype.build = function () {
        var _this = this;
        this.children = new linked_list_1.default();
        // Need to be reversed for if DOM nodes already in order
        [].slice
            .call(this.domNode.childNodes)
            .reverse()
            .forEach(function (node) {
            try {
                var child = makeBlot(node);
                _this.insertBefore(child, _this.children.head || undefined);
            }
            catch (err) {
                if (err instanceof Registry.ParchmentError)
                    return;
                else
                    throw err;
            }
        });
    };
    ContainerBlot.prototype.deleteAt = function (index, length) {
        if (index === 0 && length === this.length()) {
            return this.remove();
        }
        this.children.forEachAt(index, length, function (child, offset, length) {
            child.deleteAt(offset, length);
        });
    };
    ContainerBlot.prototype.descendant = function (criteria, index) {
        var _a = this.children.find(index), child = _a[0], offset = _a[1];
        if ((criteria.blotName == null && criteria(child)) ||
            (criteria.blotName != null && child instanceof criteria)) {
            return [child, offset];
        }
        else if (child instanceof ContainerBlot) {
            return child.descendant(criteria, offset);
        }
        else {
            return [null, -1];
        }
    };
    ContainerBlot.prototype.descendants = function (criteria, index, length) {
        if (index === void 0) { index = 0; }
        if (length === void 0) { length = Number.MAX_VALUE; }
        var descendants = [];
        var lengthLeft = length;
        this.children.forEachAt(index, length, function (child, index, length) {
            if ((criteria.blotName == null && criteria(child)) ||
                (criteria.blotName != null && child instanceof criteria)) {
                descendants.push(child);
            }
            if (child instanceof ContainerBlot) {
                descendants = descendants.concat(child.descendants(criteria, index, lengthLeft));
            }
            lengthLeft -= length;
        });
        return descendants;
    };
    ContainerBlot.prototype.detach = function () {
        this.children.forEach(function (child) {
            child.detach();
        });
        _super.prototype.detach.call(this);
    };
    ContainerBlot.prototype.formatAt = function (index, length, name, value) {
        this.children.forEachAt(index, length, function (child, offset, length) {
            child.formatAt(offset, length, name, value);
        });
    };
    ContainerBlot.prototype.insertAt = function (index, value, def) {
        var _a = this.children.find(index), child = _a[0], offset = _a[1];
        if (child) {
            child.insertAt(offset, value, def);
        }
        else {
            var blot = def == null ? Registry.create('text', value) : Registry.create(value, def);
            this.appendChild(blot);
        }
    };
    ContainerBlot.prototype.insertBefore = function (childBlot, refBlot) {
        if (this.statics.allowedChildren != null &&
            !this.statics.allowedChildren.some(function (child) {
                return childBlot instanceof child;
            })) {
            throw new Registry.ParchmentError("Cannot insert " + childBlot.statics.blotName + " into " + this.statics.blotName);
        }
        childBlot.insertInto(this, refBlot);
    };
    ContainerBlot.prototype.length = function () {
        return this.children.reduce(function (memo, child) {
            return memo + child.length();
        }, 0);
    };
    ContainerBlot.prototype.moveChildren = function (targetParent, refNode) {
        this.children.forEach(function (child) {
            targetParent.insertBefore(child, refNode);
        });
    };
    ContainerBlot.prototype.optimize = function (context) {
        _super.prototype.optimize.call(this, context);
        if (this.children.length === 0) {
            if (this.statics.defaultChild != null) {
                var child = Registry.create(this.statics.defaultChild);
                this.appendChild(child);
                child.optimize(context);
            }
            else {
                this.remove();
            }
        }
    };
    ContainerBlot.prototype.path = function (index, inclusive) {
        if (inclusive === void 0) { inclusive = false; }
        var _a = this.children.find(index, inclusive), child = _a[0], offset = _a[1];
        var position = [[this, index]];
        if (child instanceof ContainerBlot) {
            return position.concat(child.path(offset, inclusive));
        }
        else if (child != null) {
            position.push([child, offset]);
        }
        return position;
    };
    ContainerBlot.prototype.removeChild = function (child) {
        this.children.remove(child);
    };
    ContainerBlot.prototype.replace = function (target) {
        if (target instanceof ContainerBlot) {
            target.moveChildren(this);
        }
        _super.prototype.replace.call(this, target);
    };
    ContainerBlot.prototype.split = function (index, force) {
        if (force === void 0) { force = false; }
        if (!force) {
            if (index === 0)
                return this;
            if (index === this.length())
                return this.next;
        }
        var after = this.clone();
        this.parent.insertBefore(after, this.next);
        this.children.forEachAt(index, this.length(), function (child, offset, length) {
            child = child.split(offset, force);
            after.appendChild(child);
        });
        return after;
    };
    ContainerBlot.prototype.unwrap = function () {
        this.moveChildren(this.parent, this.next);
        this.remove();
    };
    ContainerBlot.prototype.update = function (mutations, context) {
        var _this = this;
        var addedNodes = [];
        var removedNodes = [];
        mutations.forEach(function (mutation) {
            if (mutation.target === _this.domNode && mutation.type === 'childList') {
                addedNodes.push.apply(addedNodes, mutation.addedNodes);
                removedNodes.push.apply(removedNodes, mutation.removedNodes);
            }
        });
        removedNodes.forEach(function (node) {
            // Check node has actually been removed
            // One exception is Chrome does not immediately remove IFRAMEs
            // from DOM but MutationRecord is correct in its reported removal
            if (node.parentNode != null &&
                // @ts-ignore
                node.tagName !== 'IFRAME' &&
                document.body.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_CONTAINED_BY) {
                return;
            }
            var blot = Registry.find(node);
            if (blot == null)
                return;
            if (blot.domNode.parentNode == null || blot.domNode.parentNode === _this.domNode) {
                blot.detach();
            }
        });
        addedNodes
            .filter(function (node) {
            return node.parentNode == _this.domNode;
        })
            .sort(function (a, b) {
            if (a === b)
                return 0;
            if (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING) {
                return 1;
            }
            return -1;
        })
            .forEach(function (node) {
            var refBlot = null;
            if (node.nextSibling != null) {
                refBlot = Registry.find(node.nextSibling);
            }
            var blot = makeBlot(node);
            if (blot.next != refBlot || blot.next == null) {
                if (blot.parent != null) {
                    blot.parent.removeChild(_this);
                }
                _this.insertBefore(blot, refBlot || undefined);
            }
        });
    };
    return ContainerBlot;
}(shadow_1.default));
function makeBlot(node) {
    var blot = Registry.find(node);
    if (blot == null) {
        try {
            blot = Registry.create(node);
        }
        catch (e) {
            blot = Registry.create(Registry.Scope.INLINE);
            [].slice.call(node.childNodes).forEach(function (child) {
                // @ts-ignore
                blot.domNode.appendChild(child);
            });
            if (node.parentNode) {
                node.parentNode.replaceChild(blot.domNode, node);
            }
            blot.attach();
        }
    }
    return blot;
}
exports.default = ContainerBlot;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var attributor_1 = __webpack_require__(12);
var store_1 = __webpack_require__(31);
var container_1 = __webpack_require__(17);
var Registry = __webpack_require__(1);
var FormatBlot = /** @class */ (function (_super) {
    __extends(FormatBlot, _super);
    function FormatBlot(domNode) {
        var _this = _super.call(this, domNode) || this;
        _this.attributes = new store_1.default(_this.domNode);
        return _this;
    }
    FormatBlot.formats = function (domNode) {
        if (typeof this.tagName === 'string') {
            return true;
        }
        else if (Array.isArray(this.tagName)) {
            return domNode.tagName.toLowerCase();
        }
        return undefined;
    };
    FormatBlot.prototype.format = function (name, value) {
        var format = Registry.query(name);
        if (format instanceof attributor_1.default) {
            this.attributes.attribute(format, value);
        }
        else if (value) {
            if (format != null && (name !== this.statics.blotName || this.formats()[name] !== value)) {
                this.replaceWith(name, value);
            }
        }
    };
    FormatBlot.prototype.formats = function () {
        var formats = this.attributes.values();
        var format = this.statics.formats(this.domNode);
        if (format != null) {
            formats[this.statics.blotName] = format;
        }
        return formats;
    };
    FormatBlot.prototype.replaceWith = function (name, value) {
        var replacement = _super.prototype.replaceWith.call(this, name, value);
        this.attributes.copy(replacement);
        return replacement;
    };
    FormatBlot.prototype.update = function (mutations, context) {
        var _this = this;
        _super.prototype.update.call(this, mutations, context);
        if (mutations.some(function (mutation) {
            return mutation.target === _this.domNode && mutation.type === 'attributes';
        })) {
            this.attributes.build();
        }
    };
    FormatBlot.prototype.wrap = function (name, value) {
        var wrapper = _super.prototype.wrap.call(this, name, value);
        if (wrapper instanceof FormatBlot && wrapper.statics.scope === this.statics.scope) {
            this.attributes.move(wrapper);
        }
        return wrapper;
    };
    return FormatBlot;
}(container_1.default));
exports.default = FormatBlot;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var shadow_1 = __webpack_require__(30);
var Registry = __webpack_require__(1);
var LeafBlot = /** @class */ (function (_super) {
    __extends(LeafBlot, _super);
    function LeafBlot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LeafBlot.value = function (domNode) {
        return true;
    };
    LeafBlot.prototype.index = function (node, offset) {
        if (this.domNode === node ||
            this.domNode.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_CONTAINED_BY) {
            return Math.min(offset, 1);
        }
        return -1;
    };
    LeafBlot.prototype.position = function (index, inclusive) {
        var offset = [].indexOf.call(this.parent.domNode.childNodes, this.domNode);
        if (index > 0)
            offset += 1;
        return [this.parent.domNode, offset];
    };
    LeafBlot.prototype.value = function () {
        var _a;
        return _a = {}, _a[this.statics.blotName] = this.statics.value(this.domNode) || true, _a;
    };
    LeafBlot.scope = Registry.Scope.INLINE_BLOT;
    return LeafBlot;
}(shadow_1.default));
exports.default = LeafBlot;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var equal = __webpack_require__(11);
var extend = __webpack_require__(3);


var lib = {
  attributes: {
    compose: function (a, b, keepNull) {
      if (typeof a !== 'object') a = {};
      if (typeof b !== 'object') b = {};
      var attributes = extend(true, {}, b);
      if (!keepNull) {
        attributes = Object.keys(attributes).reduce(function (copy, key) {
          if (attributes[key] != null) {
            copy[key] = attributes[key];
          }
          return copy;
        }, {});
      }
      for (var key in a) {
        if (a[key] !== undefined && b[key] === undefined) {
          attributes[key] = a[key];
        }
      }
      return Object.keys(attributes).length > 0 ? attributes : undefined;
    },

    diff: function(a, b) {
      if (typeof a !== 'object') a = {};
      if (typeof b !== 'object') b = {};
      var attributes = Object.keys(a).concat(Object.keys(b)).reduce(function (attributes, key) {
        if (!equal(a[key], b[key])) {
          attributes[key] = b[key] === undefined ? null : b[key];
        }
        return attributes;
      }, {});
      return Object.keys(attributes).length > 0 ? attributes : undefined;
    },

    transform: function (a, b, priority) {
      if (typeof a !== 'object') return b;
      if (typeof b !== 'object') return undefined;
      if (!priority) return b;  // b simply overwrites us without priority
      var attributes = Object.keys(b).reduce(function (attributes, key) {
        if (a[key] === undefined) attributes[key] = b[key];  // null is a valid value
        return attributes;
      }, {});
      return Object.keys(attributes).length > 0 ? attributes : undefined;
    }
  },

  iterator: function (ops) {
    return new Iterator(ops);
  },

  length: function (op) {
    if (typeof op['delete'] === 'number') {
      return op['delete'];
    } else if (typeof op.retain === 'number') {
      return op.retain;
    } else {
      return typeof op.insert === 'string' ? op.insert.length : 1;
    }
  }
};


function Iterator(ops) {
  this.ops = ops;
  this.index = 0;
  this.offset = 0;
};

Iterator.prototype.hasNext = function () {
  return this.peekLength() < Infinity;
};

Iterator.prototype.next = function (length) {
  if (!length) length = Infinity;
  var nextOp = this.ops[this.index];
  if (nextOp) {
    var offset = this.offset;
    var opLength = lib.length(nextOp)
    if (length >= opLength - offset) {
      length = opLength - offset;
      this.index += 1;
      this.offset = 0;
    } else {
      this.offset += length;
    }
    if (typeof nextOp['delete'] === 'number') {
      return { 'delete': length };
    } else {
      var retOp = {};
      if (nextOp.attributes) {
        retOp.attributes = nextOp.attributes;
      }
      if (typeof nextOp.retain === 'number') {
        retOp.retain = length;
      } else if (typeof nextOp.insert === 'string') {
        retOp.insert = nextOp.insert.substr(offset, length);
      } else {
        // offset should === 0, length should === 1
        retOp.insert = nextOp.insert;
      }
      return retOp;
    }
  } else {
    return { retain: Infinity };
  }
};

Iterator.prototype.peek = function () {
  return this.ops[this.index];
};

Iterator.prototype.peekLength = function () {
  if (this.ops[this.index]) {
    // Should never return 0 if our index is being managed correctly
    return lib.length(this.ops[this.index]) - this.offset;
  } else {
    return Infinity;
  }
};

Iterator.prototype.peekType = function () {
  if (this.ops[this.index]) {
    if (typeof this.ops[this.index]['delete'] === 'number') {
      return 'delete';
    } else if (typeof this.ops[this.index].retain === 'number') {
      return 'retain';
    } else {
      return 'insert';
    }
  }
  return 'retain';
};

Iterator.prototype.rest = function () {
  if (!this.hasNext()) {
    return [];
  } else if (this.offset === 0) {
    return this.ops.slice(this.index);
  } else {
    var offset = this.offset;
    var index = this.index;
    var next = this.next();
    var rest = this.ops.slice(this.index);
    this.offset = offset;
    this.index = index;
    return [next].concat(rest);
  }
};


module.exports = lib;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

var clone = (function() {
'use strict';

function _instanceof(obj, type) {
  return type != null && obj instanceof type;
}

var nativeMap;
try {
  nativeMap = Map;
} catch(_) {
  // maybe a reference error because no `Map`. Give it a dummy value that no
  // value will ever be an instanceof.
  nativeMap = function() {};
}

var nativeSet;
try {
  nativeSet = Set;
} catch(_) {
  nativeSet = function() {};
}

var nativePromise;
try {
  nativePromise = Promise;
} catch(_) {
  nativePromise = function() {};
}

/**
 * Clones (copies) an Object using deep copying.
 *
 * This function supports circular references by default, but if you are certain
 * there are no circular references in your object, you can save some CPU time
 * by calling clone(obj, false).
 *
 * Caution: if `circular` is false and `parent` contains circular references,
 * your program may enter an infinite loop and crash.
 *
 * @param `parent` - the object to be cloned
 * @param `circular` - set to true if the object to be cloned may contain
 *    circular references. (optional - true by default)
 * @param `depth` - set to a number if the object is only to be cloned to
 *    a particular depth. (optional - defaults to Infinity)
 * @param `prototype` - sets the prototype to be used when cloning an object.
 *    (optional - defaults to parent prototype).
 * @param `includeNonEnumerable` - set to true if the non-enumerable properties
 *    should be cloned as well. Non-enumerable properties on the prototype
 *    chain will be ignored. (optional - false by default)
*/
function clone(parent, circular, depth, prototype, includeNonEnumerable) {
  if (typeof circular === 'object') {
    depth = circular.depth;
    prototype = circular.prototype;
    includeNonEnumerable = circular.includeNonEnumerable;
    circular = circular.circular;
  }
  // maintain two arrays for circular references, where corresponding parents
  // and children have the same index
  var allParents = [];
  var allChildren = [];

  var useBuffer = typeof Buffer != 'undefined';

  if (typeof circular == 'undefined')
    circular = true;

  if (typeof depth == 'undefined')
    depth = Infinity;

  // recurse this function so we don't reset allParents and allChildren
  function _clone(parent, depth) {
    // cloning null always returns null
    if (parent === null)
      return null;

    if (depth === 0)
      return parent;

    var child;
    var proto;
    if (typeof parent != 'object') {
      return parent;
    }

    if (_instanceof(parent, nativeMap)) {
      child = new nativeMap();
    } else if (_instanceof(parent, nativeSet)) {
      child = new nativeSet();
    } else if (_instanceof(parent, nativePromise)) {
      child = new nativePromise(function (resolve, reject) {
        parent.then(function(value) {
          resolve(_clone(value, depth - 1));
        }, function(err) {
          reject(_clone(err, depth - 1));
        });
      });
    } else if (clone.__isArray(parent)) {
      child = [];
    } else if (clone.__isRegExp(parent)) {
      child = new RegExp(parent.source, __getRegExpFlags(parent));
      if (parent.lastIndex) child.lastIndex = parent.lastIndex;
    } else if (clone.__isDate(parent)) {
      child = new Date(parent.getTime());
    } else if (useBuffer && Buffer.isBuffer(parent)) {
      if (Buffer.allocUnsafe) {
        // Node.js >= 4.5.0
        child = Buffer.allocUnsafe(parent.length);
      } else {
        // Older Node.js versions
        child = new Buffer(parent.length);
      }
      parent.copy(child);
      return child;
    } else if (_instanceof(parent, Error)) {
      child = Object.create(parent);
    } else {
      if (typeof prototype == 'undefined') {
        proto = Object.getPrototypeOf(parent);
        child = Object.create(proto);
      }
      else {
        child = Object.create(prototype);
        proto = prototype;
      }
    }

    if (circular) {
      var index = allParents.indexOf(parent);

      if (index != -1) {
        return allChildren[index];
      }
      allParents.push(parent);
      allChildren.push(child);
    }

    if (_instanceof(parent, nativeMap)) {
      parent.forEach(function(value, key) {
        var keyChild = _clone(key, depth - 1);
        var valueChild = _clone(value, depth - 1);
        child.set(keyChild, valueChild);
      });
    }
    if (_instanceof(parent, nativeSet)) {
      parent.forEach(function(value) {
        var entryChild = _clone(value, depth - 1);
        child.add(entryChild);
      });
    }

    for (var i in parent) {
      var attrs;
      if (proto) {
        attrs = Object.getOwnPropertyDescriptor(proto, i);
      }

      if (attrs && attrs.set == null) {
        continue;
      }
      child[i] = _clone(parent[i], depth - 1);
    }

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(parent);
      for (var i = 0; i < symbols.length; i++) {
        // Don't need to worry about cloning a symbol because it is a primitive,
        // like a number or string.
        var symbol = symbols[i];
        var descriptor = Object.getOwnPropertyDescriptor(parent, symbol);
        if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
          continue;
        }
        child[symbol] = _clone(parent[symbol], depth - 1);
        if (!descriptor.enumerable) {
          Object.defineProperty(child, symbol, {
            enumerable: false
          });
        }
      }
    }

    if (includeNonEnumerable) {
      var allPropertyNames = Object.getOwnPropertyNames(parent);
      for (var i = 0; i < allPropertyNames.length; i++) {
        var propertyName = allPropertyNames[i];
        var descriptor = Object.getOwnPropertyDescriptor(parent, propertyName);
        if (descriptor && descriptor.enumerable) {
          continue;
        }
        child[propertyName] = _clone(parent[propertyName], depth - 1);
        Object.defineProperty(child, propertyName, {
          enumerable: false
        });
      }
    }

    return child;
  }

  return _clone(parent, depth);
}

/**
 * Simple flat clone using prototype, accepts only objects, usefull for property
 * override on FLAT configuration object (no nested props).
 *
 * USE WITH CAUTION! This may not behave as you wish if you do not know how this
 * works.
 */
clone.clonePrototype = function clonePrototype(parent) {
  if (parent === null)
    return null;

  var c = function () {};
  c.prototype = parent;
  return new c();
};

// private utility functions

function __objToStr(o) {
  return Object.prototype.toString.call(o);
}
clone.__objToStr = __objToStr;

function __isDate(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Date]';
}
clone.__isDate = __isDate;

function __isArray(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Array]';
}
clone.__isArray = __isArray;

function __isRegExp(o) {
  return typeof o === 'object' && __objToStr(o) === '[object RegExp]';
}
clone.__isRegExp = __isRegExp;

function __getRegExpFlags(re) {
  var flags = '';
  if (re.global) flags += 'g';
  if (re.ignoreCase) flags += 'i';
  if (re.multiline) flags += 'm';
  return flags;
}
clone.__getRegExpFlags = __getRegExpFlags;

return clone;
})();

if (typeof module === 'object' && module.exports) {
  module.exports = clone;
}


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _emitter = __webpack_require__(8);

var _emitter2 = _interopRequireDefault(_emitter);

var _block = __webpack_require__(4);

var _block2 = _interopRequireDefault(_block);

var _break = __webpack_require__(16);

var _break2 = _interopRequireDefault(_break);

var _code = __webpack_require__(13);

var _code2 = _interopRequireDefault(_code);

var _container = __webpack_require__(25);

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function isLine(blot) {
  return blot instanceof _block2.default || blot instanceof _block.BlockEmbed;
}

var Scroll = function (_Parchment$Scroll) {
  _inherits(Scroll, _Parchment$Scroll);

  function Scroll(domNode, config) {
    _classCallCheck(this, Scroll);

    var _this = _possibleConstructorReturn(this, (Scroll.__proto__ || Object.getPrototypeOf(Scroll)).call(this, domNode));

    _this.emitter = config.emitter;
    if (Array.isArray(config.whitelist)) {
      _this.whitelist = config.whitelist.reduce(function (whitelist, format) {
        whitelist[format] = true;
        return whitelist;
      }, {});
    }
    // Some reason fixes composition issues with character languages in Windows/Chrome, Safari
    _this.domNode.addEventListener('DOMNodeInserted', function () {});
    _this.optimize();
    _this.enable();
    return _this;
  }

  _createClass(Scroll, [{
    key: 'batchStart',
    value: function batchStart() {
      this.batch = true;
    }
  }, {
    key: 'batchEnd',
    value: function batchEnd() {
      this.batch = false;
      this.optimize();
    }
  }, {
    key: 'deleteAt',
    value: function deleteAt(index, length) {
      var _line = this.line(index),
          _line2 = _slicedToArray(_line, 2),
          first = _line2[0],
          offset = _line2[1];

      var _line3 = this.line(index + length),
          _line4 = _slicedToArray(_line3, 1),
          last = _line4[0];

      _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'deleteAt', this).call(this, index, length);
      if (last != null && first !== last && offset > 0) {
        if (first instanceof _block.BlockEmbed || last instanceof _block.BlockEmbed) {
          this.optimize();
          return;
        }
        if (first instanceof _code2.default) {
          var newlineIndex = first.newlineIndex(first.length(), true);
          if (newlineIndex > -1) {
            first = first.split(newlineIndex + 1);
            if (first === last) {
              this.optimize();
              return;
            }
          }
        } else if (last instanceof _code2.default) {
          var _newlineIndex = last.newlineIndex(0);
          if (_newlineIndex > -1) {
            last.split(_newlineIndex + 1);
          }
        }
        var ref = last.children.head instanceof _break2.default ? null : last.children.head;
        first.moveChildren(last, ref);
        first.remove();
      }
      this.optimize();
    }
  }, {
    key: 'enable',
    value: function enable() {
      var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this.domNode.setAttribute('contenteditable', enabled);
    }
  }, {
    key: 'formatAt',
    value: function formatAt(index, length, format, value) {
      if (this.whitelist != null && !this.whitelist[format]) return;
      _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'formatAt', this).call(this, index, length, format, value);
      this.optimize();
    }
  }, {
    key: 'insertAt',
    value: function insertAt(index, value, def) {
      if (def != null && this.whitelist != null && !this.whitelist[value]) return;
      if (index >= this.length()) {
        if (def == null || _parchment2.default.query(value, _parchment2.default.Scope.BLOCK) == null) {
          var blot = _parchment2.default.create(this.statics.defaultChild);
          this.appendChild(blot);
          if (def == null && value.endsWith('\n')) {
            value = value.slice(0, -1);
          }
          blot.insertAt(0, value, def);
        } else {
          var embed = _parchment2.default.create(value, def);
          this.appendChild(embed);
        }
      } else {
        _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'insertAt', this).call(this, index, value, def);
      }
      this.optimize();
    }
  }, {
    key: 'insertBefore',
    value: function insertBefore(blot, ref) {
      if (blot.statics.scope === _parchment2.default.Scope.INLINE_BLOT) {
        var wrapper = _parchment2.default.create(this.statics.defaultChild);
        wrapper.appendChild(blot);
        blot = wrapper;
      }
      _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'insertBefore', this).call(this, blot, ref);
    }
  }, {
    key: 'leaf',
    value: function leaf(index) {
      return this.path(index).pop() || [null, -1];
    }
  }, {
    key: 'line',
    value: function line(index) {
      if (index === this.length()) {
        return this.line(index - 1);
      }
      return this.descendant(isLine, index);
    }
  }, {
    key: 'lines',
    value: function lines() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.MAX_VALUE;

      var getLines = function getLines(blot, index, length) {
        var lines = [],
            lengthLeft = length;
        blot.children.forEachAt(index, length, function (child, index, length) {
          if (isLine(child)) {
            lines.push(child);
          } else if (child instanceof _parchment2.default.Container) {
            lines = lines.concat(getLines(child, index, lengthLeft));
          }
          lengthLeft -= length;
        });
        return lines;
      };
      return getLines(this, index, length);
    }
  }, {
    key: 'optimize',
    value: function optimize() {
      var mutations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (this.batch === true) return;
      _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'optimize', this).call(this, mutations, context);
      if (mutations.length > 0) {
        this.emitter.emit(_emitter2.default.events.SCROLL_OPTIMIZE, mutations, context);
      }
    }
  }, {
    key: 'path',
    value: function path(index) {
      return _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'path', this).call(this, index).slice(1); // Exclude self
    }
  }, {
    key: 'update',
    value: function update(mutations) {
      if (this.batch === true) return;
      var source = _emitter2.default.sources.USER;
      if (typeof mutations === 'string') {
        source = mutations;
      }
      if (!Array.isArray(mutations)) {
        mutations = this.observer.takeRecords();
      }
      if (mutations.length > 0) {
        this.emitter.emit(_emitter2.default.events.SCROLL_BEFORE_UPDATE, source, mutations);
      }
      _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'update', this).call(this, mutations.concat([])); // pass copy
      if (mutations.length > 0) {
        this.emitter.emit(_emitter2.default.events.SCROLL_UPDATE, source, mutations);
      }
    }
  }]);

  return Scroll;
}(_parchment2.default.Scroll);

Scroll.blotName = 'scroll';
Scroll.className = 'ql-editor';
Scroll.tagName = 'DIV';
Scroll.defaultChild = 'block';
Scroll.allowedChildren = [_block2.default, _block.BlockEmbed, _container2.default];

exports.default = Scroll;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SHORTKEY = exports.default = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _clone = __webpack_require__(21);

var _clone2 = _interopRequireDefault(_clone);

var _deepEqual = __webpack_require__(11);

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _extend = __webpack_require__(3);

var _extend2 = _interopRequireDefault(_extend);

var _quillDelta = __webpack_require__(2);

var _quillDelta2 = _interopRequireDefault(_quillDelta);

var _op = __webpack_require__(20);

var _op2 = _interopRequireDefault(_op);

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _quill = __webpack_require__(5);

var _quill2 = _interopRequireDefault(_quill);

var _logger = __webpack_require__(10);

var _logger2 = _interopRequireDefault(_logger);

var _module = __webpack_require__(9);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var debug = (0, _logger2.default)('quill:keyboard');

var SHORTKEY = /Mac/i.test(navigator.platform) ? 'metaKey' : 'ctrlKey';

var Keyboard = function (_Module) {
  _inherits(Keyboard, _Module);

  _createClass(Keyboard, null, [{
    key: 'match',
    value: function match(evt, binding) {
      binding = normalize(binding);
      if (['altKey', 'ctrlKey', 'metaKey', 'shiftKey'].some(function (key) {
        return !!binding[key] !== evt[key] && binding[key] !== null;
      })) {
        return false;
      }
      return binding.key === (evt.which || evt.keyCode);
    }
  }]);

  function Keyboard(quill, options) {
    _classCallCheck(this, Keyboard);

    var _this = _possibleConstructorReturn(this, (Keyboard.__proto__ || Object.getPrototypeOf(Keyboard)).call(this, quill, options));

    _this.bindings = {};
    Object.keys(_this.options.bindings).forEach(function (name) {
      if (name === 'list autofill' && quill.scroll.whitelist != null && !quill.scroll.whitelist['list']) {
        return;
      }
      if (_this.options.bindings[name]) {
        _this.addBinding(_this.options.bindings[name]);
      }
    });
    _this.addBinding({ key: Keyboard.keys.ENTER, shiftKey: null }, handleEnter);
    _this.addBinding({ key: Keyboard.keys.ENTER, metaKey: null, ctrlKey: null, altKey: null }, function () {});
    if (/Firefox/i.test(navigator.userAgent)) {
      // Need to handle delete and backspace for Firefox in the general case #1171
      _this.addBinding({ key: Keyboard.keys.BACKSPACE }, { collapsed: true }, handleBackspace);
      _this.addBinding({ key: Keyboard.keys.DELETE }, { collapsed: true }, handleDelete);
    } else {
      _this.addBinding({ key: Keyboard.keys.BACKSPACE }, { collapsed: true, prefix: /^.?$/ }, handleBackspace);
      _this.addBinding({ key: Keyboard.keys.DELETE }, { collapsed: true, suffix: /^.?$/ }, handleDelete);
    }
    _this.addBinding({ key: Keyboard.keys.BACKSPACE }, { collapsed: false }, handleDeleteRange);
    _this.addBinding({ key: Keyboard.keys.DELETE }, { collapsed: false }, handleDeleteRange);
    _this.addBinding({ key: Keyboard.keys.BACKSPACE, altKey: null, ctrlKey: null, metaKey: null, shiftKey: null }, { collapsed: true, offset: 0 }, handleBackspace);
    _this.listen();
    return _this;
  }

  _createClass(Keyboard, [{
    key: 'addBinding',
    value: function addBinding(key) {
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var handler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var binding = normalize(key);
      if (binding == null || binding.key == null) {
        return debug.warn('Attempted to add invalid keyboard binding', binding);
      }
      if (typeof context === 'function') {
        context = { handler: context };
      }
      if (typeof handler === 'function') {
        handler = { handler: handler };
      }
      binding = (0, _extend2.default)(binding, context, handler);
      this.bindings[binding.key] = this.bindings[binding.key] || [];
      this.bindings[binding.key].push(binding);
    }
  }, {
    key: 'listen',
    value: function listen() {
      var _this2 = this;

      this.quill.root.addEventListener('keydown', function (evt) {
        if (evt.defaultPrevented) return;
        var which = evt.which || evt.keyCode;
        var bindings = (_this2.bindings[which] || []).filter(function (binding) {
          return Keyboard.match(evt, binding);
        });
        if (bindings.length === 0) return;
        var range = _this2.quill.getSelection();
        if (range == null || !_this2.quill.hasFocus()) return;

        var _quill$getLine = _this2.quill.getLine(range.index),
            _quill$getLine2 = _slicedToArray(_quill$getLine, 2),
            line = _quill$getLine2[0],
            offset = _quill$getLine2[1];

        var _quill$getLeaf = _this2.quill.getLeaf(range.index),
            _quill$getLeaf2 = _slicedToArray(_quill$getLeaf, 2),
            leafStart = _quill$getLeaf2[0],
            offsetStart = _quill$getLeaf2[1];

        var _ref = range.length === 0 ? [leafStart, offsetStart] : _this2.quill.getLeaf(range.index + range.length),
            _ref2 = _slicedToArray(_ref, 2),
            leafEnd = _ref2[0],
            offsetEnd = _ref2[1];

        var prefixText = leafStart instanceof _parchment2.default.Text ? leafStart.value().slice(0, offsetStart) : '';
        var suffixText = leafEnd instanceof _parchment2.default.Text ? leafEnd.value().slice(offsetEnd) : '';
        var curContext = {
          collapsed: range.length === 0,
          empty: range.length === 0 && line.length() <= 1,
          format: _this2.quill.getFormat(range),
          offset: offset,
          prefix: prefixText,
          suffix: suffixText
        };
        var prevented = bindings.some(function (binding) {
          if (binding.collapsed != null && binding.collapsed !== curContext.collapsed) return false;
          if (binding.empty != null && binding.empty !== curContext.empty) return false;
          if (binding.offset != null && binding.offset !== curContext.offset) return false;
          if (Array.isArray(binding.format)) {
            // any format is present
            if (binding.format.every(function (name) {
              return curContext.format[name] == null;
            })) {
              return false;
            }
          } else if (_typeof(binding.format) === 'object') {
            // all formats must match
            if (!Object.keys(binding.format).every(function (name) {
              if (binding.format[name] === true) return curContext.format[name] != null;
              if (binding.format[name] === false) return curContext.format[name] == null;
              return (0, _deepEqual2.default)(binding.format[name], curContext.format[name]);
            })) {
              return false;
            }
          }
          if (binding.prefix != null && !binding.prefix.test(curContext.prefix)) return false;
          if (binding.suffix != null && !binding.suffix.test(curContext.suffix)) return false;
          return binding.handler.call(_this2, range, curContext) !== true;
        });
        if (prevented) {
          evt.preventDefault();
        }
      });
    }
  }]);

  return Keyboard;
}(_module2.default);

Keyboard.keys = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  ESCAPE: 27,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  DELETE: 46
};

Keyboard.DEFAULTS = {
  bindings: {
    'bold': makeFormatHandler('bold'),
    'italic': makeFormatHandler('italic'),
    'underline': makeFormatHandler('underline'),
    'indent': {
      // highlight tab or tab at beginning of list, indent or blockquote
      key: Keyboard.keys.TAB,
      format: ['blockquote', 'indent', 'list'],
      handler: function handler(range, context) {
        if (context.collapsed && context.offset !== 0) return true;
        this.quill.format('indent', '+1', _quill2.default.sources.USER);
      }
    },
    'outdent': {
      key: Keyboard.keys.TAB,
      shiftKey: true,
      format: ['blockquote', 'indent', 'list'],
      // highlight tab or tab at beginning of list, indent or blockquote
      handler: function handler(range, context) {
        if (context.collapsed && context.offset !== 0) return true;
        this.quill.format('indent', '-1', _quill2.default.sources.USER);
      }
    },
    'outdent backspace': {
      key: Keyboard.keys.BACKSPACE,
      collapsed: true,
      shiftKey: null,
      metaKey: null,
      ctrlKey: null,
      altKey: null,
      format: ['indent', 'list'],
      offset: 0,
      handler: function handler(range, context) {
        if (context.format.indent != null) {
          this.quill.format('indent', '-1', _quill2.default.sources.USER);
        } else if (context.format.list != null) {
          this.quill.format('list', false, _quill2.default.sources.USER);
        }
      }
    },
    'indent code-block': makeCodeBlockHandler(true),
    'outdent code-block': makeCodeBlockHandler(false),
    'remove tab': {
      key: Keyboard.keys.TAB,
      shiftKey: true,
      collapsed: true,
      prefix: /\t$/,
      handler: function handler(range) {
        this.quill.deleteText(range.index - 1, 1, _quill2.default.sources.USER);
      }
    },
    'tab': {
      key: Keyboard.keys.TAB,
      handler: function handler(range) {
        this.quill.history.cutoff();
        var delta = new _quillDelta2.default().retain(range.index).delete(range.length).insert('\t');
        this.quill.updateContents(delta, _quill2.default.sources.USER);
        this.quill.history.cutoff();
        this.quill.setSelection(range.index + 1, _quill2.default.sources.SILENT);
      }
    },
    'list empty enter': {
      key: Keyboard.keys.ENTER,
      collapsed: true,
      format: ['list'],
      empty: true,
      handler: function handler(range, context) {
        this.quill.format('list', false, _quill2.default.sources.USER);
        if (context.format.indent) {
          this.quill.format('indent', false, _quill2.default.sources.USER);
        }
      }
    },
    'checklist enter': {
      key: Keyboard.keys.ENTER,
      collapsed: true,
      format: { list: 'checked' },
      handler: function handler(range) {
        var _quill$getLine3 = this.quill.getLine(range.index),
            _quill$getLine4 = _slicedToArray(_quill$getLine3, 2),
            line = _quill$getLine4[0],
            offset = _quill$getLine4[1];

        var formats = (0, _extend2.default)({}, line.formats(), { list: 'checked' });
        var delta = new _quillDelta2.default().retain(range.index).insert('\n', formats).retain(line.length() - offset - 1).retain(1, { list: 'unchecked' });
        this.quill.updateContents(delta, _quill2.default.sources.USER);
        this.quill.setSelection(range.index + 1, _quill2.default.sources.SILENT);
        this.quill.scrollIntoView();
      }
    },
    'header enter': {
      key: Keyboard.keys.ENTER,
      collapsed: true,
      format: ['header'],
      suffix: /^$/,
      handler: function handler(range, context) {
        var _quill$getLine5 = this.quill.getLine(range.index),
            _quill$getLine6 = _slicedToArray(_quill$getLine5, 2),
            line = _quill$getLine6[0],
            offset = _quill$getLine6[1];

        var delta = new _quillDelta2.default().retain(range.index).insert('\n', context.format).retain(line.length() - offset - 1).retain(1, { header: null });
        this.quill.updateContents(delta, _quill2.default.sources.USER);
        this.quill.setSelection(range.index + 1, _quill2.default.sources.SILENT);
        this.quill.scrollIntoView();
      }
    },
    'list autofill': {
      key: ' ',
      collapsed: true,
      format: { list: false },
      prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
      handler: function handler(range, context) {
        var length = context.prefix.length;

        var _quill$getLine7 = this.quill.getLine(range.index),
            _quill$getLine8 = _slicedToArray(_quill$getLine7, 2),
            line = _quill$getLine8[0],
            offset = _quill$getLine8[1];

        if (offset > length) return true;
        var value = void 0;
        switch (context.prefix.trim()) {
          case '[]':case '[ ]':
            value = 'unchecked';
            break;
          case '[x]':
            value = 'checked';
            break;
          case '-':case '*':
            value = 'bullet';
            break;
          default:
            value = 'ordered';
        }
        this.quill.insertText(range.index, ' ', _quill2.default.sources.USER);
        this.quill.history.cutoff();
        var delta = new _quillDelta2.default().retain(range.index - offset).delete(length + 1).retain(line.length() - 2 - offset).retain(1, { list: value });
        this.quill.updateContents(delta, _quill2.default.sources.USER);
        this.quill.history.cutoff();
        this.quill.setSelection(range.index - length, _quill2.default.sources.SILENT);
      }
    },
    'code exit': {
      key: Keyboard.keys.ENTER,
      collapsed: true,
      format: ['code-block'],
      prefix: /\n\n$/,
      suffix: /^\s+$/,
      handler: function handler(range) {
        var _quill$getLine9 = this.quill.getLine(range.index),
            _quill$getLine10 = _slicedToArray(_quill$getLine9, 2),
            line = _quill$getLine10[0],
            offset = _quill$getLine10[1];

        var delta = new _quillDelta2.default().retain(range.index + line.length() - offset - 2).retain(1, { 'code-block': null }).delete(1);
        this.quill.updateContents(delta, _quill2.default.sources.USER);
      }
    },
    'embed left': makeEmbedArrowHandler(Keyboard.keys.LEFT, false),
    'embed left shift': makeEmbedArrowHandler(Keyboard.keys.LEFT, true),
    'embed right': makeEmbedArrowHandler(Keyboard.keys.RIGHT, false),
    'embed right shift': makeEmbedArrowHandler(Keyboard.keys.RIGHT, true)
  }
};

function makeEmbedArrowHandler(key, shiftKey) {
  var _ref3;

  var where = key === Keyboard.keys.LEFT ? 'prefix' : 'suffix';
  return _ref3 = {
    key: key,
    shiftKey: shiftKey,
    altKey: null
  }, _defineProperty(_ref3, where, /^$/), _defineProperty(_ref3, 'handler', function handler(range) {
    var index = range.index;
    if (key === Keyboard.keys.RIGHT) {
      index += range.length + 1;
    }

    var _quill$getLeaf3 = this.quill.getLeaf(index),
        _quill$getLeaf4 = _slicedToArray(_quill$getLeaf3, 1),
        leaf = _quill$getLeaf4[0];

    if (!(leaf instanceof _parchment2.default.Embed)) return true;
    if (key === Keyboard.keys.LEFT) {
      if (shiftKey) {
        this.quill.setSelection(range.index - 1, range.length + 1, _quill2.default.sources.USER);
      } else {
        this.quill.setSelection(range.index - 1, _quill2.default.sources.USER);
      }
    } else {
      if (shiftKey) {
        this.quill.setSelection(range.index, range.length + 1, _quill2.default.sources.USER);
      } else {
        this.quill.setSelection(range.index + range.length + 1, _quill2.default.sources.USER);
      }
    }
    return false;
  }), _ref3;
}

function handleBackspace(range, context) {
  if (range.index === 0 || this.quill.getLength() <= 1) return;

  var _quill$getLine11 = this.quill.getLine(range.index),
      _quill$getLine12 = _slicedToArray(_quill$getLine11, 1),
      line = _quill$getLine12[0];

  var formats = {};
  if (context.offset === 0) {
    var _quill$getLine13 = this.quill.getLine(range.index - 1),
        _quill$getLine14 = _slicedToArray(_quill$getLine13, 1),
        prev = _quill$getLine14[0];

    if (prev != null && prev.length() > 1) {
      var curFormats = line.formats();
      var prevFormats = this.quill.getFormat(range.index - 1, 1);
      formats = _op2.default.attributes.diff(curFormats, prevFormats) || {};
    }
  }
  // Check for astral symbols
  var length = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(context.prefix) ? 2 : 1;
  this.quill.deleteText(range.index - length, length, _quill2.default.sources.USER);
  if (Object.keys(formats).length > 0) {
    this.quill.formatLine(range.index - length, length, formats, _quill2.default.sources.USER);
  }
  this.quill.focus();
}

function handleDelete(range, context) {
  // Check for astral symbols
  var length = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(context.suffix) ? 2 : 1;
  if (range.index >= this.quill.getLength() - length) return;
  var formats = {},
      nextLength = 0;

  var _quill$getLine15 = this.quill.getLine(range.index),
      _quill$getLine16 = _slicedToArray(_quill$getLine15, 1),
      line = _quill$getLine16[0];

  if (context.offset >= line.length() - 1) {
    var _quill$getLine17 = this.quill.getLine(range.index + 1),
        _quill$getLine18 = _slicedToArray(_quill$getLine17, 1),
        next = _quill$getLine18[0];

    if (next) {
      var curFormats = line.formats();
      var nextFormats = this.quill.getFormat(range.index, 1);
      formats = _op2.default.attributes.diff(curFormats, nextFormats) || {};
      nextLength = next.length();
    }
  }
  this.quill.deleteText(range.index, length, _quill2.default.sources.USER);
  if (Object.keys(formats).length > 0) {
    this.quill.formatLine(range.index + nextLength - 1, length, formats, _quill2.default.sources.USER);
  }
}

function handleDeleteRange(range) {
  var lines = this.quill.getLines(range);
  var formats = {};
  if (lines.length > 1) {
    var firstFormats = lines[0].formats();
    var lastFormats = lines[lines.length - 1].formats();
    formats = _op2.default.attributes.diff(lastFormats, firstFormats) || {};
  }
  this.quill.deleteText(range, _quill2.default.sources.USER);
  if (Object.keys(formats).length > 0) {
    this.quill.formatLine(range.index, 1, formats, _quill2.default.sources.USER);
  }
  this.quill.setSelection(range.index, _quill2.default.sources.SILENT);
  this.quill.focus();
}

function handleEnter(range, context) {
  var _this3 = this;

  if (range.length > 0) {
    this.quill.scroll.deleteAt(range.index, range.length); // So we do not trigger text-change
  }
  var lineFormats = Object.keys(context.format).reduce(function (lineFormats, format) {
    if (_parchment2.default.query(format, _parchment2.default.Scope.BLOCK) && !Array.isArray(context.format[format])) {
      lineFormats[format] = context.format[format];
    }
    return lineFormats;
  }, {});
  this.quill.insertText(range.index, '\n', lineFormats, _quill2.default.sources.USER);
  // Earlier scroll.deleteAt might have messed up our selection,
  // so insertText's built in selection preservation is not reliable
  this.quill.setSelection(range.index + 1, _quill2.default.sources.SILENT);
  this.quill.focus();
  Object.keys(context.format).forEach(function (name) {
    if (lineFormats[name] != null) return;
    if (Array.isArray(context.format[name])) return;
    if (name === 'link') return;
    _this3.quill.format(name, context.format[name], _quill2.default.sources.USER);
  });
}

function makeCodeBlockHandler(indent) {
  return {
    key: Keyboard.keys.TAB,
    shiftKey: !indent,
    format: { 'code-block': true },
    handler: function handler(range) {
      var CodeBlock = _parchment2.default.query('code-block');
      var index = range.index,
          length = range.length;

      var _quill$scroll$descend = this.quill.scroll.descendant(CodeBlock, index),
          _quill$scroll$descend2 = _slicedToArray(_quill$scroll$descend, 2),
          block = _quill$scroll$descend2[0],
          offset = _quill$scroll$descend2[1];

      if (block == null) return;
      var scrollIndex = this.quill.getIndex(block);
      var start = block.newlineIndex(offset, true) + 1;
      var end = block.newlineIndex(scrollIndex + offset + length);
      var lines = block.domNode.textContent.slice(start, end).split('\n');
      offset = 0;
      lines.forEach(function (line, i) {
        if (indent) {
          block.insertAt(start + offset, CodeBlock.TAB);
          offset += CodeBlock.TAB.length;
          if (i === 0) {
            index += CodeBlock.TAB.length;
          } else {
            length += CodeBlock.TAB.length;
          }
        } else if (line.startsWith(CodeBlock.TAB)) {
          block.deleteAt(start + offset, CodeBlock.TAB.length);
          offset -= CodeBlock.TAB.length;
          if (i === 0) {
            index -= CodeBlock.TAB.length;
          } else {
            length -= CodeBlock.TAB.length;
          }
        }
        offset += line.length + 1;
      });
      this.quill.update(_quill2.default.sources.USER);
      this.quill.setSelection(index, length, _quill2.default.sources.SILENT);
    }
  };
}

function makeFormatHandler(format) {
  return {
    key: format[0].toUpperCase(),
    shortKey: true,
    handler: function handler(range, context) {
      this.quill.format(format, !context.format[format], _quill2.default.sources.USER);
    }
  };
}

function normalize(binding) {
  if (typeof binding === 'string' || typeof binding === 'number') {
    return normalize({ key: binding });
  }
  if ((typeof binding === 'undefined' ? 'undefined' : _typeof(binding)) === 'object') {
    binding = (0, _clone2.default)(binding, false);
  }
  if (typeof binding.key === 'string') {
    if (Keyboard.keys[binding.key.toUpperCase()] != null) {
      binding.key = Keyboard.keys[binding.key.toUpperCase()];
    } else if (binding.key.length === 1) {
      binding.key = binding.key.toUpperCase().charCodeAt(0);
    } else {
      return null;
    }
  }
  if (binding.shortKey) {
    binding[SHORTKEY] = binding.shortKey;
    delete binding.shortKey;
  }
  return binding;
}

exports.default = Keyboard;
exports.SHORTKEY = SHORTKEY;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _text = __webpack_require__(7);

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cursor = function (_Parchment$Embed) {
  _inherits(Cursor, _Parchment$Embed);

  _createClass(Cursor, null, [{
    key: 'value',
    value: function value() {
      return undefined;
    }
  }]);

  function Cursor(domNode, selection) {
    _classCallCheck(this, Cursor);

    var _this = _possibleConstructorReturn(this, (Cursor.__proto__ || Object.getPrototypeOf(Cursor)).call(this, domNode));

    _this.selection = selection;
    _this.textNode = document.createTextNode(Cursor.CONTENTS);
    _this.domNode.appendChild(_this.textNode);
    _this._length = 0;
    return _this;
  }

  _createClass(Cursor, [{
    key: 'detach',
    value: function detach() {
      // super.detach() will also clear domNode.__blot
      if (this.parent != null) this.parent.removeChild(this);
    }
  }, {
    key: 'format',
    value: function format(name, value) {
      if (this._length !== 0) {
        return _get(Cursor.prototype.__proto__ || Object.getPrototypeOf(Cursor.prototype), 'format', this).call(this, name, value);
      }
      var target = this,
          index = 0;
      while (target != null && target.statics.scope !== _parchment2.default.Scope.BLOCK_BLOT) {
        index += target.offset(target.parent);
        target = target.parent;
      }
      if (target != null) {
        this._length = Cursor.CONTENTS.length;
        target.optimize();
        target.formatAt(index, Cursor.CONTENTS.length, name, value);
        this._length = 0;
      }
    }
  }, {
    key: 'index',
    value: function index(node, offset) {
      if (node === this.textNode) return 0;
      return _get(Cursor.prototype.__proto__ || Object.getPrototypeOf(Cursor.prototype), 'index', this).call(this, node, offset);
    }
  }, {
    key: 'length',
    value: function length() {
      return this._length;
    }
  }, {
    key: 'position',
    value: function position() {
      return [this.textNode, this.textNode.data.length];
    }
  }, {
    key: 'remove',
    value: function remove() {
      _get(Cursor.prototype.__proto__ || Object.getPrototypeOf(Cursor.prototype), 'remove', this).call(this);
      this.parent = null;
    }
  }, {
    key: 'restore',
    value: function restore() {
      if (this.selection.composing || this.parent == null) return;
      var textNode = this.textNode;
      var range = this.selection.getNativeRange();
      var restoreText = void 0,
          start = void 0,
          end = void 0;
      if (range != null && range.start.node === textNode && range.end.node === textNode) {
        var _ref = [textNode, range.start.offset, range.end.offset];
        restoreText = _ref[0];
        start = _ref[1];
        end = _ref[2];
      }
      // Link format will insert text outside of anchor tag
      while (this.domNode.lastChild != null && this.domNode.lastChild !== this.textNode) {
        this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
      }
      if (this.textNode.data !== Cursor.CONTENTS) {
        var text = this.textNode.data.split(Cursor.CONTENTS).join('');
        if (this.next instanceof _text2.default) {
          restoreText = this.next.domNode;
          this.next.insertAt(0, text);
          this.textNode.data = Cursor.CONTENTS;
        } else {
          this.textNode.data = text;
          this.parent.insertBefore(_parchment2.default.create(this.textNode), this);
          this.textNode = document.createTextNode(Cursor.CONTENTS);
          this.domNode.appendChild(this.textNode);
        }
      }
      this.remove();
      if (start != null) {
        var _map = [start, end].map(function (offset) {
          return Math.max(0, Math.min(restoreText.data.length, offset - 1));
        });

        var _map2 = _slicedToArray(_map, 2);

        start = _map2[0];
        end = _map2[1];

        return {
          startNode: restoreText,
          startOffset: start,
          endNode: restoreText,
          endOffset: end
        };
      }
    }
  }, {
    key: 'update',
    value: function update(mutations, context) {
      var _this2 = this;

      if (mutations.some(function (mutation) {
        return mutation.type === 'characterData' && mutation.target === _this2.textNode;
      })) {
        var range = this.restore();
        if (range) context.range = range;
      }
    }
  }, {
    key: 'value',
    value: function value() {
      return '';
    }
  }]);

  return Cursor;
}(_parchment2.default.Embed);

Cursor.blotName = 'cursor';
Cursor.className = 'ql-cursor';
Cursor.tagName = 'span';
Cursor.CONTENTS = '\uFEFF'; // Zero width no break space


exports.default = Cursor;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _block = __webpack_require__(4);

var _block2 = _interopRequireDefault(_block);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = function (_Parchment$Container) {
  _inherits(Container, _Parchment$Container);

  function Container() {
    _classCallCheck(this, Container);

    return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
  }

  return Container;
}(_parchment2.default.Container);

Container.allowedChildren = [_block2.default, _block.BlockEmbed, Container];

exports.default = Container;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorStyle = exports.ColorClass = exports.ColorAttributor = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorAttributor = function (_Parchment$Attributor) {
  _inherits(ColorAttributor, _Parchment$Attributor);

  function ColorAttributor() {
    _classCallCheck(this, ColorAttributor);

    return _possibleConstructorReturn(this, (ColorAttributor.__proto__ || Object.getPrototypeOf(ColorAttributor)).apply(this, arguments));
  }

  _createClass(ColorAttributor, [{
    key: 'value',
    value: function value(domNode) {
      var value = _get(ColorAttributor.prototype.__proto__ || Object.getPrototypeOf(ColorAttributor.prototype), 'value', this).call(this, domNode);
      if (!value.startsWith('rgb(')) return value;
      value = value.replace(/^[^\d]+/, '').replace(/[^\d]+$/, '');
      return '#' + value.split(',').map(function (component) {
        return ('00' + parseInt(component).toString(16)).slice(-2);
      }).join('');
    }
  }]);

  return ColorAttributor;
}(_parchment2.default.Attributor.Style);

var ColorClass = new _parchment2.default.Attributor.Class('color', 'ql-color', {
  scope: _parchment2.default.Scope.INLINE
});
var ColorStyle = new ColorAttributor('color', 'color', {
  scope: _parchment2.default.Scope.INLINE
});

exports.ColorAttributor = ColorAttributor;
exports.ColorClass = ColorClass;
exports.ColorStyle = ColorStyle;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sanitize = exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inline = __webpack_require__(6);

var _inline2 = _interopRequireDefault(_inline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Link = function (_Inline) {
  _inherits(Link, _Inline);

  function Link() {
    _classCallCheck(this, Link);

    return _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).apply(this, arguments));
  }

  _createClass(Link, [{
    key: 'format',
    value: function format(name, value) {
      if (name !== this.statics.blotName || !value) return _get(Link.prototype.__proto__ || Object.getPrototypeOf(Link.prototype), 'format', this).call(this, name, value);
      value = this.constructor.sanitize(value);
      this.domNode.setAttribute('href', value);
    }
  }], [{
    key: 'create',
    value: function create(value) {
      var node = _get(Link.__proto__ || Object.getPrototypeOf(Link), 'create', this).call(this, value);
      value = this.sanitize(value);
      node.setAttribute('href', value);
      node.setAttribute('rel', 'noopener noreferrer');
      node.setAttribute('target', '_blank');
      return node;
    }
  }, {
    key: 'formats',
    value: function formats(domNode) {
      return domNode.getAttribute('href');
    }
  }, {
    key: 'sanitize',
    value: function sanitize(url) {
      return _sanitize(url, this.PROTOCOL_WHITELIST) ? url : this.SANITIZED_URL;
    }
  }]);

  return Link;
}(_inline2.default);

Link.blotName = 'link';
Link.tagName = 'A';
Link.SANITIZED_URL = 'about:blank';
Link.PROTOCOL_WHITELIST = ['http', 'https', 'mailto', 'tel'];

function _sanitize(url, protocols) {
  var anchor = document.createElement('a');
  anchor.href = url;
  var protocol = anchor.href.slice(0, anchor.href.indexOf(':'));
  return protocols.indexOf(protocol) > -1;
}

exports.default = Link;
exports.sanitize = _sanitize;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _keyboard = __webpack_require__(23);

var _keyboard2 = _interopRequireDefault(_keyboard);

var _dropdown = __webpack_require__(107);

var _dropdown2 = _interopRequireDefault(_dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var optionsCounter = 0;

function toggleAriaAttribute(element, attribute) {
  element.setAttribute(attribute, !(element.getAttribute(attribute) === 'true'));
}

var Picker = function () {
  function Picker(select) {
    var _this = this;

    _classCallCheck(this, Picker);

    this.select = select;
    this.container = document.createElement('span');
    this.buildPicker();
    this.select.style.display = 'none';
    this.select.parentNode.insertBefore(this.container, this.select);

    this.label.addEventListener('mousedown', function () {
      _this.togglePicker();
    });
    this.label.addEventListener('keydown', function (event) {
      switch (event.keyCode) {
        // Allows the "Enter" key to open the picker
        case _keyboard2.default.keys.ENTER:
          _this.togglePicker();
          break;

        // Allows the "Escape" key to close the picker
        case _keyboard2.default.keys.ESCAPE:
          _this.escape();
          event.preventDefault();
          break;
        default:
      }
    });
    this.select.addEventListener('change', this.update.bind(this));
  }

  _createClass(Picker, [{
    key: 'togglePicker',
    value: function togglePicker() {
      this.container.classList.toggle('ql-expanded');
      // Toggle aria-expanded and aria-hidden to make the picker accessible
      toggleAriaAttribute(this.label, 'aria-expanded');
      toggleAriaAttribute(this.options, 'aria-hidden');
    }
  }, {
    key: 'buildItem',
    value: function buildItem(option) {
      var _this2 = this;

      var item = document.createElement('span');
      item.tabIndex = '0';
      item.setAttribute('role', 'button');

      item.classList.add('ql-picker-item');
      if (option.hasAttribute('value')) {
        item.setAttribute('data-value', option.getAttribute('value'));
      }
      if (option.textContent) {
        item.setAttribute('data-label', option.textContent);
      }
      item.addEventListener('click', function () {
        _this2.selectItem(item, true);
      });
      item.addEventListener('keydown', function (event) {
        switch (event.keyCode) {
          // Allows the "Enter" key to select an item
          case _keyboard2.default.keys.ENTER:
            _this2.selectItem(item, true);
            event.preventDefault();
            break;

          // Allows the "Escape" key to close the picker
          case _keyboard2.default.keys.ESCAPE:
            _this2.escape();
            event.preventDefault();
            break;
          default:
        }
      });

      return item;
    }
  }, {
    key: 'buildLabel',
    value: function buildLabel() {
      var label = document.createElement('span');
      label.classList.add('ql-picker-label');
      label.innerHTML = _dropdown2.default;
      label.tabIndex = '0';
      label.setAttribute('role', 'button');
      label.setAttribute('aria-expanded', 'false');
      this.container.appendChild(label);
      return label;
    }
  }, {
    key: 'buildOptions',
    value: function buildOptions() {
      var _this3 = this;

      var options = document.createElement('span');
      options.classList.add('ql-picker-options');

      // Don't want screen readers to read this until options are visible
      options.setAttribute('aria-hidden', 'true');
      options.tabIndex = '-1';

      // Need a unique id for aria-controls
      options.id = 'ql-picker-options-' + optionsCounter;
      optionsCounter += 1;
      this.label.setAttribute('aria-controls', options.id);

      this.options = options;

      [].slice.call(this.select.options).forEach(function (option) {
        var item = _this3.buildItem(option);
        options.appendChild(item);
        if (option.selected === true) {
          _this3.selectItem(item);
        }
      });
      this.container.appendChild(options);
    }
  }, {
    key: 'buildPicker',
    value: function buildPicker() {
      var _this4 = this;

      [].slice.call(this.select.attributes).forEach(function (item) {
        _this4.container.setAttribute(item.name, item.value);
      });
      this.container.classList.add('ql-picker');
      this.label = this.buildLabel();
      this.buildOptions();
    }
  }, {
    key: 'escape',
    value: function escape() {
      var _this5 = this;

      // Close menu and return focus to trigger label
      this.close();
      // Need setTimeout for accessibility to ensure that the browser executes
      // focus on the next process thread and after any DOM content changes
      setTimeout(function () {
        return _this5.label.focus();
      }, 1);
    }
  }, {
    key: 'close',
    value: function close() {
      this.container.classList.remove('ql-expanded');
      this.label.setAttribute('aria-expanded', 'false');
      this.options.setAttribute('aria-hidden', 'true');
    }
  }, {
    key: 'selectItem',
    value: function selectItem(item) {
      var trigger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var selected = this.container.querySelector('.ql-selected');
      if (item === selected) return;
      if (selected != null) {
        selected.classList.remove('ql-selected');
      }
      if (item == null) return;
      item.classList.add('ql-selected');
      this.select.selectedIndex = [].indexOf.call(item.parentNode.children, item);
      if (item.hasAttribute('data-value')) {
        this.label.setAttribute('data-value', item.getAttribute('data-value'));
      } else {
        this.label.removeAttribute('data-value');
      }
      if (item.hasAttribute('data-label')) {
        this.label.setAttribute('data-label', item.getAttribute('data-label'));
      } else {
        this.label.removeAttribute('data-label');
      }
      if (trigger) {
        if (typeof Event === 'function') {
          this.select.dispatchEvent(new Event('change'));
        } else if ((typeof Event === 'undefined' ? 'undefined' : _typeof(Event)) === 'object') {
          // IE11
          var event = document.createEvent('Event');
          event.initEvent('change', true, true);
          this.select.dispatchEvent(event);
        }
        this.close();
      }
    }
  }, {
    key: 'update',
    value: function update() {
      var option = void 0;
      if (this.select.selectedIndex > -1) {
        var item = this.container.querySelector('.ql-picker-options').children[this.select.selectedIndex];
        option = this.select.options[this.select.selectedIndex];
        this.selectItem(item);
      } else {
        this.selectItem(null);
      }
      var isActive = option != null && option !== this.select.querySelector('option[selected]');
      this.label.classList.toggle('ql-active', isActive);
    }
  }]);

  return Picker;
}();

exports.default = Picker;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _quill = __webpack_require__(5);

var _quill2 = _interopRequireDefault(_quill);

var _block = __webpack_require__(4);

var _block2 = _interopRequireDefault(_block);

var _break = __webpack_require__(16);

var _break2 = _interopRequireDefault(_break);

var _container = __webpack_require__(25);

var _container2 = _interopRequireDefault(_container);

var _cursor = __webpack_require__(24);

var _cursor2 = _interopRequireDefault(_cursor);

var _embed = __webpack_require__(35);

var _embed2 = _interopRequireDefault(_embed);

var _inline = __webpack_require__(6);

var _inline2 = _interopRequireDefault(_inline);

var _scroll = __webpack_require__(22);

var _scroll2 = _interopRequireDefault(_scroll);

var _text = __webpack_require__(7);

var _text2 = _interopRequireDefault(_text);

var _clipboard = __webpack_require__(55);

var _clipboard2 = _interopRequireDefault(_clipboard);

var _history = __webpack_require__(42);

var _history2 = _interopRequireDefault(_history);

var _keyboard = __webpack_require__(23);

var _keyboard2 = _interopRequireDefault(_keyboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_quill2.default.register({
  'blots/block': _block2.default,
  'blots/block/embed': _block.BlockEmbed,
  'blots/break': _break2.default,
  'blots/container': _container2.default,
  'blots/cursor': _cursor2.default,
  'blots/embed': _embed2.default,
  'blots/inline': _inline2.default,
  'blots/scroll': _scroll2.default,
  'blots/text': _text2.default,

  'modules/clipboard': _clipboard2.default,
  'modules/history': _history2.default,
  'modules/keyboard': _keyboard2.default
});

_parchment2.default.register(_block2.default, _break2.default, _cursor2.default, _inline2.default, _scroll2.default, _text2.default);

exports.default = _quill2.default;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Registry = __webpack_require__(1);
var ShadowBlot = /** @class */ (function () {
    function ShadowBlot(domNode) {
        this.domNode = domNode;
        // @ts-ignore
        this.domNode[Registry.DATA_KEY] = { blot: this };
    }
    Object.defineProperty(ShadowBlot.prototype, "statics", {
        // Hack for accessing inherited static methods
        get: function () {
            return this.constructor;
        },
        enumerable: true,
        configurable: true
    });
    ShadowBlot.create = function (value) {
        if (this.tagName == null) {
            throw new Registry.ParchmentError('Blot definition missing tagName');
        }
        var node;
        if (Array.isArray(this.tagName)) {
            if (typeof value === 'string') {
                value = value.toUpperCase();
                if (parseInt(value).toString() === value) {
                    value = parseInt(value);
                }
            }
            if (typeof value === 'number') {
                node = document.createElement(this.tagName[value - 1]);
            }
            else if (this.tagName.indexOf(value) > -1) {
                node = document.createElement(value);
            }
            else {
                node = document.createElement(this.tagName[0]);
            }
        }
        else {
            node = document.createElement(this.tagName);
        }
        if (this.className) {
            node.classList.add(this.className);
        }
        return node;
    };
    ShadowBlot.prototype.attach = function () {
        if (this.parent != null) {
            this.scroll = this.parent.scroll;
        }
    };
    ShadowBlot.prototype.clone = function () {
        var domNode = this.domNode.cloneNode(false);
        return Registry.create(domNode);
    };
    ShadowBlot.prototype.detach = function () {
        if (this.parent != null)
            this.parent.removeChild(this);
        // @ts-ignore
        delete this.domNode[Registry.DATA_KEY];
    };
    ShadowBlot.prototype.deleteAt = function (index, length) {
        var blot = this.isolate(index, length);
        blot.remove();
    };
    ShadowBlot.prototype.formatAt = function (index, length, name, value) {
        var blot = this.isolate(index, length);
        if (Registry.query(name, Registry.Scope.BLOT) != null && value) {
            blot.wrap(name, value);
        }
        else if (Registry.query(name, Registry.Scope.ATTRIBUTE) != null) {
            var parent = Registry.create(this.statics.scope);
            blot.wrap(parent);
            parent.format(name, value);
        }
    };
    ShadowBlot.prototype.insertAt = function (index, value, def) {
        var blot = def == null ? Registry.create('text', value) : Registry.create(value, def);
        var ref = this.split(index);
        this.parent.insertBefore(blot, ref);
    };
    ShadowBlot.prototype.insertInto = function (parentBlot, refBlot) {
        if (refBlot === void 0) { refBlot = null; }
        if (this.parent != null) {
            this.parent.children.remove(this);
        }
        var refDomNode = null;
        parentBlot.children.insertBefore(this, refBlot);
        if (refBlot != null) {
            refDomNode = refBlot.domNode;
        }
        if (this.domNode.parentNode != parentBlot.domNode ||
            this.domNode.nextSibling != refDomNode) {
            parentBlot.domNode.insertBefore(this.domNode, refDomNode);
        }
        this.parent = parentBlot;
        this.attach();
    };
    ShadowBlot.prototype.isolate = function (index, length) {
        var target = this.split(index);
        target.split(length);
        return target;
    };
    ShadowBlot.prototype.length = function () {
        return 1;
    };
    ShadowBlot.prototype.offset = function (root) {
        if (root === void 0) { root = this.parent; }
        if (this.parent == null || this == root)
            return 0;
        return this.parent.children.offset(this) + this.parent.offset(root);
    };
    ShadowBlot.prototype.optimize = function (context) {
        // TODO clean up once we use WeakMap
        // @ts-ignore
        if (this.domNode[Registry.DATA_KEY] != null) {
            // @ts-ignore
            delete this.domNode[Registry.DATA_KEY].mutations;
        }
    };
    ShadowBlot.prototype.remove = function () {
        if (this.domNode.parentNode != null) {
            this.domNode.parentNode.removeChild(this.domNode);
        }
        this.detach();
    };
    ShadowBlot.prototype.replace = function (target) {
        if (target.parent == null)
            return;
        target.parent.insertBefore(this, target.next);
        target.remove();
    };
    ShadowBlot.prototype.replaceWith = function (name, value) {
        var replacement = typeof name === 'string' ? Registry.create(name, value) : name;
        replacement.replace(this);
        return replacement;
    };
    ShadowBlot.prototype.split = function (index, force) {
        return index === 0 ? this : this.next;
    };
    ShadowBlot.prototype.update = function (mutations, context) {
        // Nothing to do by default
    };
    ShadowBlot.prototype.wrap = function (name, value) {
        var wrapper = typeof name === 'string' ? Registry.create(name, value) : name;
        if (this.parent != null) {
            this.parent.insertBefore(wrapper, this.next);
        }
        wrapper.appendChild(this);
        return wrapper;
    };
    ShadowBlot.blotName = 'abstract';
    return ShadowBlot;
}());
exports.default = ShadowBlot;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var attributor_1 = __webpack_require__(12);
var class_1 = __webpack_require__(32);
var style_1 = __webpack_require__(33);
var Registry = __webpack_require__(1);
var AttributorStore = /** @class */ (function () {
    function AttributorStore(domNode) {
        this.attributes = {};
        this.domNode = domNode;
        this.build();
    }
    AttributorStore.prototype.attribute = function (attribute, value) {
        // verb
        if (value) {
            if (attribute.add(this.domNode, value)) {
                if (attribute.value(this.domNode) != null) {
                    this.attributes[attribute.attrName] = attribute;
                }
                else {
                    delete this.attributes[attribute.attrName];
                }
            }
        }
        else {
            attribute.remove(this.domNode);
            delete this.attributes[attribute.attrName];
        }
    };
    AttributorStore.prototype.build = function () {
        var _this = this;
        this.attributes = {};
        var attributes = attributor_1.default.keys(this.domNode);
        var classes = class_1.default.keys(this.domNode);
        var styles = style_1.default.keys(this.domNode);
        attributes
            .concat(classes)
            .concat(styles)
            .forEach(function (name) {
            var attr = Registry.query(name, Registry.Scope.ATTRIBUTE);
            if (attr instanceof attributor_1.default) {
                _this.attributes[attr.attrName] = attr;
            }
        });
    };
    AttributorStore.prototype.copy = function (target) {
        var _this = this;
        Object.keys(this.attributes).forEach(function (key) {
            var value = _this.attributes[key].value(_this.domNode);
            target.format(key, value);
        });
    };
    AttributorStore.prototype.move = function (target) {
        var _this = this;
        this.copy(target);
        Object.keys(this.attributes).forEach(function (key) {
            _this.attributes[key].remove(_this.domNode);
        });
        this.attributes = {};
    };
    AttributorStore.prototype.values = function () {
        var _this = this;
        return Object.keys(this.attributes).reduce(function (attributes, name) {
            attributes[name] = _this.attributes[name].value(_this.domNode);
            return attributes;
        }, {});
    };
    return AttributorStore;
}());
exports.default = AttributorStore;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var attributor_1 = __webpack_require__(12);
function match(node, prefix) {
    var className = node.getAttribute('class') || '';
    return className.split(/\s+/).filter(function (name) {
        return name.indexOf(prefix + "-") === 0;
    });
}
var ClassAttributor = /** @class */ (function (_super) {
    __extends(ClassAttributor, _super);
    function ClassAttributor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClassAttributor.keys = function (node) {
        return (node.getAttribute('class') || '').split(/\s+/).map(function (name) {
            return name
                .split('-')
                .slice(0, -1)
                .join('-');
        });
    };
    ClassAttributor.prototype.add = function (node, value) {
        if (!this.canAdd(node, value))
            return false;
        this.remove(node);
        node.classList.add(this.keyName + "-" + value);
        return true;
    };
    ClassAttributor.prototype.remove = function (node) {
        var matches = match(node, this.keyName);
        matches.forEach(function (name) {
            node.classList.remove(name);
        });
        if (node.classList.length === 0) {
            node.removeAttribute('class');
        }
    };
    ClassAttributor.prototype.value = function (node) {
        var result = match(node, this.keyName)[0] || '';
        var value = result.slice(this.keyName.length + 1); // +1 for hyphen
        return this.canAdd(node, value) ? value : '';
    };
    return ClassAttributor;
}(attributor_1.default));
exports.default = ClassAttributor;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var attributor_1 = __webpack_require__(12);
function camelize(name) {
    var parts = name.split('-');
    var rest = parts
        .slice(1)
        .map(function (part) {
        return part[0].toUpperCase() + part.slice(1);
    })
        .join('');
    return parts[0] + rest;
}
var StyleAttributor = /** @class */ (function (_super) {
    __extends(StyleAttributor, _super);
    function StyleAttributor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StyleAttributor.keys = function (node) {
        return (node.getAttribute('style') || '').split(';').map(function (value) {
            var arr = value.split(':');
            return arr[0].trim();
        });
    };
    StyleAttributor.prototype.add = function (node, value) {
        if (!this.canAdd(node, value))
            return false;
        // @ts-ignore
        node.style[camelize(this.keyName)] = value;
        return true;
    };
    StyleAttributor.prototype.remove = function (node) {
        // @ts-ignore
        node.style[camelize(this.keyName)] = '';
        if (!node.getAttribute('style')) {
            node.removeAttribute('style');
        }
    };
    StyleAttributor.prototype.value = function (node) {
        // @ts-ignore
        var value = node.style[camelize(this.keyName)];
        return this.canAdd(node, value) ? value : '';
    };
    return StyleAttributor;
}(attributor_1.default));
exports.default = StyleAttributor;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Theme = function () {
  function Theme(quill, options) {
    _classCallCheck(this, Theme);

    this.quill = quill;
    this.options = options;
    this.modules = {};
  }

  _createClass(Theme, [{
    key: 'init',
    value: function init() {
      var _this = this;

      Object.keys(this.options.modules).forEach(function (name) {
        if (_this.modules[name] == null) {
          _this.addModule(name);
        }
      });
    }
  }, {
    key: 'addModule',
    value: function addModule(name) {
      var moduleClass = this.quill.constructor.import('modules/' + name);
      this.modules[name] = new moduleClass(this.quill, this.options.modules[name] || {});
      return this.modules[name];
    }
  }]);

  return Theme;
}();

Theme.DEFAULTS = {
  modules: {}
};
Theme.themes = {
  'default': Theme
};

exports.default = Theme;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _text = __webpack_require__(7);

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GUARD_TEXT = '\uFEFF';

var Embed = function (_Parchment$Embed) {
  _inherits(Embed, _Parchment$Embed);

  function Embed(node) {
    _classCallCheck(this, Embed);

    var _this = _possibleConstructorReturn(this, (Embed.__proto__ || Object.getPrototypeOf(Embed)).call(this, node));

    _this.contentNode = document.createElement('span');
    _this.contentNode.setAttribute('contenteditable', false);
    [].slice.call(_this.domNode.childNodes).forEach(function (childNode) {
      _this.contentNode.appendChild(childNode);
    });
    _this.leftGuard = document.createTextNode(GUARD_TEXT);
    _this.rightGuard = document.createTextNode(GUARD_TEXT);
    _this.domNode.appendChild(_this.leftGuard);
    _this.domNode.appendChild(_this.contentNode);
    _this.domNode.appendChild(_this.rightGuard);
    return _this;
  }

  _createClass(Embed, [{
    key: 'index',
    value: function index(node, offset) {
      if (node === this.leftGuard) return 0;
      if (node === this.rightGuard) return 1;
      return _get(Embed.prototype.__proto__ || Object.getPrototypeOf(Embed.prototype), 'index', this).call(this, node, offset);
    }
  }, {
    key: 'restore',
    value: function restore(node) {
      var range = void 0,
          textNode = void 0;
      var text = node.data.split(GUARD_TEXT).join('');
      if (node === this.leftGuard) {
        if (this.prev instanceof _text2.default) {
          var prevLength = this.prev.length();
          this.prev.insertAt(prevLength, text);
          range = {
            startNode: this.prev.domNode,
            startOffset: prevLength + text.length
          };
        } else {
          textNode = document.createTextNode(text);
          this.parent.insertBefore(_parchment2.default.create(textNode), this);
          range = {
            startNode: textNode,
            startOffset: text.length
          };
        }
      } else if (node === this.rightGuard) {
        if (this.next instanceof _text2.default) {
          this.next.insertAt(0, text);
          range = {
            startNode: this.next.domNode,
            startOffset: text.length
          };
        } else {
          textNode = document.createTextNode(text);
          this.parent.insertBefore(_parchment2.default.create(textNode), this.next);
          range = {
            startNode: textNode,
            startOffset: text.length
          };
        }
      }
      node.data = GUARD_TEXT;
      return range;
    }
  }, {
    key: 'update',
    value: function update(mutations, context) {
      var _this2 = this;

      mutations.forEach(function (mutation) {
        if (mutation.type === 'characterData' && (mutation.target === _this2.leftGuard || mutation.target === _this2.rightGuard)) {
          var range = _this2.restore(mutation.target);
          if (range) context.range = range;
        }
      });
    }
  }]);

  return Embed;
}(_parchment2.default.Embed);

exports.default = Embed;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlignStyle = exports.AlignClass = exports.AlignAttribute = undefined;

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
  scope: _parchment2.default.Scope.BLOCK,
  whitelist: ['right', 'center', 'justify']
};

var AlignAttribute = new _parchment2.default.Attributor.Attribute('align', 'align', config);
var AlignClass = new _parchment2.default.Attributor.Class('align', 'ql-align', config);
var AlignStyle = new _parchment2.default.Attributor.Style('align', 'text-align', config);

exports.AlignAttribute = AlignAttribute;
exports.AlignClass = AlignClass;
exports.AlignStyle = AlignStyle;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BackgroundStyle = exports.BackgroundClass = undefined;

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _color = __webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BackgroundClass = new _parchment2.default.Attributor.Class('background', 'ql-bg', {
  scope: _parchment2.default.Scope.INLINE
});
var BackgroundStyle = new _color.ColorAttributor('background', 'background-color', {
  scope: _parchment2.default.Scope.INLINE
});

exports.BackgroundClass = BackgroundClass;
exports.BackgroundStyle = BackgroundStyle;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DirectionStyle = exports.DirectionClass = exports.DirectionAttribute = undefined;

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
  scope: _parchment2.default.Scope.BLOCK,
  whitelist: ['rtl']
};

var DirectionAttribute = new _parchment2.default.Attributor.Attribute('direction', 'dir', config);
var DirectionClass = new _parchment2.default.Attributor.Class('direction', 'ql-direction', config);
var DirectionStyle = new _parchment2.default.Attributor.Style('direction', 'direction', config);

exports.DirectionAttribute = DirectionAttribute;
exports.DirectionClass = DirectionClass;
exports.DirectionStyle = DirectionStyle;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FontClass = exports.FontStyle = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var config = {
  scope: _parchment2.default.Scope.INLINE,
  whitelist: ['serif', 'monospace']
};

var FontClass = new _parchment2.default.Attributor.Class('font', 'ql-font', config);

var FontStyleAttributor = function (_Parchment$Attributor) {
  _inherits(FontStyleAttributor, _Parchment$Attributor);

  function FontStyleAttributor() {
    _classCallCheck(this, FontStyleAttributor);

    return _possibleConstructorReturn(this, (FontStyleAttributor.__proto__ || Object.getPrototypeOf(FontStyleAttributor)).apply(this, arguments));
  }

  _createClass(FontStyleAttributor, [{
    key: 'value',
    value: function value(node) {
      return _get(FontStyleAttributor.prototype.__proto__ || Object.getPrototypeOf(FontStyleAttributor.prototype), 'value', this).call(this, node).replace(/["']/g, '');
    }
  }]);

  return FontStyleAttributor;
}(_parchment2.default.Attributor.Style);

var FontStyle = new FontStyleAttributor('font', 'font-family', config);

exports.FontStyle = FontStyle;
exports.FontClass = FontClass;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SizeStyle = exports.SizeClass = undefined;

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SizeClass = new _parchment2.default.Attributor.Class('size', 'ql-size', {
  scope: _parchment2.default.Scope.INLINE,
  whitelist: ['small', 'large', 'huge']
});
var SizeStyle = new _parchment2.default.Attributor.Style('size', 'font-size', {
  scope: _parchment2.default.Scope.INLINE,
  whitelist: ['10px', '18px', '32px']
});

exports.SizeClass = SizeClass;
exports.SizeStyle = SizeStyle;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  'align': {
    '': __webpack_require__(76),
    'center': __webpack_require__(77),
    'right': __webpack_require__(78),
    'justify': __webpack_require__(79)
  },
  'background': __webpack_require__(80),
  'blockquote': __webpack_require__(81),
  'bold': __webpack_require__(82),
  'clean': __webpack_require__(83),
  'code': __webpack_require__(58),
  'code-block': __webpack_require__(58),
  'color': __webpack_require__(84),
  'direction': {
    '': __webpack_require__(85),
    'rtl': __webpack_require__(86)
  },
  'float': {
    'center': __webpack_require__(87),
    'full': __webpack_require__(88),
    'left': __webpack_require__(89),
    'right': __webpack_require__(90)
  },
  'formula': __webpack_require__(91),
  'header': {
    '1': __webpack_require__(92),
    '2': __webpack_require__(93)
  },
  'italic': __webpack_require__(94),
  'image': __webpack_require__(95),
  'indent': {
    '+1': __webpack_require__(96),
    '-1': __webpack_require__(97)
  },
  'link': __webpack_require__(98),
  'list': {
    'ordered': __webpack_require__(99),
    'bullet': __webpack_require__(100),
    'check': __webpack_require__(101)
  },
  'script': {
    'sub': __webpack_require__(102),
    'super': __webpack_require__(103)
  },
  'strike': __webpack_require__(104),
  'underline': __webpack_require__(105),
  'video': __webpack_require__(106)
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLastChangeIndex = exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _quill = __webpack_require__(5);

var _quill2 = _interopRequireDefault(_quill);

var _module = __webpack_require__(9);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var History = function (_Module) {
  _inherits(History, _Module);

  function History(quill, options) {
    _classCallCheck(this, History);

    var _this = _possibleConstructorReturn(this, (History.__proto__ || Object.getPrototypeOf(History)).call(this, quill, options));

    _this.lastRecorded = 0;
    _this.ignoreChange = false;
    _this.clear();
    _this.quill.on(_quill2.default.events.EDITOR_CHANGE, function (eventName, delta, oldDelta, source) {
      if (eventName !== _quill2.default.events.TEXT_CHANGE || _this.ignoreChange) return;
      if (!_this.options.userOnly || source === _quill2.default.sources.USER) {
        _this.record(delta, oldDelta);
      } else {
        _this.transform(delta);
      }
    });
    _this.quill.keyboard.addBinding({ key: 'Z', shortKey: true }, _this.undo.bind(_this));
    _this.quill.keyboard.addBinding({ key: 'Z', shortKey: true, shiftKey: true }, _this.redo.bind(_this));
    if (/Win/i.test(navigator.platform)) {
      _this.quill.keyboard.addBinding({ key: 'Y', shortKey: true }, _this.redo.bind(_this));
    }
    return _this;
  }

  _createClass(History, [{
    key: 'change',
    value: function change(source, dest) {
      if (this.stack[source].length === 0) return;
      var delta = this.stack[source].pop();
      this.stack[dest].push(delta);
      this.lastRecorded = 0;
      this.ignoreChange = true;
      this.quill.updateContents(delta[source], _quill2.default.sources.USER);
      this.ignoreChange = false;
      var index = getLastChangeIndex(delta[source]);
      this.quill.setSelection(index);
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.stack = { undo: [], redo: [] };
    }
  }, {
    key: 'cutoff',
    value: function cutoff() {
      this.lastRecorded = 0;
    }
  }, {
    key: 'record',
    value: function record(changeDelta, oldDelta) {
      if (changeDelta.ops.length === 0) return;
      this.stack.redo = [];
      var undoDelta = this.quill.getContents().diff(oldDelta);
      var timestamp = Date.now();
      if (this.lastRecorded + this.options.delay > timestamp && this.stack.undo.length > 0) {
        var delta = this.stack.undo.pop();
        undoDelta = undoDelta.compose(delta.undo);
        changeDelta = delta.redo.compose(changeDelta);
      } else {
        this.lastRecorded = timestamp;
      }
      this.stack.undo.push({
        redo: changeDelta,
        undo: undoDelta
      });
      if (this.stack.undo.length > this.options.maxStack) {
        this.stack.undo.shift();
      }
    }
  }, {
    key: 'redo',
    value: function redo() {
      this.change('redo', 'undo');
    }
  }, {
    key: 'transform',
    value: function transform(delta) {
      this.stack.undo.forEach(function (change) {
        change.undo = delta.transform(change.undo, true);
        change.redo = delta.transform(change.redo, true);
      });
      this.stack.redo.forEach(function (change) {
        change.undo = delta.transform(change.undo, true);
        change.redo = delta.transform(change.redo, true);
      });
    }
  }, {
    key: 'undo',
    value: function undo() {
      this.change('undo', 'redo');
    }
  }]);

  return History;
}(_module2.default);

History.DEFAULTS = {
  delay: 1000,
  maxStack: 100,
  userOnly: false
};

function endsWithNewlineChange(delta) {
  var lastOp = delta.ops[delta.ops.length - 1];
  if (lastOp == null) return false;
  if (lastOp.insert != null) {
    return typeof lastOp.insert === 'string' && lastOp.insert.endsWith('\n');
  }
  if (lastOp.attributes != null) {
    return Object.keys(lastOp.attributes).some(function (attr) {
      return _parchment2.default.query(attr, _parchment2.default.Scope.BLOCK) != null;
    });
  }
  return false;
}

function getLastChangeIndex(delta) {
  var deleteLength = delta.reduce(function (length, op) {
    length += op.delete || 0;
    return length;
  }, 0);
  var changeIndex = delta.length() - deleteLength;
  if (endsWithNewlineChange(delta)) {
    changeIndex -= 1;
  }
  return changeIndex;
}

exports.default = History;
exports.getLastChangeIndex = getLastChangeIndex;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BaseTooltip = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _extend = __webpack_require__(3);

var _extend2 = _interopRequireDefault(_extend);

var _quillDelta = __webpack_require__(2);

var _quillDelta2 = _interopRequireDefault(_quillDelta);

var _emitter = __webpack_require__(8);

var _emitter2 = _interopRequireDefault(_emitter);

var _keyboard = __webpack_require__(23);

var _keyboard2 = _interopRequireDefault(_keyboard);

var _theme = __webpack_require__(34);

var _theme2 = _interopRequireDefault(_theme);

var _colorPicker = __webpack_require__(59);

var _colorPicker2 = _interopRequireDefault(_colorPicker);

var _iconPicker = __webpack_require__(60);

var _iconPicker2 = _interopRequireDefault(_iconPicker);

var _picker = __webpack_require__(28);

var _picker2 = _interopRequireDefault(_picker);

var _tooltip = __webpack_require__(61);

var _tooltip2 = _interopRequireDefault(_tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ALIGNS = [false, 'center', 'right', 'justify'];

var COLORS = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"];

var FONTS = [false, 'serif', 'monospace'];

var HEADERS = ['1', '2', '3', false];

var SIZES = ['small', false, 'large', 'huge'];

var BaseTheme = function (_Theme) {
  _inherits(BaseTheme, _Theme);

  function BaseTheme(quill, options) {
    _classCallCheck(this, BaseTheme);

    var _this = _possibleConstructorReturn(this, (BaseTheme.__proto__ || Object.getPrototypeOf(BaseTheme)).call(this, quill, options));

    var listener = function listener(e) {
      if (!document.body.contains(quill.root)) {
        return document.body.removeEventListener('click', listener);
      }
      if (_this.tooltip != null && !_this.tooltip.root.contains(e.target) && document.activeElement !== _this.tooltip.textbox && !_this.quill.hasFocus()) {
        _this.tooltip.hide();
      }
      if (_this.pickers != null) {
        _this.pickers.forEach(function (picker) {
          if (!picker.container.contains(e.target)) {
            picker.close();
          }
        });
      }
    };
    quill.emitter.listenDOM('click', document.body, listener);
    return _this;
  }

  _createClass(BaseTheme, [{
    key: 'addModule',
    value: function addModule(name) {
      var module = _get(BaseTheme.prototype.__proto__ || Object.getPrototypeOf(BaseTheme.prototype), 'addModule', this).call(this, name);
      if (name === 'toolbar') {
        this.extendToolbar(module);
      }
      return module;
    }
  }, {
    key: 'buildButtons',
    value: function buildButtons(buttons, icons) {
      buttons.forEach(function (button) {
        var className = button.getAttribute('class') || '';
        className.split(/\s+/).forEach(function (name) {
          if (!name.startsWith('ql-')) return;
          name = name.slice('ql-'.length);
          if (icons[name] == null) return;
          if (name === 'direction') {
            button.innerHTML = icons[name][''] + icons[name]['rtl'];
          } else if (typeof icons[name] === 'string') {
            button.innerHTML = icons[name];
          } else {
            var value = button.value || '';
            if (value != null && icons[name][value]) {
              button.innerHTML = icons[name][value];
            }
          }
        });
      });
    }
  }, {
    key: 'buildPickers',
    value: function buildPickers(selects, icons) {
      var _this2 = this;

      this.pickers = selects.map(function (select) {
        if (select.classList.contains('ql-align')) {
          if (select.querySelector('option') == null) {
            fillSelect(select, ALIGNS);
          }
          return new _iconPicker2.default(select, icons.align);
        } else if (select.classList.contains('ql-background') || select.classList.contains('ql-color')) {
          var format = select.classList.contains('ql-background') ? 'background' : 'color';
          if (select.querySelector('option') == null) {
            fillSelect(select, COLORS, format === 'background' ? '#ffffff' : '#000000');
          }
          return new _colorPicker2.default(select, icons[format]);
        } else {
          if (select.querySelector('option') == null) {
            if (select.classList.contains('ql-font')) {
              fillSelect(select, FONTS);
            } else if (select.classList.contains('ql-header')) {
              fillSelect(select, HEADERS);
            } else if (select.classList.contains('ql-size')) {
              fillSelect(select, SIZES);
            }
          }
          return new _picker2.default(select);
        }
      });
      var update = function update() {
        _this2.pickers.forEach(function (picker) {
          picker.update();
        });
      };
      this.quill.on(_emitter2.default.events.EDITOR_CHANGE, update);
    }
  }]);

  return BaseTheme;
}(_theme2.default);

BaseTheme.DEFAULTS = (0, _extend2.default)(true, {}, _theme2.default.DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        formula: function formula() {
          this.quill.theme.tooltip.edit('formula');
        },
        image: function image() {
          var _this3 = this;

          var fileInput = this.container.querySelector('input.ql-image[type=file]');
          if (fileInput == null) {
            fileInput = document.createElement('input');
            fileInput.setAttribute('type', 'file');
            fileInput.setAttribute('accept', 'image/png, image/gif, image/jpeg, image/bmp, image/x-icon');
            fileInput.classList.add('ql-image');
            fileInput.addEventListener('change', function () {
              if (fileInput.files != null && fileInput.files[0] != null) {
                var reader = new FileReader();
                reader.onload = function (e) {
                  var range = _this3.quill.getSelection(true);
                  _this3.quill.updateContents(new _quillDelta2.default().retain(range.index).delete(range.length).insert({ image: e.target.result }), _emitter2.default.sources.USER);
                  _this3.quill.setSelection(range.index + 1, _emitter2.default.sources.SILENT);
                  fileInput.value = "";
                };
                reader.readAsDataURL(fileInput.files[0]);
              }
            });
            this.container.appendChild(fileInput);
          }
          fileInput.click();
        },
        video: function video() {
          this.quill.theme.tooltip.edit('video');
        }
      }
    }
  }
});

var BaseTooltip = function (_Tooltip) {
  _inherits(BaseTooltip, _Tooltip);

  function BaseTooltip(quill, boundsContainer) {
    _classCallCheck(this, BaseTooltip);

    var _this4 = _possibleConstructorReturn(this, (BaseTooltip.__proto__ || Object.getPrototypeOf(BaseTooltip)).call(this, quill, boundsContainer));

    _this4.textbox = _this4.root.querySelector('input[type="text"]');
    _this4.listen();
    return _this4;
  }

  _createClass(BaseTooltip, [{
    key: 'listen',
    value: function listen() {
      var _this5 = this;

      this.textbox.addEventListener('keydown', function (event) {
        if (_keyboard2.default.match(event, 'enter')) {
          _this5.save();
          event.preventDefault();
        } else if (_keyboard2.default.match(event, 'escape')) {
          _this5.cancel();
          event.preventDefault();
        }
      });
    }
  }, {
    key: 'cancel',
    value: function cancel() {
      this.hide();
    }
  }, {
    key: 'edit',
    value: function edit() {
      var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'link';
      var preview = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      this.root.classList.remove('ql-hidden');
      this.root.classList.add('ql-editing');
      if (preview != null) {
        this.textbox.value = preview;
      } else if (mode !== this.root.getAttribute('data-mode')) {
        this.textbox.value = '';
      }
      this.position(this.quill.getBounds(this.quill.selection.savedRange));
      this.textbox.select();
      this.textbox.setAttribute('placeholder', this.textbox.getAttribute('data-' + mode) || '');
      this.root.setAttribute('data-mode', mode);
    }
  }, {
    key: 'restoreFocus',
    value: function restoreFocus() {
      var scrollTop = this.quill.scrollingContainer.scrollTop;
      this.quill.focus();
      this.quill.scrollingContainer.scrollTop = scrollTop;
    }
  }, {
    key: 'save',
    value: function save() {
      var value = this.textbox.value;
      switch (this.root.getAttribute('data-mode')) {
        case 'link':
          {
            var scrollTop = this.quill.root.scrollTop;
            if (this.linkRange) {
              this.quill.formatText(this.linkRange, 'link', value, _emitter2.default.sources.USER);
              delete this.linkRange;
            } else {
              this.restoreFocus();
              this.quill.format('link', value, _emitter2.default.sources.USER);
            }
            this.quill.root.scrollTop = scrollTop;
            break;
          }
        case 'video':
          {
            value = extractVideoUrl(value);
          } // eslint-disable-next-line no-fallthrough
        case 'formula':
          {
            if (!value) break;
            var range = this.quill.getSelection(true);
            if (range != null) {
              var index = range.index + range.length;
              this.quill.insertEmbed(index, this.root.getAttribute('data-mode'), value, _emitter2.default.sources.USER);
              if (this.root.getAttribute('data-mode') === 'formula') {
                this.quill.insertText(index + 1, ' ', _emitter2.default.sources.USER);
              }
              this.quill.setSelection(index + 2, _emitter2.default.sources.USER);
            }
            break;
          }
        default:
      }
      this.textbox.value = '';
      this.hide();
    }
  }]);

  return BaseTooltip;
}(_tooltip2.default);

function extractVideoUrl(url) {
  var match = url.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || url.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (match) {
    return (match[1] || 'https') + '://www.youtube.com/embed/' + match[2] + '?showinfo=0';
  }
  if (match = url.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) {
    // eslint-disable-line no-cond-assign
    return (match[1] || 'https') + '://player.vimeo.com/video/' + match[2] + '/';
  }
  return url;
}

function fillSelect(select, values) {
  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  values.forEach(function (value) {
    var option = document.createElement('option');
    if (value === defaultValue) {
      option.setAttribute('selected', 'selected');
    } else {
      option.setAttribute('value', value);
    }
    select.appendChild(option);
  });
}

exports.BaseTooltip = BaseTooltip;
exports.default = BaseTheme;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = this.tail = null;
        this.length = 0;
    }
    LinkedList.prototype.append = function () {
        var nodes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nodes[_i] = arguments[_i];
        }
        this.insertBefore(nodes[0], null);
        if (nodes.length > 1) {
            this.append.apply(this, nodes.slice(1));
        }
    };
    LinkedList.prototype.contains = function (node) {
        var cur, next = this.iterator();
        while ((cur = next())) {
            if (cur === node)
                return true;
        }
        return false;
    };
    LinkedList.prototype.insertBefore = function (node, refNode) {
        if (!node)
            return;
        node.next = refNode;
        if (refNode != null) {
            node.prev = refNode.prev;
            if (refNode.prev != null) {
                refNode.prev.next = node;
            }
            refNode.prev = node;
            if (refNode === this.head) {
                this.head = node;
            }
        }
        else if (this.tail != null) {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        else {
            node.prev = null;
            this.head = this.tail = node;
        }
        this.length += 1;
    };
    LinkedList.prototype.offset = function (target) {
        var index = 0, cur = this.head;
        while (cur != null) {
            if (cur === target)
                return index;
            index += cur.length();
            cur = cur.next;
        }
        return -1;
    };
    LinkedList.prototype.remove = function (node) {
        if (!this.contains(node))
            return;
        if (node.prev != null)
            node.prev.next = node.next;
        if (node.next != null)
            node.next.prev = node.prev;
        if (node === this.head)
            this.head = node.next;
        if (node === this.tail)
            this.tail = node.prev;
        this.length -= 1;
    };
    LinkedList.prototype.iterator = function (curNode) {
        if (curNode === void 0) { curNode = this.head; }
        // TODO use yield when we can
        return function () {
            var ret = curNode;
            if (curNode != null)
                curNode = curNode.next;
            return ret;
        };
    };
    LinkedList.prototype.find = function (index, inclusive) {
        if (inclusive === void 0) { inclusive = false; }
        var cur, next = this.iterator();
        while ((cur = next())) {
            var length = cur.length();
            if (index < length ||
                (inclusive && index === length && (cur.next == null || cur.next.length() !== 0))) {
                return [cur, index];
            }
            index -= length;
        }
        return [null, 0];
    };
    LinkedList.prototype.forEach = function (callback) {
        var cur, next = this.iterator();
        while ((cur = next())) {
            callback(cur);
        }
    };
    LinkedList.prototype.forEachAt = function (index, length, callback) {
        if (length <= 0)
            return;
        var _a = this.find(index), startNode = _a[0], offset = _a[1];
        var cur, curIndex = index - offset, next = this.iterator(startNode);
        while ((cur = next()) && curIndex < index + length) {
            var curLength = cur.length();
            if (index > curIndex) {
                callback(cur, index - curIndex, Math.min(length, curIndex + curLength - index));
            }
            else {
                callback(cur, 0, Math.min(curLength, index + length - curIndex));
            }
            curIndex += curLength;
        }
    };
    LinkedList.prototype.map = function (callback) {
        return this.reduce(function (memo, cur) {
            memo.push(callback(cur));
            return memo;
        }, []);
    };
    LinkedList.prototype.reduce = function (callback, memo) {
        var cur, next = this.iterator();
        while ((cur = next())) {
            memo = callback(memo, cur);
        }
        return memo;
    };
    return LinkedList;
}());
exports.default = LinkedList;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var container_1 = __webpack_require__(17);
var Registry = __webpack_require__(1);
var OBSERVER_CONFIG = {
    attributes: true,
    characterData: true,
    characterDataOldValue: true,
    childList: true,
    subtree: true,
};
var MAX_OPTIMIZE_ITERATIONS = 100;
var ScrollBlot = /** @class */ (function (_super) {
    __extends(ScrollBlot, _super);
    function ScrollBlot(node) {
        var _this = _super.call(this, node) || this;
        _this.scroll = _this;
        _this.observer = new MutationObserver(function (mutations) {
            _this.update(mutations);
        });
        _this.observer.observe(_this.domNode, OBSERVER_CONFIG);
        _this.attach();
        return _this;
    }
    ScrollBlot.prototype.detach = function () {
        _super.prototype.detach.call(this);
        this.observer.disconnect();
    };
    ScrollBlot.prototype.deleteAt = function (index, length) {
        this.update();
        if (index === 0 && length === this.length()) {
            this.children.forEach(function (child) {
                child.remove();
            });
        }
        else {
            _super.prototype.deleteAt.call(this, index, length);
        }
    };
    ScrollBlot.prototype.formatAt = function (index, length, name, value) {
        this.update();
        _super.prototype.formatAt.call(this, index, length, name, value);
    };
    ScrollBlot.prototype.insertAt = function (index, value, def) {
        this.update();
        _super.prototype.insertAt.call(this, index, value, def);
    };
    ScrollBlot.prototype.optimize = function (mutations, context) {
        var _this = this;
        if (mutations === void 0) { mutations = []; }
        if (context === void 0) { context = {}; }
        _super.prototype.optimize.call(this, context);
        // We must modify mutations directly, cannot make copy and then modify
        var records = [].slice.call(this.observer.takeRecords());
        // Array.push currently seems to be implemented by a non-tail recursive function
        // so we cannot just mutations.push.apply(mutations, this.observer.takeRecords());
        while (records.length > 0)
            mutations.push(records.pop());
        // TODO use WeakMap
        var mark = function (blot, markParent) {
            if (markParent === void 0) { markParent = true; }
            if (blot == null || blot === _this)
                return;
            if (blot.domNode.parentNode == null)
                return;
            // @ts-ignore
            if (blot.domNode[Registry.DATA_KEY].mutations == null) {
                // @ts-ignore
                blot.domNode[Registry.DATA_KEY].mutations = [];
            }
            if (markParent)
                mark(blot.parent);
        };
        var optimize = function (blot) {
            // Post-order traversal
            if (
            // @ts-ignore
            blot.domNode[Registry.DATA_KEY] == null ||
                // @ts-ignore
                blot.domNode[Registry.DATA_KEY].mutations == null) {
                return;
            }
            if (blot instanceof container_1.default) {
                blot.children.forEach(optimize);
            }
            blot.optimize(context);
        };
        var remaining = mutations;
        for (var i = 0; remaining.length > 0; i += 1) {
            if (i >= MAX_OPTIMIZE_ITERATIONS) {
                throw new Error('[Parchment] Maximum optimize iterations reached');
            }
            remaining.forEach(function (mutation) {
                var blot = Registry.find(mutation.target, true);
                if (blot == null)
                    return;
                if (blot.domNode === mutation.target) {
                    if (mutation.type === 'childList') {
                        mark(Registry.find(mutation.previousSibling, false));
                        [].forEach.call(mutation.addedNodes, function (node) {
                            var child = Registry.find(node, false);
                            mark(child, false);
                            if (child instanceof container_1.default) {
                                child.children.forEach(function (grandChild) {
                                    mark(grandChild, false);
                                });
                            }
                        });
                    }
                    else if (mutation.type === 'attributes') {
                        mark(blot.prev);
                    }
                }
                mark(blot);
            });
            this.children.forEach(optimize);
            remaining = [].slice.call(this.observer.takeRecords());
            records = remaining.slice();
            while (records.length > 0)
                mutations.push(records.pop());
        }
    };
    ScrollBlot.prototype.update = function (mutations, context) {
        var _this = this;
        if (context === void 0) { context = {}; }
        mutations = mutations || this.observer.takeRecords();
        // TODO use WeakMap
        mutations
            .map(function (mutation) {
            var blot = Registry.find(mutation.target, true);
            if (blot == null)
                return null;
            // @ts-ignore
            if (blot.domNode[Registry.DATA_KEY].mutations == null) {
                // @ts-ignore
                blot.domNode[Registry.DATA_KEY].mutations = [mutation];
                return blot;
            }
            else {
                // @ts-ignore
                blot.domNode[Registry.DATA_KEY].mutations.push(mutation);
                return null;
            }
        })
            .forEach(function (blot) {
            if (blot == null ||
                blot === _this ||
                //@ts-ignore
                blot.domNode[Registry.DATA_KEY] == null)
                return;
            // @ts-ignore
            blot.update(blot.domNode[Registry.DATA_KEY].mutations || [], context);
        });
        // @ts-ignore
        if (this.domNode[Registry.DATA_KEY].mutations != null) {
            // @ts-ignore
            _super.prototype.update.call(this, this.domNode[Registry.DATA_KEY].mutations, context);
        }
        this.optimize(mutations, context);
    };
    ScrollBlot.blotName = 'scroll';
    ScrollBlot.defaultChild = 'block';
    ScrollBlot.scope = Registry.Scope.BLOCK_BLOT;
    ScrollBlot.tagName = 'DIV';
    return ScrollBlot;
}(container_1.default));
exports.default = ScrollBlot;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var format_1 = __webpack_require__(18);
var Registry = __webpack_require__(1);
// Shallow object comparison
function isEqual(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length)
        return false;
    // @ts-ignore
    for (var prop in obj1) {
        // @ts-ignore
        if (obj1[prop] !== obj2[prop])
            return false;
    }
    return true;
}
var InlineBlot = /** @class */ (function (_super) {
    __extends(InlineBlot, _super);
    function InlineBlot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InlineBlot.formats = function (domNode) {
        if (domNode.tagName === InlineBlot.tagName)
            return undefined;
        return _super.formats.call(this, domNode);
    };
    InlineBlot.prototype.format = function (name, value) {
        var _this = this;
        if (name === this.statics.blotName && !value) {
            this.children.forEach(function (child) {
                if (!(child instanceof format_1.default)) {
                    child = child.wrap(InlineBlot.blotName, true);
                }
                _this.attributes.copy(child);
            });
            this.unwrap();
        }
        else {
            _super.prototype.format.call(this, name, value);
        }
    };
    InlineBlot.prototype.formatAt = function (index, length, name, value) {
        if (this.formats()[name] != null || Registry.query(name, Registry.Scope.ATTRIBUTE)) {
            var blot = this.isolate(index, length);
            blot.format(name, value);
        }
        else {
            _super.prototype.formatAt.call(this, index, length, name, value);
        }
    };
    InlineBlot.prototype.optimize = function (context) {
        _super.prototype.optimize.call(this, context);
        var formats = this.formats();
        if (Object.keys(formats).length === 0) {
            return this.unwrap(); // unformatted span
        }
        var next = this.next;
        if (next instanceof InlineBlot && next.prev === this && isEqual(formats, next.formats())) {
            next.moveChildren(this);
            next.remove();
        }
    };
    InlineBlot.blotName = 'inline';
    InlineBlot.scope = Registry.Scope.INLINE_BLOT;
    InlineBlot.tagName = 'SPAN';
    return InlineBlot;
}(format_1.default));
exports.default = InlineBlot;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var format_1 = __webpack_require__(18);
var Registry = __webpack_require__(1);
var BlockBlot = /** @class */ (function (_super) {
    __extends(BlockBlot, _super);
    function BlockBlot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlockBlot.formats = function (domNode) {
        var tagName = Registry.query(BlockBlot.blotName).tagName;
        if (domNode.tagName === tagName)
            return undefined;
        return _super.formats.call(this, domNode);
    };
    BlockBlot.prototype.format = function (name, value) {
        if (Registry.query(name, Registry.Scope.BLOCK) == null) {
            return;
        }
        else if (name === this.statics.blotName && !value) {
            this.replaceWith(BlockBlot.blotName);
        }
        else {
            _super.prototype.format.call(this, name, value);
        }
    };
    BlockBlot.prototype.formatAt = function (index, length, name, value) {
        if (Registry.query(name, Registry.Scope.BLOCK) != null) {
            this.format(name, value);
        }
        else {
            _super.prototype.formatAt.call(this, index, length, name, value);
        }
    };
    BlockBlot.prototype.insertAt = function (index, value, def) {
        if (def == null || Registry.query(value, Registry.Scope.INLINE) != null) {
            // Insert text or inline
            _super.prototype.insertAt.call(this, index, value, def);
        }
        else {
            var after = this.split(index);
            var blot = Registry.create(value, def);
            after.parent.insertBefore(blot, after);
        }
    };
    BlockBlot.prototype.update = function (mutations, context) {
        if (navigator.userAgent.match(/Trident/)) {
            this.build();
        }
        else {
            _super.prototype.update.call(this, mutations, context);
        }
    };
    BlockBlot.blotName = 'block';
    BlockBlot.scope = Registry.Scope.BLOCK_BLOT;
    BlockBlot.tagName = 'P';
    return BlockBlot;
}(format_1.default));
exports.default = BlockBlot;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var leaf_1 = __webpack_require__(19);
var EmbedBlot = /** @class */ (function (_super) {
    __extends(EmbedBlot, _super);
    function EmbedBlot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmbedBlot.formats = function (domNode) {
        return undefined;
    };
    EmbedBlot.prototype.format = function (name, value) {
        // super.formatAt wraps, which is what we want in general,
        // but this allows subclasses to overwrite for formats
        // that just apply to particular embeds
        _super.prototype.formatAt.call(this, 0, this.length(), name, value);
    };
    EmbedBlot.prototype.formatAt = function (index, length, name, value) {
        if (index === 0 && length === this.length()) {
            this.format(name, value);
        }
        else {
            _super.prototype.formatAt.call(this, index, length, name, value);
        }
    };
    EmbedBlot.prototype.formats = function () {
        return this.statics.formats(this.domNode);
    };
    return EmbedBlot;
}(leaf_1.default));
exports.default = EmbedBlot;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var leaf_1 = __webpack_require__(19);
var Registry = __webpack_require__(1);
var TextBlot = /** @class */ (function (_super) {
    __extends(TextBlot, _super);
    function TextBlot(node) {
        var _this = _super.call(this, node) || this;
        _this.text = _this.statics.value(_this.domNode);
        return _this;
    }
    TextBlot.create = function (value) {
        return document.createTextNode(value);
    };
    TextBlot.value = function (domNode) {
        var text = domNode.data;
        // @ts-ignore
        if (text['normalize'])
            text = text['normalize']();
        return text;
    };
    TextBlot.prototype.deleteAt = function (index, length) {
        this.domNode.data = this.text = this.text.slice(0, index) + this.text.slice(index + length);
    };
    TextBlot.prototype.index = function (node, offset) {
        if (this.domNode === node) {
            return offset;
        }
        return -1;
    };
    TextBlot.prototype.insertAt = function (index, value, def) {
        if (def == null) {
            this.text = this.text.slice(0, index) + value + this.text.slice(index);
            this.domNode.data = this.text;
        }
        else {
            _super.prototype.insertAt.call(this, index, value, def);
        }
    };
    TextBlot.prototype.length = function () {
        return this.text.length;
    };
    TextBlot.prototype.optimize = function (context) {
        _super.prototype.optimize.call(this, context);
        this.text = this.statics.value(this.domNode);
        if (this.text.length === 0) {
            this.remove();
        }
        else if (this.next instanceof TextBlot && this.next.prev === this) {
            this.insertAt(this.length(), this.next.value());
            this.next.remove();
        }
    };
    TextBlot.prototype.position = function (index, inclusive) {
        if (inclusive === void 0) { inclusive = false; }
        return [this.domNode, index];
    };
    TextBlot.prototype.split = function (index, force) {
        if (force === void 0) { force = false; }
        if (!force) {
            if (index === 0)
                return this;
            if (index === this.length())
                return this.next;
        }
        var after = Registry.create(this.domNode.splitText(index));
        this.parent.insertBefore(after, this.next);
        this.text = this.statics.value(this.domNode);
        return after;
    };
    TextBlot.prototype.update = function (mutations, context) {
        var _this = this;
        if (mutations.some(function (mutation) {
            return mutation.type === 'characterData' && mutation.target === _this.domNode;
        })) {
            this.text = this.statics.value(this.domNode);
        }
    };
    TextBlot.prototype.value = function () {
        return this.text;
    };
    TextBlot.blotName = 'text';
    TextBlot.scope = Registry.Scope.INLINE_BLOT;
    return TextBlot;
}(leaf_1.default));
exports.default = TextBlot;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var elem = document.createElement('div');
elem.classList.toggle('test-class', false);
if (elem.classList.contains('test-class')) {
  var _toggle = DOMTokenList.prototype.toggle;
  DOMTokenList.prototype.toggle = function (token, force) {
    if (arguments.length > 1 && !this.contains(token) === !force) {
      return force;
    } else {
      return _toggle.call(this, token);
    }
  };
}

if (!String.prototype.startsWith) {
  String.prototype.startsWith = function (searchString, position) {
    position = position || 0;
    return this.substr(position, searchString.length) === searchString;
  };
}

if (!String.prototype.endsWith) {
  String.prototype.endsWith = function (searchString, position) {
    var subjectString = this.toString();
    if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
      position = subjectString.length;
    }
    position -= searchString.length;
    var lastIndex = subjectString.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  };
}

if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, "find", {
    value: function value(predicate) {
      if (this === null) {
        throw new TypeError('Array.prototype.find called on null or undefined');
      }
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }
      var list = Object(this);
      var length = list.length >>> 0;
      var thisArg = arguments[1];
      var value;

      for (var i = 0; i < length; i++) {
        value = list[i];
        if (predicate.call(thisArg, value, i, list)) {
          return value;
        }
      }
      return undefined;
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Disable resizing in Firefox
  document.execCommand("enableObjectResizing", false, false);
  // Disable automatic linkifying in IE11
  document.execCommand("autoUrlDetect", false, false);
});

/***/ }),
/* 51 */
/***/ (function(module, exports) {

/**
 * This library modifies the diff-patch-match library by Neil Fraser
 * by removing the patch and match functionality and certain advanced
 * options in the diff function. The original license is as follows:
 *
 * ===
 *
 * Diff Match and Patch
 *
 * Copyright 2006 Google Inc.
 * http://code.google.com/p/google-diff-match-patch/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * The data structure representing a diff is an array of tuples:
 * [[DIFF_DELETE, 'Hello'], [DIFF_INSERT, 'Goodbye'], [DIFF_EQUAL, ' world.']]
 * which means: delete 'Hello', add 'Goodbye' and keep ' world.'
 */
var DIFF_DELETE = -1;
var DIFF_INSERT = 1;
var DIFF_EQUAL = 0;


/**
 * Find the differences between two texts.  Simplifies the problem by stripping
 * any common prefix or suffix off the texts before diffing.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @param {Int} cursor_pos Expected edit position in text1 (optional)
 * @return {Array} Array of diff tuples.
 */
function diff_main(text1, text2, cursor_pos) {
  // Check for equality (speedup).
  if (text1 == text2) {
    if (text1) {
      return [[DIFF_EQUAL, text1]];
    }
    return [];
  }

  // Check cursor_pos within bounds
  if (cursor_pos < 0 || text1.length < cursor_pos) {
    cursor_pos = null;
  }

  // Trim off common prefix (speedup).
  var commonlength = diff_commonPrefix(text1, text2);
  var commonprefix = text1.substring(0, commonlength);
  text1 = text1.substring(commonlength);
  text2 = text2.substring(commonlength);

  // Trim off common suffix (speedup).
  commonlength = diff_commonSuffix(text1, text2);
  var commonsuffix = text1.substring(text1.length - commonlength);
  text1 = text1.substring(0, text1.length - commonlength);
  text2 = text2.substring(0, text2.length - commonlength);

  // Compute the diff on the middle block.
  var diffs = diff_compute_(text1, text2);

  // Restore the prefix and suffix.
  if (commonprefix) {
    diffs.unshift([DIFF_EQUAL, commonprefix]);
  }
  if (commonsuffix) {
    diffs.push([DIFF_EQUAL, commonsuffix]);
  }
  diff_cleanupMerge(diffs);
  if (cursor_pos != null) {
    diffs = fix_cursor(diffs, cursor_pos);
  }
  diffs = fix_emoji(diffs);
  return diffs;
};


/**
 * Find the differences between two texts.  Assumes that the texts do not
 * have any common prefix or suffix.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @return {Array} Array of diff tuples.
 */
function diff_compute_(text1, text2) {
  var diffs;

  if (!text1) {
    // Just add some text (speedup).
    return [[DIFF_INSERT, text2]];
  }

  if (!text2) {
    // Just delete some text (speedup).
    return [[DIFF_DELETE, text1]];
  }

  var longtext = text1.length > text2.length ? text1 : text2;
  var shorttext = text1.length > text2.length ? text2 : text1;
  var i = longtext.indexOf(shorttext);
  if (i != -1) {
    // Shorter text is inside the longer text (speedup).
    diffs = [[DIFF_INSERT, longtext.substring(0, i)],
             [DIFF_EQUAL, shorttext],
             [DIFF_INSERT, longtext.substring(i + shorttext.length)]];
    // Swap insertions for deletions if diff is reversed.
    if (text1.length > text2.length) {
      diffs[0][0] = diffs[2][0] = DIFF_DELETE;
    }
    return diffs;
  }

  if (shorttext.length == 1) {
    // Single character string.
    // After the previous speedup, the character can't be an equality.
    return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
  }

  // Check to see if the problem can be split in two.
  var hm = diff_halfMatch_(text1, text2);
  if (hm) {
    // A half-match was found, sort out the return data.
    var text1_a = hm[0];
    var text1_b = hm[1];
    var text2_a = hm[2];
    var text2_b = hm[3];
    var mid_common = hm[4];
    // Send both pairs off for separate processing.
    var diffs_a = diff_main(text1_a, text2_a);
    var diffs_b = diff_main(text1_b, text2_b);
    // Merge the results.
    return diffs_a.concat([[DIFF_EQUAL, mid_common]], diffs_b);
  }

  return diff_bisect_(text1, text2);
};


/**
 * Find the 'middle snake' of a diff, split the problem in two
 * and return the recursively constructed diff.
 * See Myers 1986 paper: An O(ND) Difference Algorithm and Its Variations.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @return {Array} Array of diff tuples.
 * @private
 */
function diff_bisect_(text1, text2) {
  // Cache the text lengths to prevent multiple calls.
  var text1_length = text1.length;
  var text2_length = text2.length;
  var max_d = Math.ceil((text1_length + text2_length) / 2);
  var v_offset = max_d;
  var v_length = 2 * max_d;
  var v1 = new Array(v_length);
  var v2 = new Array(v_length);
  // Setting all elements to -1 is faster in Chrome & Firefox than mixing
  // integers and undefined.
  for (var x = 0; x < v_length; x++) {
    v1[x] = -1;
    v2[x] = -1;
  }
  v1[v_offset + 1] = 0;
  v2[v_offset + 1] = 0;
  var delta = text1_length - text2_length;
  // If the total number of characters is odd, then the front path will collide
  // with the reverse path.
  var front = (delta % 2 != 0);
  // Offsets for start and end of k loop.
  // Prevents mapping of space beyond the grid.
  var k1start = 0;
  var k1end = 0;
  var k2start = 0;
  var k2end = 0;
  for (var d = 0; d < max_d; d++) {
    // Walk the front path one step.
    for (var k1 = -d + k1start; k1 <= d - k1end; k1 += 2) {
      var k1_offset = v_offset + k1;
      var x1;
      if (k1 == -d || (k1 != d && v1[k1_offset - 1] < v1[k1_offset + 1])) {
        x1 = v1[k1_offset + 1];
      } else {
        x1 = v1[k1_offset - 1] + 1;
      }
      var y1 = x1 - k1;
      while (x1 < text1_length && y1 < text2_length &&
             text1.charAt(x1) == text2.charAt(y1)) {
        x1++;
        y1++;
      }
      v1[k1_offset] = x1;
      if (x1 > text1_length) {
        // Ran off the right of the graph.
        k1end += 2;
      } else if (y1 > text2_length) {
        // Ran off the bottom of the graph.
        k1start += 2;
      } else if (front) {
        var k2_offset = v_offset + delta - k1;
        if (k2_offset >= 0 && k2_offset < v_length && v2[k2_offset] != -1) {
          // Mirror x2 onto top-left coordinate system.
          var x2 = text1_length - v2[k2_offset];
          if (x1 >= x2) {
            // Overlap detected.
            return diff_bisectSplit_(text1, text2, x1, y1);
          }
        }
      }
    }

    // Walk the reverse path one step.
    for (var k2 = -d + k2start; k2 <= d - k2end; k2 += 2) {
      var k2_offset = v_offset + k2;
      var x2;
      if (k2 == -d || (k2 != d && v2[k2_offset - 1] < v2[k2_offset + 1])) {
        x2 = v2[k2_offset + 1];
      } else {
        x2 = v2[k2_offset - 1] + 1;
      }
      var y2 = x2 - k2;
      while (x2 < text1_length && y2 < text2_length &&
             text1.charAt(text1_length - x2 - 1) ==
             text2.charAt(text2_length - y2 - 1)) {
        x2++;
        y2++;
      }
      v2[k2_offset] = x2;
      if (x2 > text1_length) {
        // Ran off the left of the graph.
        k2end += 2;
      } else if (y2 > text2_length) {
        // Ran off the top of the graph.
        k2start += 2;
      } else if (!front) {
        var k1_offset = v_offset + delta - k2;
        if (k1_offset >= 0 && k1_offset < v_length && v1[k1_offset] != -1) {
          var x1 = v1[k1_offset];
          var y1 = v_offset + x1 - k1_offset;
          // Mirror x2 onto top-left coordinate system.
          x2 = text1_length - x2;
          if (x1 >= x2) {
            // Overlap detected.
            return diff_bisectSplit_(text1, text2, x1, y1);
          }
        }
      }
    }
  }
  // Diff took too long and hit the deadline or
  // number of diffs equals number of characters, no commonality at all.
  return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
};


/**
 * Given the location of the 'middle snake', split the diff in two parts
 * and recurse.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @param {number} x Index of split point in text1.
 * @param {number} y Index of split point in text2.
 * @return {Array} Array of diff tuples.
 */
function diff_bisectSplit_(text1, text2, x, y) {
  var text1a = text1.substring(0, x);
  var text2a = text2.substring(0, y);
  var text1b = text1.substring(x);
  var text2b = text2.substring(y);

  // Compute both diffs serially.
  var diffs = diff_main(text1a, text2a);
  var diffsb = diff_main(text1b, text2b);

  return diffs.concat(diffsb);
};


/**
 * Determine the common prefix of two strings.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {number} The number of characters common to the start of each
 *     string.
 */
function diff_commonPrefix(text1, text2) {
  // Quick check for common null cases.
  if (!text1 || !text2 || text1.charAt(0) != text2.charAt(0)) {
    return 0;
  }
  // Binary search.
  // Performance analysis: http://neil.fraser.name/news/2007/10/09/
  var pointermin = 0;
  var pointermax = Math.min(text1.length, text2.length);
  var pointermid = pointermax;
  var pointerstart = 0;
  while (pointermin < pointermid) {
    if (text1.substring(pointerstart, pointermid) ==
        text2.substring(pointerstart, pointermid)) {
      pointermin = pointermid;
      pointerstart = pointermin;
    } else {
      pointermax = pointermid;
    }
    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
  }
  return pointermid;
};


/**
 * Determine the common suffix of two strings.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {number} The number of characters common to the end of each string.
 */
function diff_commonSuffix(text1, text2) {
  // Quick check for common null cases.
  if (!text1 || !text2 ||
      text1.charAt(text1.length - 1) != text2.charAt(text2.length - 1)) {
    return 0;
  }
  // Binary search.
  // Performance analysis: http://neil.fraser.name/news/2007/10/09/
  var pointermin = 0;
  var pointermax = Math.min(text1.length, text2.length);
  var pointermid = pointermax;
  var pointerend = 0;
  while (pointermin < pointermid) {
    if (text1.substring(text1.length - pointermid, text1.length - pointerend) ==
        text2.substring(text2.length - pointermid, text2.length - pointerend)) {
      pointermin = pointermid;
      pointerend = pointermin;
    } else {
      pointermax = pointermid;
    }
    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
  }
  return pointermid;
};


/**
 * Do the two texts share a substring which is at least half the length of the
 * longer text?
 * This speedup can produce non-minimal diffs.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {Array.<string>} Five element Array, containing the prefix of
 *     text1, the suffix of text1, the prefix of text2, the suffix of
 *     text2 and the common middle.  Or null if there was no match.
 */
function diff_halfMatch_(text1, text2) {
  var longtext = text1.length > text2.length ? text1 : text2;
  var shorttext = text1.length > text2.length ? text2 : text1;
  if (longtext.length < 4 || shorttext.length * 2 < longtext.length) {
    return null;  // Pointless.
  }

  /**
   * Does a substring of shorttext exist within longtext such that the substring
   * is at least half the length of longtext?
   * Closure, but does not reference any external variables.
   * @param {string} longtext Longer string.
   * @param {string} shorttext Shorter string.
   * @param {number} i Start index of quarter length substring within longtext.
   * @return {Array.<string>} Five element Array, containing the prefix of
   *     longtext, the suffix of longtext, the prefix of shorttext, the suffix
   *     of shorttext and the common middle.  Or null if there was no match.
   * @private
   */
  function diff_halfMatchI_(longtext, shorttext, i) {
    // Start with a 1/4 length substring at position i as a seed.
    var seed = longtext.substring(i, i + Math.floor(longtext.length / 4));
    var j = -1;
    var best_common = '';
    var best_longtext_a, best_longtext_b, best_shorttext_a, best_shorttext_b;
    while ((j = shorttext.indexOf(seed, j + 1)) != -1) {
      var prefixLength = diff_commonPrefix(longtext.substring(i),
                                           shorttext.substring(j));
      var suffixLength = diff_commonSuffix(longtext.substring(0, i),
                                           shorttext.substring(0, j));
      if (best_common.length < suffixLength + prefixLength) {
        best_common = shorttext.substring(j - suffixLength, j) +
            shorttext.substring(j, j + prefixLength);
        best_longtext_a = longtext.substring(0, i - suffixLength);
        best_longtext_b = longtext.substring(i + prefixLength);
        best_shorttext_a = shorttext.substring(0, j - suffixLength);
        best_shorttext_b = shorttext.substring(j + prefixLength);
      }
    }
    if (best_common.length * 2 >= longtext.length) {
      return [best_longtext_a, best_longtext_b,
              best_shorttext_a, best_shorttext_b, best_common];
    } else {
      return null;
    }
  }

  // First check if the second quarter is the seed for a half-match.
  var hm1 = diff_halfMatchI_(longtext, shorttext,
                             Math.ceil(longtext.length / 4));
  // Check again based on the third quarter.
  var hm2 = diff_halfMatchI_(longtext, shorttext,
                             Math.ceil(longtext.length / 2));
  var hm;
  if (!hm1 && !hm2) {
    return null;
  } else if (!hm2) {
    hm = hm1;
  } else if (!hm1) {
    hm = hm2;
  } else {
    // Both matched.  Select the longest.
    hm = hm1[4].length > hm2[4].length ? hm1 : hm2;
  }

  // A half-match was found, sort out the return data.
  var text1_a, text1_b, text2_a, text2_b;
  if (text1.length > text2.length) {
    text1_a = hm[0];
    text1_b = hm[1];
    text2_a = hm[2];
    text2_b = hm[3];
  } else {
    text2_a = hm[0];
    text2_b = hm[1];
    text1_a = hm[2];
    text1_b = hm[3];
  }
  var mid_common = hm[4];
  return [text1_a, text1_b, text2_a, text2_b, mid_common];
};


/**
 * Reorder and merge like edit sections.  Merge equalities.
 * Any edit section can move as long as it doesn't cross an equality.
 * @param {Array} diffs Array of diff tuples.
 */
function diff_cleanupMerge(diffs) {
  diffs.push([DIFF_EQUAL, '']);  // Add a dummy entry at the end.
  var pointer = 0;
  var count_delete = 0;
  var count_insert = 0;
  var text_delete = '';
  var text_insert = '';
  var commonlength;
  while (pointer < diffs.length) {
    switch (diffs[pointer][0]) {
      case DIFF_INSERT:
        count_insert++;
        text_insert += diffs[pointer][1];
        pointer++;
        break;
      case DIFF_DELETE:
        count_delete++;
        text_delete += diffs[pointer][1];
        pointer++;
        break;
      case DIFF_EQUAL:
        // Upon reaching an equality, check for prior redundancies.
        if (count_delete + count_insert > 1) {
          if (count_delete !== 0 && count_insert !== 0) {
            // Factor out any common prefixies.
            commonlength = diff_commonPrefix(text_insert, text_delete);
            if (commonlength !== 0) {
              if ((pointer - count_delete - count_insert) > 0 &&
                  diffs[pointer - count_delete - count_insert - 1][0] ==
                  DIFF_EQUAL) {
                diffs[pointer - count_delete - count_insert - 1][1] +=
                    text_insert.substring(0, commonlength);
              } else {
                diffs.splice(0, 0, [DIFF_EQUAL,
                                    text_insert.substring(0, commonlength)]);
                pointer++;
              }
              text_insert = text_insert.substring(commonlength);
              text_delete = text_delete.substring(commonlength);
            }
            // Factor out any common suffixies.
            commonlength = diff_commonSuffix(text_insert, text_delete);
            if (commonlength !== 0) {
              diffs[pointer][1] = text_insert.substring(text_insert.length -
                  commonlength) + diffs[pointer][1];
              text_insert = text_insert.substring(0, text_insert.length -
                  commonlength);
              text_delete = text_delete.substring(0, text_delete.length -
                  commonlength);
            }
          }
          // Delete the offending records and add the merged ones.
          if (count_delete === 0) {
            diffs.splice(pointer - count_insert,
                count_delete + count_insert, [DIFF_INSERT, text_insert]);
          } else if (count_insert === 0) {
            diffs.splice(pointer - count_delete,
                count_delete + count_insert, [DIFF_DELETE, text_delete]);
          } else {
            diffs.splice(pointer - count_delete - count_insert,
                count_delete + count_insert, [DIFF_DELETE, text_delete],
                [DIFF_INSERT, text_insert]);
          }
          pointer = pointer - count_delete - count_insert +
                    (count_delete ? 1 : 0) + (count_insert ? 1 : 0) + 1;
        } else if (pointer !== 0 && diffs[pointer - 1][0] == DIFF_EQUAL) {
          // Merge this equality with the previous one.
          diffs[pointer - 1][1] += diffs[pointer][1];
          diffs.splice(pointer, 1);
        } else {
          pointer++;
        }
        count_insert = 0;
        count_delete = 0;
        text_delete = '';
        text_insert = '';
        break;
    }
  }
  if (diffs[diffs.length - 1][1] === '') {
    diffs.pop();  // Remove the dummy entry at the end.
  }

  // Second pass: look for single edits surrounded on both sides by equalities
  // which can be shifted sideways to eliminate an equality.
  // e.g: A<ins>BA</ins>C -> <ins>AB</ins>AC
  var changes = false;
  pointer = 1;
  // Intentionally ignore the first and last element (don't need checking).
  while (pointer < diffs.length - 1) {
    if (diffs[pointer - 1][0] == DIFF_EQUAL &&
        diffs[pointer + 1][0] == DIFF_EQUAL) {
      // This is a single edit surrounded by equalities.
      if (diffs[pointer][1].substring(diffs[pointer][1].length -
          diffs[pointer - 1][1].length) == diffs[pointer - 1][1]) {
        // Shift the edit over the previous equality.
        diffs[pointer][1] = diffs[pointer - 1][1] +
            diffs[pointer][1].substring(0, diffs[pointer][1].length -
                                        diffs[pointer - 1][1].length);
        diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
        diffs.splice(pointer - 1, 1);
        changes = true;
      } else if (diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) ==
          diffs[pointer + 1][1]) {
        // Shift the edit over the next equality.
        diffs[pointer - 1][1] += diffs[pointer + 1][1];
        diffs[pointer][1] =
            diffs[pointer][1].substring(diffs[pointer + 1][1].length) +
            diffs[pointer + 1][1];
        diffs.splice(pointer + 1, 1);
        changes = true;
      }
    }
    pointer++;
  }
  // If shifts were made, the diff needs reordering and another shift sweep.
  if (changes) {
    diff_cleanupMerge(diffs);
  }
};


var diff = diff_main;
diff.INSERT = DIFF_INSERT;
diff.DELETE = DIFF_DELETE;
diff.EQUAL = DIFF_EQUAL;

module.exports = diff;

/*
 * Modify a diff such that the cursor position points to the start of a change:
 * E.g.
 *   cursor_normalize_diff([[DIFF_EQUAL, 'abc']], 1)
 *     => [1, [[DIFF_EQUAL, 'a'], [DIFF_EQUAL, 'bc']]]
 *   cursor_normalize_diff([[DIFF_INSERT, 'new'], [DIFF_DELETE, 'xyz']], 2)
 *     => [2, [[DIFF_INSERT, 'new'], [DIFF_DELETE, 'xy'], [DIFF_DELETE, 'z']]]
 *
 * @param {Array} diffs Array of diff tuples
 * @param {Int} cursor_pos Suggested edit position. Must not be out of bounds!
 * @return {Array} A tuple [cursor location in the modified diff, modified diff]
 */
function cursor_normalize_diff (diffs, cursor_pos) {
  if (cursor_pos === 0) {
    return [DIFF_EQUAL, diffs];
  }
  for (var current_pos = 0, i = 0; i < diffs.length; i++) {
    var d = diffs[i];
    if (d[0] === DIFF_DELETE || d[0] === DIFF_EQUAL) {
      var next_pos = current_pos + d[1].length;
      if (cursor_pos === next_pos) {
        return [i + 1, diffs];
      } else if (cursor_pos < next_pos) {
        // copy to prevent side effects
        diffs = diffs.slice();
        // split d into two diff changes
        var split_pos = cursor_pos - current_pos;
        var d_left = [d[0], d[1].slice(0, split_pos)];
        var d_right = [d[0], d[1].slice(split_pos)];
        diffs.splice(i, 1, d_left, d_right);
        return [i + 1, diffs];
      } else {
        current_pos = next_pos;
      }
    }
  }
  throw new Error('cursor_pos is out of bounds!')
}

/*
 * Modify a diff such that the edit position is "shifted" to the proposed edit location (cursor_position).
 *
 * Case 1)
 *   Check if a naive shift is possible:
 *     [0, X], [ 1, Y] -> [ 1, Y], [0, X]    (if X + Y === Y + X)
 *     [0, X], [-1, Y] -> [-1, Y], [0, X]    (if X + Y === Y + X) - holds same result
 * Case 2)
 *   Check if the following shifts are possible:
 *     [0, 'pre'], [ 1, 'prefix'] -> [ 1, 'pre'], [0, 'pre'], [ 1, 'fix']
 *     [0, 'pre'], [-1, 'prefix'] -> [-1, 'pre'], [0, 'pre'], [-1, 'fix']
 *         ^            ^
 *         d          d_next
 *
 * @param {Array} diffs Array of diff tuples
 * @param {Int} cursor_pos Suggested edit position. Must not be out of bounds!
 * @return {Array} Array of diff tuples
 */
function fix_cursor (diffs, cursor_pos) {
  var norm = cursor_normalize_diff(diffs, cursor_pos);
  var ndiffs = norm[1];
  var cursor_pointer = norm[0];
  var d = ndiffs[cursor_pointer];
  var d_next = ndiffs[cursor_pointer + 1];

  if (d == null) {
    // Text was deleted from end of original string,
    // cursor is now out of bounds in new string
    return diffs;
  } else if (d[0] !== DIFF_EQUAL) {
    // A modification happened at the cursor location.
    // This is the expected outcome, so we can return the original diff.
    return diffs;
  } else {
    if (d_next != null && d[1] + d_next[1] === d_next[1] + d[1]) {
      // Case 1)
      // It is possible to perform a naive shift
      ndiffs.splice(cursor_pointer, 2, d_next, d)
      return merge_tuples(ndiffs, cursor_pointer, 2)
    } else if (d_next != null && d_next[1].indexOf(d[1]) === 0) {
      // Case 2)
      // d[1] is a prefix of d_next[1]
      // We can assume that d_next[0] !== 0, since d[0] === 0
      // Shift edit locations..
      ndiffs.splice(cursor_pointer, 2, [d_next[0], d[1]], [0, d[1]]);
      var suffix = d_next[1].slice(d[1].length);
      if (suffix.length > 0) {
        ndiffs.splice(cursor_pointer + 2, 0, [d_next[0], suffix]);
      }
      return merge_tuples(ndiffs, cursor_pointer, 3)
    } else {
      // Not possible to perform any modification
      return diffs;
    }
  }
}

/*
 * Check diff did not split surrogate pairs.
 * Ex. [0, '\uD83D'], [-1, '\uDC36'], [1, '\uDC2F'] -> [-1, '\uD83D\uDC36'], [1, '\uD83D\uDC2F']
 *     '\uD83D\uDC36' === '🐶', '\uD83D\uDC2F' === '🐯'
 *
 * @param {Array} diffs Array of diff tuples
 * @return {Array} Array of diff tuples
 */
function fix_emoji (diffs) {
  var compact = false;
  var starts_with_pair_end = function(str) {
    return str.charCodeAt(0) >= 0xDC00 && str.charCodeAt(0) <= 0xDFFF;
  }
  var ends_with_pair_start = function(str) {
    return str.charCodeAt(str.length-1) >= 0xD800 && str.charCodeAt(str.length-1) <= 0xDBFF;
  }
  for (var i = 2; i < diffs.length; i += 1) {
    if (diffs[i-2][0] === DIFF_EQUAL && ends_with_pair_start(diffs[i-2][1]) &&
        diffs[i-1][0] === DIFF_DELETE && starts_with_pair_end(diffs[i-1][1]) &&
        diffs[i][0] === DIFF_INSERT && starts_with_pair_end(diffs[i][1])) {
      compact = true;

      diffs[i-1][1] = diffs[i-2][1].slice(-1) + diffs[i-1][1];
      diffs[i][1] = diffs[i-2][1].slice(-1) + diffs[i][1];

      diffs[i-2][1] = diffs[i-2][1].slice(0, -1);
    }
  }
  if (!compact) {
    return diffs;
  }
  var fixed_diffs = [];
  for (var i = 0; i < diffs.length; i += 1) {
    if (diffs[i][1].length > 0) {
      fixed_diffs.push(diffs[i]);
    }
  }
  return fixed_diffs;
}

/*
 * Try to merge tuples with their neigbors in a given range.
 * E.g. [0, 'a'], [0, 'b'] -> [0, 'ab']
 *
 * @param {Array} diffs Array of diff tuples.
 * @param {Int} start Position of the first element to merge (diffs[start] is also merged with diffs[start - 1]).
 * @param {Int} length Number of consecutive elements to check.
 * @return {Array} Array of merged diff tuples.
 */
function merge_tuples (diffs, start, length) {
  // Check from (start-1) to (start+length).
  for (var i = start + length - 1; i >= 0 && i >= start - 1; i--) {
    if (i + 1 < diffs.length) {
      var left_d = diffs[i];
      var right_d = diffs[i+1];
      if (left_d[0] === right_d[1]) {
        diffs.splice(i, 2, [left_d[0], left_d[1] + right_d[1]]);
      }
    }
  }
  return diffs;
}


/***/ }),
/* 52 */
/***/ (function(module, exports) {

exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}


/***/ }),
/* 53 */
/***/ (function(module, exports) {

var supportsArgumentsClass = (function(){
  return Object.prototype.toString.call(arguments)
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
};

exports.unsupported = unsupported;
function unsupported(object){
  return object &&
    typeof object == 'object' &&
    typeof object.length == 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'callee') &&
    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
    false;
};


/***/ }),
/* 54 */
/***/ (function(module, exports) {

'use strict';

var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @api private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {Mixed} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @api private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @api public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @api public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Boolean} exists Only check if there are listeners.
 * @returns {Array|Boolean}
 * @api public
 */
EventEmitter.prototype.listeners = function listeners(event, exists) {
  var evt = prefix ? prefix + event : event
    , available = this._events[evt];

  if (exists) return !!available;
  if (!available) return [];
  if (available.fn) return [available.fn];

  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
    ee[i] = available[i].fn;
  }

  return ee;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @api public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn The listener function.
 * @param {Mixed} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  var listener = new EE(fn, context || this)
    , evt = prefix ? prefix + event : event;

  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
  else if (!this._events[evt].fn) this._events[evt].push(listener);
  else this._events[evt] = [this._events[evt], listener];

  return this;
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn The listener function.
 * @param {Mixed} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  var listener = new EE(fn, context || this, true)
    , evt = prefix ? prefix + event : event;

  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
  else if (!this._events[evt].fn) this._events[evt].push(listener);
  else this._events[evt] = [this._events[evt], listener];

  return this;
};

/**
 * Remove the listeners of a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {Mixed} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    if (--this._eventsCount === 0) this._events = new Events();
    else delete this._events[evt];
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
         listeners.fn === fn
      && (!once || listeners.once)
      && (!context || listeners.context === context)
    ) {
      if (--this._eventsCount === 0) this._events = new Events();
      else delete this._events[evt];
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
           listeners[i].fn !== fn
        || (once && !listeners[i].once)
        || (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else if (--this._eventsCount === 0) this._events = new Events();
    else delete this._events[evt];
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {String|Symbol} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) {
      if (--this._eventsCount === 0) this._events = new Events();
      else delete this._events[evt];
    }
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// This function doesn't apply anymore.
//
EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
  return this;
};

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
  module.exports = EventEmitter;
}


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matchText = exports.matchSpacing = exports.matchNewline = exports.matchBlot = exports.matchAttributor = exports.default = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extend2 = __webpack_require__(3);

var _extend3 = _interopRequireDefault(_extend2);

var _quillDelta = __webpack_require__(2);

var _quillDelta2 = _interopRequireDefault(_quillDelta);

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _quill = __webpack_require__(5);

var _quill2 = _interopRequireDefault(_quill);

var _logger = __webpack_require__(10);

var _logger2 = _interopRequireDefault(_logger);

var _module = __webpack_require__(9);

var _module2 = _interopRequireDefault(_module);

var _align = __webpack_require__(36);

var _background = __webpack_require__(37);

var _code = __webpack_require__(13);

var _code2 = _interopRequireDefault(_code);

var _color = __webpack_require__(26);

var _direction = __webpack_require__(38);

var _font = __webpack_require__(39);

var _size = __webpack_require__(40);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var debug = (0, _logger2.default)('quill:clipboard');

var DOM_KEY = '__ql-matcher';

var CLIPBOARD_CONFIG = [[Node.TEXT_NODE, matchText], [Node.TEXT_NODE, matchNewline], ['br', matchBreak], [Node.ELEMENT_NODE, matchNewline], [Node.ELEMENT_NODE, matchBlot], [Node.ELEMENT_NODE, matchSpacing], [Node.ELEMENT_NODE, matchAttributor], [Node.ELEMENT_NODE, matchStyles], ['li', matchIndent], ['b', matchAlias.bind(matchAlias, 'bold')], ['i', matchAlias.bind(matchAlias, 'italic')], ['style', matchIgnore]];

var ATTRIBUTE_ATTRIBUTORS = [_align.AlignAttribute, _direction.DirectionAttribute].reduce(function (memo, attr) {
  memo[attr.keyName] = attr;
  return memo;
}, {});

var STYLE_ATTRIBUTORS = [_align.AlignStyle, _background.BackgroundStyle, _color.ColorStyle, _direction.DirectionStyle, _font.FontStyle, _size.SizeStyle].reduce(function (memo, attr) {
  memo[attr.keyName] = attr;
  return memo;
}, {});

var Clipboard = function (_Module) {
  _inherits(Clipboard, _Module);

  function Clipboard(quill, options) {
    _classCallCheck(this, Clipboard);

    var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this, quill, options));

    _this.quill.root.addEventListener('paste', _this.onPaste.bind(_this));
    _this.container = _this.quill.addContainer('ql-clipboard');
    _this.container.setAttribute('contenteditable', true);
    _this.container.setAttribute('tabindex', -1);
    _this.matchers = [];
    CLIPBOARD_CONFIG.concat(_this.options.matchers).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          selector = _ref2[0],
          matcher = _ref2[1];

      if (!options.matchVisual && matcher === matchSpacing) return;
      _this.addMatcher(selector, matcher);
    });
    return _this;
  }

  _createClass(Clipboard, [{
    key: 'addMatcher',
    value: function addMatcher(selector, matcher) {
      this.matchers.push([selector, matcher]);
    }
  }, {
    key: 'convert',
    value: function convert(html) {
      if (typeof html === 'string') {
        this.container.innerHTML = html.replace(/\>\r?\n +\</g, '><'); // Remove spaces between tags
        return this.convert();
      }
      var formats = this.quill.getFormat(this.quill.selection.savedRange.index);
      if (formats[_code2.default.blotName]) {
        var text = this.container.innerText;
        this.container.innerHTML = '';
        return new _quillDelta2.default().insert(text, _defineProperty({}, _code2.default.blotName, formats[_code2.default.blotName]));
      }

      var _prepareMatching = this.prepareMatching(),
          _prepareMatching2 = _slicedToArray(_prepareMatching, 2),
          elementMatchers = _prepareMatching2[0],
          textMatchers = _prepareMatching2[1];

      var delta = traverse(this.container, elementMatchers, textMatchers);
      // Remove trailing newline
      if (deltaEndsWith(delta, '\n') && delta.ops[delta.ops.length - 1].attributes == null) {
        delta = delta.compose(new _quillDelta2.default().retain(delta.length() - 1).delete(1));
      }
      debug.log('convert', this.container.innerHTML, delta);
      this.container.innerHTML = '';
      return delta;
    }
  }, {
    key: 'dangerouslyPasteHTML',
    value: function dangerouslyPasteHTML(index, html) {
      var source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _quill2.default.sources.API;

      if (typeof index === 'string') {
        this.quill.setContents(this.convert(index), html);
        this.quill.setSelection(0, _quill2.default.sources.SILENT);
      } else {
        var paste = this.convert(html);
        this.quill.updateContents(new _quillDelta2.default().retain(index).concat(paste), source);
        this.quill.setSelection(index + paste.length(), _quill2.default.sources.SILENT);
      }
    }
  }, {
    key: 'onPaste',
    value: function onPaste(e) {
      var _this2 = this;

      if (e.defaultPrevented || !this.quill.isEnabled()) return;
      var range = this.quill.getSelection();
      var delta = new _quillDelta2.default().retain(range.index);
      var scrollTop = this.quill.scrollingContainer.scrollTop;
      this.container.focus();
      this.quill.selection.update(_quill2.default.sources.SILENT);
      setTimeout(function () {
        delta = delta.concat(_this2.convert()).delete(range.length);
        _this2.quill.updateContents(delta, _quill2.default.sources.USER);
        // range.length contributes to delta.length()
        _this2.quill.setSelection(delta.length() - range.length, _quill2.default.sources.SILENT);
        _this2.quill.scrollingContainer.scrollTop = scrollTop;
        _this2.quill.focus();
      }, 1);
    }
  }, {
    key: 'prepareMatching',
    value: function prepareMatching() {
      var _this3 = this;

      var elementMatchers = [],
          textMatchers = [];
      this.matchers.forEach(function (pair) {
        var _pair = _slicedToArray(pair, 2),
            selector = _pair[0],
            matcher = _pair[1];

        switch (selector) {
          case Node.TEXT_NODE:
            textMatchers.push(matcher);
            break;
          case Node.ELEMENT_NODE:
            elementMatchers.push(matcher);
            break;
          default:
            [].forEach.call(_this3.container.querySelectorAll(selector), function (node) {
              // TODO use weakmap
              node[DOM_KEY] = node[DOM_KEY] || [];
              node[DOM_KEY].push(matcher);
            });
            break;
        }
      });
      return [elementMatchers, textMatchers];
    }
  }]);

  return Clipboard;
}(_module2.default);

Clipboard.DEFAULTS = {
  matchers: [],
  matchVisual: true
};

function applyFormat(delta, format, value) {
  if ((typeof format === 'undefined' ? 'undefined' : _typeof(format)) === 'object') {
    return Object.keys(format).reduce(function (delta, key) {
      return applyFormat(delta, key, format[key]);
    }, delta);
  } else {
    return delta.reduce(function (delta, op) {
      if (op.attributes && op.attributes[format]) {
        return delta.push(op);
      } else {
        return delta.insert(op.insert, (0, _extend3.default)({}, _defineProperty({}, format, value), op.attributes));
      }
    }, new _quillDelta2.default());
  }
}

function computeStyle(node) {
  if (node.nodeType !== Node.ELEMENT_NODE) return {};
  var DOM_KEY = '__ql-computed-style';
  return node[DOM_KEY] || (node[DOM_KEY] = window.getComputedStyle(node));
}

function deltaEndsWith(delta, text) {
  var endText = "";
  for (var i = delta.ops.length - 1; i >= 0 && endText.length < text.length; --i) {
    var op = delta.ops[i];
    if (typeof op.insert !== 'string') break;
    endText = op.insert + endText;
  }
  return endText.slice(-1 * text.length) === text;
}

function isLine(node) {
  if (node.childNodes.length === 0) return false; // Exclude embed blocks
  var style = computeStyle(node);
  return ['block', 'list-item'].indexOf(style.display) > -1;
}

function traverse(node, elementMatchers, textMatchers) {
  // Post-order
  if (node.nodeType === node.TEXT_NODE) {
    return textMatchers.reduce(function (delta, matcher) {
      return matcher(node, delta);
    }, new _quillDelta2.default());
  } else if (node.nodeType === node.ELEMENT_NODE) {
    return [].reduce.call(node.childNodes || [], function (delta, childNode) {
      var childrenDelta = traverse(childNode, elementMatchers, textMatchers);
      if (childNode.nodeType === node.ELEMENT_NODE) {
        childrenDelta = elementMatchers.reduce(function (childrenDelta, matcher) {
          return matcher(childNode, childrenDelta);
        }, childrenDelta);
        childrenDelta = (childNode[DOM_KEY] || []).reduce(function (childrenDelta, matcher) {
          return matcher(childNode, childrenDelta);
        }, childrenDelta);
      }
      return delta.concat(childrenDelta);
    }, new _quillDelta2.default());
  } else {
    return new _quillDelta2.default();
  }
}

function matchAlias(format, node, delta) {
  return applyFormat(delta, format, true);
}

function matchAttributor(node, delta) {
  var attributes = _parchment2.default.Attributor.Attribute.keys(node);
  var classes = _parchment2.default.Attributor.Class.keys(node);
  var styles = _parchment2.default.Attributor.Style.keys(node);
  var formats = {};
  attributes.concat(classes).concat(styles).forEach(function (name) {
    var attr = _parchment2.default.query(name, _parchment2.default.Scope.ATTRIBUTE);
    if (attr != null) {
      formats[attr.attrName] = attr.value(node);
      if (formats[attr.attrName]) return;
    }
    attr = ATTRIBUTE_ATTRIBUTORS[name];
    if (attr != null && (attr.attrName === name || attr.keyName === name)) {
      formats[attr.attrName] = attr.value(node) || undefined;
    }
    attr = STYLE_ATTRIBUTORS[name];
    if (attr != null && (attr.attrName === name || attr.keyName === name)) {
      attr = STYLE_ATTRIBUTORS[name];
      formats[attr.attrName] = attr.value(node) || undefined;
    }
  });
  if (Object.keys(formats).length > 0) {
    delta = applyFormat(delta, formats);
  }
  return delta;
}

function matchBlot(node, delta) {
  var match = _parchment2.default.query(node);
  if (match == null) return delta;
  if (match.prototype instanceof _parchment2.default.Embed) {
    var embed = {};
    var value = match.value(node);
    if (value != null) {
      embed[match.blotName] = value;
      delta = new _quillDelta2.default().insert(embed, match.formats(node));
    }
  } else if (typeof match.formats === 'function') {
    delta = applyFormat(delta, match.blotName, match.formats(node));
  }
  return delta;
}

function matchBreak(node, delta) {
  if (!deltaEndsWith(delta, '\n')) {
    delta.insert('\n');
  }
  return delta;
}

function matchIgnore() {
  return new _quillDelta2.default();
}

function matchIndent(node, delta) {
  var match = _parchment2.default.query(node);
  if (match == null || match.blotName !== 'list-item' || !deltaEndsWith(delta, '\n')) {
    return delta;
  }
  var indent = -1,
      parent = node.parentNode;
  while (!parent.classList.contains('ql-clipboard')) {
    if ((_parchment2.default.query(parent) || {}).blotName === 'list') {
      indent += 1;
    }
    parent = parent.parentNode;
  }
  if (indent <= 0) return delta;
  return delta.compose(new _quillDelta2.default().retain(delta.length() - 1).retain(1, { indent: indent }));
}

function matchNewline(node, delta) {
  if (!deltaEndsWith(delta, '\n')) {
    if (isLine(node) || delta.length() > 0 && node.nextSibling && isLine(node.nextSibling)) {
      delta.insert('\n');
    }
  }
  return delta;
}

function matchSpacing(node, delta) {
  if (isLine(node) && node.nextElementSibling != null && !deltaEndsWith(delta, '\n\n')) {
    var nodeHeight = node.offsetHeight + parseFloat(computeStyle(node).marginTop) + parseFloat(computeStyle(node).marginBottom);
    if (node.nextElementSibling.offsetTop > node.offsetTop + nodeHeight * 1.5) {
      delta.insert('\n');
    }
  }
  return delta;
}

function matchStyles(node, delta) {
  var formats = {};
  var style = node.style || {};
  if (style.fontStyle && computeStyle(node).fontStyle === 'italic') {
    formats.italic = true;
  }
  if (style.fontWeight && (computeStyle(node).fontWeight.startsWith('bold') || parseInt(computeStyle(node).fontWeight) >= 700)) {
    formats.bold = true;
  }
  if (Object.keys(formats).length > 0) {
    delta = applyFormat(delta, formats);
  }
  if (parseFloat(style.textIndent || 0) > 0) {
    // Could be 0.5in
    delta = new _quillDelta2.default().insert('\t').concat(delta);
  }
  return delta;
}

function matchText(node, delta) {
  var text = node.data;
  // Word represents empty line with <o:p>&nbsp;</o:p>
  if (node.parentNode.tagName === 'O:P') {
    return delta.insert(text.trim());
  }
  if (text.trim().length === 0 && node.parentNode.classList.contains('ql-clipboard')) {
    return delta;
  }
  if (!computeStyle(node.parentNode).whiteSpace.startsWith('pre')) {
    // eslint-disable-next-line func-style
    var replacer = function replacer(collapse, match) {
      match = match.replace(/[^\u00a0]/g, ''); // \u00a0 is nbsp;
      return match.length < 1 && collapse ? ' ' : match;
    };
    text = text.replace(/\r\n/g, ' ').replace(/\n/g, ' ');
    text = text.replace(/\s\s+/g, replacer.bind(replacer, true)); // collapse whitespace
    if (node.previousSibling == null && isLine(node.parentNode) || node.previousSibling != null && isLine(node.previousSibling)) {
      text = text.replace(/^\s+/, replacer.bind(replacer, false));
    }
    if (node.nextSibling == null && isLine(node.parentNode) || node.nextSibling != null && isLine(node.nextSibling)) {
      text = text.replace(/\s+$/, replacer.bind(replacer, false));
    }
  }
  return delta.insert(text);
}

exports.default = Clipboard;
exports.matchAttributor = matchAttributor;
exports.matchBlot = matchBlot;
exports.matchNewline = matchNewline;
exports.matchSpacing = matchSpacing;
exports.matchText = matchText;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inline = __webpack_require__(6);

var _inline2 = _interopRequireDefault(_inline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bold = function (_Inline) {
  _inherits(Bold, _Inline);

  function Bold() {
    _classCallCheck(this, Bold);

    return _possibleConstructorReturn(this, (Bold.__proto__ || Object.getPrototypeOf(Bold)).apply(this, arguments));
  }

  _createClass(Bold, [{
    key: 'optimize',
    value: function optimize(context) {
      _get(Bold.prototype.__proto__ || Object.getPrototypeOf(Bold.prototype), 'optimize', this).call(this, context);
      if (this.domNode.tagName !== this.statics.tagName[0]) {
        this.replaceWith(this.statics.blotName);
      }
    }
  }], [{
    key: 'create',
    value: function create() {
      return _get(Bold.__proto__ || Object.getPrototypeOf(Bold), 'create', this).call(this);
    }
  }, {
    key: 'formats',
    value: function formats() {
      return true;
    }
  }]);

  return Bold;
}(_inline2.default);

Bold.blotName = 'bold';
Bold.tagName = ['STRONG', 'B'];

exports.default = Bold;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addControls = exports.default = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _quillDelta = __webpack_require__(2);

var _quillDelta2 = _interopRequireDefault(_quillDelta);

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _quill = __webpack_require__(5);

var _quill2 = _interopRequireDefault(_quill);

var _logger = __webpack_require__(10);

var _logger2 = _interopRequireDefault(_logger);

var _module = __webpack_require__(9);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var debug = (0, _logger2.default)('quill:toolbar');

var Toolbar = function (_Module) {
  _inherits(Toolbar, _Module);

  function Toolbar(quill, options) {
    _classCallCheck(this, Toolbar);

    var _this = _possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).call(this, quill, options));

    if (Array.isArray(_this.options.container)) {
      var container = document.createElement('div');
      addControls(container, _this.options.container);
      quill.container.parentNode.insertBefore(container, quill.container);
      _this.container = container;
    } else if (typeof _this.options.container === 'string') {
      _this.container = document.querySelector(_this.options.container);
    } else {
      _this.container = _this.options.container;
    }
    if (!(_this.container instanceof HTMLElement)) {
      var _ret;

      return _ret = debug.error('Container required for toolbar', _this.options), _possibleConstructorReturn(_this, _ret);
    }
    _this.container.classList.add('ql-toolbar');
    _this.controls = [];
    _this.handlers = {};
    Object.keys(_this.options.handlers).forEach(function (format) {
      _this.addHandler(format, _this.options.handlers[format]);
    });
    [].forEach.call(_this.container.querySelectorAll('button, select'), function (input) {
      _this.attach(input);
    });
    _this.quill.on(_quill2.default.events.EDITOR_CHANGE, function (type, range) {
      if (type === _quill2.default.events.SELECTION_CHANGE) {
        _this.update(range);
      }
    });
    _this.quill.on(_quill2.default.events.SCROLL_OPTIMIZE, function () {
      var _this$quill$selection = _this.quill.selection.getRange(),
          _this$quill$selection2 = _slicedToArray(_this$quill$selection, 1),
          range = _this$quill$selection2[0]; // quill.getSelection triggers update


      _this.update(range);
    });
    return _this;
  }

  _createClass(Toolbar, [{
    key: 'addHandler',
    value: function addHandler(format, handler) {
      this.handlers[format] = handler;
    }
  }, {
    key: 'attach',
    value: function attach(input) {
      var _this2 = this;

      var format = [].find.call(input.classList, function (className) {
        return className.indexOf('ql-') === 0;
      });
      if (!format) return;
      format = format.slice('ql-'.length);
      if (input.tagName === 'BUTTON') {
        input.setAttribute('type', 'button');
      }
      if (this.handlers[format] == null) {
        if (this.quill.scroll.whitelist != null && this.quill.scroll.whitelist[format] == null) {
          debug.warn('ignoring attaching to disabled format', format, input);
          return;
        }
        if (_parchment2.default.query(format) == null) {
          debug.warn('ignoring attaching to nonexistent format', format, input);
          return;
        }
      }
      var eventName = input.tagName === 'SELECT' ? 'change' : 'click';
      input.addEventListener(eventName, function (e) {
        var value = void 0;
        if (input.tagName === 'SELECT') {
          if (input.selectedIndex < 0) return;
          var selected = input.options[input.selectedIndex];
          if (selected.hasAttribute('selected')) {
            value = false;
          } else {
            value = selected.value || false;
          }
        } else {
          if (input.classList.contains('ql-active')) {
            value = false;
          } else {
            value = input.value || !input.hasAttribute('value');
          }
          e.preventDefault();
        }
        _this2.quill.focus();

        var _quill$selection$getR = _this2.quill.selection.getRange(),
            _quill$selection$getR2 = _slicedToArray(_quill$selection$getR, 1),
            range = _quill$selection$getR2[0];

        if (_this2.handlers[format] != null) {
          _this2.handlers[format].call(_this2, value);
        } else if (_parchment2.default.query(format).prototype instanceof _parchment2.default.Embed) {
          value = prompt('Enter ' + format);
          if (!value) return;
          _this2.quill.updateContents(new _quillDelta2.default().retain(range.index).delete(range.length).insert(_defineProperty({}, format, value)), _quill2.default.sources.USER);
        } else {
          _this2.quill.format(format, value, _quill2.default.sources.USER);
        }
        _this2.update(range);
      });
      // TODO use weakmap
      this.controls.push([format, input]);
    }
  }, {
    key: 'update',
    value: function update(range) {
      var formats = range == null ? {} : this.quill.getFormat(range);
      this.controls.forEach(function (pair) {
        var _pair = _slicedToArray(pair, 2),
            format = _pair[0],
            input = _pair[1];

        if (input.tagName === 'SELECT') {
          var option = void 0;
          if (range == null) {
            option = null;
          } else if (formats[format] == null) {
            option = input.querySelector('option[selected]');
          } else if (!Array.isArray(formats[format])) {
            var value = formats[format];
            if (typeof value === 'string') {
              value = value.replace(/\"/g, '\\"');
            }
            option = input.querySelector('option[value="' + value + '"]');
          }
          if (option == null) {
            input.value = ''; // TODO make configurable?
            input.selectedIndex = -1;
          } else {
            option.selected = true;
          }
        } else {
          if (range == null) {
            input.classList.remove('ql-active');
          } else if (input.hasAttribute('value')) {
            // both being null should match (default values)
            // '1' should match with 1 (headers)
            var isActive = formats[format] === input.getAttribute('value') || formats[format] != null && formats[format].toString() === input.getAttribute('value') || formats[format] == null && !input.getAttribute('value');
            input.classList.toggle('ql-active', isActive);
          } else {
            input.classList.toggle('ql-active', formats[format] != null);
          }
        }
      });
    }
  }]);

  return Toolbar;
}(_module2.default);

Toolbar.DEFAULTS = {};

function addButton(container, format, value) {
  var input = document.createElement('button');
  input.setAttribute('type', 'button');
  input.classList.add('ql-' + format);
  if (value != null) {
    input.value = value;
  }
  container.appendChild(input);
}

function addControls(container, groups) {
  if (!Array.isArray(groups[0])) {
    groups = [groups];
  }
  groups.forEach(function (controls) {
    var group = document.createElement('span');
    group.classList.add('ql-formats');
    controls.forEach(function (control) {
      if (typeof control === 'string') {
        addButton(group, control);
      } else {
        var format = Object.keys(control)[0];
        var value = control[format];
        if (Array.isArray(value)) {
          addSelect(group, format, value);
        } else {
          addButton(group, format, value);
        }
      }
    });
    container.appendChild(group);
  });
}

function addSelect(container, format, values) {
  var input = document.createElement('select');
  input.classList.add('ql-' + format);
  values.forEach(function (value) {
    var option = document.createElement('option');
    if (value !== false) {
      option.setAttribute('value', value);
    } else {
      option.setAttribute('selected', 'selected');
    }
    input.appendChild(option);
  });
  container.appendChild(input);
}

Toolbar.DEFAULTS = {
  container: null,
  handlers: {
    clean: function clean() {
      var _this3 = this;

      var range = this.quill.getSelection();
      if (range == null) return;
      if (range.length == 0) {
        var formats = this.quill.getFormat();
        Object.keys(formats).forEach(function (name) {
          // Clean functionality in existing apps only clean inline formats
          if (_parchment2.default.query(name, _parchment2.default.Scope.INLINE) != null) {
            _this3.quill.format(name, false);
          }
        });
      } else {
        this.quill.removeFormat(range, _quill2.default.sources.USER);
      }
    },
    direction: function direction(value) {
      var align = this.quill.getFormat()['align'];
      if (value === 'rtl' && align == null) {
        this.quill.format('align', 'right', _quill2.default.sources.USER);
      } else if (!value && align === 'right') {
        this.quill.format('align', false, _quill2.default.sources.USER);
      }
      this.quill.format('direction', value, _quill2.default.sources.USER);
    },
    indent: function indent(value) {
      var range = this.quill.getSelection();
      var formats = this.quill.getFormat(range);
      var indent = parseInt(formats.indent || 0);
      if (value === '+1' || value === '-1') {
        var modifier = value === '+1' ? 1 : -1;
        if (formats.direction === 'rtl') modifier *= -1;
        this.quill.format('indent', indent + modifier, _quill2.default.sources.USER);
      }
    },
    link: function link(value) {
      if (value === true) {
        value = prompt('Enter link URL:');
      }
      this.quill.format('link', value, _quill2.default.sources.USER);
    },
    list: function list(value) {
      var range = this.quill.getSelection();
      var formats = this.quill.getFormat(range);
      if (value === 'check') {
        if (formats['list'] === 'checked' || formats['list'] === 'unchecked') {
          this.quill.format('list', false, _quill2.default.sources.USER);
        } else {
          this.quill.format('list', 'unchecked', _quill2.default.sources.USER);
        }
      } else {
        this.quill.format('list', value, _quill2.default.sources.USER);
      }
    }
  }
};

exports.default = Toolbar;
exports.addControls = addControls;

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <polyline class=\"ql-even ql-stroke\" points=\"5 7 3 9 5 11\"></polyline> <polyline class=\"ql-even ql-stroke\" points=\"13 7 15 9 13 11\"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _picker = __webpack_require__(28);

var _picker2 = _interopRequireDefault(_picker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorPicker = function (_Picker) {
  _inherits(ColorPicker, _Picker);

  function ColorPicker(select, label) {
    _classCallCheck(this, ColorPicker);

    var _this = _possibleConstructorReturn(this, (ColorPicker.__proto__ || Object.getPrototypeOf(ColorPicker)).call(this, select));

    _this.label.innerHTML = label;
    _this.container.classList.add('ql-color-picker');
    [].slice.call(_this.container.querySelectorAll('.ql-picker-item'), 0, 7).forEach(function (item) {
      item.classList.add('ql-primary');
    });
    return _this;
  }

  _createClass(ColorPicker, [{
    key: 'buildItem',
    value: function buildItem(option) {
      var item = _get(ColorPicker.prototype.__proto__ || Object.getPrototypeOf(ColorPicker.prototype), 'buildItem', this).call(this, option);
      item.style.backgroundColor = option.getAttribute('value') || '';
      return item;
    }
  }, {
    key: 'selectItem',
    value: function selectItem(item, trigger) {
      _get(ColorPicker.prototype.__proto__ || Object.getPrototypeOf(ColorPicker.prototype), 'selectItem', this).call(this, item, trigger);
      var colorLabel = this.label.querySelector('.ql-color-label');
      var value = item ? item.getAttribute('data-value') || '' : '';
      if (colorLabel) {
        if (colorLabel.tagName === 'line') {
          colorLabel.style.stroke = value;
        } else {
          colorLabel.style.fill = value;
        }
      }
    }
  }]);

  return ColorPicker;
}(_picker2.default);

exports.default = ColorPicker;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _picker = __webpack_require__(28);

var _picker2 = _interopRequireDefault(_picker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IconPicker = function (_Picker) {
  _inherits(IconPicker, _Picker);

  function IconPicker(select, icons) {
    _classCallCheck(this, IconPicker);

    var _this = _possibleConstructorReturn(this, (IconPicker.__proto__ || Object.getPrototypeOf(IconPicker)).call(this, select));

    _this.container.classList.add('ql-icon-picker');
    [].forEach.call(_this.container.querySelectorAll('.ql-picker-item'), function (item) {
      item.innerHTML = icons[item.getAttribute('data-value') || ''];
    });
    _this.defaultItem = _this.container.querySelector('.ql-selected');
    _this.selectItem(_this.defaultItem);
    return _this;
  }

  _createClass(IconPicker, [{
    key: 'selectItem',
    value: function selectItem(item, trigger) {
      _get(IconPicker.prototype.__proto__ || Object.getPrototypeOf(IconPicker.prototype), 'selectItem', this).call(this, item, trigger);
      item = item || this.defaultItem;
      this.label.innerHTML = item.innerHTML;
    }
  }]);

  return IconPicker;
}(_picker2.default);

exports.default = IconPicker;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tooltip = function () {
  function Tooltip(quill, boundsContainer) {
    var _this = this;

    _classCallCheck(this, Tooltip);

    this.quill = quill;
    this.boundsContainer = boundsContainer || document.body;
    this.root = quill.addContainer('ql-tooltip');
    this.root.innerHTML = this.constructor.TEMPLATE;
    if (this.quill.root === this.quill.scrollingContainer) {
      this.quill.root.addEventListener('scroll', function () {
        _this.root.style.marginTop = -1 * _this.quill.root.scrollTop + 'px';
      });
    }
    this.hide();
  }

  _createClass(Tooltip, [{
    key: 'hide',
    value: function hide() {
      this.root.classList.add('ql-hidden');
    }
  }, {
    key: 'position',
    value: function position(reference) {
      var left = reference.left + reference.width / 2 - this.root.offsetWidth / 2;
      // root.scrollTop should be 0 if scrollContainer !== root
      var top = reference.bottom + this.quill.root.scrollTop;
      this.root.style.left = left + 'px';
      this.root.style.top = top + 'px';
      this.root.classList.remove('ql-flip');
      var containerBounds = this.boundsContainer.getBoundingClientRect();
      var rootBounds = this.root.getBoundingClientRect();
      var shift = 0;
      if (rootBounds.right > containerBounds.right) {
        shift = containerBounds.right - rootBounds.right;
        this.root.style.left = left + shift + 'px';
      }
      if (rootBounds.left < containerBounds.left) {
        shift = containerBounds.left - rootBounds.left;
        this.root.style.left = left + shift + 'px';
      }
      if (rootBounds.bottom > containerBounds.bottom) {
        var height = rootBounds.bottom - rootBounds.top;
        var verticalShift = reference.bottom - reference.top + height;
        this.root.style.top = top - verticalShift + 'px';
        this.root.classList.add('ql-flip');
      }
      return shift;
    }
  }, {
    key: 'show',
    value: function show() {
      this.root.classList.remove('ql-editing');
      this.root.classList.remove('ql-hidden');
    }
  }]);

  return Tooltip;
}();

exports.default = Tooltip;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extend = __webpack_require__(3);

var _extend2 = _interopRequireDefault(_extend);

var _emitter = __webpack_require__(8);

var _emitter2 = _interopRequireDefault(_emitter);

var _base = __webpack_require__(43);

var _base2 = _interopRequireDefault(_base);

var _link = __webpack_require__(27);

var _link2 = _interopRequireDefault(_link);

var _selection = __webpack_require__(15);

var _icons = __webpack_require__(41);

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TOOLBAR_CONFIG = [[{ header: ['1', '2', '3', false] }], ['bold', 'italic', 'underline', 'link'], [{ list: 'ordered' }, { list: 'bullet' }], ['clean']];

var SnowTheme = function (_BaseTheme) {
  _inherits(SnowTheme, _BaseTheme);

  function SnowTheme(quill, options) {
    _classCallCheck(this, SnowTheme);

    if (options.modules.toolbar != null && options.modules.toolbar.container == null) {
      options.modules.toolbar.container = TOOLBAR_CONFIG;
    }

    var _this = _possibleConstructorReturn(this, (SnowTheme.__proto__ || Object.getPrototypeOf(SnowTheme)).call(this, quill, options));

    _this.quill.container.classList.add('ql-snow');
    return _this;
  }

  _createClass(SnowTheme, [{
    key: 'extendToolbar',
    value: function extendToolbar(toolbar) {
      toolbar.container.classList.add('ql-snow');
      this.buildButtons([].slice.call(toolbar.container.querySelectorAll('button')), _icons2.default);
      this.buildPickers([].slice.call(toolbar.container.querySelectorAll('select')), _icons2.default);
      this.tooltip = new SnowTooltip(this.quill, this.options.bounds);
      if (toolbar.container.querySelector('.ql-link')) {
        this.quill.keyboard.addBinding({ key: 'K', shortKey: true }, function (range, context) {
          toolbar.handlers['link'].call(toolbar, !context.format.link);
        });
      }
    }
  }]);

  return SnowTheme;
}(_base2.default);

SnowTheme.DEFAULTS = (0, _extend2.default)(true, {}, _base2.default.DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        link: function link(value) {
          if (value) {
            var range = this.quill.getSelection();
            if (range == null || range.length == 0) return;
            var preview = this.quill.getText(range);
            if (/^\S+@\S+\.\S+$/.test(preview) && preview.indexOf('mailto:') !== 0) {
              preview = 'mailto:' + preview;
            }
            var tooltip = this.quill.theme.tooltip;
            tooltip.edit('link', preview);
          } else {
            this.quill.format('link', false);
          }
        }
      }
    }
  }
});

var SnowTooltip = function (_BaseTooltip) {
  _inherits(SnowTooltip, _BaseTooltip);

  function SnowTooltip(quill, bounds) {
    _classCallCheck(this, SnowTooltip);

    var _this2 = _possibleConstructorReturn(this, (SnowTooltip.__proto__ || Object.getPrototypeOf(SnowTooltip)).call(this, quill, bounds));

    _this2.preview = _this2.root.querySelector('a.ql-preview');
    return _this2;
  }

  _createClass(SnowTooltip, [{
    key: 'listen',
    value: function listen() {
      var _this3 = this;

      _get(SnowTooltip.prototype.__proto__ || Object.getPrototypeOf(SnowTooltip.prototype), 'listen', this).call(this);
      this.root.querySelector('a.ql-action').addEventListener('click', function (event) {
        if (_this3.root.classList.contains('ql-editing')) {
          _this3.save();
        } else {
          _this3.edit('link', _this3.preview.textContent);
        }
        event.preventDefault();
      });
      this.root.querySelector('a.ql-remove').addEventListener('click', function (event) {
        if (_this3.linkRange != null) {
          var range = _this3.linkRange;
          _this3.restoreFocus();
          _this3.quill.formatText(range, 'link', false, _emitter2.default.sources.USER);
          delete _this3.linkRange;
        }
        event.preventDefault();
        _this3.hide();
      });
      this.quill.on(_emitter2.default.events.SELECTION_CHANGE, function (range, oldRange, source) {
        if (range == null) return;
        if (range.length === 0 && source === _emitter2.default.sources.USER) {
          var _quill$scroll$descend = _this3.quill.scroll.descendant(_link2.default, range.index),
              _quill$scroll$descend2 = _slicedToArray(_quill$scroll$descend, 2),
              link = _quill$scroll$descend2[0],
              offset = _quill$scroll$descend2[1];

          if (link != null) {
            _this3.linkRange = new _selection.Range(range.index - offset, link.length());
            var preview = _link2.default.formats(link.domNode);
            _this3.preview.textContent = preview;
            _this3.preview.setAttribute('href', preview);
            _this3.show();
            _this3.position(_this3.quill.getBounds(_this3.linkRange));
            return;
          }
        } else {
          delete _this3.linkRange;
        }
        _this3.hide();
      });
    }
  }, {
    key: 'show',
    value: function show() {
      _get(SnowTooltip.prototype.__proto__ || Object.getPrototypeOf(SnowTooltip.prototype), 'show', this).call(this);
      this.root.removeAttribute('data-mode');
    }
  }]);

  return SnowTooltip;
}(_base.BaseTooltip);

SnowTooltip.TEMPLATE = ['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join('');

exports.default = SnowTheme;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = __webpack_require__(29);

var _core2 = _interopRequireDefault(_core);

var _align = __webpack_require__(36);

var _direction = __webpack_require__(38);

var _indent = __webpack_require__(64);

var _blockquote = __webpack_require__(65);

var _blockquote2 = _interopRequireDefault(_blockquote);

var _header = __webpack_require__(66);

var _header2 = _interopRequireDefault(_header);

var _list = __webpack_require__(67);

var _list2 = _interopRequireDefault(_list);

var _background = __webpack_require__(37);

var _color = __webpack_require__(26);

var _font = __webpack_require__(39);

var _size = __webpack_require__(40);

var _bold = __webpack_require__(56);

var _bold2 = _interopRequireDefault(_bold);

var _italic = __webpack_require__(68);

var _italic2 = _interopRequireDefault(_italic);

var _link = __webpack_require__(27);

var _link2 = _interopRequireDefault(_link);

var _script = __webpack_require__(69);

var _script2 = _interopRequireDefault(_script);

var _strike = __webpack_require__(70);

var _strike2 = _interopRequireDefault(_strike);

var _underline = __webpack_require__(71);

var _underline2 = _interopRequireDefault(_underline);

var _image = __webpack_require__(72);

var _image2 = _interopRequireDefault(_image);

var _video = __webpack_require__(73);

var _video2 = _interopRequireDefault(_video);

var _code = __webpack_require__(13);

var _code2 = _interopRequireDefault(_code);

var _formula = __webpack_require__(74);

var _formula2 = _interopRequireDefault(_formula);

var _syntax = __webpack_require__(75);

var _syntax2 = _interopRequireDefault(_syntax);

var _toolbar = __webpack_require__(57);

var _toolbar2 = _interopRequireDefault(_toolbar);

var _icons = __webpack_require__(41);

var _icons2 = _interopRequireDefault(_icons);

var _picker = __webpack_require__(28);

var _picker2 = _interopRequireDefault(_picker);

var _colorPicker = __webpack_require__(59);

var _colorPicker2 = _interopRequireDefault(_colorPicker);

var _iconPicker = __webpack_require__(60);

var _iconPicker2 = _interopRequireDefault(_iconPicker);

var _tooltip = __webpack_require__(61);

var _tooltip2 = _interopRequireDefault(_tooltip);

var _bubble = __webpack_require__(108);

var _bubble2 = _interopRequireDefault(_bubble);

var _snow = __webpack_require__(62);

var _snow2 = _interopRequireDefault(_snow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_core2.default.register({
  'attributors/attribute/direction': _direction.DirectionAttribute,

  'attributors/class/align': _align.AlignClass,
  'attributors/class/background': _background.BackgroundClass,
  'attributors/class/color': _color.ColorClass,
  'attributors/class/direction': _direction.DirectionClass,
  'attributors/class/font': _font.FontClass,
  'attributors/class/size': _size.SizeClass,

  'attributors/style/align': _align.AlignStyle,
  'attributors/style/background': _background.BackgroundStyle,
  'attributors/style/color': _color.ColorStyle,
  'attributors/style/direction': _direction.DirectionStyle,
  'attributors/style/font': _font.FontStyle,
  'attributors/style/size': _size.SizeStyle
}, true);

_core2.default.register({
  'formats/align': _align.AlignClass,
  'formats/direction': _direction.DirectionClass,
  'formats/indent': _indent.IndentClass,

  'formats/background': _background.BackgroundStyle,
  'formats/color': _color.ColorStyle,
  'formats/font': _font.FontClass,
  'formats/size': _size.SizeClass,

  'formats/blockquote': _blockquote2.default,
  'formats/code-block': _code2.default,
  'formats/header': _header2.default,
  'formats/list': _list2.default,

  'formats/bold': _bold2.default,
  'formats/code': _code.Code,
  'formats/italic': _italic2.default,
  'formats/link': _link2.default,
  'formats/script': _script2.default,
  'formats/strike': _strike2.default,
  'formats/underline': _underline2.default,

  'formats/image': _image2.default,
  'formats/video': _video2.default,

  'formats/list/item': _list.ListItem,

  'modules/formula': _formula2.default,
  'modules/syntax': _syntax2.default,
  'modules/toolbar': _toolbar2.default,

  'themes/bubble': _bubble2.default,
  'themes/snow': _snow2.default,

  'ui/icons': _icons2.default,
  'ui/picker': _picker2.default,
  'ui/icon-picker': _iconPicker2.default,
  'ui/color-picker': _colorPicker2.default,
  'ui/tooltip': _tooltip2.default
}, true);

exports.default = _core2.default;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IndentClass = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IdentAttributor = function (_Parchment$Attributor) {
  _inherits(IdentAttributor, _Parchment$Attributor);

  function IdentAttributor() {
    _classCallCheck(this, IdentAttributor);

    return _possibleConstructorReturn(this, (IdentAttributor.__proto__ || Object.getPrototypeOf(IdentAttributor)).apply(this, arguments));
  }

  _createClass(IdentAttributor, [{
    key: 'add',
    value: function add(node, value) {
      if (value === '+1' || value === '-1') {
        var indent = this.value(node) || 0;
        value = value === '+1' ? indent + 1 : indent - 1;
      }
      if (value === 0) {
        this.remove(node);
        return true;
      } else {
        return _get(IdentAttributor.prototype.__proto__ || Object.getPrototypeOf(IdentAttributor.prototype), 'add', this).call(this, node, value);
      }
    }
  }, {
    key: 'canAdd',
    value: function canAdd(node, value) {
      return _get(IdentAttributor.prototype.__proto__ || Object.getPrototypeOf(IdentAttributor.prototype), 'canAdd', this).call(this, node, value) || _get(IdentAttributor.prototype.__proto__ || Object.getPrototypeOf(IdentAttributor.prototype), 'canAdd', this).call(this, node, parseInt(value));
    }
  }, {
    key: 'value',
    value: function value(node) {
      return parseInt(_get(IdentAttributor.prototype.__proto__ || Object.getPrototypeOf(IdentAttributor.prototype), 'value', this).call(this, node)) || undefined; // Don't return NaN
    }
  }]);

  return IdentAttributor;
}(_parchment2.default.Attributor.Class);

var IndentClass = new IdentAttributor('indent', 'ql-indent', {
  scope: _parchment2.default.Scope.BLOCK,
  whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
});

exports.IndentClass = IndentClass;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _block = __webpack_require__(4);

var _block2 = _interopRequireDefault(_block);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Blockquote = function (_Block) {
  _inherits(Blockquote, _Block);

  function Blockquote() {
    _classCallCheck(this, Blockquote);

    return _possibleConstructorReturn(this, (Blockquote.__proto__ || Object.getPrototypeOf(Blockquote)).apply(this, arguments));
  }

  return Blockquote;
}(_block2.default);

Blockquote.blotName = 'blockquote';
Blockquote.tagName = 'blockquote';

exports.default = Blockquote;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _block = __webpack_require__(4);

var _block2 = _interopRequireDefault(_block);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Block) {
  _inherits(Header, _Block);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, null, [{
    key: 'formats',
    value: function formats(domNode) {
      return this.tagName.indexOf(domNode.tagName) + 1;
    }
  }]);

  return Header;
}(_block2.default);

Header.blotName = 'header';
Header.tagName = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];

exports.default = Header;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ListItem = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _block = __webpack_require__(4);

var _block2 = _interopRequireDefault(_block);

var _container = __webpack_require__(25);

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListItem = function (_Block) {
  _inherits(ListItem, _Block);

  function ListItem() {
    _classCallCheck(this, ListItem);

    return _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).apply(this, arguments));
  }

  _createClass(ListItem, [{
    key: 'format',
    value: function format(name, value) {
      if (name === List.blotName && !value) {
        this.replaceWith(_parchment2.default.create(this.statics.scope));
      } else {
        _get(ListItem.prototype.__proto__ || Object.getPrototypeOf(ListItem.prototype), 'format', this).call(this, name, value);
      }
    }
  }, {
    key: 'remove',
    value: function remove() {
      if (this.prev == null && this.next == null) {
        this.parent.remove();
      } else {
        _get(ListItem.prototype.__proto__ || Object.getPrototypeOf(ListItem.prototype), 'remove', this).call(this);
      }
    }
  }, {
    key: 'replaceWith',
    value: function replaceWith(name, value) {
      this.parent.isolate(this.offset(this.parent), this.length());
      if (name === this.parent.statics.blotName) {
        this.parent.replaceWith(name, value);
        return this;
      } else {
        this.parent.unwrap();
        return _get(ListItem.prototype.__proto__ || Object.getPrototypeOf(ListItem.prototype), 'replaceWith', this).call(this, name, value);
      }
    }
  }], [{
    key: 'formats',
    value: function formats(domNode) {
      return domNode.tagName === this.tagName ? undefined : _get(ListItem.__proto__ || Object.getPrototypeOf(ListItem), 'formats', this).call(this, domNode);
    }
  }]);

  return ListItem;
}(_block2.default);

ListItem.blotName = 'list-item';
ListItem.tagName = 'LI';

var List = function (_Container) {
  _inherits(List, _Container);

  _createClass(List, null, [{
    key: 'create',
    value: function create(value) {
      var tagName = value === 'ordered' ? 'OL' : 'UL';
      var node = _get(List.__proto__ || Object.getPrototypeOf(List), 'create', this).call(this, tagName);
      if (value === 'checked' || value === 'unchecked') {
        node.setAttribute('data-checked', value === 'checked');
      }
      return node;
    }
  }, {
    key: 'formats',
    value: function formats(domNode) {
      if (domNode.tagName === 'OL') return 'ordered';
      if (domNode.tagName === 'UL') {
        if (domNode.hasAttribute('data-checked')) {
          return domNode.getAttribute('data-checked') === 'true' ? 'checked' : 'unchecked';
        } else {
          return 'bullet';
        }
      }
      return undefined;
    }
  }]);

  function List(domNode) {
    _classCallCheck(this, List);

    var _this2 = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, domNode));

    var listEventHandler = function listEventHandler(e) {
      if (e.target.parentNode !== domNode) return;
      var format = _this2.statics.formats(domNode);
      var blot = _parchment2.default.find(e.target);
      if (format === 'checked') {
        blot.format('list', 'unchecked');
      } else if (format === 'unchecked') {
        blot.format('list', 'checked');
      }
    };

    domNode.addEventListener('touchstart', listEventHandler);
    domNode.addEventListener('mousedown', listEventHandler);
    return _this2;
  }

  _createClass(List, [{
    key: 'format',
    value: function format(name, value) {
      if (this.children.length > 0) {
        this.children.tail.format(name, value);
      }
    }
  }, {
    key: 'formats',
    value: function formats() {
      // We don't inherit from FormatBlot
      return _defineProperty({}, this.statics.blotName, this.statics.formats(this.domNode));
    }
  }, {
    key: 'insertBefore',
    value: function insertBefore(blot, ref) {
      if (blot instanceof ListItem) {
        _get(List.prototype.__proto__ || Object.getPrototypeOf(List.prototype), 'insertBefore', this).call(this, blot, ref);
      } else {
        var index = ref == null ? this.length() : ref.offset(this);
        var after = this.split(index);
        after.parent.insertBefore(blot, after);
      }
    }
  }, {
    key: 'optimize',
    value: function optimize(context) {
      _get(List.prototype.__proto__ || Object.getPrototypeOf(List.prototype), 'optimize', this).call(this, context);
      var next = this.next;
      if (next != null && next.prev === this && next.statics.blotName === this.statics.blotName && next.domNode.tagName === this.domNode.tagName && next.domNode.getAttribute('data-checked') === this.domNode.getAttribute('data-checked')) {
        next.moveChildren(this);
        next.remove();
      }
    }
  }, {
    key: 'replace',
    value: function replace(target) {
      if (target.statics.blotName !== this.statics.blotName) {
        var item = _parchment2.default.create(this.statics.defaultChild);
        target.moveChildren(item);
        this.appendChild(item);
      }
      _get(List.prototype.__proto__ || Object.getPrototypeOf(List.prototype), 'replace', this).call(this, target);
    }
  }]);

  return List;
}(_container2.default);

List.blotName = 'list';
List.scope = _parchment2.default.Scope.BLOCK_BLOT;
List.tagName = ['OL', 'UL'];
List.defaultChild = 'list-item';
List.allowedChildren = [ListItem];

exports.ListItem = ListItem;
exports.default = List;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bold = __webpack_require__(56);

var _bold2 = _interopRequireDefault(_bold);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Italic = function (_Bold) {
  _inherits(Italic, _Bold);

  function Italic() {
    _classCallCheck(this, Italic);

    return _possibleConstructorReturn(this, (Italic.__proto__ || Object.getPrototypeOf(Italic)).apply(this, arguments));
  }

  return Italic;
}(_bold2.default);

Italic.blotName = 'italic';
Italic.tagName = ['EM', 'I'];

exports.default = Italic;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inline = __webpack_require__(6);

var _inline2 = _interopRequireDefault(_inline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Script = function (_Inline) {
  _inherits(Script, _Inline);

  function Script() {
    _classCallCheck(this, Script);

    return _possibleConstructorReturn(this, (Script.__proto__ || Object.getPrototypeOf(Script)).apply(this, arguments));
  }

  _createClass(Script, null, [{
    key: 'create',
    value: function create(value) {
      if (value === 'super') {
        return document.createElement('sup');
      } else if (value === 'sub') {
        return document.createElement('sub');
      } else {
        return _get(Script.__proto__ || Object.getPrototypeOf(Script), 'create', this).call(this, value);
      }
    }
  }, {
    key: 'formats',
    value: function formats(domNode) {
      if (domNode.tagName === 'SUB') return 'sub';
      if (domNode.tagName === 'SUP') return 'super';
      return undefined;
    }
  }]);

  return Script;
}(_inline2.default);

Script.blotName = 'script';
Script.tagName = ['SUB', 'SUP'];

exports.default = Script;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inline = __webpack_require__(6);

var _inline2 = _interopRequireDefault(_inline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Strike = function (_Inline) {
  _inherits(Strike, _Inline);

  function Strike() {
    _classCallCheck(this, Strike);

    return _possibleConstructorReturn(this, (Strike.__proto__ || Object.getPrototypeOf(Strike)).apply(this, arguments));
  }

  return Strike;
}(_inline2.default);

Strike.blotName = 'strike';
Strike.tagName = 'S';

exports.default = Strike;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inline = __webpack_require__(6);

var _inline2 = _interopRequireDefault(_inline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Underline = function (_Inline) {
  _inherits(Underline, _Inline);

  function Underline() {
    _classCallCheck(this, Underline);

    return _possibleConstructorReturn(this, (Underline.__proto__ || Object.getPrototypeOf(Underline)).apply(this, arguments));
  }

  return Underline;
}(_inline2.default);

Underline.blotName = 'underline';
Underline.tagName = 'U';

exports.default = Underline;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _link = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ATTRIBUTES = ['alt', 'height', 'width'];

var Image = function (_Parchment$Embed) {
  _inherits(Image, _Parchment$Embed);

  function Image() {
    _classCallCheck(this, Image);

    return _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).apply(this, arguments));
  }

  _createClass(Image, [{
    key: 'format',
    value: function format(name, value) {
      if (ATTRIBUTES.indexOf(name) > -1) {
        if (value) {
          this.domNode.setAttribute(name, value);
        } else {
          this.domNode.removeAttribute(name);
        }
      } else {
        _get(Image.prototype.__proto__ || Object.getPrototypeOf(Image.prototype), 'format', this).call(this, name, value);
      }
    }
  }], [{
    key: 'create',
    value: function create(value) {
      var node = _get(Image.__proto__ || Object.getPrototypeOf(Image), 'create', this).call(this, value);
      if (typeof value === 'string') {
        node.setAttribute('src', this.sanitize(value));
      }
      return node;
    }
  }, {
    key: 'formats',
    value: function formats(domNode) {
      return ATTRIBUTES.reduce(function (formats, attribute) {
        if (domNode.hasAttribute(attribute)) {
          formats[attribute] = domNode.getAttribute(attribute);
        }
        return formats;
      }, {});
    }
  }, {
    key: 'match',
    value: function match(url) {
      return (/\.(jpe?g|gif|png)$/.test(url) || /^data:image\/.+;base64/.test(url)
      );
    }
  }, {
    key: 'sanitize',
    value: function sanitize(url) {
      return (0, _link.sanitize)(url, ['http', 'https', 'data']) ? url : '//:0';
    }
  }, {
    key: 'value',
    value: function value(domNode) {
      return domNode.getAttribute('src');
    }
  }]);

  return Image;
}(_parchment2.default.Embed);

Image.blotName = 'image';
Image.tagName = 'IMG';

exports.default = Image;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _block = __webpack_require__(4);

var _link = __webpack_require__(27);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ATTRIBUTES = ['height', 'width'];

var Video = function (_BlockEmbed) {
  _inherits(Video, _BlockEmbed);

  function Video() {
    _classCallCheck(this, Video);

    return _possibleConstructorReturn(this, (Video.__proto__ || Object.getPrototypeOf(Video)).apply(this, arguments));
  }

  _createClass(Video, [{
    key: 'format',
    value: function format(name, value) {
      if (ATTRIBUTES.indexOf(name) > -1) {
        if (value) {
          this.domNode.setAttribute(name, value);
        } else {
          this.domNode.removeAttribute(name);
        }
      } else {
        _get(Video.prototype.__proto__ || Object.getPrototypeOf(Video.prototype), 'format', this).call(this, name, value);
      }
    }
  }], [{
    key: 'create',
    value: function create(value) {
      var node = _get(Video.__proto__ || Object.getPrototypeOf(Video), 'create', this).call(this, value);
      node.setAttribute('frameborder', '0');
      node.setAttribute('allowfullscreen', true);
      node.setAttribute('src', this.sanitize(value));
      return node;
    }
  }, {
    key: 'formats',
    value: function formats(domNode) {
      return ATTRIBUTES.reduce(function (formats, attribute) {
        if (domNode.hasAttribute(attribute)) {
          formats[attribute] = domNode.getAttribute(attribute);
        }
        return formats;
      }, {});
    }
  }, {
    key: 'sanitize',
    value: function sanitize(url) {
      return _link2.default.sanitize(url);
    }
  }, {
    key: 'value',
    value: function value(domNode) {
      return domNode.getAttribute('src');
    }
  }]);

  return Video;
}(_block.BlockEmbed);

Video.blotName = 'video';
Video.className = 'ql-video';
Video.tagName = 'IFRAME';

exports.default = Video;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FormulaBlot = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _embed = __webpack_require__(35);

var _embed2 = _interopRequireDefault(_embed);

var _quill = __webpack_require__(5);

var _quill2 = _interopRequireDefault(_quill);

var _module = __webpack_require__(9);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormulaBlot = function (_Embed) {
  _inherits(FormulaBlot, _Embed);

  function FormulaBlot() {
    _classCallCheck(this, FormulaBlot);

    return _possibleConstructorReturn(this, (FormulaBlot.__proto__ || Object.getPrototypeOf(FormulaBlot)).apply(this, arguments));
  }

  _createClass(FormulaBlot, null, [{
    key: 'create',
    value: function create(value) {
      var node = _get(FormulaBlot.__proto__ || Object.getPrototypeOf(FormulaBlot), 'create', this).call(this, value);
      if (typeof value === 'string') {
        window.katex.render(value, node, {
          throwOnError: false,
          errorColor: '#f00'
        });
        node.setAttribute('data-value', value);
      }
      return node;
    }
  }, {
    key: 'value',
    value: function value(domNode) {
      return domNode.getAttribute('data-value');
    }
  }]);

  return FormulaBlot;
}(_embed2.default);

FormulaBlot.blotName = 'formula';
FormulaBlot.className = 'ql-formula';
FormulaBlot.tagName = 'SPAN';

var Formula = function (_Module) {
  _inherits(Formula, _Module);

  _createClass(Formula, null, [{
    key: 'register',
    value: function register() {
      _quill2.default.register(FormulaBlot, true);
    }
  }]);

  function Formula() {
    _classCallCheck(this, Formula);

    var _this2 = _possibleConstructorReturn(this, (Formula.__proto__ || Object.getPrototypeOf(Formula)).call(this));

    if (window.katex == null) {
      throw new Error('Formula module requires KaTeX.');
    }
    return _this2;
  }

  return Formula;
}(_module2.default);

exports.FormulaBlot = FormulaBlot;
exports.default = Formula;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CodeToken = exports.CodeBlock = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _quill = __webpack_require__(5);

var _quill2 = _interopRequireDefault(_quill);

var _module = __webpack_require__(9);

var _module2 = _interopRequireDefault(_module);

var _code = __webpack_require__(13);

var _code2 = _interopRequireDefault(_code);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SyntaxCodeBlock = function (_CodeBlock) {
  _inherits(SyntaxCodeBlock, _CodeBlock);

  function SyntaxCodeBlock() {
    _classCallCheck(this, SyntaxCodeBlock);

    return _possibleConstructorReturn(this, (SyntaxCodeBlock.__proto__ || Object.getPrototypeOf(SyntaxCodeBlock)).apply(this, arguments));
  }

  _createClass(SyntaxCodeBlock, [{
    key: 'replaceWith',
    value: function replaceWith(block) {
      this.domNode.textContent = this.domNode.textContent;
      this.attach();
      _get(SyntaxCodeBlock.prototype.__proto__ || Object.getPrototypeOf(SyntaxCodeBlock.prototype), 'replaceWith', this).call(this, block);
    }
  }, {
    key: 'highlight',
    value: function highlight(_highlight) {
      var text = this.domNode.textContent;
      if (this.cachedText !== text) {
        if (text.trim().length > 0 || this.cachedText == null) {
          this.domNode.innerHTML = _highlight(text);
          this.domNode.normalize();
          this.attach();
        }
        this.cachedText = text;
      }
    }
  }]);

  return SyntaxCodeBlock;
}(_code2.default);

SyntaxCodeBlock.className = 'ql-syntax';

var CodeToken = new _parchment2.default.Attributor.Class('token', 'hljs', {
  scope: _parchment2.default.Scope.INLINE
});

var Syntax = function (_Module) {
  _inherits(Syntax, _Module);

  _createClass(Syntax, null, [{
    key: 'register',
    value: function register() {
      _quill2.default.register(CodeToken, true);
      _quill2.default.register(SyntaxCodeBlock, true);
    }
  }]);

  function Syntax(quill, options) {
    _classCallCheck(this, Syntax);

    var _this2 = _possibleConstructorReturn(this, (Syntax.__proto__ || Object.getPrototypeOf(Syntax)).call(this, quill, options));

    if (typeof _this2.options.highlight !== 'function') {
      throw new Error('Syntax module requires highlight.js. Please include the library on the page before Quill.');
    }
    var timer = null;
    _this2.quill.on(_quill2.default.events.SCROLL_OPTIMIZE, function () {
      clearTimeout(timer);
      timer = setTimeout(function () {
        _this2.highlight();
        timer = null;
      }, _this2.options.interval);
    });
    _this2.highlight();
    return _this2;
  }

  _createClass(Syntax, [{
    key: 'highlight',
    value: function highlight() {
      var _this3 = this;

      if (this.quill.selection.composing) return;
      this.quill.update(_quill2.default.sources.USER);
      var range = this.quill.getSelection();
      this.quill.scroll.descendants(SyntaxCodeBlock).forEach(function (code) {
        code.highlight(_this3.options.highlight);
      });
      this.quill.update(_quill2.default.sources.SILENT);
      if (range != null) {
        this.quill.setSelection(range, _quill2.default.sources.SILENT);
      }
    }
  }]);

  return Syntax;
}(_module2.default);

Syntax.DEFAULTS = {
  highlight: function () {
    if (window.hljs == null) return null;
    return function (text) {
      var result = window.hljs.highlightAuto(text);
      return result.value;
    };
  }(),
  interval: 1000
};

exports.CodeBlock = SyntaxCodeBlock;
exports.CodeToken = CodeToken;
exports.default = Syntax;

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>";

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>";

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>";

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>";

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <g class=\"ql-fill ql-color-label\"> <polygon points=\"6 6.868 6 6 5 6 5 7 5.942 7 6 6.868\"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points=\"6.817 5 6 5 6 6 6.38 6 6.817 5\"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points=\"4 11.439 4 11 3 11 3 12 3.755 12 4 11.439\"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points=\"4.63 10 4 10 4 11 4.192 11 4.63 10\"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points=\"13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174\"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points=\"12 6.868 12 6 11.62 6 12 6.868\"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points=\"12.933 9 13 9 13 8 12.495 8 12.933 9\"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points=\"5.5 13 9 5 12.5 13\"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>";

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <rect class=\"ql-fill ql-stroke\" height=3 width=3 x=4 y=5></rect> <rect class=\"ql-fill ql-stroke\" height=3 width=3 x=11 y=5></rect> <path class=\"ql-even ql-fill ql-stroke\" d=M7,8c0,4.031-3,5-3,5></path> <path class=\"ql-even ql-fill ql-stroke\" d=M14,8c0,4.031-3,5-3,5></path> </svg>";

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>";

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = "<svg class=\"\" viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>";

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=\"ql-color-label ql-stroke ql-transparent\" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points=\"5.5 11 9 3 12.5 11\"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>";

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <polygon class=\"ql-stroke ql-fill\" points=\"3 11 5 9 3 7 3 11\"></polygon> <line class=\"ql-stroke ql-fill\" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>";

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <polygon class=\"ql-stroke ql-fill\" points=\"15 12 13 10 15 8 15 12\"></polygon> <line class=\"ql-stroke ql-fill\" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>";

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>";

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>";

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>";

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform=\"translate(24 18) rotate(-180)\"/> </svg>";

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>";

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 18 18\"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>";

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 18 18\"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>";

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>";

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class=\"ql-even ql-fill\" points=\"5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12\"></polyline> </svg>";

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=\"ql-fill ql-stroke\" points=\"3 7 3 11 5 9 3 7\"></polyline> </svg>";

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points=\"5 7 5 11 3 9 5 7\"></polyline> </svg>";

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class=\"ql-even ql-stroke\" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class=\"ql-even ql-stroke\" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>";

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class=\"ql-stroke ql-thin\" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class=\"ql-stroke ql-thin\" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class=\"ql-stroke ql-thin\" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>";

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>";

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = "<svg class=\"\" viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points=\"3 4 4 5 6 3\"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points=\"3 14 4 15 6 13\"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points=\"3 9 4 10 6 8\"></polyline> </svg>";

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>";

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>";

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=\"ql-stroke ql-thin\" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>";

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>";

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>";

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <polygon class=ql-stroke points=\"7 11 9 13 11 11 7 11\"></polygon> <polygon class=ql-stroke points=\"7 7 9 5 11 7 7 7\"></polygon> </svg>";

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BubbleTooltip = undefined;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extend = __webpack_require__(3);

var _extend2 = _interopRequireDefault(_extend);

var _emitter = __webpack_require__(8);

var _emitter2 = _interopRequireDefault(_emitter);

var _base = __webpack_require__(43);

var _base2 = _interopRequireDefault(_base);

var _selection = __webpack_require__(15);

var _icons = __webpack_require__(41);

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TOOLBAR_CONFIG = [['bold', 'italic', 'link'], [{ header: 1 }, { header: 2 }, 'blockquote']];

var BubbleTheme = function (_BaseTheme) {
  _inherits(BubbleTheme, _BaseTheme);

  function BubbleTheme(quill, options) {
    _classCallCheck(this, BubbleTheme);

    if (options.modules.toolbar != null && options.modules.toolbar.container == null) {
      options.modules.toolbar.container = TOOLBAR_CONFIG;
    }

    var _this = _possibleConstructorReturn(this, (BubbleTheme.__proto__ || Object.getPrototypeOf(BubbleTheme)).call(this, quill, options));

    _this.quill.container.classList.add('ql-bubble');
    return _this;
  }

  _createClass(BubbleTheme, [{
    key: 'extendToolbar',
    value: function extendToolbar(toolbar) {
      this.tooltip = new BubbleTooltip(this.quill, this.options.bounds);
      this.tooltip.root.appendChild(toolbar.container);
      this.buildButtons([].slice.call(toolbar.container.querySelectorAll('button')), _icons2.default);
      this.buildPickers([].slice.call(toolbar.container.querySelectorAll('select')), _icons2.default);
    }
  }]);

  return BubbleTheme;
}(_base2.default);

BubbleTheme.DEFAULTS = (0, _extend2.default)(true, {}, _base2.default.DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        link: function link(value) {
          if (!value) {
            this.quill.format('link', false);
          } else {
            this.quill.theme.tooltip.edit();
          }
        }
      }
    }
  }
});

var BubbleTooltip = function (_BaseTooltip) {
  _inherits(BubbleTooltip, _BaseTooltip);

  function BubbleTooltip(quill, bounds) {
    _classCallCheck(this, BubbleTooltip);

    var _this2 = _possibleConstructorReturn(this, (BubbleTooltip.__proto__ || Object.getPrototypeOf(BubbleTooltip)).call(this, quill, bounds));

    _this2.quill.on(_emitter2.default.events.EDITOR_CHANGE, function (type, range, oldRange, source) {
      if (type !== _emitter2.default.events.SELECTION_CHANGE) return;
      if (range != null && range.length > 0 && source === _emitter2.default.sources.USER) {
        _this2.show();
        // Lock our width so we will expand beyond our offsetParent boundaries
        _this2.root.style.left = '0px';
        _this2.root.style.width = '';
        _this2.root.style.width = _this2.root.offsetWidth + 'px';
        var lines = _this2.quill.getLines(range.index, range.length);
        if (lines.length === 1) {
          _this2.position(_this2.quill.getBounds(range));
        } else {
          var lastLine = lines[lines.length - 1];
          var index = _this2.quill.getIndex(lastLine);
          var length = Math.min(lastLine.length() - 1, range.index + range.length - index);
          var _bounds = _this2.quill.getBounds(new _selection.Range(index, length));
          _this2.position(_bounds);
        }
      } else if (document.activeElement !== _this2.textbox && _this2.quill.hasFocus()) {
        _this2.hide();
      }
    });
    return _this2;
  }

  _createClass(BubbleTooltip, [{
    key: 'listen',
    value: function listen() {
      var _this3 = this;

      _get(BubbleTooltip.prototype.__proto__ || Object.getPrototypeOf(BubbleTooltip.prototype), 'listen', this).call(this);
      this.root.querySelector('.ql-close').addEventListener('click', function () {
        _this3.root.classList.remove('ql-editing');
      });
      this.quill.on(_emitter2.default.events.SCROLL_OPTIMIZE, function () {
        // Let selection be restored by toolbar handlers before repositioning
        setTimeout(function () {
          if (_this3.root.classList.contains('ql-hidden')) return;
          var range = _this3.quill.getSelection();
          if (range != null) {
            _this3.position(_this3.quill.getBounds(range));
          }
        }, 1);
      });
    }
  }, {
    key: 'cancel',
    value: function cancel() {
      this.show();
    }
  }, {
    key: 'position',
    value: function position(reference) {
      var shift = _get(BubbleTooltip.prototype.__proto__ || Object.getPrototypeOf(BubbleTooltip.prototype), 'position', this).call(this, reference);
      var arrow = this.root.querySelector('.ql-tooltip-arrow');
      arrow.style.marginLeft = '';
      if (shift === 0) return shift;
      arrow.style.marginLeft = -1 * shift - arrow.offsetWidth / 2 + 'px';
    }
  }]);

  return BubbleTooltip;
}(_base.BaseTooltip);

BubbleTooltip.TEMPLATE = ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', '</div>'].join('');

exports.BubbleTooltip = BubbleTooltip;
exports.default = BubbleTheme;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(63);


/***/ })
/******/ ])["default"];
});
/**
 * Tagify (v 2.31.6)- tags input component
 * By Yair Even-Or
 * Don't sell this code. (c)
 * https://github.com/yairEO/tagify
 */
;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.Tagify = factory();
  }
}(this, function() {
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Tagify(input, settings) {
  // protection
  if (!input) {
    console.warn('Tagify: ', 'invalid input element ', input);
    return this;
  }

  this.applySettings(input, settings);
  this.state = {};
  this.value = []; // tags' data
  // events' callbacks references will be stores here, so events could be unbinded

  this.listeners = {};
  this.DOM = {}; // Store all relevant DOM elements in an Object

  this.extend(this, new this.EventDispatcher(this));
  this.build(input);
  this.loadOriginalValues();
  this.events.customBinding.call(this);
  this.events.binding.call(this);
  input.autofocus && this.DOM.input.focus();
}

Tagify.prototype = {
  isIE: window.document.documentMode,
  // https://developer.mozilla.org/en-US/docs/Web/API/Document/compatMode#Browser_compatibility
  TEXTS: {
    empty: "empty",
    exceed: "number of tags exceeded",
    pattern: "pattern mismatch",
    duplicate: "already exists",
    notAllowed: "not allowed"
  },
  DEFAULTS: {
    delimiters: ",",
    // [RegEx] split tags by any of these delimiters ("null" to cancel) Example: ",| |."
    pattern: null,
    // RegEx pattern to validate input by. Ex: /[1-9]/
    maxTags: Infinity,
    // Maximum number of tags
    callbacks: {},
    // Exposed callbacks object to be triggered on certain events
    addTagOnBlur: true,
    // Flag - automatically adds the text which was inputed as a tag when blur event happens
    duplicates: false,
    // Flag - allow tuplicate tags
    whitelist: [],
    // Array of tags to suggest as the user types (can be used along with "enforceWhitelist" setting)
    blacklist: [],
    // A list of non-allowed tags
    enforceWhitelist: false,
    // Flag - Only allow tags allowed in whitelist
    keepInvalidTags: false,
    // Flag - if true, do not remove tags which did not pass validation
    autoComplete: true,
    // Flag - tries to autocomplete the input's value while typing
    mixTagsAllowedAfter: /,|\.|\:|\s/,
    // RegEx - Define conditions in which mix-tags content is allowing a tag to be added after
    mixTagsInterpolator: ['[[', ']]'],
    // Interpolation for mix mode. Everything between this will becmoe a tag
    backspace: true,
    // false / true / "edit"
    skipInvalid: false,
    editTags: 2,
    // 1 or 2 clicks to edit a tag
    transformTag: function transformTag() {},
    dropdown: {
      classname: '',
      enabled: 2,
      // minimum input characters needs to be typed for the dropdown to show
      maxItems: 10,
      itemTemplate: '',
      fuzzySearch: true,
      highlightFirst: false,
      // highlights first-matched item in the list
      closeOnSelect: true // closes the dropdown after selecting an item, if `enabled:0` (which means always show dropdown)

    }
  },
  templates: {
    wrapper: function wrapper(input, settings) {
      return "<tags class=\"tagify ".concat(settings.mode ? "tagify--" + settings.mode : "", " ").concat(input.className, "\"\n                        ").concat(settings.readonly ? 'readonly aria-readonly="true"' : 'aria-haspopup="true" aria-expanded="false"', "\n                        role=\"tagslist\">\n                <span contenteditable data-placeholder=\"").concat(settings.placeholder || '&#8203;', "\" aria-placeholder=\"").concat(settings.placeholder || '', "\"\n                    class=\"tagify__input\"\n                    role=\"textbox\"\n                    aria-multiline=\"false\"></span>\n            </tags>");
    },
    tag: function tag(value, tagData) {
      return "<tag title='".concat(tagData.title || value, "'\n                        contenteditable='false'\n                        spellcheck='false'\n                        class='tagify__tag ").concat(tagData["class"] ? tagData["class"] : "", "'\n                        ").concat(this.getAttributes(tagData), ">\n                <x title='' class='tagify__tag__removeBtn' role='button' aria-label='remove tag'></x>\n                <div>\n                    <span class='tagify__tag-text'>").concat(value, "</span>\n                </div>\n            </tag>");
    },
    dropdownItem: function dropdownItem(item) {
      var sanitizedValue = (item.value || item).replace(/`|'/g, "&#39;");
      return "<div ".concat(this.getAttributes(item), "\n                        class='tagify__dropdown__item ").concat(item["class"] ? item["class"] : "", "'\n                        tabindex=\"0\"\n                        role=\"menuitem\"\n                        aria-labelledby=\"dropdown-label\">").concat(sanitizedValue, "</div>");
    }
  },
  customEventsList: ['click', 'add', 'remove', 'invalid', 'input', 'edit'],
  applySettings: function applySettings(input, settings) {
    var attr__whitelist = input.getAttribute('data-whitelist'),
        attr__blacklist = input.getAttribute('data-blacklist');
    this.DEFAULTS.templates = this.templates;
    this.DEFAULTS.dropdown.itemTemplate = this.templates.dropdownItem; // regression fallback

    this.settings = this.extend({}, this.DEFAULTS, settings);
    this.settings.readonly = input.hasAttribute('readonly'); // if "readonly" do not include an "input" element inside the Tags component

    this.settings.placeholder = input.getAttribute('placeholder') || this.settings.placeholder || "";
    if (this.isIE) this.settings.autoComplete = false; // IE goes crazy if this isn't false

    if (attr__blacklist) {
      attr__blacklist = attr__blacklist.split(this.settings.delimiters);
      if (attr__blacklist instanceof Array) this.settings.blacklist = attr__blacklist;
    }

    if (attr__whitelist) {
      attr__whitelist = attr__whitelist.split(this.settings.delimiters);
      if (attr__whitelist instanceof Array) this.settings.whitelist = attr__whitelist;
    }

    if (input.pattern) try {
      this.settings.pattern = new RegExp(input.pattern);
    } catch (e) {} // Convert the "delimiters" setting into a REGEX object

    if (this.settings && this.settings.delimiters) {
      try {
        this.settings.delimiters = new RegExp(this.settings.delimiters, "g");
      } catch (e) {}
    } // make sure the dropdown will be shown on "focus" and not only after typing something (in "select" mode)


    if (this.settings.mode == 'select') this.settings.dropdown.enabled = 0;
  },

  /**
   * utility method
   * https://stackoverflow.com/a/35385518/104380
   * @param  {String} s [HTML string]
   * @return {Object}   [DOM node]
   */
  parseHTML: function parseHTML(s) {
    var parser = new DOMParser(),
        node = parser.parseFromString(s.trim(), "text/html");
    return node.body.firstElementChild;
  },

  /**
   * utility method
   * https://stackoverflow.com/a/25396011/104380
   */
  escapeHTML: function escapeHTML(s) {
    var text = document.createTextNode(s),
        p = document.createElement('p');
    p.appendChild(text);
    return p.innerHTML;
  },

  /**
   * builds the HTML of this component
   * @param  {Object} input [DOM element which would be "transformed" into "Tags"]
   */
  build: function build(input) {
    var that = this,
        DOM = this.DOM,
        template = this.settings.templates.wrapper(input, this.settings);
    DOM.originalInput = input;
    DOM.scope = this.parseHTML(template);
    DOM.input = DOM.scope.querySelector('[contenteditable]');
    input.parentNode.insertBefore(DOM.scope, input);

    if (this.settings.dropdown.enabled >= 0) {
      this.dropdown.init.call(this);
    }
  },

  /**
   * revert any changes made by this component
   */
  destroy: function destroy() {
    this.DOM.scope.parentNode.removeChild(this.DOM.scope);
    this.dropdown.hide.call(this, true);
  },

  /**
   * if the original input had any values, add them as tags
   */
  loadOriginalValues: function loadOriginalValues() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.DOM.originalInput.value;
    // if the original input already had any value (tags)
    if (!value) return;
    this.removeAllTags();

    try {
      value = JSON.parse(value);
    } catch (err) {}

    if (this.settings.mode == 'mix') {
      this.parseMixTags(value);
    } else this.addTags(value).forEach(function (tag) {
      return tag && tag.classList.add('tagify--noAnim');
    });
  },

  /**
   * merge two objects into a new one
   * TEST: extend({}, {a:{foo:1}, b:[]}, {a:{bar:2}, b:[1], c:()=>{}})
   */
  extend: function extend(o, o1, o2) {
    if (!(o instanceof Object)) o = {};
    copy(o, o1);
    if (o2) copy(o, o2);

    function isObject(obj) {
      var type = Object.prototype.toString.call(obj).split(' ')[1].slice(0, -1);
      return obj === Object(obj) && type != 'Array' && type != 'Function' && type != 'RegExp' && type != 'HTMLUnknownElement';
    }

    ;

    function copy(a, b) {
      // copy o2 to o
      for (var key in b) {
        if (b.hasOwnProperty(key)) {
          if (isObject(b[key])) {
            if (!isObject(a[key])) a[key] = Object.assign({}, b[key]);else copy(a[key], b[key]);
          } else a[key] = b[key];
        }
      }
    }

    return o;
  },

  /**
   * A constructor for exposing events to the outside
   */
  EventDispatcher: function EventDispatcher(instance) {
    // Create a DOM EventTarget object
    var target = document.createTextNode(''); // Pass EventTarget interface calls to DOM EventTarget object

    this.off = function (name, cb) {
      if (cb) target.removeEventListener.call(target, name, cb);
      return this;
    };

    this.on = function (name, cb) {
      if (cb) target.addEventListener.call(target, name, cb);
      return this;
    };

    this.trigger = function (eventName, data) {
      var e;
      if (!eventName) return;

      if (instance.settings.isJQueryPlugin) {
        $(instance.DOM.originalInput).triggerHandler(eventName, [data]);
      } else {
        try {
          e = new CustomEvent(eventName, {
            "detail": data
          });
        } catch (err) {
          console.warn(err);
        }

        target.dispatchEvent(e);
      }
    };
  },

  /**
   * DOM events listeners binding
   */
  events: {
    // bind custom events which were passed in the settings
    customBinding: function customBinding() {
      var _this2 = this;

      this.customEventsList.forEach(function (name) {
        _this2.on(name, _this2.settings.callbacks[name]);
      });
    },
    binding: function binding() {
      var bindUnbind = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      var _CB = this.events.callbacks,
          _CBR,
          action = bindUnbind ? 'addEventListener' : 'removeEventListener',
          editTagsEventType = this.settings.editTags == 1 ? "click_" // TODO: Refactor this crappy hack to allow same event more than once
      : this.settings.editTags == 2 ? "dblclick" : "";

      if (bindUnbind && !this.listeners.main) {
        // this event should never be unbinded
        // IE cannot register "input" events on contenteditable elements, so the "keydown" should be used instead..
        this.DOM.input.addEventListener(this.isIE ? "keydown" : "input", _CB[this.isIE ? "onInputIE" : "onInput"].bind(this));
        if (this.settings.isJQueryPlugin) $(this.DOM.originalInput).on('tagify.removeAllTags', this.removeAllTags.bind(this));
      } // setup callback references so events could be removed later


      _CBR = this.listeners.main = this.listeners.main || _defineProperty({
        paste: ['input', _CB.onPaste.bind(this)],
        focus: ['input', _CB.onFocusBlur.bind(this)],
        blur: ['input', _CB.onFocusBlur.bind(this)],
        keydown: ['input', _CB.onKeydown.bind(this)],
        click: ['scope', _CB.onClickScope.bind(this)]
      }, editTagsEventType, ['scope', _CB.onDoubleClickScope.bind(this)]); // this.settings.editTags

      for (var eventName in _CBR) {
        this.DOM[_CBR[eventName][0]][action](eventName.replace(/_/g, ''), _CBR[eventName][1]);
      } // make sure the focus/blur event is always regesitered (and never more than one)
      // TODO: Refactor this:


      this.DOM.input.removeEventListener('blur', _CBR.blur[1]);
      this.DOM.input.addEventListener('blur', _CBR.blur[1]);
    },

    /**
     * DOM events callbacks
     */
    callbacks: {
      onFocusBlur: function onFocusBlur(e) {
        var s = e.target ? e.target.textContent.trim() : ''; // a string

        if (this.settings.mode == 'mix') return;

        if (e.type == "focus") {
          this.DOM.scope.classList.add('tagify--focus');
          this.trigger("focus"); //  e.target.classList.remove('placeholder');

          if (this.settings.dropdown.enabled === 0) {
            this.dropdown.show.call(this);
          }

          return;
        } else if (e.type == "blur") {
          this.DOM.scope.classList.remove('tagify--focus');
          this.trigger("blur");
          s && this.settings.addTagOnBlur && this.addTags(s, true).length;
        } //    else{
        //  e.target.classList.add('placeholder');


        this.DOM.input.removeAttribute('style');
        this.dropdown.hide.call(this); //    }
      },
      onKeydown: function onKeydown(e) {
        var _this3 = this;

        var s = e.target.textContent.trim(),
            tags;

        if (this.settings.mode == 'mix') {
          switch (e.key) {
            case 'Delete':
            case 'Backspace':
              var values = []; // find out which tag(s) were deleted and update "this.value" accordingly

              tags = this.DOM.input.children; // a delay is in need before the node actually gets ditached from the document

              setTimeout(function () {
                // iterate over the list of tags still in the document and then filter only those from the "this.value" collection
                [].forEach.call(tags, function (tagElm) {
                  return values.push(tagElm.getAttribute('value'));
                });
                _this3.value = _this3.value.filter(function (d) {
                  return values.indexOf(d.value) != -1;
                });
              }, 20);
              break;
            // currently commented to allow new lines in mixed-mode
            // case 'Enter' :
            //     e.preventDefault(); // solves Chrome bug - http://stackoverflow.com/a/20398191/104380
          }

          return true;
        }

        switch (e.key) {
          case 'Backspace':
            if (s == "" || s.charCodeAt(0) == 8203) {
              // 8203: ZERO WIDTH SPACE unicode
              if (this.settings.backspace === true) this.removeTag();else if (this.settings.backspace == 'edit') setTimeout(this.editTag.bind(this), 0); // timeout reason: when edited tag gets focused and the caret is placed at the end, the last character gets deletec (because of backspace)
            }

            break;

          case 'Esc':
          case 'Escape':
            e.target.blur();
            break;

          case 'Down':
          case 'ArrowDown':
            if (this.settings.mode == 'select') this.dropdown.show.call(this);
            break;

          case 'ArrowRight':
          case 'Tab':
            if (!s) return true;

          case 'Enter':
            e.preventDefault(); // solves Chrome bug - http://stackoverflow.com/a/20398191/104380

            this.addTags(s, true);
        }
      },
      onInput: function onInput(e) {
        var value = this.settings.mode == 'mix' ? this.DOM.input.textContent : this.input.normalize.call(this),
            showSuggestions = value.length >= this.settings.dropdown.enabled,
            data = {
          value: value,
          inputElm: this.DOM.input
        };
        if (this.settings.mode == 'mix') return this.events.callbacks.onMixTagsInput.call(this, e);

        if (!value) {
          this.input.set.call(this, '');
          return;
        }

        if (this.input.value == value) return; // for IE; since IE doesn't have an "input" event so "keyDown" is used instead

        data.isValid = this.validateTag(value); // save the value on the input's State object

        this.input.set.call(this, value, false); // update the input with the normalized value and run validations
        // this.setRangeAtStartEnd(); // fix caret position

        if (value.search(this.settings.delimiters) != -1) {
          if (this.addTags(value).length) {
            this.input.set.call(this); // clear the input field's value
          }
        } else if (this.settings.dropdown.enabled >= 0) {
          this.dropdown[showSuggestions ? "show" : "hide"].call(this, value);
        }

        this.trigger("input", data);
      },
      onMixTagsInput: function onMixTagsInput(e) {
        var sel,
            range,
            split,
            tag,
            showSuggestions,
            eventData = {};
        if (this.maxTagsReached()) return true;

        if (window.getSelection) {
          sel = window.getSelection();

          if (sel.rangeCount > 0) {
            range = sel.getRangeAt(0).cloneRange();
            range.collapse(true);
            range.setStart(window.getSelection().focusNode, 0);
            split = range.toString().split(this.settings.mixTagsAllowedAfter); // ["foo", "bar", "@a"]

            tag = split[split.length - 1].match(this.settings.pattern);

            if (tag) {
              this.state.tag = {
                prefix: tag[0],
                value: tag.input.split(tag[0])[1]
              };
              tag = this.state.tag;
              showSuggestions = this.state.tag.value.length >= this.settings.dropdown.enabled;
            }
          }
        }

        this.update(); // wait until the "this.value" has been updated (see "onKeydown" method for "mix-mode")

        setTimeout(this.trigger.bind(this, "input", this.extend({}, this.state.tag, {
          textContent: this.DOM.input.textContent
        })), 30);

        if (this.state.tag) {
          this.dropdown[showSuggestions ? "show" : "hide"].call(this, this.state.tag.value);
        }
      },
      onInputIE: function onInputIE(e) {
        var _this = this; // for the "e.target.textContent" to be changed, the browser requires a small delay


        setTimeout(function () {
          _this.events.callbacks.onInput.call(_this, e);
        });
      },
      onPaste: function onPaste(e) {},
      onClickScope: function onClickScope(e) {
        var tagElm = e.target.closest('tag'),
            tagElmIdx;
        if (e.target.tagName == "TAGS") this.DOM.input.focus();else if (e.target.tagName == "X") {
          this.removeTag(e.target.parentNode);
          return; // for select-mode: do not continue, so the dropdown won't be shown
        } else if (tagElm) {
          tagElmIdx = this.getNodeIndex(tagElm);
          this.trigger("click", {
            tag: tagElm,
            index: tagElmIdx,
            data: this.value[tagElmIdx]
          });
        }
        if (this.settings.mode == 'select' || this.settings.dropdown.enabled === 0) this.dropdown.show.call(this);
      },
      onEditTagInput: function onEditTagInput(editableElm) {
        var tagElm = editableElm.closest('tag'),
            tagElmIdx = this.getNodeIndex(tagElm),
            value = this.input.normalize(editableElm),
            isValid = value.toLowerCase() == editableElm.originalValue.toLowerCase() || this.validateTag(value);
        tagElm.classList.toggle('tagify--invalid', isValid !== true);
        tagElm.isValid = isValid;
        this.trigger("input", {
          tag: tagElm,
          index: tagElmIdx,
          data: this.extend({}, this.value[tagElmIdx], {
            newValue: value
          })
        });
      },
      onEditTagBlur: function onEditTagBlur(editableElm) {
        var tagElm = editableElm.closest('tag'),
            tagElmIdx = this.getNodeIndex(tagElm),
            currentValue = this.input.normalize(editableElm),
            value = currentValue || editableElm.originalValue,
            hasChanged = this.input.normalize(editableElm) != editableElm.originalValue,
            isValid = tagElm.isValid,
            tagData = _objectSpread({}, this.value[tagElmIdx], {
          value: value
        });

        this.DOM.input.focus();

        if (!currentValue) {
          this.removeTag(tagElm);
          return;
        }

        if (hasChanged) {
          this.settings.transformTag.call(this, tagData); // re-validate after tag transformation

          isValid = this.validateTag(tagData.value);
        } else {
          this.editTagDone(tagElm);
          return;
        }

        if (isValid !== undefined && isValid !== true) return;
        this.editTagDone(tagElm, tagData);
        this.trigger("edit", {
          tag: tagElm,
          index: tagElmIdx,
          data: this.value[tagElmIdx]
        });
      },
      onEditTagkeydown: function onEditTagkeydown(e) {
        switch (e.key) {
          case 'Esc':
          case 'Escape':
            e.target.textContent = e.target.originalValue;

          case 'Enter':
          case 'Tab':
            e.preventDefault();
            e.target.blur();
        }
      },
      onDoubleClickScope: function onDoubleClickScope(e) {
        var tagElm = e.target.closest('tag'),
            _s = this.settings,
            isEditingTag,
            isReadyOnlyTag;
        if (!tagElm) return;
        isEditingTag = tagElm.classList.contains('tagify--editable'), isReadyOnlyTag = tagElm.hasAttribute('readonly');
        if (_s.mode != 'mix' && _s.mode != 'select' && !_s.readonly && !_s.enforceWhitelist && !isEditingTag && !isReadyOnlyTag) this.editTag(tagElm);
      }
    }
  },

  /**
   * @param {Node} tagElm the tag element to edit. if nothing specified, use last last
   */
  editTag: function editTag() {
    var _this4 = this;

    var tagElm = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getLastTag();
    var editableElm = tagElm.querySelector('.tagify__tag-text'),
        _CB = this.events.callbacks;

    if (!editableElm) {
      console.warn('Cannot find element in Tag template: ', '.tagify__tag-text');
      return;
    }

    tagElm.classList.add('tagify--editable');
    editableElm.originalValue = editableElm.textContent;
    editableElm.setAttribute('contenteditable', true);
    editableElm.addEventListener('blur', _CB.onEditTagBlur.bind(this, editableElm));
    editableElm.addEventListener('input', _CB.onEditTagInput.bind(this, editableElm));
    editableElm.addEventListener('keydown', function (e) {
      return _CB.onEditTagkeydown.call(_this4, e);
    });
    editableElm.focus();
    this.setRangeAtStartEnd(false, editableElm);
    return this;
  },

  /**
   * Exit a tag's edit-mode
   */
  editTagDone: function editTagDone(tagElm, tagData) {
    var editableElm = tagElm.querySelector('.tagify__tag-text'),
        clone = editableElm.cloneNode(true),
        tagElmIdx; // update DOM nodes

    clone.removeAttribute('contenteditable');
    tagElm.classList.remove('tagify--editable'); // guarantee to remove all events which were added by the "editTag" method

    editableElm.parentNode.replaceChild(clone, editableElm); // continue only if there was a reason for it

    if (tagData) {
      editableElm.textContent = tagData.value;
      tagElm.title = tagData.value; // update data

      tagElmIdx = this.getNodeIndex(tagElm);
      this.value[tagElmIdx].value = tagData.value;
      this.update();
    }
  },
  // https://stackoverflow.com/a/3866442/104380
  setRangeAtStartEnd: function setRangeAtStartEnd(start, node) {
    var range, selection;
    if (!document.createRange) return;
    range = document.createRange();
    range.selectNodeContents(node || this.DOM.input);
    range.collapse(!!start);
    selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  },

  /**
   * input bridge for accessing & setting
   * @type {Object}
   */
  input: {
    value: '',
    set: function set() {
      var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var updateDOM = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var caretAtEnd = arguments.length > 2 ? arguments[2] : undefined;
      var hideDropdown = this.settings.dropdown.enabled > 0 || this.settings.dropdown.closeOnSelect;
      this.input.value = s;
      if (updateDOM) this.DOM.input.innerHTML = s;
      if (!s && hideDropdown) setTimeout(this.dropdown.hide.bind(this), 20); // setTimeout duration must be HIGER than the dropdown's item "onClick" method's "focus()" event, because the "hide" method re-binds the main events and it will catch the "blur" event and will cause

      this.input.autocomplete.suggest.call(this, '');
      this.input.validate.call(this); //  if( caretAtEnd )
      //     setTimeout(this.setRangeAtStartEnd.bind(this), 50)
    },

    /**
     * Marks the tagify's input as "invalid" if the value did not pass "validateTag()"
     */
    validate: function validate() {
      var isValid = !this.input.value || this.validateTag(this.input.value);
      if (this.settings.mode == 'select') this.DOM.scope.classList.toggle('tagify--invalid', isValid !== true);else this.DOM.input.classList.toggle('tagify__input--invalid', isValid !== true);
    },
    // remove any child DOM elements that aren't of type TEXT (like <br>)
    normalize: function normalize() {
      var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.DOM.input;
      var clone = node,
          //.cloneNode(true),
      v = clone.innerText;
      if ("settings" in this && this.settings.delimiters) v = v.replace(/(?:\r\n|\r|\n)/g, this.settings.delimiters.source.charAt(1));
      v = v.replace(/\s/g, ' ') // replace NBSPs with spaces characters
      .replace(/^\s+/, ""); // trimLeft

      return v;
    },

    /**
     * suggest the rest of the input's value (via CSS "::after" using "content:attr(...)")
     * @param  {String} s [description]
     */
    autocomplete: {
      suggest: function suggest(s) {
        if (!s || !this.input.value) this.DOM.input.removeAttribute("data-suggest");else this.DOM.input.setAttribute("data-suggest", s.substring(this.input.value.length));
      },
      set: function set(s) {
        var dataSuggest = this.DOM.input.getAttribute('data-suggest'),
            suggestion = s || (dataSuggest ? this.input.value + dataSuggest : null);

        if (suggestion) {
          if (this.settings.mode == 'mix') {
            this.replaceTaggedText(document.createTextNode(this.state.tag.prefix + suggestion));
          } else {
            this.input.set.call(this, suggestion);
            this.setRangeAtStartEnd();
          }

          this.input.autocomplete.suggest.call(this, '');
          this.dropdown.hide.call(this);
          return true;
        }

        return false; // if( suggestion && this.addTags(this.input.value + suggestion).length ){
        //     this.input.set.call(this);
        //     this.dropdown.hide.call(this);
        // }
      }
    }
  },
  getNodeIndex: function getNodeIndex(node) {
    var index = 0;
    if (node) while (node = node.previousElementSibling) {
      index++;
    }
    return index;
  },
  getTagElms: function getTagElms() {
    return this.DOM.scope.querySelectorAll('tag');
  },
  getLastTag: function getLastTag() {
    var lastTag = this.DOM.scope.querySelectorAll('tag:not(.tagify--hide):not([readonly])');
    return lastTag[lastTag.length - 1];
  },

  /**
   * Searches if any tag with a certain value already exis
   * @param  {String/Object} v [text value / tag data object]
   * @return {Boolean}
   */
  isTagDuplicate: function isTagDuplicate(v) {
    // duplications are irrelevant for this scenario
    if (this.settings.mode == 'select') return false;
    return this.value.some(function (item) {
      return typeof v == 'string' ? v.trim().toLowerCase() === item.value.toLowerCase() : JSON.stringify(item).toLowerCase() === JSON.stringify(v).toLowerCase();
    });
  },
  getTagIndexByValue: function getTagIndexByValue(value) {
    var result = [];
    this.getTagElms().forEach(function (tagElm, i) {
      if (tagElm.textContent.trim().toLowerCase() == value.toLowerCase()) result.push(i);
    });
    return result;
  },
  getTagElmByValue: function getTagElmByValue(value) {
    var tagIdx = this.getTagIndexByValue(value)[0];
    return this.getTagElms()[tagIdx];
  },

  /**
   * Mark a tag element by its value
   * @param  {String / Number} value  [text value to search for]
   * @param  {Object}          tagElm [a specific "tag" element to compare to the other tag elements siblings]
   * @return {boolean}                [found / not found]
   */
  markTagByValue: function markTagByValue(value, tagElm) {
    var tagsElms, tagsElmsLen;
    tagElm = tagElm || this.getTagElmByValue(value); // check AGAIN if "tagElm" is defined

    if (tagElm) {
      tagElm.classList.add('tagify--mark'); //   setTimeout(() => { tagElm.classList.remove('tagify--mark') }, 100);

      return tagElm;
    }

    return false;
  },

  /**
   * make sure the tag, or words in it, is not in the blacklist
   */
  isTagBlacklisted: function isTagBlacklisted(v) {
    v = v.toLowerCase().trim();
    return this.settings.blacklist.filter(function (x) {
      return v == x.toLowerCase();
    }).length;
  },

  /**
   * make sure the tag, or words in it, is not in the blacklist
   */
  isTagWhitelisted: function isTagWhitelisted(v) {
    return this.settings.whitelist.some(function (item) {
      return typeof v == 'string' ? v.trim().toLowerCase() === (item.value || item).toLowerCase() : JSON.stringify(item).toLowerCase() === JSON.stringify(v).toLowerCase();
    });
  },

  /**
   * validate a tag object BEFORE the actual tag will be created & appeneded
   * @param  {String} s
   * @return {Boolean/String}  ["true" if validation has passed, String for a fail]
   */
  validateTag: function validateTag(s) {
    var value = s.trim(),
        result = true; // check for empty value

    if (!value) result = this.TEXTS.empty; // check if pattern should be used and if so, use it to test the value
    else if (this.settings.pattern && !this.settings.pattern.test(value)) result = this.TEXTS.pattern; // if duplicates are not allowed and there is a duplicate
      else if (!this.settings.duplicates && this.isTagDuplicate(value)) result = this.TEXTS.duplicate;else if (this.isTagBlacklisted(value) || this.settings.enforceWhitelist && !this.isTagWhitelisted(value)) result = this.TEXTS.notAllowed;
    return result;
  },
  maxTagsReached: function maxTagsReached() {
    if (this.value.length >= this.settings.maxTags) return this.TEXTS.exceed;
    return false;
  },

  /**
   * pre-proccess the tagsItems, which can be a complex tagsItems like an Array of Objects or a string comprised of multiple words
   * so each item should be iterated on and a tag created for.
   * @return {Array} [Array of Objects]
   */
  normalizeTags: function normalizeTags(tagsItems) {
    var _this$settings = this.settings,
        whitelist = _this$settings.whitelist,
        delimiters = _this$settings.delimiters,
        mode = _this$settings.mode,
        whitelistWithProps = whitelist ? whitelist[0] instanceof Object : false,
        isCollection = tagsItems instanceof Array && tagsItems[0] instanceof Object && "value" in tagsItems[0],
        temp = [],
        mapStringToCollection = function mapStringToCollection(s) {
      return s.split(delimiters).filter(function (n) {
        return n;
      }).map(function (v) {
        return {
          value: v.trim()
        };
      });
    }; // no need to continue if "tagsItems" is an Array of Objects


    if (isCollection) {
      var _ref2;

      // iterate the collection items and check for values that can be splitted into multiple tags
      tagsItems = (_ref2 = []).concat.apply(_ref2, _toConsumableArray(tagsItems.map(function (item) {
        return mapStringToCollection(item.value).map(function (newItem) {
          return _objectSpread({}, item, {}, newItem);
        });
      })));
      return tagsItems;
    }

    if (typeof tagsItems == 'number') tagsItems = tagsItems.toString(); // if the value is a "simple" String, ex: "aaa, bbb, ccc"

    if (typeof tagsItems == 'string') {
      if (!tagsItems.trim()) return []; // go over each tag and add it (if there were multiple ones)

      tagsItems = mapStringToCollection(tagsItems);
    } else if (!isCollection && tagsItems instanceof Array) {
      var _ref3;

      tagsItems = (_ref3 = []).concat.apply(_ref3, _toConsumableArray(tagsItems.map(function (item) {
        return mapStringToCollection(item);
      })));
    } // search if the tag exists in the whitelist as an Object (has props), to be able to use its properties


    if (whitelistWithProps) {
      tagsItems.forEach(function (item) {
        var matchObj = whitelist.filter(function (WL_item) {
          return WL_item.value.toLowerCase() == item.value.toLowerCase();
        });
        if (matchObj[0]) temp.push(matchObj[0]); // set the Array (with the found Object) as the new value
        else if (mode != 'mix') temp.push(item);
      });
      tagsItems = temp;
    }

    return tagsItems;
  },

  /**
   * Used to parse the initial value of a textarea (or input) element and gemerate mixed text w/ tags
   * https://stackoverflow.com/a/57598892/104380
   * @param {String} s
   */
  parseMixTags: function parseMixTags(s) {
    var _this5 = this;

    var tagData,
        _this$settings2 = this.settings,
        mixTagsInterpolator = _this$settings2.mixTagsInterpolator,
        duplicates = _this$settings2.duplicates,
        transformTag = _this$settings2.transformTag;
    s = s.split(mixTagsInterpolator[0]).map(function (s1) {
      var s2 = s1.split(mixTagsInterpolator[1]),
          preInterpolated = s2[0],
          tagData,
          tagElm;

      try {
        tagData = JSON.parse(preInterpolated);
      } catch (err) {
        tagData = _this5.normalizeTags(preInterpolated)[0]; //{value:preInterpolated}
      }

      if (s2.length > 1 && _this5.isTagWhitelisted(tagData.value) && (!duplicates || !_this5.isTagDuplicate(tagData))) {
        transformTag.call(_this5, tagData);
        tagElm = _this5.createTagElem(tagData);
        s2[0] = tagElm.outerHTML; //+ "&#8288;"  // put a zero-space at the end so the caret won't jump back to the start (when the last input's child element is a tag)

        _this5.value.push(tagData);
      }

      return s2.join('');
    }).join('');
    this.DOM.input.innerHTML = s;
    this.update();
    return s;
  },

  /**
   * For mixed-mode: replaces a text starting with a prefix with a wrapper element (tag or something)
   * First there *has* to be a "this.state.tag" which is a string that was just typed and is staring with a prefix
   */
  replaceTaggedText: function replaceTaggedText(wrapperElm) {
    if (!this.state.tag) return;
    var tag = this.state.tag.prefix + this.state.tag.value,
        iter = document.createNodeIterator(this.DOM.input, NodeFilter.SHOW_TEXT, null, false),
        textnode,
        idx,
        maxLoops = 100,
        replacedNode;

    while (textnode = iter.nextNode()) {
      if (!maxLoops--) break;

      if (textnode.nodeType === Node.TEXT_NODE) {
        // get the index of which the tag (string) is within the textNode (if at all)
        idx = textnode.nodeValue.indexOf(tag);
        if (idx == -1) continue;
        replacedNode = textnode.splitText(idx); // clean up the tag's string and put tag element instead

        replacedNode.nodeValue = replacedNode.nodeValue.replace(tag, '');
        textnode.parentNode.insertBefore(wrapperElm, replacedNode);
      }
    }

    this.state.tag = null;
    return replacedNode;
  },

  /**
   * add an empty "tag" element in an editable state
   */
  addEmptyTag: function addEmptyTag() {
    var tagData = {
      value: ""
    },
        tagElm = this.createTagElem(tagData); // add the tag to the component's DOM

    this.appendTag.call(this, tagElm);
    this.value.push(tagData);
    this.update();
    this.editTag(tagElm);
  },

  /**
   * add a "tag" element to the "tags" component
   * @param {String/Array} tagsItems   [A string (single or multiple values with a delimiter), or an Array of Objects or just Array of Strings]
   * @param {Boolean}      clearInput  [flag if the input's value should be cleared after adding tags]
   * @param {Boolean}      skipInvalid [do not add, mark & remove invalid tags]
   * @return {Array} Array of DOM elements (tags)
   */
  addTags: function addTags(tagsItems, clearInput) {
    var _this6 = this;

    var skipInvalid = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.settings.skipInvalid;
    var tagElems = [],
        tagElm;

    if (!tagsItems || tagsItems.length == 0) {
      // is mode is "select" clean all tags
      if (this.settings.mode == 'select') this.removeAllTags(); // console.warn('[addTags]', 'no tags to add:', tagsItems)

      return tagElems;
    }

    tagsItems = this.normalizeTags.call(this, tagsItems); // converts Array/String/Object to an Array of Objects

    if (this.settings.mode == 'mix') {
      this.settings.transformTag.call(this, tagsItems[0]);
      tagElm = this.createTagElem(tagsItems[0]);

      if (this.replaceTaggedText(tagElm)) {
        this.value.push(tagsItems[0]);
        this.update();
        this.trigger('add', this.extend({}, {
          index: this.value.length,
          tag: tagElm
        }, tagsItems[0]));
      }

      return tagElm;
    }

    if (this.settings.mode == 'select') tagsItems.length = 1; // only use the first tag

    this.DOM.input.removeAttribute('style');
    tagsItems.forEach(function (tagData) {
      var tagValidation,
          tagElm,
          tagElmParams = {}; // shallow-clone tagData so later modifications will not apply to the source

      tagData = Object.assign({}, tagData);

      _this6.settings.transformTag.call(_this6, tagData); ///////////////// ( validation )//////////////////////


      tagValidation = _this6.maxTagsReached() || _this6.validateTag(tagData.value);

      if (tagValidation !== true) {
        if (skipInvalid) return;
        tagElmParams["aria-invalid"] = true;
        tagElmParams["class"] = (tagData["class"] || '') + ' tagify--notAllowed';
        tagElmParams.title = tagValidation;

        _this6.markTagByValue(tagData.value);

        _this6.trigger("invalid", {
          data: tagData,
          index: _this6.value.length,
          message: tagValidation
        });
      } ///////////////////////////)//////////////////////////
      // add accessibility attributes


      tagElmParams.role = "tag";
      if (tagData.readonly) tagElmParams["aria-readonly"] = true; // Create tag HTML element

      tagElm = _this6.createTagElem(_this6.extend({}, tagData, tagElmParams));
      tagElems.push(tagElm); // mode-select overrides

      if (_this6.settings.mode == 'select') {
        if (_this6.settings.dropdown.closeOnSelect) {
          _this6.dropdown.hide.call(_this6);

          _this6.events.callbacks.onFocusBlur.call(_this6, {
            type: "blur"
          });
        }

        clearInput = false;

        _this6.input.set.call(_this6, tagData.value, true, true);

        if (_this6.getLastTag()) {
          // update current tag
          _this6.editTagDone(_this6.getLastTag(), tagData);

          _this6.value[0] = tagData;

          _this6.update();

          _this6.trigger('add', {
            tag: tagElm,
            data: tagData
          });

          return [tagElm];
        }
      } // add the tag to the component's DOM


      _this6.appendTag(tagElm);

      if (tagValidation === true) {
        // update state
        _this6.value.push(tagData);

        _this6.update();

        _this6.trigger('add', {
          tag: tagElm,
          index: _this6.value.length - 1,
          data: tagData
        });
      } else if (!_this6.settings.keepInvalidTags) {
        // remove invalid tags (if "keepInvalidTags" is set to "false")
        setTimeout(function () {
          _this6.removeTag(tagElm, true);
        }, 1000);
      }

      _this6.dropdown.position.call(_this6); // reposition the dropdown because the just-added tag might cause a new-line

    });

    if (tagsItems.length && clearInput) {
      this.input.set.call(this);
    }

    return tagElems;
  },

  /**
   * appened (validated) tag to the component's DOM scope
   * @return {[type]} [description]
   */
  appendTag: function appendTag(tagElm) {
    var insertBeforeNode = this.DOM.scope.lastElementChild;
    if (insertBeforeNode === this.DOM.input) this.DOM.scope.insertBefore(tagElm, insertBeforeNode);else this.DOM.scope.appendChild(tagElm);
  },
  minify: function minify(html) {
    return html.replace(new RegExp("\>[\r\n ]+\<", "g"), "><");
  },

  /**
   * creates a DOM tag element and injects it into the component (this.DOM.scope)
   * @param  {Object}  tagData [text value & properties for the created tag]
   * @return {Object} [DOM element]
   */
  createTagElem: function createTagElem(tagData) {
    var tagElm,
        v = this.escapeHTML(tagData.value),
        template = this.settings.templates.tag.call(this, v, tagData);
    if (this.settings.readonly) tagData.readonly = true;
    template = this.minify(template);
    tagElm = this.parseHTML(template);
    return tagElm;
  },

  /**
   * Removes a tag
   * @param  {Object|String}  tagElm          [DOM element or a String value. if undefined or null, remove last added tag]
   * @param  {Boolean}        silent          [A flag, which when turned on, does not removes any value and does not update the original input value but simply removes the tag from tagify]
   * @param  {Number}         tranDuration    [Transition duration in MS]
   */
  removeTag: function removeTag() {
    var tagElm = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getLastTag();
    var silent = arguments.length > 1 ? arguments[1] : undefined;
    var tranDuration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 250;
    if (typeof tagElm == 'string') tagElm = this.getTagElmByValue(tagElm);
    if (!(tagElm instanceof HTMLElement)) return;
    var tagData,
        that = this,
        tagIdx = this.getNodeIndex(tagElm); // this.getTagIndexByValue(tagElm.textContent)

    if (this.settings.mode == 'select') {
      tranDuration = 0;
      this.input.set.call(this);
    }

    if (tagElm.classList.contains('tagify--notAllowed')) silent = true;

    function removeNode() {
      if (!tagElm.parentNode) return;
      tagElm.parentNode.removeChild(tagElm);

      if (!silent) {
        tagData = that.value.splice(tagIdx, 1)[0]; // remove the tag from the data object

        that.update(); // update the original input with the current value

        that.trigger('remove', {
          tag: tagElm,
          index: tagIdx,
          data: tagData
        });
        that.dropdown.render.call(that);
        that.dropdown.position.call(that);
      } else if (that.settings.keepInvalidTags) that.trigger('remove', {
        tag: tagElm,
        index: tagIdx
      });
    }

    function animation() {
      tagElm.style.width = parseFloat(window.getComputedStyle(tagElm).width) + 'px';
      document.body.clientTop; // force repaint for the width to take affect before the "hide" class below

      tagElm.classList.add('tagify--hide'); // manual timeout (hack, since transitionend cannot be used because of hover)

      setTimeout(removeNode, 400);
    }

    if (tranDuration && tranDuration > 10) animation();else removeNode();
  },
  removeAllTags: function removeAllTags() {
    this.value = [];
    this.update();
    Array.prototype.slice.call(this.getTagElms()).forEach(function (elm) {
      return elm.parentNode.removeChild(elm);
    });
    this.dropdown.position.call(this);
  },
  getAttributes: function getAttributes(data) {
    // only items which are objects have properties which can be used as attributes
    if (Object.prototype.toString.call(data) != "[object Object]") return '';
    var keys = Object.keys(data),
        s = "",
        propName,
        i;

    for (i = keys.length; i--;) {
      propName = keys[i];
      if (propName != 'class' && data.hasOwnProperty(propName) && data[propName]) s += " " + propName + (data[propName] ? "=\"".concat(data[propName], "\"") : "");
    }

    return s;
  },
  preUpdate: function preUpdate() {
    this.DOM.scope.classList.toggle('hasMaxTags', this.value.length >= this.settings.maxTags);
  },

  /**
   * update the origianl (hidden) input field's value
   * see - https://stackoverflow.com/q/50957841/104380
   */
  update: function update() {
    this.preUpdate();
    this.DOM.originalInput.value = this.settings.mode == 'mix' ? this.getMixedTagsAsString() : this.value.length ? JSON.stringify(this.value) : "";
  },
  getMixedTagsAsString: function getMixedTagsAsString() {
    var _this7 = this;

    var result = "",
        i = 0,
        _interpolator = this.settings.mixTagsInterpolator;
    this.DOM.input.childNodes.forEach(function (node) {
      if (node.nodeType == 1 && node.classList.contains("tagify__tag")) result += _interpolator[0] + JSON.stringify(_this7.value[i++]) + _interpolator[1];else result += node.textContent;
    });
    return result;
  },

  /**
   * Dropdown controller
   * @type {Object}
   */
  dropdown: {
    init: function init() {
      this.DOM.dropdown = this.dropdown.build.call(this);
    },
    build: function build() {
      var _this$settings$dropdo = this.settings.dropdown,
          position = _this$settings$dropdo.position,
          classname = _this$settings$dropdo.classname,
          _className = "".concat(position == 'manual' ? "" : "tagify__dropdown", " ").concat(classname).trim(),
          template = "<div class=\"".concat(_className, "\" role=\"menu\"></div>");

      return this.parseHTML(template);
    },
    show: function show(value) {
      var listHTML,
          _s = this.settings,
          firstListItem,
          firstListItemValue,
          isManual = _s.dropdown.position == 'manual';
      if (!_s.whitelist.length) return; // if no value was supplied, show all the "whitelist" items in the dropdown
      // @type [Array] listItems
      // TODO: add a Setting to control items' sort order for "listItems"

      this.suggestedListItems = this.dropdown.filterListItems.call(this, value); // hide suggestions list if no suggestions were matched

      if (this.suggestedListItems.length) {
        firstListItem = this.suggestedListItems[0];
        firstListItemValue = firstListItem.value || firstListItem;

        if (this.settings.autoComplete) {
          // only fill the sugegstion if the value of the first list item STARTS with the input value (regardless of "fuzzysearch" setting)
          if (firstListItemValue.indexOf(value) == 0) this.input.autocomplete.suggest.call(this, firstListItemValue);
        }
      } else {
        this.input.autocomplete.suggest.call(this);
        this.dropdown.hide.call(this);
        return;
      }

      listHTML = this.dropdown.createListHTML.call(this, this.suggestedListItems);
      this.DOM.dropdown.innerHTML = this.minify(listHTML); // if "enforceWhitelist" is "true", highlight the first suggested item

      if (_s.enforceWhitelist && !isManual || _s.dropdown.highlightFirst) this.dropdown.highlightOption.call(this, this.DOM.dropdown.children[0]);
      this.DOM.scope.setAttribute("aria-expanded", true);
      this.trigger("dropdown:show", this.DOM.dropdown); // if the dropdown has yet to be appended to the document,
      // append the dropdown to the body element & handle events

      if (!document.body.contains(this.DOM.dropdown)) {
        if (!isManual) {
          this.dropdown.position.call(this);
          document.body.appendChild(this.DOM.dropdown);
          this.events.binding.call(this, false); // unbind the main events
        }

        this.dropdown.events.binding.call(this);
      }
    },
    hide: function hide(force) {
      var _this$DOM = this.DOM,
          scope = _this$DOM.scope,
          dropdown = _this$DOM.dropdown,
          isManual = this.settings.dropdown.position == 'manual' && !force;
      if (!dropdown || !document.body.contains(dropdown) || isManual) return;
      window.removeEventListener('resize', this.dropdown.position);
      this.dropdown.events.binding.call(this, false); // unbind all events
      // must delay because if the dropdown is open, and the input (scope) is clicked,
      // the dropdown should be now closed, and the next click should re-open it,
      // and without this timeout, clicking to close will re-open immediately

      setTimeout(this.events.binding.bind(this), 250); // re-bind main events

      scope.setAttribute("aria-expanded", false);
      dropdown.parentNode.removeChild(dropdown);
      this.trigger("dropdown:hide", dropdown);
    },

    /**
     * renders data into the suggestions list (mainly used to update the list when removing tags, so they will be re-added to the list. not efficient)
     */
    render: function render() {
      this.suggestedListItems = this.dropdown.filterListItems.call(this, '');
      var listHTML = this.dropdown.createListHTML.call(this, this.suggestedListItems);
      this.DOM.dropdown.innerHTML = this.minify(listHTML);
    },
    position: function position() {
      var rect = this.DOM.scope.getBoundingClientRect();
      this.DOM.dropdown.style.cssText = "left: " + (rect.left + window.pageXOffset) + "px; \
                                               top: " + (rect.top + rect.height - 1 + window.pageYOffset) + "px; \
                                               width: " + rect.width + "px";
    },

    /**
     * @type {Object}
     */
    events: {
      /**
       * Events should only be binded when the dropdown is rendered and removed when isn't
       * @param  {Boolean} bindUnbind [optional. true when wanting to unbind all the events]
       * @return {[type]}             [description]
       */
      binding: function binding() {
        var bindUnbind = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        // references to the ".bind()" methods must be saved so they could be unbinded later
        var _CB = this.dropdown.events.callbacks,
            _CBR = this.listeners.dropdown = this.listeners.dropdown || {
          position: this.dropdown.position.bind(this),
          onKeyDown: _CB.onKeyDown.bind(this),
          onMouseOver: _CB.onMouseOver.bind(this),
          onMouseLeave: _CB.onMouseLeave.bind(this),
          onClick: _CB.onClick.bind(this)
        },
            action = bindUnbind ? 'addEventListener' : 'removeEventListener';

        if (this.settings.dropdown.position != 'manual') {
          window[action]('resize', _CBR.position);
          window[action]('keydown', _CBR.onKeyDown);
        }

        window[action]('mousedown', _CBR.onClick);
        this.DOM.dropdown[action]('mouseover', _CBR.onMouseOver);
        this.DOM.dropdown[action]('mouseleave', _CBR.onMouseLeave); //  this.DOM.dropdown[action]('click', _CBR.onClick);
        // add the main "click" event back because it is needed for removing/clicking already existing tags, even if dropdown is shown

        this.DOM[this.listeners.main.click[0]][action]('click', this.listeners.main.click[1]);
      },
      callbacks: {
        onKeyDown: function onKeyDown(e) {
          var _this8 = this;

          // get the "active" element, and if there was none (yet) active, use first child
          var activeListElm = this.DOM.dropdown.querySelector("[class$='--active']"),
              selectedElm = activeListElm,
              newValue = "";

          switch (e.key) {
            case 'ArrowDown':
            case 'ArrowUp':
            case 'Down': // >IE11

            case 'Up':
              // >IE11
              e.preventDefault();
              if (selectedElm) selectedElm = selectedElm[(e.key == 'ArrowUp' || e.key == 'Up' ? "previous" : "next") + "ElementSibling"]; // if no element was found, loop

              if (!selectedElm) selectedElm = this.DOM.dropdown.children[e.key == 'ArrowUp' || e.key == 'Up' ? this.DOM.dropdown.children.length - 1 : 0];
              this.dropdown.highlightOption.call(this, selectedElm, true);
              break;

            case 'Escape':
            case 'Esc':
              // IE11
              this.dropdown.hide.call(this);
              break;

            case 'ArrowRight':
            case 'Tab':
              {
                e.preventDefault();

                try {
                  var value = selectedElm ? selectedElm.textContent : this.suggestedListItems[0].value;
                  this.input.autocomplete.set.call(this, value);
                } catch (err) {}

                return false;
              }

            case 'Enter':
              {
                e.preventDefault();
                var hideDropdown = this.settings.dropdown.enabled || this.settings.dropdown.closeOnSelect;

                if (activeListElm) {
                  newValue = this.suggestedListItems[this.getNodeIndex(activeListElm)] || this.input.value;
                  this.trigger("dropdown:select", newValue);
                  this.addTags([newValue], true);
                  this.dropdown[hideDropdown ? 'hide' : 'show'].call(this);
                  if (this.settings.mode == 'select') setTimeout(function () {
                    return _this8.DOM.input.blur();
                  });
                  return false;
                } else {
                  this.addTags(this.input.value, true);
                }

                break;
              }

            case 'Backspace':
              {
                if (this.settings.mode == 'mix') return;
                var value = this.input.value.trim();

                if (value == "" || value.charCodeAt(0) == 8203) {
                  if (this.settings.backspace === true) this.removeTag();else if (this.settings.backspace == 'edit') setTimeout(this.editTag.bind(this), 0);
                }
              }
          }
        },
        onMouseOver: function onMouseOver(e) {
          // event delegation check
          if (e.target.className.includes('__item')) this.dropdown.highlightOption.call(this, e.target);
        },
        onMouseLeave: function onMouseLeave(e) {
          // de-highlight any previously highlighted option
          this.dropdown.highlightOption.call(this);
        },
        onClick: function onClick(e) {
          var _this9 = this;

          var value, listItemElm;
          if (e.button != 0 || e.target == this.DOM.dropdown) return; // allow only mouse left-clicks

          listItemElm = e.target.closest(".tagify__dropdown__item");

          if (listItemElm) {
            // make sure the list item belongs to this context of the Tagify instance (and not some other instance's manual suggestions list)
            if (listItemElm.parentNode !== this.DOM.dropdown) return;
            value = this.suggestedListItems[this.getNodeIndex(listItemElm)] || this.input.value;
            this.trigger("dropdown:select", value);
            this.addTags([value], true);
            if (this.settings.mode != 'select') setTimeout(function () {
              return _this9.DOM.input.focus();
            });
            if (this.settings.dropdown.closeOnSelect) this.dropdown.hide.call(this);
          } // clicked outside, close the list
          else {
              this.dropdown.hide.call(this); // if closest element is NOT "tagify", remove "focus" class

              if (!e.target.closest(".tagify")) this.events.callbacks.onFocusBlur.call(this, {
                type: 'blur',
                target: this.DOM.input
              });
            }
        }
      }
    },
    highlightOption: function highlightOption(elm, adjustScroll) {
      var className = "tagify__dropdown__item--active",
          value; // focus casues a bug in Firefox with the placeholder been shown on the input element
      // if( this.settings.dropdown.position != 'manual' )
      //     elm.focus();

      this.DOM.dropdown.querySelectorAll("[class$='--active']").forEach(function (activeElm) {
        activeElm.classList.remove(className);
        activeElm.removeAttribute("aria-selected");
      });

      if (!elm) {
        this.input.autocomplete.suggest.call(this);
        return;
      } // this.DOM.dropdown.querySelectorAll("[class$='--active']").forEach(activeElm => activeElm.classList.remove(className));


      elm.classList.add(className);
      elm.setAttribute("aria-selected", true);
      if (adjustScroll) elm.parentNode.scrollTop = elm.clientHeight + elm.offsetTop - elm.parentNode.clientHeight; // set the first item from the suggestions list as the autocomplete value

      if (this.settings.autoComplete) {
        value = this.suggestedListItems[this.getNodeIndex(elm)].value || this.input.value;
        this.input.autocomplete.suggest.call(this, value);
      }
    },

    /**
     * returns an HTML string of the suggestions' list items
     * @return {[type]} [description]
     */
    filterListItems: function filterListItems(value) {
      var _this10 = this;

      var list = [],
          whitelist = this.settings.whitelist,
          suggestionsCount = this.settings.dropdown.maxItems || Infinity,
          whitelistItem,
          valueIsInWhitelist,
          whitelistItemValueIndex,
          searchBy,
          isDuplicate,
          i = 0;

      if (!value) {
        return whitelist.filter(function (item) {
          return !_this10.isTagDuplicate(item.value || item);
        }) // don't include tags which have already been added.
        .slice(0, suggestionsCount); // respect "maxItems" dropdown setting
      }

      for (; i < whitelist.length; i++) {
        whitelistItem = whitelist[i] instanceof Object ? whitelist[i] : {
          value: whitelist[i]
        }; //normalize value as an Object

        searchBy = ((whitelistItem.searchBy || '') + ' ' + whitelistItem.value).toLowerCase();
        whitelistItemValueIndex = searchBy.indexOf(value.toLowerCase());
        valueIsInWhitelist = this.settings.dropdown.fuzzySearch ? whitelistItemValueIndex >= 0 : whitelistItemValueIndex == 0;
        isDuplicate = !this.settings.duplicates && this.isTagDuplicate(whitelistItem.value); // match for the value within each "whitelist" item

        if (valueIsInWhitelist && !isDuplicate && suggestionsCount--) list.push(whitelistItem);
        if (suggestionsCount == 0) break;
      }

      return list;
    },

    /**
     * Creates the dropdown items' HTML
     * @param  {Array} list  [Array of Objects]
     * @return {String}
     */
    createListHTML: function createListHTML(list) {
      var getItem = this.settings.templates.dropdownItem.bind(this);
      return list.map(getItem).join("");
    }
  }
};
return Tagify;
}));

/*!
 * bsCustomFileInput v1.3.2 (https://github.com/Johann-S/bs-custom-file-input)
 * Copyright 2018 - 2019 Johann-S <johann.servoire@gmail.com>
 * Licensed under MIT (https://github.com/Johann-S/bs-custom-file-input/blob/master/LICENSE)
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.bsCustomFileInput = factory());
}(this, function () { 'use strict';

  var Selector = {
    CUSTOMFILE: '.custom-file input[type="file"]',
    CUSTOMFILELABEL: '.custom-file-label',
    FORM: 'form',
    INPUT: 'input'
  };

  var textNodeType = 3;

  var getDefaultText = function getDefaultText(input) {
    var defaultText = '';
    var label = input.parentNode.querySelector(Selector.CUSTOMFILELABEL);

    if (label) {
      defaultText = label.innerHTML;
    }

    return defaultText;
  };

  var findFirstChildNode = function findFirstChildNode(element) {
    if (element.childNodes.length > 0) {
      var childNodes = [].slice.call(element.childNodes);

      for (var i = 0; i < childNodes.length; i++) {
        var node = childNodes[i];

        if (node.nodeType !== textNodeType) {
          return node;
        }
      }
    }

    return element;
  };

  var restoreDefaultText = function restoreDefaultText(input) {
    var defaultText = input.bsCustomFileInput.defaultText;
    var label = input.parentNode.querySelector(Selector.CUSTOMFILELABEL);

    if (label) {
      var element = findFirstChildNode(label);
      element.innerHTML = defaultText;
    }
  };

  var fileApi = !!window.File;
  var FAKE_PATH = 'fakepath';
  var FAKE_PATH_SEPARATOR = '\\';

  var getSelectedFiles = function getSelectedFiles(input) {
    if (input.hasAttribute('multiple') && fileApi) {
      return [].slice.call(input.files).map(function (file) {
        return file.name;
      }).join(', ');
    }

    if (input.value.indexOf(FAKE_PATH) !== -1) {
      var splittedValue = input.value.split(FAKE_PATH_SEPARATOR);
      return splittedValue[splittedValue.length - 1];
    }

    return input.value;
  };

  function handleInputChange() {
    var label = this.parentNode.querySelector(Selector.CUSTOMFILELABEL);

    if (label) {
      var element = findFirstChildNode(label);
      var inputValue = getSelectedFiles(this);

      if (inputValue.length) {
        element.innerHTML = inputValue;
      } else {
        restoreDefaultText(this);
      }
    }
  }

  function handleFormReset() {
    var customFileList = [].slice.call(this.querySelectorAll(Selector.INPUT)).filter(function (input) {
      return !!input.bsCustomFileInput;
    });

    for (var i = 0, len = customFileList.length; i < len; i++) {
      restoreDefaultText(customFileList[i]);
    }
  }

  var customProperty = 'bsCustomFileInput';
  var Event = {
    FORMRESET: 'reset',
    INPUTCHANGE: 'change'
  };
  var bsCustomFileInput = {
    init: function init(inputSelector, formSelector) {
      if (inputSelector === void 0) {
        inputSelector = Selector.CUSTOMFILE;
      }

      if (formSelector === void 0) {
        formSelector = Selector.FORM;
      }

      var customFileInputList = [].slice.call(document.querySelectorAll(inputSelector));
      var formList = [].slice.call(document.querySelectorAll(formSelector));

      for (var i = 0, len = customFileInputList.length; i < len; i++) {
        var input = customFileInputList[i];
        Object.defineProperty(input, customProperty, {
          value: {
            defaultText: getDefaultText(input)
          },
          writable: true
        });
        handleInputChange.call(input);
        input.addEventListener(Event.INPUTCHANGE, handleInputChange);
      }

      for (var _i = 0, _len = formList.length; _i < _len; _i++) {
        formList[_i].addEventListener(Event.FORMRESET, handleFormReset);

        Object.defineProperty(formList[_i], customProperty, {
          value: true,
          writable: true
        });
      }
    },
    destroy: function destroy() {
      var formList = [].slice.call(document.querySelectorAll(Selector.FORM)).filter(function (form) {
        return !!form.bsCustomFileInput;
      });
      var customFileInputList = [].slice.call(document.querySelectorAll(Selector.INPUT)).filter(function (input) {
        return !!input.bsCustomFileInput;
      });

      for (var i = 0, len = customFileInputList.length; i < len; i++) {
        var input = customFileInputList[i];
        restoreDefaultText(input);
        input[customProperty] = undefined;
        input.removeEventListener(Event.INPUTCHANGE, handleInputChange);
      }

      for (var _i2 = 0, _len2 = formList.length; _i2 < _len2; _i2++) {
        formList[_i2].removeEventListener(Event.FORMRESET, handleFormReset);

        formList[_i2][customProperty] = undefined;
      }
    }
  };

  return bsCustomFileInput;

}));
//# sourceMappingURL=bs-custom-file-input.js.map

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.autoComplete = factory());
}(this, (function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var dataAttribute = "data-id";
  var select = {
    resultsList: "autoComplete_list",
    result: "autoComplete_result",
    highlight: "autoComplete_highlighted",
    selectedResult: "autoComplete_selected"
  };
  var keys = {
    ENTER: 13,
    ARROW_UP: 38,
    ARROW_DOWN: 40
  };
  var getInput = function getInput(selector) {
    return typeof selector === "string" ? document.querySelector(selector) : selector();
  };
  var createResultsList = function createResultsList(renderResults) {
    var resultsList = document.createElement(renderResults.element);
    resultsList.setAttribute("id", select.resultsList);
    if (renderResults.container) {
      renderResults.container(resultsList);
    }
    renderResults.destination.insertAdjacentElement(renderResults.position, resultsList);
    return resultsList;
  };
  var highlight = function highlight(value) {
    return "<span class=".concat(select.highlight, ">").concat(value, "</span>");
  };
  var addResultsToList = function addResultsToList(resultsList, dataSrc, resultItem) {
    var fragment = document.createDocumentFragment();
    dataSrc.forEach(function (event, record) {
      var result = document.createElement(resultItem.element);
      var resultIndex = dataSrc[record].index;
      result.setAttribute(dataAttribute, resultIndex);
      result.setAttribute("class", select.result);
      resultItem.content ? resultItem.content(event, result) : result.innerHTML = event.match || event;
      fragment.appendChild(result);
    });
    resultsList.appendChild(fragment);
  };
  var clearResults = function clearResults(resultsList) {
    return resultsList.innerHTML = "";
  };
  var onSelection = function onSelection(event, field, resultsList, feedback, resultsValues, selection) {
    feedback({
      event: event,
      query: field instanceof HTMLInputElement ? field.value : field.innerHTML,
      matches: resultsValues.matches,
      results: resultsValues.list.map(function (record) {
        return record.value;
      }),
      selection: resultsValues.list.find(function (value) {
        if (event.keyCode === keys.ENTER) {
          return value.index === Number(selection.getAttribute(dataAttribute));
        } else if (event.type === "mousedown") {
          return value.index === Number(event.currentTarget.getAttribute(dataAttribute));
        }
      })
    });
    clearResults(resultsList);
  };
  var navigation = function navigation(input, resultsList, feedback, resultsValues) {
    var li = resultsList.childNodes,
        liLength = li.length - 1;
    var liSelected = undefined,
        next;
    var removeSelection = function removeSelection(direction) {
      liSelected.classList.remove(select.selectedResult);
      if (direction === 1) {
        next = liSelected.nextSibling;
      } else {
        next = liSelected.previousSibling;
      }
    };
    var highlightSelection = function highlightSelection(current) {
      liSelected = current;
      liSelected.classList.add(select.selectedResult);
    };
    input.onkeydown = function (event) {
      if (li.length > 0) {
        switch (event.keyCode) {
          case keys.ARROW_UP:
            if (liSelected) {
              removeSelection(0);
              if (next) {
                highlightSelection(next);
              } else {
                highlightSelection(li[liLength]);
              }
            } else {
              highlightSelection(li[liLength]);
            }
            break;
          case keys.ARROW_DOWN:
            if (liSelected) {
              removeSelection(1);
              if (next) {
                highlightSelection(next);
              } else {
                highlightSelection(li[0]);
              }
            } else {
              highlightSelection(li[0]);
            }
            break;
          case keys.ENTER:
            if (liSelected) {
              onSelection(event, input, resultsList, feedback, resultsValues, liSelected);
            }
        }
      }
    };
    li.forEach(function (selection) {
      selection.onmousedown = function (event) {
        return onSelection(event, input, resultsList, feedback, resultsValues);
      };
    });
  };
  var autoCompleteView = {
    getInput: getInput,
    createResultsList: createResultsList,
    highlight: highlight,
    addResultsToList: addResultsToList,
    navigation: navigation,
    clearResults: clearResults
  };

  var CustomEventPolyfill = function CustomEventPolyfill(event, params) {
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: undefined
    };
    var evt = document.createEvent("CustomEvent");
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  };
  CustomEventPolyfill.prototype = window.Event.prototype;
  var CustomEventWrapper = typeof window.CustomEvent === "function" && window.CustomEvent || CustomEventPolyfill;
  var initElementClosestPolyfill = function initElementClosestPolyfill() {
    if (!Element.prototype.matches) {
      Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    }
    if (!Element.prototype.closest) {
      Element.prototype.closest = function (s) {
        var el = this;
        do {
          if (el.matches(s)) {
            return el;
          }
          el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
        return null;
      };
    }
  };
  var Polyfill = {
    CustomEventWrapper: CustomEventWrapper,
    initElementClosestPolyfill: initElementClosestPolyfill
  };

  var autoComplete =
  function () {
    function autoComplete(config) {
      _classCallCheck(this, autoComplete);
      var _config$selector = config.selector,
          selector = _config$selector === void 0 ? "#autoComplete" : _config$selector,
          _config$data = config.data,
          key = _config$data.key,
          _src = _config$data.src,
          _config$data$cache = _config$data.cache,
          cache = _config$data$cache === void 0 ? true : _config$data$cache,
          query = config.query,
          _config$trigger = config.trigger;
      _config$trigger = _config$trigger === void 0 ? {} : _config$trigger;
      var _config$trigger$event = _config$trigger.event,
          event = _config$trigger$event === void 0 ? ["input"] : _config$trigger$event,
          _config$trigger$condi = _config$trigger.condition,
          condition = _config$trigger$condi === void 0 ? false : _config$trigger$condi,
          _config$searchEngine = config.searchEngine,
          searchEngine = _config$searchEngine === void 0 ? "strict" : _config$searchEngine,
          _config$threshold = config.threshold,
          threshold = _config$threshold === void 0 ? 0 : _config$threshold,
          _config$debounce = config.debounce,
          debounce = _config$debounce === void 0 ? 0 : _config$debounce,
          _config$resultsList = config.resultsList;
      _config$resultsList = _config$resultsList === void 0 ? {} : _config$resultsList;
      var _config$resultsList$r = _config$resultsList.render,
          render = _config$resultsList$r === void 0 ? false : _config$resultsList$r,
          _config$resultsList$c = _config$resultsList.container,
          container = _config$resultsList$c === void 0 ? false : _config$resultsList$c,
          destination = _config$resultsList.destination,
          _config$resultsList$p = _config$resultsList.position,
          position = _config$resultsList$p === void 0 ? "afterend" : _config$resultsList$p,
          _config$resultsList$e = _config$resultsList.element,
          resultsListElement = _config$resultsList$e === void 0 ? "ul" : _config$resultsList$e,
          _config$resultsList$n = _config$resultsList.navigation,
          navigation = _config$resultsList$n === void 0 ? false : _config$resultsList$n,
          _config$sort = config.sort,
          sort = _config$sort === void 0 ? false : _config$sort,
          placeHolder = config.placeHolder,
          _config$maxResults = config.maxResults,
          maxResults = _config$maxResults === void 0 ? 5 : _config$maxResults,
          _config$resultItem = config.resultItem;
      _config$resultItem = _config$resultItem === void 0 ? {} : _config$resultItem;
      var _config$resultItem$co = _config$resultItem.content,
          content = _config$resultItem$co === void 0 ? false : _config$resultItem$co,
          _config$resultItem$el = _config$resultItem.element,
          resultItemElement = _config$resultItem$el === void 0 ? "li" : _config$resultItem$el,
          noResults = config.noResults,
          _config$highlight = config.highlight,
          highlight = _config$highlight === void 0 ? false : _config$highlight,
          onSelection = config.onSelection;
      var resultsListView = render ? autoCompleteView.createResultsList({
        container: container,
        destination: destination || autoCompleteView.getInput(selector),
        position: position,
        element: resultsListElement
      }) : null;
      this.selector = selector;
      this.data = {
        src: function src() {
          return typeof _src === "function" ? _src() : _src;
        },
        key: key,
        cache: cache
      };
      this.query = query;
      this.trigger = {
        event: event,
        condition: condition
      };
      this.searchEngine = searchEngine === "loose" ? "loose" : typeof searchEngine === "function" ? searchEngine : "strict";
      this.threshold = threshold;
      this.debounce = debounce;
      this.resultsList = {
        render: render,
        view: resultsListView,
        navigation: navigation
      };
      this.sort = sort;
      this.placeHolder = placeHolder;
      this.maxResults = maxResults;
      this.resultItem = {
        content: content,
        element: resultItemElement
      };
      this.noResults = noResults;
      this.highlight = highlight;
      this.onSelection = onSelection;
      this.init();
    }
    _createClass(autoComplete, [{
      key: "search",
      value: function search(query, record) {
        var recordLowerCase = record.toLowerCase();
        if (this.searchEngine === "loose") {
          query = query.replace(/ /g, "");
          var match = [];
          var searchPosition = 0;
          for (var number = 0; number < recordLowerCase.length; number++) {
            var recordChar = record[number];
            if (searchPosition < query.length && recordLowerCase[number] === query[searchPosition]) {
              recordChar = this.highlight ? autoCompleteView.highlight(recordChar) : recordChar;
              searchPosition++;
            }
            match.push(recordChar);
          }
          if (searchPosition !== query.length) {
            return false;
          }
          return match.join("");
        } else {
          if (recordLowerCase.includes(query)) {
            var pattern = new RegExp("".concat(query), "i");
            query = pattern.exec(record);
            return this.highlight ? record.replace(query, autoCompleteView.highlight(query)) : record;
          }
        }
      }
    }, {
      key: "listMatchedResults",
      value: function listMatchedResults(data) {
        var _this = this;
        return new Promise(function (resolve) {
          var resList = [];
          data.filter(function (record, index) {
            var search = function search(key) {
              var recordValue = key ? record[key] : record;
              if (recordValue) {
                var match = typeof _this.searchEngine === "function" ? _this.searchEngine(_this.queryValue, recordValue) : _this.search(_this.queryValue, recordValue);
                if (match && key) {
                  resList.push({
                    key: key,
                    index: index,
                    match: match,
                    value: record
                  });
                } else if (match && !key) {
                  resList.push({
                    index: index,
                    match: match,
                    value: record
                  });
                }
              }
            };
            if (_this.data.key) {
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;
              try {
                for (var _iterator = _this.data.key[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var key = _step.value;
                  search(key);
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                    _iterator["return"]();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }
            } else {
              search();
            }
          });
          var list = _this.sort ? resList.sort(_this.sort).slice(0, _this.maxResults) : resList.slice(0, _this.maxResults);
          return resolve({
            matches: resList.length,
            list: list
          });
        });
      }
    }, {
      key: "ignite",
      value: function ignite() {
        var _this2 = this;
        var input = autoCompleteView.getInput(this.selector);
        if (this.placeHolder) {
          input.setAttribute("placeholder", this.placeHolder);
        }
        var debounce = function debounce(func, delay) {
          var inDebounce;
          return function () {
            var context = this;
            var args = arguments;
            clearTimeout(inDebounce);
            inDebounce = setTimeout(function () {
              return func.apply(context, args);
            }, delay);
          };
        };
        var exec = function exec(event) {
          var inputValue = input instanceof HTMLInputElement || input instanceof HTMLTextAreaElement ? input.value.toLowerCase() : input.innerHTML.toLowerCase();
          var queryValue = _this2.queryValue = _this2.query && _this2.query.manipulate ? _this2.query.manipulate(inputValue) : inputValue;
          var renderResultsList = _this2.resultsList.render;
          var triggerCondition = _this2.trigger.condition ? _this2.trigger.condition(queryValue) : queryValue.length > _this2.threshold && queryValue.replace(/ /g, "").length;
          var eventEmitter = function eventEmitter(event, results) {
            input.dispatchEvent(new Polyfill.CustomEventWrapper("autoComplete", {
              bubbles: true,
              detail: {
                event: event,
                input: inputValue,
                query: queryValue,
                matches: results ? results.matches : null,
                results: results ? results.list : null
              },
              cancelable: true
            }));
          };
          if (renderResultsList) {
            var resultsList = _this2.resultsList.view;
            var clearResults = autoCompleteView.clearResults(resultsList);
            if (triggerCondition) {
              _this2.listMatchedResults(_this2.dataStream, event).then(function (list) {
                eventEmitter(event, list);
                if (_this2.resultsList.render) {
                  if (list.list.length === 0 && _this2.noResults) {
                    _this2.noResults();
                  } else {
                    autoCompleteView.addResultsToList(resultsList, list.list, _this2.resultItem);
                    if (_this2.onSelection) {
                      _this2.resultsList.navigation ? _this2.resultsList.navigation(event, input, resultsList, _this2.onSelection, list) : autoCompleteView.navigation(input, resultsList, _this2.onSelection, list);
                    }
                  }
                }
              });
            } else {
              eventEmitter(event);
            }
          } else if (!renderResultsList && triggerCondition) {
            _this2.listMatchedResults(_this2.dataStream, event).then(function (list) {
              eventEmitter(event, list);
            });
          }
        };
        var run = function run(event) {
          Promise.resolve(_this2.data.cache ? _this2.dataStream : _this2.data.src()).then(function (data) {
            _this2.dataStream = data;
            exec(event);
          });
        };
        this.trigger.event.forEach(function (eventType) {
          input.addEventListener(eventType, debounce(function (event) {
            return run(event);
          }, _this2.debounce));
        });
      }
    }, {
      key: "init",
      value: function init() {
        var _this3 = this;
        if (this.data.cache) {
          Promise.resolve(this.data.src()).then(function (data) {
            _this3.dataStream = data;
            _this3.ignite();
          });
        } else {
          this.ignite();
        }
        Polyfill.initElementClosestPolyfill();
      }
    }]);
    return autoComplete;
  }();

  return autoComplete;

})));

// Native Javascript for Bootstrap 4 v2.0.27 | © dnp_theme | MIT-License
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD support:
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like:
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    var bsn = factory();
    root.Alert = bsn.Alert;
    root.Button = bsn.Button;
    root.Carousel = bsn.Carousel;
    root.Collapse = bsn.Collapse;
    root.Dropdown = bsn.Dropdown;
    root.Modal = bsn.Modal;
    root.Popover = bsn.Popover;
    root.ScrollSpy = bsn.ScrollSpy;
    root.Tab = bsn.Tab;
    root.Toast = bsn.Toast;
    root.Tooltip = bsn.Tooltip;
  }
}(this, function () {
  
  /* Native Javascript for Bootstrap 4 | Internal Utility Functions
  ----------------------------------------------------------------*/
  "use strict";
  
  // globals
  var globalObject = typeof global !== 'undefined' ? global : this||window,
    DOC = document, HTML = DOC.documentElement, body = 'body', // allow the library to be used in <head>
  
    // Native Javascript for Bootstrap Global Object
    BSN = globalObject.BSN = {},
    supports = BSN.supports = [],
  
    // function toggle attributes
    dataToggle    = 'data-toggle',
    dataDismiss   = 'data-dismiss',
    dataSpy       = 'data-spy',
    dataRide      = 'data-ride',
  
    // components
    stringAlert     = 'Alert',
    stringButton    = 'Button',
    stringCarousel  = 'Carousel',
    stringCollapse  = 'Collapse',
    stringDropdown  = 'Dropdown',
    stringModal     = 'Modal',
    stringPopover   = 'Popover',
    stringScrollSpy = 'ScrollSpy',
    stringTab       = 'Tab',
    stringTooltip   = 'Tooltip',
    stringToast     = 'Toast',
  
    // options DATA API
    dataAutohide      = 'data-autohide',
    databackdrop      = 'data-backdrop',
    dataKeyboard      = 'data-keyboard',
    dataTarget        = 'data-target',
    dataInterval      = 'data-interval',
    dataHeight        = 'data-height',
    dataPause         = 'data-pause',
    dataTitle         = 'data-title',
    dataOriginalTitle = 'data-original-title',
    dataDismissible   = 'data-dismissible',
    dataTrigger       = 'data-trigger',
    dataAnimation     = 'data-animation',
    dataContainer     = 'data-container',
    dataPlacement     = 'data-placement',
    dataDelay         = 'data-delay',
  
    // option keys
    backdrop = 'backdrop', keyboard = 'keyboard', delay = 'delay',
    content = 'content', target = 'target', currentTarget = 'currentTarget',
    interval = 'interval', pause = 'pause', animation = 'animation',
    placement = 'placement', container = 'container',
  
    // box model
    offsetTop    = 'offsetTop',      offsetBottom   = 'offsetBottom',
    offsetLeft   = 'offsetLeft',
    scrollTop    = 'scrollTop',      scrollLeft     = 'scrollLeft',
    clientWidth  = 'clientWidth',    clientHeight   = 'clientHeight',
    offsetWidth  = 'offsetWidth',    offsetHeight   = 'offsetHeight',
    innerWidth   = 'innerWidth',     innerHeight    = 'innerHeight',
    scrollHeight = 'scrollHeight',   scrollWidth    = 'scrollWidth',
    height         = 'height',
  
    // aria
    ariaExpanded = 'aria-expanded',
    ariaHidden   = 'aria-hidden',
    ariaSelected = 'aria-selected',
  
    // event names
    clickEvent    = 'click',
    focusEvent    = 'focus',
    hoverEvent    = 'hover',
    keydownEvent  = 'keydown',
    keyupEvent    = 'keyup',
    resizeEvent   = 'resize', // passive
    scrollEvent   = 'scroll', // passive
    mouseHover = ('onmouseleave' in DOC) ? [ 'mouseenter', 'mouseleave'] : [ 'mouseover', 'mouseout' ],
    // touch since 2.0.26
    touchEvents = { start: 'touchstart', end: 'touchend', move:'touchmove' }, // passive
    // originalEvents
    showEvent     = 'show',
    shownEvent    = 'shown',
    hideEvent     = 'hide',
    hiddenEvent   = 'hidden',
    closeEvent    = 'close',
    closedEvent   = 'closed',
    slidEvent     = 'slid',
    slideEvent    = 'slide',
    changeEvent   = 'change',
  
    // other
    getAttribute           = 'getAttribute',
    setAttribute           = 'setAttribute',
    hasAttribute           = 'hasAttribute',
    createElement          = 'createElement',
    appendChild            = 'appendChild',
    innerHTML              = 'innerHTML',
    getElementsByTagName   = 'getElementsByTagName',
    preventDefault         = 'preventDefault',
    getBoundingClientRect  = 'getBoundingClientRect',
    querySelectorAll       = 'querySelectorAll',
    getElementsByCLASSNAME = 'getElementsByClassName',
    getComputedStyle       = 'getComputedStyle',  
  
    indexOf      = 'indexOf',
    parentNode   = 'parentNode',
    length       = 'length',
    toLowerCase  = 'toLowerCase',
    Transition   = 'Transition',
    Duration     = 'Duration',
    Webkit       = 'Webkit',
    style        = 'style',
    push         = 'push',
    tabindex     = 'tabindex',
    contains     = 'contains',
  
    active     = 'active',
    showClass  = 'show',
    collapsing = 'collapsing',
    disabled   = 'disabled',
    loading    = 'loading',
    left       = 'left',
    right      = 'right',
    top        = 'top',
    bottom     = 'bottom',
  
    // tooltip / popover
    tipPositions = /\b(top|bottom|left|right)+/,
  
    // modal
    modalOverlay = 0,
    fixedTop = 'fixed-top',
    fixedBottom = 'fixed-bottom',
  
    // transitionEnd since 2.0.4
    supportTransitions = Webkit+Transition in HTML[style] || Transition[toLowerCase]() in HTML[style],
    transitionEndEvent = Webkit+Transition in HTML[style] ? Webkit[toLowerCase]()+Transition+'End' : Transition[toLowerCase]()+'end',
    transitionDuration = Webkit+Duration in HTML[style] ? Webkit[toLowerCase]()+Transition+Duration : Transition[toLowerCase]()+Duration,
  
    // set new focus element since 2.0.3
    setFocus = function(element){
      element.focus ? element.focus() : element.setActive();
    },
  
    // class manipulation, since 2.0.0 requires polyfill.js
    addClass = function(element,classNAME) {
      element.classList.add(classNAME);
    },
    removeClass = function(element,classNAME) {
      element.classList.remove(classNAME);
    },
    hasClass = function(element,classNAME){ // since 2.0.0
      return element.classList[contains](classNAME);
    },
  
    // selection methods
    getElementsByClassName = function(element,classNAME) { // returns Array
      return [].slice.call(element[getElementsByCLASSNAME]( classNAME ));
    },
    queryElement = function (selector, parent) {
      var lookUp = parent ? parent : DOC;
      return typeof selector === 'object' ? selector : lookUp.querySelector(selector);
    },
    getClosest = function (element, selector) { //element is the element and selector is for the closest parent element to find
      // source http://gomakethings.com/climbing-up-and-down-the-dom-tree-with-vanilla-javascript/
      var firstChar = selector.charAt(0), selectorSubstring = selector.substr(1);
      if ( firstChar === '.' ) {// If selector is a class
        for ( ; element && element !== DOC; element = element[parentNode] ) { // Get closest match
          if ( queryElement(selector,element[parentNode]) !== null && hasClass(element,selectorSubstring) ) { return element; }
        }
      } else if ( firstChar === '#' ) { // If selector is an ID
        for ( ; element && element !== DOC; element = element[parentNode] ) { // Get closest match
          if ( element.id === selectorSubstring ) { return element; }
        }
      }
      return false;
    },
  
    // event attach jQuery style / trigger  since 1.2.0
    on = function (element, event, handler, options) {
      options = options || false;
      element.addEventListener(event, handler, options);
    },
    off = function(element, event, handler, options) {
      options = options || false;
      element.removeEventListener(event, handler, options);
    },
    one = function (element, event, handler, options) { // one since 2.0.4
      on(element, event, function handlerWrapper(e){
        handler(e);
        off(element, event, handlerWrapper, options);
      }, options);
    },
    // determine support for passive events
    supportPassive = (function(){
      // Test via a getter in the options object to see if the passive property is accessed
      var result = false;
      try {
        var opts = Object.defineProperty({}, 'passive', {
          get: function() {
            result = true;
          }
        });
        one(globalObject, 'testPassive', null, opts);
      } catch (e) {}
  
      return result;
    }()),
    // event options
    // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
    passiveHandler = supportPassive ? { passive: true } : false,
    // transitions
    getTransitionDurationFromElement = function(element) {
      var duration = supportTransitions ? globalObject[getComputedStyle](element)[transitionDuration] : 0;
      duration = parseFloat(duration);
      duration = typeof duration === 'number' && !isNaN(duration) ? duration * 1000 : 0;
      return duration; // we take a short offset to make sure we fire on the next frame after animation
    },
    emulateTransitionEnd = function(element,handler){ // emulateTransitionEnd since 2.0.4
      var called = 0, duration = getTransitionDurationFromElement(element);
      duration ? one(element, transitionEndEvent, function(e){ !called && handler(e), called = 1; })
               : setTimeout(function() { !called && handler(), called = 1; }, 17);
    },
    bootstrapCustomEvent = function (eventName, componentName, related) {
      var OriginalCustomEvent = new CustomEvent( eventName + '.bs.' + componentName);
      OriginalCustomEvent.relatedTarget = related;
      this.dispatchEvent(OriginalCustomEvent);
    },
  
    // tooltip / popover stuff
    getScroll = function() { // also Affix and ScrollSpy uses it
      return {
        y : globalObject.pageYOffset || HTML[scrollTop],
        x : globalObject.pageXOffset || HTML[scrollLeft]
      }
    },
    styleTip = function(link,element,position,parent) { // both popovers and tooltips (target,tooltip,placement,elementToAppendTo)
      var elementDimensions = { w : element[offsetWidth], h: element[offsetHeight] },
          windowWidth = (HTML[clientWidth] || DOC[body][clientWidth]),
          windowHeight = (HTML[clientHeight] || DOC[body][clientHeight]),
          rect = link[getBoundingClientRect](),
          scroll = parent === DOC[body] ? getScroll() : { x: parent[offsetLeft] + parent[scrollLeft], y: parent[offsetTop] + parent[scrollTop] },
          linkDimensions = { w: rect[right] - rect[left], h: rect[bottom] - rect[top] },
          isPopover = hasClass(element,'popover'),
          topPosition, leftPosition,
  
          arrow = queryElement('.arrow',element),
          arrowTop, arrowLeft, arrowWidth, arrowHeight,
  
          halfTopExceed = rect[top] + linkDimensions.h/2 - elementDimensions.h/2 < 0,
          halfLeftExceed = rect[left] + linkDimensions.w/2 - elementDimensions.w/2 < 0,
          halfRightExceed = rect[left] + elementDimensions.w/2 + linkDimensions.w/2 >= windowWidth,
          halfBottomExceed = rect[top] + elementDimensions.h/2 + linkDimensions.h/2 >= windowHeight,
          topExceed = rect[top] - elementDimensions.h < 0,
          leftExceed = rect[left] - elementDimensions.w < 0,
          bottomExceed = rect[top] + elementDimensions.h + linkDimensions.h >= windowHeight,
          rightExceed = rect[left] + elementDimensions.w + linkDimensions.w >= windowWidth;
  
      // recompute position
      position = (position === left || position === right) && leftExceed && rightExceed ? top : position; // first, when both left and right limits are exceeded, we fall back to top|bottom
      position = position === top && topExceed ? bottom : position;
      position = position === bottom && bottomExceed ? top : position;
      position = position === left && leftExceed ? right : position;
      position = position === right && rightExceed ? left : position;
  
      // update tooltip/popover class
      element.className[indexOf](position) === -1 && (element.className = element.className.replace(tipPositions,position));
  
      // we check the computed width & height and update here
      arrowWidth = arrow[offsetWidth]; arrowHeight = arrow[offsetHeight];
  
      // apply styling to tooltip or popover
      if ( position === left || position === right ) { // secondary|side positions
        if ( position === left ) { // LEFT
          leftPosition = rect[left] + scroll.x - elementDimensions.w - ( isPopover ? arrowWidth : 0 );
        } else { // RIGHT
          leftPosition = rect[left] + scroll.x + linkDimensions.w;
        }
  
        // adjust top and arrow
        if (halfTopExceed) {
          topPosition = rect[top] + scroll.y;
          arrowTop = linkDimensions.h/2 - arrowWidth;
        } else if (halfBottomExceed) {
          topPosition = rect[top] + scroll.y - elementDimensions.h + linkDimensions.h;
          arrowTop = elementDimensions.h - linkDimensions.h/2 - arrowWidth;
        } else {
          topPosition = rect[top] + scroll.y - elementDimensions.h/2 + linkDimensions.h/2;
          arrowTop = elementDimensions.h/2 - (isPopover ? arrowHeight*0.9 : arrowHeight/2);
        }
      } else if ( position === top || position === bottom ) { // primary|vertical positions
        if ( position === top) { // TOP
          topPosition =  rect[top] + scroll.y - elementDimensions.h - ( isPopover ? arrowHeight : 0 );
        } else { // BOTTOM
          topPosition = rect[top] + scroll.y + linkDimensions.h;
        }
        // adjust left | right and also the arrow
        if (halfLeftExceed) {
          leftPosition = 0;
          arrowLeft = rect[left] + linkDimensions.w/2 - arrowWidth;
        } else if (halfRightExceed) {
          leftPosition = windowWidth - elementDimensions.w*1.01;
          arrowLeft = elementDimensions.w - ( windowWidth - rect[left] ) + linkDimensions.w/2 - arrowWidth/2;
        } else {
          leftPosition = rect[left] + scroll.x - elementDimensions.w/2 + linkDimensions.w/2;
          arrowLeft = elementDimensions.w/2 - ( isPopover ? arrowWidth : arrowWidth/2 );
        }
      }
  
      // apply style to tooltip/popover and its arrow
      element[style][top] = topPosition + 'px';
      element[style][left] = leftPosition + 'px';
  
      arrowTop && (arrow[style][top] = arrowTop + 'px');
      arrowLeft && (arrow[style][left] = arrowLeft + 'px');
    };
  
  BSN.version = '2.0.27';
  
  /* Native Javascript for Bootstrap 4 | Alert
  -------------------------------------------*/
  
  // ALERT DEFINITION
  // ================
  var Alert = function( element ) {
    
    // initialization element
    element = queryElement(element);
  
    // bind, target alert, duration and stuff
    var self = this, component = 'alert',
      alert = getClosest(element,'.'+component),
      triggerHandler = function(){ hasClass(alert,'fade') ? emulateTransitionEnd(alert,transitionEndHandler) : transitionEndHandler(); },
      // handlers
      clickHandler = function(e){
        alert = getClosest(e[target],'.'+component);
        element = queryElement('['+dataDismiss+'="'+component+'"]',alert);
        element && alert && (element === e[target] || element[contains](e[target])) && self.close();
      },
      transitionEndHandler = function(){
        bootstrapCustomEvent.call(alert, closedEvent, component);
        off(element, clickEvent, clickHandler); // detach it's listener
        alert[parentNode].removeChild(alert);
      };
    
    // public method
    this.close = function() {
      if ( alert && element && hasClass(alert,showClass) ) {
        bootstrapCustomEvent.call(alert, closeEvent, component);
        removeClass(alert,showClass);
        alert && triggerHandler();
      }
    };
  
    // init
    if ( !(stringAlert in element ) ) { // prevent adding event handlers twice
      on(element, clickEvent, clickHandler);
    }
    element[stringAlert] = self;
  };
  
  // ALERT DATA API
  // ==============
  supports[push]([stringAlert, Alert, '['+dataDismiss+'="alert"]']);
  
  
  /* Native Javascript for Bootstrap 4 | Button
  ---------------------------------------------*/
  
  // BUTTON DEFINITION
  // ===================
  var Button = function( element ) {
  
    // initialization element
    element = queryElement(element);
  
    // constant
    var toggled = false, // toggled makes sure to prevent triggering twice the change.bs.button events
  
        // strings
        component = 'button',
        checked = 'checked',
        LABEL = 'LABEL',
        INPUT = 'INPUT',
  
      // private methods
      keyHandler = function(e){ 
        var key = e.which || e.keyCode;
        key === 32 && e[target] === DOC.activeElement && toggle(e);
      },
      preventScroll = function(e){ 
        var key = e.which || e.keyCode;
        key === 32 && e[preventDefault]();
      },
      toggle = function(e) {
        var label = e[target].tagName === LABEL ? e[target] : e[target][parentNode].tagName === LABEL ? e[target][parentNode] : null; // the .btn label
        
        if ( !label ) return; //react if a label or its immediate child is clicked
  
        var labels = getElementsByClassName(label[parentNode],'btn'), // all the button group buttons
          input = label[getElementsByTagName](INPUT)[0];
  
        if ( !input ) return; // return if no input found
  
        // manage the dom manipulation
        if ( input.type === 'checkbox' ) { //checkboxes
          if ( !input[checked] ) {
            addClass(label,active);
            input[getAttribute](checked);
            input[setAttribute](checked,checked);
            input[checked] = true;
          } else {
            removeClass(label,active);
            input[getAttribute](checked);
            input.removeAttribute(checked);
            input[checked] = false;
          }
  
          if (!toggled) { // prevent triggering the event twice
            toggled = true;
            bootstrapCustomEvent.call(input, changeEvent, component); //trigger the change for the input
            bootstrapCustomEvent.call(element, changeEvent, component); //trigger the change for the btn-group
          }
        }
  
        if ( input.type === 'radio' && !toggled ) { // radio buttons
          // don't trigger if already active (the OR condition is a hack to check if the buttons were selected with key press and NOT mouse click)
          if ( !input[checked] || (e.screenX === 0 && e.screenY == 0) ) {
            addClass(label,active);
            addClass(label,focusEvent);
            input[setAttribute](checked,checked);
            input[checked] = true;
            bootstrapCustomEvent.call(input, changeEvent, component); //trigger the change for the input
            bootstrapCustomEvent.call(element, changeEvent, component); //trigger the change for the btn-group
  
            toggled = true;
            for (var i = 0, ll = labels[length]; i<ll; i++) {
              var otherLabel = labels[i], otherInput = otherLabel[getElementsByTagName](INPUT)[0];
              if ( otherLabel !== label && hasClass(otherLabel,active) )  {
                removeClass(otherLabel,active);
                otherInput.removeAttribute(checked);
                otherInput[checked] = false;
                bootstrapCustomEvent.call(otherInput, changeEvent, component); // trigger the change
              }
            }
          }
        }
        setTimeout( function() { toggled = false; }, 50 );
      },
      focusHandler = function(e) {
        addClass(e[target][parentNode],focusEvent);
      },
      blurHandler = function(e) {
        removeClass(e[target][parentNode],focusEvent);
      };
  
    // init
    if ( !( stringButton in element ) ) { // prevent adding event handlers twice
      on( element, clickEvent, toggle );
      on( element, keyupEvent, keyHandler ), on( element, keydownEvent, preventScroll );
  
      var allBtns = getElementsByClassName(element, 'btn');
      for (var i=0; i<allBtns.length; i++) {
        var input = allBtns[i][getElementsByTagName](INPUT)[0];
        on( input, focusEvent, focusHandler), on( input, 'blur', blurHandler);
      }    
    }
  
    // activate items on load
    var labelsToACtivate = getElementsByClassName(element, 'btn'), lbll = labelsToACtivate[length];
    for (var i=0; i<lbll; i++) {
      !hasClass(labelsToACtivate[i],active) && queryElement('input:checked',labelsToACtivate[i]) 
                                            && addClass(labelsToACtivate[i],active);
    }
    element[stringButton] = this;
  };
  
  // BUTTON DATA API
  // =================
  supports[push]( [ stringButton, Button, '['+dataToggle+'="buttons"]' ] );
  
  
  /* Native Javascript for Bootstrap 4 | Carousel
  ----------------------------------------------*/
  
  // CAROUSEL DEFINITION
  // ===================
  var Carousel = function( element, options ) {
  
    // initialization element
    element = queryElement( element );
  
    // set options
    options = options || {};
  
    // DATA API
    var intervalAttribute = element[getAttribute](dataInterval),
        intervalOption = options[interval],
        intervalData = intervalAttribute === 'false' ? 0 : parseInt(intervalAttribute),  
        pauseData = element[getAttribute](dataPause) === hoverEvent || false,
        keyboardData = element[getAttribute](dataKeyboard) === 'true' || false,
      
        // strings
        component = 'carousel',
        paused = 'paused',
        direction = 'direction',
        carouselItem = 'carousel-item',
        dataSlideTo = 'data-slide-to'; 
  
    this[keyboard] = options[keyboard] === true || keyboardData;
    this[pause] = (options[pause] === hoverEvent || pauseData) ? hoverEvent : false; // false / hover
  
    this[interval] = typeof intervalOption === 'number' ? intervalOption
                   : intervalOption === false || intervalData === 0 || intervalData === false ? 0
                   : isNaN(intervalData) ? 5000 // bootstrap carousel default interval
                   : intervalData;
  
    // bind, event targets
    var self = this, index = element.index = 0, timer = element.timer = 0, 
      isSliding = false, // isSliding prevents click event handlers when animation is running
      isTouch = false, startXPosition = null, currentXPosition = null, endXPosition = null, // touch and event coordinates
      slides = getElementsByClassName(element,carouselItem), total = slides[length],
      slideDirection = this[direction] = left,
      leftArrow = getElementsByClassName(element,component+'-control-prev')[0], 
      rightArrow = getElementsByClassName(element,component+'-control-next')[0],
      indicator = queryElement( '.'+component+'-indicators', element ),
      indicators = indicator && indicator[getElementsByTagName]( "LI" ) || [];
  
    // invalidate when not enough items
    if (total < 2) { return; }
  
    // handlers
    var pauseHandler = function () {
        if ( self[interval] !==false && !hasClass(element,paused) ) {
          addClass(element,paused);
          !isSliding && ( clearInterval(timer), timer = null );
        }
      },
      resumeHandler = function() {
        if ( self[interval] !== false && hasClass(element,paused) ) {
          removeClass(element,paused);
          !isSliding && ( clearInterval(timer), timer = null );
          !isSliding && self.cycle();
        }
      },
      indicatorHandler = function(e) {
        e[preventDefault]();
        if (isSliding) return;
  
        var eventTarget = e[target]; // event target | the current active item
  
        if ( eventTarget && !hasClass(eventTarget,active) && eventTarget[getAttribute](dataSlideTo) ) {
          index = parseInt( eventTarget[getAttribute](dataSlideTo), 10 );
        } else { return false; }
  
        self.slideTo( index ); //Do the slide
      },
      controlsHandler = function (e) {
        e[preventDefault]();
        if (isSliding) return;
  
        var eventTarget = e.currentTarget || e.srcElement;
  
        if ( eventTarget === rightArrow ) {
          index++;
        } else if ( eventTarget === leftArrow ) {
          index--;
        }
  
        self.slideTo( index ); //Do the slide
      },
      keyHandler = function (e) {
        if (isSliding) return;
        switch (e.which) {
          case 39:
            index++;
            break;
          case 37:
            index--;
            break;
          default: return;
        }
        self.slideTo( index ); //Do the slide
      },
      // touch events
      toggleTouchEvents = function(toggle){
        toggle( element, touchEvents.move, touchMoveHandler, passiveHandler );
        toggle( element, touchEvents.end, touchEndHandler, passiveHandler );
    },  
      touchDownHandler = function(e) {
        if ( isTouch ) { return; } 
          
        startXPosition = parseInt(e.touches[0].pageX);
  
        if ( element.contains(e[target]) ) {
          isTouch = true;
          toggleTouchEvents(on);
        }
      },
      touchMoveHandler = function(e) {
        if ( !isTouch ) { e.preventDefault(); return; }
  
        currentXPosition = parseInt(e.touches[0].pageX);
        
        //cancel touch if more than one touches detected
        if ( e.type === 'touchmove' && e.touches[length] > 1 ) {
          e.preventDefault();
          return false;
        }
      },
      touchEndHandler = function(e) {
        if ( !isTouch || isSliding ) { return }
        
        endXPosition = currentXPosition || parseInt( e.touches[0].pageX );
  
        if ( isTouch ) {
          if ( (!element.contains(e[target]) || !element.contains(e.relatedTarget) ) && Math.abs(startXPosition - endXPosition) < 75 ) {
            return false;
          } else {
            if ( currentXPosition < startXPosition ) {
              index++;
            } else if ( currentXPosition > startXPosition ) {
              index--;        
            }
            isTouch = false;
            self.slideTo(index);
          }
          toggleTouchEvents(off);            
        }
      },
  
      // private methods
      isElementInScrollRange = function () {
        var rect = element[getBoundingClientRect](),
          viewportHeight = globalObject[innerHeight] || HTML[clientHeight]
        return rect[top] <= viewportHeight && rect[bottom] >= 0; // bottom && top
      },    
      setActivePage = function( pageIndex ) { //indicators
        for ( var i = 0, icl = indicators[length]; i < icl; i++ ) {
          removeClass(indicators[i],active);
        }
        if (indicators[pageIndex]) addClass(indicators[pageIndex], active);
      };
  
  
    // public methods
    this.cycle = function() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
  
      timer = setInterval(function() {
        isElementInScrollRange() && (index++, self.slideTo( index ) );
      }, this[interval]);
    };
    this.slideTo = function( next ) {
      if (isSliding) return; // when controled via methods, make sure to check again      
      
      var activeItem = this.getActiveIndex(), // the current active
          orientation;
      
      // first return if we're on the same item #227
      if ( activeItem === next ) {
        return;
      // or determine slideDirection
      } else if  ( (activeItem < next ) || (activeItem === 0 && next === total -1 ) ) {
        slideDirection = self[direction] = left; // next
      } else if  ( (activeItem > next) || (activeItem === total - 1 && next === 0 ) ) {
        slideDirection = self[direction] = right; // prev
      }
  
      // find the right next index 
      if ( next < 0 ) { next = total - 1; } 
      else if ( next >= total ){ next = 0; }
  
      // update index
      index = next;
  
      orientation = slideDirection === left ? 'next' : 'prev'; //determine type
      bootstrapCustomEvent.call(element, slideEvent, component, slides[next]); // here we go with the slide
  
      isSliding = true;
      clearInterval(timer);
      timer = null;
      setActivePage( next );
  
      if ( supportTransitions && hasClass(element,'slide') ) {
  
        addClass(slides[next],carouselItem +'-'+ orientation);
        slides[next][offsetWidth];
        addClass(slides[next],carouselItem +'-'+ slideDirection);
        addClass(slides[activeItem],carouselItem +'-'+ slideDirection);
  
        emulateTransitionEnd(slides[next], function(e) {
          var timeout = e && e[target] !== slides[next] ? e.elapsedTime*1000+100 : 20;
          
          isSliding && setTimeout(function(){
            isSliding = false;
  
            addClass(slides[next],active);
            removeClass(slides[activeItem],active);
  
            removeClass(slides[next],carouselItem +'-'+ orientation);
            removeClass(slides[next],carouselItem +'-'+ slideDirection);
            removeClass(slides[activeItem],carouselItem +'-'+ slideDirection);
  
            bootstrapCustomEvent.call(element, slidEvent, component, slides[next]);
  
            if ( !DOC.hidden && self[interval] && !hasClass(element,paused) ) {
              self.cycle();
            }
          }, timeout);
        });
  
      } else {
        addClass(slides[next],active);
        slides[next][offsetWidth];
        removeClass(slides[activeItem],active);
        setTimeout(function() {
          isSliding = false;
          if ( self[interval] && !hasClass(element,paused) ) {
            self.cycle();
          }
          bootstrapCustomEvent.call(element, slidEvent, component, slides[next]);
        }, 100 );
      }
    };
    this.getActiveIndex = function () {
      return slides[indexOf](getElementsByClassName(element,carouselItem+' active')[0]) || 0;
    };
  
    // init
    if ( !(stringCarousel in element ) ) { // prevent adding event handlers twice
  
      if ( self[pause] && self[interval] ) {
        on( element, mouseHover[0], pauseHandler );
        on( element, mouseHover[1], resumeHandler );
        on( element, touchEvents.start, pauseHandler, passiveHandler );
        on( element, touchEvents.end, resumeHandler, passiveHandler );
      }
    
      slides[length] > 1 && on( element, touchEvents.start, touchDownHandler, passiveHandler );
  
      rightArrow && on( rightArrow, clickEvent, controlsHandler );
      leftArrow && on( leftArrow, clickEvent, controlsHandler );
    
      indicator && on( indicator, clickEvent, indicatorHandler );
      self[keyboard] && on( globalObject, keydownEvent, keyHandler );
  
    }
    if (self.getActiveIndex()<0) {
      slides[length] && addClass(slides[0],active);
      indicators[length] && setActivePage(0);
    }
  
    if ( self[interval] ){ self.cycle(); }
    element[stringCarousel] = self;
  };
  
  // CAROUSEL DATA API
  // =================
  supports[push]( [ stringCarousel, Carousel, '['+dataRide+'="carousel"]' ] );
  
  
  /* Native Javascript for Bootstrap 4 | Collapse
  -----------------------------------------------*/
  
  // COLLAPSE DEFINITION
  // ===================
  var Collapse = function( element, options ) {
  
    // initialization element
    element = queryElement(element);
  
    // set options
    options = options || {};
  
    // event targets and constants
    var accordion = null, collapse = null, self = this, 
      accordionData = element[getAttribute]('data-parent'),
      activeCollapse, activeElement,
  
      // component strings
      component = 'collapse',
      collapsed = 'collapsed',
      isAnimating = 'isAnimating',
  
      // private methods
      openAction = function(collapseElement,toggle) {
        bootstrapCustomEvent.call(collapseElement, showEvent, component);
        collapseElement[isAnimating] = true;
        addClass(collapseElement,collapsing);
        removeClass(collapseElement,component);
        collapseElement[style][height] = collapseElement[scrollHeight] + 'px';
        
        emulateTransitionEnd(collapseElement, function() {
          collapseElement[isAnimating] = false;
          collapseElement[setAttribute](ariaExpanded,'true');
          toggle[setAttribute](ariaExpanded,'true');
          removeClass(collapseElement,collapsing);
          addClass(collapseElement, component);
          addClass(collapseElement,showClass);
          collapseElement[style][height] = '';
          bootstrapCustomEvent.call(collapseElement, shownEvent, component);
        });
      },
      closeAction = function(collapseElement,toggle) {
        bootstrapCustomEvent.call(collapseElement, hideEvent, component);
        collapseElement[isAnimating] = true;
        collapseElement[style][height] = collapseElement[scrollHeight] + 'px'; // set height first
        removeClass(collapseElement,component);
        removeClass(collapseElement,showClass);
        addClass(collapseElement,collapsing);
        collapseElement[offsetWidth]; // force reflow to enable transition
        collapseElement[style][height] = '0px';
        
        emulateTransitionEnd(collapseElement, function() {
          collapseElement[isAnimating] = false;
          collapseElement[setAttribute](ariaExpanded,'false');
          toggle[setAttribute](ariaExpanded,'false');
          removeClass(collapseElement,collapsing);
          addClass(collapseElement,component);
          collapseElement[style][height] = '';
          bootstrapCustomEvent.call(collapseElement, hiddenEvent, component);
        });
      },
      getTarget = function() {
        var href = element.href && element[getAttribute]('href'),
          parent = element[getAttribute](dataTarget),
          id = href || ( parent && parent.charAt(0) === '#' ) && parent;
        return id && queryElement(id);
      };
    
    // public methods
    this.toggle = function(e) {
      e[preventDefault]();
      if (!hasClass(collapse,showClass)) { self.show(); } 
      else { self.hide(); }
    };
    this.hide = function() {
      if ( collapse[isAnimating] ) return;    
      closeAction(collapse,element);
      addClass(element,collapsed);
    };
    this.show = function() {
      if ( accordion ) {
        activeCollapse = queryElement('.'+component+'.'+showClass,accordion);
        activeElement = activeCollapse && (queryElement('['+dataTarget+'="#'+activeCollapse.id+'"]',accordion)
                      || queryElement('[href="#'+activeCollapse.id+'"]',accordion) );
      }
  
      if ( !collapse[isAnimating] || activeCollapse && !activeCollapse[isAnimating] ) {
        if ( activeElement && activeCollapse !== collapse ) {
          closeAction(activeCollapse,activeElement); 
          addClass(activeElement,collapsed);
        }
        openAction(collapse,element);
        removeClass(element,collapsed);
      }
    };
  
    // init
    if ( !(stringCollapse in element ) ) { // prevent adding event handlers twice
      on(element, clickEvent, self.toggle);
    }
    collapse = getTarget();
    collapse[isAnimating] = false;  // when true it will prevent click handlers  
    accordion = queryElement(options.parent) || accordionData && getClosest(element, accordionData);
    element[stringCollapse] = self;
  };
  
  // COLLAPSE DATA API
  // =================
  supports[push]( [ stringCollapse, Collapse, '['+dataToggle+'="collapse"]' ] );
  
  
  /* Native Javascript for Bootstrap 4 | Dropdown
  ----------------------------------------------*/
  
  // DROPDOWN DEFINITION
  // ===================
  var Dropdown = function( element, option ) {
      
    // initialization element
    element = queryElement(element);
  
    // set option
    this.persist = option === true || element[getAttribute]('data-persist') === 'true' || false;
  
    // constants, event targets, strings
    var self = this, children = 'children',
      parent = element[parentNode],
      component = 'dropdown', open = 'open',
      relatedTarget = null,
      menu = queryElement('.dropdown-menu', parent),
      menuItems = (function(){
        var set = menu[children], newSet = [];
        for ( var i=0; i<set[length]; i++ ){
          set[i][children][length] && (set[i][children][0].tagName === 'A' && newSet[push](set[i][children][0]));
          set[i].tagName === 'A' && newSet[push](set[i]);
        }
        return newSet;
      })(),
  
      // preventDefault on empty anchor links
      preventEmptyAnchor = function(anchor){
        (anchor.href && anchor.href.slice(-1) === '#' || anchor[parentNode] && anchor[parentNode].href 
          && anchor[parentNode].href.slice(-1) === '#') && this[preventDefault]();    
      },
  
      // toggle dismissible events
      toggleDismiss = function(){
        var type = element[open] ? on : off;
        type(DOC, clickEvent, dismissHandler); 
        type(DOC, keydownEvent, preventScroll);
        type(DOC, keyupEvent, keyHandler);
        type(DOC, focusEvent, dismissHandler, true);
      },
  
      // handlers
      dismissHandler = function(e) {
        var eventTarget = e[target], hasData = eventTarget && (eventTarget[getAttribute](dataToggle) 
                              || eventTarget[parentNode] && getAttribute in eventTarget[parentNode] 
                              && eventTarget[parentNode][getAttribute](dataToggle));
        if ( e.type === focusEvent && (eventTarget === element || eventTarget === menu || menu[contains](eventTarget) ) ) {
          return;
        }
        if ( (eventTarget === menu || menu[contains](eventTarget)) && (self.persist || hasData) ) { return; }
        else {
          relatedTarget = eventTarget === element || element[contains](eventTarget) ? element : null;
          hide();
        }
        preventEmptyAnchor.call(e,eventTarget);
      },
      clickHandler = function(e) {
        relatedTarget = element;
        show();
        preventEmptyAnchor.call(e,e[target]);
      },
      preventScroll = function(e){
        var key = e.which || e.keyCode;
        if( key === 38 || key === 40 ) { e[preventDefault](); }
      },
      keyHandler = function(e){
        var key = e.which || e.keyCode,
          activeItem = DOC.activeElement,
          idx = menuItems[indexOf](activeItem),
          isSameElement = activeItem === element,
          isInsideMenu = menu[contains](activeItem),
          isMenuItem = activeItem[parentNode] === menu || activeItem[parentNode][parentNode] === menu;          
  
        if ( isMenuItem ) { // navigate up | down
          idx = isSameElement ? 0 
                              : key === 38 ? (idx>1?idx-1:0)
                              : key === 40 ? (idx<menuItems[length]-1?idx+1:idx) : idx;
          menuItems[idx] && setFocus(menuItems[idx]);
        }
        if ( (menuItems[length] && isMenuItem // menu has items
              || !menuItems[length] && (isInsideMenu || isSameElement)  // menu might be a form
              || !isInsideMenu ) // or the focused element is not in the menu at all
              && element[open] && key === 27  // menu must be open
        ) {
          self.toggle();
          relatedTarget = null;
        }
      },
  
      // private methods
      show = function() {
        bootstrapCustomEvent.call(parent, showEvent, component, relatedTarget);
        addClass(menu,showClass);
        addClass(parent,showClass);
        element[setAttribute](ariaExpanded,true);
        bootstrapCustomEvent.call(parent, shownEvent, component, relatedTarget);
        element[open] = true;
        off(element, clickEvent, clickHandler);
        setTimeout(function(){
          setFocus( menu[getElementsByTagName]('INPUT')[0] || element ); // focus the first input item | element
          toggleDismiss();
        },1);
      },
      hide = function() {
        bootstrapCustomEvent.call(parent, hideEvent, component, relatedTarget);
        removeClass(menu,showClass);
        removeClass(parent,showClass);
        element[setAttribute](ariaExpanded,false);
        bootstrapCustomEvent.call(parent, hiddenEvent, component, relatedTarget);
        element[open] = false;
        toggleDismiss();
        setFocus(element);
        setTimeout(function(){ on(element, clickEvent, clickHandler); },1);
      };
  
    // set initial state to closed
    element[open] = false;
  
    // public methods
    this.toggle = function() {
      if (hasClass(parent,showClass) && element[open]) { hide(); } 
      else { show(); }
    };
  
    // init
    if ( !(stringDropdown in element) ) { // prevent adding event handlers twice
      !tabindex in menu && menu[setAttribute](tabindex, '0'); // Fix onblur on Chrome | Safari
      on(element, clickEvent, clickHandler);
    }
  
    element[stringDropdown] = self;
  };
  
  // DROPDOWN DATA API
  // =================
  supports[push]( [stringDropdown, Dropdown, '['+dataToggle+'="dropdown"]'] );
  
  
  /* Native Javascript for Bootstrap 4 | Modal
  -------------------------------------------*/
  
  // MODAL DEFINITION
  // ===============
  var Modal = function(element, options) { // element can be the modal/triggering button
  
    // the modal (both JavaScript / DATA API init) / triggering button element (DATA API)
    element = queryElement(element);
  
      // strings
      var component = 'modal',
        staticString = 'static',
        modalTrigger = 'modalTrigger',
        paddingRight = 'paddingRight',
        modalBackdropString = 'modal-backdrop',
        isAnimating = 'isAnimating',
        // determine modal, triggering element
        btnCheck = element[getAttribute](dataTarget)||element[getAttribute]('href'),
        checkModal = queryElement( btnCheck ),
        modal = hasClass(element,component) ? element : checkModal;
  
      if ( hasClass(element, component) ) { element = null; } // modal is now independent of it's triggering element
  
    if ( !modal ) { return; } // invalidate
  
    // set options
    options = options || {};
  
    this[keyboard] = options[keyboard] === false || modal[getAttribute](dataKeyboard) === 'false' ? false : true;
    this[backdrop] = options[backdrop] === staticString || modal[getAttribute](databackdrop) === staticString ? staticString : true;
    this[backdrop] = options[backdrop] === false || modal[getAttribute](databackdrop) === 'false' ? false : this[backdrop];
    this[animation] = hasClass(modal, 'fade') ? true : false;
    this[content]  = options[content]; // JavaScript only
  
    // set an initial state of the modal
    modal[isAnimating] = false;
    
    // bind, constants, event targets and other vars
    var self = this, relatedTarget = null,
      bodyIsOverflowing, scrollBarWidth, overlay, overlayDelay, modalTimer,
  
      // also find fixed-top / fixed-bottom items
      fixedItems = getElementsByClassName(HTML,fixedTop).concat(getElementsByClassName(HTML,fixedBottom)),
  
      // private methods
      getWindowWidth = function() {
        var htmlRect = HTML[getBoundingClientRect]();
        return globalObject[innerWidth] || (htmlRect[right] - Math.abs(htmlRect[left]));
      },
      setScrollbar = function () {
        var bodyStyle = globalObject[getComputedStyle](DOC[body]),
            bodyPad = parseInt((bodyStyle[paddingRight]), 10), itemPad;
        if (bodyIsOverflowing) {
          DOC[body][style][paddingRight] = (bodyPad + scrollBarWidth) + 'px';
          modal[style][paddingRight] = scrollBarWidth+'px';
          if (fixedItems[length]){
            for (var i = 0; i < fixedItems[length]; i++) {
              itemPad = globalObject[getComputedStyle](fixedItems[i])[paddingRight];
              fixedItems[i][style][paddingRight] = ( parseInt(itemPad) + scrollBarWidth) + 'px';
            }
          }
        }
      },
      resetScrollbar = function () {
        DOC[body][style][paddingRight] = '';
        modal[style][paddingRight] = '';
        if (fixedItems[length]){
          for (var i = 0; i < fixedItems[length]; i++) {
            fixedItems[i][style][paddingRight] = '';
          }
        }
      },
      measureScrollbar = function () { // thx walsh
        var scrollDiv = DOC[createElement]('div'), widthValue;
        scrollDiv.className = component+'-scrollbar-measure'; // this is here to stay
        DOC[body][appendChild](scrollDiv);
        widthValue = scrollDiv[offsetWidth] - scrollDiv[clientWidth];
        DOC[body].removeChild(scrollDiv);
        return widthValue;
      },
      checkScrollbar = function () {
        bodyIsOverflowing = DOC[body][clientWidth] < getWindowWidth();
        scrollBarWidth = measureScrollbar();
      },
      createOverlay = function() {
        var newOverlay = DOC[createElement]('div');
        overlay = queryElement('.'+modalBackdropString);
  
        if ( overlay === null ) {
          newOverlay[setAttribute]('class', modalBackdropString + (self[animation] ? ' fade' : ''));
          overlay = newOverlay;
          DOC[body][appendChild](overlay);
        }
        modalOverlay = 1;
      },
      removeOverlay = function() {
        overlay = queryElement('.'+modalBackdropString);
        if ( overlay && overlay !== null && typeof overlay === 'object' ) {
          modalOverlay = 0;
          DOC[body].removeChild(overlay); overlay = null;
        }
      },
      // triggers
      triggerShow = function() {
        setFocus(modal);
        modal[isAnimating] = false;
        bootstrapCustomEvent.call(modal, shownEvent, component, relatedTarget);
  
        on(globalObject, resizeEvent, self.update, passiveHandler);
        on(modal, clickEvent, dismissHandler);
        on(DOC, keydownEvent, keyHandler);      
      },
      triggerHide = function() {
        modal[style].display = '';
        element && (setFocus(element));
        bootstrapCustomEvent.call(modal, hiddenEvent, component);
  
        (function(){
          if (!getElementsByClassName(DOC,component+' '+showClass)[0]) {
            resetScrollbar();
            removeClass(DOC[body],component+'-open');
            overlay && hasClass(overlay,'fade') ? (removeClass(overlay,showClass), emulateTransitionEnd(overlay,removeOverlay))
            : removeOverlay();
  
            off(globalObject, resizeEvent, self.update, passiveHandler);
            off(modal, clickEvent, dismissHandler);
            off(DOC, keydownEvent, keyHandler);
          }
        }());
        modal[isAnimating] = false;
      },
      // handlers
      clickHandler = function(e) {
        if ( modal[isAnimating] ) return;
  
        var clickTarget = e[target];
        clickTarget = clickTarget[hasAttribute](dataTarget) || clickTarget[hasAttribute]('href') ? clickTarget : clickTarget[parentNode];
        if ( clickTarget === element && !hasClass(modal,showClass) ) {
          modal[modalTrigger] = element;
          relatedTarget = element;
          self.show();
          e[preventDefault]();
        }
      },
      keyHandler = function(e) {
        if ( modal[isAnimating] ) return;
  
        if (self[keyboard] && e.which == 27 && hasClass(modal,showClass) ) {
          self.hide();
        }
      },
      dismissHandler = function(e) {
        if ( modal[isAnimating] ) return;
        var clickTarget = e[target];
  
        if ( hasClass(modal,showClass) && ( clickTarget[parentNode][getAttribute](dataDismiss) === component
            || clickTarget[getAttribute](dataDismiss) === component
            || clickTarget === modal && self[backdrop] !== staticString ) ) {
          self.hide(); relatedTarget = null;
          e[preventDefault]();
        }
      };
  
    // public methods
    this.toggle = function() {
      if ( hasClass(modal,showClass) ) {this.hide();} else {this.show();}
    };
    this.show = function() {
      if ( hasClass(modal,showClass) || modal[isAnimating] ) {return}
  
      clearTimeout(modalTimer);
      modalTimer = setTimeout(function(){
        modal[isAnimating] = true;
        bootstrapCustomEvent.call(modal, showEvent, component, relatedTarget);
  
        // we elegantly hide any opened modal
        var currentOpen = getElementsByClassName(DOC,component+' '+showClass)[0];
        if (currentOpen && currentOpen !== modal) {
          modalTrigger in currentOpen && currentOpen[modalTrigger][stringModal].hide();
          stringModal in currentOpen && currentOpen[stringModal].hide();
        }
  
        if ( self[backdrop] ) {
          !modalOverlay && !overlay && createOverlay();
        }
  
        if ( overlay && !hasClass(overlay,showClass) ) {
          overlay[offsetWidth]; // force reflow to enable trasition
          overlayDelay = getTransitionDurationFromElement(overlay);
          addClass(overlay, showClass);
        }
  
        setTimeout( function() {
          modal[style].display = 'block';
  
          checkScrollbar();
          setScrollbar();
  
          addClass(DOC[body],component+'-open');
          addClass(modal,showClass);
          modal[setAttribute](ariaHidden, false);
  
          hasClass(modal,'fade') ? emulateTransitionEnd(modal, triggerShow) : triggerShow();
        }, supportTransitions && overlay && overlayDelay ? overlayDelay : 1);
      },1);
    };
    this.hide = function() {
      if ( modal[isAnimating] || !hasClass(modal,showClass) ) {return}
  
      clearTimeout(modalTimer);
      modalTimer = setTimeout(function(){
        modal[isAnimating] = true;    
        bootstrapCustomEvent.call(modal, hideEvent, component);
        overlay = queryElement('.'+modalBackdropString);
        overlayDelay = overlay && getTransitionDurationFromElement(overlay);
  
        removeClass(modal,showClass);
        modal[setAttribute](ariaHidden, true);
  
        setTimeout(function(){
          hasClass(modal,'fade') ? emulateTransitionEnd(modal, triggerHide) : triggerHide();
        }, supportTransitions && overlay && overlayDelay ? overlayDelay : 2);
      },2)
    };
    this.setContent = function( content ) {
      queryElement('.'+component+'-content',modal)[innerHTML] = content;
    };
    this.update = function() {
      if (hasClass(modal,showClass)) {
        checkScrollbar();
        setScrollbar();
      }
    };
  
    // init
    // prevent adding event handlers over and over
    // modal is independent of a triggering element
    if ( !!element && !(stringModal in element) ) {
      on(element, clickEvent, clickHandler);
    }
    if ( !!self[content] ) { self.setContent( self[content] ); }
    if (element) { element[stringModal] = self; modal[modalTrigger] = element; }
    else { modal[stringModal] = self; }
  };
  
  // DATA API
  supports[push]( [ stringModal, Modal, '['+dataToggle+'="modal"]' ] );
  
  /* Native Javascript for Bootstrap 4 | Popover
  ----------------------------------------------*/
  
  // POPOVER DEFINITION
  // ==================
  var Popover = function( element, options ) {
  
    // initialization element
    element = queryElement(element);
  
    // set options
    options = options || {};
  
    // DATA API
    var triggerData = element[getAttribute](dataTrigger), // click / hover / focus
        animationData = element[getAttribute](dataAnimation), // true / false
        placementData = element[getAttribute](dataPlacement),
        dismissibleData = element[getAttribute](dataDismissible),
        delayData = element[getAttribute](dataDelay),
        containerData = element[getAttribute](dataContainer),
  
        // internal strings
        component = 'popover',
        template = 'template',
        trigger = 'trigger',
        classString = 'class',
        div = 'div',
        fade = 'fade',
        dataContent = 'data-content',
        dismissible = 'dismissible',
        closeBtn = '<button type="button" class="close">×</button>',
  
        // check container
        containerElement = queryElement(options[container]),
        containerDataElement = queryElement(containerData),       
        
        // maybe the element is inside a modal
        modal = getClosest(element,'.modal'),
        
        // maybe the element is inside a fixed navbar
        navbarFixedTop = getClosest(element,'.'+fixedTop),
        navbarFixedBottom = getClosest(element,'.'+fixedBottom);
  
    // set instance options
    this[template] = options[template] ? options[template] : null; // JavaScript only
    this[trigger] = options[trigger] ? options[trigger] : triggerData || hoverEvent;
    this[animation] = options[animation] && options[animation] !== fade ? options[animation] : animationData || fade;
    this[placement] = options[placement] ? options[placement] : placementData || top;
    this[delay] = parseInt(options[delay] || delayData) || 200;
    this[dismissible] = options[dismissible] || dismissibleData === 'true' ? true : false;
    this[container] = containerElement ? containerElement 
                    : containerDataElement ? containerDataElement 
                    : navbarFixedTop ? navbarFixedTop
                    : navbarFixedBottom ? navbarFixedBottom
                    : modal ? modal : DOC[body];
    
    // bind, content
    var self = this, 
        titleString = options.title || element[getAttribute](dataTitle) || null,
        contentString = options.content || element[getAttribute](dataContent) || null;
  
    if ( !contentString && !this[template] ) return; // invalidate
  
    // constants, vars
    var popover = null, timer = 0, placementSetting = this[placement],
      
      // handlers
      dismissibleHandler = function(e) {
        if (popover !== null && e[target] === queryElement('.close',popover)) {
          self.hide();
        }
      },
  
      // private methods
      removePopover = function() {
        self[container].removeChild(popover);
        timer = null; popover = null; 
      },
      createPopover = function() {
        titleString = options.title || element[getAttribute](dataTitle);
        contentString = options.content || element[getAttribute](dataContent);
        // fixing https://github.com/thednp/bootstrap.native/issues/233
        contentString = !!contentString ? contentString.trim() : null;
  
        popover = DOC[createElement](div);
  
        // popover arrow
        var popoverArrow = DOC[createElement](div);
        popoverArrow[setAttribute](classString,'arrow');
        popover[appendChild](popoverArrow);
  
        if ( contentString !== null && self[template] === null ) { //create the popover from data attributes
  
          popover[setAttribute]('role','tooltip');     
  
          if (titleString !== null) {
            var popoverTitle = DOC[createElement]('h3');
            popoverTitle[setAttribute](classString,component+'-header');
  
            popoverTitle[innerHTML] = self[dismissible] ? titleString + closeBtn : titleString;
            popover[appendChild](popoverTitle);
          }
  
          //set popover content
          var popoverContent = DOC[createElement](div);
          popoverContent[setAttribute](classString,component+'-body');
          popoverContent[innerHTML] = self[dismissible] && titleString === null ? contentString + closeBtn : contentString;
          popover[appendChild](popoverContent);
  
        } else {  // or create the popover from template
          var popoverTemplate = DOC[createElement](div);
          self[template] = self[template].trim();
          popoverTemplate[innerHTML] = self[template];
          popover[innerHTML] = popoverTemplate.firstChild[innerHTML];
        }
  
        //append to the container
        self[container][appendChild](popover);
        popover[style].display = 'block';
        popover[setAttribute](classString, component+ ' bs-' + component+'-'+placementSetting + ' ' + self[animation]);
      },
      showPopover = function () {
        !hasClass(popover,showClass) && ( addClass(popover,showClass) );
      },
      updatePopover = function() {
        styleTip(element, popover, placementSetting, self[container]);
      },
  
      // event toggle
      dismissHandlerToggle = function(type){
        if (clickEvent == self[trigger] || 'focus' == self[trigger]) {
          !self[dismissible] && type( element, 'blur', self.hide );
        }
        self[dismissible] && type( DOC, clickEvent, dismissibleHandler );     
        type( globalObject, resizeEvent, self.hide, passiveHandler );
      },
  
      // triggers
      showTrigger = function() {
        dismissHandlerToggle(on);
        bootstrapCustomEvent.call(element, shownEvent, component);
      },
      hideTrigger = function() {
        dismissHandlerToggle(off);
        removePopover();
        bootstrapCustomEvent.call(element, hiddenEvent, component);
      };
  
    // public methods / handlers
    this.toggle = function() {
      if (popover === null) { self.show(); } 
      else { self.hide(); }
    };
    this.show = function() {
      clearTimeout(timer);
      timer = setTimeout( function() {
        if (popover === null) {
          placementSetting = self[placement]; // we reset placement in all cases
          createPopover();
          updatePopover();
          showPopover();
          bootstrapCustomEvent.call(element, showEvent, component);
          !!self[animation] ? emulateTransitionEnd(popover, showTrigger) : showTrigger();
        }
      }, 20 );
    };
    this.hide = function() {
      clearTimeout(timer);
      timer = setTimeout( function() {
        if (popover && popover !== null && hasClass(popover,showClass)) {
          bootstrapCustomEvent.call(element, hideEvent, component);
          removeClass(popover,showClass);
          !!self[animation] ? emulateTransitionEnd(popover, hideTrigger) : hideTrigger();
        }
      }, self[delay] );
    };
  
    // init
    if ( !(stringPopover in element) ) { // prevent adding event handlers twice
      if (self[trigger] === hoverEvent) {
        on( element, mouseHover[0], self.show );
        if (!self[dismissible]) { on( element, mouseHover[1], self.hide ); }
      } else if (clickEvent == self[trigger] || 'focus' == self[trigger]) {
        on( element, self[trigger], self.toggle );
      }
    }
    element[stringPopover] = self;
  };
  
  // POPOVER DATA API
  // ================
  supports[push]( [ stringPopover, Popover, '['+dataToggle+'="popover"]' ] );
  
  
  /* Native Javascript for Bootstrap 4 | ScrollSpy
  -----------------------------------------------*/
  
  // SCROLLSPY DEFINITION
  // ====================
  var ScrollSpy = function(element, options) {
  
    // initialization element, the element we spy on
    element = queryElement(element); 
  
    // DATA API
    var targetData = queryElement(element[getAttribute](dataTarget)),
        offsetData = element[getAttribute]('data-offset');
  
    // set options
    options = options || {};
  
    // invalidate
    if ( !options[target] && !targetData ) { return; } 
  
    // event targets, constants
    var self = this, spyTarget = options[target] && queryElement(options[target]) || targetData,
        links = spyTarget && spyTarget[getElementsByTagName]('A'),
        offset = parseInt(options['offset'] || offsetData) || 10,      
        items = [], targetItems = [], scrollOffset,
        scrollTarget = element[offsetHeight] < element[scrollHeight] ? element : globalObject, // determine which is the real scrollTarget
        isWindow = scrollTarget === globalObject;  
  
    // populate items and targets
    for (var i=0, il=links[length]; i<il; i++) {
      var href = links[i][getAttribute]('href'), 
          targetItem = href && href.charAt(0) === '#' && href.slice(-1) !== '#' && queryElement(href);
      if ( !!targetItem ) {
        items[push](links[i]);
        targetItems[push](targetItem);
      }
    }
  
    // private methods
    var updateItem = function(index) {
        var item = items[index],
          targetItem = targetItems[index], // the menu item targets this element
          dropdown = item[parentNode][parentNode],
          dropdownLink = hasClass(dropdown,'dropdown') && dropdown[getElementsByTagName]('A')[0],
          targetRect = isWindow && targetItem[getBoundingClientRect](),
  
          isActive = hasClass(item,active) || false,
  
          topEdge = (isWindow ? targetRect[top] + scrollOffset : targetItem[offsetTop]) - offset,
          bottomEdge = isWindow ? targetRect[bottom] + scrollOffset - offset : targetItems[index+1] ? targetItems[index+1][offsetTop] - offset : element[scrollHeight],
  
          inside = scrollOffset >= topEdge && bottomEdge > scrollOffset;
  
        if ( !isActive && inside ) {
          if ( !hasClass(item,active) ) {
            addClass(item,active);
            if (dropdownLink && !hasClass(dropdownLink,active) ) {
              addClass(dropdownLink,active);
            }
            bootstrapCustomEvent.call(element, 'activate', 'scrollspy', items[index]);
          }
        } else if ( !inside ) {
          if ( hasClass(item,active) ) {
            removeClass(item,active);
            if (dropdownLink && hasClass(dropdownLink,active) && !getElementsByClassName(item[parentNode],active).length  ) {
              removeClass(dropdownLink,active);
            }
          }
        } else if ( !inside && !isActive || isActive && inside ) {
          return;
        }
      },
      updateItems = function(){
        scrollOffset = isWindow ? getScroll().y : element[scrollTop];
        for (var index=0, itl=items[length]; index<itl; index++) {
          updateItem(index)
        }
      };
  
    // public method
    this.refresh = function () {
      updateItems();
    }
  
    // init
    if ( !(stringScrollSpy in element) ) { // prevent adding event handlers twice
      on( scrollTarget, scrollEvent, self.refresh, passiveHandler );
      on( globalObject, resizeEvent, self.refresh, passiveHandler );
    }
    self.refresh();
    element[stringScrollSpy] = self;
  };
  
  // SCROLLSPY DATA API
  // ==================
  supports[push]( [ stringScrollSpy, ScrollSpy, '['+dataSpy+'="scroll"]' ] );
  
  
  /* Native Javascript for Bootstrap 4 | Tab
  -----------------------------------------*/
  
  // TAB DEFINITION
  // ==============
  var Tab = function( element, options ) {
  
    // initialization element
    element = queryElement(element);
  
    // DATA API
    var heightData = element[getAttribute](dataHeight),
      
        // strings
        component = 'tab', height = 'height', float = 'float', isAnimating = 'isAnimating';
        
    // set options
    options = options || {};
    this[height] = supportTransitions ? (options[height] || heightData === 'true') : false;
  
    // bind, event targets
    var self = this, next,
      tabs = getClosest(element,'.nav'),
      tabsContentContainer = false,
      dropdown = tabs && queryElement('.dropdown-toggle',tabs),
      activeTab, activeContent, nextContent, containerHeight, equalContents, nextHeight,
      
      // trigger
      triggerEnd = function(){
        tabsContentContainer[style][height] = '';
        removeClass(tabsContentContainer,collapsing);
        tabs[isAnimating] = false;
      },
      triggerShow = function() {
        if (tabsContentContainer) { // height animation
          if ( equalContents ) {
            triggerEnd();
          } else {
            setTimeout(function(){ // enables height animation
              tabsContentContainer[style][height] = nextHeight + 'px'; // height animation
              tabsContentContainer[offsetWidth];
              emulateTransitionEnd(tabsContentContainer, triggerEnd);
            },50);
          }
        } else {
          tabs[isAnimating] = false; 
        }
        bootstrapCustomEvent.call(next, shownEvent, component, activeTab);
      },
      triggerHide = function() {
        if (tabsContentContainer) {
          activeContent[style][float] = left;
          nextContent[style][float] = left;        
          containerHeight = activeContent[scrollHeight];
        }
          
        addClass(nextContent,active);
        bootstrapCustomEvent.call(next, showEvent, component, activeTab);
  
        removeClass(activeContent,active);
        bootstrapCustomEvent.call(activeTab, hiddenEvent, component, next);
        
        if (tabsContentContainer) {
          nextHeight = nextContent[scrollHeight];
          equalContents = nextHeight === containerHeight;
          addClass(tabsContentContainer,collapsing);
          tabsContentContainer[style][height] = containerHeight + 'px'; // height animation
          tabsContentContainer[offsetHeight];
          activeContent[style][float] = '';
          nextContent[style][float] = '';
        }
  
        if ( hasClass(nextContent, 'fade') ) {
          setTimeout(function(){
            addClass(nextContent,showClass);
            emulateTransitionEnd(nextContent,triggerShow);
          },20);
        } else { triggerShow(); }        
      };
  
    if (!tabs) return; // invalidate
  
    // set default animation state
    tabs[isAnimating] = false;    
          
    // private methods
    var getActiveTab = function() {
        var activeTabs = getElementsByClassName(tabs,active), activeTab;
        if ( activeTabs[length] === 1 && !hasClass(activeTabs[0][parentNode],'dropdown') ) {
          activeTab = activeTabs[0];
        } else if ( activeTabs[length] > 1 ) {
          activeTab = activeTabs[activeTabs[length]-1];
        }
        return activeTab;
      },
      getActiveContent = function() {
        return queryElement(getActiveTab()[getAttribute]('href'));
      },
      // handler 
      clickHandler = function(e) {
        e[preventDefault]();
        next = e[currentTarget];
        !tabs[isAnimating] && !hasClass(next,active) && self.show();
      };
  
    // public method
    this.show = function() { // the tab we clicked is now the next tab
      next = next || element;
      nextContent = queryElement(next[getAttribute]('href')); //this is the actual object, the next tab content to activate
      activeTab = getActiveTab(); 
      activeContent = getActiveContent();
      
      tabs[isAnimating] = true;
      removeClass(activeTab,active);
      activeTab[setAttribute](ariaSelected,'false');
      addClass(next,active);
      next[setAttribute](ariaSelected,'true');    
  
      if ( dropdown ) {
        if ( !hasClass(element[parentNode],'dropdown-menu') ) {
          if (hasClass(dropdown,active)) removeClass(dropdown,active);
        } else {
          if (!hasClass(dropdown,active)) addClass(dropdown,active);
        }
      }
      
      bootstrapCustomEvent.call(activeTab, hideEvent, component, next);
  
      if (hasClass(activeContent, 'fade')) {
        removeClass(activeContent,showClass);
        emulateTransitionEnd(activeContent, triggerHide);
      } else { triggerHide(); }
    };
  
    // init
    if ( !(stringTab in element) ) { // prevent adding event handlers twice
      on(element, clickEvent, clickHandler);
    }
    if (self[height]) { tabsContentContainer = getActiveContent()[parentNode]; }
    element[stringTab] = self;
  };
  
  // TAB DATA API
  // ============
  supports[push]( [ stringTab, Tab, '['+dataToggle+'="tab"]' ] );
  
  
  /* Native Javascript for Bootstrap 4 | Toast
  ---------------------------------------------*/
  
  // TOAST DEFINITION
  // ==================
  var Toast = function( element,options ) {
  
    // initialization element
    element = queryElement(element);
  
    // set options
    options = options || {};
  
    // DATA API
    var animationData = element[getAttribute](dataAnimation),
        autohideData = element[getAttribute](dataAutohide),
        delayData = element[getAttribute](dataDelay),
        
        // strings
        component = 'toast',
        autohide = 'autohide',
        animation = 'animation',
        showing = 'showing',
        hide = 'hide',
        fade = 'fade';
  
    // set instance options
    this[animation] = options[animation] === false || animationData === 'false' ? 0 : 1; // true by default
    this[autohide] = options[autohide] === false || autohideData === 'false' ? 0 : 1; // true by default
    this[delay] = parseInt(options[delay] || delayData) || 500; // 500ms default
  
    // bind,toast and timer
    var self = this, timer = 0,
        // get the toast element
        toast = getClosest(element,'.toast');
  
    // private methods
    // animation complete
    var showComplete = function() {
        removeClass( toast, showing );
        addClass( toast, showClass );
        bootstrapCustomEvent.call(toast, shownEvent, component);
        if (self[autohide]) { self.hide(); }
      },
      hideComplete = function() {
        addClass( toast, hide );
        bootstrapCustomEvent.call(toast, hiddenEvent, component);
      },
      close = function() {
        removeClass( toast,showClass );
        self[animation] ? emulateTransitionEnd(toast, hideComplete) : hideComplete();
      },
      disposeComplete = function(){
        clearTimeout(timer); timer = null;
        addClass( toast, hide );
        off(element, clickEvent, self.hide);
        element[stringToast] = null;
        element = null;
        toast = null;
      };
  
    // public methods
    this.show = function() {
      if (toast) {
        bootstrapCustomEvent.call(toast, showEvent, component);
        self[animation] && addClass( toast,fade );
        removeClass( toast,hide );
        addClass( toast,showing );
  
        self[animation] ? emulateTransitionEnd(toast, showComplete) : showComplete();
      }
    };
    this.hide = function(noTimer) {
      if (toast && hasClass(toast,showClass)) {
        bootstrapCustomEvent.call(toast, hideEvent, component);
  
        if (noTimer) {
          close();
        } else {
          timer = setTimeout( close, self[delay]);
        }
      }
    };
    this.dispose = function() {
      if ( toast && hasClass(toast,showClass) ) {
        removeClass( toast,showClass );
        self[animation] ? emulateTransitionEnd(toast, disposeComplete) : disposeComplete();
      }
    };
  
    // init
    if ( !(stringToast in element) ) { // prevent adding event handlers twice
      on(element, clickEvent, self.hide);
    }
    element[stringToast] = self;
  };
  
  // TOAST DATA API
  // =================
  supports[push]( [ stringToast, Toast, '['+dataDismiss+'="toast"]' ] );
  
  
  /* Native Javascript for Bootstrap 4 | Tooltip
  ---------------------------------------------*/
  
  // TOOLTIP DEFINITION
  // ==================
  var Tooltip = function( element,options ) {
  
    // initialization element
    element = queryElement(element);
  
    // set options
    options = options || {};
  
    // DATA API
    var animationData = element[getAttribute](dataAnimation),
        placementData = element[getAttribute](dataPlacement),
        delayData = element[getAttribute](dataDelay),
        containerData = element[getAttribute](dataContainer),
        
        // strings
        component = 'tooltip',
        classString = 'class',
        title = 'title',
        fade = 'fade',
        div = 'div',
  
        // check container
        containerElement = queryElement(options[container]),
        containerDataElement = queryElement(containerData),      
  
        // maybe the element is inside a modal
        modal = getClosest(element,'.modal'),
        
        // maybe the element is inside a fixed navbar
        navbarFixedTop = getClosest(element,'.'+fixedTop),
        navbarFixedBottom = getClosest(element,'.'+fixedBottom);
  
    // set instance options
    this[animation] = options[animation] && options[animation] !== fade ? options[animation] : animationData || fade;
    this[placement] = options[placement] ? options[placement] : placementData || top;
    this[delay] = parseInt(options[delay] || delayData) || 200;
    this[container] = containerElement ? containerElement 
                    : containerDataElement ? containerDataElement
                    : navbarFixedTop ? navbarFixedTop
                    : navbarFixedBottom ? navbarFixedBottom
                    : modal ? modal : DOC[body];
  
    // bind, event targets, title and constants
    var self = this, timer = 0, placementSetting = this[placement], tooltip = null,
        titleString = element[getAttribute](title) || element[getAttribute](dataTitle) || element[getAttribute](dataOriginalTitle);
  
    if ( !titleString || titleString == "" ) return; // invalidate
  
    // private methods
    var removeToolTip = function() {
        self[container].removeChild(tooltip);
        tooltip = null; timer = null;
      },
      createToolTip = function() {
        titleString = element[getAttribute](title) || element[getAttribute](dataTitle) || element[getAttribute](dataOriginalTitle); // read the title again
  
        if ( titleString && titleString !== "" ) { // invalidate, maybe markup changed
          tooltip = DOC[createElement](div);
          tooltip[setAttribute]('role',component);
          tooltip[style][left] = '0';
          tooltip[style][top] = '0';        
  
          // tooltip arrow
          var tooltipArrow = DOC[createElement](div);
          tooltipArrow[setAttribute](classString,'arrow');
          tooltip[appendChild](tooltipArrow);
      
          var tooltipInner = DOC[createElement](div);
          tooltipInner[setAttribute](classString,component+'-inner');
          tooltip[appendChild](tooltipInner);
          tooltipInner[innerHTML] = titleString;
  
          self[container][appendChild](tooltip);
          tooltip[setAttribute](classString, component + ' bs-' + component+'-'+placementSetting + ' ' + self[animation]);
        }
      },
      updateTooltip = function () {
        styleTip(element, tooltip, placementSetting, self[container]);
      },
      showTooltip = function () {
        !hasClass(tooltip,showClass) && ( addClass(tooltip,showClass) );
      },
      // triggers
      showTrigger = function() {
        on( globalObject, resizeEvent, self.hide, passiveHandler );
        bootstrapCustomEvent.call(element, shownEvent, component);
      },
      hideTrigger = function() {
        off( globalObject, resizeEvent, self.hide, passiveHandler );
        removeToolTip();
        bootstrapCustomEvent.call(element, hiddenEvent, component);
      };
  
    // public methods
    this.show = function() {
      clearTimeout(timer);
      timer = setTimeout( function() {
        if (tooltip === null) {
          placementSetting = self[placement]; // we reset placement in all cases
          // if(createToolTip() == false) return;
          if(createToolTip() !== false) {
            updateTooltip();
            showTooltip();
            bootstrapCustomEvent.call(element, showEvent, component);
            !!self[animation] ? emulateTransitionEnd(tooltip, showTrigger) : showTrigger();          
          }
        }
      }, 20 );
    };
    this.hide = function() {
      clearTimeout(timer);
      timer = setTimeout( function() {
        if (tooltip && hasClass(tooltip,showClass)) {
          bootstrapCustomEvent.call(element, hideEvent, component);
          removeClass(tooltip,showClass);
          !!self[animation] ? emulateTransitionEnd(tooltip, hideTrigger) : hideTrigger();
        }
      }, self[delay]);
    };
    this.toggle = function() {
      if (!tooltip) { self.show(); } 
      else { self.hide(); }
    };
  
    // init
    if ( !(stringTooltip in element) ) { // prevent adding event handlers twice
      element[setAttribute](dataOriginalTitle,titleString);
      element.removeAttribute(title);
      on(element, mouseHover[0], self.show);
      on(element, mouseHover[1], self.hide);
    }
    element[stringTooltip] = self;
  };
  
  // TOOLTIP DATA API
  // =================
  supports[push]( [ stringTooltip, Tooltip, '['+dataToggle+'="tooltip"]' ] );
  
  
  
  /* Native Javascript for Bootstrap | Initialize Data API
  --------------------------------------------------------*/
  var initializeDataAPI = function( constructor, collection ){
      for (var i=0, l=collection[length]; i<l; i++) {
        new constructor(collection[i]);
      }
    },
    initCallback = BSN.initCallback = function(lookUp){
      lookUp = lookUp || DOC;
      for (var i=0, l=supports[length]; i<l; i++) {
        initializeDataAPI( supports[i][1], lookUp[querySelectorAll] (supports[i][2]) );
      }
    };
  
  // bulk initialize all components
  DOC[body] ? initCallback() : on( DOC, 'DOMContentLoaded', function(){ initCallback(); } );
  
  return {
    Alert: Alert,
    Button: Button,
    Carousel: Carousel,
    Collapse: Collapse,
    Dropdown: Dropdown,
    Modal: Modal,
    Popover: Popover,
    ScrollSpy: ScrollSpy,
    Tab: Tab,
    Toast: Toast,
    Tooltip: Tooltip
  };
}));

/* Tabulator v4.5.3 (c) Oliver Folkerd */
var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t,e){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.Tabulator=e()}(this,function(){"use strict";Array.prototype.findIndex||Object.defineProperty(Array.prototype,"findIndex",{value:function(t){if(null==this)throw new TypeError('"this" is null or not defined');var e=Object(this),o=e.length>>>0;if("function"!=typeof t)throw new TypeError("predicate must be a function");for(var i=arguments[1],n=0;n<o;){var s=e[n];if(t.call(i,s,n,e))return n;n++}return-1}}),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(t){if(null==this)throw new TypeError('"this" is null or not defined');var e=Object(this),o=e.length>>>0;if("function"!=typeof t)throw new TypeError("predicate must be a function");for(var i=arguments[1],n=0;n<o;){var s=e[n];if(t.call(i,s,n,e))return s;n++}}});var t=function(t){this.table=t,this.blockHozScrollEvent=!1,this.headersElement=this.createHeadersElement(),this.element=this.createHeaderElement(),this.rowManager=null,this.columns=[],this.columnsByIndex=[],this.columnsByField={},this.scrollLeft=0,this.element.insertBefore(this.headersElement,this.element.firstChild)};t.prototype.createHeadersElement=function(){var t=document.createElement("div");return t.classList.add("tabulator-headers"),t},t.prototype.createHeaderElement=function(){var t=document.createElement("div");return t.classList.add("tabulator-header"),this.table.options.headerVisible||t.classList.add("tabulator-header-hidden"),t},t.prototype.initialize=function(){},t.prototype.setRowManager=function(t){this.rowManager=t},t.prototype.getElement=function(){return this.element},t.prototype.getHeadersElement=function(){return this.headersElement},t.prototype.scrollHorizontal=function(t){var e=0,o=this.element.scrollWidth-this.table.element.clientWidth;this.element.scrollLeft=t,t>o?(e=t-o,this.element.style.marginLeft=-e+"px"):this.element.style.marginLeft=0,this.scrollLeft=t,this.table.modExists("frozenColumns")&&this.table.modules.frozenColumns.scrollHorizontal()},t.prototype.generateColumnsFromRowData=function(t){var e,o,i=[];if(t&&t.length){e=t[0];for(var n in e){var s={field:n,title:n},r=e[n];switch(void 0===r?"undefined":_typeof(r)){case"undefined":o="string";break;case"boolean":o="boolean";break;case"object":o=Array.isArray(r)?"array":"string";break;default:o=isNaN(r)||""===r?r.match(/((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+$/i)?"alphanum":"string":"number"}s.sorter=o,i.push(s)}this.table.options.columns=i,this.setColumns(this.table.options.columns)}},t.prototype.setColumns=function(t,e){for(var o=this;o.headersElement.firstChild;)o.headersElement.removeChild(o.headersElement.firstChild);o.columns=[],o.columnsByIndex=[],o.columnsByField={},o.table.modExists("frozenColumns")&&o.table.modules.frozenColumns.reset(),t.forEach(function(t,e){o._addColumn(t)}),o._reIndexColumns(),o.table.options.responsiveLayout&&o.table.modExists("responsiveLayout",!0)&&o.table.modules.responsiveLayout.initialize(),o.redraw(!0)},t.prototype._addColumn=function(t,e,o){var n=new i(t,this),s=n.getElement(),r=o?this.findColumnIndex(o):o;if(o&&r>-1){var a=this.columns.indexOf(o.getTopColumn()),l=o.getElement();e?(this.columns.splice(a,0,n),l.parentNode.insertBefore(s,l)):(this.columns.splice(a+1,0,n),l.parentNode.insertBefore(s,l.nextSibling))}else e?(this.columns.unshift(n),this.headersElement.insertBefore(n.getElement(),this.headersElement.firstChild)):(this.columns.push(n),this.headersElement.appendChild(n.getElement())),n.columnRendered();return n},t.prototype.registerColumnField=function(t){t.definition.field&&(this.columnsByField[t.definition.field]=t)},t.prototype.registerColumnPosition=function(t){this.columnsByIndex.push(t)},t.prototype._reIndexColumns=function(){this.columnsByIndex=[],this.columns.forEach(function(t){t.reRegisterPosition()})},t.prototype._verticalAlignHeaders=function(){var t=this,e=0;t.columns.forEach(function(t){var o;t.clearVerticalAlign(),(o=t.getHeight())>e&&(e=o)}),t.columns.forEach(function(o){o.verticalAlign(t.table.options.columnHeaderVertAlign,e)}),t.rowManager.adjustTableSize()},t.prototype.findColumn=function(t){var e=this;if("object"!=(void 0===t?"undefined":_typeof(t)))return this.columnsByField[t]||!1;if(t instanceof i)return t;if(t instanceof o)return t._getSelf()||!1;if("undefined"!=typeof HTMLElement&&t instanceof HTMLElement){return e.columns.find(function(e){return e.element===t})||!1}return!1},t.prototype.getColumnByField=function(t){return this.columnsByField[t]},t.prototype.getColumnsByFieldRoot=function(t){var e=this,o=[];return Object.keys(this.columnsByField).forEach(function(i){i.split(".")[0]===t&&o.push(e.columnsByField[i])}),o},t.prototype.getColumnByIndex=function(t){return this.columnsByIndex[t]},t.prototype.getFirstVisibileColumn=function(t){var t=this.columnsByIndex.findIndex(function(t){return t.visible});return t>-1&&this.columnsByIndex[t]},t.prototype.getColumns=function(){return this.columns},t.prototype.findColumnIndex=function(t){return this.columnsByIndex.findIndex(function(e){return t===e})},t.prototype.getRealColumns=function(){return this.columnsByIndex},t.prototype.traverse=function(t){this.columnsByIndex.forEach(function(e,o){t(e,o)})},t.prototype.getDefinitions=function(t){var e=this,o=[];return e.columnsByIndex.forEach(function(e){(!t||t&&e.visible)&&o.push(e.getDefinition())}),o},t.prototype.getDefinitionTree=function(){var t=this,e=[];return t.columns.forEach(function(t){e.push(t.getDefinition(!0))}),e},t.prototype.getComponents=function(t){var e=this,o=[];return(t?e.columns:e.columnsByIndex).forEach(function(t){o.push(t.getComponent())}),o},t.prototype.getWidth=function(){var t=0;return this.columnsByIndex.forEach(function(e){e.visible&&(t+=e.getWidth())}),t},t.prototype.moveColumn=function(t,e,o){this.moveColumnActual(t,e,o),this.table.options.responsiveLayout&&this.table.modExists("responsiveLayout",!0)&&this.table.modules.responsiveLayout.initialize(),this.table.modExists("columnCalcs")&&this.table.modules.columnCalcs.recalc(this.table.rowManager.activeRows),e.element.parentNode.insertBefore(t.element,e.element),o&&e.element.parentNode.insertBefore(e.element,t.element),this._verticalAlignHeaders(),this.table.rowManager.reinitialize()},t.prototype.moveColumnActual=function(t,e,o){this._moveColumnInArray(this.columns,t,e,o),this._moveColumnInArray(this.columnsByIndex,t,e,o,!0),this.table.options.responsiveLayout&&this.table.modExists("responsiveLayout",!0)&&this.table.modules.responsiveLayout.initialize(),this.table.options.columnMoved&&this.table.options.columnMoved.call(this.table,t.getComponent(),this.table.columnManager.getComponents()),this.table.options.persistence&&this.table.modExists("persistence",!0)&&this.table.modules.persistence.config.columns&&this.table.modules.persistence.save("columns")},t.prototype._moveColumnInArray=function(t,e,o,i,n){var s,r=t.indexOf(e);r>-1&&(t.splice(r,1),s=t.indexOf(o),s>-1?i&&(s+=1):s=r,t.splice(s,0,e),n&&this.table.rowManager.rows.forEach(function(t){if(t.cells.length){var e=t.cells.splice(r,1)[0];t.cells.splice(s,0,e)}}))},t.prototype.scrollToColumn=function(t,e,o){var i=this,n=0,s=0,r=0,a=t.getElement();return new Promise(function(l,c){if(void 0===e&&(e=i.table.options.scrollToColumnPosition),void 0===o&&(o=i.table.options.scrollToColumnIfVisible),t.visible){switch(e){case"middle":case"center":r=-i.element.clientWidth/2;break;case"right":r=a.clientWidth-i.headersElement.clientWidth}if(!o&&(s=a.offsetLeft)>0&&s+a.offsetWidth<i.element.clientWidth)return!1;n=a.offsetLeft+i.element.scrollLeft+r,n=Math.max(Math.min(n,i.table.rowManager.element.scrollWidth-i.table.rowManager.element.clientWidth),0),i.table.rowManager.scrollHorizontal(n),i.scrollHorizontal(n),l()}else console.warn("Scroll Error - Column not visible"),c("Scroll Error - Column not visible")})},t.prototype.generateCells=function(t){var e=this,o=[];return e.columnsByIndex.forEach(function(e){o.push(e.generateCell(t))}),o},t.prototype.getFlexBaseWidth=function(){var t=this,e=t.table.element.clientWidth,o=0;return t.rowManager.element.scrollHeight>t.rowManager.element.clientHeight&&(e-=t.rowManager.element.offsetWidth-t.rowManager.element.clientWidth),this.columnsByIndex.forEach(function(i){var n,s,r;i.visible&&(n=i.definition.width||0,s=void 0===i.minWidth?t.table.options.columnMinWidth:parseInt(i.minWidth),r="string"==typeof n?n.indexOf("%")>-1?e/100*parseInt(n):parseInt(n):n,o+=r>s?r:s)}),o},t.prototype.addColumn=function(t,e,o){var i=this;return new Promise(function(n,s){var r=i._addColumn(t,e,o);i._reIndexColumns(),i.table.options.responsiveLayout&&i.table.modExists("responsiveLayout",!0)&&i.table.modules.responsiveLayout.initialize(),i.table.modExists("columnCalcs")&&i.table.modules.columnCalcs.recalc(i.table.rowManager.activeRows),i.redraw(),"fitColumns"!=i.table.modules.layout.getMode()&&r.reinitializeWidth(),i._verticalAlignHeaders(),i.table.rowManager.reinitialize(),n(r)})},t.prototype.deregisterColumn=function(t){var e,o=t.getField();o&&delete this.columnsByField[o],e=this.columnsByIndex.indexOf(t),e>-1&&this.columnsByIndex.splice(e,1),e=this.columns.indexOf(t),e>-1&&this.columns.splice(e,1),this.table.options.responsiveLayout&&this.table.modExists("responsiveLayout",!0)&&this.table.modules.responsiveLayout.initialize(),this.redraw()},t.prototype.redraw=function(t){t&&(u.prototype.helpers.elVisible(this.element)&&this._verticalAlignHeaders(),this.table.rowManager.resetScroll(),this.table.rowManager.reinitialize()),["fitColumns","fitDataStretch"].indexOf(this.table.modules.layout.getMode())>-1?this.table.modules.layout.layout():t?this.table.modules.layout.layout():this.table.options.responsiveLayout&&this.table.modExists("responsiveLayout",!0)&&this.table.modules.responsiveLayout.update(),this.table.modExists("frozenColumns")&&this.table.modules.frozenColumns.layout(),this.table.modExists("columnCalcs")&&this.table.modules.columnCalcs.recalc(this.table.rowManager.activeRows),t&&(this.table.options.persistence&&this.table.modExists("persistence",!0)&&this.table.modules.persistence.config.columns&&this.table.modules.persistence.save("columns"),this.table.modExists("columnCalcs")&&this.table.modules.columnCalcs.redraw()),this.table.footerManager.redraw()};var o=function(t){this._column=t,this.type="ColumnComponent"};o.prototype.getElement=function(){return this._column.getElement()},o.prototype.getDefinition=function(){return this._column.getDefinition()},o.prototype.getField=function(){return this._column.getField()},o.prototype.getCells=function(){var t=[];return this._column.cells.forEach(function(e){t.push(e.getComponent())}),t},o.prototype.getVisibility=function(){return this._column.visible},o.prototype.show=function(){this._column.isGroup?this._column.columns.forEach(function(t){t.show()}):this._column.show()},o.prototype.hide=function(){this._column.isGroup?this._column.columns.forEach(function(t){t.hide()}):this._column.hide()},o.prototype.toggle=function(){this._column.visible?this.hide():this.show()},o.prototype.delete=function(){return this._column.delete()},o.prototype.getSubColumns=function(){var t=[];return this._column.columns.length&&this._column.columns.forEach(function(e){t.push(e.getComponent())}),t},o.prototype.getParentColumn=function(){return this._column.parent instanceof i&&this._column.parent.getComponent()},o.prototype._getSelf=function(){return this._column},o.prototype.scrollTo=function(){return this._column.table.columnManager.scrollToColumn(this._column)},o.prototype.getTable=function(){return this._column.table},o.prototype.headerFilterFocus=function(){this._column.table.modExists("filter",!0)&&this._column.table.modules.filter.setHeaderFilterFocus(this._column)},o.prototype.reloadHeaderFilter=function(){this._column.table.modExists("filter",!0)&&this._column.table.modules.filter.reloadHeaderFilter(this._column)},o.prototype.setHeaderFilterValue=function(t){this._column.table.modExists("filter",!0)&&this._column.table.modules.filter.setHeaderFilterValue(this._column,t)},o.prototype.move=function(t,e){var o=this._column.table.columnManager.findColumn(t);o?this._column.table.columnManager.moveColumn(this._column,o,e):console.warn("Move Error - No matching column found:",o)},o.prototype.getNextColumn=function(){var t=this._column.nextColumn();return!!t&&t.getComponent()},o.prototype.getPrevColumn=function(){var t=this._column.prevColumn();return!!t&&t.getComponent()},o.prototype.updateDefinition=function(t){return this._column.updateDefinition(t)};var i=function t(e,o){var i=this;this.table=o.table,this.definition=e,this.parent=o,this.type="column",this.columns=[],this.cells=[],this.element=this.createElement(),this.contentElement=!1,this.groupElement=this.createGroupElement(),this.isGroup=!1,this.tooltip=!1,this.hozAlign="",this.field="",this.fieldStructure="",this.getFieldValue="",this.setFieldValue="",this.titleFormatterRendered=!1,this.setField(this.definition.field),this.table.options.invalidOptionWarnings&&this.checkDefinition(),this.modules={},this.cellEvents={cellClick:!1,cellDblClick:!1,cellContext:!1,cellTap:!1,cellDblTap:!1,cellTapHold:!1,cellMouseEnter:!1,cellMouseLeave:!1,cellMouseOver:!1,cellMouseOut:!1,cellMouseMove:!1},this.width=null,this.widthStyled="",this.minWidth=null,this.minWidthStyled="",this.widthFixed=!1,this.visible=!0,this._mapDepricatedFunctionality(),e.columns?(this.isGroup=!0,e.columns.forEach(function(e,o){var n=new t(e,i);i.attachColumn(n)}),i.checkColumnVisibility()):o.registerColumnField(this),e.rowHandle&&!1!==this.table.options.movableRows&&this.table.modExists("moveRow")&&this.table.modules.moveRow.setHandle(!0),this._buildHeader(),this.bindModuleColumns()};i.prototype.createElement=function(){var t=document.createElement("div");return t.classList.add("tabulator-col"),t.setAttribute("role","columnheader"),t.setAttribute("aria-sort","none"),t},i.prototype.createGroupElement=function(){var t=document.createElement("div");return t.classList.add("tabulator-col-group-cols"),t},i.prototype.checkDefinition=function(){var t=this;Object.keys(this.definition).forEach(function(e){-1===t.defaultOptionList.indexOf(e)&&console.warn("Invalid column definition option in '"+(t.field||t.definition.title)+"' column:",e)})},i.prototype.setField=function(t){this.field=t,this.fieldStructure=t?this.table.options.nestedFieldSeparator?t.split(this.table.options.nestedFieldSeparator):[t]:[],this.getFieldValue=this.fieldStructure.length>1?this._getNestedData:this._getFlatData,this.setFieldValue=this.fieldStructure.length>1?this._setNesteData:this._setFlatData},i.prototype.registerColumnPosition=function(t){this.parent.registerColumnPosition(t)},i.prototype.registerColumnField=function(t){this.parent.registerColumnField(t)},i.prototype.reRegisterPosition=function(){this.isGroup?this.columns.forEach(function(t){t.reRegisterPosition()}):this.registerColumnPosition(this)},i.prototype._mapDepricatedFunctionality=function(){void 0!==this.definition.hideInHtml&&(this.definition.htmlOutput=!this.definition.hideInHtml,console.warn("hideInHtml column definition property is deprecated, you should now use htmlOutput"))},i.prototype.setTooltip=function(){var t=this,e=t.definition,o=e.headerTooltip||!1===e.tooltip?e.headerTooltip:t.table.options.tooltipsHeader;o?!0===o?e.field?t.table.modules.localize.bind("columns|"+e.field,function(o){t.element.setAttribute("title",o||e.title)}):t.element.setAttribute("title",e.title):("function"==typeof o&&!1===(o=o(t.getComponent()))&&(o=""),t.element.setAttribute("title",o)):t.element.setAttribute("title","")},i.prototype._buildHeader=function(){for(var t=this,e=t.definition;t.element.firstChild;)t.element.removeChild(t.element.firstChild);e.headerVertical&&(t.element.classList.add("tabulator-col-vertical"),"flip"===e.headerVertical&&t.element.classList.add("tabulator-col-vertical-flip")),t.contentElement=t._bindEvents(),t.contentElement=t._buildColumnHeaderContent(),t.element.appendChild(t.contentElement),t.isGroup?t._buildGroupHeader():t._buildColumnHeader(),t.setTooltip(),t.table.options.resizableColumns&&t.table.modExists("resizeColumns")&&t.table.modules.resizeColumns.initializeColumn("header",t,t.element),e.headerFilter&&t.table.modExists("filter")&&t.table.modExists("edit")&&(void 0!==e.headerFilterPlaceholder&&e.field&&t.table.modules.localize.setHeaderFilterColumnPlaceholder(e.field,e.headerFilterPlaceholder),t.table.modules.filter.initializeColumn(t)),t.table.modExists("frozenColumns")&&t.table.modules.frozenColumns.initializeColumn(t),t.table.options.movableColumns&&!t.isGroup&&t.table.modExists("moveColumn")&&t.table.modules.moveColumn.initializeColumn(t),(e.topCalc||e.bottomCalc)&&t.table.modExists("columnCalcs")&&t.table.modules.columnCalcs.initializeColumn(t),t.table.modExists("persistence")&&t.table.modules.persistence.config.columns&&t.table.modules.persistence.initializeColumn(t),t.element.addEventListener("mouseenter",function(e){t.setTooltip()})},i.prototype._bindEvents=function(){var t,e,o,i=this,n=i.definition;"function"==typeof n.headerClick&&i.element.addEventListener("click",function(t){n.headerClick(t,i.getComponent())}),"function"==typeof n.headerDblClick&&i.element.addEventListener("dblclick",function(t){n.headerDblClick(t,i.getComponent())}),"function"==typeof n.headerContext&&i.element.addEventListener("contextmenu",function(t){n.headerContext(t,i.getComponent())}),"function"==typeof n.headerTap&&(o=!1,i.element.addEventListener("touchstart",function(t){o=!0},{passive:!0}),i.element.addEventListener("touchend",function(t){o&&n.headerTap(t,i.getComponent()),o=!1})),"function"==typeof n.headerDblTap&&(t=null,i.element.addEventListener("touchend",function(e){t?(clearTimeout(t),t=null,n.headerDblTap(e,i.getComponent())):t=setTimeout(function(){clearTimeout(t),t=null},300)})),"function"==typeof n.headerTapHold&&(e=null,i.element.addEventListener("touchstart",function(t){clearTimeout(e),e=setTimeout(function(){clearTimeout(e),e=null,o=!1,n.headerTapHold(t,i.getComponent())},1e3)},{passive:!0}),i.element.addEventListener("touchend",function(t){clearTimeout(e),e=null})),"function"==typeof n.cellClick&&(i.cellEvents.cellClick=n.cellClick),"function"==typeof n.cellDblClick&&(i.cellEvents.cellDblClick=n.cellDblClick),"function"==typeof n.cellContext&&(i.cellEvents.cellContext=n.cellContext),"function"==typeof n.cellMouseEnter&&(i.cellEvents.cellMouseEnter=n.cellMouseEnter),"function"==typeof n.cellMouseLeave&&(i.cellEvents.cellMouseLeave=n.cellMouseLeave),"function"==typeof n.cellMouseOver&&(i.cellEvents.cellMouseOver=n.cellMouseOver),"function"==typeof n.cellMouseOut&&(i.cellEvents.cellMouseOut=n.cellMouseOut),"function"==typeof n.cellMouseMove&&(i.cellEvents.cellMouseMove=n.cellMouseMove),"function"==typeof n.cellTap&&(i.cellEvents.cellTap=n.cellTap),"function"==typeof n.cellDblTap&&(i.cellEvents.cellDblTap=n.cellDblTap),"function"==typeof n.cellTapHold&&(i.cellEvents.cellTapHold=n.cellTapHold),"function"==typeof n.cellEdited&&(i.cellEvents.cellEdited=n.cellEdited),"function"==typeof n.cellEditing&&(i.cellEvents.cellEditing=n.cellEditing),"function"==typeof n.cellEditCancelled&&(i.cellEvents.cellEditCancelled=n.cellEditCancelled)},i.prototype._buildColumnHeader=function(){var t=this,e=t.definition,o=t.table;if(o.modExists("sort")&&o.modules.sort.initializeColumn(t,t.contentElement),o.modExists("format")&&o.modules.format.initializeColumn(t),void 0!==e.editor&&o.modExists("edit")&&o.modules.edit.initializeColumn(t),void 0!==e.validator&&o.modExists("validate")&&o.modules.validate.initializeColumn(t),o.modExists("mutator")&&o.modules.mutator.initializeColumn(t),o.modExists("accessor")&&o.modules.accessor.initializeColumn(t),_typeof(o.options.responsiveLayout)&&o.modExists("responsiveLayout")&&o.modules.responsiveLayout.initializeColumn(t),void 0!==e.visible&&(e.visible?t.show(!0):t.hide(!0)),e.cssClass){e.cssClass.split(" ").forEach(function(e){t.element.classList.add(e)})}e.field&&this.element.setAttribute("tabulator-field",e.field),t.setMinWidth(void 0===e.minWidth?t.table.options.columnMinWidth:parseInt(e.minWidth)),t.reinitializeWidth(),t.tooltip=t.definition.tooltip||!1===t.definition.tooltip?t.definition.tooltip:t.table.options.tooltips,t.hozAlign=void 0===t.definition.align?"":t.definition.align},i.prototype._buildColumnHeaderContent=function(){var t=this,e=(t.definition,t.table,document.createElement("div"));return e.classList.add("tabulator-col-content"),e.appendChild(t._buildColumnHeaderTitle()),e},i.prototype._buildColumnHeaderTitle=function(){var t=this,e=t.definition,o=t.table,i=document.createElement("div");if(i.classList.add("tabulator-col-title"),e.editableTitle){var n=document.createElement("input");n.classList.add("tabulator-title-editor"),n.addEventListener("click",function(t){t.stopPropagation(),n.focus()}),n.addEventListener("change",function(){e.title=n.value,o.options.columnTitleChanged.call(t.table,t.getComponent())}),i.appendChild(n),e.field?o.modules.localize.bind("columns|"+e.field,function(t){n.value=t||e.title||"&nbsp;"}):n.value=e.title||"&nbsp;"}else e.field?o.modules.localize.bind("columns|"+e.field,function(o){t._formatColumnHeaderTitle(i,o||e.title||"&nbsp;")}):t._formatColumnHeaderTitle(i,e.title||"&nbsp;");return i},i.prototype._formatColumnHeaderTitle=function(t,e){var o,i,n,s,r,a=this;if(this.definition.titleFormatter&&this.table.modExists("format"))switch(o=this.table.modules.format.getFormatter(this.definition.titleFormatter),r=function(t){a.titleFormatterRendered=t},s={getValue:function(){return e},getElement:function(){return t}},n=this.definition.titleFormatterParams||{},n="function"==typeof n?n():n,i=o.call(this.table.modules.format,s,n,r),void 0===i?"undefined":_typeof(i)){case"object":i instanceof Node?t.appendChild(i):(t.innerHTML="",console.warn("Format Error - Title formatter has returned a type of object, the only valid formatter object return is an instance of Node, the formatter returned:",i));break;case"undefined":case"null":t.innerHTML="";break;default:t.innerHTML=i}else t.innerHTML=e},i.prototype._buildGroupHeader=function(){var t=this;if(this.element.classList.add("tabulator-col-group"),this.element.setAttribute("role","columngroup"),this.element.setAttribute("aria-title",this.definition.title),this.definition.cssClass){this.definition.cssClass.split(" ").forEach(function(e){t.element.classList.add(e)})}this.element.appendChild(this.groupElement)},i.prototype._getFlatData=function(t){return t[this.field]},i.prototype._getNestedData=function(t){for(var e,o=t,i=this.fieldStructure,n=i.length,s=0;s<n&&(o=o[i[s]],e=o,o);s++);return e},i.prototype._setFlatData=function(t,e){this.field&&(t[this.field]=e)},i.prototype._setNesteData=function(t,e){for(var o=t,i=this.fieldStructure,n=i.length,s=0;s<n;s++)s==n-1?o[i[s]]=e:(o[i[s]]||(o[i[s]]={}),o=o[i[s]])},i.prototype.attachColumn=function(t){var e=this;e.groupElement?(e.columns.push(t),e.groupElement.appendChild(t.getElement())):console.warn("Column Warning - Column being attached to another column instead of column group")},i.prototype.verticalAlign=function(t,e){var o=this.parent.isGroup?this.parent.getGroupElement().clientHeight:e||this.parent.getHeadersElement().clientHeight;this.element.style.height=o+"px",this.isGroup&&(this.groupElement.style.minHeight=o-this.contentElement.offsetHeight+"px"),this.isGroup||"top"===t||(this.element.style.paddingTop="bottom"===t?this.element.clientHeight-this.contentElement.offsetHeight+"px":(this.element.clientHeight-this.contentElement.offsetHeight)/2+"px"),this.columns.forEach(function(e){e.verticalAlign(t)})},i.prototype.clearVerticalAlign=function(){this.element.style.paddingTop="",this.element.style.height="",this.element.style.minHeight="",this.groupElement.style.minHeight="",this.columns.forEach(function(t){t.clearVerticalAlign()})},i.prototype.bindModuleColumns=function(){"rownum"==this.definition.formatter&&(this.table.rowManager.rowNumColumn=this)},i.prototype.getElement=function(){return this.element},i.prototype.getGroupElement=function(){return this.groupElement},i.prototype.getField=function(){return this.field},i.prototype.getFirstColumn=function(){return this.isGroup?!!this.columns.length&&this.columns[0].getFirstColumn():this},i.prototype.getLastColumn=function(){return this.isGroup?!!this.columns.length&&this.columns[this.columns.length-1].getLastColumn():this},i.prototype.getColumns=function(){return this.columns},i.prototype.getCells=function(){return this.cells},i.prototype.getTopColumn=function(){return this.parent.isGroup?this.parent.getTopColumn():this},i.prototype.getDefinition=function(t){var e=[];return this.isGroup&&t&&(this.columns.forEach(function(t){e.push(t.getDefinition(!0))}),this.definition.columns=e),this.definition},i.prototype.checkColumnVisibility=function(){var t=!1;this.columns.forEach(function(e){e.visible&&(t=!0)}),t?(this.show(),this.parent.table.options.columnVisibilityChanged.call(this.table,this.getComponent(),!1)):this.hide()},i.prototype.show=function(t,e){this.visible||(this.visible=!0,this.element.style.display="",this.parent.isGroup&&this.parent.checkColumnVisibility(),this.cells.forEach(function(t){t.show()}),this.isGroup||null!==this.width||this.reinitializeWidth(),this.table.columnManager._verticalAlignHeaders(),this.table.options.persistence&&this.table.modExists("persistence",!0)&&this.table.modules.persistence.config.columns&&this.table.modules.persistence.save("columns"),!e&&this.table.options.responsiveLayout&&this.table.modExists("responsiveLayout",!0)&&this.table.modules.responsiveLayout.updateColumnVisibility(this,this.visible),t||this.table.options.columnVisibilityChanged.call(this.table,this.getComponent(),!0),this.parent.isGroup&&this.parent.matchChildWidths())},i.prototype.hide=function(t,e){this.visible&&(this.visible=!1,this.element.style.display="none",this.table.columnManager._verticalAlignHeaders(),this.parent.isGroup&&this.parent.checkColumnVisibility(),this.cells.forEach(function(t){t.hide()}),this.table.options.persistence&&this.table.modExists("persistence",!0)&&this.table.modules.persistence.config.columns&&this.table.modules.persistence.save("columns"),!e&&this.table.options.responsiveLayout&&this.table.modExists("responsiveLayout",!0)&&this.table.modules.responsiveLayout.updateColumnVisibility(this,this.visible),t||this.table.options.columnVisibilityChanged.call(this.table,this.getComponent(),!1),this.parent.isGroup&&this.parent.matchChildWidths())},i.prototype.matchChildWidths=function(){var t=0;this.contentElement&&this.columns.length&&(this.columns.forEach(function(e){e.visible&&(t+=e.getWidth())}),this.contentElement.style.maxWidth=t-1+"px")},i.prototype.setWidth=function(t){this.widthFixed=!0,this.setWidthActual(t)},i.prototype.setWidthActual=function(t){isNaN(t)&&(t=Math.floor(this.table.element.clientWidth/100*parseInt(t))),t=Math.max(this.minWidth,t),this.width=t,this.widthStyled=t?t+"px":"",this.element.style.width=this.widthStyled,this.isGroup||this.cells.forEach(function(t){t.setWidth()}),this.parent.isGroup&&this.parent.matchChildWidths(),this.table.modExists("frozenColumns")&&this.table.modules.frozenColumns.layout()},i.prototype.checkCellHeights=function(){var t=[];this.cells.forEach(function(e){e.row.heightInitialized&&(null!==e.row.getElement().offsetParent?(t.push(e.row),e.row.clearCellHeight()):e.row.heightInitialized=!1)}),t.forEach(function(t){t.calcHeight()}),t.forEach(function(t){t.setCellHeight()})},i.prototype.getWidth=function(){return this.width},i.prototype.getHeight=function(){return this.element.offsetHeight},i.prototype.setMinWidth=function(t){this.minWidth=t,this.minWidthStyled=t?t+"px":"",this.element.style.minWidth=this.minWidthStyled,this.cells.forEach(function(t){t.setMinWidth()})},i.prototype.delete=function(){var t=this;return new Promise(function(e,o){t.isGroup&&t.columns.forEach(function(t){t.delete()});for(var i=t.cells.length,n=0;n<i;n++)t.cells[0].delete();t.element.parentNode.removeChild(t.element),t.table.columnManager.deregisterColumn(t),e()})},i.prototype.columnRendered=function(){this.titleFormatterRendered&&this.titleFormatterRendered()},i.prototype.generateCell=function(t){var e=this,o=new l(e,t);return this.cells.push(o),o},i.prototype.nextColumn=function(){var t=this.table.columnManager.findColumnIndex(this);return t>-1&&this._nextVisibleColumn(t+1)},i.prototype._nextVisibleColumn=function(t){var e=this.table.columnManager.getColumnByIndex(t);return!e||e.visible?e:this._nextVisibleColumn(t+1)},i.prototype.prevColumn=function(){var t=this.table.columnManager.findColumnIndex(this);return t>-1&&this._prevVisibleColumn(t-1)},i.prototype._prevVisibleColumn=function(t){var e=this.table.columnManager.getColumnByIndex(t);return!e||e.visible?e:this._prevVisibleColumn(t-1)},i.prototype.reinitializeWidth=function(t){this.widthFixed=!1,void 0===this.definition.width||t||this.setWidth(this.definition.width),this.table.modExists("filter")&&this.table.modules.filter.hideHeaderFilterElements(),this.fitToData(),this.table.modExists("filter")&&this.table.modules.filter.showHeaderFilterElements()},i.prototype.fitToData=function(){var t=this;this.widthFixed||(this.element.style.width="",t.cells.forEach(function(t){t.clearWidth()}));var e=this.element.offsetWidth;t.width&&this.widthFixed||(t.cells.forEach(function(t){var o=t.getWidth();o>e&&(e=o)}),e&&t.setWidthActual(e+1))},i.prototype.updateDefinition=function(t){var e=this;return new Promise(function(o,i){var n;e.isGroup?(console.warn("Column Update Error - The updateDefintion function is only available on columns, not column groups"),i("Column Update Error - The updateDefintion function is only available on columns, not column groups")):(n=Object.assign({},e.getDefinition()),n=Object.assign(n,t),e.table.columnManager.addColumn(n,!1,e).then(function(t){n.field==e.field&&(e.field=!1),e.delete().then(function(){o(t.getComponent())}).catch(function(t){i(t)})}).catch(function(t){i(t)}))})},i.prototype.deleteCell=function(t){var e=this.cells.indexOf(t);e>-1&&this.cells.splice(e,1)},i.prototype.defaultOptionList=["title","field","columns","visible","align","width","minWidth","widthGrow","widthShrink","resizable","frozen","responsive","tooltip","cssClass","rowHandle","hideInHtml","print","htmlOutput","sorter","sorterParams","formatter","formatterParams","variableHeight","editable","editor","editorParams","validator","mutator","mutatorParams","mutatorData","mutatorDataParams","mutatorEdit","mutatorEditParams","mutatorClipboard","mutatorClipboardParams","accessor","accessorParams","accessorData","accessorDataParams","accessorDownload","accessorDownloadParams","accessorClipboard","accessorClipboardParams","clipboard","download","downloadTitle","topCalc","topCalcParams","topCalcFormatter","topCalcFormatterParams","bottomCalc","bottomCalcParams","bottomCalcFormatter","bottomCalcFormatterParams","cellClick","cellDblClick","cellContext","cellTap","cellDblTap","cellTapHold","cellMouseEnter","cellMouseLeave","cellMouseOver","cellMouseOut","cellMouseMove","cellEditing","cellEdited","cellEditCancelled","headerSort","headerSortStartingDir","headerSortTristate","headerClick","headerDblClick","headerContext","headerTap","headerDblTap","headerTapHold","headerTooltip","headerVertical","editableTitle","titleFormatter","titleFormatterParams","headerFilter","headerFilterPlaceholder","headerFilterParams","headerFilterEmptyCheck","headerFilterFunc","headerFilterFuncParams","headerFilterLiveFilter","print"],i.prototype.getComponent=function(){return new o(this)};var n=function(t){this.table=t,this.element=this.createHolderElement(),this.tableElement=this.createTableElement(),this.columnManager=null,this.height=0,this.firstRender=!1,
this.renderMode="classic",this.rows=[],this.activeRows=[],this.activeRowsCount=0,this.displayRows=[],this.displayRowsCount=0,this.scrollTop=0,this.scrollLeft=0,this.vDomRowHeight=20,this.vDomTop=0,this.vDomBottom=0,this.vDomScrollPosTop=0,this.vDomScrollPosBottom=0,this.vDomTopPad=0,this.vDomBottomPad=0,this.vDomMaxRenderChain=90,this.vDomWindowBuffer=0,this.vDomWindowMinTotalRows=20,this.vDomWindowMinMarginRows=5,this.vDomTopNewRows=[],this.vDomBottomNewRows=[],this.rowNumColumn=!1,this.redrawBlock=!1,this.redrawBlockRestoreConfig=!1,this.redrawBlockRederInPosition=!1};n.prototype.createHolderElement=function(){var t=document.createElement("div");return t.classList.add("tabulator-tableHolder"),t.setAttribute("tabindex",0),t},n.prototype.createTableElement=function(){var t=document.createElement("div");return t.classList.add("tabulator-table"),t},n.prototype.getElement=function(){return this.element},n.prototype.getTableElement=function(){return this.tableElement},n.prototype.getRowPosition=function(t,e){return e?this.activeRows.indexOf(t):this.rows.indexOf(t)},n.prototype.setColumnManager=function(t){this.columnManager=t},n.prototype.initialize=function(){var t=this;t.setRenderMode(),t.element.appendChild(t.tableElement),t.firstRender=!0,t.element.addEventListener("scroll",function(){var e=t.element.scrollLeft;t.scrollLeft!=e&&(t.columnManager.scrollHorizontal(e),t.table.options.groupBy&&t.table.modules.groupRows.scrollHeaders(e),t.table.modExists("columnCalcs")&&t.table.modules.columnCalcs.scrollHorizontal(e),t.table.options.scrollHorizontal(e)),t.scrollLeft=e}),"virtual"===this.renderMode&&t.element.addEventListener("scroll",function(){var e=t.element.scrollTop,o=t.scrollTop>e;t.scrollTop!=e?(t.scrollTop=e,t.scrollVertical(o),"scroll"==t.table.options.ajaxProgressiveLoad&&t.table.modules.ajax.nextPage(t.element.scrollHeight-t.element.clientHeight-e),t.table.options.scrollVertical(e)):t.scrollTop=e})},n.prototype.findRow=function(t){var e=this;if("object"!=(void 0===t?"undefined":_typeof(t))){if(void 0===t||null===t)return!1;return e.rows.find(function(o){return o.data[e.table.options.index]==t})||!1}if(t instanceof r)return t;if(t instanceof s)return t._getSelf()||!1;if("undefined"!=typeof HTMLElement&&t instanceof HTMLElement){return e.rows.find(function(e){return e.element===t})||!1}return!1},n.prototype.getRowFromDataObject=function(t){return this.rows.find(function(e){return e.data===t})||!1},n.prototype.getRowFromPosition=function(t,e){return e?this.activeRows[t]:this.rows[t]},n.prototype.scrollToRow=function(t,e,o){var i,n=this,s=this.getDisplayRows().indexOf(t),r=t.getElement(),a=0;return new Promise(function(t,l){if(s>-1){if(void 0===e&&(e=n.table.options.scrollToRowPosition),void 0===o&&(o=n.table.options.scrollToRowIfVisible),"nearest"===e)switch(n.renderMode){case"classic":i=u.prototype.helpers.elOffset(r).top,e=Math.abs(n.element.scrollTop-i)>Math.abs(n.element.scrollTop+n.element.clientHeight-i)?"bottom":"top";break;case"virtual":e=Math.abs(n.vDomTop-s)>Math.abs(n.vDomBottom-s)?"bottom":"top"}if(!o&&u.prototype.helpers.elVisible(r)&&(a=u.prototype.helpers.elOffset(r).top-u.prototype.helpers.elOffset(n.element).top)>0&&a<n.element.clientHeight-r.offsetHeight)return!1;switch(n.renderMode){case"classic":n.element.scrollTop=u.prototype.helpers.elOffset(r).top-u.prototype.helpers.elOffset(n.element).top+n.element.scrollTop;break;case"virtual":n._virtualRenderFill(s,!0)}switch(e){case"middle":case"center":n.element.scrollHeight-n.element.scrollTop==n.element.clientHeight?n.element.scrollTop=n.element.scrollTop+(r.offsetTop-n.element.scrollTop)-(n.element.scrollHeight-r.offsetTop)/2:n.element.scrollTop=n.element.scrollTop-n.element.clientHeight/2;break;case"bottom":n.element.scrollHeight-n.element.scrollTop==n.element.clientHeight?n.element.scrollTop=n.element.scrollTop-(n.element.scrollHeight-r.offsetTop)+r.offsetHeight:n.element.scrollTop=n.element.scrollTop-n.element.clientHeight+r.offsetHeight}t()}else console.warn("Scroll Error - Row not visible"),l("Scroll Error - Row not visible")})},n.prototype.setData=function(t,e){var o=this,i=this;return new Promise(function(n,s){e&&o.getDisplayRows().length?i.table.options.pagination?i._setDataActual(t,!0):o.reRenderInPosition(function(){i._setDataActual(t)}):(o.table.options.autoColumns&&o.table.columnManager.generateColumnsFromRowData(t),o.resetScroll(),o._setDataActual(t)),n()})},n.prototype._setDataActual=function(t,e){var o=this;o.table.options.dataLoading.call(this.table,t),this._wipeElements(),this.table.options.history&&this.table.modExists("history")&&this.table.modules.history.clear(),Array.isArray(t)?(this.table.modExists("selectRow")&&this.table.modules.selectRow.clearSelectionData(),this.table.options.reactiveData&&this.table.modExists("reactiveData",!0)&&this.table.modules.reactiveData.watchData(t),t.forEach(function(t,e){if(t&&"object"===(void 0===t?"undefined":_typeof(t))){var i=new r(t,o);o.rows.push(i)}else console.warn("Data Loading Warning - Invalid row data detected and ignored, expecting object but received:",t)}),o.table.options.dataLoaded.call(this.table,t),o.refreshActiveData(!1,!1,e)):console.error("Data Loading Error - Unable to process data due to invalid data type \nExpecting: array \nReceived: ",void 0===t?"undefined":_typeof(t),"\nData:     ",t)},n.prototype._wipeElements=function(){this.rows.forEach(function(t){t.wipe()}),this.table.options.groupBy&&this.table.modExists("groupRows")&&this.table.modules.groupRows.wipe(),this.rows=[]},n.prototype.deleteRow=function(t,e){var o=this.rows.indexOf(t),i=this.activeRows.indexOf(t);i>-1&&this.activeRows.splice(i,1),o>-1&&this.rows.splice(o,1),this.setActiveRows(this.activeRows),this.displayRowIterator(function(e){var o=e.indexOf(t);o>-1&&e.splice(o,1)}),e||this.reRenderInPosition(),this.table.options.rowDeleted.call(this.table,t.getComponent()),this.table.options.dataEdited.call(this.table,this.getData()),this.table.options.groupBy&&this.table.modExists("groupRows")?this.table.modules.groupRows.updateGroupRows(!0):this.table.options.pagination&&this.table.modExists("page")?this.refreshActiveData(!1,!1,!0):this.table.options.pagination&&this.table.modExists("page")&&this.refreshActiveData("page")},n.prototype.addRow=function(t,e,o,i){var n=this.addRowActual(t,e,o,i);return this.table.options.history&&this.table.modExists("history")&&this.table.modules.history.action("rowAdd",n,{data:t,pos:e,index:o}),n},n.prototype.addRows=function(t,e,o){var i=this,n=this,s=0,r=[];return new Promise(function(a,l){e=i.findAddRowPos(e),Array.isArray(t)||(t=[t]),s=t.length-1,(void 0===o&&e||void 0!==o&&!e)&&t.reverse(),t.forEach(function(t,i){var s=n.addRow(t,e,o,!0);r.push(s)}),i.table.options.groupBy&&i.table.modExists("groupRows")?i.table.modules.groupRows.updateGroupRows(!0):i.table.options.pagination&&i.table.modExists("page")?i.refreshActiveData(!1,!1,!0):i.reRenderInPosition(),i.table.modExists("columnCalcs")&&i.table.modules.columnCalcs.recalc(i.table.rowManager.activeRows),a(r)})},n.prototype.findAddRowPos=function(t){return void 0===t&&(t=this.table.options.addRowPos),"pos"===t&&(t=!0),"bottom"===t&&(t=!1),t},n.prototype.addRowActual=function(t,e,o,i){var n,s=t instanceof r?t:new r(t||{},this),a=this.findAddRowPos(e);if(!o&&this.table.options.pagination&&"page"==this.table.options.paginationAddRow&&(n=this.getDisplayRows(),a?n.length?o=n[0]:this.activeRows.length&&(o=this.activeRows[this.activeRows.length-1],a=!1):n.length&&(o=n[n.length-1],a=!(n.length<this.table.modules.page.getPageSize()))),o&&(o=this.findRow(o)),this.table.options.groupBy&&this.table.modExists("groupRows")){this.table.modules.groupRows.assignRowToGroup(s);var l=s.getGroup().rows;l.length>1&&(!o||o&&-1==l.indexOf(o)?a?l[0]!==s&&(o=l[0],this._moveRowInArray(s.getGroup().rows,s,o,!a)):l[l.length-1]!==s&&(o=l[l.length-1],this._moveRowInArray(s.getGroup().rows,s,o,!a)):this._moveRowInArray(s.getGroup().rows,s,o,!a))}if(o){var c=this.rows.indexOf(o),u=this.activeRows.indexOf(o);this.displayRowIterator(function(t){var e=t.indexOf(o);e>-1&&t.splice(a?e:e+1,0,s)}),u>-1&&this.activeRows.splice(a?u:u+1,0,s),c>-1&&this.rows.splice(a?c:c+1,0,s)}else a?(this.displayRowIterator(function(t){t.unshift(s)}),this.activeRows.unshift(s),this.rows.unshift(s)):(this.displayRowIterator(function(t){t.push(s)}),this.activeRows.push(s),this.rows.push(s));return this.setActiveRows(this.activeRows),this.table.options.rowAdded.call(this.table,s.getComponent()),this.table.options.dataEdited.call(this.table,this.getData()),i||this.reRenderInPosition(),s},n.prototype.moveRow=function(t,e,o){this.table.options.history&&this.table.modExists("history")&&this.table.modules.history.action("rowMove",t,{pos:this.getRowPosition(t),to:e,after:o}),this.moveRowActual(t,e,o),this.table.options.rowMoved.call(this.table,t.getComponent())},n.prototype.moveRowActual=function(t,e,o){var i=this;if(this._moveRowInArray(this.rows,t,e,o),this._moveRowInArray(this.activeRows,t,e,o),this.displayRowIterator(function(n){i._moveRowInArray(n,t,e,o)}),this.table.options.groupBy&&this.table.modExists("groupRows")){var n=e.getGroup(),s=t.getGroup();n===s?this._moveRowInArray(n.rows,t,e,o):(s&&s.removeRow(t),n.insertRow(t,e,o))}},n.prototype._moveRowInArray=function(t,e,o,i){var n,s,r,a;if(e!==o&&(n=t.indexOf(e),n>-1&&(t.splice(n,1),s=t.indexOf(o),s>-1?i?t.splice(s+1,0,e):t.splice(s,0,e):t.splice(n,0,e)),t===this.getDisplayRows())){r=n<s?n:s,a=s>n?s:n+1;for(var l=r;l<=a;l++)t[l]&&this.styleRow(t[l],l)}},n.prototype.clearData=function(){this.setData([])},n.prototype.getRowIndex=function(t){return this.findRowIndex(t,this.rows)},n.prototype.getDisplayRowIndex=function(t){var e=this.getDisplayRows().indexOf(t);return e>-1&&e},n.prototype.nextDisplayRow=function(t,e){var o=this.getDisplayRowIndex(t),i=!1;return!1!==o&&o<this.displayRowsCount-1&&(i=this.getDisplayRows()[o+1]),!i||i instanceof r&&"row"==i.type?i:this.nextDisplayRow(i,e)},n.prototype.prevDisplayRow=function(t,e){var o=this.getDisplayRowIndex(t),i=!1;return o&&(i=this.getDisplayRows()[o-1]),!i||i instanceof r&&"row"==i.type?i:this.prevDisplayRow(i,e)},n.prototype.findRowIndex=function(t,e){var o;return!!((t=this.findRow(t))&&(o=e.indexOf(t))>-1)&&o},n.prototype.getData=function(t,e){var o=[];return this.getRows(t).forEach(function(t){o.push(t.getData(e||"data"))}),o},n.prototype.getComponents=function(t){var e=[];return this.getRows(t).forEach(function(t){e.push(t.getComponent())}),e},n.prototype.getDataCount=function(t){return this.getRows(t).length},n.prototype._genRemoteRequest=function(){var t=this,e=t.table,o=e.options,i={};if(e.modExists("page")){if(o.ajaxSorting){var n=t.table.modules.sort.getSort();n.forEach(function(t){delete t.column}),i[t.table.modules.page.paginationDataSentNames.sorters]=n}if(o.ajaxFiltering){var s=t.table.modules.filter.getFilters(!0,!0);i[t.table.modules.page.paginationDataSentNames.filters]=s}t.table.modules.ajax.setParams(i,!0)}e.modules.ajax.sendRequest().then(function(e){t.setData(e)}).catch(function(t){})},n.prototype.filterRefresh=function(){var t=this.table,e=t.options,o=this.scrollLeft;e.ajaxFiltering?"remote"==e.pagination&&t.modExists("page")?(t.modules.page.reset(!0),t.modules.page.setPage(1).then(function(){}).catch(function(){})):e.ajaxProgressiveLoad?t.modules.ajax.loadData().then(function(){}).catch(function(){}):this._genRemoteRequest():this.refreshActiveData("filter"),this.scrollHorizontal(o)},n.prototype.sorterRefresh=function(t){var e=this.table,o=this.table.options,i=this.scrollLeft;o.ajaxSorting?("remote"==o.pagination||o.progressiveLoad)&&e.modExists("page")?(e.modules.page.reset(!0),e.modules.page.setPage(1).then(function(){}).catch(function(){})):o.ajaxProgressiveLoad?e.modules.ajax.loadData().then(function(){}).catch(function(){}):this._genRemoteRequest():this.refreshActiveData(t?"filter":"sort"),this.scrollHorizontal(i)},n.prototype.scrollHorizontal=function(t){this.scrollLeft=t,this.element.scrollLeft=t,this.table.options.groupBy&&this.table.modules.groupRows.scrollHeaders(t),this.table.modExists("columnCalcs")&&this.table.modules.columnCalcs.scrollHorizontal(t)},n.prototype.refreshActiveData=function(t,e,o){var i,n=this,s=this,r=this.table,a=["all","filter","sort","display","freeze","group","tree","page"];if(this.redrawBlock)return void((!this.redrawBlockRestoreConfig||a.indexOf(t)<a.indexOf(this.redrawBlockRestoreConfig.stage))&&(this.redrawBlockRestoreConfig={stage:t,skipStage:e,renderInPosition:o}));switch(s.table.modExists("edit")&&s.table.modules.edit.cancelEdit(),t||(t="all"),r.options.selectable&&!r.options.selectablePersistence&&r.modExists("selectRow")&&r.modules.selectRow.deselectRows(),t){case"all":case"filter":e?e=!1:r.modExists("filter")?s.setActiveRows(r.modules.filter.filter(s.rows)):s.setActiveRows(s.rows.slice(0));case"sort":e?e=!1:r.modExists("sort")&&r.modules.sort.sort(this.activeRows),this.rowNumColumn&&this.activeRows.forEach(function(t){var e=t.getCell(n.rowNumColumn);e&&e._generateContents()});case"display":this.resetDisplayRows();case"freeze":e?e=!1:this.table.modExists("frozenRows")&&r.modules.frozenRows.isFrozen()&&(r.modules.frozenRows.getDisplayIndex()||r.modules.frozenRows.setDisplayIndex(this.getNextDisplayIndex()),i=r.modules.frozenRows.getDisplayIndex(),!0!==(i=s.setDisplayRows(r.modules.frozenRows.getRows(this.getDisplayRows(i-1)),i))&&r.modules.frozenRows.setDisplayIndex(i));case"group":e?e=!1:r.options.groupBy&&r.modExists("groupRows")&&(r.modules.groupRows.getDisplayIndex()||r.modules.groupRows.setDisplayIndex(this.getNextDisplayIndex()),i=r.modules.groupRows.getDisplayIndex(),!0!==(i=s.setDisplayRows(r.modules.groupRows.getRows(this.getDisplayRows(i-1)),i))&&r.modules.groupRows.setDisplayIndex(i));case"tree":e?e=!1:r.options.dataTree&&r.modExists("dataTree")&&(r.modules.dataTree.getDisplayIndex()||r.modules.dataTree.setDisplayIndex(this.getNextDisplayIndex()),i=r.modules.dataTree.getDisplayIndex(),!0!==(i=s.setDisplayRows(r.modules.dataTree.getRows(this.getDisplayRows(i-1)),i))&&r.modules.dataTree.setDisplayIndex(i)),r.options.pagination&&r.modExists("page")&&!o&&"local"==r.modules.page.getMode()&&r.modules.page.reset();case"page":e?e=!1:r.options.pagination&&r.modExists("page")&&(r.modules.page.getDisplayIndex()||r.modules.page.setDisplayIndex(this.getNextDisplayIndex()),i=r.modules.page.getDisplayIndex(),"local"==r.modules.page.getMode()&&r.modules.page.setMaxRows(this.getDisplayRows(i-1).length),!0!==(i=s.setDisplayRows(r.modules.page.getRows(this.getDisplayRows(i-1)),i))&&r.modules.page.setDisplayIndex(i))}u.prototype.helpers.elVisible(s.element)&&(o?s.reRenderInPosition():(s.renderTable(),r.options.layoutColumnsOnNewData&&s.table.columnManager.redraw(!0))),r.modExists("columnCalcs")&&r.modules.columnCalcs.recalc(this.activeRows)},n.prototype.setActiveRows=function(t){this.activeRows=t,this.activeRowsCount=this.activeRows.length},n.prototype.resetDisplayRows=function(){this.displayRows=[],this.displayRows.push(this.activeRows.slice(0)),this.displayRowsCount=this.displayRows[0].length,this.table.modExists("frozenRows")&&this.table.modules.frozenRows.setDisplayIndex(0),this.table.options.groupBy&&this.table.modExists("groupRows")&&this.table.modules.groupRows.setDisplayIndex(0),this.table.options.pagination&&this.table.modExists("page")&&this.table.modules.page.setDisplayIndex(0)},n.prototype.getNextDisplayIndex=function(){return this.displayRows.length},n.prototype.setDisplayRows=function(t,e){var o=!0;return e&&void 0!==this.displayRows[e]?(this.displayRows[e]=t,o=!0):(this.displayRows.push(t),o=e=this.displayRows.length-1),e==this.displayRows.length-1&&(this.displayRowsCount=this.displayRows[this.displayRows.length-1].length),o},n.prototype.getDisplayRows=function(t){return void 0===t?this.displayRows.length?this.displayRows[this.displayRows.length-1]:[]:this.displayRows[t]||[]},n.prototype.getVisibleRows=function(t){var e=this.element.scrollTop,o=this.element.clientHeight+e,i=!1,n=0,s=0,r=this.getDisplayRows();if(t){this.getDisplayRows();for(var a=this.vDomTop;a<=this.vDomBottom;a++)if(r[a])if(i){if(!(o-r[a].getElement().offsetTop>=0))break;s=a}else if(e-r[a].getElement().offsetTop>=0)n=a;else{if(i=!0,!(o-r[a].getElement().offsetTop>=0))break;s=a}}else n=this.vDomTop,s=this.vDomBottom;return r.slice(n,s+1)},n.prototype.displayRowIterator=function(t){this.displayRows.forEach(t),this.displayRowsCount=this.displayRows[this.displayRows.length-1].length},n.prototype.getRows=function(t){var e;switch(t){case"active":e=this.activeRows;break;case"visible":e=this.getVisibleRows(!0);break;default:e=this.rows}return e},n.prototype.reRenderInPosition=function(t){if("virtual"==this.getRenderMode())if(this.redrawBlock)t?t():this.redrawBlockRederInPosition=!0;else{for(var e=this.element.scrollTop,o=!1,i=!1,n=this.scrollLeft,s=this.getDisplayRows(),r=this.vDomTop;r<=this.vDomBottom;r++)if(s[r]){var a=e-s[r].getElement().offsetTop;if(!(!1===i||Math.abs(a)<i))break;i=a,o=r}t&&t(),this._virtualRenderFill(!1===o?this.displayRowsCount-1:o,!0,i||0),this.scrollHorizontal(n)}else this.renderTable(),t&&t()},n.prototype.setRenderMode=function(){(this.table.element.clientHeight||this.table.options.height)&&this.table.options.virtualDom?this.renderMode="virtual":this.renderMode="classic"},n.prototype.getRenderMode=function(){return this.renderMode},n.prototype.renderTable=function(){var t=this;switch(t.table.options.renderStarted.call(this.table),t.element.scrollTop=0,t.renderMode){case"classic":t._simpleRender();break;case"virtual":t._virtualRenderFill()}t.firstRender&&(t.displayRowsCount?(t.firstRender=!1,t.table.modules.layout.layout()):t.renderEmptyScroll()),t.table.modExists("frozenColumns")&&t.table.modules.frozenColumns.layout(),t.displayRowsCount||t.table.options.placeholder&&(this.renderMode&&t.table.options.placeholder.setAttribute("tabulator-render-mode",this.renderMode),t.getElement().appendChild(t.table.options.placeholder)),t.table.options.renderComplete.call(this.table)},n.prototype._simpleRender=function(){this._clearVirtualDom(),this.displayRowsCount?this.checkClassicModeGroupHeaderWidth():this.renderEmptyScroll()},n.prototype.checkClassicModeGroupHeaderWidth=function(){var t=this,e=this.tableElement,o=!0;t.getDisplayRows().forEach(function(i,n){t.styleRow(i,n),e.appendChild(i.getElement()),i.initialize(!0),"group"!==i.type&&(o=!1)}),e.style.minWidth=o?t.table.columnManager.getWidth()+"px":""},n.prototype.renderEmptyScroll=function(){this.tableElement.style.minWidth=this.table.columnManager.getWidth()+"px",this.tableElement.style.minHeight="1px",this.tableElement.style.visibility="hidden"},n.prototype._clearVirtualDom=function(){var t=this.tableElement;for(this.table.options.placeholder&&this.table.options.placeholder.parentNode&&this.table.options.placeholder.parentNode.removeChild(this.table.options.placeholder);t.firstChild;)t.removeChild(t.firstChild);t.style.paddingTop="",t.style.paddingBottom="",t.style.minWidth="",t.style.minHeight="",t.style.visibility="",this.scrollTop=0,this.scrollLeft=0,this.vDomTop=0,this.vDomBottom=0,this.vDomTopPad=0,this.vDomBottomPad=0},n.prototype.styleRow=function(t,e){var o=t.getElement();e%2?(o.classList.add("tabulator-row-even"),o.classList.remove("tabulator-row-odd")):(o.classList.add("tabulator-row-odd"),o.classList.remove("tabulator-row-even"))},n.prototype._virtualRenderFill=function(t,e,o){var i=this,n=i.tableElement,s=i.element,r=0,a=0,l=0,c=0,d=!0,h=i.getDisplayRows();if(t=t||0,o=o||0,t){for(;n.firstChild;)n.removeChild(n.firstChild);var p=(i.displayRowsCount-t+1)*i.vDomRowHeight;p<i.height&&(t-=Math.ceil((i.height-p)/i.vDomRowHeight))<0&&(t=0),r=Math.min(Math.max(Math.floor(i.vDomWindowBuffer/i.vDomRowHeight),i.vDomWindowMinMarginRows),t),t-=r}else i._clearVirtualDom();if(i.displayRowsCount&&u.prototype.helpers.elVisible(i.element)){for(i.vDomTop=t,i.vDomBottom=t-1;(a<=i.height+i.vDomWindowBuffer||c<i.vDomWindowMinTotalRows)&&i.vDomBottom<i.displayRowsCount-1;){var m=i.vDomBottom+1,f=h[m],g=0;i.styleRow(f,m),n.appendChild(f.getElement()),f.initialized?f.heightInitialized||f.normalizeHeight(!0):f.initialize(!0),g=f.getHeight(),c<r?l+=g:a+=g,g>this.vDomWindowBuffer&&(this.vDomWindowBuffer=2*g),"group"!==f.type&&(d=!1),i.vDomBottom++,c++}t?(i.vDomTopPad=e?i.vDomRowHeight*this.vDomTop+o:i.scrollTop-l,i.vDomBottomPad=i.vDomBottom==i.displayRowsCount-1?0:Math.max(i.vDomScrollHeight-i.vDomTopPad-a-l,0)):(this.vDomTopPad=0,i.vDomRowHeight=Math.floor((a+l)/c),i.vDomBottomPad=i.vDomRowHeight*(i.displayRowsCount-i.vDomBottom-1),i.vDomScrollHeight=l+a+i.vDomBottomPad-i.height),n.style.paddingTop=i.vDomTopPad+"px",n.style.paddingBottom=i.vDomBottomPad+"px",e&&(this.scrollTop=i.vDomTopPad+l+o-(this.element.scrollWidth>this.element.clientWidth?this.element.offsetHeight-this.element.clientHeight:0)),this.scrollTop=Math.min(this.scrollTop,this.element.scrollHeight-this.height),this.element.scrollWidth>this.element.offsetWidth&&e&&(this.scrollTop+=this.element.offsetHeight-this.element.clientHeight),this.vDomScrollPosTop=this.scrollTop,this.vDomScrollPosBottom=this.scrollTop,s.scrollTop=this.scrollTop,n.style.minWidth=d?i.table.columnManager.getWidth()+"px":"",i.table.options.groupBy&&"fitDataFill"!=i.table.modules.layout.getMode()&&i.displayRowsCount==i.table.modules.groupRows.countGroups()&&(i.tableElement.style.minWidth=i.table.columnManager.getWidth())}else this.renderEmptyScroll()},n.prototype.scrollVertical=function(t){var e=this.scrollTop-this.vDomScrollPosTop,o=this.scrollTop-this.vDomScrollPosBottom,i=2*this.vDomWindowBuffer;if(-e>i||o>i){var n=this.scrollLeft;this._virtualRenderFill(Math.floor(this.element.scrollTop/this.element.scrollHeight*this.displayRowsCount)),this.scrollHorizontal(n)}else t?(e<0&&this._addTopRow(-e),o<0&&this.vDomScrollHeight-this.scrollTop>this.vDomWindowBuffer&&this._removeBottomRow(-o)):(e>=0&&this.scrollTop>this.vDomWindowBuffer&&this._removeTopRow(e),o>=0&&this._addBottomRow(o))},n.prototype._addTopRow=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=this.tableElement,i=this.getDisplayRows();if(this.vDomTop){var n=this.vDomTop-1,s=i[n],r=s.getHeight()||this.vDomRowHeight;t>=r&&(this.styleRow(s,n),o.insertBefore(s.getElement(),o.firstChild),s.initialized&&s.heightInitialized||(this.vDomTopNewRows.push(s),s.heightInitialized||s.clearCellHeight()),s.initialize(),this.vDomTopPad-=r,this.vDomTopPad<0&&(this.vDomTopPad=n*this.vDomRowHeight),n||(this.vDomTopPad=0),o.style.paddingTop=this.vDomTopPad+"px",this.vDomScrollPosTop-=r,this.vDomTop--),t=-(this.scrollTop-this.vDomScrollPosTop),s.getHeight()>this.vDomWindowBuffer&&(this.vDomWindowBuffer=2*s.getHeight()),e<this.vDomMaxRenderChain&&this.vDomTop&&t>=(i[this.vDomTop-1].getHeight()||this.vDomRowHeight)?this._addTopRow(t,e+1):this._quickNormalizeRowHeight(this.vDomTopNewRows)}},n.prototype._removeTopRow=function(t){var e=this.tableElement,o=this.getDisplayRows()[this.vDomTop],i=o.getHeight()||this.vDomRowHeight;if(t>=i){var n=o.getElement();n.parentNode.removeChild(n),this.vDomTopPad+=i,e.style.paddingTop=this.vDomTopPad+"px",this.vDomScrollPosTop+=this.vDomTop?i:i+this.vDomWindowBuffer,this.vDomTop++,t=this.scrollTop-this.vDomScrollPosTop,this._removeTopRow(t)}},n.prototype._addBottomRow=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=this.tableElement,i=this.getDisplayRows();if(this.vDomBottom<this.displayRowsCount-1){var n=this.vDomBottom+1,s=i[n],r=s.getHeight()||this.vDomRowHeight;t>=r&&(this.styleRow(s,n),o.appendChild(s.getElement()),s.initialized&&s.heightInitialized||(this.vDomBottomNewRows.push(s),s.heightInitialized||s.clearCellHeight()),s.initialize(),this.vDomBottomPad-=r,(this.vDomBottomPad<0||n==this.displayRowsCount-1)&&(this.vDomBottomPad=0),o.style.paddingBottom=this.vDomBottomPad+"px",this.vDomScrollPosBottom+=r,this.vDomBottom++),t=this.scrollTop-this.vDomScrollPosBottom,s.getHeight()>this.vDomWindowBuffer&&(this.vDomWindowBuffer=2*s.getHeight()),e<this.vDomMaxRenderChain&&this.vDomBottom<this.displayRowsCount-1&&t>=(i[this.vDomBottom+1].getHeight()||this.vDomRowHeight)?this._addBottomRow(t,e+1):this._quickNormalizeRowHeight(this.vDomBottomNewRows)}},n.prototype._removeBottomRow=function(t){var e=this.tableElement,o=this.getDisplayRows()[this.vDomBottom],i=o.getHeight()||this.vDomRowHeight;if(t>=i){var n=o.getElement();n.parentNode&&n.parentNode.removeChild(n),this.vDomBottomPad+=i,this.vDomBottomPad<0&&(this.vDomBottomPad=0),e.style.paddingBottom=this.vDomBottomPad+"px",this.vDomScrollPosBottom-=i,this.vDomBottom--,t=-(this.scrollTop-this.vDomScrollPosBottom),this._removeBottomRow(t)}},n.prototype._quickNormalizeRowHeight=function(t){t.forEach(function(t){t.calcHeight()}),t.forEach(function(t){t.setCellHeight()}),t.length=0},n.prototype.normalizeHeight=function(){this.activeRows.forEach(function(t){t.normalizeHeight()})},n.prototype.adjustTableSize=function(){if("virtual"===this.renderMode){this.height=this.element.clientHeight,this.vDomWindowBuffer=this.table.options.virtualDomBuffer||this.height;var t=this.columnManager.getElement().offsetHeight+(this.table.footerManager&&!this.table.footerManager.external?this.table.footerManager.getElement().offsetHeight:0);this.element.style.minHeight="calc(100% - "+t+"px)",this.element.style.height="calc(100% - "+t+"px)",this.element.style.maxHeight="calc(100% - "+t+"px)"}},n.prototype.reinitialize=function(){this.rows.forEach(function(t){t.reinitialize()})},n.prototype.blockRedraw=function(){this.redrawBlock=!0,this.redrawBlockRestoreConfig=!1},n.prototype.restoreRedraw=function(){this.redrawBlock=!1,this.redrawBlockRestoreConfig?(this.refreshActiveData(this.redrawBlockRestoreConfig.stage,this.redrawBlockRestoreConfig.skipStage,this.redrawBlockRestoreConfig.renderInPosition),this.redrawBlockRestoreConfig=!1):this.redrawBlockRederInPosition&&this.reRenderInPosition(),this.redrawBlockRederInPosition=!1},n.prototype.redraw=function(t){var e=this.scrollLeft;this.adjustTableSize(),this.table.tableWidth=this.table.element.clientWidth,t?this.renderTable():("classic"==this.renderMode?this.table.options.groupBy?this.refreshActiveData("group",!1,!1):this._simpleRender():(this.reRenderInPosition(),this.scrollHorizontal(e)),this.displayRowsCount||this.table.options.placeholder&&this.getElement().appendChild(this.table.options.placeholder))},n.prototype.resetScroll=function(){if(this.element.scrollLeft=0,this.element.scrollTop=0,"ie"===this.table.browser){var t=document.createEvent("Event");t.initEvent("scroll",!1,!0),this.element.dispatchEvent(t)}else this.element.dispatchEvent(new Event("scroll"))};var s=function(t){this._row=t};s.prototype.getData=function(t){return this._row.getData(t)},s.prototype.getElement=function(){return this._row.getElement()},s.prototype.getCells=function(){var t=[];return this._row.getCells().forEach(function(e){t.push(e.getComponent())}),t},s.prototype.getCell=function(t){var e=this._row.getCell(t);return!!e&&e.getComponent()},s.prototype.getIndex=function(){return this._row.getData("data")[this._row.table.options.index]},s.prototype.getPosition=function(t){return this._row.table.rowManager.getRowPosition(this._row,t)},s.prototype.delete=function(){return this._row.delete()},s.prototype.scrollTo=function(){return this._row.table.rowManager.scrollToRow(this._row)},s.prototype.pageTo=function(){if(this._row.table.modExists("page",!0))return this._row.table.modules.page.setPageToRow(this._row)},s.prototype.move=function(t,e){this._row.moveToRow(t,e)},s.prototype.update=function(t){return this._row.updateData(t)},s.prototype.normalizeHeight=function(){this._row.normalizeHeight(!0)},s.prototype.select=function(){this._row.table.modules.selectRow.selectRows(this._row)},s.prototype.deselect=function(){this._row.table.modules.selectRow.deselectRows(this._row)},s.prototype.toggleSelect=function(){this._row.table.modules.selectRow.toggleRow(this._row)},s.prototype.isSelected=function(){return this._row.table.modules.selectRow.isRowSelected(this._row)},s.prototype._getSelf=function(){return this._row},s.prototype.freeze=function(){this._row.table.modExists("frozenRows",!0)&&this._row.table.modules.frozenRows.freezeRow(this._row)},s.prototype.unfreeze=function(){this._row.table.modExists("frozenRows",!0)&&this._row.table.modules.frozenRows.unfreezeRow(this._row)},s.prototype.treeCollapse=function(){this._row.table.modExists("dataTree",!0)&&this._row.table.modules.dataTree.collapseRow(this._row)},s.prototype.treeExpand=function(){this._row.table.modExists("dataTree",!0)&&this._row.table.modules.dataTree.expandRow(this._row)},s.prototype.treeToggle=function(){this._row.table.modExists("dataTree",!0)&&this._row.table.modules.dataTree.toggleRow(this._row)},s.prototype.getTreeParent=function(){return!!this._row.table.modExists("dataTree",!0)&&this._row.table.modules.dataTree.getTreeParent(this._row)},s.prototype.getTreeChildren=function(){return!!this._row.table.modExists("dataTree",!0)&&this._row.table.modules.dataTree.getTreeChildren(this._row)},s.prototype.reformat=function(){return this._row.reinitialize()},s.prototype.getGroup=function(){return this._row.getGroup().getComponent()},s.prototype.getTable=function(){return this._row.table},s.prototype.getNextRow=function(){var t=this._row.nextRow();return t?t.getComponent():t},s.prototype.getPrevRow=function(){var t=this._row.prevRow();return t?t.getComponent():t};var r=function(t,e){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"row";this.table=e.table,this.parent=e,this.data={},this.type=o,this.element=this.createElement(),this.modules={},this.cells=[],this.height=0,this.heightStyled="",this.manualHeight=!1,this.outerHeight=0,this.initialized=!1,this.heightInitialized=!1,this.setData(t),this.generateElement()};r.prototype.createElement=function(){var t=document.createElement("div");return t.classList.add("tabulator-row"),t.setAttribute("role","row"),t},r.prototype.getElement=function(){return this.element},r.prototype.detachElement=function(){this.element&&this.element.parentNode&&this.element.parentNode.removeChild(this.element)},r.prototype.generateElement=function(){var t,e,o,i=this;!1!==i.table.options.selectable&&i.table.modExists("selectRow")&&i.table.modules.selectRow.initializeRow(this),!1!==i.table.options.movableRows&&i.table.modExists("moveRow")&&i.table.modules.moveRow.initializeRow(this),!1!==i.table.options.dataTree&&i.table.modExists("dataTree")&&i.table.modules.dataTree.initializeRow(this),"collapse"===i.table.options.responsiveLayout&&i.table.modExists("responsiveLayout")&&i.table.modules.responsiveLayout.initializeRow(this),i.table.options.rowClick&&i.element.addEventListener("click",function(t){i.table.options.rowClick(t,i.getComponent())}),i.table.options.rowDblClick&&i.element.addEventListener("dblclick",function(t){i.table.options.rowDblClick(t,i.getComponent())}),i.table.options.rowContext&&i.element.addEventListener("contextmenu",function(t){i.table.options.rowContext(t,i.getComponent())}),i.table.options.rowMouseEnter&&i.element.addEventListener("mouseenter",function(t){i.table.options.rowMouseEnter(t,i.getComponent())}),i.table.options.rowMouseLeave&&i.element.addEventListener("mouseleave",function(t){i.table.options.rowMouseLeave(t,i.getComponent())}),i.table.options.rowMouseOver&&i.element.addEventListener("mouseover",function(t){i.table.options.rowMouseOver(t,i.getComponent())}),i.table.options.rowMouseOut&&i.element.addEventListener("mouseout",function(t){i.table.options.rowMouseOut(t,i.getComponent())}),i.table.options.rowMouseMove&&i.element.addEventListener("mousemove",function(t){i.table.options.rowMouseMove(t,i.getComponent())}),i.table.options.rowTap&&(o=!1,i.element.addEventListener("touchstart",function(t){o=!0},{passive:!0}),i.element.addEventListener("touchend",function(t){o&&i.table.options.rowTap(t,i.getComponent()),o=!1})),i.table.options.rowDblTap&&(t=null,i.element.addEventListener("touchend",function(e){t?(clearTimeout(t),t=null,
i.table.options.rowDblTap(e,i.getComponent())):t=setTimeout(function(){clearTimeout(t),t=null},300)})),i.table.options.rowTapHold&&(e=null,i.element.addEventListener("touchstart",function(t){clearTimeout(e),e=setTimeout(function(){clearTimeout(e),e=null,o=!1,i.table.options.rowTapHold(t,i.getComponent())},1e3)},{passive:!0}),i.element.addEventListener("touchend",function(t){clearTimeout(e),e=null}))},r.prototype.generateCells=function(){this.cells=this.table.columnManager.generateCells(this)},r.prototype.initialize=function(t){var e=this;if(!e.initialized||t){for(e.deleteCells();e.element.firstChild;)e.element.removeChild(e.element.firstChild);this.table.modExists("frozenColumns")&&this.table.modules.frozenColumns.layoutRow(this),this.generateCells(),e.cells.forEach(function(t){e.element.appendChild(t.getElement()),t.cellRendered()}),t&&e.normalizeHeight(),e.table.options.dataTree&&e.table.modExists("dataTree")&&e.table.modules.dataTree.layoutRow(this),"collapse"===e.table.options.responsiveLayout&&e.table.modExists("responsiveLayout")&&e.table.modules.responsiveLayout.layoutRow(this),e.table.options.rowFormatter&&e.table.options.rowFormatter(e.getComponent()),e.table.options.resizableRows&&e.table.modExists("resizeRows")&&e.table.modules.resizeRows.initializeRow(e),e.initialized=!0}},r.prototype.reinitializeHeight=function(){this.heightInitialized=!1,null!==this.element.offsetParent&&this.normalizeHeight(!0)},r.prototype.reinitialize=function(){this.initialized=!1,this.heightInitialized=!1,this.manualHeight||(this.height=0,this.heightStyled=""),null!==this.element.offsetParent&&this.initialize(!0)},r.prototype.calcHeight=function(t){var e=0,o=this.table.options.resizableRows?this.element.clientHeight:0;this.cells.forEach(function(t){var o=t.getHeight();o>e&&(e=o)}),this.height=t?Math.max(e,o):this.manualHeight?this.height:Math.max(e,o),this.heightStyled=this.height?this.height+"px":"",this.outerHeight=this.element.offsetHeight},r.prototype.setCellHeight=function(){this.cells.forEach(function(t){t.setHeight()}),this.heightInitialized=!0},r.prototype.clearCellHeight=function(){this.cells.forEach(function(t){t.clearHeight()})},r.prototype.normalizeHeight=function(t){t&&this.clearCellHeight(),this.calcHeight(t),this.setCellHeight()},r.prototype.setHeight=function(t,e){(this.height!=t||e)&&(this.manualHeight=!0,this.height=t,this.heightStyled=t?t+"px":"",this.setCellHeight(),this.outerHeight=this.element.offsetHeight)},r.prototype.getHeight=function(){return this.outerHeight},r.prototype.getWidth=function(){return this.element.offsetWidth},r.prototype.deleteCell=function(t){var e=this.cells.indexOf(t);e>-1&&this.cells.splice(e,1)},r.prototype.setData=function(t){this.table.modExists("mutator")&&(t=this.table.modules.mutator.transformRow(t,"data",t)),this.data=t,this.table.options.reactiveData&&this.table.modExists("reactiveData",!0)&&this.table.modules.reactiveData.watchRow(this)},r.prototype.updateData=function(t){var e=this,o=u.prototype.helpers.elVisible(this.element),i={};return new Promise(function(n,s){"string"==typeof t&&(t=JSON.parse(t)),e.table.options.reactiveData&&e.table.modExists("reactiveData",!0)&&e.table.modules.reactiveData.block(),e.table.modExists("mutator")&&(i=Object.assign(i,e.data),i=Object.assign(i,t),t=e.table.modules.mutator.transformRow(i,"data",t));for(var r in t)e.data[r]=t[r];e.table.options.reactiveData&&e.table.modExists("reactiveData",!0)&&e.table.modules.reactiveData.unblock();for(var r in t){e.table.columnManager.getColumnsByFieldRoot(r).forEach(function(i){var n=e.getCell(i.getField());if(n){var s=i.getFieldValue(t);n.getValue()!=s&&(n.setValueProcessData(s),o&&n.cellRendered())}})}o?(e.normalizeHeight(),e.table.options.rowFormatter&&e.table.options.rowFormatter(e.getComponent())):(e.initialized=!1,e.height=0,e.heightStyled=""),!1!==e.table.options.dataTree&&e.table.modExists("dataTree")&&e.table.modules.dataTree.redrawNeeded(t)&&(e.table.modules.dataTree.initializeRow(e),e.table.modules.dataTree.layoutRow(e),e.table.rowManager.refreshActiveData("tree",!1,!0)),e.table.options.rowUpdated.call(e.table,e.getComponent()),n()})},r.prototype.getData=function(t){var e=this;return t?e.table.modExists("accessor")?e.table.modules.accessor.transformRow(e.data,t):void 0:this.data},r.prototype.getCell=function(t){return t=this.table.columnManager.findColumn(t),this.cells.find(function(e){return e.column===t})},r.prototype.getCellIndex=function(t){return this.cells.findIndex(function(e){return e===t})},r.prototype.findNextEditableCell=function(t){var e=!1;if(t<this.cells.length-1)for(var o=t+1;o<this.cells.length;o++){var i=this.cells[o];if(i.column.modules.edit&&u.prototype.helpers.elVisible(i.getElement())){var n=!0;if("function"==typeof i.column.modules.edit.check&&(n=i.column.modules.edit.check(i.getComponent())),n){e=i;break}}}return e},r.prototype.findPrevEditableCell=function(t){var e=!1;if(t>0)for(var o=t-1;o>=0;o--){var i=this.cells[o],n=!0;if(i.column.modules.edit&&u.prototype.helpers.elVisible(i.getElement())&&("function"==typeof i.column.modules.edit.check&&(n=i.column.modules.edit.check(i.getComponent())),n)){e=i;break}}return e},r.prototype.getCells=function(){return this.cells},r.prototype.nextRow=function(){return this.table.rowManager.nextDisplayRow(this,!0)||!1},r.prototype.prevRow=function(){return this.table.rowManager.prevDisplayRow(this,!0)||!1},r.prototype.moveToRow=function(t,e){var o=this.table.rowManager.findRow(t);o?(this.table.rowManager.moveRowActual(this,o,!e),this.table.rowManager.refreshActiveData("display",!1,!0)):console.warn("Move Error - No matching row found:",t)},r.prototype.delete=function(){var t=this;return new Promise(function(e,o){var i,n;t.table.options.history&&t.table.modExists("history")&&(t.table.options.groupBy&&t.table.modExists("groupRows")?(n=t.getGroup().rows,(i=n.indexOf(t))&&(i=n[i-1])):(i=t.table.rowManager.getRowIndex(t))&&(i=t.table.rowManager.rows[i-1]),t.table.modules.history.action("rowDelete",t,{data:t.getData(),pos:!i,index:i})),t.deleteActual(),e()})},r.prototype.deleteActual=function(t){this.table.rowManager.getRowIndex(this);this.table.modExists("selectRow")&&this.table.modules.selectRow._deselectRow(this,!0),this.table.options.reactiveData&&this.table.modExists("reactiveData",!0),this.modules.group&&this.modules.group.removeRow(this),this.table.rowManager.deleteRow(this,t),this.deleteCells(),this.initialized=!1,this.heightInitialized=!1,this.table.modExists("columnCalcs")&&(this.table.options.groupBy&&this.table.modExists("groupRows")?this.table.modules.columnCalcs.recalcRowGroup(this):this.table.modules.columnCalcs.recalc(this.table.rowManager.activeRows))},r.prototype.deleteCells=function(){for(var t=this.cells.length,e=0;e<t;e++)this.cells[0].delete()},r.prototype.wipe=function(){for(this.deleteCells();this.element.firstChild;)this.element.removeChild(this.element.firstChild);this.element=!1,this.modules={},this.element.parentNode&&this.element.parentNode.removeChild(this.element)},r.prototype.getGroup=function(){return this.modules.group||!1},r.prototype.getComponent=function(){return new s(this)};var a=function(t){this._cell=t};a.prototype.getValue=function(){return this._cell.getValue()},a.prototype.getOldValue=function(){return this._cell.getOldValue()},a.prototype.getElement=function(){return this._cell.getElement()},a.prototype.getRow=function(){return this._cell.row.getComponent()},a.prototype.getData=function(){return this._cell.row.getData()},a.prototype.getField=function(){return this._cell.column.getField()},a.prototype.getColumn=function(){return this._cell.column.getComponent()},a.prototype.setValue=function(t,e){void 0===e&&(e=!0),this._cell.setValue(t,e)},a.prototype.restoreOldValue=function(){this._cell.setValueActual(this._cell.getOldValue())},a.prototype.edit=function(t){return this._cell.edit(t)},a.prototype.cancelEdit=function(){this._cell.cancelEdit()},a.prototype.nav=function(){return this._cell.nav()},a.prototype.checkHeight=function(){this._cell.checkHeight()},a.prototype.getTable=function(){return this._cell.table},a.prototype._getSelf=function(){return this._cell};var l=function(t,e){this.table=t.table,this.column=t,this.row=e,this.element=null,this.value=null,this.oldValue=null,this.modules={},this.height=null,this.width=null,this.minWidth=null,this.build()};l.prototype.build=function(){this.generateElement(),this.setWidth(),this._configureCell(),this.setValueActual(this.column.getFieldValue(this.row.data))},l.prototype.generateElement=function(){this.element=document.createElement("div"),this.element.className="tabulator-cell",this.element.setAttribute("role","gridcell"),this.element=this.element},l.prototype._configureCell=function(){var t=this,e=t.column.cellEvents,o=t.element,i=this.column.getField();if(o.style.textAlign=t.column.hozAlign,i&&o.setAttribute("tabulator-field",i),t.column.definition.cssClass){t.column.definition.cssClass.split(" ").forEach(function(t){o.classList.add(t)})}"hover"===this.table.options.tooltipGenerationMode&&o.addEventListener("mouseenter",function(e){t._generateTooltip()}),t._bindClickEvents(e),t._bindTouchEvents(e),t._bindMouseEvents(e),t.column.modules.edit&&t.table.modules.edit.bindEditor(t),t.column.definition.rowHandle&&!1!==t.table.options.movableRows&&t.table.modExists("moveRow")&&t.table.modules.moveRow.initializeCell(t),t.column.visible||t.hide()},l.prototype._bindClickEvents=function(t){var e=this,o=e.element;(t.cellClick||e.table.options.cellClick)&&o.addEventListener("click",function(o){var i=e.getComponent();t.cellClick&&t.cellClick.call(e.table,o,i),e.table.options.cellClick&&e.table.options.cellClick.call(e.table,o,i)}),t.cellDblClick||this.table.options.cellDblClick?o.addEventListener("dblclick",function(o){var i=e.getComponent();t.cellDblClick&&t.cellDblClick.call(e.table,o,i),e.table.options.cellDblClick&&e.table.options.cellDblClick.call(e.table,o,i)}):o.addEventListener("dblclick",function(t){t.preventDefault();try{if(document.selection){var o=document.body.createTextRange();o.moveToElementText(e.element),o.select()}else if(window.getSelection){var o=document.createRange();o.selectNode(e.element),window.getSelection().removeAllRanges(),window.getSelection().addRange(o)}}catch(t){}}),(t.cellContext||this.table.options.cellContext)&&o.addEventListener("contextmenu",function(o){var i=e.getComponent();t.cellContext&&t.cellContext.call(e.table,o,i),e.table.options.cellContext&&e.table.options.cellContext.call(e.table,o,i)})},l.prototype._bindMouseEvents=function(t){var e=this,o=e.element;(t.cellMouseEnter||e.table.options.cellMouseEnter)&&o.addEventListener("mouseenter",function(o){var i=e.getComponent();t.cellMouseEnter&&t.cellMouseEnter.call(e.table,o,i),e.table.options.cellMouseEnter&&e.table.options.cellMouseEnter.call(e.table,o,i)}),(t.cellMouseLeave||e.table.options.cellMouseLeave)&&o.addEventListener("mouseleave",function(o){var i=e.getComponent();t.cellMouseLeave&&t.cellMouseLeave.call(e.table,o,i),e.table.options.cellMouseLeave&&e.table.options.cellMouseLeave.call(e.table,o,i)}),(t.cellMouseOver||e.table.options.cellMouseOver)&&o.addEventListener("mouseover",function(o){var i=e.getComponent();t.cellMouseOver&&t.cellMouseOver.call(e.table,o,i),e.table.options.cellMouseOver&&e.table.options.cellMouseOver.call(e.table,o,i)}),(t.cellMouseOut||e.table.options.cellMouseOut)&&o.addEventListener("mouseout",function(o){var i=e.getComponent();t.cellMouseOut&&t.cellMouseOut.call(e.table,o,i),e.table.options.cellMouseOut&&e.table.options.cellMouseOut.call(e.table,o,i)}),(t.cellMouseMove||e.table.options.cellMouseMove)&&o.addEventListener("mousemove",function(o){var i=e.getComponent();t.cellMouseMove&&t.cellMouseMove.call(e.table,o,i),e.table.options.cellMouseMove&&e.table.options.cellMouseMove.call(e.table,o,i)})},l.prototype._bindTouchEvents=function(t){var e,o,i,n=this,s=n.element;(t.cellTap||this.table.options.cellTap)&&(i=!1,s.addEventListener("touchstart",function(t){i=!0},{passive:!0}),s.addEventListener("touchend",function(e){if(i){var o=n.getComponent();t.cellTap&&t.cellTap.call(n.table,e,o),n.table.options.cellTap&&n.table.options.cellTap.call(n.table,e,o)}i=!1})),(t.cellDblTap||this.table.options.cellDblTap)&&(e=null,s.addEventListener("touchend",function(o){if(e){clearTimeout(e),e=null;var i=n.getComponent();t.cellDblTap&&t.cellDblTap.call(n.table,o,i),n.table.options.cellDblTap&&n.table.options.cellDblTap.call(n.table,o,i)}else e=setTimeout(function(){clearTimeout(e),e=null},300)})),(t.cellTapHold||this.table.options.cellTapHold)&&(o=null,s.addEventListener("touchstart",function(e){clearTimeout(o),o=setTimeout(function(){clearTimeout(o),o=null,i=!1;var s=n.getComponent();t.cellTapHold&&t.cellTapHold.call(n.table,e,s),n.table.options.cellTapHold&&n.table.options.cellTapHold.call(n.table,e,s)},1e3)},{passive:!0}),s.addEventListener("touchend",function(t){clearTimeout(o),o=null}))},l.prototype._generateContents=function(){var t;switch(t=this.table.modExists("format")?this.table.modules.format.formatValue(this):this.element.innerHTML=this.value,void 0===t?"undefined":_typeof(t)){case"object":if(t instanceof Node){for(;this.element.firstChild;)this.element.removeChild(this.element.firstChild);this.element.appendChild(t)}else this.element.innerHTML="",null!=t&&console.warn("Format Error - Formatter has returned a type of object, the only valid formatter object return is an instance of Node, the formatter returned:",t);break;case"undefined":case"null":this.element.innerHTML="";break;default:this.element.innerHTML=t}},l.prototype.cellRendered=function(){this.table.modExists("format")&&this.table.modules.format.cellRendered&&this.table.modules.format.cellRendered(this)},l.prototype._generateTooltip=function(){var t=this.column.tooltip;t?(!0===t?t=this.value:"function"==typeof t&&!1===(t=t(this.getComponent()))&&(t=""),void 0===t&&(t=""),this.element.setAttribute("title",t)):this.element.setAttribute("title","")},l.prototype.getElement=function(){return this.element},l.prototype.getValue=function(){return this.value},l.prototype.getOldValue=function(){return this.oldValue},l.prototype.setValue=function(t,e){var o,i=this.setValueProcessData(t,e);i&&(this.table.options.history&&this.table.modExists("history")&&this.table.modules.history.action("cellEdit",this,{oldValue:this.oldValue,newValue:this.value}),o=this.getComponent(),this.column.cellEvents.cellEdited&&this.column.cellEvents.cellEdited.call(this.table,o),this.table.options.cellEdited.call(this.table,o),this.table.options.dataEdited.call(this.table,this.table.rowManager.getData()))},l.prototype.setValueProcessData=function(t,e){var o=!1;return this.value!=t&&(o=!0,e&&this.column.modules.mutate&&(t=this.table.modules.mutator.transformCell(this,t))),this.setValueActual(t),o&&this.table.modExists("columnCalcs")&&(this.column.definition.topCalc||this.column.definition.bottomCalc)&&(this.table.options.groupBy&&this.table.modExists("groupRows")?("table"!=this.table.options.columnCalcs&&"both"!=this.table.options.columnCalcs||this.table.modules.columnCalcs.recalc(this.table.rowManager.activeRows),"table"!=this.table.options.columnCalcs&&this.table.modules.columnCalcs.recalcRowGroup(this.row)):this.table.modules.columnCalcs.recalc(this.table.rowManager.activeRows)),o},l.prototype.setValueActual=function(t){this.oldValue=this.value,this.value=t,this.table.options.reactiveData&&this.table.modExists("reactiveData")&&this.table.modules.reactiveData.block(),this.column.setFieldValue(this.row.data,t),this.table.options.reactiveData&&this.table.modExists("reactiveData")&&this.table.modules.reactiveData.unblock(),this._generateContents(),this._generateTooltip(),this.table.options.resizableColumns&&this.table.modExists("resizeColumns")&&this.table.modules.resizeColumns.initializeColumn("cell",this.column,this.element),this.table.modExists("frozenColumns")&&this.table.modules.frozenColumns.layoutElement(this.element,this.column)},l.prototype.setWidth=function(){this.width=this.column.width,this.element.style.width=this.column.widthStyled},l.prototype.clearWidth=function(){this.width="",this.element.style.width=""},l.prototype.getWidth=function(){return this.width||this.element.offsetWidth},l.prototype.setMinWidth=function(){this.minWidth=this.column.minWidth,this.element.style.minWidth=this.column.minWidthStyled},l.prototype.checkHeight=function(){this.row.reinitializeHeight()},l.prototype.clearHeight=function(){this.element.style.height="",this.height=null},l.prototype.setHeight=function(){this.height=this.row.height,this.element.style.height=this.row.heightStyled},l.prototype.getHeight=function(){return this.height||this.element.offsetHeight},l.prototype.show=function(){this.element.style.display=""},l.prototype.hide=function(){this.element.style.display="none"},l.prototype.edit=function(t){if(this.table.modExists("edit",!0))return this.table.modules.edit.editCell(this,t)},l.prototype.cancelEdit=function(){if(this.table.modExists("edit",!0)){var t=this.table.modules.edit.getCurrentCell();t&&t._getSelf()===this?this.table.modules.edit.cancelEdit():console.warn("Cancel Editor Error - This cell is not currently being edited ")}},l.prototype.delete=function(){this.table.rowManager.redrawBlock||this.element.parentNode.removeChild(this.element),this.element=!1,this.column.deleteCell(this),this.row.deleteCell(this),this.calcs={}},l.prototype.nav=function(){var t=this,e=!1,o=this.row.getCellIndex(this);return{next:function(){var e,o=this.right();return!!o||!(!(e=t.table.rowManager.nextDisplayRow(t.row,!0))||!(o=e.findNextEditableCell(-1)))&&(o.edit(),!0)},prev:function(){var e,o=this.left();return!!o||!(!(e=t.table.rowManager.prevDisplayRow(t.row,!0))||!(o=e.findPrevEditableCell(e.cells.length)))&&(o.edit(),!0)},left:function(){return!!(e=t.row.findPrevEditableCell(o))&&(e.edit(),!0)},right:function(){return!!(e=t.row.findNextEditableCell(o))&&(e.edit(),!0)},up:function(){var e=t.table.rowManager.prevDisplayRow(t.row,!0);e&&e.cells[o].edit()},down:function(){var e=t.table.rowManager.nextDisplayRow(t.row,!0);e&&e.cells[o].edit()}}},l.prototype.getIndex=function(){this.row.getCellIndex(this)},l.prototype.getComponent=function(){return new a(this)};var c=function(t){this.table=t,this.active=!1,this.element=this.createElement(),this.external=!1,this.links=[],this._initialize()};c.prototype.createElement=function(){var t=document.createElement("div");return t.classList.add("tabulator-footer"),t},c.prototype._initialize=function(t){if(this.table.options.footerElement)switch(_typeof(this.table.options.footerElement)){case"string":"<"===this.table.options.footerElement[0]?this.element.innerHTML=this.table.options.footerElement:(this.external=!0,this.element=document.querySelector(this.table.options.footerElement));break;default:this.element=this.table.options.footerElement}},c.prototype.getElement=function(){return this.element},c.prototype.append=function(t,e){this.activate(e),this.element.appendChild(t),this.table.rowManager.adjustTableSize()},c.prototype.prepend=function(t,e){this.activate(e),this.element.insertBefore(t,this.element.firstChild),this.table.rowManager.adjustTableSize()},c.prototype.remove=function(t){t.parentNode.removeChild(t),this.deactivate()},c.prototype.deactivate=function(t){this.element.firstChild&&!t||(this.external||this.element.parentNode.removeChild(this.element),this.active=!1)},c.prototype.activate=function(t){this.active||(this.active=!0,this.external||(this.table.element.appendChild(this.getElement()),this.table.element.style.display="")),t&&this.links.push(t)},c.prototype.redraw=function(){this.links.forEach(function(t){t.footerRedraw()})};var u=function t(e,o){this.options={},this.columnManager=null,this.rowManager=null,this.footerManager=null,this.browser="",this.browserSlow=!1,this.browserMobile=!1,this.modules={},this.initializeElement(e),this.initializeOptions(o||{}),this._create(),t.prototype.comms.register(this)};u.prototype.defaultOptions={height:!1,layout:"fitData",layoutColumnsOnNewData:!1,columnMinWidth:40,columnHeaderVertAlign:"top",columnVertAlign:!1,resizableColumns:!0,resizableRows:!1,autoResize:!0,columns:[],data:[],autoColumns:!1,reactiveData:!1,nestedFieldSeparator:".",tooltips:!1,tooltipsHeader:!1,tooltipGenerationMode:"load",initialSort:!1,initialFilter:!1,initialHeaderFilter:!1,columnHeaderSortMulti:!0,sortOrderReverse:!1,headerSort:!0,headerSortTristate:!1,footerElement:!1,index:"id",keybindings:[],tabEndNewRow:!1,invalidOptionWarnings:!0,clipboard:!1,clipboardCopyStyled:!0,clipboardCopySelector:"active",clipboardCopyFormatter:"table",clipboardPasteParser:"table",clipboardPasteAction:"insert",clipboardCopyConfig:!1,clipboardCopied:function(){},clipboardPasted:function(){},clipboardPasteError:function(){},downloadDataFormatter:!1,downloadReady:function(t,e){return e},downloadComplete:!1,downloadConfig:!1,dataTree:!1,dataTreeElementColumn:!1,dataTreeBranchElement:!0,dataTreeChildIndent:9,dataTreeChildField:"_children",dataTreeCollapseElement:!1,dataTreeExpandElement:!1,dataTreeStartExpanded:!1,dataTreeRowExpanded:function(){},dataTreeRowCollapsed:function(){},printAsHtml:!1,printFormatter:!1,printHeader:!1,printFooter:!1,printCopyStyle:!0,printVisibleRows:!0,printConfig:{},addRowPos:"bottom",selectable:"highlight",selectableRangeMode:"drag",selectableRollingSelection:!0,selectablePersistence:!0,selectableCheck:function(t,e){return!0},headerFilterPlaceholder:!1,headerVisible:!0,history:!1,locale:!1,langs:{},virtualDom:!0,virtualDomBuffer:0,persistentLayout:!1,persistentSort:!1,persistentFilter:!1,persistenceID:"",persistenceMode:!0,persistenceReaderFunc:!1,persistenceWriterFunc:!1,persistence:!1,responsiveLayout:!1,responsiveLayoutCollapseStartOpen:!0,responsiveLayoutCollapseUseFormatters:!0,responsiveLayoutCollapseFormatter:!1,pagination:!1,paginationSize:!1,paginationInitialPage:1,paginationButtonCount:5,paginationSizeSelector:!1,paginationElement:!1,paginationDataSent:{},paginationDataReceived:{},paginationAddRow:"page",ajaxURL:!1,ajaxURLGenerator:!1,ajaxParams:{},ajaxConfig:"get",ajaxContentType:"form",ajaxRequestFunc:!1,ajaxLoader:!0,ajaxLoaderLoading:!1,ajaxLoaderError:!1,ajaxFiltering:!1,ajaxSorting:!1,ajaxProgressiveLoad:!1,ajaxProgressiveLoadDelay:0,ajaxProgressiveLoadScrollMargin:0,groupBy:!1,groupStartOpen:!0,groupValues:!1,groupHeader:!1,htmlOutputConfig:!1,movableColumns:!1,movableRows:!1,movableRowsConnectedTables:!1,movableRowsSender:!1,movableRowsReceiver:"insert",movableRowsSendingStart:function(){},movableRowsSent:function(){},movableRowsSentFailed:function(){},movableRowsSendingStop:function(){},movableRowsReceivingStart:function(){},movableRowsReceived:function(){},movableRowsReceivedFailed:function(){},movableRowsReceivingStop:function(){},scrollToRowPosition:"top",scrollToRowIfVisible:!0,scrollToColumnPosition:"left",scrollToColumnIfVisible:!0,rowFormatter:!1,placeholder:!1,tableBuilding:function(){},tableBuilt:function(){},renderStarted:function(){},renderComplete:function(){},rowClick:!1,rowDblClick:!1,rowContext:!1,rowTap:!1,rowDblTap:!1,rowTapHold:!1,rowMouseEnter:!1,rowMouseLeave:!1,rowMouseOver:!1,rowMouseOut:!1,rowMouseMove:!1,rowAdded:function(){},rowDeleted:function(){},rowMoved:function(){},rowUpdated:function(){},rowSelectionChanged:function(){},rowSelected:function(){},rowDeselected:function(){},rowResized:function(){},cellClick:!1,cellDblClick:!1,cellContext:!1,cellTap:!1,cellDblTap:!1,cellTapHold:!1,cellMouseEnter:!1,cellMouseLeave:!1,cellMouseOver:!1,cellMouseOut:!1,cellMouseMove:!1,cellEditing:function(){},cellEdited:function(){},cellEditCancelled:function(){},columnMoved:!1,columnResized:function(){},columnTitleChanged:function(){},columnVisibilityChanged:function(){},htmlImporting:function(){},htmlImported:function(){},dataLoading:function(){},dataLoaded:function(){},dataEdited:function(){},ajaxRequesting:function(){},ajaxResponse:!1,ajaxError:function(){},dataFiltering:!1,dataFiltered:!1,dataSorting:function(){},dataSorted:function(){},groupToggleElement:"arrow",groupClosedShowCalcs:!1,dataGrouping:function(){},dataGrouped:!1,groupVisibilityChanged:function(){},groupClick:!1,groupDblClick:!1,groupContext:!1,groupTap:!1,groupDblTap:!1,groupTapHold:!1,columnCalcs:!0,pageLoaded:function(){},localized:function(){},validationFailed:function(){},historyUndo:function(){},historyRedo:function(){},scrollHorizontal:function(){},scrollVertical:function(){}},u.prototype.initializeOptions=function(t){if(!1!==t.invalidOptionWarnings)for(var e in t)void 0===this.defaultOptions[e]&&console.warn("Invalid table constructor option:",e);for(var e in this.defaultOptions)e in t?this.options[e]=t[e]:Array.isArray(this.defaultOptions[e])?this.options[e]=[]:"object"===_typeof(this.defaultOptions[e])?this.options[e]={}:this.options[e]=this.defaultOptions[e]},u.prototype.initializeElement=function(t){return"undefined"!=typeof HTMLElement&&t instanceof HTMLElement?(this.element=t,!0):"string"==typeof t?(this.element=document.querySelector(t),!!this.element||(console.error("Tabulator Creation Error - no element found matching selector: ",t),!1)):(console.error("Tabulator Creation Error - Invalid element provided:",t),!1)},u.prototype._mapDepricatedFunctionality=function(){(this.options.persistentLayout||this.options.persistentSort||this.options.persistentFilter)&&(this.options.persistence||(this.options.persistence={})),this.options.persistentLayout&&(console.warn("persistentLayout option is deprecated, you should now use the persistence option"),!0!==this.options.persistence&&void 0===this.options.persistence.columns&&(this.options.persistence.columns=!0)),this.options.persistentSort&&(console.warn("persistentSort option is deprecated, you should now use the persistence option"),!0!==this.options.persistence&&void 0===this.options.persistence.sort&&(this.options.persistence.sort=!0)),this.options.persistentFilter&&(console.warn("persistentFilter option is deprecated, you should now use the persistence option"),!0!==this.options.persistence&&void 0===this.options.persistence.filter&&(this.options.persistence.filter=!0)),this.options.columnVertAlign&&(console.warn("columnVertAlign option is deprecated, you should now use the columnHeaderVertAlign option"),this.options.columnHeaderVertAlign=this.options.columnVertAlign)},u.prototype._clearSelection=function(){this.element.classList.add("tabulator-block-select"),window.getSelection?window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges():document.selection&&document.selection.empty(),this.element.classList.remove("tabulator-block-select")},u.prototype._create=function(){this._clearObjectPointers(),this._mapDepricatedFunctionality(),this.bindModules(),"TABLE"===this.element.tagName&&this.modExists("htmlTableImport",!0)&&this.modules.htmlTableImport.parseTable(),this.columnManager=new t(this),this.rowManager=new n(this),this.footerManager=new c(this),this.columnManager.setRowManager(this.rowManager),this.rowManager.setColumnManager(this.columnManager),this._buildElement(),this._loadInitialData()},u.prototype._clearObjectPointers=function(){this.options.columns=this.options.columns.slice(0),this.options.reactiveData||(this.options.data=this.options.data.slice(0))},u.prototype._buildElement=function(){var t=this,e=this.element,o=this.modules,i=this.options;for(i.tableBuilding.call(this),e.classList.add("tabulator"),e.setAttribute("role","grid");e.firstChild;)e.removeChild(e.firstChild);i.height&&(i.height=isNaN(i.height)?i.height:i.height+"px",e.style.height=i.height),this.columnManager.initialize(),this.rowManager.initialize(),this._detectBrowser(),this.modExists("layout",!0)&&o.layout.initialize(i.layout),!1!==i.headerFilterPlaceholder&&o.localize.setHeaderFilterPlaceholder(i.headerFilterPlaceholder);for(var n in i.langs)o.localize.installLang(n,i.langs[n]);if(o.localize.setLocale(i.locale),"string"==typeof i.placeholder){var s=document.createElement("div");s.classList.add("tabulator-placeholder");var r=document.createElement("span");r.innerHTML=i.placeholder,s.appendChild(r),i.placeholder=s}if(e.appendChild(this.columnManager.getElement()),e.appendChild(this.rowManager.getElement()),i.footerElement&&this.footerManager.activate(),i.persistence&&this.modExists("persistence",!0)&&o.persistence.initialize(),i.persistence&&this.modExists("persistence",!0)&&o.persistence.config.columns&&(i.columns=o.persistence.load("columns",i.columns)),i.movableRows&&this.modExists("moveRow")&&o.moveRow.initialize(),i.autoColumns&&this.options.data&&this.columnManager.generateColumnsFromRowData(this.options.data),this.modExists("columnCalcs")&&o.columnCalcs.initialize(),this.columnManager.setColumns(i.columns),i.dataTree&&this.modExists("dataTree",!0)&&o.dataTree.initialize(),this.modExists("frozenRows")&&this.modules.frozenRows.initialize(),(i.persistence&&this.modExists("persistence",!0)&&o.persistence.config.sort||i.initialSort)&&this.modExists("sort",!0)){var a=[];i.persistence&&this.modExists("persistence",!0)&&o.persistence.config.sort?!1===(a=o.persistence.load("sort"))&&i.initialSort&&(a=i.initialSort):i.initialSort&&(a=i.initialSort),o.sort.setSort(a)}if((i.persistence&&this.modExists("persistence",!0)&&o.persistence.config.filter||i.initialFilter)&&this.modExists("filter",!0)){var l=[];i.persistence&&this.modExists("persistence",!0)&&o.persistence.config.filter?!1===(l=o.persistence.load("filter"))&&i.initialFilter&&(l=i.initialFilter):i.initialFilter&&(l=i.initialFilter),o.filter.setFilter(l)}i.initialHeaderFilter&&this.modExists("filter",!0)&&i.initialHeaderFilter.forEach(function(e){var i=t.columnManager.findColumn(e.field);if(!i)return console.warn("Column Filter Error - No matching column found:",e.field),!1;o.filter.setHeaderFilterValue(i,e.value)}),this.modExists("ajax")&&o.ajax.initialize(),i.pagination&&this.modExists("page",!0)&&o.page.initialize(),i.groupBy&&this.modExists("groupRows",!0)&&o.groupRows.initialize(),this.modExists("keybindings")&&o.keybindings.initialize(),this.modExists("selectRow")&&o.selectRow.clearSelectionData(!0),i.autoResize&&this.modExists("resizeTable")&&o.resizeTable.initialize(),this.modExists("clipboard")&&o.clipboard.initialize(),i.printAsHtml&&this.modExists("print")&&o.print.initialize(),i.tableBuilt.call(this)},u.prototype._loadInitialData=function(){var t=this;if(t.options.pagination&&t.modExists("page"))if(t.modules.page.reset(!0),"local"==t.options.pagination){if(t.options.data.length)t.rowManager.setData(t.options.data);else{if((t.options.ajaxURL||t.options.ajaxURLGenerator)&&t.modExists("ajax"))return void t.modules.ajax.loadData().then(function(){}).catch(function(){t.options.paginationInitialPage&&t.modules.page.setPage(t.options.paginationInitialPage)});t.rowManager.setData(t.options.data)}t.options.paginationInitialPage&&t.modules.page.setPage(t.options.paginationInitialPage)}else t.options.ajaxURL?t.modules.page.setPage(t.options.paginationInitialPage).then(function(){}).catch(function(){}):t.rowManager.setData([]);else t.options.data.length?t.rowManager.setData(t.options.data):(t.options.ajaxURL||t.options.ajaxURLGenerator)&&t.modExists("ajax")?t.modules.ajax.loadData().then(function(){}).catch(function(){}):t.rowManager.setData(t.options.data)},u.prototype.destroy=function(){var t=this.element;for(u.prototype.comms.deregister(this),this.options.reactiveData&&this.modExists("reactiveData",!0)&&this.modules.reactiveData.unwatchData(),this.rowManager.rows.forEach(function(t){t.wipe()}),this.rowManager.rows=[],this.rowManager.activeRows=[],this.rowManager.displayRows=[],this.options.autoResize&&this.modExists("resizeTable")&&this.modules.resizeTable.clearBindings(),this.modExists("keybindings")&&this.modules.keybindings.clearBindings();t.firstChild;)t.removeChild(t.firstChild);t.classList.remove("tabulator")},u.prototype._detectBrowser=function(){var t=navigator.userAgent||navigator.vendor||window.opera;t.indexOf("Trident")>-1?(this.browser="ie",
this.browserSlow=!0):t.indexOf("Edge")>-1?(this.browser="edge",this.browserSlow=!0):t.indexOf("Firefox")>-1?(this.browser="firefox",this.browserSlow=!1):(this.browser="other",this.browserSlow=!1),this.browserMobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))},u.prototype.blockRedraw=function(){return this.rowManager.blockRedraw()},u.prototype.restoreRedraw=function(){return this.rowManager.restoreRedraw()},u.prototype.setDataFromLocalFile=function(t){var e=this;return new Promise(function(o,i){var n=document.createElement("input");n.type="file",n.accept=t||".json,application/json",n.addEventListener("change",function(t){var s,r=n.files[0],a=new FileReader;a.readAsText(r),a.onload=function(t){try{s=JSON.parse(a.result)}catch(t){return console.warn("File Load Error - File contents is invalid JSON",t),void i(t)}e._setData(s).then(function(t){o(t)}).catch(function(t){o(t)})},a.onerror=function(t){console.warn("File Load Error - Unable to read file"),i()}}),n.click()})},u.prototype.setData=function(t,e,o){return this.modExists("ajax")&&this.modules.ajax.blockActiveRequest(),this._setData(t,e,o)},u.prototype._setData=function(t,e,o,i){var n=this;return"string"!=typeof t?t?n.rowManager.setData(t,i):n.modExists("ajax")&&(n.modules.ajax.getUrl||n.options.ajaxURLGenerator)?"remote"==n.options.pagination&&n.modExists("page",!0)?(n.modules.page.reset(!0),n.modules.page.setPage(1)):n.modules.ajax.loadData(i):n.rowManager.setData([],i):0==t.indexOf("{")||0==t.indexOf("[")?n.rowManager.setData(JSON.parse(t),i):n.modExists("ajax",!0)?(e&&n.modules.ajax.setParams(e),o&&n.modules.ajax.setConfig(o),n.modules.ajax.setUrl(t),"remote"==n.options.pagination&&n.modExists("page",!0)?(n.modules.page.reset(!0),n.modules.page.setPage(1)):n.modules.ajax.loadData(i)):void 0},u.prototype.clearData=function(){this.modExists("ajax")&&this.modules.ajax.blockActiveRequest(),this.rowManager.clearData()},u.prototype.getData=function(t){return!0===t&&(console.warn("passing a boolean to the getData function is deprecated, you should now pass the string 'active'"),t="active"),this.rowManager.getData(t)},u.prototype.getDataCount=function(t){return!0===t&&(console.warn("passing a boolean to the getDataCount function is deprecated, you should now pass the string 'active'"),t="active"),this.rowManager.getDataCount(t)},u.prototype.searchRows=function(t,e,o){if(this.modExists("filter",!0))return this.modules.filter.search("rows",t,e,o)},u.prototype.searchData=function(t,e,o){if(this.modExists("filter",!0))return this.modules.filter.search("data",t,e,o)},u.prototype.getHtml=function(t,e,o){if(this.modExists("htmlTableExport",!0))return this.modules.htmlTableExport.getHtml(t,e,o)},u.prototype.print=function(t,e,o){if(this.modExists("print",!0))return this.modules.print.printFullscreen(t,e,o)},u.prototype.getAjaxUrl=function(){if(this.modExists("ajax",!0))return this.modules.ajax.getUrl()},u.prototype.replaceData=function(t,e,o){return this.modExists("ajax")&&this.modules.ajax.blockActiveRequest(),this._setData(t,e,o,!0)},u.prototype.updateData=function(t){var e=this,o=this,i=0;return new Promise(function(n,s){e.modExists("ajax")&&e.modules.ajax.blockActiveRequest(),"string"==typeof t&&(t=JSON.parse(t)),t?t.forEach(function(t){var e=o.rowManager.findRow(t[o.options.index]);e&&(i++,e.updateData(t).then(function(){--i||n()}))}):(console.warn("Update Error - No data provided"),s("Update Error - No data provided"))})},u.prototype.addData=function(t,e,o){var i=this;return new Promise(function(n,s){i.modExists("ajax")&&i.modules.ajax.blockActiveRequest(),"string"==typeof t&&(t=JSON.parse(t)),t?i.rowManager.addRows(t,e,o).then(function(t){var e=[];t.forEach(function(t){e.push(t.getComponent())}),n(e)}):(console.warn("Update Error - No data provided"),s("Update Error - No data provided"))})},u.prototype.updateOrAddData=function(t){var e=this,o=this,i=[],n=0;return new Promise(function(s,r){e.modExists("ajax")&&e.modules.ajax.blockActiveRequest(),"string"==typeof t&&(t=JSON.parse(t)),t?t.forEach(function(t){var e=o.rowManager.findRow(t[o.options.index]);n++,e?e.updateData(t).then(function(){n--,i.push(e.getComponent()),n||s(i)}):o.rowManager.addRows(t).then(function(t){n--,i.push(t[0].getComponent()),n||s(i)})}):(console.warn("Update Error - No data provided"),r("Update Error - No data provided"))})},u.prototype.getRow=function(t){var e=this.rowManager.findRow(t);return e?e.getComponent():(console.warn("Find Error - No matching row found:",t),!1)},u.prototype.getRowFromPosition=function(t,e){var o=this.rowManager.getRowFromPosition(t,e);return o?o.getComponent():(console.warn("Find Error - No matching row found:",t),!1)},u.prototype.deleteRow=function(t){var e=this;return new Promise(function(o,i){function n(){++s==t.length&&r&&(a.rowManager.reRenderInPosition(),o())}var s=0,r=0,a=e;Array.isArray(t)||(t=[t]),t.forEach(function(t){var o=e.rowManager.findRow(t,!0);o?o.delete().then(function(){r++,n()}).catch(function(t){n(),i(t)}):(console.warn("Delete Error - No matching row found:",t),i("Delete Error - No matching row found"),n())})})},u.prototype.addRow=function(t,e,o){var i=this;return new Promise(function(n,s){"string"==typeof t&&(t=JSON.parse(t)),i.rowManager.addRows(t,e,o).then(function(t){i.modExists("columnCalcs")&&i.modules.columnCalcs.recalc(i.rowManager.activeRows),n(t[0].getComponent())})})},u.prototype.updateOrAddRow=function(t,e){var o=this;return new Promise(function(i,n){var s=o.rowManager.findRow(t);"string"==typeof e&&(e=JSON.parse(e)),s?s.updateData(e).then(function(){o.modExists("columnCalcs")&&o.modules.columnCalcs.recalc(o.rowManager.activeRows),i(s.getComponent())}).catch(function(t){n(t)}):s=o.rowManager.addRows(e).then(function(t){o.modExists("columnCalcs")&&o.modules.columnCalcs.recalc(o.rowManager.activeRows),i(t[0].getComponent())}).catch(function(t){n(t)})})},u.prototype.updateRow=function(t,e){var o=this;return new Promise(function(i,n){var s=o.rowManager.findRow(t);"string"==typeof e&&(e=JSON.parse(e)),s?s.updateData(e).then(function(){i(s.getComponent())}).catch(function(t){n(t)}):(console.warn("Update Error - No matching row found:",t),n("Update Error - No matching row found"))})},u.prototype.scrollToRow=function(t,e,o){var i=this;return new Promise(function(n,s){var r=i.rowManager.findRow(t);r?i.rowManager.scrollToRow(r,e,o).then(function(){n()}).catch(function(t){s(t)}):(console.warn("Scroll Error - No matching row found:",t),s("Scroll Error - No matching row found"))})},u.prototype.moveRow=function(t,e,o){var i=this.rowManager.findRow(t);i?i.moveToRow(e,o):console.warn("Move Error - No matching row found:",t)},u.prototype.getRows=function(t){return!0===t&&(console.warn("passing a boolean to the getRows function is deprecated, you should now pass the string 'active'"),t="active"),this.rowManager.getComponents(t)},u.prototype.getRowPosition=function(t,e){var o=this.rowManager.findRow(t);return o?this.rowManager.getRowPosition(o,e):(console.warn("Position Error - No matching row found:",t),!1)},u.prototype.copyToClipboard=function(t,e,o,i){this.modExists("clipboard",!0)&&this.modules.clipboard.copy(t,e,o,i)},u.prototype.setColumns=function(t){this.columnManager.setColumns(t)},u.prototype.getColumns=function(t){return this.columnManager.getComponents(t)},u.prototype.getColumn=function(t){var e=this.columnManager.findColumn(t);return e?e.getComponent():(console.warn("Find Error - No matching column found:",t),!1)},u.prototype.getColumnDefinitions=function(){return this.columnManager.getDefinitionTree()},u.prototype.getColumnLayout=function(){if(this.modExists("persistence",!0))return this.modules.persistence.parseColumns(this.columnManager.getColumns())},u.prototype.setColumnLayout=function(t){return!!this.modExists("persistence",!0)&&(this.columnManager.setColumns(this.modules.persistence.mergeDefinition(this.options.columns,t)),!0)},u.prototype.showColumn=function(t){var e=this.columnManager.findColumn(t);if(!e)return console.warn("Column Show Error - No matching column found:",t),!1;e.show(),this.options.responsiveLayout&&this.modExists("responsiveLayout",!0)&&this.modules.responsiveLayout.update()},u.prototype.hideColumn=function(t){var e=this.columnManager.findColumn(t);if(!e)return console.warn("Column Hide Error - No matching column found:",t),!1;e.hide(),this.options.responsiveLayout&&this.modExists("responsiveLayout",!0)&&this.modules.responsiveLayout.update()},u.prototype.toggleColumn=function(t){var e=this.columnManager.findColumn(t);if(!e)return console.warn("Column Visibility Toggle Error - No matching column found:",t),!1;e.visible?e.hide():e.show()},u.prototype.addColumn=function(t,e,o){var i=this;return new Promise(function(n,s){var r=i.columnManager.findColumn(o);i.columnManager.addColumn(t,e,r).then(function(t){n(t.getComponent())}).catch(function(t){s(t)})})},u.prototype.deleteColumn=function(t){var e=this;return new Promise(function(o,i){var n=e.columnManager.findColumn(t);n?n.delete().then(function(){o()}).catch(function(t){i(t)}):(console.warn("Column Delete Error - No matching column found:",t),i())})},u.prototype.updateColumnDefinition=function(t,e){var o=this;return new Promise(function(e,i){var n=o.columnManager.findColumn(t);n?n.updateDefinition().then(function(t){e(t)}).catch(function(t){i(t)}):(console.warn("Column Update Error - No matching column found:",t),i())})},u.prototype.moveColumn=function(t,e,o){var i=this.columnManager.findColumn(t),n=this.columnManager.findColumn(e);i?n?this.columnManager.moveColumn(i,n,o):console.warn("Move Error - No matching column found:",n):console.warn("Move Error - No matching column found:",t)},u.prototype.scrollToColumn=function(t,e,o){var i=this;return new Promise(function(n,s){var r=i.columnManager.findColumn(t);r?i.columnManager.scrollToColumn(r,e,o).then(function(){n()}).catch(function(t){s(t)}):(console.warn("Scroll Error - No matching column found:",t),s("Scroll Error - No matching column found"))})},u.prototype.setLocale=function(t){this.modules.localize.setLocale(t)},u.prototype.getLocale=function(){return this.modules.localize.getLocale()},u.prototype.getLang=function(t){return this.modules.localize.getLang(t)},u.prototype.redraw=function(t){this.columnManager.redraw(t),this.rowManager.redraw(t)},u.prototype.setHeight=function(t){"classic"!==this.rowManager.renderMode?(this.options.height=isNaN(t)?t:t+"px",this.element.style.height=this.options.height,this.rowManager.redraw()):console.warn("setHeight function is not available in classic render mode")},u.prototype.setSort=function(t,e){this.modExists("sort",!0)&&(this.modules.sort.setSort(t,e),this.rowManager.sorterRefresh())},u.prototype.getSorters=function(){if(this.modExists("sort",!0))return this.modules.sort.getSort()},u.prototype.clearSort=function(){this.modExists("sort",!0)&&(this.modules.sort.clear(),this.rowManager.sorterRefresh())},u.prototype.setFilter=function(t,e,o){this.modExists("filter",!0)&&(this.modules.filter.setFilter(t,e,o),this.rowManager.filterRefresh())},u.prototype.addFilter=function(t,e,o){this.modExists("filter",!0)&&(this.modules.filter.addFilter(t,e,o),this.rowManager.filterRefresh())},u.prototype.getFilters=function(t){if(this.modExists("filter",!0))return this.modules.filter.getFilters(t)},u.prototype.setHeaderFilterFocus=function(t){if(this.modExists("filter",!0)){var e=this.columnManager.findColumn(t);if(!e)return console.warn("Column Filter Focus Error - No matching column found:",t),!1;this.modules.filter.setHeaderFilterFocus(e)}},u.prototype.setHeaderFilterValue=function(t,e){if(this.modExists("filter",!0)){var o=this.columnManager.findColumn(t);if(!o)return console.warn("Column Filter Error - No matching column found:",t),!1;this.modules.filter.setHeaderFilterValue(o,e)}},u.prototype.getHeaderFilters=function(){if(this.modExists("filter",!0))return this.modules.filter.getHeaderFilters()},u.prototype.removeFilter=function(t,e,o){this.modExists("filter",!0)&&(this.modules.filter.removeFilter(t,e,o),this.rowManager.filterRefresh())},u.prototype.clearFilter=function(t){this.modExists("filter",!0)&&(this.modules.filter.clearFilter(t),this.rowManager.filterRefresh())},u.prototype.clearHeaderFilter=function(){this.modExists("filter",!0)&&(this.modules.filter.clearHeaderFilter(),this.rowManager.filterRefresh())},u.prototype.selectRow=function(t){this.modExists("selectRow",!0)&&(!0===t&&(console.warn("passing a boolean to the selectRowselectRow function is deprecated, you should now pass the string 'active'"),t="active"),this.modules.selectRow.selectRows(t))},u.prototype.deselectRow=function(t){this.modExists("selectRow",!0)&&this.modules.selectRow.deselectRows(t)},u.prototype.toggleSelectRow=function(t){this.modExists("selectRow",!0)&&this.modules.selectRow.toggleRow(t)},u.prototype.getSelectedRows=function(){if(this.modExists("selectRow",!0))return this.modules.selectRow.getSelectedRows()},u.prototype.getSelectedData=function(){if(this.modExists("selectRow",!0))return this.modules.selectRow.getSelectedData()},u.prototype.setMaxPage=function(t){if(!this.options.pagination||!this.modExists("page"))return!1;this.modules.page.setMaxPage(t)},u.prototype.setPage=function(t){return this.options.pagination&&this.modExists("page")?this.modules.page.setPage(t):new Promise(function(t,e){e()})},u.prototype.setPageToRow=function(t){var e=this;return new Promise(function(o,i){e.options.pagination&&e.modExists("page")?(t=e.rowManager.findRow(t),t?e.modules.page.setPageToRow(t).then(function(){o()}).catch(function(){i()}):i()):i()})},u.prototype.setPageSize=function(t){if(!this.options.pagination||!this.modExists("page"))return!1;this.modules.page.setPageSize(t),this.modules.page.setPage(1).then(function(){}).catch(function(){})},u.prototype.getPageSize=function(){if(this.options.pagination&&this.modExists("page",!0))return this.modules.page.getPageSize()},u.prototype.previousPage=function(){if(!this.options.pagination||!this.modExists("page"))return!1;this.modules.page.previousPage()},u.prototype.nextPage=function(){if(!this.options.pagination||!this.modExists("page"))return!1;this.modules.page.nextPage()},u.prototype.getPage=function(){return!(!this.options.pagination||!this.modExists("page"))&&this.modules.page.getPage()},u.prototype.getPageMax=function(){return!(!this.options.pagination||!this.modExists("page"))&&this.modules.page.getPageMax()},u.prototype.setGroupBy=function(t){if(!this.modExists("groupRows",!0))return!1;this.options.groupBy=t,this.modules.groupRows.initialize(),this.rowManager.refreshActiveData("display"),this.options.persistence&&this.modExists("persistence",!0)&&this.modules.persistence.config.group&&this.modules.persistence.save("group")},u.prototype.setGroupStartOpen=function(t){if(!this.modExists("groupRows",!0))return!1;this.options.groupStartOpen=t,this.modules.groupRows.initialize(),this.options.groupBy?(this.rowManager.refreshActiveData("group"),this.options.persistence&&this.modExists("persistence",!0)&&this.modules.persistence.config.group&&this.modules.persistence.save("group")):console.warn("Grouping Update - cant refresh view, no groups have been set")},u.prototype.setGroupHeader=function(t){if(!this.modExists("groupRows",!0))return!1;this.options.groupHeader=t,this.modules.groupRows.initialize(),this.options.groupBy?(this.rowManager.refreshActiveData("group"),this.options.persistence&&this.modExists("persistence",!0)&&this.modules.persistence.config.group&&this.modules.persistence.save("group")):console.warn("Grouping Update - cant refresh view, no groups have been set")},u.prototype.getGroups=function(t){return!!this.modExists("groupRows",!0)&&this.modules.groupRows.getGroups(!0)},u.prototype.getGroupedData=function(){if(this.modExists("groupRows",!0))return this.options.groupBy?this.modules.groupRows.getGroupedData():this.getData()},u.prototype.getCalcResults=function(){return!!this.modExists("columnCalcs",!0)&&this.modules.columnCalcs.getResults()},u.prototype.navigatePrev=function(){var t=!1;return!(!this.modExists("edit",!0)||!(t=this.modules.edit.currentCell))&&t.nav().prev()},u.prototype.navigateNext=function(){var t=!1;return!(!this.modExists("edit",!0)||!(t=this.modules.edit.currentCell))&&t.nav().next()},u.prototype.navigateLeft=function(){var t=!1;return!(!this.modExists("edit",!0)||!(t=this.modules.edit.currentCell))&&(e.preventDefault(),t.nav().left())},u.prototype.navigateRight=function(){var t=!1;return!(!this.modExists("edit",!0)||!(t=this.modules.edit.currentCell))&&(e.preventDefault(),t.nav().right())},u.prototype.navigateUp=function(){var t=!1;return!(!this.modExists("edit",!0)||!(t=this.modules.edit.currentCell))&&(e.preventDefault(),t.nav().up())},u.prototype.navigateDown=function(){var t=!1;return!(!this.modExists("edit",!0)||!(t=this.modules.edit.currentCell))&&(e.preventDefault(),t.nav().down())},u.prototype.undo=function(){return!(!this.options.history||!this.modExists("history",!0))&&this.modules.history.undo()},u.prototype.redo=function(){return!(!this.options.history||!this.modExists("history",!0))&&this.modules.history.redo()},u.prototype.getHistoryUndoSize=function(){return!(!this.options.history||!this.modExists("history",!0))&&this.modules.history.getHistoryUndoSize()},u.prototype.getHistoryRedoSize=function(){return!(!this.options.history||!this.modExists("history",!0))&&this.modules.history.getHistoryRedoSize()},u.prototype.download=function(t,e,o,i){this.modExists("download",!0)&&this.modules.download.download(t,e,o,i)},u.prototype.downloadToTab=function(t,e,o,i){this.modExists("download",!0)&&this.modules.download.download(t,e,o,i,!0)},u.prototype.tableComms=function(t,e,o,i){this.modules.comms.receive(t,e,o,i)},u.prototype.moduleBindings={},u.prototype.extendModule=function(t,e,o){if(u.prototype.moduleBindings[t]){var i=u.prototype.moduleBindings[t].prototype[e];if(i)if("object"==(void 0===o?"undefined":_typeof(o)))for(var n in o)i[n]=o[n];else console.warn("Module Error - Invalid value type, it must be an object");else console.warn("Module Error - property does not exist:",e)}else console.warn("Module Error - module does not exist:",t)},u.prototype.registerModule=function(t,e){u.prototype.moduleBindings[t]=e},u.prototype.bindModules=function(){this.modules={};for(var t in u.prototype.moduleBindings)this.modules[t]=new u.prototype.moduleBindings[t](this)},u.prototype.modExists=function(t,e){return!!this.modules[t]||(e&&console.error("Tabulator Module Not Installed: "+t),!1)},u.prototype.helpers={elVisible:function(t){return!(t.offsetWidth<=0&&t.offsetHeight<=0)},elOffset:function(t){var e=t.getBoundingClientRect();return{top:e.top+window.pageYOffset-document.documentElement.clientTop,left:e.left+window.pageXOffset-document.documentElement.clientLeft}},deepClone:function(t){var e=Array.isArray(t)?[]:{};for(var o in t)null!=t[o]&&"object"===_typeof(t[o])?t[o]instanceof Date?e[o]=new Date(t[o]):e[o]=this.deepClone(t[o]):e[o]=t[o];return e}},u.prototype.comms={tables:[],register:function(t){u.prototype.comms.tables.push(t)},deregister:function(t){var e=u.prototype.comms.tables.indexOf(t);e>-1&&u.prototype.comms.tables.splice(e,1)},lookupTable:function(t,e){var o,i,n=[];if("string"==typeof t){if(o=document.querySelectorAll(t),o.length)for(var s=0;s<o.length;s++)(i=u.prototype.comms.matchElement(o[s]))&&n.push(i)}else"undefined"!=typeof HTMLElement&&t instanceof HTMLElement||t instanceof u?(i=u.prototype.comms.matchElement(t))&&n.push(i):Array.isArray(t)?t.forEach(function(t){n=n.concat(u.prototype.comms.lookupTable(t))}):e||console.warn("Table Connection Error - Invalid Selector",t);return n},matchElement:function(t){return u.prototype.comms.tables.find(function(e){return t instanceof u?e===t:e.element===t})}},u.prototype.findTable=function(t){var e=u.prototype.comms.lookupTable(t,!0);return!(Array.isArray(e)&&!e.length)&&e};var d=function(t){this.table=t,this.mode=null};d.prototype.initialize=function(t){this.modes[t]?this.mode=t:(console.warn("Layout Error - invalid mode set, defaulting to 'fitData' : "+t),this.mode="fitData"),this.table.element.setAttribute("tabulator-layout",this.mode)},d.prototype.getMode=function(){return this.mode},d.prototype.layout=function(){this.modes[this.mode].call(this,this.table.columnManager.columnsByIndex)},d.prototype.modes={fitData:function(t){t.forEach(function(t){t.reinitializeWidth()}),this.table.options.responsiveLayout&&this.table.modExists("responsiveLayout",!0)&&this.table.modules.responsiveLayout.update()},fitDataFill:function(t){t.forEach(function(t){t.reinitializeWidth()}),this.table.options.responsiveLayout&&this.table.modExists("responsiveLayout",!0)&&this.table.modules.responsiveLayout.update()},fitDataStretch:function(t){var e=this,o=0,i=this.table.rowManager.element.clientWidth,n=0,s=!1;t.forEach(function(t,i){t.widthFixed||t.reinitializeWidth(),(e.table.options.responsiveLayout?t.modules.responsive.visible:t.visible)&&(s=t),t.visible&&(o+=t.getWidth())}),s?(n=i-o+s.getWidth(),this.table.options.responsiveLayout&&this.table.modExists("responsiveLayout",!0)&&(s.setWidth(0),this.table.modules.responsiveLayout.update()),n>0?s.setWidth(n):s.reinitializeWidth()):this.table.options.responsiveLayout&&this.table.modExists("responsiveLayout",!0)&&this.table.modules.responsiveLayout.update()},fitColumns:function(t){function e(t){return"string"==typeof t?t.indexOf("%")>-1?n/100*parseInt(t):parseInt(t):t}function o(t,i,n,s){function r(t){return n*(t.column.definition.widthGrow||1)}function a(t){return e(t.width)-n*(t.column.definition.widthShrink||0)}var l=[],c=0,u=0,d=0,h=0,p=0,m=[];return t.forEach(function(t,e){var o=s?a(t):r(t);t.column.minWidth>=o?l.push(t):(m.push(t),p+=s?t.column.definition.widthShrink||1:t.column.definition.widthGrow||1)}),l.length?(l.forEach(function(t){c+=s?t.width-t.column.minWidth:t.column.minWidth,t.width=t.column.minWidth}),u=i-c,d=p?Math.floor(u/p):u,h=u-d*p,h+=o(m,u,d,s)):(h=p?i-Math.floor(i/p)*p:i,m.forEach(function(t){t.width=s?a(t):r(t)})),h}var i=this,n=i.table.element.clientWidth,s=0,r=0,a=0,l=0,c=[],u=[],d=0,h=0,p=0;this.table.options.responsiveLayout&&this.table.modExists("responsiveLayout",!0)&&this.table.modules.responsiveLayout.update(),this.table.rowManager.element.scrollHeight>this.table.rowManager.element.clientHeight&&(n-=this.table.rowManager.element.offsetWidth-this.table.rowManager.element.clientWidth),t.forEach(function(t){var o,i,n;t.visible&&(o=t.definition.width,i=parseInt(t.minWidth),o?(n=e(o),s+=n>i?n:i,t.definition.widthShrink&&(u.push({column:t,width:n>i?n:i}),d+=t.definition.widthShrink)):(c.push({column:t,width:0}),a+=t.definition.widthGrow||1))}),r=n-s,l=Math.floor(r/a);var p=o(c,r,l,!1);c.length&&p>0&&(c[c.length-1].width+=+p),c.forEach(function(t){r-=t.width}),h=Math.abs(p)+r,h>0&&d&&(p=o(u,h,Math.floor(h/d),!0)),u.length&&(u[u.length-1].width-=p),c.forEach(function(t){t.column.setWidth(t.width)}),u.forEach(function(t){t.column.setWidth(t.width)})}},u.prototype.registerModule("layout",d);var h=function(t){this.table=t,this.locale="default",this.lang=!1,this.bindings={}};h.prototype.setHeaderFilterPlaceholder=function(t){this.langs.default.headerFilters.default=t},h.prototype.setHeaderFilterColumnPlaceholder=function(t,e){this.langs.default.headerFilters.columns[t]=e,this.lang&&!this.lang.headerFilters.columns[t]&&(this.lang.headerFilters.columns[t]=e)},h.prototype.installLang=function(t,e){this.langs[t]?this._setLangProp(this.langs[t],e):this.langs[t]=e},h.prototype._setLangProp=function(t,e){for(var o in e)t[o]&&"object"==_typeof(t[o])?this._setLangProp(t[o],e[o]):t[o]=e[o]},h.prototype.setLocale=function(t){function e(t,o){for(var i in t)"object"==_typeof(t[i])?(o[i]||(o[i]={}),e(t[i],o[i])):o[i]=t[i]}var o=this;if(t=t||"default",!0===t&&navigator.language&&(t=navigator.language.toLowerCase()),t&&!o.langs[t]){var i=t.split("-")[0];o.langs[i]?(console.warn("Localization Error - Exact matching locale not found, using closest match: ",t,i),t=i):(console.warn("Localization Error - Matching locale not found, using default: ",t),t="default")}o.locale=t,o.lang=u.prototype.helpers.deepClone(o.langs.default||{}),"default"!=t&&e(o.langs[t],o.lang),o.table.options.localized.call(o.table,o.locale,o.lang),o._executeBindings()},h.prototype.getLocale=function(t){return self.locale},h.prototype.getLang=function(t){return t?this.langs[t]:this.lang},h.prototype.getText=function(t,e){var t=e?t+"|"+e:t,o=t.split("|");return this._getLangElement(o,this.locale)||""},h.prototype._getLangElement=function(t,e){var o=this,i=o.lang;return t.forEach(function(t){var e;i&&(e=i[t],i=void 0!==e&&e)}),i},h.prototype.bind=function(t,e){this.bindings[t]||(this.bindings[t]=[]),this.bindings[t].push(e),e(this.getText(t),this.lang)},h.prototype._executeBindings=function(){var t=this;for(var e in t.bindings)!function(e){t.bindings[e].forEach(function(o){o(t.getText(e),t.lang)})}(e)},h.prototype.langs={default:{groups:{item:"item",items:"items"},columns:{},ajax:{loading:"Loading",error:"Error"},pagination:{page_size:"Page Size",first:"First",first_title:"First Page",last:"Last",last_title:"Last Page",prev:"Prev",prev_title:"Prev Page",next:"Next",next_title:"Next Page"},headerFilters:{default:"filter column...",columns:{}}}},u.prototype.registerModule("localize",h);var p=function(t){this.table=t};p.prototype.getConnections=function(t){var e,o=this,i=[];return e=u.prototype.comms.lookupTable(t),e.forEach(function(t){o.table!==t&&i.push(t)}),i},p.prototype.send=function(t,e,o,i){var n=this,s=this.getConnections(t);s.forEach(function(t){t.tableComms(n.table.element,e,o,i)}),!s.length&&t&&console.warn("Table Connection Error - No tables matching selector found",t)},p.prototype.receive=function(t,e,o,i){if(this.table.modExists(e))return this.table.modules[e].commsReceived(t,o,i);console.warn("Inter-table Comms Error - no such module:",e)},u.prototype.registerModule("comms",p);var m=function(t){this.table=t,this.allowedTypes=["","data","download","clipboard"]};m.prototype.initializeColumn=function(t){var e=this,o=!1,i={};this.allowedTypes.forEach(function(n){var s,r="accessor"+(n.charAt(0).toUpperCase()+n.slice(1));t.definition[r]&&(s=e.lookupAccessor(t.definition[r]))&&(o=!0,i[r]={accessor:s,params:t.definition[r+"Params"]||{}})}),o&&(t.modules.accessor=i)},m.prototype.lookupAccessor=function(t){var e=!1;switch(void 0===t?"undefined":_typeof(t)){case"string":this.accessors[t]?e=this.accessors[t]:console.warn("Accessor Error - No such accessor found, ignoring: ",t);break;case"function":e=t}return e},m.prototype.transformRow=function(t,e){var o=this,i="accessor"+(e.charAt(0).toUpperCase()+e.slice(1)),n=u.prototype.helpers.deepClone(t||{});return o.table.columnManager.traverse(function(t){var o,s,r,a;t.modules.accessor&&(s=t.modules.accessor[i]||t.modules.accessor.accessor||!1)&&"undefined"!=(o=t.getFieldValue(n))&&(a=t.getComponent(),r="function"==typeof s.params?s.params(o,n,e,a):s.params,t.setFieldValue(n,s.accessor(o,n,e,r,a)))}),n},m.prototype.accessors={},u.prototype.registerModule("accessor",m);var f=function(t){this.table=t,this.config=!1,this.url="",this.urlGenerator=!1,this.params=!1,this.loaderElement=this.createLoaderElement(),this.msgElement=this.createMsgElement(),this.loadingElement=!1,this.errorElement=!1,this.loaderPromise=!1,this.progressiveLoad=!1,this.loading=!1,this.requestOrder=0};f.prototype.initialize=function(){var t;this.loaderElement.appendChild(this.msgElement),this.table.options.ajaxLoaderLoading&&("string"==typeof this.table.options.ajaxLoaderLoading?(t=document.createElement("template"),t.innerHTML=this.table.options.ajaxLoaderLoading.trim(),this.loadingElement=t.content.firstChild):this.loadingElement=this.table.options.ajaxLoaderLoading),this.loaderPromise=this.table.options.ajaxRequestFunc||this.defaultLoaderPromise,this.urlGenerator=this.table.options.ajaxURLGenerator||this.defaultURLGenerator,this.table.options.ajaxLoaderError&&("string"==typeof this.table.options.ajaxLoaderError?(t=document.createElement("template"),t.innerHTML=this.table.options.ajaxLoaderError.trim(),this.errorElement=t.content.firstChild):this.errorElement=this.table.options.ajaxLoaderError),this.table.options.ajaxParams&&this.setParams(this.table.options.ajaxParams),this.table.options.ajaxConfig&&this.setConfig(this.table.options.ajaxConfig),this.table.options.ajaxURL&&this.setUrl(this.table.options.ajaxURL),this.table.options.ajaxProgressiveLoad&&(this.table.options.pagination?(this.progressiveLoad=!1,console.error("Progressive Load Error - Pagination and progressive load cannot be used at the same time")):this.table.modExists("page")?(this.progressiveLoad=this.table.options.ajaxProgressiveLoad,this.table.modules.page.initializeProgressive(this.progressiveLoad)):console.error("Pagination plugin is required for progressive ajax loading"))},f.prototype.createLoaderElement=function(){var t=document.createElement("div");return t.classList.add("tabulator-loader"),t},f.prototype.createMsgElement=function(){var t=document.createElement("div");return t.classList.add("tabulator-loader-msg"),t.setAttribute("role","alert"),t},f.prototype.setParams=function(t,e){if(e){this.params=this.params||{};for(var o in t)this.params[o]=t[o]}else this.params=t},f.prototype.getParams=function(){return this.params||{}},f.prototype.setConfig=function(t){if(this._loadDefaultConfig(),"string"==typeof t)this.config.method=t;else for(var e in t)this.config[e]=t[e]},f.prototype._loadDefaultConfig=function(t){var e=this;if(!e.config||t){e.config={};for(var o in e.defaultConfig)e.config[o]=e.defaultConfig[o]}},f.prototype.setUrl=function(t){this.url=t},f.prototype.getUrl=function(){return this.url},f.prototype.loadData=function(t){return this.progressiveLoad?this._loadDataProgressive():this._loadDataStandard(t)},f.prototype.nextPage=function(t){var e;this.loading||(e=this.table.options.ajaxProgressiveLoadScrollMargin||2*this.table.rowManager.getElement().clientHeight,t<e&&this.table.modules.page.nextPage().then(function(){}).catch(function(){}))},f.prototype.blockActiveRequest=function(){this.requestOrder++},f.prototype._loadDataProgressive=function(){
return this.table.rowManager.setData([]),this.table.modules.page.setPage(1)},f.prototype._loadDataStandard=function(t){var e=this;return new Promise(function(o,i){e.sendRequest(t).then(function(n){e.table.rowManager.setData(n,t).then(function(){o()}).catch(function(t){i(t)})}).catch(function(t){i(t)})})},f.prototype.generateParamsList=function(t,e){var o=this,i=[];if(e=e||"",Array.isArray(t))t.forEach(function(t,n){i=i.concat(o.generateParamsList(t,e?e+"["+n+"]":n))});else if("object"===(void 0===t?"undefined":_typeof(t)))for(var n in t)i=i.concat(o.generateParamsList(t[n],e?e+"["+n+"]":n));else i.push({key:e,value:t});return i},f.prototype.serializeParams=function(t){var e=this.generateParamsList(t),o=[];return e.forEach(function(t){o.push(encodeURIComponent(t.key)+"="+encodeURIComponent(t.value))}),o.join("&")},f.prototype.sendRequest=function(t){var e,o=this,i=this,n=i.url;return i.requestOrder++,e=i.requestOrder,i._loadDefaultConfig(),new Promise(function(s,r){!1!==i.table.options.ajaxRequesting.call(o.table,i.url,i.params)?(i.loading=!0,t||i.showLoader(),o.loaderPromise(n,i.config,i.params).then(function(t){e===i.requestOrder?(i.table.options.ajaxResponse&&(t=i.table.options.ajaxResponse.call(i.table,i.url,i.params,t)),s(t)):console.warn("Ajax Response Blocked - An active ajax request was blocked by an attempt to change table data while the request was being made"),i.hideLoader(),i.loading=!1}).catch(function(t){console.error("Ajax Load Error: ",t),i.table.options.ajaxError.call(i.table,t),i.showError(),setTimeout(function(){i.hideLoader()},3e3),i.loading=!1,r()})):r()})},f.prototype.showLoader=function(){if("function"==typeof this.table.options.ajaxLoader?this.table.options.ajaxLoader():this.table.options.ajaxLoader){for(this.hideLoader();this.msgElement.firstChild;)this.msgElement.removeChild(this.msgElement.firstChild);this.msgElement.classList.remove("tabulator-error"),this.msgElement.classList.add("tabulator-loading"),this.loadingElement?this.msgElement.appendChild(this.loadingElement):this.msgElement.innerHTML=this.table.modules.localize.getText("ajax|loading"),this.table.element.appendChild(this.loaderElement)}},f.prototype.showError=function(){for(this.hideLoader();this.msgElement.firstChild;)this.msgElement.removeChild(this.msgElement.firstChild);this.msgElement.classList.remove("tabulator-loading"),this.msgElement.classList.add("tabulator-error"),this.errorElement?this.msgElement.appendChild(this.errorElement):this.msgElement.innerHTML=this.table.modules.localize.getText("ajax|error"),this.table.element.appendChild(this.loaderElement)},f.prototype.hideLoader=function(){this.loaderElement.parentNode&&this.loaderElement.parentNode.removeChild(this.loaderElement)},f.prototype.defaultConfig={method:"GET"},f.prototype.defaultURLGenerator=function(t,e,o){return t&&o&&Object.keys(o).length&&(e.method&&"get"!=e.method.toLowerCase()||(e.method="get",t+=(t.includes("?")?"&":"?")+this.serializeParams(o))),t},f.prototype.defaultLoaderPromise=function(t,e,o){var i,n=this;return new Promise(function(s,r){if(t=n.urlGenerator(t,e,o),"GET"!=e.method.toUpperCase())if(i="object"===_typeof(n.table.options.ajaxContentType)?n.table.options.ajaxContentType:n.contentTypeFormatters[n.table.options.ajaxContentType]){for(var a in i.headers)e.headers||(e.headers={}),void 0===e.headers[a]&&(e.headers[a]=i.headers[a]);e.body=i.body.call(n,t,e,o)}else console.warn("Ajax Error - Invalid ajaxContentType value:",n.table.options.ajaxContentType);t?(void 0===e.headers&&(e.headers={}),void 0===e.headers.Accept&&(e.headers.Accept="application/json"),void 0===e.headers["X-Requested-With"]&&(e.headers["X-Requested-With"]="XMLHttpRequest"),void 0===e.mode&&(e.mode="cors"),"cors"==e.mode?(void 0===e.headers["Access-Control-Allow-Origin"]&&(e.headers["Access-Control-Allow-Origin"]=window.location.origin),void 0===e.credentials&&(e.credentials="same-origin")):void 0===e.credentials&&(e.credentials="include"),fetch(t,e).then(function(t){t.ok?t.json().then(function(t){s(t)}).catch(function(t){r(t),console.warn("Ajax Load Error - Invalid JSON returned",t)}):(console.error("Ajax Load Error - Connection Error: "+t.status,t.statusText),r(t))}).catch(function(t){console.error("Ajax Load Error - Connection Error: ",t),r(t)})):(console.warn("Ajax Load Error - No URL Set"),s([]))})},f.prototype.contentTypeFormatters={json:{headers:{"Content-Type":"application/json"},body:function(t,e,o){return JSON.stringify(o)}},form:{headers:{},body:function(t,e,o){var i=this.generateParamsList(o),n=new FormData;return i.forEach(function(t){n.append(t.key,t.value)}),n}}},u.prototype.registerModule("ajax",f);var g=function(t){this.table=t,this.topCalcs=[],this.botCalcs=[],this.genColumn=!1,this.topElement=this.createElement(),this.botElement=this.createElement(),this.topRow=!1,this.botRow=!1,this.topInitialized=!1,this.botInitialized=!1,this.initialize()};g.prototype.createElement=function(){var t=document.createElement("div");return t.classList.add("tabulator-calcs-holder"),t},g.prototype.initialize=function(){this.genColumn=new i({field:"value"},this)},g.prototype.registerColumnField=function(){},g.prototype.initializeColumn=function(t){var e=t.definition,o={topCalcParams:e.topCalcParams||{},botCalcParams:e.bottomCalcParams||{}};if(e.topCalc){switch(_typeof(e.topCalc)){case"string":this.calculations[e.topCalc]?o.topCalc=this.calculations[e.topCalc]:console.warn("Column Calc Error - No such calculation found, ignoring: ",e.topCalc);break;case"function":o.topCalc=e.topCalc}o.topCalc&&(t.modules.columnCalcs=o,this.topCalcs.push(t),"group"!=this.table.options.columnCalcs&&this.initializeTopRow())}if(e.bottomCalc){switch(_typeof(e.bottomCalc)){case"string":this.calculations[e.bottomCalc]?o.botCalc=this.calculations[e.bottomCalc]:console.warn("Column Calc Error - No such calculation found, ignoring: ",e.bottomCalc);break;case"function":o.botCalc=e.bottomCalc}o.botCalc&&(t.modules.columnCalcs=o,this.botCalcs.push(t),"group"!=this.table.options.columnCalcs&&this.initializeBottomRow())}},g.prototype.removeCalcs=function(){var t=!1;this.topInitialized&&(this.topInitialized=!1,this.topElement.parentNode.removeChild(this.topElement),t=!0),this.botInitialized&&(this.botInitialized=!1,this.table.footerManager.remove(this.botElement),t=!0),t&&this.table.rowManager.adjustTableSize()},g.prototype.initializeTopRow=function(){this.topInitialized||(this.table.columnManager.getElement().insertBefore(this.topElement,this.table.columnManager.headersElement.nextSibling),this.topInitialized=!0)},g.prototype.initializeBottomRow=function(){this.botInitialized||(this.table.footerManager.prepend(this.botElement),this.botInitialized=!0)},g.prototype.scrollHorizontal=function(t){this.table.columnManager.getElement().scrollWidth,this.table.element.clientWidth;this.botInitialized&&(this.botRow.getElement().style.marginLeft=-t+"px")},g.prototype.recalc=function(t){var e;if(this.topInitialized||this.botInitialized){if(this.rowsToData(t),this.topInitialized){for(this.topRow&&this.topRow.deleteCells(),e=this.generateRow("top",this.rowsToData(t)),this.topRow=e;this.topElement.firstChild;)this.topElement.removeChild(this.topElement.firstChild);this.topElement.appendChild(e.getElement()),e.initialize(!0)}if(this.botInitialized){for(this.botRow&&this.botRow.deleteCells(),e=this.generateRow("bottom",this.rowsToData(t)),this.botRow=e;this.botElement.firstChild;)this.botElement.removeChild(this.botElement.firstChild);this.botElement.appendChild(e.getElement()),e.initialize(!0)}this.table.rowManager.adjustTableSize(),this.table.modExists("frozenColumns")&&this.table.modules.frozenColumns.layout()}},g.prototype.recalcRowGroup=function(t){this.recalcGroup(this.table.modules.groupRows.getRowGroup(t))},g.prototype.recalcGroup=function(t){var e,o;t&&t.calcs&&(t.calcs.bottom&&(e=this.rowsToData(t.rows),o=this.generateRowData("bottom",e),t.calcs.bottom.updateData(o),t.calcs.bottom.reinitialize()),t.calcs.top&&(e=this.rowsToData(t.rows),o=this.generateRowData("top",e),t.calcs.top.updateData(o),t.calcs.top.reinitialize()))},g.prototype.generateTopRow=function(t){return this.generateRow("top",this.rowsToData(t))},g.prototype.generateBottomRow=function(t){return this.generateRow("bottom",this.rowsToData(t))},g.prototype.rowsToData=function(t){var e=[];return t.forEach(function(t){e.push(t.getData())}),e},g.prototype.generateRow=function(t,e){var o,i=this,n=this.generateRowData(t,e);return i.table.modExists("mutator")&&i.table.modules.mutator.disable(),o=new r(n,this,"calc"),i.table.modExists("mutator")&&i.table.modules.mutator.enable(),o.getElement().classList.add("tabulator-calcs","tabulator-calcs-"+t),o.generateCells=function(){var e=[];i.table.columnManager.columnsByIndex.forEach(function(n){i.genColumn.setField(n.getField()),i.genColumn.hozAlign=n.hozAlign,n.definition[t+"CalcFormatter"]&&i.table.modExists("format")?i.genColumn.modules.format={formatter:i.table.modules.format.getFormatter(n.definition[t+"CalcFormatter"]),params:n.definition[t+"CalcFormatterParams"]}:i.genColumn.modules.format={formatter:i.table.modules.format.getFormatter("plaintext"),params:{}},i.genColumn.definition.cssClass=n.definition.cssClass;var s=new l(i.genColumn,o);s.column=n,s.setWidth(),n.cells.push(s),e.push(s),n.visible||s.hide()}),this.cells=e},o},g.prototype.generateRowData=function(t,e){var o,i,n={},s="top"==t?this.topCalcs:this.botCalcs,r="top"==t?"topCalc":"botCalc";return s.forEach(function(t){var s=[];t.modules.columnCalcs&&t.modules.columnCalcs[r]&&(e.forEach(function(e){s.push(t.getFieldValue(e))}),i=r+"Params",o="function"==typeof t.modules.columnCalcs[i]?t.modules.columnCalcs[i](s,e):t.modules.columnCalcs[i],t.setFieldValue(n,t.modules.columnCalcs[r](s,e,o)))}),n},g.prototype.hasTopCalcs=function(){return!!this.topCalcs.length},g.prototype.hasBottomCalcs=function(){return!!this.botCalcs.length},g.prototype.redraw=function(){this.topRow&&this.topRow.normalizeHeight(!0),this.botRow&&this.botRow.normalizeHeight(!0)},g.prototype.getResults=function(){var t,e=this,o={};return this.table.options.groupBy&&this.table.modExists("groupRows")?(t=this.table.modules.groupRows.getGroups(!0),t.forEach(function(t){o[t.getKey()]=e.getGroupResults(t)})):o={top:this.topRow?this.topRow.getData():{},bottom:this.botRow?this.botRow.getData():{}},o},g.prototype.getGroupResults=function(t){var e=this,o=t._getSelf(),i=t.getSubGroups(),n={};return i.forEach(function(t){n[t.getKey()]=e.getGroupResults(t)}),{top:o.calcs.top?o.calcs.top.getData():{},bottom:o.calcs.bottom?o.calcs.bottom.getData():{},groups:n}},g.prototype.calculations={avg:function(t,e,o){var i=0,n=void 0!==o.precision?o.precision:2;return t.length&&(i=t.reduce(function(t,e){return e=Number(e),t+e}),i/=t.length,i=!1!==n?i.toFixed(n):i),parseFloat(i).toString()},max:function(t,e,o){var i=null,n=void 0!==o.precision&&o.precision;return t.forEach(function(t){((t=Number(t))>i||null===i)&&(i=t)}),null!==i?!1!==n?i.toFixed(n):i:""},min:function(t,e,o){var i=null,n=void 0!==o.precision&&o.precision;return t.forEach(function(t){((t=Number(t))<i||null===i)&&(i=t)}),null!==i?!1!==n?i.toFixed(n):i:""},sum:function(t,e,o){var i=0,n=void 0!==o.precision&&o.precision;return t.length&&t.forEach(function(t){t=Number(t),i+=isNaN(t)?0:Number(t)}),!1!==n?i.toFixed(n):i},concat:function(t,e,o){var i=0;return t.length&&(i=t.reduce(function(t,e){return String(t)+String(e)})),i},count:function(t,e,o){var i=0;return t.length&&t.forEach(function(t){t&&i++}),i}},u.prototype.registerModule("columnCalcs",g);var b=function(t){this.table=t,this.mode=!0,this.copySelector=!1,this.copySelectorParams={},this.copyFormatter=!1,this.copyFormatterParams={},this.pasteParser=function(){},this.pasteAction=function(){},this.htmlElement=!1,this.config={},this.blocked=!0};b.prototype.initialize=function(){var t=this;this.mode=this.table.options.clipboard,!0!==this.mode&&"copy"!==this.mode||this.table.element.addEventListener("copy",function(e){var o;t.processConfig(),t.blocked||(e.preventDefault(),o=t.generateContent(),window.clipboardData&&window.clipboardData.setData?window.clipboardData.setData("Text",o):e.clipboardData&&e.clipboardData.setData?(e.clipboardData.setData("text/plain",o),t.htmlElement&&e.clipboardData.setData("text/html",t.htmlElement.outerHTML)):e.originalEvent&&e.originalEvent.clipboardData.setData&&(e.originalEvent.clipboardData.setData("text/plain",o),t.htmlElement&&e.originalEvent.clipboardData.setData("text/html",t.htmlElement.outerHTML)),t.table.options.clipboardCopied.call(this.table,o),t.reset())}),!0!==this.mode&&"paste"!==this.mode||this.table.element.addEventListener("paste",function(e){t.paste(e)}),this.setPasteParser(this.table.options.clipboardPasteParser),this.setPasteAction(this.table.options.clipboardPasteAction)},b.prototype.processConfig=function(){var t={columnHeaders:"groups",rowGroups:!0,columnCalcs:!0};if(void 0!==this.table.options.clipboardCopyHeader&&(t.columnHeaders=this.table.options.clipboardCopyHeader,console.warn("DEPRECATION WARNING - clipboardCopyHeader option has been deprecated, please use the columnHeaders property on the clipboardCopyConfig option")),this.table.options.clipboardCopyConfig)for(var e in this.table.options.clipboardCopyConfig)t[e]=this.table.options.clipboardCopyConfig[e];t.rowGroups&&this.table.options.groupBy&&this.table.modExists("groupRows")&&(this.config.rowGroups=!0),t.columnHeaders?"groups"!==t.columnHeaders&&!0!==t||this.table.columnManager.columns.length==this.table.columnManager.columnsByIndex.length?this.config.columnHeaders="columns":this.config.columnHeaders="groups":this.config.columnHeaders=!1,t.columnCalcs&&this.table.modExists("columnCalcs")&&(this.config.columnCalcs=!0)},b.prototype.reset=function(){this.blocked=!1,this.originalSelectionText=""},b.prototype.setPasteAction=function(t){switch(void 0===t?"undefined":_typeof(t)){case"string":this.pasteAction=this.pasteActions[t],this.pasteAction||console.warn("Clipboard Error - No such paste action found:",t);break;case"function":this.pasteAction=t}},b.prototype.setPasteParser=function(t){switch(void 0===t?"undefined":_typeof(t)){case"string":this.pasteParser=this.pasteParsers[t],this.pasteParser||console.warn("Clipboard Error - No such paste parser found:",t);break;case"function":this.pasteParser=t}},b.prototype.paste=function(t){var e,o,i;this.checkPaseOrigin(t)&&(e=this.getPasteData(t),o=this.pasteParser.call(this,e),o?(t.preventDefault(),this.table.modExists("mutator")&&(o=this.mutateData(o)),i=this.pasteAction.call(this,o),this.table.options.clipboardPasted.call(this.table,e,o,i)):this.table.options.clipboardPasteError.call(this.table,e))},b.prototype.mutateData=function(t){var e=this,o=[];return Array.isArray(t)?t.forEach(function(t){o.push(e.table.modules.mutator.transformRow(t,"clipboard"))}):o=t,o},b.prototype.checkPaseOrigin=function(t){var e=!0;return("DIV"!=t.target.tagName||this.table.modules.edit.currentCell)&&(e=!1),e},b.prototype.getPasteData=function(t){var e;return window.clipboardData&&window.clipboardData.getData?e=window.clipboardData.getData("Text"):t.clipboardData&&t.clipboardData.getData?e=t.clipboardData.getData("text/plain"):t.originalEvent&&t.originalEvent.clipboardData.getData&&(e=t.originalEvent.clipboardData.getData("text/plain")),e},b.prototype.copy=function(t,e,o,i,n){var s,r,a;this.blocked=!1,!0!==this.mode&&"copy"!==this.mode||(void 0!==window.getSelection&&void 0!==document.createRange?(s=document.createRange(),s.selectNodeContents(this.table.element),r=window.getSelection(),r.toString()&&n&&(t="userSelection",o="raw",e=r.toString()),r.removeAllRanges(),r.addRange(s)):void 0!==document.selection&&void 0!==document.body.createTextRange&&(a=document.body.createTextRange(),a.moveToElementText(this.table.element),a.select()),this.setSelector(t),this.copySelectorParams=void 0!==e&&null!=e?e:this.config.columnHeaders,this.setFormatter(o),this.copyFormatterParams=void 0!==i&&null!=i?i:{},document.execCommand("copy"),r&&r.removeAllRanges())},b.prototype.setSelector=function(t){switch(t=t||this.table.options.clipboardCopySelector,void 0===t?"undefined":_typeof(t)){case"string":this.copySelectors[t]?this.copySelector=this.copySelectors[t]:console.warn("Clipboard Error - No such selector found:",t);break;case"function":this.copySelector=t}},b.prototype.setFormatter=function(t){switch(t=t||this.table.options.clipboardCopyFormatter,void 0===t?"undefined":_typeof(t)){case"string":this.copyFormatters[t]?this.copyFormatter=this.copyFormatters[t]:console.warn("Clipboard Error - No such formatter found:",t);break;case"function":this.copyFormatter=t}},b.prototype.generateContent=function(){var t;return this.htmlElement=!1,t=this.copySelector.call(this,this.config,this.copySelectorParams),this.copyFormatter.call(this,t,this.config,this.copyFormatterParams)},b.prototype.generateSimpleHeaders=function(t){var e=[];return t.forEach(function(t){e.push(t.definition.title)}),e},b.prototype.generateColumnGroupHeaders=function(t){var e=this,o=[];return this.table.columnManager.columns.forEach(function(t){var i=e.processColumnGroup(t);i&&o.push(i)}),o},b.prototype.processColumnGroup=function(t){var e=this,o=t.columns,i={type:"group",title:t.definition.title,column:t};if(o.length){if(i.subGroups=[],i.width=0,o.forEach(function(t){var o=e.processColumnGroup(t);o&&(i.width+=o.width,i.subGroups.push(o))}),!i.width)return!1}else{if(!t.field||!(t.definition.clipboard||t.visible&&!1!==t.definition.clipboard))return!1;i.width=1}return i},b.prototype.groupHeadersToRows=function(t){function e(t,n){void 0===i[n]&&(i[n]=[]),i[n].push(t.title),t.subGroups?t.subGroups.forEach(function(t){e(t,n+1)}):o()}function o(){var t=0;i.forEach(function(e){var o=e.length;o>t&&(t=o)}),i.forEach(function(e){var o=e.length;if(o<t)for(var i=o;i<t;i++)e.push("")})}var i=[];return t.forEach(function(t){e(t,0)}),i},b.prototype.rowsToData=function(t,e,o,i){var n=[];return t.forEach(function(t){var o=[],i=t instanceof s?t.getData("clipboard"):t;e.forEach(function(t){var e=t.getFieldValue(i);switch(void 0===e?"undefined":_typeof(e)){case"object":e=JSON.stringify(e);break;case"undefined":case"null":e="";break;default:e=e}o.push(e)}),n.push(o)}),n},b.prototype.buildComplexRows=function(t){var e=this,o=[];return this.table.modules.groupRows.getGroups().forEach(function(t){o.push(e.processGroupData(t))}),o},b.prototype.processGroupData=function(t){var e=this,o=t.getSubGroups(),i={type:"group",key:t.key};return o.length?(i.subGroups=[],o.forEach(function(t){i.subGroups.push(e.processGroupData(t))})):i.rows=t.getRows(!0),i},b.prototype.getCalcRow=function(t,e,o,i){var n=t[o];return n&&(i&&(n=n[i]),Object.keys(n).length)?this.rowsToData([n],e):[]},b.prototype.buildOutput=function(t,e,o){var i,n=this,s=[],r=[],a=[];return this.table.columnManager.columnsByIndex.forEach(function(t){(t.definition.clipboard||t.visible&&!1!==t.definition.clipboard)&&a.push(t)}),"groups"==e.columnHeaders?(r=this.generateColumnGroupHeaders(this.table.columnManager.columns),s=s.concat(this.groupHeadersToRows(r))):(r=a,s.push(this.generateSimpleHeaders(r))),this.config.columnCalcs&&(i=this.table.getCalcResults()),this.table.options.clipboardCopyStyled&&this.generateHTML(t,r,i,e,o),e.rowGroups?t.forEach(function(t){s=s.concat(n.parseRowGroupData(t,a,e,o,i||{}))}):(e.columnCalcs&&(s=s.concat(this.getCalcRow(i,a,"top"))),s=s.concat(this.rowsToData(t,a,e,o)),e.columnCalcs&&(s=s.concat(this.getCalcRow(i,a,"bottom")))),s},b.prototype.parseRowGroupData=function(t,e,o,i,n){var s=this,r=[];return r.push([t.key]),t.subGroups?t.subGroups.forEach(function(e){r=r.concat(s.parseRowGroupData(e,o,i,n[t.key]?n[t.key].groups||{}:{}))}):(o.columnCalcs&&(r=r.concat(this.getCalcRow(n,e,t.key,"top"))),r=r.concat(this.rowsToData(t.rows,e,o,i)),o.columnCalcs&&(r=r.concat(this.getCalcRow(n,e,t.key,"bottom")))),r},b.prototype.generateHTML=function(t,e,o,i,n){function r(t,e){var o=[];return void 0===y[e]&&(y[e]=[]),y[e].push({title:t.title,width:t.width,height:1,children:!!t.subGroups,element:t.column.getElement()}),t.subGroups?(t.subGroups.forEach(function(t){o=o.concat(r(t,e+1))}),o):[t.column]}function a(t,e,o){var i=t[e];i&&(o&&(i=i[o]),Object.keys(i).length&&l([i]))}function l(t){t.forEach(function(t,o){var i,n=document.createElement("tr"),r=m,a=!1;t instanceof s?i=t.getData("clipboard"):(i=t,a=!0),e.forEach(function(t,o){var s=document.createElement("td"),r=t.getFieldValue(i);switch(void 0===r?"undefined":_typeof(r)){case"object":r=JSON.stringify(r);break;case"undefined":case"null":r="";break;default:r=r}s.innerHTML=r,t.definition.align&&(s.style.textAlign=t.definition.align),e.length,f&&v.mapElementStyles(f,s,["border-top","border-left","border-right","border-bottom","color","font-weight","font-family","font-size"]),n.appendChild(s)}),a?r=p:(o%2||!d||(r=d),o%2&&h&&(r=h)),r&&v.mapElementStyles(r,n,["border-top","border-left","border-right","border-bottom","color","font-weight","font-family","font-size","background-color"]),u.appendChild(n)})}function c(t,o){var n=document.createElement("tr"),s=document.createElement("td");s.colSpan=e.length,s.innerHTML=t.key,n.appendChild(s),u.appendChild(n),v.mapElementStyles(g,n,["border-top","border-left","border-right","border-bottom","color","font-weight","font-family","font-size","background-color"]),t.subGroups?t.subGroups.forEach(function(e){c(e,o[t.key]?o[t.key].groups||{}:{})}):(i.columnCalcs&&a(o,t.key,"top"),l(t.rows),i.columnCalcs&&a(o,t.key,"bottom"))}var u,d,h,p,m,f,g,b,v=this,y=[];if(this.htmlElement=document.createElement("table"),v.mapElementStyles(this.table.element,this.htmlElement,["border-top","border-left","border-right","border-bottom"]),i.columnHeaders)if("groups"==i.columnHeaders){var w=[];e.forEach(function(t){w=w.concat(r(t,0))}),e=w,function(){y.forEach(function(t,e){t.forEach(function(t){t.children||(t.height=y.length-e)})})}(),function(t){var e=document.createElement("thead");t.forEach(function(t){var o=document.createElement("tr");t.forEach(function(t){var e=document.createElement("th");t.width>1&&(e.colSpan=t.width),t.height>1&&(e.rowSpan=t.height),e.innerHTML=t.title,v.mapElementStyles(t.element,e,["border-top","border-left","border-right","border-bottom","background-color","color","font-weight","font-family","font-size"]),o.appendChild(e)}),v.mapElementStyles(v.table.columnManager.getHeadersElement(),o,["border-top","border-left","border-right","border-bottom","background-color","color","font-weight","font-family","font-size"]),e.appendChild(o)}),v.htmlElement.appendChild(e)}(y)}else!function(){var t=document.createElement("tr");e.forEach(function(e){var o=document.createElement("th");o.innerHTML=e.definition.title,v.mapElementStyles(e.getElement(),o,["border-top","border-left","border-right","border-bottom","background-color","color","font-weight","font-family","font-size"]),t.appendChild(o)}),v.mapElementStyles(v.table.columnManager.getHeadersElement(),t,["border-top","border-left","border-right","border-bottom","background-color","color","font-weight","font-family","font-size"]),v.htmlElement.appendChild(document.createElement("thead").appendChild(t))}();u=document.createElement("tbody"),window.getComputedStyle&&(d=this.table.element.querySelector(".tabulator-row-odd:not(.tabulator-group):not(.tabulator-calcs)"),h=this.table.element.querySelector(".tabulator-row-even:not(.tabulator-group):not(.tabulator-calcs)"),p=this.table.element.querySelector(".tabulator-row.tabulator-calcs"),m=this.table.element.querySelector(".tabulator-row:not(.tabulator-group):not(.tabulator-calcs)"),g=this.table.element.getElementsByClassName("tabulator-group")[0],m&&(b=m.getElementsByClassName("tabulator-cell"),f=b[0],b[b.length-1])),i.rowGroups?t.forEach(function(t){c(t,o||{})}):(i.columnCalcs&&a(o,"top"),l(t),i.columnCalcs&&a(o,"bottom")),this.htmlElement.appendChild(u)},b.prototype.mapElementStyles=function(t,e,o){var i={"background-color":"backgroundColor",color:"fontColor","font-weight":"fontWeight","font-family":"fontFamily","font-size":"fontSize","border-top":"borderTop","border-left":"borderLeft","border-right":"borderRight","border-bottom":"borderBottom"};if(window.getComputedStyle){var n=window.getComputedStyle(t);o.forEach(function(t){e.style[i[t]]=n.getPropertyValue(t)})}},b.prototype.copySelectors={userSelection:function(t,e){return e},selected:function(t,e){var o=[];return this.table.modExists("selectRow",!0)&&(o=this.table.modules.selectRow.getSelectedRows()),t.rowGroups&&console.warn("Clipboard Warning - select coptSelector does not support row groups"),this.buildOutput(o,t,e)},table:function(t,e){return t.rowGroups&&console.warn("Clipboard Warning - table coptSelector does not support row groups"),this.buildOutput(this.table.rowManager.getComponents(),t,e)},active:function(t,e){var o;return o=t.rowGroups?this.buildComplexRows(t):this.table.rowManager.getComponents("active"),this.buildOutput(o,t,e)},visible:function(t,e){var o;return o=t.rowGroups?this.buildComplexRows(t):this.table.rowManager.getComponents("visible"),this.buildOutput(o,t,e)}},b.prototype.copyFormatters={raw:function(t,e){return t},table:function(t,e){var o=[];return t.forEach(function(t){var e=[];t.forEach(function(t){void 0===t&&(t=""),t=void 0===t||null===t?"":t.toString(),t.match(/\r|\n/)&&(t=t.split('"').join('""'),t='"'+t+'"'),e.push(t)}),o.push(e.join("\t"))}),o.join("\n")}},b.prototype.pasteParsers={table:function(t){var e=[],o=!0,i=this.table.columnManager.columns,n=[],s=[];return t=t.split("\n"),t.forEach(function(t){e.push(t.split("\t"))}),!(!e.length||1===e.length&&e[0].length<2)&&(!0,e[0].forEach(function(t){var e=i.find(function(e){return t&&e.definition.title&&t.trim()&&e.definition.title.trim()===t.trim()});e?n.push(e):o=!1}),o||(o=!0,n=[],e[0].forEach(function(t){var e=i.find(function(e){return t&&e.field&&t.trim()&&e.field.trim()===t.trim()});e?n.push(e):o=!1}),o||(n=this.table.columnManager.columnsByIndex)),o&&e.shift(),e.forEach(function(t){var e={};t.forEach(function(t,o){n[o]&&(e[n[o].field]=t)}),s.push(e)}),s)}},b.prototype.pasteActions={replace:function(t){return this.table.setData(t)},update:function(t){return this.table.updateOrAddData(t)},insert:function(t){return this.table.addData(t)}},u.prototype.registerModule("clipboard",b);var v=function(t){this.table=t,this.indent=10,this.field="",this.collapseEl=null,this.expandEl=null,this.branchEl=null,this.elementField=!1,this.startOpen=function(){},this.displayIndex=0};v.prototype.initialize=function(){var t=null,e=this.table.columnManager.getFirstVisibileColumn(),o=this.table.options;switch(this.field=o.dataTreeChildField,this.indent=o.dataTreeChildIndent,this.elementField=o.dataTreeElementColumn||!!e&&e.field,o.dataTreeBranchElement&&(!0===o.dataTreeBranchElement?(this.branchEl=document.createElement("div"),this.branchEl.classList.add("tabulator-data-tree-branch")):"string"==typeof o.dataTreeBranchElement?(t=document.createElement("div"),t.innerHTML=o.dataTreeBranchElement,this.branchEl=t.firstChild):this.branchEl=o.dataTreeBranchElement),o.dataTreeCollapseElement?"string"==typeof o.dataTreeCollapseElement?(t=document.createElement("div"),t.innerHTML=o.dataTreeCollapseElement,this.collapseEl=t.firstChild):this.collapseEl=o.dataTreeCollapseElement:(this.collapseEl=document.createElement("div"),this.collapseEl.classList.add("tabulator-data-tree-control"),this.collapseEl.tabIndex=0,this.collapseEl.innerHTML="<div class='tabulator-data-tree-control-collapse'></div>"),o.dataTreeExpandElement?"string"==typeof o.dataTreeExpandElement?(t=document.createElement("div"),t.innerHTML=o.dataTreeExpandElement,this.expandEl=t.firstChild):this.expandEl=o.dataTreeExpandElement:(this.expandEl=document.createElement("div"),this.expandEl.classList.add("tabulator-data-tree-control"),this.expandEl.tabIndex=0,this.expandEl.innerHTML="<div class='tabulator-data-tree-control-expand'></div>"),_typeof(o.dataTreeStartExpanded)){case"boolean":this.startOpen=function(t,e){return o.dataTreeStartExpanded};break;case"function":this.startOpen=o.dataTreeStartExpanded;break;default:this.startOpen=function(t,e){return o.dataTreeStartExpanded[e]}}},v.prototype.initializeRow=function(t){var e=t.getData()[this.field],o=Array.isArray(e),i=o||!o&&"object"===(void 0===e?"undefined":_typeof(e))&&null!==e;t.modules.dataTree={index:0,open:!!i&&this.startOpen(t.getComponent(),0),controlEl:!1,branchEl:!1,parent:!1,children:i}},v.prototype.layoutRow=function(t){var e=this.elementField?t.getCell(this.elementField):t.getCells()[0],o=e.getElement(),i=t.modules.dataTree;i.branchEl&&i.branchEl.parentNode.removeChild(i.branchEl),this.generateControlElement(t,o),i.index&&(this.branchEl?(i.branchEl=this.branchEl.cloneNode(!0),o.insertBefore(i.branchEl,o.firstChild),i.branchEl.style.marginLeft=(i.branchEl.offsetWidth+i.branchEl.style.marginRight)*(i.index-1)+i.index*this.indent+"px"):o.style.paddingLeft=parseInt(window.getComputedStyle(o,null).getPropertyValue("padding-left"))+i.index*this.indent+"px")},v.prototype.generateControlElement=function(t,e){var o=this,i=t.modules.dataTree,e=e||t.getCells()[0].getElement(),n=i.controlEl;!1!==i.children&&(i.open?(i.controlEl=this.collapseEl.cloneNode(!0),i.controlEl.addEventListener("click",function(e){e.stopPropagation(),o.collapseRow(t)})):(i.controlEl=this.expandEl.cloneNode(!0),i.controlEl.addEventListener("click",function(e){e.stopPropagation(),o.expandRow(t)})),i.controlEl.addEventListener("mousedown",function(t){t.stopPropagation()}),n&&n.parentNode===e?n.parentNode.replaceChild(i.controlEl,n):e.insertBefore(i.controlEl,e.firstChild))},v.prototype.setDisplayIndex=function(t){this.displayIndex=t},v.prototype.getDisplayIndex=function(){return this.displayIndex},v.prototype.getRows=function(t){var e=this,o=[];return t.forEach(function(t,i){var n,s;o.push(t),t instanceof r&&(n=t.modules.dataTree.children,n.index||!1===n.children||(s=e.getChildren(t),s.forEach(function(t){o.push(t)})))}),o},v.prototype.getChildren=function(t){var e=this,o=t.modules.dataTree,i=[],n=[];return!1!==o.children&&o.open&&(Array.isArray(o.children)||(o.children=this.generateChildren(t)),i=this.table.modExists("filter")?this.table.modules.filter.filter(o.children):o.children,this.table.modExists("sort")&&this.table.modules.sort.sort(i),i.forEach(function(t){n.push(t),e.getChildren(t).forEach(function(t){n.push(t)})})),n},v.prototype.generateChildren=function(t){var e=this,o=[],i=t.getData()[this.field];return Array.isArray(i)||(i=[i]),i.forEach(function(i){var n=new r(i||{},e.table.rowManager);n.modules.dataTree.index=t.modules.dataTree.index+1,n.modules.dataTree.parent=t,n.modules.dataTree.children&&(n.modules.dataTree.open=e.startOpen(n.getComponent(),n.modules.dataTree.index)),o.push(n)}),o},v.prototype.expandRow=function(t,e){var o=t.modules.dataTree;!1!==o.children&&(o.open=!0,t.reinitialize(),this.table.rowManager.refreshActiveData("tree",!1,!0),this.table.options.dataTreeRowExpanded(t.getComponent(),t.modules.dataTree.index))},v.prototype.collapseRow=function(t){var e=t.modules.dataTree;!1!==e.children&&(e.open=!1,t.reinitialize(),this.table.rowManager.refreshActiveData("tree",!1,!0),this.table.options.dataTreeRowCollapsed(t.getComponent(),t.modules.dataTree.index))},v.prototype.toggleRow=function(t){var e=t.modules.dataTree;!1!==e.children&&(e.open?this.collapseRow(t):this.expandRow(t))},v.prototype.getTreeParent=function(t){return!!t.modules.dataTree.parent&&t.modules.dataTree.parent.getComponent()},v.prototype.getTreeChildren=function(t){var e=t.modules.dataTree,o=[];return e.children&&(Array.isArray(e.children)||(e.children=this.generateChildren(t)),e.children.forEach(function(t){t instanceof r&&o.push(t.getComponent())})),o},v.prototype.checkForRestyle=function(t){t.row.cells.indexOf(t)||!1!==t.row.modules.dataTree.children&&t.row.reinitialize()},v.prototype.getChildField=function(){return this.field},v.prototype.redrawNeeded=function(t){return!!this.field&&void 0!==t[this.field]||!!this.elementField&&void 0!==t[this.elementField]},u.prototype.registerModule("dataTree",v)
;var y=function(t){this.table=t,this.fields={},this.columnsByIndex=[],this.columnsByField={},this.config={},this.active=!1};y.prototype.download=function(t,e,o,i,n){function s(o,i){n?!0===n?r.triggerDownload(o,i,t,e,!0):n(o):r.triggerDownload(o,i,t,e)}var r=this,a=!1;this.processConfig(),this.active=i,"function"==typeof t?a=t:r.downloaders[t]?a=r.downloaders[t]:console.warn("Download Error - No such download type found: ",t),this.processColumns(),a&&a.call(this,r.processDefinitions(),r.processData(i||"active"),o||{},s,this.config)},y.prototype.processConfig=function(){var t={columnGroups:!0,rowGroups:!0,columnCalcs:!0};if(this.table.options.downloadConfig)for(var e in this.table.options.downloadConfig)t[e]=this.table.options.downloadConfig[e];t.rowGroups&&this.table.options.groupBy&&this.table.modExists("groupRows")&&(this.config.rowGroups=!0),t.columnGroups&&this.table.columnManager.columns.length!=this.table.columnManager.columnsByIndex.length&&(this.config.columnGroups=!0),t.columnCalcs&&this.table.modExists("columnCalcs")&&(this.config.columnCalcs=!0)},y.prototype.processColumns=function(){var t=this;t.columnsByIndex=[],t.columnsByField={},t.table.columnManager.columnsByIndex.forEach(function(e){e.field&&!1!==e.definition.download&&(e.visible||!e.visible&&e.definition.download)&&(t.columnsByIndex.push(e),t.columnsByField[e.field]=e)})},y.prototype.processDefinitions=function(){var t=this,e=[];return this.config.columnGroups?t.table.columnManager.columns.forEach(function(o){var i=t.processColumnGroup(o);i&&e.push(i)}):t.columnsByIndex.forEach(function(o){!1!==o.download&&e.push(t.processDefinition(o))}),e},y.prototype.processColumnGroup=function(t){var e=this,o=t.columns,i=0,n=this.processDefinition(t),s={type:"group",title:n.title,depth:1};if(o.length){if(s.subGroups=[],s.width=0,o.forEach(function(t){var o=e.processColumnGroup(t);o.depth>i&&(i=o.depth),o&&(s.width+=o.width,s.subGroups.push(o))}),s.depth+=i,!s.width)return!1}else{if(!t.field||!1===t.definition.download||!(t.visible||!t.visible&&t.definition.download))return!1;s.width=1,s.definition=n}return s},y.prototype.processDefinition=function(t){var e={};for(var o in t.definition)e[o]=t.definition[o];return void 0!==t.definition.downloadTitle&&(e.title=t.definition.downloadTitle),e},y.prototype.processData=function(t){var e=this,o=this,i=[],n=[],s=!1,r={};return this.config.rowGroups?("visible"==t?(s=o.table.rowManager.getRows(t),s.forEach(function(t){if("row"==t.type){var e=t.getGroup();-1===n.indexOf(e)&&n.push(e)}})):n=this.table.modules.groupRows.getGroups(),n.forEach(function(t){i.push(e.processGroupData(t,s))})):i=o.table.rowManager.getData(t,"download"),this.config.columnCalcs&&(r=this.table.getCalcResults(),i={calcs:r,data:i}),"function"==typeof o.table.options.downloadDataFormatter&&(i=o.table.options.downloadDataFormatter(i)),i},y.prototype.processGroupData=function(t,e){var o=this,i=t.getSubGroups(),n={type:"group",key:t.key};return i.length?(n.subGroups=[],i.forEach(function(t){n.subGroups.push(o.processGroupData(t,e))})):e?(n.rows=[],t.rows.forEach(function(t){e.indexOf(t)>-1&&n.rows.push(t.getData("download"))})):n.rows=t.getData(!0,"download"),n},y.prototype.triggerDownload=function(t,e,o,i,n){var s=document.createElement("a"),r=new Blob([t],{type:e}),i=i||"Tabulator."+("function"==typeof o?"txt":o);(r=this.table.options.downloadReady.call(this.table,t,r))&&(n?window.open(window.URL.createObjectURL(r)):navigator.msSaveOrOpenBlob?navigator.msSaveOrOpenBlob(r,i):(s.setAttribute("href",window.URL.createObjectURL(r)),s.setAttribute("download",i),s.style.display="none",document.body.appendChild(s),s.click(),document.body.removeChild(s)),this.table.options.downloadComplete&&this.table.options.downloadComplete())},y.prototype.getFieldValue=function(t,e){var o=this.columnsByField[t];return!!o&&o.getFieldValue(e)},y.prototype.commsReceived=function(t,e,o){switch(e){case"intercept":this.download(o.type,"",o.options,o.active,o.intercept)}},y.prototype.downloaders={csv:function(t,e,o,i,n){function s(t,e){t.subGroups?t.subGroups.forEach(function(t){s(t,e+1)}):(d.push('"'+String(t.title).split('"').join('""')+'"'),h.push(t.definition.field))}function r(t){t.forEach(function(t){var e=[];h.forEach(function(o){var i=u.getFieldValue(o,t);switch(void 0===i?"undefined":_typeof(i)){case"object":i=JSON.stringify(i);break;case"undefined":case"null":i="";break;default:i=i}e.push('"'+String(i).split('"').join('""')+'"')}),l.push(e.join(p))})}function a(t){t.subGroups?t.subGroups.forEach(function(t){a(t)}):r(t.rows)}var l,c,u=this,d=[],h=[],p=o&&o.delimiter?o.delimiter:",";n.columnGroups?(console.warn("Download Warning - CSV downloader cannot process column groups"),t.forEach(function(t){s(t,0)})):function(){t.forEach(function(t){d.push('"'+String(t.title).split('"').join('""')+'"'),h.push(t.field)})}(),l=[d.join(p)],n.columnCalcs&&(console.warn("Download Warning - CSV downloader cannot process column calculations"),e=e.data),n.rowGroups?(console.warn("Download Warning - CSV downloader cannot process row groups"),e.forEach(function(t){a(t)})):r(e),c=l.join("\n"),o.bom&&(c="\ufeff"+c),i(c,"text/csv")},json:function(t,e,o,i,n){var s;n.columnCalcs&&(console.warn("Download Warning - CSV downloader cannot process column calculations"),e=e.data),s=JSON.stringify(e,null,"\t"),i(s,"application/json")},pdf:function(t,e,o,i,n){function s(t,e){var o=t.width,i=1,n={content:t.title||""};if(t.subGroups?(t.subGroups.forEach(function(t){s(t,e+1)}),i=1):(h.push(t.definition.field),i=g-e),n.rowSpan=i,p[e].push(n),o--,i>1)for(var r=e+1;r<g;r++)p[r].push("");for(var r=0;r<o;r++)p[e].push("")}function r(t){switch(void 0===t?"undefined":_typeof(t)){case"object":t=JSON.stringify(t);break;case"undefined":case"null":t="";break;default:t=t}return t}function a(t){t.forEach(function(t){m.push(l(t))})}function l(t,e){var o=[];return h.forEach(function(i){var n=d.getFieldValue(i,t);n=r(n),e?o.push({content:n,styles:e}):o.push(n)}),o}function c(t,e){var o=[];o.push({content:r(t.key),colSpan:h.length,styles:v}),m.push(o),t.subGroups?t.subGroups.forEach(function(o){c(o,e[t.key]?e[t.key].groups||{}:{})}):(n.columnCalcs&&u(e,t.key,"top"),a(t.rows),n.columnCalcs&&u(e,t.key,"bottom"))}function u(t,e,o){var i=t[e];i&&(o&&(i=i[o]),Object.keys(i).length&&m.push(l(i,y)))}var d=this,h=[],p=[],m=[],f={},g=1,b={},v=o.rowGroupStyles||{fontStyle:"bold",fontSize:12,cellPadding:6,fillColor:220},y=o.rowCalcStyles||{fontStyle:"bold",fontSize:10,cellPadding:4,fillColor:232},w=o.jsPDF||{},E=o&&o.title?o.title:"";if(n.columnCalcs&&(f=e.calcs,e=e.data),w.orientation||(w.orientation=o.orientation||"landscape"),w.unit||(w.unit="pt"),n.columnGroups){t.forEach(function(t){t.depth>g&&(g=t.depth)});for(var C=0;C<g;C++)p.push([]);t.forEach(function(t){s(t,0)})}else!function(){t.forEach(function(t){t.field&&(p.push(t.title||""),h.push(t.field))}),p=[p]}();n.rowGroups?e.forEach(function(t){c(t,f)}):(n.columnCalcs&&u(f,"top"),a(e),n.columnCalcs&&u(f,"bottom"));var R=new jsPDF(w);o&&o.autoTable&&(b="function"==typeof o.autoTable?o.autoTable(R)||{}:o.autoTable),E&&(b.addPageContent=function(t){R.text(E,40,30)}),b.head=p,b.body=m,R.autoTable(b),o&&o.documentProcessing&&o.documentProcessing(R),i(R.output("arraybuffer"),"application/pdf")},xlsx:function(t,e,o,i,n){function s(){function o(t,e){void 0===f[e]&&(f[e]=[]),void 0===h[e]&&(h[e]=[]),t.width>1&&h[e].push({type:"hoz",start:f[e].length,end:f[e].length+t.width-1}),f[e].push(t.title),t.subGroups?t.subGroups.forEach(function(t){o(t,e+1)}):(g.push(t.definition.field),i(g.length),h[e].push({type:"vert",start:g.length-1}))}function i(){var t=0;f.forEach(function(e){var o=e.length;o>t&&(t=o)}),f.forEach(function(e){var o=e.length;if(o<t)for(var i=o;i<t;i++)e.push("")})}function s(){var t=[];return d.forEach(function(e){t.push({s:{r:e,c:0},e:{r:e,c:g.length-1}})}),h.forEach(function(e,o){e.forEach(function(e){"hoz"===e.type?t.push({s:{r:o,c:e.start},e:{r:o,c:e.end}}):o!=f.length-1&&t.push({s:{r:o,c:e.start},e:{r:f.length-1,c:e.start}})})}),t}function r(t){t.forEach(function(t){b.push(l(t))})}function l(t){var e=[];return g.forEach(function(o){var i=a.getFieldValue(o,t);e.push(i instanceof Date||"object"!==(void 0===i?"undefined":_typeof(i))?i:JSON.stringify(i))}),e}function c(t,e,o){var i=t[e];i&&(o&&(i=i[o]),Object.keys(i).length&&(p.push(b.length),b.push(l(i))))}function m(t,e){var o=[];o.push(t.key),d.push(b.length),b.push(o),t.subGroups?t.subGroups.forEach(function(o){m(o,e[t.key]?e[t.key].groups||{}:{})}):(n.columnCalcs&&c(e,t.key,"top"),r(t.rows),n.columnCalcs&&c(e,t.key,"bottom"))}var f=[],g=[],b=[];return n.columnGroups?(t.forEach(function(t){o(t,0)}),f.forEach(function(t){b.push(t)})):function(){t.forEach(function(t){f.push(t.title),g.push(t.field)}),b.push(f)}(),n.rowGroups?e.forEach(function(t){m(t,u)}):(n.columnCalcs&&c(u,"top"),r(e),n.columnCalcs&&c(u,"bottom")),function(){var t={},e={s:{c:0,r:0},e:{c:g.length,r:b.length}};XLSX.utils.sheet_add_aoa(t,b),t["!ref"]=XLSX.utils.encode_range(e);var o=s();return o.length&&(t["!merges"]=o),t}()}var r,a=this,l=o.sheetName||"Sheet1",c=XLSX.utils.book_new(),u={},d=[],h=[],p=[];if(c.SheetNames=[],c.Sheets={},n.columnCalcs&&(u=e.calcs,e=e.data),o.sheetOnly)return void i(s());if(o.sheets)for(var m in o.sheets)!0===o.sheets[m]?(c.SheetNames.push(m),c.Sheets[m]=s()):(c.SheetNames.push(m),this.table.modules.comms.send(o.sheets[m],"download","intercept",{type:"xlsx",options:{sheetOnly:!0},active:a.active,intercept:function(t){c.Sheets[m]=t}}));else c.SheetNames.push(l),c.Sheets[l]=s();o.documentProcessing&&(c=o.documentProcessing(c)),r=XLSX.write(c,{bookType:"xlsx",bookSST:!0,type:"binary"}),i(function(t){for(var e=new ArrayBuffer(t.length),o=new Uint8Array(e),i=0;i!=t.length;++i)o[i]=255&t.charCodeAt(i);return e}(r),"application/octet-stream")},html:function(t,e,o,i,n){this.table.modExists("htmlTableExport",!0)&&i(this.table.modules.htmlTableExport.getHtml(!0,o.style,n),"text/html")}},u.prototype.registerModule("download",y);var w=function(t){this.table=t,this.currentCell=!1,this.mouseClick=!1,this.recursionBlock=!1,this.invalidEdit=!1};w.prototype.initializeColumn=function(t){var e=this,o={editor:!1,blocked:!1,check:t.definition.editable,params:t.definition.editorParams||{}};switch(_typeof(t.definition.editor)){case"string":"tick"===t.definition.editor&&(t.definition.editor="tickCross",console.warn("DEPRECATION WARNING - the tick editor has been deprecated, please use the tickCross editor")),e.editors[t.definition.editor]?o.editor=e.editors[t.definition.editor]:console.warn("Editor Error - No such editor found: ",t.definition.editor);break;case"function":o.editor=t.definition.editor;break;case"boolean":!0===t.definition.editor&&("function"!=typeof t.definition.formatter?("tick"===t.definition.formatter&&(t.definition.formatter="tickCross",console.warn("DEPRECATION WARNING - the tick editor has been deprecated, please use the tickCross editor")),e.editors[t.definition.formatter]?o.editor=e.editors[t.definition.formatter]:o.editor=e.editors.input):console.warn("Editor Error - Cannot auto lookup editor for a custom formatter: ",t.definition.formatter))}o.editor&&(t.modules.edit=o)},w.prototype.getCurrentCell=function(){return!!this.currentCell&&this.currentCell.getComponent()},w.prototype.clearEditor=function(){var t,e=this.currentCell;if(this.invalidEdit=!1,e){for(this.currentCell=!1,t=e.getElement(),t.classList.remove("tabulator-validation-fail"),t.classList.remove("tabulator-editing");t.firstChild;)t.removeChild(t.firstChild);e.row.getElement().classList.remove("tabulator-row-editing")}},w.prototype.cancelEdit=function(){if(this.currentCell){var t=this.currentCell,e=this.currentCell.getComponent();this.clearEditor(),t.setValueActual(t.getValue()),t.column.cellEvents.cellEditCancelled&&t.column.cellEvents.cellEditCancelled.call(this.table,e),this.table.options.cellEditCancelled.call(this.table,e)}},w.prototype.bindEditor=function(t){var e=this,o=t.getElement();o.setAttribute("tabindex",0),o.addEventListener("click",function(t){o.classList.contains("tabulator-editing")||o.focus()}),o.addEventListener("mousedown",function(t){e.mouseClick=!0}),o.addEventListener("focus",function(o){e.recursionBlock||e.edit(t,o,!1)})},w.prototype.focusCellNoEvent=function(t,e){this.recursionBlock=!0,e&&"ie"===this.table.browser||t.getElement().focus(),this.recursionBlock=!1},w.prototype.editCell=function(t,e){this.focusCellNoEvent(t),this.edit(t,!1,e)},w.prototype.edit=function(t,e,o){function i(e){if(c.currentCell===t){var o=!0;return t.column.modules.validate&&c.table.modExists("validate")&&(o=c.table.modules.validate.validate(t.column.modules.validate,t.getComponent(),e)),!0===o?(c.clearEditor(),t.setValue(e,!0),c.table.options.dataTree&&c.table.modExists("dataTree")&&c.table.modules.dataTree.checkForRestyle(t),!0):(c.invalidEdit=!0,h.classList.add("tabulator-validation-fail"),c.focusCellNoEvent(t,!0),d(),c.table.options.validationFailed.call(c.table,t.getComponent(),e,o),!1)}}function n(){c.currentCell===t&&(c.cancelEdit(),c.table.options.dataTree&&c.table.modExists("dataTree")&&c.table.modules.dataTree.checkForRestyle(t))}function s(t){d=t}var r,a,l,c=this,u=!0,d=function(){},h=t.getElement();if(this.currentCell)return void(this.invalidEdit||this.cancelEdit());if(t.column.modules.edit.blocked)return this.mouseClick=!1,h.blur(),!1;switch(e&&e.stopPropagation(),_typeof(t.column.modules.edit.check)){case"function":u=t.column.modules.edit.check(t.getComponent());break;case"boolean":u=t.column.modules.edit.check}if(u||o){if(c.cancelEdit(),c.currentCell=t,a=t.getComponent(),this.mouseClick&&(this.mouseClick=!1,t.column.cellEvents.cellClick&&t.column.cellEvents.cellClick.call(this.table,e,a)),t.column.cellEvents.cellEditing&&t.column.cellEvents.cellEditing.call(this.table,a),c.table.options.cellEditing.call(this.table,a),l="function"==typeof t.column.modules.edit.params?t.column.modules.edit.params(a):t.column.modules.edit.params,!1===(r=t.column.modules.edit.editor.call(c,a,s,i,n,l)))return h.blur(),!1;if(!(r instanceof Node))return console.warn("Edit Error - Editor should return an instance of Node, the editor returned:",r),h.blur(),!1;for(h.classList.add("tabulator-editing"),t.row.getElement().classList.add("tabulator-row-editing");h.firstChild;)h.removeChild(h.firstChild);h.appendChild(r),d();for(var p=h.children,m=0;m<p.length;m++)p[m].addEventListener("click",function(t){t.stopPropagation()});return!0}return this.mouseClick=!1,h.blur(),!1},w.prototype.editors={input:function(t,e,o,i,n){function s(t){(null===r||void 0===r)&&""!==a.value||a.value!=r?o(a.value)&&(r=a.value):i()}var r=t.getValue(),a=document.createElement("input");if(a.setAttribute("type",n.search?"search":"text"),a.style.padding="4px",a.style.width="100%",a.style.boxSizing="border-box",n.elementAttributes&&"object"==_typeof(n.elementAttributes))for(var l in n.elementAttributes)"+"==l.charAt(0)?(l=l.slice(1),a.setAttribute(l,a.getAttribute(l)+n.elementAttributes["+"+l])):a.setAttribute(l,n.elementAttributes[l]);return a.value=void 0!==r?r:"",e(function(){a.focus(),a.style.height="100%"}),a.addEventListener("change",s),a.addEventListener("blur",s),a.addEventListener("keydown",function(t){switch(t.keyCode){case 13:s(t);break;case 27:i()}}),a},textarea:function(t,e,o,i,n){function s(e){(null===r||void 0===r)&&""!==c.value||c.value!=r?(o(c.value)&&(r=c.value),setTimeout(function(){t.getRow().normalizeHeight()},300)):i()}var r=t.getValue(),a=n.verticalNavigation||"hybrid",l=String(null!==r&&void 0!==r?r:""),c=(l.match(/(?:\r\n|\r|\n)/g),document.createElement("textarea")),u=0;if(c.style.display="block",c.style.padding="2px",c.style.height="100%",c.style.width="100%",c.style.boxSizing="border-box",c.style.whiteSpace="pre-wrap",c.style.resize="none",n.elementAttributes&&"object"==_typeof(n.elementAttributes))for(var d in n.elementAttributes)"+"==d.charAt(0)?(d=d.slice(1),c.setAttribute(d,c.getAttribute(d)+n.elementAttributes["+"+d])):c.setAttribute(d,n.elementAttributes[d]);return c.value=l,e(function(){c.focus(),c.style.height="100%"}),c.addEventListener("change",s),c.addEventListener("blur",s),c.addEventListener("keyup",function(){c.style.height="";var e=c.scrollHeight;c.style.height=e+"px",e!=u&&(u=e,t.getRow().normalizeHeight())}),c.addEventListener("keydown",function(t){switch(t.keyCode){case 27:i();break;case 38:("editor"==a||"hybrid"==a&&c.selectionStart)&&(t.stopImmediatePropagation(),t.stopPropagation());break;case 40:("editor"==a||"hybrid"==a&&c.selectionStart!==c.value.length)&&(t.stopImmediatePropagation(),t.stopPropagation())}}),c},number:function(t,e,o,i,n){function s(){var t=l.value;isNaN(t)||""===t||(t=Number(t)),t!=r?o(t)&&(r=t):i()}var r=t.getValue(),a=n.verticalNavigation||"editor",l=document.createElement("input");if(l.setAttribute("type","number"),void 0!==n.max&&l.setAttribute("max",n.max),void 0!==n.min&&l.setAttribute("min",n.min),void 0!==n.step&&l.setAttribute("step",n.step),l.style.padding="4px",l.style.width="100%",l.style.boxSizing="border-box",n.elementAttributes&&"object"==_typeof(n.elementAttributes))for(var c in n.elementAttributes)"+"==c.charAt(0)?(c=c.slice(1),l.setAttribute(c,l.getAttribute(c)+n.elementAttributes["+"+c])):l.setAttribute(c,n.elementAttributes[c]);l.value=r;var u=function(t){s()};return e(function(){l.removeEventListener("blur",u),l.focus(),l.style.height="100%",l.addEventListener("blur",u)}),l.addEventListener("keydown",function(t){switch(t.keyCode){case 13:s();break;case 27:i();break;case 38:case 40:"editor"==a&&(t.stopImmediatePropagation(),t.stopPropagation())}}),l},range:function(t,e,o,i,n){function s(){var t=a.value;isNaN(t)||""===t||(t=Number(t)),t!=r?o(t)&&(r=t):i()}var r=t.getValue(),a=document.createElement("input");if(a.setAttribute("type","range"),void 0!==n.max&&a.setAttribute("max",n.max),void 0!==n.min&&a.setAttribute("min",n.min),void 0!==n.step&&a.setAttribute("step",n.step),a.style.padding="4px",a.style.width="100%",a.style.boxSizing="border-box",n.elementAttributes&&"object"==_typeof(n.elementAttributes))for(var l in n.elementAttributes)"+"==l.charAt(0)?(l=l.slice(1),a.setAttribute(l,a.getAttribute(l)+n.elementAttributes["+"+l])):a.setAttribute(l,n.elementAttributes[l]);return a.value=r,e(function(){a.focus(),a.style.height="100%"}),a.addEventListener("blur",function(t){s()}),a.addEventListener("keydown",function(t){switch(t.keyCode){case 13:case 9:s();break;case 27:i()}}),a},select:function(t,e,o,i,n){function s(e){var o,i={},s=f.table.getData();return o=e?f.table.columnManager.getColumnByField(e):t.getColumn()._getSelf(),o?(s.forEach(function(t){var e=o.getFieldValue(t);null!==e&&void 0!==e&&""!==e&&(i[e]=!0)}),i=n.sortValuesList?"asc"==n.sortValuesList?Object.keys(i).sort():Object.keys(i).sort().reverse():Object.keys(i)):console.warn("unable to find matching column to create select lookup list:",e),i}function r(e,o){function i(t){var t={label:n.listItemFormatter?n.listItemFormatter(t.value,t.label):t.label,value:t.value,element:!1};return t.value!==o&&(isNaN(parseFloat(t.value))||isNaN(parseFloat(t.value))||parseFloat(t.value)!==parseFloat(o))||l(t),s.push(t),r.push(t),t}var s=[],r=[];if("function"==typeof e&&(e=e(t)),Array.isArray(e))e.forEach(function(t){var e;"object"===(void 0===t?"undefined":_typeof(t))?t.options?(e={label:t.label,group:!0,element:!1},r.push(e),t.options.forEach(function(t){i(t)})):i(t):(e={label:n.listItemFormatter?n.listItemFormatter(t,t):t,value:t,element:!1},e.value!==o&&(isNaN(parseFloat(e.value))||isNaN(parseFloat(e.value))||parseFloat(e.value)!==parseFloat(o))||l(e),s.push(e),r.push(e))});else for(var c in e){var u={label:n.listItemFormatter?n.listItemFormatter(c,e[c]):e[c],value:c,element:!1};u.value!==o&&(isNaN(parseFloat(u.value))||isNaN(parseFloat(u.value))||parseFloat(u.value)!==parseFloat(o))||l(u),s.push(u),r.push(u)}C=s,R=r,a()}function a(){for(;E.firstChild;)E.removeChild(E.firstChild);R.forEach(function(t){var e=t.element;e||(t.group?(e=document.createElement("div"),e.classList.add("tabulator-edit-select-list-group"),e.tabIndex=0,e.innerHTML=""===t.label?"&nbsp;":t.label):(e=document.createElement("div"),e.classList.add("tabulator-edit-select-list-item"),e.tabIndex=0,e.innerHTML=""===t.label?"&nbsp;":t.label,e.addEventListener("click",function(){l(t),c()}),t===x&&e.classList.add("active")),e.addEventListener("mousedown",function(){M=!1,setTimeout(function(){M=!0},10)}),t.element=e),E.appendChild(e)})}function l(t){x&&x.element&&x.element.classList.remove("active"),x=t,w.value="&nbsp;"===t.label?"":t.label,t.element&&t.element.classList.add("active")}function c(){p(),b!==x.value?(b=x.value,o(x.value)):i()}function d(){p(),i()}function h(){if(!E.parentNode){!0===n.values?r(s(),y):"string"==typeof n.values?r(s(n.values),y):r(n.values||[],y);var t=u.prototype.helpers.elOffset(g);E.style.minWidth=g.offsetWidth+"px",E.style.top=t.top+g.offsetHeight+"px",E.style.left=t.left+"px",document.body.appendChild(E)}}function p(){E.parentNode&&E.parentNode.removeChild(E),m()}function m(){f.table.rowManager.element.removeEventListener("scroll",d)}var f=this,g=t.getElement(),b=t.getValue(),v=n.verticalNavigation||"editor",y=void 0!==b||null===b?b:void 0!==n.defaultValue?n.defaultValue:"",w=document.createElement("input"),E=document.createElement("div"),C=[],R=[],x={},M=!0;if(this.table.rowManager.element.addEventListener("scroll",d),(Array.isArray(n)||!Array.isArray(n)&&"object"===(void 0===n?"undefined":_typeof(n))&&!n.values)&&(console.warn("DEPRECATION WANRING - values for the select editor must now be passed into the values property of the editorParams object, not as the editorParams object"),n={values:n}),w.setAttribute("type","text"),w.style.padding="4px",w.style.width="100%",w.style.boxSizing="border-box",w.style.cursor="default",w.readOnly=0!=this.currentCell,n.elementAttributes&&"object"==_typeof(n.elementAttributes))for(var D in n.elementAttributes)"+"==D.charAt(0)?(D=D.slice(1),w.setAttribute(D,w.getAttribute(D)+n.elementAttributes["+"+D])):w.setAttribute(D,n.elementAttributes[D]);return w.value=void 0!==b||null===b?b:"",w.addEventListener("keydown",function(t){var e;switch(t.keyCode){case 38:e=C.indexOf(x),("editor"==v||"hybrid"==v&&e)&&(t.stopImmediatePropagation(),t.stopPropagation(),t.preventDefault(),e>0&&l(C[e-1]));break;case 40:e=C.indexOf(x),("editor"==v||"hybrid"==v&&e<C.length-1)&&(t.stopImmediatePropagation(),t.stopPropagation(),t.preventDefault(),e<C.length-1&&l(-1==e?C[0]:C[e+1]));break;case 37:case 39:t.stopImmediatePropagation(),t.stopPropagation(),t.preventDefault();break;case 13:c();break;case 27:d()}}),w.addEventListener("blur",function(t){M&&d()}),w.addEventListener("focus",function(t){h()}),E=document.createElement("div"),E.classList.add("tabulator-edit-select-list"),e(function(){w.style.height="100%",w.focus()}),w},autocomplete:function(t,e,o,i,n){function s(e){var o,i={},s=g.table.getData();return o=e?g.table.columnManager.getColumnByField(e):t.getColumn()._getSelf(),o?(s.forEach(function(t){var e=o.getFieldValue(t);null!==e&&void 0!==e&&""!==e&&(i[e]=!0)}),i=n.sortValuesList?"asc"==n.sortValuesList?Object.keys(i).sort():Object.keys(i).sort().reverse():Object.keys(i)):console.warn("unable to find matching column to create autocomplete lookup list:",e),i}function r(t,e){var o=[];if(Array.isArray(t))t.forEach(function(t){var i={title:n.listItemFormatter?n.listItemFormatter(t,t):t,value:t,element:!1};i.value!==e&&(isNaN(parseFloat(i.value))||isNaN(parseFloat(i.value))||parseFloat(i.value)!==parseFloat(e))||c(i),o.push(i)});else for(var i in t){var s={title:n.listItemFormatter?n.listItemFormatter(i,t[i]):t[i],value:i,element:!1};s.value!==e&&(isNaN(parseFloat(s.value))||isNaN(parseFloat(s.value))||parseFloat(s.value)!==parseFloat(e))||c(s),o.push(s)}n.searchFunc&&o.forEach(function(t){t.search={title:t.title,value:t.value}}),R=o}function a(t,e){var o=[],i=[],s=[];n.searchFunc?(R.forEach(function(t){i.push(t.search)}),s=n.searchFunc(t,i),s.forEach(function(t){var e=R.find(function(e){return e.search===t});e&&o.push(e)})):""===t?n.showListOnEmpty&&R.forEach(function(t){o.push(t)}):R.forEach(function(e){null===e.value&&void 0===e.value||(String(e.value).toLowerCase().indexOf(String(t).toLowerCase())>-1||String(e.title).toLowerCase().indexOf(String(t).toLowerCase())>-1)&&o.push(e)}),x=o,l(e)}function l(t){for(var e=!1;C.firstChild;)C.removeChild(C.firstChild);x.forEach(function(o){var i=o.element;i||(i=document.createElement("div"),i.classList.add("tabulator-edit-select-list-item"),i.tabIndex=0,i.innerHTML=o.title,i.addEventListener("click",function(){c(o),d()}),i.addEventListener("mousedown",function(){L=!1,setTimeout(function(){L=!0},10)}),o.element=i,t&&o.value==v&&(E.value=o.title,o.element.classList.add("active"),e=!0),o===D&&(o.element.classList.add("active"),e=!0)),C.appendChild(i)}),e||c(!1)}function c(t,e){D&&D.element&&D.element.classList.remove("active"),D=t,t&&t.element&&t.element.classList.add("active")}function d(){m(),D?v!==D.value?(v=D.value,E.value=D.title,o(D.value)):i():n.freetext?(v=E.value,o(E.value)):n.allowEmpty&&""===E.value?(v=E.value,o(E.value)):i()}function h(){m(),i()}function p(){if(!C.parentNode){for(;C.firstChild;)C.removeChild(C.firstChild);M=!0===n.values?s():"string"==typeof n.values?s(n.values):n.values||[],r(M,v);var t=u.prototype.helpers.elOffset(b);C.style.minWidth=b.offsetWidth+"px",C.style.top=t.top+b.offsetHeight+"px",C.style.left=t.left+"px",document.body.appendChild(C)}}function m(){C.parentNode&&C.parentNode.removeChild(C),f()}function f(){g.table.rowManager.element.removeEventListener("scroll",h)}var g=this,b=t.getElement(),v=t.getValue(),y=n.verticalNavigation||"editor",w=void 0!==v||null===v?v:void 0!==n.defaultValue?n.defaultValue:"",E=document.createElement("input"),C=document.createElement("div"),R=[],x=[],M=[],D={},L=!0;if(this.table.rowManager.element.addEventListener("scroll",h),E.setAttribute("type","search"),E.style.padding="4px",E.style.width="100%",E.style.boxSizing="border-box",n.elementAttributes&&"object"==_typeof(n.elementAttributes))for(var T in n.elementAttributes)"+"==T.charAt(0)?(T=T.slice(1),E.setAttribute(T,E.getAttribute(T)+n.elementAttributes["+"+T])):E.setAttribute(T,n.elementAttributes[T]);return E.addEventListener("keydown",function(t){var e;switch(t.keyCode){case 38:e=x.indexOf(D),("editor"==y||"hybrid"==y&&e)&&(t.stopImmediatePropagation(),t.stopPropagation(),t.preventDefault(),c(e>0?x[e-1]:!1));break;case 40:e=x.indexOf(D),("editor"==y||"hybrid"==y&&e<x.length-1)&&(t.stopImmediatePropagation(),t.stopPropagation(),t.preventDefault(),e<x.length-1&&c(-1==e?x[0]:x[e+1]));break;case 37:case 39:t.stopImmediatePropagation(),t.stopPropagation(),t.preventDefault();break;case 13:d();break;case 27:h();break;case 36:case 35:t.stopImmediatePropagation()}}),E.addEventListener("keyup",function(t){switch(t.keyCode){case 38:case 37:case 39:case 40:case 13:case 27:break;default:a(E.value)}}),E.addEventListener("search",function(t){a(E.value)}),E.addEventListener("blur",function(t){L&&d()}),E.addEventListener("focus",function(t){var e=w;p(),E.value=e,a(e,!0)}),C=document.createElement("div"),C.classList.add("tabulator-edit-select-list"),e(function(){E.style.height="100%",E.focus()}),E},star:function(t,e,o,i,n){function s(t){h.forEach(function(e,o){o<t?("ie"==a.table.browser?e.setAttribute("class","tabulator-star-active"):e.classList.replace("tabulator-star-inactive","tabulator-star-active"),e.innerHTML='<polygon fill="#488CE9" stroke="#014AAE" stroke-width="37.6152" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="259.216,29.942 330.27,173.919 489.16,197.007 374.185,309.08 401.33,467.31 259.216,392.612 117.104,467.31 144.25,309.08 29.274,197.007 188.165,173.919 "/>'):("ie"==a.table.browser?e.setAttribute("class","tabulator-star-inactive"):e.classList.replace("tabulator-star-active","tabulator-star-inactive"),e.innerHTML='<polygon fill="#010155" stroke="#686868" stroke-width="37.6152" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="259.216,29.942 330.27,173.919 489.16,197.007 374.185,309.08 401.33,467.31 259.216,392.612 117.104,467.31 144.25,309.08 29.274,197.007 188.165,173.919 "/>')})}function r(t){c=t,s(t)}var a=this,l=t.getElement(),c=t.getValue(),u=l.getElementsByTagName("svg").length||5,d=l.getElementsByTagName("svg")[0]?l.getElementsByTagName("svg")[0].getAttribute("width"):14,h=[],p=document.createElement("div"),m=document.createElementNS("http://www.w3.org/2000/svg","svg");if(l.style.whiteSpace="nowrap",l.style.overflow="hidden",l.style.textOverflow="ellipsis",p.style.verticalAlign="middle",p.style.display="inline-block",p.style.padding="4px",m.setAttribute("width",d),m.setAttribute("height",d),m.setAttribute("viewBox","0 0 512 512"),m.setAttribute("xml:space","preserve"),m.style.padding="0 1px",n.elementAttributes&&"object"==_typeof(n.elementAttributes))for(var f in n.elementAttributes)"+"==f.charAt(0)?(f=f.slice(1),p.setAttribute(f,p.getAttribute(f)+n.elementAttributes["+"+f])):p.setAttribute(f,n.elementAttributes[f]);for(var g=1;g<=u;g++)!function(t){var e=document.createElement("span"),i=m.cloneNode(!0);h.push(i),e.addEventListener("mouseenter",function(e){e.stopPropagation(),e.stopImmediatePropagation(),s(t)}),e.addEventListener("mousemove",function(t){t.stopPropagation(),t.stopImmediatePropagation()}),e.addEventListener("click",function(e){e.stopPropagation(),e.stopImmediatePropagation(),o(t)}),e.appendChild(i),p.appendChild(e)}(g);return c=Math.min(parseInt(c),u),s(c),p.addEventListener("mousemove",function(t){s(0)}),p.addEventListener("click",function(t){o(0)}),l.addEventListener("blur",function(t){i()}),l.addEventListener("keydown",function(t){switch(t.keyCode){case 39:r(c+1);break;case 37:r(c-1);break;case 13:o(c);break;case 27:i()}}),p},progress:function(t,e,o,i,n){function s(){var t=d*Math.round(m.offsetWidth/(l.clientWidth/100))+u;o(t),l.setAttribute("aria-valuenow",t),l.setAttribute("aria-label",h)}var r,a,l=t.getElement(),c=void 0===n.max?l.getElementsByTagName("div")[0].getAttribute("max")||100:n.max,u=void 0===n.min?l.getElementsByTagName("div")[0].getAttribute("min")||0:n.min,d=(c-u)/100,h=t.getValue()||0,p=document.createElement("div"),m=document.createElement("div");if(p.style.position="absolute",p.style.right="0",p.style.top="0",p.style.bottom="0",p.style.width="5px",p.classList.add("tabulator-progress-handle"),m.style.display="inline-block",m.style.position="relative",m.style.height="100%",m.style.backgroundColor="#488CE9",m.style.maxWidth="100%",m.style.minWidth="0%",n.elementAttributes&&"object"==_typeof(n.elementAttributes))for(var f in n.elementAttributes)"+"==f.charAt(0)?(f=f.slice(1),m.setAttribute(f,m.getAttribute(f)+n.elementAttributes["+"+f])):m.setAttribute(f,n.elementAttributes[f]);return l.style.padding="4px 4px",h=Math.min(parseFloat(h),c),h=Math.max(parseFloat(h),u),h=Math.round((h-u)/d),m.style.width=h+"%",l.setAttribute("aria-valuemin",u),l.setAttribute("aria-valuemax",c),m.appendChild(p),p.addEventListener("mousedown",function(t){r=t.screenX,a=m.offsetWidth}),p.addEventListener("mouseover",function(){p.style.cursor="ew-resize"}),l.addEventListener("mousemove",function(t){r&&(m.style.width=a+t.screenX-r+"px")}),l.addEventListener("mouseup",function(t){r&&(t.stopPropagation(),t.stopImmediatePropagation(),r=!1,a=!1,s())}),l.addEventListener("keydown",function(t){switch(t.keyCode){case 39:m.style.width=m.clientWidth+l.clientWidth/100+"px";break;case 37:m.style.width=m.clientWidth-l.clientWidth/100+"px";break;case 13:s();break;case 27:i()}}),l.addEventListener("blur",function(){i()}),m},tickCross:function(t,e,o,i,n){function s(t){return l?t?u?c:a.checked:a.checked&&!u?(a.checked=!1,a.indeterminate=!0,u=!0,c):(u=!1,a.checked):a.checked}var r=t.getValue(),a=document.createElement("input"),l=n.tristate,c=void 0===n.indeterminateValue?null:n.indeterminateValue,u=!1;if(a.setAttribute("type","checkbox"),a.style.marginTop="5px",a.style.boxSizing="border-box",
n.elementAttributes&&"object"==_typeof(n.elementAttributes))for(var d in n.elementAttributes)"+"==d.charAt(0)?(d=d.slice(1),a.setAttribute(d,a.getAttribute(d)+n.elementAttributes["+"+d])):a.setAttribute(d,n.elementAttributes[d]);return a.value=r,!l||void 0!==r&&r!==c&&""!==r||(u=!0,a.indeterminate=!0),"firefox"!=this.table.browser&&e(function(){a.focus()}),a.checked=!0===r||"true"===r||"True"===r||1===r,a.addEventListener("change",function(t){o(s())}),a.addEventListener("blur",function(t){o(s(!0))}),a.addEventListener("keydown",function(t){13==t.keyCode&&o(s()),27==t.keyCode&&i()}),a}},u.prototype.registerModule("edit",w);var E=function(t){this.table=t,this.filterList=[],this.headerFilters={},this.headerFilterColumns=[],this.changed=!1};E.prototype.initializeColumn=function(t,e){function o(e){var o,s="input"==t.modules.filter.tagType&&"text"==t.modules.filter.attrType||"textarea"==t.modules.filter.tagType?"partial":"match",r="";if(void 0===t.modules.filter.prevSuccess||t.modules.filter.prevSuccess!==e){if(t.modules.filter.prevSuccess=e,t.modules.filter.emptyFunc(e))delete i.headerFilters[n];else{switch(t.modules.filter.value=e,_typeof(t.definition.headerFilterFunc)){case"string":i.filters[t.definition.headerFilterFunc]?(r=t.definition.headerFilterFunc,o=function(o){var n=t.definition.headerFilterFuncParams||{},s=t.getFieldValue(o);return n="function"==typeof n?n(e,s,o):n,i.filters[t.definition.headerFilterFunc](e,s,o,n)}):console.warn("Header Filter Error - Matching filter function not found: ",t.definition.headerFilterFunc);break;case"function":o=function(o){var i=t.definition.headerFilterFuncParams||{},n=t.getFieldValue(o);return i="function"==typeof i?i(e,n,o):i,t.definition.headerFilterFunc(e,n,o,i)},r=o}if(!o)switch(s){case"partial":o=function(o){var i=t.getFieldValue(o);return void 0!==i&&null!==i&&String(i).toLowerCase().indexOf(String(e).toLowerCase())>-1},r="like";break;default:o=function(o){return t.getFieldValue(o)==e},r="="}i.headerFilters[n]={value:e,func:o,type:r}}i.changed=!0,i.table.rowManager.filterRefresh()}return!0}var i=this,n=t.getField();t.modules.filter={success:o,attrType:!1,tagType:!1,emptyFunc:!1},this.generateHeaderFilterElement(t)},E.prototype.generateHeaderFilterElement=function(t,e,o){function i(){}var n,s,r,a,l,c,u,d=this,h=this,p=t.modules.filter.success,m=t.getField();if(t.modules.filter.headerElement&&t.modules.filter.headerElement.parentNode&&t.contentElement.removeChild(t.modules.filter.headerElement.parentNode),m){switch(t.modules.filter.emptyFunc=t.definition.headerFilterEmptyCheck||function(t){return!t&&"0"!==t},n=document.createElement("div"),n.classList.add("tabulator-header-filter"),_typeof(t.definition.headerFilter)){case"string":h.table.modules.edit.editors[t.definition.headerFilter]?(s=h.table.modules.edit.editors[t.definition.headerFilter],"tick"!==t.definition.headerFilter&&"tickCross"!==t.definition.headerFilter||t.definition.headerFilterEmptyCheck||(t.modules.filter.emptyFunc=function(t){return!0!==t&&!1!==t})):console.warn("Filter Error - Cannot build header filter, No such editor found: ",t.definition.editor);break;case"function":s=t.definition.headerFilter;break;case"boolean":t.modules.edit&&t.modules.edit.editor?s=t.modules.edit.editor:t.definition.formatter&&h.table.modules.edit.editors[t.definition.formatter]?(s=h.table.modules.edit.editors[t.definition.formatter],"tick"!==t.definition.formatter&&"tickCross"!==t.definition.formatter||t.definition.headerFilterEmptyCheck||(t.modules.filter.emptyFunc=function(t){return!0!==t&&!1!==t})):s=h.table.modules.edit.editors.input}if(s){if(a={getValue:function(){return void 0!==e?e:""},getField:function(){return t.definition.field},getElement:function(){return n},getColumn:function(){return t.getComponent()},getRow:function(){return{normalizeHeight:function(){}}}},u=t.definition.headerFilterParams||{},u="function"==typeof u?u.call(h.table):u,!(r=s.call(this.table.modules.edit,a,function(){},p,i,u)))return void console.warn("Filter Error - Cannot add filter to "+m+" column, editor returned a value of false");if(!(r instanceof Node))return void console.warn("Filter Error - Cannot add filter to "+m+" column, editor should return an instance of Node, the editor returned:",r);m?h.table.modules.localize.bind("headerFilters|columns|"+t.definition.field,function(t){r.setAttribute("placeholder",void 0!==t&&t?t:h.table.modules.localize.getText("headerFilters|default"))}):h.table.modules.localize.bind("headerFilters|default",function(t){r.setAttribute("placeholder",void 0!==h.column.definition.headerFilterPlaceholder&&h.column.definition.headerFilterPlaceholder?h.column.definition.headerFilterPlaceholder:t)}),r.addEventListener("click",function(t){t.stopPropagation(),r.focus()}),r.addEventListener("focus",function(t){var e=d.table.columnManager.element.scrollLeft;e!==d.table.rowManager.element.scrollLeft&&(d.table.rowManager.scrollHorizontal(e),d.table.columnManager.scrollHorizontal(e))}),l=!1,c=function(t){l&&clearTimeout(l),l=setTimeout(function(){p(r.value)},300)},t.modules.filter.headerElement=r,t.modules.filter.attrType=r.hasAttribute("type")?r.getAttribute("type").toLowerCase():"",t.modules.filter.tagType=r.tagName.toLowerCase(),!1!==t.definition.headerFilterLiveFilter&&("autocomplete"!==t.definition.headerFilter&&"tickCross"!==t.definition.headerFilter&&("autocomplete"!==t.definition.editor&&"tickCross"!==t.definition.editor||!0!==t.definition.headerFilter)&&(r.addEventListener("keyup",c),r.addEventListener("search",c),"number"==t.modules.filter.attrType&&r.addEventListener("change",function(t){p(r.value)}),"text"==t.modules.filter.attrType&&"ie"!==this.table.browser&&r.setAttribute("type","search")),"input"!=t.modules.filter.tagType&&"select"!=t.modules.filter.tagType&&"textarea"!=t.modules.filter.tagType||r.addEventListener("mousedown",function(t){t.stopPropagation()})),n.appendChild(r),t.contentElement.appendChild(n),o||h.headerFilterColumns.push(t)}}else console.warn("Filter Error - Cannot add header filter, column has no field set:",t.definition.title)},E.prototype.hideHeaderFilterElements=function(){this.headerFilterColumns.forEach(function(t){t.modules.filter&&t.modules.filter.headerElement&&(t.modules.filter.headerElement.style.display="none")})},E.prototype.showHeaderFilterElements=function(){this.headerFilterColumns.forEach(function(t){t.modules.filter&&t.modules.filter.headerElement&&(t.modules.filter.headerElement.style.display="")})},E.prototype.setHeaderFilterFocus=function(t){t.modules.filter&&t.modules.filter.headerElement?t.modules.filter.headerElement.focus():console.warn("Column Filter Focus Error - No header filter set on column:",t.getField())},E.prototype.setHeaderFilterValue=function(t,e){t&&(t.modules.filter&&t.modules.filter.headerElement?(this.generateHeaderFilterElement(t,e,!0),t.modules.filter.success(e)):console.warn("Column Filter Error - No header filter set on column:",t.getField()))},E.prototype.reloadHeaderFilter=function(t){t&&(t.modules.filter&&t.modules.filter.headerElement?this.generateHeaderFilterElement(t,t.modules.filter.value,!0):console.warn("Column Filter Error - No header filter set on column:",t.getField()))},E.prototype.hasChanged=function(){var t=this.changed;return this.changed=!1,t},E.prototype.setFilter=function(t,e,o){var i=this;i.filterList=[],Array.isArray(t)||(t=[{field:t,type:e,value:o}]),i.addFilter(t)},E.prototype.addFilter=function(t,e,o){var i=this;Array.isArray(t)||(t=[{field:t,type:e,value:o}]),t.forEach(function(t){(t=i.findFilter(t))&&(i.filterList.push(t),i.changed=!0)}),this.table.options.persistence&&this.table.modExists("persistence",!0)&&this.table.modules.persistence.config.filter&&this.table.modules.persistence.save("filter")},E.prototype.findFilter=function(t){var e,o=this;if(Array.isArray(t))return this.findSubFilters(t);var i=!1;return"function"==typeof t.field?i=function(e){return t.field(e,t.type||{})}:o.filters[t.type]?(e=o.table.columnManager.getColumnByField(t.field),i=e?function(i){return o.filters[t.type](t.value,e.getFieldValue(i))}:function(e){return o.filters[t.type](t.value,e[t.field])}):console.warn("Filter Error - No such filter type found, ignoring: ",t.type),t.func=i,!!t.func&&t},E.prototype.findSubFilters=function(t){var e=this,o=[];return t.forEach(function(t){(t=e.findFilter(t))&&o.push(t)}),!!o.length&&o},E.prototype.getFilters=function(t,e){var o=[];return t&&(o=this.getHeaderFilters()),e&&o.forEach(function(t){"function"==typeof t.type&&(t.type="function")}),o=o.concat(this.filtersToArray(this.filterList,e))},E.prototype.filtersToArray=function(t,e){var o=this,i=[];return t.forEach(function(t){var n;Array.isArray(t)?i.push(o.filtersToArray(t,e)):(n={field:t.field,type:t.type,value:t.value},e&&"function"==typeof n.type&&(n.type="function"),i.push(n))}),i},E.prototype.getHeaderFilters=function(){var t=[];for(var e in this.headerFilters)t.push({field:e,type:this.headerFilters[e].type,value:this.headerFilters[e].value});return t},E.prototype.removeFilter=function(t,e,o){var i=this;Array.isArray(t)||(t=[{field:t,type:e,value:o}]),t.forEach(function(t){var e=-1;e="object"==_typeof(t.field)?i.filterList.findIndex(function(e){return t===e}):i.filterList.findIndex(function(e){return t.field===e.field&&t.type===e.type&&t.value===e.value}),e>-1?(i.filterList.splice(e,1),i.changed=!0):console.warn("Filter Error - No matching filter type found, ignoring: ",t.type)}),this.table.options.persistence&&this.table.modExists("persistence",!0)&&this.table.modules.persistence.config.filter&&this.table.modules.persistence.save("filter")},E.prototype.clearFilter=function(t){this.filterList=[],t&&this.clearHeaderFilter(),this.changed=!0,this.table.options.persistence&&this.table.modExists("persistence",!0)&&this.table.modules.persistence.config.filter&&this.table.modules.persistence.save("filter")},E.prototype.clearHeaderFilter=function(){var t=this;this.headerFilters={},this.headerFilterColumns.forEach(function(e){e.modules.filter.value=null,e.modules.filter.prevSuccess=void 0,t.reloadHeaderFilter(e)}),this.changed=!0},E.prototype.search=function(t,e,o,i){var n=this,s=[],r=[];return Array.isArray(e)||(e=[{field:e,type:o,value:i}]),e.forEach(function(t){(t=n.findFilter(t))&&r.push(t)}),this.table.rowManager.rows.forEach(function(e){var o=!0;r.forEach(function(t){n.filterRecurse(t,e.getData())||(o=!1)}),o&&s.push("data"===t?e.getData("data"):e.getComponent())}),s},E.prototype.filter=function(t,e){var o=this,i=[],n=[];return o.table.options.dataFiltering&&o.table.options.dataFiltering.call(o.table,o.getFilters()),o.table.options.ajaxFiltering||!o.filterList.length&&!Object.keys(o.headerFilters).length?i=t.slice(0):t.forEach(function(t){o.filterRow(t)&&i.push(t)}),o.table.options.dataFiltered&&(i.forEach(function(t){n.push(t.getComponent())}),o.table.options.dataFiltered.call(o.table,o.getFilters(),n)),i},E.prototype.filterRow=function(t,e){var o=this,i=!0,n=t.getData();o.filterList.forEach(function(t){o.filterRecurse(t,n)||(i=!1)});for(var s in o.headerFilters)o.headerFilters[s].func(n)||(i=!1);return i},E.prototype.filterRecurse=function(t,e){var o=this,i=!1;return Array.isArray(t)?t.forEach(function(t){o.filterRecurse(t,e)&&(i=!0)}):i=t.func(e),i},E.prototype.filters={"=":function(t,e,o,i){return e==t},"<":function(t,e,o,i){return e<t},"<=":function(t,e,o,i){return e<=t},">":function(t,e,o,i){return e>t},">=":function(t,e,o,i){return e>=t},"!=":function(t,e,o,i){return e!=t},regex:function(t,e,o,i){return"string"==typeof t&&(t=new RegExp(t)),t.test(e)},like:function(t,e,o,i){return null===t||void 0===t?e===t:void 0!==e&&null!==e&&String(e).toLowerCase().indexOf(t.toLowerCase())>-1},in:function(t,e,o,i){return Array.isArray(t)?t.indexOf(e)>-1:(console.warn("Filter Error - filter value is not an array:",t),!1)}},u.prototype.registerModule("filter",E);var C=function(t){this.table=t};C.prototype.initializeColumn=function(t){var e=this,o={params:t.definition.formatterParams||{}};switch(_typeof(t.definition.formatter)){case"string":"tick"===t.definition.formatter&&(t.definition.formatter="tickCross",void 0===o.params.crossElement&&(o.params.crossElement=!1),console.warn("DEPRECATION WARNING - the tick formatter has been deprecated, please use the tickCross formatter with the crossElement param set to false")),e.formatters[t.definition.formatter]?o.formatter=e.formatters[t.definition.formatter]:(console.warn("Formatter Error - No such formatter found: ",t.definition.formatter),o.formatter=e.formatters.plaintext);break;case"function":o.formatter=t.definition.formatter;break;default:o.formatter=e.formatters.plaintext}t.modules.format=o},C.prototype.cellRendered=function(t){t.modules.format&&t.modules.format.renderedCallback&&t.modules.format.renderedCallback()},C.prototype.formatValue=function(t){function e(e){t.modules.format||(t.modules.format={}),t.modules.format.renderedCallback=e}var o=t.getComponent(),i="function"==typeof t.column.modules.format.params?t.column.modules.format.params(o):t.column.modules.format.params;return t.column.modules.format.formatter.call(this,o,i,e)},C.prototype.sanitizeHTML=function(t){if(t){var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};return String(t).replace(/[&<>"'`=\/]/g,function(t){return e[t]})}return t},C.prototype.emptyToSpace=function(t){return null===t||void 0===t?"&nbsp;":t},C.prototype.getFormatter=function(t){var t;switch(void 0===t?"undefined":_typeof(t)){case"string":this.formatters[t]?t=this.formatters[t]:(console.warn("Formatter Error - No such formatter found: ",t),t=this.formatters.plaintext);break;case"function":t=t;break;default:t=this.formatters.plaintext}return t},C.prototype.formatters={plaintext:function(t,e,o){return this.emptyToSpace(this.sanitizeHTML(t.getValue()))},html:function(t,e,o){return t.getValue()},textarea:function(t,e,o){return t.getElement().style.whiteSpace="pre-wrap",this.emptyToSpace(this.sanitizeHTML(t.getValue()))},money:function(t,e,o){var i,n,s,r,a=parseFloat(t.getValue()),l=e.decimal||".",c=e.thousand||",",u=e.symbol||"",d=!!e.symbolAfter,h=void 0!==e.precision?e.precision:2;if(isNaN(a))return this.emptyToSpace(this.sanitizeHTML(t.getValue()));for(i=!1!==h?a.toFixed(h):a,i=String(i).split("."),n=i[0],s=i.length>1?l+i[1]:"",r=/(\d+)(\d{3})/;r.test(n);)n=n.replace(r,"$1"+c+"$2");return d?n+s+u:u+n+s},link:function(t,e,o){var i,n=t.getValue(),s=e.urlPrefix||"",r=e.download,a=n,l=document.createElement("a");if(e.labelField&&(i=t.getData(),a=i[e.labelField]),e.label)switch(_typeof(e.label)){case"string":a=e.label;break;case"function":a=e.label(t)}if(a){if(e.urlField&&(i=t.getData(),n=i[e.urlField]),e.url)switch(_typeof(e.url)){case"string":n=e.url;break;case"function":n=e.url(t)}return l.setAttribute("href",s+n),e.target&&l.setAttribute("target",e.target),e.download&&(r="function"==typeof r?r(t):!0===r?"":r,l.setAttribute("download",r)),l.innerHTML=this.emptyToSpace(this.sanitizeHTML(a)),l}return"&nbsp;"},image:function(t,e,o){var i=document.createElement("img");switch(i.setAttribute("src",t.getValue()),_typeof(e.height)){case"number":i.style.height=e.height+"px";break;case"string":i.style.height=e.height}switch(_typeof(e.width)){case"number":i.style.width=e.width+"px";break;case"string":i.style.width=e.width}return i.addEventListener("load",function(){t.getRow().normalizeHeight()}),i},tickCross:function(t,e,o){var i=t.getValue(),n=t.getElement(),s=e.allowEmpty,r=e.allowTruthy,a=void 0!==e.tickElement?e.tickElement:'<svg enable-background="new 0 0 24 24" height="14" width="14" viewBox="0 0 24 24" xml:space="preserve" ><path fill="#2DC214" clip-rule="evenodd" d="M21.652,3.211c-0.293-0.295-0.77-0.295-1.061,0L9.41,14.34  c-0.293,0.297-0.771,0.297-1.062,0L3.449,9.351C3.304,9.203,3.114,9.13,2.923,9.129C2.73,9.128,2.534,9.201,2.387,9.351  l-2.165,1.946C0.078,11.445,0,11.63,0,11.823c0,0.194,0.078,0.397,0.223,0.544l4.94,5.184c0.292,0.296,0.771,0.776,1.062,1.07  l2.124,2.141c0.292,0.293,0.769,0.293,1.062,0l14.366-14.34c0.293-0.294,0.293-0.777,0-1.071L21.652,3.211z" fill-rule="evenodd"/></svg>',l=void 0!==e.crossElement?e.crossElement:'<svg enable-background="new 0 0 24 24" height="14" width="14"  viewBox="0 0 24 24" xml:space="preserve" ><path fill="#CE1515" d="M22.245,4.015c0.313,0.313,0.313,0.826,0,1.139l-6.276,6.27c-0.313,0.312-0.313,0.826,0,1.14l6.273,6.272  c0.313,0.313,0.313,0.826,0,1.14l-2.285,2.277c-0.314,0.312-0.828,0.312-1.142,0l-6.271-6.271c-0.313-0.313-0.828-0.313-1.141,0  l-6.276,6.267c-0.313,0.313-0.828,0.313-1.141,0l-2.282-2.28c-0.313-0.313-0.313-0.826,0-1.14l6.278-6.269  c0.313-0.312,0.313-0.826,0-1.14L1.709,5.147c-0.314-0.313-0.314-0.827,0-1.14l2.284-2.278C4.308,1.417,4.821,1.417,5.135,1.73  L11.405,8c0.314,0.314,0.828,0.314,1.141,0.001l6.276-6.267c0.312-0.312,0.826-0.312,1.141,0L22.245,4.015z"/></svg>';return r&&i||!0===i||"true"===i||"True"===i||1===i||"1"===i?(n.setAttribute("aria-checked",!0),a||""):!s||"null"!==i&&""!==i&&null!==i&&void 0!==i?(n.setAttribute("aria-checked",!1),l||""):(n.setAttribute("aria-checked","mixed"),"")},datetime:function(t,e,o){var i=e.inputFormat||"YYYY-MM-DD hh:mm:ss",n=e.outputFormat||"DD/MM/YYYY hh:mm:ss",s=void 0!==e.invalidPlaceholder?e.invalidPlaceholder:"",r=t.getValue(),a=moment(r,i);return a.isValid()?a.format(n):!0===s?r:"function"==typeof s?s(r):s},datetimediff:function(t,e,o){var i=e.inputFormat||"YYYY-MM-DD hh:mm:ss",n=void 0!==e.invalidPlaceholder?e.invalidPlaceholder:"",s=void 0!==e.suffix&&e.suffix,r=void 0!==e.unit?e.unit:void 0,a=void 0!==e.humanize&&e.humanize,l=void 0!==e.date?e.date:moment(),c=t.getValue(),u=moment(c,i);return u.isValid()?a?moment.duration(u.diff(l)).humanize(s):u.diff(l,r)+(s?" "+s:""):!0===n?c:"function"==typeof n?n(c):n},lookup:function(t,e,o){var i=t.getValue();return void 0===e[i]?(console.warn("Missing display value for "+i),i):e[i]},star:function(t,e,o){var i=t.getValue(),n=t.getElement(),s=e&&e.stars?e.stars:5,r=document.createElement("span"),a=document.createElementNS("http://www.w3.org/2000/svg","svg");r.style.verticalAlign="middle",a.setAttribute("width","14"),a.setAttribute("height","14"),a.setAttribute("viewBox","0 0 512 512"),a.setAttribute("xml:space","preserve"),a.style.padding="0 1px",i=i&&!isNaN(i)?parseInt(i):0,i=Math.max(0,Math.min(i,s));for(var l=1;l<=s;l++){var c=a.cloneNode(!0);c.innerHTML=l<=i?'<polygon fill="#FFEA00" stroke="#C1AB60" stroke-width="37.6152" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="259.216,29.942 330.27,173.919 489.16,197.007 374.185,309.08 401.33,467.31 259.216,392.612 117.104,467.31 144.25,309.08 29.274,197.007 188.165,173.919 "/>':'<polygon fill="#D2D2D2" stroke="#686868" stroke-width="37.6152" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="259.216,29.942 330.27,173.919 489.16,197.007 374.185,309.08 401.33,467.31 259.216,392.612 117.104,467.31 144.25,309.08 29.274,197.007 188.165,173.919 "/>',r.appendChild(c)}return n.style.whiteSpace="nowrap",n.style.overflow="hidden",n.style.textOverflow="ellipsis",n.setAttribute("aria-label",i),r},traffic:function(t,e,o){var i,n,s=this.sanitizeHTML(t.getValue())||0,r=document.createElement("span"),a=e&&e.max?e.max:100,l=e&&e.min?e.min:0,c=e&&void 0!==e.color?e.color:["red","orange","green"],u="#666666";if(!isNaN(s)&&void 0!==t.getValue()){switch(r.classList.add("tabulator-traffic-light"),n=parseFloat(s)<=a?parseFloat(s):a,n=parseFloat(n)>=l?parseFloat(n):l,i=(a-l)/100,n=Math.round((n-l)/i),void 0===c?"undefined":_typeof(c)){case"string":u=c;break;case"function":u=c(s);break;case"object":if(Array.isArray(c)){var d=100/c.length,h=Math.floor(n/d);h=Math.min(h,c.length-1),h=Math.max(h,0),u=c[h];break}}return r.style.backgroundColor=u,r}},progress:function(t,e,o){var i,n,s,r,a,l=this.sanitizeHTML(t.getValue())||0,c=t.getElement(),u=e&&e.max?e.max:100,d=e&&e.min?e.min:0,h=e&&e.legendAlign?e.legendAlign:"center";switch(n=parseFloat(l)<=u?parseFloat(l):u,n=parseFloat(n)>=d?parseFloat(n):d,i=(u-d)/100,n=Math.round((n-d)/i),_typeof(e.color)){case"string":s=e.color;break;case"function":s=e.color(l);break;case"object":if(Array.isArray(e.color)){var p=100/e.color.length,m=Math.floor(n/p);m=Math.min(m,e.color.length-1),m=Math.max(m,0),s=e.color[m];break}default:s="#2DC214"}switch(_typeof(e.legend)){case"string":r=e.legend;break;case"function":r=e.legend(l);break;case"boolean":r=l;break;default:r=!1}switch(_typeof(e.legendColor)){case"string":a=e.legendColor;break;case"function":a=e.legendColor(l);break;case"object":if(Array.isArray(e.legendColor)){var p=100/e.legendColor.length,m=Math.floor(n/p);m=Math.min(m,e.legendColor.length-1),m=Math.max(m,0),a=e.legendColor[m]}break;default:a="#000"}c.style.minWidth="30px",c.style.position="relative",c.setAttribute("aria-label",n);var f=document.createElement("div");if(f.style.display="inline-block",f.style.position="relative",f.style.width=n+"%",f.style.backgroundColor=s,f.style.height="100%",f.setAttribute("data-max",u),f.setAttribute("data-min",d),r){var g=document.createElement("div");g.style.position="absolute",g.style.top="4px",g.style.left=0,g.style.textAlign=h,g.style.width="100%",g.style.color=a,g.innerHTML=r}return o(function(){c.appendChild(f),r&&c.appendChild(g)}),""},color:function(t,e,o){return t.getElement().style.backgroundColor=this.sanitizeHTML(t.getValue()),""},buttonTick:function(t,e,o){return'<svg enable-background="new 0 0 24 24" height="14" width="14" viewBox="0 0 24 24" xml:space="preserve" ><path fill="#2DC214" clip-rule="evenodd" d="M21.652,3.211c-0.293-0.295-0.77-0.295-1.061,0L9.41,14.34  c-0.293,0.297-0.771,0.297-1.062,0L3.449,9.351C3.304,9.203,3.114,9.13,2.923,9.129C2.73,9.128,2.534,9.201,2.387,9.351  l-2.165,1.946C0.078,11.445,0,11.63,0,11.823c0,0.194,0.078,0.397,0.223,0.544l4.94,5.184c0.292,0.296,0.771,0.776,1.062,1.07  l2.124,2.141c0.292,0.293,0.769,0.293,1.062,0l14.366-14.34c0.293-0.294,0.293-0.777,0-1.071L21.652,3.211z" fill-rule="evenodd"/></svg>'},buttonCross:function(t,e,o){return'<svg enable-background="new 0 0 24 24" height="14" width="14" viewBox="0 0 24 24" xml:space="preserve" ><path fill="#CE1515" d="M22.245,4.015c0.313,0.313,0.313,0.826,0,1.139l-6.276,6.27c-0.313,0.312-0.313,0.826,0,1.14l6.273,6.272  c0.313,0.313,0.313,0.826,0,1.14l-2.285,2.277c-0.314,0.312-0.828,0.312-1.142,0l-6.271-6.271c-0.313-0.313-0.828-0.313-1.141,0  l-6.276,6.267c-0.313,0.313-0.828,0.313-1.141,0l-2.282-2.28c-0.313-0.313-0.313-0.826,0-1.14l6.278-6.269  c0.313-0.312,0.313-0.826,0-1.14L1.709,5.147c-0.314-0.313-0.314-0.827,0-1.14l2.284-2.278C4.308,1.417,4.821,1.417,5.135,1.73  L11.405,8c0.314,0.314,0.828,0.314,1.141,0.001l6.276-6.267c0.312-0.312,0.826-0.312,1.141,0L22.245,4.015z"/></svg>'},rownum:function(t,e,o){return this.table.rowManager.activeRows.indexOf(t.getRow()._getSelf())+1},handle:function(t,e,o){return t.getElement().classList.add("tabulator-row-handle"),"<div class='tabulator-row-handle-box'><div class='tabulator-row-handle-bar'></div><div class='tabulator-row-handle-bar'></div><div class='tabulator-row-handle-bar'></div></div>"},responsiveCollapse:function(t,e,o){function i(t){var e=s.element;s.open=t,e&&(s.open?(n.classList.add("open"),e.style.display=""):(n.classList.remove("open"),e.style.display="none"))}var n=document.createElement("div"),s=t.getRow()._row.modules.responsiveLayout;return n.classList.add("tabulator-responsive-collapse-toggle"),n.innerHTML="<span class='tabulator-responsive-collapse-toggle-open'>+</span><span class='tabulator-responsive-collapse-toggle-close'>-</span>",t.getElement().classList.add("tabulator-row-handle"),n.addEventListener("click",function(t){t.stopImmediatePropagation(),i(!s.open)}),i(s.open),n},rowSelection:function(t){var e=this,o=document.createElement("input");if(o.type="checkbox",this.table.modExists("selectRow",!0))if(o.addEventListener("click",function(t){t.stopPropagation()}),"function"==typeof t.getRow){var i=t.getRow();o.addEventListener("change",function(t){i.toggleSelect()}),o.checked=i.isSelected(),this.table.modules.selectRow.registerRowSelectCheckbox(i,o)}else o.addEventListener("change",function(t){e.table.modules.selectRow.selectedRows.length?e.table.deselectRow():e.table.selectRow()}),this.table.modules.selectRow.registerHeaderSelectCheckbox(o);return o}},u.prototype.registerModule("format",C);var R=function(t){this.table=t,this.leftColumns=[],this.rightColumns=[],this.leftMargin=0,this.rightMargin=0,this.rightPadding=0,this.initializationMode="left",this.active=!1,this.scrollEndTimer=!1};R.prototype.reset=function(){this.initializationMode="left",this.leftColumns=[],this.rightColumns=[],this.leftMargin=0,this.rightMargin=0,this.rightMargin=0,this.active=!1,this.table.columnManager.headersElement.style.marginLeft=0,this.table.columnManager.element.style.paddingRight=0},R.prototype.initializeColumn=function(t){var e={margin:0,edge:!1};t.definition.frozen?t.parent.isGroup?console.warn("Frozen Column Error - Grouped columns cannot be frozen"):t.isGroup?console.warn("Frozen Column Error - Column Groups cannot be frozen"):(e.position=this.initializationMode,"left"==this.initializationMode?this.leftColumns.push(t):this.rightColumns.unshift(t),this.active=!0,t.modules.frozen=e):this.initializationMode="right"},R.prototype.scrollHorizontal=function(){var t,e=this;this.active&&(clearTimeout(this.scrollEndTimer),this.scrollEndTimer=setTimeout(function(){e.layout()},100),t=this.table.rowManager.getVisibleRows(),this.calcMargins(),this.layoutColumnPosition(),this.layoutCalcRows(),t.forEach(function(t){"row"===t.type&&e.layoutRow(t)}),this.table.rowManager.tableElement.style.marginRight=this.rightMargin)},R.prototype.calcMargins=function(){this.leftMargin=this._calcSpace(this.leftColumns,this.leftColumns.length)+"px",this.table.columnManager.headersElement.style.marginLeft=this.leftMargin,this.rightMargin=this._calcSpace(this.rightColumns,this.rightColumns.length)+"px",this.table.columnManager.element.style.paddingRight=this.rightMargin,this.rightPadding=this.table.rowManager.element.clientWidth+this.table.columnManager.scrollLeft},R.prototype.layoutCalcRows=function(){this.table.modExists("columnCalcs")&&(this.table.modules.columnCalcs.topInitialized&&this.table.modules.columnCalcs.topRow&&this.layoutRow(this.table.modules.columnCalcs.topRow),this.table.modules.columnCalcs.botInitialized&&this.table.modules.columnCalcs.botRow&&this.layoutRow(this.table.modules.columnCalcs.botRow))},R.prototype.layoutColumnPosition=function(t){var e=this;this.leftColumns.forEach(function(o,i){o.modules.frozen.margin=e._calcSpace(e.leftColumns,i)+e.table.columnManager.scrollLeft+"px",i==e.leftColumns.length-1?o.modules.frozen.edge=!0:o.modules.frozen.edge=!1,e.layoutElement(o.getElement(),o),t&&o.cells.forEach(function(t){e.layoutElement(t.getElement(),o)})}),this.rightColumns.forEach(function(o,i){o.modules.frozen.margin=e.rightPadding-e._calcSpace(e.rightColumns,i+1)+"px",i==e.rightColumns.length-1?o.modules.frozen.edge=!0:o.modules.frozen.edge=!1,e.layoutElement(o.getElement(),o),t&&o.cells.forEach(function(t){e.layoutElement(t.getElement(),o)})})},R.prototype.layout=function(){var t=this;t.active&&(this.calcMargins(),t.table.rowManager.getDisplayRows().forEach(function(e){"row"===e.type&&t.layoutRow(e)}),this.layoutCalcRows(),this.layoutColumnPosition(!0),this.table.rowManager.tableElement.style.marginRight=this.rightMargin)},R.prototype.layoutRow=function(t){var e=this;t.getElement().style.paddingLeft=this.leftMargin,this.leftColumns.forEach(function(o){var i=t.getCell(o);i&&e.layoutElement(i.getElement(),o)}),this.rightColumns.forEach(function(o){var i=t.getCell(o);i&&e.layoutElement(i.getElement(),o)})},R.prototype.layoutElement=function(t,e){e.modules.frozen&&(t.style.position="absolute",t.style.left=e.modules.frozen.margin,t.classList.add("tabulator-frozen"),e.modules.frozen.edge&&t.classList.add("tabulator-frozen-"+e.modules.frozen.position))},R.prototype._calcSpace=function(t,e){for(var o=0,i=0;i<e;i++)t[i].visible&&(o+=t[i].getWidth());return o},u.prototype.registerModule("frozenColumns",R);var x=function(t){this.table=t,this.topElement=document.createElement("div"),this.rows=[],this.displayIndex=0};x.prototype.initialize=function(){this.rows=[],this.topElement.classList.add("tabulator-frozen-rows-holder"),this.table.columnManager.getElement().insertBefore(this.topElement,this.table.columnManager.headersElement.nextSibling)},x.prototype.setDisplayIndex=function(t){this.displayIndex=t},x.prototype.getDisplayIndex=function(){return this.displayIndex},x.prototype.isFrozen=function(){return!!this.rows.length},x.prototype.getRows=function(t){var e=t.slice(0);return this.rows.forEach(function(t){var o=e.indexOf(t);o>-1&&e.splice(o,1)}),e},x.prototype.freezeRow=function(t){t.modules.frozen?console.warn("Freeze Error - Row is already frozen"):(t.modules.frozen=!0,this.topElement.appendChild(t.getElement()),t.initialize(),t.normalizeHeight(),this.table.rowManager.adjustTableSize(),this.rows.push(t),this.table.rowManager.refreshActiveData("display"),this.styleRows())},x.prototype.unfreezeRow=function(t){var e=this.rows.indexOf(t);if(t.modules.frozen){t.modules.frozen=!1;var o=t.getElement();o.parentNode.removeChild(o),this.table.rowManager.adjustTableSize(),this.rows.splice(e,1),this.table.rowManager.refreshActiveData("display"),this.rows.length&&this.styleRows()}else console.warn("Freeze Error - Row is already unfrozen")},x.prototype.styleRows=function(t){var e=this;this.rows.forEach(function(t,o){e.table.rowManager.styleRow(t,o)})},u.prototype.registerModule("frozenRows",x);var M=function(t){this._group=t,this.type="GroupComponent"};M.prototype.getKey=function(){return this._group.key},M.prototype.getField=function(){return this._group.field},M.prototype.getElement=function(){return this._group.element},M.prototype.getRows=function(){return this._group.getRows(!0)},M.prototype.getSubGroups=function(){return this._group.getSubGroups(!0)},M.prototype.getParentGroup=function(){return!!this._group.parent&&this._group.parent.getComponent()},M.prototype.getVisibility=function(){return this._group.visible},M.prototype.show=function(){this._group.show()},M.prototype.hide=function(){this._group.hide()},M.prototype.toggle=function(){this._group.toggleVisibility()},M.prototype._getSelf=function(){return this._group},M.prototype.getTable=function(){return this._group.groupManager.table};var D=function(t,e,o,i,n,s,r){this.groupManager=t,this.parent=e,this.key=i,this.level=o,this.field=n,this.hasSubGroups=o<t.groupIDLookups.length-1,this.addRow=this.hasSubGroups?this._addRowToGroup:this._addRow,this.type="group",this.old=r,this.rows=[],this.groups=[],this.groupList=[],this.generator=s,this.elementContents=!1,this.height=0,this.outerHeight=0,this.initialized=!1,this.calcs={},this.initialized=!1,this.modules={},this.arrowElement=!1,this.visible=r?r.visible:void 0!==t.startOpen[o]?t.startOpen[o]:t.startOpen[0],this.createElements(),this.addBindings(),this.createValueGroups()};D.prototype.wipe=function(){this.groupList.length?this.groupList.forEach(function(t){t.wipe()}):(this.element=!1,this.arrowElement=!1,this.elementContents=!1)},D.prototype.createElements=function(){var t=document.createElement("div");t.classList.add("tabulator-arrow"),this.element=document.createElement("div"),this.element.classList.add("tabulator-row"),this.element.classList.add("tabulator-group"),this.element.classList.add("tabulator-group-level-"+this.level),this.element.setAttribute("role","rowgroup"),this.arrowElement=document.createElement("div"),this.arrowElement.classList.add("tabulator-group-toggle"),this.arrowElement.appendChild(t),!1!==this.groupManager.table.options.movableRows&&this.groupManager.table.modExists("moveRow")&&this.groupManager.table.modules.moveRow.initializeGroupHeader(this)},D.prototype.createValueGroups=function(){var t=this,e=this.level+1;this.groupManager.allowedValues&&this.groupManager.allowedValues[e]&&this.groupManager.allowedValues[e].forEach(function(o){t._createGroup(o,e)})},
D.prototype.addBindings=function(){var t,e,o,i,n=this;n.groupManager.table.options.groupClick&&n.element.addEventListener("click",function(t){n.groupManager.table.options.groupClick.call(n.groupManager.table,t,n.getComponent())}),n.groupManager.table.options.groupDblClick&&n.element.addEventListener("dblclick",function(t){n.groupManager.table.options.groupDblClick.call(n.groupManager.table,t,n.getComponent())}),n.groupManager.table.options.groupContext&&n.element.addEventListener("contextmenu",function(t){n.groupManager.table.options.groupContext.call(n.groupManager.table,t,n.getComponent())}),n.groupManager.table.options.groupTap&&(o=!1,n.element.addEventListener("touchstart",function(t){o=!0},{passive:!0}),n.element.addEventListener("touchend",function(t){o&&n.groupManager.table.options.groupTap(t,n.getComponent()),o=!1})),n.groupManager.table.options.groupDblTap&&(t=null,n.element.addEventListener("touchend",function(e){t?(clearTimeout(t),t=null,n.groupManager.table.options.groupDblTap(e,n.getComponent())):t=setTimeout(function(){clearTimeout(t),t=null},300)})),n.groupManager.table.options.groupTapHold&&(e=null,n.element.addEventListener("touchstart",function(t){clearTimeout(e),e=setTimeout(function(){clearTimeout(e),e=null,o=!1,n.groupManager.table.options.groupTapHold(t,n.getComponent())},1e3)},{passive:!0}),n.element.addEventListener("touchend",function(t){clearTimeout(e),e=null})),n.groupManager.table.options.groupToggleElement&&(i="arrow"==n.groupManager.table.options.groupToggleElement?n.arrowElement:n.element,i.addEventListener("click",function(t){t.stopPropagation(),t.stopImmediatePropagation(),n.toggleVisibility()}))},D.prototype._createGroup=function(t,e){var o=e+"_"+t,i=new D(this.groupManager,this,e,t,this.groupManager.groupIDLookups[e].field,this.groupManager.headerGenerator[e]||this.groupManager.headerGenerator[0],!!this.old&&this.old.groups[o]);this.groups[o]=i,this.groupList.push(i)},D.prototype._addRowToGroup=function(t){var e=this.level+1;if(this.hasSubGroups){var o=this.groupManager.groupIDLookups[e].func(t.getData()),i=e+"_"+o;this.groupManager.allowedValues&&this.groupManager.allowedValues[e]?this.groups[i]&&this.groups[i].addRow(t):(this.groups[i]||this._createGroup(o,e),this.groups[i].addRow(t))}},D.prototype._addRow=function(t){this.rows.push(t),t.modules.group=this},D.prototype.insertRow=function(t,e,o){var i=this.conformRowData({});t.updateData(i);var n=this.rows.indexOf(e);n>-1?o?this.rows.splice(n+1,0,t):this.rows.splice(n,0,t):o?this.rows.push(t):this.rows.unshift(t),t.modules.group=this,this.generateGroupHeaderContents(),this.groupManager.table.modExists("columnCalcs")&&"table"!=this.groupManager.table.options.columnCalcs&&this.groupManager.table.modules.columnCalcs.recalcGroup(this),this.groupManager.updateGroupRows(!0)},D.prototype.scrollHeader=function(t){this.arrowElement.style.marginLeft=t,this.groupList.forEach(function(e){e.scrollHeader(t)})},D.prototype.getRowIndex=function(t){},D.prototype.conformRowData=function(t){return this.field?t[this.field]=this.key:console.warn("Data Conforming Error - Cannot conform row data to match new group as groupBy is a function"),this.parent&&(t=this.parent.conformRowData(t)),t},D.prototype.removeRow=function(t){var e=this.rows.indexOf(t),o=t.getElement();e>-1&&this.rows.splice(e,1),this.groupManager.table.options.groupValues||this.rows.length?(o.parentNode&&o.parentNode.removeChild(o),this.generateGroupHeaderContents(),this.groupManager.table.modExists("columnCalcs")&&"table"!=this.groupManager.table.options.columnCalcs&&this.groupManager.table.modules.columnCalcs.recalcGroup(this)):(this.parent?this.parent.removeGroup(this):this.groupManager.removeGroup(this),this.groupManager.updateGroupRows(!0))},D.prototype.removeGroup=function(t){var e,o=t.level+"_"+t.key;this.groups[o]&&(delete this.groups[o],e=this.groupList.indexOf(t),e>-1&&this.groupList.splice(e,1),this.groupList.length||(this.parent?this.parent.removeGroup(this):this.groupManager.removeGroup(this)))},D.prototype.getHeadersAndRows=function(t){var e=[];return e.push(this),this._visSet(),this.visible?this.groupList.length?this.groupList.forEach(function(o){e=e.concat(o.getHeadersAndRows(t))}):(!t&&"table"!=this.groupManager.table.options.columnCalcs&&this.groupManager.table.modExists("columnCalcs")&&this.groupManager.table.modules.columnCalcs.hasTopCalcs()&&(this.calcs.top&&(this.calcs.top.detachElement(),this.calcs.top.deleteCells()),this.calcs.top=this.groupManager.table.modules.columnCalcs.generateTopRow(this.rows),e.push(this.calcs.top)),e=e.concat(this.rows),!t&&"table"!=this.groupManager.table.options.columnCalcs&&this.groupManager.table.modExists("columnCalcs")&&this.groupManager.table.modules.columnCalcs.hasBottomCalcs()&&(this.calcs.bottom&&(this.calcs.bottom.detachElement(),this.calcs.bottom.deleteCells()),this.calcs.bottom=this.groupManager.table.modules.columnCalcs.generateBottomRow(this.rows),e.push(this.calcs.bottom))):this.groupList.length||"table"==this.groupManager.table.options.columnCalcs||this.groupManager.table.modExists("columnCalcs")&&(!t&&this.groupManager.table.modules.columnCalcs.hasTopCalcs()&&(this.calcs.top&&(this.calcs.top.detachElement(),this.calcs.top.deleteCells()),this.groupManager.table.options.groupClosedShowCalcs&&(this.calcs.top=this.groupManager.table.modules.columnCalcs.generateTopRow(this.rows),e.push(this.calcs.top))),!t&&this.groupManager.table.modules.columnCalcs.hasBottomCalcs()&&(this.calcs.bottom&&(this.calcs.bottom.detachElement(),this.calcs.bottom.deleteCells()),this.groupManager.table.options.groupClosedShowCalcs&&(this.calcs.bottom=this.groupManager.table.modules.columnCalcs.generateBottomRow(this.rows),e.push(this.calcs.bottom)))),e},D.prototype.getData=function(t,e){var o=[];return this._visSet(),(!t||t&&this.visible)&&this.rows.forEach(function(t){o.push(t.getData(e||"data"))}),o},D.prototype.getRowCount=function(){var t=0;return this.groupList.length?this.groupList.forEach(function(e){t+=e.getRowCount()}):t=this.rows.length,t},D.prototype.toggleVisibility=function(){this.visible?this.hide():this.show()},D.prototype.hide=function(){this.visible=!1,"classic"!=this.groupManager.table.rowManager.getRenderMode()||this.groupManager.table.options.pagination?this.groupManager.updateGroupRows(!0):(this.element.classList.remove("tabulator-group-visible"),this.groupList.length?this.groupList.forEach(function(t){t.getHeadersAndRows().forEach(function(t){t.detachElement()})}):this.rows.forEach(function(t){var e=t.getElement();e.parentNode.removeChild(e)}),this.groupManager.table.rowManager.setDisplayRows(this.groupManager.updateGroupRows(),this.groupManager.getDisplayIndex()),this.groupManager.table.rowManager.checkClassicModeGroupHeaderWidth()),this.groupManager.table.options.groupVisibilityChanged.call(this.table,this.getComponent(),!1)},D.prototype.show=function(){var t=this;if(t.visible=!0,"classic"!=this.groupManager.table.rowManager.getRenderMode()||this.groupManager.table.options.pagination)this.groupManager.updateGroupRows(!0);else{this.element.classList.add("tabulator-group-visible");var e=t.getElement();this.groupList.length?this.groupList.forEach(function(t){t.getHeadersAndRows().forEach(function(t){var o=t.getElement();e.parentNode.insertBefore(o,e.nextSibling),t.initialize(),e=o})}):t.rows.forEach(function(t){var o=t.getElement();e.parentNode.insertBefore(o,e.nextSibling),t.initialize(),e=o}),this.groupManager.table.rowManager.setDisplayRows(this.groupManager.updateGroupRows(),this.groupManager.getDisplayIndex()),this.groupManager.table.rowManager.checkClassicModeGroupHeaderWidth()}this.groupManager.table.options.groupVisibilityChanged.call(this.table,this.getComponent(),!0)},D.prototype._visSet=function(){var t=[];"function"==typeof this.visible&&(this.rows.forEach(function(e){t.push(e.getData())}),this.visible=this.visible(this.key,this.getRowCount(),t,this.getComponent()))},D.prototype.getRowGroup=function(t){var e=!1;return this.groupList.length?this.groupList.forEach(function(o){var i=o.getRowGroup(t);i&&(e=i)}):this.rows.find(function(e){return e===t})&&(e=this),e},D.prototype.getSubGroups=function(t){var e=[];return this.groupList.forEach(function(o){e.push(t?o.getComponent():o)}),e},D.prototype.getRows=function(t){var e=[];return this.rows.forEach(function(o){e.push(t?o.getComponent():o)}),e},D.prototype.generateGroupHeaderContents=function(){var t=[];for(this.rows.forEach(function(e){t.push(e.getData())}),this.elementContents=this.generator(this.key,this.getRowCount(),t,this.getComponent());this.element.firstChild;)this.element.removeChild(this.element.firstChild);"string"==typeof this.elementContents?this.element.innerHTML=this.elementContents:this.element.appendChild(this.elementContents),this.element.insertBefore(this.arrowElement,this.element.firstChild)},D.prototype.getElement=function(){this.addBindingsd=!1,this._visSet(),this.visible?this.element.classList.add("tabulator-group-visible"):this.element.classList.remove("tabulator-group-visible");for(var t=0;t<this.element.childNodes.length;++t)this.element.childNodes[t].parentNode.removeChild(this.element.childNodes[t]);return this.generateGroupHeaderContents(),this.element},D.prototype.detachElement=function(){this.element&&this.element.parentNode&&this.element.parentNode.removeChild(this.element)},D.prototype.normalizeHeight=function(){this.setHeight(this.element.clientHeight)},D.prototype.initialize=function(t){this.initialized&&!t||(this.normalizeHeight(),this.initialized=!0)},D.prototype.reinitialize=function(){this.initialized=!1,this.height=0,u.prototype.helpers.elVisible(this.element)&&this.initialize(!0)},D.prototype.setHeight=function(t){this.height!=t&&(this.height=t,this.outerHeight=this.element.offsetHeight)},D.prototype.getHeight=function(){return this.outerHeight},D.prototype.getGroup=function(){return this},D.prototype.reinitializeHeight=function(){},D.prototype.calcHeight=function(){},D.prototype.setCellHeight=function(){},D.prototype.clearCellHeight=function(){},D.prototype.getComponent=function(){return new M(this)};var L=function(t){this.table=t,this.groupIDLookups=!1,this.startOpen=[function(){return!1}],this.headerGenerator=[function(){return""}],this.groupList=[],this.allowedValues=!1,this.groups={},this.displayIndex=0};L.prototype.initialize=function(){var t=this,e=t.table.options.groupBy,o=t.table.options.groupStartOpen,i=t.table.options.groupHeader;if(this.allowedValues=t.table.options.groupValues,Array.isArray(e)&&Array.isArray(i)&&e.length>i.length&&console.warn("Error creating group headers, groupHeader array is shorter than groupBy array"),t.headerGenerator=[function(){return""}],this.startOpen=[function(){return!1}],t.table.modules.localize.bind("groups|item",function(e,o){t.headerGenerator[0]=function(t,i,n){return(void 0===t?"":t)+"<span>("+i+" "+(1===i?e:o.groups.items)+")</span>"}}),this.groupIDLookups=[],Array.isArray(e)||e)this.table.modExists("columnCalcs")&&"table"!=this.table.options.columnCalcs&&"both"!=this.table.options.columnCalcs&&this.table.modules.columnCalcs.removeCalcs();else if(this.table.modExists("columnCalcs")&&"group"!=this.table.options.columnCalcs){var n=this.table.columnManager.getRealColumns();n.forEach(function(e){e.definition.topCalc&&t.table.modules.columnCalcs.initializeTopRow(),e.definition.bottomCalc&&t.table.modules.columnCalcs.initializeBottomRow()})}Array.isArray(e)||(e=[e]),e.forEach(function(e,o){var i,n;"function"==typeof e?i=e:(n=t.table.columnManager.getColumnByField(e),i=n?function(t){return n.getFieldValue(t)}:function(t){return t[e]}),t.groupIDLookups.push({field:"function"!=typeof e&&e,func:i,values:!!t.allowedValues&&t.allowedValues[o]})}),o&&(Array.isArray(o)||(o=[o]),o.forEach(function(t){t="function"==typeof t?t:function(){return!0}}),t.startOpen=o),i&&(t.headerGenerator=Array.isArray(i)?i:[i]),this.initialized=!0},L.prototype.setDisplayIndex=function(t){this.displayIndex=t},L.prototype.getDisplayIndex=function(){return this.displayIndex},L.prototype.getRows=function(t){return this.groupIDLookups.length?(this.table.options.dataGrouping.call(this.table),this.generateGroups(t),this.table.options.dataGrouped&&this.table.options.dataGrouped.call(this.table,this.getGroups(!0)),this.updateGroupRows()):t.slice(0)},L.prototype.getGroups=function(t){var e=[];return this.groupList.forEach(function(o){e.push(t?o.getComponent():o)}),e},L.prototype.wipe=function(){this.groupList.forEach(function(t){t.wipe()})},L.prototype.pullGroupListData=function(t){var e=this,o=[];return t.forEach(function(t){var i={};i.level=0,i.rowCount=0,i.headerContent="";var n=[];t.hasSubGroups?(n=e.pullGroupListData(t.groupList),i.level=t.level,i.rowCount=n.length-t.groupList.length,i.headerContent=t.generator(t.key,i.rowCount,t.rows,t),o.push(i),o=o.concat(n)):(i.level=t.level,i.headerContent=t.generator(t.key,t.rows.length,t.rows,t),i.rowCount=t.getRows().length,o.push(i),t.getRows().forEach(function(t){o.push(t.getData("data"))}))}),o},L.prototype.getGroupedData=function(){return this.pullGroupListData(this.groupList)},L.prototype.getRowGroup=function(t){var e=!1;return this.groupList.forEach(function(o){var i=o.getRowGroup(t);i&&(e=i)}),e},L.prototype.countGroups=function(){return this.groupList.length},L.prototype.generateGroups=function(t){var e=this,o=e.groups;e.groups={},e.groupList=[],this.allowedValues&&this.allowedValues[0]?(this.allowedValues[0].forEach(function(t){e.createGroup(t,0,o)}),t.forEach(function(t){e.assignRowToExistingGroup(t,o)})):t.forEach(function(t){e.assignRowToGroup(t,o)})},L.prototype.createGroup=function(t,e,o){var i,n=e+"_"+t;o=o||[],i=new D(this,!1,e,t,this.groupIDLookups[0].field,this.headerGenerator[0],o[n]),this.groups[n]=i,this.groupList.push(i)},L.prototype.assignRowToExistingGroup=function(t,e){var o=this.groupIDLookups[0].func(t.getData()),i="0_"+o;this.groups[i]&&this.groups[i].addRow(t)},L.prototype.assignRowToGroup=function(t,e){var o=this.groupIDLookups[0].func(t.getData()),i=!this.groups["0_"+o];return i&&this.createGroup(o,0,e),this.groups["0_"+o].addRow(t),!i},L.prototype.updateGroupRows=function(t){var e=this,o=[];if(e.groupList.forEach(function(t){o=o.concat(t.getHeadersAndRows())}),t){var i=e.table.rowManager.setDisplayRows(o,this.getDisplayIndex());!0!==i&&this.setDisplayIndex(i),e.table.rowManager.refreshActiveData("group",!0,!0)}return o},L.prototype.scrollHeaders=function(t){t+="px",this.groupList.forEach(function(e){e.scrollHeader(t)})},L.prototype.removeGroup=function(t){var e,o=t.level+"_"+t.key;this.groups[o]&&(delete this.groups[o],(e=this.groupList.indexOf(t))>-1&&this.groupList.splice(e,1))},u.prototype.registerModule("groupRows",L);var T=function(t){this.table=t,this.history=[],this.index=-1};T.prototype.clear=function(){this.history=[],this.index=-1},T.prototype.action=function(t,e,o){this.history=this.history.slice(0,this.index+1),this.history.push({type:t,component:e,data:o}),this.index++},T.prototype.getHistoryUndoSize=function(){return this.index+1},T.prototype.getHistoryRedoSize=function(){return this.history.length-(this.index+1)},T.prototype.undo=function(){if(this.index>-1){var t=this.history[this.index];return this.undoers[t.type].call(this,t),this.index--,this.table.options.historyUndo.call(this.table,t.type,t.component.getComponent(),t.data),!0}return console.warn("History Undo Error - No more history to undo"),!1},T.prototype.redo=function(){if(this.history.length-1>this.index){this.index++;var t=this.history[this.index];return this.redoers[t.type].call(this,t),this.table.options.historyRedo.call(this.table,t.type,t.component.getComponent(),t.data),!0}return console.warn("History Redo Error - No more history to redo"),!1},T.prototype.undoers={cellEdit:function(t){t.component.setValueProcessData(t.data.oldValue)},rowAdd:function(t){t.component.deleteActual()},rowDelete:function(t){var e=this.table.rowManager.addRowActual(t.data.data,t.data.pos,t.data.index);this.table.options.groupBy&&this.table.modExists("groupRows")&&this.table.modules.groupRows.updateGroupRows(!0),this._rebindRow(t.component,e)},rowMove:function(t){this.table.rowManager.moveRowActual(t.component,this.table.rowManager.rows[t.data.pos],!1),this.table.rowManager.redraw()}},T.prototype.redoers={cellEdit:function(t){t.component.setValueProcessData(t.data.newValue)},rowAdd:function(t){var e=this.table.rowManager.addRowActual(t.data.data,t.data.pos,t.data.index);this.table.options.groupBy&&this.table.modExists("groupRows")&&this.table.modules.groupRows.updateGroupRows(!0),this._rebindRow(t.component,e)},rowDelete:function(t){t.component.deleteActual()},rowMove:function(t){this.table.rowManager.moveRowActual(t.component,this.table.rowManager.rows[t.data.pos],!1),this.table.rowManager.redraw()}},T.prototype._rebindRow=function(t,e){this.history.forEach(function(o){if(o.component instanceof r)o.component===t&&(o.component=e);else if(o.component instanceof l&&o.component.row===t){var i=o.component.column.getField();i&&(o.component=e.getCell(i))}})},u.prototype.registerModule("history",T);var k=function(t){this.table=t,this.fieldIndex=[],this.hasIndex=!1};k.prototype.parseTable=function(){var t=this,e=t.table.element,o=t.table.options,i=(o.columns,e.getElementsByTagName("th")),n=e.getElementsByTagName("tbody")[0],s=[];t.hasIndex=!1,t.table.options.htmlImporting.call(this.table),n=n?n.getElementsByTagName("tr"):[],t._extractOptions(e,o),i.length?t._extractHeaders(i,n):t._generateBlankHeaders(i,n);for(var r=0;r<n.length;r++){var a=n[r],l=a.getElementsByTagName("td"),c={};t.hasIndex||(c[o.index]=r);for(var u=0;u<l.length;u++){var d=l[u];void 0!==this.fieldIndex[u]&&(c[this.fieldIndex[u]]=d.innerHTML)}s.push(c)}var h=document.createElement("div"),p=e.attributes;for(var u in p)"object"==_typeof(p[u])&&h.setAttribute(p[u].name,p[u].value);e.parentNode.replaceChild(h,e),o.data=s,t.table.options.htmlImported.call(this.table),this.table.element=h},k.prototype._extractOptions=function(t,e,o){var i=t.attributes,n=o?Object.assign([],o):Object.keys(e),s={};n.forEach(function(t){s[t.toLowerCase()]=t});for(var r in i){var a,l=i[r];l&&"object"==(void 0===l?"undefined":_typeof(l))&&l.name&&0===l.name.indexOf("tabulator-")&&(a=l.name.replace("tabulator-",""),void 0!==s[a]&&(e[s[a]]=this._attribValue(l.value)))}},k.prototype._attribValue=function(t){return"true"===t||"false"!==t&&t},k.prototype._findCol=function(t){return this.table.options.columns.find(function(e){return e.title===t})||!1},k.prototype._extractHeaders=function(t,e){for(var o=0;o<t.length;o++){var n,s,r=t[o],a=!1,l=this._findCol(r.textContent);l?a=!0:l={title:r.textContent.trim()},l.field||(l.field=r.textContent.trim().toLowerCase().replace(" ","_")),n=r.getAttribute("width"),n&&!l.width&&(l.width=n),s=r.attributes,this._extractOptions(r,l,i.prototype.defaultOptionList);for(var c in s){var u,d=s[c];d&&"object"==(void 0===d?"undefined":_typeof(d))&&d.name&&0===d.name.indexOf("tabulator-")&&(u=d.name.replace("tabulator-",""),l[u]=this._attribValue(d.value))}this.fieldIndex[o]=l.field,l.field==this.table.options.index&&(this.hasIndex=!0),a||this.table.options.columns.push(l)}},k.prototype._generateBlankHeaders=function(t,e){for(var o=0;o<t.length;o++){var i=t[o],n={title:"",field:"col"+o};this.fieldIndex[o]=n.field;var s=i.getAttribute("width");s&&(n.width=s),this.table.options.columns.push(n)}},u.prototype.registerModule("htmlTableImport",k);var S=function(t){this.table=t,this.config={},this.cloneTableStyle=!0,this.colVisProp=""};S.prototype.genereateTable=function(t,e,o,i){this.cloneTableStyle=e,this.config=t||{},this.colVisProp=i;var n=this.generateHeaderElements(),s=this.generateBodyElements(o),r=document.createElement("table");return r.classList.add("tabulator-print-table"),r.appendChild(n),r.appendChild(s),this.mapElementStyles(this.table.element,r,["border-top","border-left","border-right","border-bottom"]),r},S.prototype.generateColumnGroupHeaders=function(){var t=this,e=[];return(!1!==this.config.columnGroups?this.table.columnManager.columns:this.table.columnManager.columnsByIndex).forEach(function(o){var i=t.processColumnGroup(o);i&&e.push(i)}),e},S.prototype.processColumnGroup=function(t){var e=this,o=t.columns,i=0,n={title:t.definition.title,column:t,depth:1};if(o.length){if(n.subGroups=[],n.width=0,o.forEach(function(t){var o=e.processColumnGroup(t);o&&(n.width+=o.width,n.subGroups.push(o),o.depth>i&&(i=o.depth))}),n.depth+=i,!n.width)return!1}else{if(!this.columnVisCheck(t))return!1;n.width=1}return n},S.prototype.groupHeadersToRows=function(t){function e(t,n){var s=i-n;void 0===o[n]&&(o[n]=[]),t.height=t.subGroups?1:s-t.depth+1,o[n].push(t),t.subGroups&&t.subGroups.forEach(function(t){e(t,n+1)})}var o=[],i=0;return t.forEach(function(t){t.depth>i&&(i=t.depth)}),t.forEach(function(t){e(t,0)}),o},S.prototype.generateHeaderElements=function(){var t=this,e=document.createElement("thead");return this.groupHeadersToRows(this.generateColumnGroupHeaders()).forEach(function(o){var i=document.createElement("tr");t.mapElementStyles(t.table.columnManager.getHeadersElement(),e,["border-top","border-left","border-right","border-bottom","background-color","color","font-weight","font-family","font-size"]),o.forEach(function(e){var o=document.createElement("th"),n=e.column.definition.cssClass?e.column.definition.cssClass.split(" "):[];o.colSpan=e.width,o.rowSpan=e.height,o.innerHTML=e.column.definition.title,t.cloneTableStyle&&(o.style.boxSizing="border-box"),n.forEach(function(t){o.classList.add(t)}),t.mapElementStyles(e.column.getElement(),o,["text-align","border-top","border-left","border-right","border-bottom","background-color","color","font-weight","font-family","font-size"]),t.mapElementStyles(e.column.contentElement,o,["padding-top","padding-left","padding-right","padding-bottom"]),e.column.visible?t.mapElementStyles(e.column.getElement(),o,["width"]):e.column.definition.width&&(o.style.width=e.column.definition.width+"px"),e.column.parent&&t.mapElementStyles(e.column.parent.groupElement,o,["border-top"]),i.appendChild(o)}),e.appendChild(i)}),e},S.prototype.generateBodyElements=function(t){var e,o,i,n,s,r,a,l,c=this;this.cloneTableStyle&&window.getComputedStyle&&(e=this.table.element.querySelector(".tabulator-row-odd:not(.tabulator-group):not(.tabulator-calcs)"),o=this.table.element.querySelector(".tabulator-row-even:not(.tabulator-group):not(.tabulator-calcs)"),i=this.table.element.querySelector(".tabulator-row.tabulator-calcs"),n=this.table.element.querySelector(".tabulator-row:not(.tabulator-group):not(.tabulator-calcs)"),r=this.table.element.getElementsByClassName("tabulator-group")[0],n&&(a=n.getElementsByClassName("tabulator-cell"),s=a[0],a[a.length-1]));var u=document.createElement("tbody"),d=t?this.table.rowManager.getVisibleRows(!0):this.table.rowManager.getDisplayRows(),h=[];return!1!==this.config.columnCalcs&&this.table.modExists("columnCalcs")&&(this.table.modules.columnCalcs.topInitialized&&d.unshift(this.table.modules.columnCalcs.topRow),this.table.modules.columnCalcs.botInitialized&&d.push(this.table.modules.columnCalcs.botRow)),this.table.columnManager.columnsByIndex.forEach(function(t){c.columnVisCheck(t)&&h.push(t)}),d=d.filter(function(t){switch(t.type){case"group":return!1!==c.config.rowGroups;case"calc":return!1!==c.config.columnCalcs}return!0}),d.length>1e3&&console.warn("It may take a long time to render an HTML table with more than 1000 rows"),d.forEach(function(t,n){var a=t.getData(),d=document.createElement("tr");switch(d.classList.add("tabulator-print-table-row"),t.type){case"group":var p=document.createElement("td");p.colSpan=h.length,p.innerHTML=t.key,d.classList.add("tabulator-print-table-group"),c.mapElementStyles(r,d,["border-top","border-left","border-right","border-bottom","color","font-weight","font-family","font-size","background-color"]),c.mapElementStyles(r,p,["padding-top","padding-left","padding-right","padding-bottom"]),d.appendChild(p);break;case"calc":d.classList.add("tabulator-print-table-calcs");case"row":h.forEach(function(e){var o=document.createElement("td"),i=e.getFieldValue(a),n={modules:{},getValue:function(){return i},getField:function(){return e.definition.field},getElement:function(){return o},getColumn:function(){return e.getComponent()},getData:function(){return a},getRow:function(){return t.getComponent()},getComponent:function(){return n},column:e};if((e.definition.cssClass?e.definition.cssClass.split(" "):[]).forEach(function(t){o.classList.add(t)}),c.table.modExists("format"))i=c.table.modules.format.formatValue(n);else switch(void 0===i?"undefined":_typeof(i)){case"object":i=JSON.stringify(i);break;case"undefined":case"null":i="";break;default:i=i}i instanceof Node?o.appendChild(i):o.innerHTML=i,s&&c.mapElementStyles(s,o,["padding-top","padding-left","padding-right","padding-bottom","border-top","border-left","border-right","border-bottom","color","font-weight","font-family","font-size","text-align"]),d.appendChild(o)}),l="calc"==t.type?i:n%2&&o?o:e,c.mapElementStyles(l,d,["border-top","border-left","border-right","border-bottom","color","font-weight","font-family","font-size","background-color"])}u.appendChild(d)}),u},S.prototype.columnVisCheck=function(t){return!1!==t.definition[this.colVisProp]&&(t.visible||!t.visible&&t.definition[this.colVisProp])},S.prototype.getHtml=function(t,e,o){var i=document.createElement("div");return i.appendChild(this.genereateTable(o||this.table.options.htmlOutputConfig,e,t,"htmlOutput")),i.innerHTML},S.prototype.mapElementStyles=function(t,e,o){if(this.cloneTableStyle&&t&&e){var i={"background-color":"backgroundColor",color:"fontColor",width:"width","font-weight":"fontWeight","font-family":"fontFamily","font-size":"fontSize","text-align":"textAlign","border-top":"borderTop","border-left":"borderLeft","border-right":"borderRight","border-bottom":"borderBottom","padding-top":"paddingTop","padding-left":"paddingLeft","padding-right":"paddingRight","padding-bottom":"paddingBottom"};if(window.getComputedStyle){var n=window.getComputedStyle(t);o.forEach(function(t){e.style[i[t]]=n.getPropertyValue(t)})}}},u.prototype.registerModule("htmlTableExport",S);var z=function(t){this.table=t,this.watchKeys=null,this.pressedKeys=null,this.keyupBinding=!1,this.keydownBinding=!1};z.prototype.initialize=function(){var t=this.table.options.keybindings,e={};if(this.watchKeys={},this.pressedKeys=[],!1!==t){for(var o in this.bindings)e[o]=this.bindings[o];if(Object.keys(t).length)for(var i in t)e[i]=t[i];this.mapBindings(e),this.bindEvents()}},z.prototype.mapBindings=function(t){var e=this,o=this;for(var i in t)!function(i){e.actions[i]?t[i]&&("object"!==_typeof(t[i])&&(t[i]=[t[i]]),t[i].forEach(function(t){o.mapBinding(i,t)})):console.warn("Key Binding Error - no such action:",i)}(i)},z.prototype.mapBinding=function(t,e){var o=this,i={action:this.actions[t],keys:[],ctrl:!1,shift:!1};e.toString().toLowerCase().split(" ").join("").split("+").forEach(function(t){switch(t){case"ctrl":i.ctrl=!0;break;case"shift":i.shift=!0;break;default:t=parseInt(t),i.keys.push(t),o.watchKeys[t]||(o.watchKeys[t]=[]),o.watchKeys[t].push(i)}})},z.prototype.bindEvents=function(){var t=this;this.keyupBinding=function(e){var o=e.keyCode,i=t.watchKeys[o];i&&(t.pressedKeys.push(o),i.forEach(function(o){t.checkBinding(e,o)}))},this.keydownBinding=function(e){var o=e.keyCode;if(t.watchKeys[o]){var i=t.pressedKeys.indexOf(o);i>-1&&t.pressedKeys.splice(i,1)}},this.table.element.addEventListener("keydown",this.keyupBinding),this.table.element.addEventListener("keyup",this.keydownBinding)},z.prototype.clearBindings=function(){this.keyupBinding&&this.table.element.removeEventListener("keydown",this.keyupBinding),this.keydownBinding&&this.table.element.removeEventListener("keyup",this.keydownBinding)},z.prototype.checkBinding=function(t,e){var o=this,i=!0;return t.ctrlKey==e.ctrl&&t.shiftKey==e.shift&&(e.keys.forEach(function(t){-1==o.pressedKeys.indexOf(t)&&(i=!1)}),i&&e.action.call(o,t),!0)},z.prototype.bindings={navPrev:"shift + 9",navNext:9,navUp:38,navDown:40,scrollPageUp:33,scrollPageDown:34,scrollToStart:36,scrollToEnd:35,undo:"ctrl + 90",redo:"ctrl + 89",copyToClipboard:"ctrl + 67"},z.prototype.actions={keyBlock:function(t){t.stopPropagation(),t.preventDefault()},scrollPageUp:function(t){var e=this.table.rowManager,o=e.scrollTop-e.height;e.element.scrollHeight;t.preventDefault(),e.displayRowsCount&&(o>=0?e.element.scrollTop=o:e.scrollToRow(e.getDisplayRows()[0])),this.table.element.focus()},scrollPageDown:function(t){var e=this.table.rowManager,o=e.scrollTop+e.height,i=e.element.scrollHeight;t.preventDefault(),e.displayRowsCount&&(o<=i?e.element.scrollTop=o:e.scrollToRow(e.getDisplayRows()[e.displayRowsCount-1])),this.table.element.focus()},scrollToStart:function(t){var e=this.table.rowManager;t.preventDefault(),e.displayRowsCount&&e.scrollToRow(e.getDisplayRows()[0]),this.table.element.focus()},scrollToEnd:function(t){var e=this.table.rowManager;t.preventDefault(),e.displayRowsCount&&e.scrollToRow(e.getDisplayRows()[e.displayRowsCount-1]),this.table.element.focus()},navPrev:function(t){var e=!1;this.table.modExists("edit")&&(e=this.table.modules.edit.currentCell)&&(t.preventDefault(),e.nav().prev())},navNext:function(t){var e,o=!1,i=this.table.options.tabEndNewRow;this.table.modExists("edit")&&(o=this.table.modules.edit.currentCell)&&(t.preventDefault(),e=o.nav(),e.next()||i&&(i=!0===i?this.table.addRow({}):"function"==typeof i?this.table.addRow(i(o.row.getComponent())):this.table.addRow(i),i.then(function(){e.next()})))},navLeft:function(t){var e=!1;this.table.modExists("edit")&&(e=this.table.modules.edit.currentCell)&&(t.preventDefault(),e.nav().left())},navRight:function(t){var e=!1;this.table.modExists("edit")&&(e=this.table.modules.edit.currentCell)&&(t.preventDefault(),e.nav().right())},navUp:function(t){var e=!1;this.table.modExists("edit")&&(e=this.table.modules.edit.currentCell)&&(t.preventDefault(),e.nav().up())},navDown:function(t){var e=!1;this.table.modExists("edit")&&(e=this.table.modules.edit.currentCell)&&(t.preventDefault(),e.nav().down())},undo:function(t){this.table.options.history&&this.table.modExists("history")&&this.table.modExists("edit")&&(this.table.modules.edit.currentCell||(t.preventDefault(),this.table.modules.history.undo()))},redo:function(t){this.table.options.history&&this.table.modExists("history")&&this.table.modExists("edit")&&(this.table.modules.edit.currentCell||(t.preventDefault(),this.table.modules.history.redo()))},copyToClipboard:function(t){this.table.modules.edit.currentCell||this.table.modExists("clipboard",!0)&&this.table.modules.clipboard.copy(this.table.options.selectable&&"highlight"!=this.table.options.selectable?"selected":"active",null,null,null,!0)}},u.prototype.registerModule("keybindings",z);var F=function(t){this.table=t,this.placeholderElement=this.createPlaceholderElement(),this.hoverElement=!1,this.checkTimeout=!1,this.checkPeriod=250,this.moving=!1,this.toCol=!1,this.toColAfter=!1,this.startX=0,this.autoScrollMargin=40,this.autoScrollStep=5,this.autoScrollTimeout=!1,this.touchMove=!1,this.moveHover=this.moveHover.bind(this),this.endMove=this.endMove.bind(this)};F.prototype.createPlaceholderElement=function(){var t=document.createElement("div");return t.classList.add("tabulator-col"),t.classList.add("tabulator-col-placeholder"),t},F.prototype.initializeColumn=function(t){var e,o=this,i={};t.modules.frozen||(e=t.getElement(),i.mousemove=function(i){t.parent===o.moving.parent&&((o.touchMove?i.touches[0].pageX:i.pageX)-u.prototype.helpers.elOffset(e).left+o.table.columnManager.element.scrollLeft>t.getWidth()/2?o.toCol===t&&o.toColAfter||(e.parentNode.insertBefore(o.placeholderElement,e.nextSibling),o.moveColumn(t,!0)):(o.toCol!==t||o.toColAfter)&&(e.parentNode.insertBefore(o.placeholderElement,e),o.moveColumn(t,!1)))}.bind(o),e.addEventListener("mousedown",function(e){o.touchMove=!1,1===e.which&&(o.checkTimeout=setTimeout(function(){o.startMove(e,t)},o.checkPeriod))}),
e.addEventListener("mouseup",function(t){1===t.which&&o.checkTimeout&&clearTimeout(o.checkTimeout)}),o.bindTouchEvents(t)),t.modules.moveColumn=i},F.prototype.bindTouchEvents=function(t){var e,o,i,n,s,r,a,l=this,c=t.getElement(),u=!1;c.addEventListener("touchstart",function(c){l.checkTimeout=setTimeout(function(){l.touchMove=!0,e=t,o=t.nextColumn(),n=o?o.getWidth()/2:0,i=t.prevColumn(),s=i?i.getWidth()/2:0,r=0,a=0,u=!1,l.startMove(c,t)},l.checkPeriod)},{passive:!0}),c.addEventListener("touchmove",function(c){var d,h;l.moving&&(l.moveHover(c),u||(u=c.touches[0].pageX),d=c.touches[0].pageX-u,d>0?o&&d-r>n&&(h=o)!==t&&(u=c.touches[0].pageX,h.getElement().parentNode.insertBefore(l.placeholderElement,h.getElement().nextSibling),l.moveColumn(h,!0)):i&&-d-a>s&&(h=i)!==t&&(u=c.touches[0].pageX,h.getElement().parentNode.insertBefore(l.placeholderElement,h.getElement()),l.moveColumn(h,!1)),h&&(e=h,o=h.nextColumn(),r=n,n=o?o.getWidth()/2:0,i=h.prevColumn(),a=s,s=i?i.getWidth()/2:0))},{passive:!0}),c.addEventListener("touchend",function(t){l.checkTimeout&&clearTimeout(l.checkTimeout),l.moving&&l.endMove(t)})},F.prototype.startMove=function(t,e){var o=e.getElement();this.moving=e,this.startX=(this.touchMove?t.touches[0].pageX:t.pageX)-u.prototype.helpers.elOffset(o).left,this.table.element.classList.add("tabulator-block-select"),this.placeholderElement.style.width=e.getWidth()+"px",this.placeholderElement.style.height=e.getHeight()+"px",o.parentNode.insertBefore(this.placeholderElement,o),o.parentNode.removeChild(o),this.hoverElement=o.cloneNode(!0),this.hoverElement.classList.add("tabulator-moving"),this.table.columnManager.getElement().appendChild(this.hoverElement),this.hoverElement.style.left="0",this.hoverElement.style.bottom="0",this.touchMove||(this._bindMouseMove(),document.body.addEventListener("mousemove",this.moveHover),document.body.addEventListener("mouseup",this.endMove)),this.moveHover(t)},F.prototype._bindMouseMove=function(){this.table.columnManager.columnsByIndex.forEach(function(t){t.modules.moveColumn.mousemove&&t.getElement().addEventListener("mousemove",t.modules.moveColumn.mousemove)})},F.prototype._unbindMouseMove=function(){this.table.columnManager.columnsByIndex.forEach(function(t){t.modules.moveColumn.mousemove&&t.getElement().removeEventListener("mousemove",t.modules.moveColumn.mousemove)})},F.prototype.moveColumn=function(t,e){var o=this.moving.getCells();this.toCol=t,this.toColAfter=e,e?t.getCells().forEach(function(t,e){var i=t.getElement();i.parentNode.insertBefore(o[e].getElement(),i.nextSibling)}):t.getCells().forEach(function(t,e){var i=t.getElement();i.parentNode.insertBefore(o[e].getElement(),i)})},F.prototype.endMove=function(t){(1===t.which||this.touchMove)&&(this._unbindMouseMove(),this.placeholderElement.parentNode.insertBefore(this.moving.getElement(),this.placeholderElement.nextSibling),this.placeholderElement.parentNode.removeChild(this.placeholderElement),this.hoverElement.parentNode.removeChild(this.hoverElement),this.table.element.classList.remove("tabulator-block-select"),this.toCol&&this.table.columnManager.moveColumnActual(this.moving,this.toCol,this.toColAfter),this.moving=!1,this.toCol=!1,this.toColAfter=!1,this.touchMove||(document.body.removeEventListener("mousemove",this.moveHover),document.body.removeEventListener("mouseup",this.endMove)))},F.prototype.moveHover=function(t){var e,o=this,i=o.table.columnManager.getElement(),n=i.scrollLeft,s=(o.touchMove?t.touches[0].pageX:t.pageX)-u.prototype.helpers.elOffset(i).left+n;o.hoverElement.style.left=s-o.startX+"px",s-n<o.autoScrollMargin&&(o.autoScrollTimeout||(o.autoScrollTimeout=setTimeout(function(){e=Math.max(0,n-5),o.table.rowManager.getElement().scrollLeft=e,o.autoScrollTimeout=!1},1))),n+i.clientWidth-s<o.autoScrollMargin&&(o.autoScrollTimeout||(o.autoScrollTimeout=setTimeout(function(){e=Math.min(i.clientWidth,n+5),o.table.rowManager.getElement().scrollLeft=e,o.autoScrollTimeout=!1},1)))},u.prototype.registerModule("moveColumn",F);var H=function(t){this.table=t,this.placeholderElement=this.createPlaceholderElement(),this.hoverElement=!1,this.checkTimeout=!1,this.checkPeriod=150,this.moving=!1,this.toRow=!1,this.toRowAfter=!1,this.hasHandle=!1,this.startY=0,this.startX=0,this.moveHover=this.moveHover.bind(this),this.endMove=this.endMove.bind(this),this.tableRowDropEvent=!1,this.touchMove=!1,this.connection=!1,this.connections=[],this.connectedTable=!1,this.connectedRow=!1};H.prototype.createPlaceholderElement=function(){var t=document.createElement("div");return t.classList.add("tabulator-row"),t.classList.add("tabulator-row-placeholder"),t},H.prototype.initialize=function(t){this.connection=this.table.options.movableRowsConnectedTables},H.prototype.setHandle=function(t){this.hasHandle=t},H.prototype.initializeGroupHeader=function(t){var e=this,o={};o.mouseup=function(t){e.tableRowDrop(t,row)}.bind(e),o.mousemove=function(o){if(o.pageY-u.prototype.helpers.elOffset(t.element).top+e.table.rowManager.element.scrollTop>t.getHeight()/2){if(e.toRow!==t||!e.toRowAfter){var i=t.getElement();i.parentNode.insertBefore(e.placeholderElement,i.nextSibling),e.moveRow(t,!0)}}else if(e.toRow!==t||e.toRowAfter){var i=t.getElement();i.previousSibling&&(i.parentNode.insertBefore(e.placeholderElement,i),e.moveRow(t,!1))}}.bind(e),t.modules.moveRow=o},H.prototype.initializeRow=function(t){var e,o=this,i={};i.mouseup=function(e){o.tableRowDrop(e,t)}.bind(o),i.mousemove=function(e){if(e.pageY-u.prototype.helpers.elOffset(t.element).top+o.table.rowManager.element.scrollTop>t.getHeight()/2){if(o.toRow!==t||!o.toRowAfter){var i=t.getElement();i.parentNode.insertBefore(o.placeholderElement,i.nextSibling),o.moveRow(t,!0)}}else if(o.toRow!==t||o.toRowAfter){var i=t.getElement();i.parentNode.insertBefore(o.placeholderElement,i),o.moveRow(t,!1)}}.bind(o),this.hasHandle||(e=t.getElement(),e.addEventListener("mousedown",function(e){1===e.which&&(o.checkTimeout=setTimeout(function(){o.startMove(e,t)},o.checkPeriod))}),e.addEventListener("mouseup",function(t){1===t.which&&o.checkTimeout&&clearTimeout(o.checkTimeout)}),this.bindTouchEvents(t,t.getElement())),t.modules.moveRow=i},H.prototype.initializeCell=function(t){var e=this,o=t.getElement();o.addEventListener("mousedown",function(o){1===o.which&&(e.checkTimeout=setTimeout(function(){e.startMove(o,t.row)},e.checkPeriod))}),o.addEventListener("mouseup",function(t){1===t.which&&e.checkTimeout&&clearTimeout(e.checkTimeout)}),this.bindTouchEvents(t.row,t.getElement())},H.prototype.bindTouchEvents=function(t,e){var o,i,n,s,r,a,l,c=this,u=!1;e.addEventListener("touchstart",function(e){c.checkTimeout=setTimeout(function(){c.touchMove=!0,o=t,i=t.nextRow(),s=i?i.getHeight()/2:0,n=t.prevRow(),r=n?n.getHeight()/2:0,a=0,l=0,u=!1,c.startMove(e,t)},c.checkPeriod)},{passive:!0}),this.moving,this.toRow,this.toRowAfter,e.addEventListener("touchmove",function(e){var d,h;c.moving&&(e.preventDefault(),c.moveHover(e),u||(u=e.touches[0].pageY),d=e.touches[0].pageY-u,d>0?i&&d-a>s&&(h=i)!==t&&(u=e.touches[0].pageY,h.getElement().parentNode.insertBefore(c.placeholderElement,h.getElement().nextSibling),c.moveRow(h,!0)):n&&-d-l>r&&(h=n)!==t&&(u=e.touches[0].pageY,h.getElement().parentNode.insertBefore(c.placeholderElement,h.getElement()),c.moveRow(h,!1)),h&&(o=h,i=h.nextRow(),a=s,s=i?i.getHeight()/2:0,n=h.prevRow(),l=r,r=n?n.getHeight()/2:0))}),e.addEventListener("touchend",function(t){c.checkTimeout&&clearTimeout(c.checkTimeout),c.moving&&(c.endMove(t),c.touchMove=!1)})},H.prototype._bindMouseMove=function(){this.table.rowManager.getDisplayRows().forEach(function(t){"row"!==t.type&&"group"!==t.type||!t.modules.moveRow.mousemove||t.getElement().addEventListener("mousemove",t.modules.moveRow.mousemove)})},H.prototype._unbindMouseMove=function(){this.table.rowManager.getDisplayRows().forEach(function(t){"row"!==t.type&&"group"!==t.type||!t.modules.moveRow.mousemove||t.getElement().removeEventListener("mousemove",t.modules.moveRow.mousemove)})},H.prototype.startMove=function(t,e){var o=e.getElement();this.setStartPosition(t,e),this.moving=e,this.table.element.classList.add("tabulator-block-select"),this.placeholderElement.style.width=e.getWidth()+"px",this.placeholderElement.style.height=e.getHeight()+"px",this.connection?(this.table.element.classList.add("tabulator-movingrow-sending"),this.connectToTables(e)):(o.parentNode.insertBefore(this.placeholderElement,o),o.parentNode.removeChild(o)),this.hoverElement=o.cloneNode(!0),this.hoverElement.classList.add("tabulator-moving"),this.connection?(document.body.appendChild(this.hoverElement),this.hoverElement.style.left="0",this.hoverElement.style.top="0",this.hoverElement.style.width=this.table.element.clientWidth+"px",this.hoverElement.style.whiteSpace="nowrap",this.hoverElement.style.overflow="hidden",this.hoverElement.style.pointerEvents="none"):(this.table.rowManager.getTableElement().appendChild(this.hoverElement),this.hoverElement.style.left="0",this.hoverElement.style.top="0",this._bindMouseMove()),document.body.addEventListener("mousemove",this.moveHover),document.body.addEventListener("mouseup",this.endMove),this.moveHover(t)},H.prototype.setStartPosition=function(t,e){var o,i,n=this.touchMove?t.touches[0].pageX:t.pageX,s=this.touchMove?t.touches[0].pageY:t.pageY;o=e.getElement(),this.connection?(i=o.getBoundingClientRect(),this.startX=i.left-n+window.pageXOffset,this.startY=i.top-s+window.pageYOffset):this.startY=s-o.getBoundingClientRect().top},H.prototype.endMove=function(t){t&&1!==t.which&&!this.touchMove||(this._unbindMouseMove(),this.connection||(this.placeholderElement.parentNode.insertBefore(this.moving.getElement(),this.placeholderElement.nextSibling),this.placeholderElement.parentNode.removeChild(this.placeholderElement)),this.hoverElement.parentNode.removeChild(this.hoverElement),this.table.element.classList.remove("tabulator-block-select"),this.toRow&&this.table.rowManager.moveRow(this.moving,this.toRow,this.toRowAfter),this.moving=!1,this.toRow=!1,this.toRowAfter=!1,document.body.removeEventListener("mousemove",this.moveHover),document.body.removeEventListener("mouseup",this.endMove),this.connection&&(this.table.element.classList.remove("tabulator-movingrow-sending"),this.disconnectFromTables()))},H.prototype.moveRow=function(t,e){this.toRow=t,this.toRowAfter=e},H.prototype.moveHover=function(t){this.connection?this.moveHoverConnections.call(this,t):this.moveHoverTable.call(this,t)},H.prototype.moveHoverTable=function(t){var e=this.table.rowManager.getElement(),o=e.scrollTop,i=(this.touchMove?t.touches[0].pageY:t.pageY)-e.getBoundingClientRect().top+o;this.hoverElement.style.top=i-this.startY+"px"},H.prototype.moveHoverConnections=function(t){this.hoverElement.style.left=this.startX+(this.touchMove?t.touches[0].pageX:t.pageX)+"px",this.hoverElement.style.top=this.startY+(this.touchMove?t.touches[0].pageY:t.pageY)+"px"},H.prototype.connectToTables=function(t){var e=this.table.modules.comms.getConnections(this.connection);this.table.options.movableRowsSendingStart.call(this.table,e),this.table.modules.comms.send(this.connection,"moveRow","connect",{row:t})},H.prototype.disconnectFromTables=function(){var t=this.table.modules.comms.getConnections(this.connection);this.table.options.movableRowsSendingStop.call(this.table,t),this.table.modules.comms.send(this.connection,"moveRow","disconnect")},H.prototype.connect=function(t,e){var o=this;return this.connectedTable?(console.warn("Move Row Error - Table cannot accept connection, already connected to table:",this.connectedTable),!1):(this.connectedTable=t,this.connectedRow=e,this.table.element.classList.add("tabulator-movingrow-receiving"),o.table.rowManager.getDisplayRows().forEach(function(t){"row"===t.type&&t.modules.moveRow&&t.modules.moveRow.mouseup&&t.getElement().addEventListener("mouseup",t.modules.moveRow.mouseup)}),o.tableRowDropEvent=o.tableRowDrop.bind(o),o.table.element.addEventListener("mouseup",o.tableRowDropEvent),this.table.options.movableRowsReceivingStart.call(this.table,e,t),!0)},H.prototype.disconnect=function(t){var e=this;t===this.connectedTable?(this.connectedTable=!1,this.connectedRow=!1,this.table.element.classList.remove("tabulator-movingrow-receiving"),e.table.rowManager.getDisplayRows().forEach(function(t){"row"===t.type&&t.modules.moveRow&&t.modules.moveRow.mouseup&&t.getElement().removeEventListener("mouseup",t.modules.moveRow.mouseup)}),e.table.element.removeEventListener("mouseup",e.tableRowDropEvent),this.table.options.movableRowsReceivingStop.call(this.table,t)):console.warn("Move Row Error - trying to disconnect from non connected table")},H.prototype.dropComplete=function(t,e,o){var i=!1;if(o){switch(_typeof(this.table.options.movableRowsSender)){case"string":i=this.senders[this.table.options.movableRowsSender];break;case"function":i=this.table.options.movableRowsSender}i?i.call(this,this.moving.getComponent(),e?e.getComponent():void 0,t):this.table.options.movableRowsSender&&console.warn("Mover Row Error - no matching sender found:",this.table.options.movableRowsSender),this.table.options.movableRowsSent.call(this.table,this.moving.getComponent(),e?e.getComponent():void 0,t)}else this.table.options.movableRowsSentFailed.call(this.table,this.moving.getComponent(),e?e.getComponent():void 0,t);this.endMove()},H.prototype.tableRowDrop=function(t,e){var o=!1,i=!1;switch(t.stopImmediatePropagation(),_typeof(this.table.options.movableRowsReceiver)){case"string":o=this.receivers[this.table.options.movableRowsReceiver];break;case"function":o=this.table.options.movableRowsReceiver}o?i=o.call(this,this.connectedRow.getComponent(),e?e.getComponent():void 0,this.connectedTable):console.warn("Mover Row Error - no matching receiver found:",this.table.options.movableRowsReceiver),i?this.table.options.movableRowsReceived.call(this.table,this.connectedRow.getComponent(),e?e.getComponent():void 0,this.connectedTable):this.table.options.movableRowsReceivedFailed.call(this.table,this.connectedRow.getComponent(),e?e.getComponent():void 0,this.connectedTable),this.table.modules.comms.send(this.connectedTable,"moveRow","dropcomplete",{row:e,success:i})},H.prototype.receivers={insert:function(t,e,o){return this.table.addRow(t.getData(),void 0,e),!0},add:function(t,e,o){return this.table.addRow(t.getData()),!0},update:function(t,e,o){return!!e&&(e.update(t.getData()),!0)},replace:function(t,e,o){return!!e&&(this.table.addRow(t.getData(),void 0,e),e.delete(),!0)}},H.prototype.senders={delete:function(t,e,o){t.delete()}},H.prototype.commsReceived=function(t,e,o){switch(e){case"connect":return this.connect(t,o.row);case"disconnect":return this.disconnect(t);case"dropcomplete":return this.dropComplete(t,o.row,o.success)}},u.prototype.registerModule("moveRow",H);var _=function(t){this.table=t,this.allowedTypes=["","data","edit","clipboard"],this.enabled=!0};_.prototype.initializeColumn=function(t){var e=this,o=!1,i={};this.allowedTypes.forEach(function(n){var s,r="mutator"+(n.charAt(0).toUpperCase()+n.slice(1));t.definition[r]&&(s=e.lookupMutator(t.definition[r]))&&(o=!0,i[r]={mutator:s,params:t.definition[r+"Params"]||{}})}),o&&(t.modules.mutate=i)},_.prototype.lookupMutator=function(t){var e=!1;switch(void 0===t?"undefined":_typeof(t)){case"string":this.mutators[t]?e=this.mutators[t]:console.warn("Mutator Error - No such mutator found, ignoring: ",t);break;case"function":e=t}return e},_.prototype.transformRow=function(t,e,o){var i,n=this,s="mutator"+(e.charAt(0).toUpperCase()+e.slice(1));return this.enabled&&n.table.columnManager.traverse(function(n){var r,a,l;n.modules.mutate&&(r=n.modules.mutate[s]||n.modules.mutate.mutator||!1)&&o&&(i=n.getFieldValue(o),"data"!=e&&void 0===i||(l=n.getComponent(),a="function"==typeof r.params?r.params(i,t,e,l):r.params,n.setFieldValue(t,r.mutator(i,t,e,a,l))))}),t},_.prototype.transformCell=function(t,e){var o=t.column.modules.mutate.mutatorEdit||t.column.modules.mutate.mutator||!1,i={};return o?(i=Object.assign(i,t.row.getData()),t.column.setFieldValue(i,e),o.mutator(e,i,"edit",o.params,t.getComponent())):e},_.prototype.enable=function(){this.enabled=!0},_.prototype.disable=function(){this.enabled=!1},_.prototype.mutators={},u.prototype.registerModule("mutator",_);var A=function(t){this.table=t,this.mode="local",this.progressiveLoad=!1,this.size=0,this.page=1,this.count=5,this.max=1,this.displayIndex=0,this.pageSizes=[],this.createElements()};A.prototype.createElements=function(){var t;this.element=document.createElement("span"),this.element.classList.add("tabulator-paginator"),this.pagesElement=document.createElement("span"),this.pagesElement.classList.add("tabulator-pages"),t=document.createElement("button"),t.classList.add("tabulator-page"),t.setAttribute("type","button"),t.setAttribute("role","button"),t.setAttribute("aria-label",""),t.setAttribute("title",""),this.firstBut=t.cloneNode(!0),this.firstBut.setAttribute("data-page","first"),this.prevBut=t.cloneNode(!0),this.prevBut.setAttribute("data-page","prev"),this.nextBut=t.cloneNode(!0),this.nextBut.setAttribute("data-page","next"),this.lastBut=t.cloneNode(!0),this.lastBut.setAttribute("data-page","last"),this.table.options.paginationSizeSelector&&(this.pageSizeSelect=document.createElement("select"),this.pageSizeSelect.classList.add("tabulator-page-size"))},A.prototype.generatePageSizeSelectList=function(){var t=this,e=[];if(this.pageSizeSelect){if(Array.isArray(this.table.options.paginationSizeSelector))e=this.table.options.paginationSizeSelector,this.pageSizes=e,-1==this.pageSizes.indexOf(this.size)&&e.unshift(this.size);else if(-1==this.pageSizes.indexOf(this.size)){e=[];for(var o=1;o<5;o++)e.push(this.size*o);this.pageSizes=e}else e=this.pageSizes;for(;this.pageSizeSelect.firstChild;)this.pageSizeSelect.removeChild(this.pageSizeSelect.firstChild);e.forEach(function(e){var o=document.createElement("option");o.value=e,o.innerHTML=e,t.pageSizeSelect.appendChild(o)}),this.pageSizeSelect.value=this.size}},A.prototype.initialize=function(t){var e,o=this;for(var i in o.table.options.paginationDataSent)o.paginationDataSentNames[i]=o.table.options.paginationDataSent[i];for(var n in o.table.options.paginationDataReceived)o.paginationDataReceivedNames[n]=o.table.options.paginationDataReceived[n];o.table.modules.localize.bind("pagination|first",function(t){o.firstBut.innerHTML=t}),o.table.modules.localize.bind("pagination|first_title",function(t){o.firstBut.setAttribute("aria-label",t),o.firstBut.setAttribute("title",t)}),o.table.modules.localize.bind("pagination|prev",function(t){o.prevBut.innerHTML=t}),o.table.modules.localize.bind("pagination|prev_title",function(t){o.prevBut.setAttribute("aria-label",t),o.prevBut.setAttribute("title",t)}),o.table.modules.localize.bind("pagination|next",function(t){o.nextBut.innerHTML=t}),o.table.modules.localize.bind("pagination|next_title",function(t){o.nextBut.setAttribute("aria-label",t),o.nextBut.setAttribute("title",t)}),o.table.modules.localize.bind("pagination|last",function(t){o.lastBut.innerHTML=t}),o.table.modules.localize.bind("pagination|last_title",function(t){o.lastBut.setAttribute("aria-label",t),o.lastBut.setAttribute("title",t)}),o.firstBut.addEventListener("click",function(){o.setPage(1)}),o.prevBut.addEventListener("click",function(){o.previousPage()}),o.nextBut.addEventListener("click",function(){o.nextPage().then(function(){}).catch(function(){})}),o.lastBut.addEventListener("click",function(){o.setPage(o.max)}),o.table.options.paginationElement&&(o.element=o.table.options.paginationElement),this.pageSizeSelect&&(e=document.createElement("label"),o.table.modules.localize.bind("pagination|page_size",function(t){o.pageSizeSelect.setAttribute("aria-label",t),o.pageSizeSelect.setAttribute("title",t),e.innerHTML=t}),o.element.appendChild(e),o.element.appendChild(o.pageSizeSelect),o.pageSizeSelect.addEventListener("change",function(t){o.setPageSize(o.pageSizeSelect.value),o.setPage(1).then(function(){}).catch(function(){})})),o.element.appendChild(o.firstBut),o.element.appendChild(o.prevBut),o.element.appendChild(o.pagesElement),o.element.appendChild(o.nextBut),o.element.appendChild(o.lastBut),o.table.options.paginationElement||t||o.table.footerManager.append(o.element,o),o.mode=o.table.options.pagination,o.size=o.table.options.paginationSize||Math.floor(o.table.rowManager.getElement().clientHeight/24),o.count=o.table.options.paginationButtonCount,o.generatePageSizeSelectList()},A.prototype.initializeProgressive=function(t){this.initialize(!0),this.mode="progressive_"+t,this.progressiveLoad=!0},A.prototype.setDisplayIndex=function(t){this.displayIndex=t},A.prototype.getDisplayIndex=function(){return this.displayIndex},A.prototype.setMaxRows=function(t){this.max=t?Math.ceil(t/this.size):1,this.page>this.max&&(this.page=this.max)},A.prototype.reset=function(t){return("local"==this.mode||t)&&(this.page=1),!0},A.prototype.setMaxPage=function(t){t=parseInt(t),this.max=t||1,this.page>this.max&&(this.page=this.max,this.trigger())},A.prototype.setPage=function(t){var e=this,o=this;return new Promise(function(i,n){t=parseInt(t),t>0&&t<=e.max?(e.page=t,e.trigger().then(function(){i()}).catch(function(){n()}),o.table.options.persistence&&o.table.modExists("persistence",!0)&&o.table.modules.persistence.config.page&&o.table.modules.persistence.save("page")):(console.warn("Pagination Error - Requested page is out of range of 1 - "+e.max+":",t),n())})},A.prototype.setPageToRow=function(t){var e=this;return new Promise(function(o,i){var n=e.table.rowManager.getDisplayRows(e.displayIndex-1),s=n.indexOf(t);if(s>-1){var r=Math.ceil((s+1)/e.size);e.setPage(r).then(function(){o()}).catch(function(){i()})}else console.warn("Pagination Error - Requested row is not visible"),i()})},A.prototype.setPageSize=function(t){t=parseInt(t),t>0&&(this.size=t),this.pageSizeSelect&&this.generatePageSizeSelectList(),this.table.options.persistence&&this.table.modExists("persistence",!0)&&this.table.modules.persistence.config.page&&this.table.modules.persistence.save("page")},A.prototype._setPageButtons=function(){for(var t=this,e=Math.floor((this.count-1)/2),o=Math.ceil((this.count-1)/2),i=this.max-this.page+e+1<this.count?this.max-this.count+1:Math.max(this.page-e,1),n=this.page<=o?Math.min(this.count,this.max):Math.min(this.page+o,this.max);t.pagesElement.firstChild;)t.pagesElement.removeChild(t.pagesElement.firstChild);1==t.page?(t.firstBut.disabled=!0,t.prevBut.disabled=!0):(t.firstBut.disabled=!1,t.prevBut.disabled=!1),t.page==t.max?(t.lastBut.disabled=!0,t.nextBut.disabled=!0):(t.lastBut.disabled=!1,t.nextBut.disabled=!1);for(var s=i;s<=n;s++)s>0&&s<=t.max&&t.pagesElement.appendChild(t._generatePageButton(s));this.footerRedraw()},A.prototype._generatePageButton=function(t){var e=this,o=document.createElement("button");return o.classList.add("tabulator-page"),t==e.page&&o.classList.add("active"),o.setAttribute("type","button"),o.setAttribute("role","button"),o.setAttribute("aria-label","Show Page "+t),o.setAttribute("title","Show Page "+t),o.setAttribute("data-page",t),o.textContent=t,o.addEventListener("click",function(o){e.setPage(t)}),o},A.prototype.previousPage=function(){var t=this;return new Promise(function(e,o){t.page>1?(t.page--,t.trigger().then(function(){e()}).catch(function(){o()})):(console.warn("Pagination Error - Previous page would be less than page 1:",0),o())})},A.prototype.nextPage=function(){var t=this;return new Promise(function(e,o){t.page<t.max?(t.page++,t.trigger().then(function(){e()}).catch(function(){o()})):(t.progressiveLoad||console.warn("Pagination Error - Next page would be greater than maximum page of "+t.max+":",t.max+1),o())})},A.prototype.getPage=function(){return this.page},A.prototype.getPageMax=function(){return this.max},A.prototype.getPageSize=function(t){return this.size},A.prototype.getMode=function(){return this.mode},A.prototype.getRows=function(t){var e,o,i;if("local"==this.mode){e=[],o=this.size*(this.page-1),i=o+parseInt(this.size),this._setPageButtons();for(var n=o;n<i;n++)t[n]&&e.push(t[n]);return e}return this._setPageButtons(),t.slice(0)},A.prototype.trigger=function(){var t,e=this;return new Promise(function(o,i){switch(e.mode){case"local":t=e.table.rowManager.scrollLeft,e.table.rowManager.refreshActiveData("page"),e.table.rowManager.scrollHorizontal(t),e.table.options.pageLoaded.call(e.table,e.getPage()),o();break;case"remote":case"progressive_load":case"progressive_scroll":e.table.modules.ajax.blockActiveRequest(),e._getRemotePage().then(function(){o()}).catch(function(){i()});break;default:console.warn("Pagination Error - no such pagination mode:",e.mode),i()}})},A.prototype._getRemotePage=function(){var t,e,o=this,i=this;return new Promise(function(n,s){if(i.table.modExists("ajax",!0)||s(),t=u.prototype.helpers.deepClone(i.table.modules.ajax.getParams()||{}),e=i.table.modules.ajax.getParams(),e[o.paginationDataSentNames.page]=i.page,o.size&&(e[o.paginationDataSentNames.size]=o.size),o.table.options.ajaxSorting&&o.table.modExists("sort")){var r=i.table.modules.sort.getSort();r.forEach(function(t){delete t.column}),e[o.paginationDataSentNames.sorters]=r}if(o.table.options.ajaxFiltering&&o.table.modExists("filter")){var a=i.table.modules.filter.getFilters(!0,!0);e[o.paginationDataSentNames.filters]=a}i.table.modules.ajax.setParams(e),i.table.modules.ajax.sendRequest(o.progressiveLoad).then(function(t){i._parseRemoteData(t),n()}).catch(function(t){s()}),i.table.modules.ajax.setParams(t)})},A.prototype._parseRemoteData=function(t){var e,t,o,i=this;if(void 0===t[this.paginationDataReceivedNames.last_page]&&console.warn("Remote Pagination Error - Server response missing '"+this.paginationDataReceivedNames.last_page+"' property"),t[this.paginationDataReceivedNames.data])if(this.max=parseInt(t[this.paginationDataReceivedNames.last_page])||1,this.progressiveLoad)switch(this.mode){case"progressive_load":this.table.rowManager.addRows(t[this.paginationDataReceivedNames.data]),this.page<this.max&&setTimeout(function(){i.nextPage().then(function(){}).catch(function(){})},i.table.options.ajaxProgressiveLoadDelay);break;case"progressive_scroll":t=this.table.rowManager.getData().concat(t[this.paginationDataReceivedNames.data]),this.table.rowManager.setData(t,!0),o=this.table.options.ajaxProgressiveLoadScrollMargin||2*this.table.rowManager.element.clientHeight,i.table.rowManager.element.scrollHeight<=i.table.rowManager.element.clientHeight+o&&i.nextPage().then(function(){}).catch(function(){})}else e=this.table.rowManager.scrollLeft,this.table.rowManager.setData(t[this.paginationDataReceivedNames.data]),this.table.rowManager.scrollHorizontal(e),this.table.columnManager.scrollHorizontal(e),this.table.options.pageLoaded.call(this.table,this.getPage());else console.warn("Remote Pagination Error - Server response missing '"+this.paginationDataReceivedNames.data+"' property")},A.prototype.footerRedraw=function(){var t=this.table.footerManager.element;Math.ceil(t.clientWidth)-t.scrollWidth<0?this.pagesElement.style.display="none":(this.pagesElement.style.display="",Math.ceil(t.clientWidth)-t.scrollWidth<0&&(this.pagesElement.style.display="none"))},A.prototype.paginationDataSentNames={page:"page",size:"size",sorters:"sorters",filters:"filters"},A.prototype.paginationDataReceivedNames={current_page:"current_page",last_page:"last_page",data:"data"},u.prototype.registerModule("page",A);var P=function(t){this.table=t,this.mode="",this.id="",this.defWatcherBlock=!1,this.config={},this.readFunc=!1,this.writeFunc=!1};P.prototype.localStorageTest=function(){var t="_tabulator_test";try{return window.localStorage.setItem(t,t),window.localStorage.removeItem(t),!0}catch(t){return!1}},P.prototype.initialize=function(){var t,e=this.table.options.persistenceMode,o=this.table.options.persistenceID;this.mode=!0!==e?e:this.localStorageTest()?"local":"cookie",this.table.options.persistenceReaderFunc?"function"==typeof this.table.options.persistenceReaderFunc?this.readFunc=this.table.options.persistenceReaderFunc:this.readers[this.table.options.persistenceReaderFunc]?this.readFunc=this.readers[this.table.options.persistenceReaderFunc]:console.warn("Persistence Read Error - invalid reader set",this.table.options.persistenceReaderFunc):this.readers[this.mode]?this.readFunc=this.readers[this.mode]:console.warn("Persistence Read Error - invalid reader set",this.mode),this.table.options.persistenceWriterFunc?"function"==typeof this.table.options.persistenceWriterFunc?this.writeFunc=this.table.options.persistenceWriterFunc:this.readers[this.table.options.persistenceWriterFunc]?this.writeFunc=this.readers[this.table.options.persistenceWriterFunc]:console.warn("Persistence Write Error - invalid reader set",this.table.options.persistenceWriterFunc):this.writers[this.mode]?this.writeFunc=this.writers[this.mode]:console.warn("Persistence Write Error - invalid writer set",this.mode),this.id="tabulator-"+(o||this.table.element.getAttribute("id")||""),this.config={sort:!0===this.table.options.persistence||this.table.options.persistence.sort,filter:!0===this.table.options.persistence||this.table.options.persistence.filter,group:!0===this.table.options.persistence||this.table.options.persistence.group,page:!0===this.table.options.persistence||this.table.options.persistence.page,columns:!0===this.table.options.persistence?["title","width","visible"]:this.table.options.persistence.columns},this.config.page&&(t=this.retreiveData("page"))&&(void 0===t.paginationSize||!0!==this.config.page&&!this.config.page.size||(this.table.options.paginationSize=t.paginationSize),void 0===t.paginationInitialPage||!0!==this.config.page&&!this.config.page.page||(this.table.options.paginationInitialPage=t.paginationInitialPage)),this.config.group&&(t=this.retreiveData("group"))&&(void 0===t.groupBy||!0!==this.config.group&&!this.config.group.groupBy||(this.table.options.groupBy=t.groupBy),void 0===t.groupStartOpen||!0!==this.config.group&&!this.config.group.groupStartOpen||(this.table.options.groupStartOpen=t.groupStartOpen),void 0===t.groupHeader||!0!==this.config.group&&!this.config.group.groupHeader||(this.table.options.groupHeader=t.groupHeader))},P.prototype.initializeColumn=function(t){var e,o,i=this;this.config.columns&&(this.defWatcherBlock=!0,e=t.getDefinition(),o=!0===this.config.columns?Object.keys(e):this.config.columns,o.forEach(function(t){var o=Object.getOwnPropertyDescriptor(e,t),n=e[t];o&&Object.defineProperty(e,t,{set:function(t){n=t,i.defWatcherBlock||i.save("columns"),o.set&&o.set(t)},get:function(){return o.get&&o.get(),n}})}),this.defWatcherBlock=!1)},P.prototype.load=function(t,e){var o=this.retreiveData(t);return e&&(o=o?this.mergeDefinition(e,o):e),o},P.prototype.retreiveData=function(t){return!!this.readFunc&&this.readFunc(this.id,t)},P.prototype.mergeDefinition=function(t,e){var o=this,i=[];return e=e||[],e.forEach(function(e,n){var s,r=o._findColumn(t,e);r&&(!0===o.config.columns||void 0==o.config.columns?(s=Object.keys(r),s.push("width")):s=o.config.columns,s.forEach(function(t){void 0!==e[t]&&(r[t]=e[t])}),r.columns&&(r.columns=o.mergeDefinition(r.columns,e.columns)),i.push(r))}),t.forEach(function(t,n){o._findColumn(e,t)||(i.length>n?i.splice(n,0,t):i.push(t))}),i},P.prototype._findColumn=function(t,e){var o=e.columns?"group":e.field?"field":"object";return t.find(function(t){switch(o){case"group":return t.title===e.title&&t.columns.length===e.columns.length;case"field":return t.field===e.field;case"object":return t===e}})},P.prototype.save=function(t){var e={};switch(t){case"columns":e=this.parseColumns(this.table.columnManager.getColumns());break;case"filter":e=this.table.modules.filter.getFilters();break;case"sort":e=this.validateSorters(this.table.modules.sort.getSort());break;case"group":e=this.getGroupConfig();break;case"page":e=this.getPageConfig()}this.writeFunc&&this.writeFunc(this.id,t,e)},P.prototype.validateSorters=function(t){return t.forEach(function(t){t.column=t.field,delete t.field}),t},P.prototype.getGroupConfig=function(){
return this.config.group&&((!0===this.config.group||this.config.group.groupBy)&&(data.groupBy=this.table.options.groupBy),(!0===this.config.group||this.config.group.groupStartOpen)&&(data.groupStartOpen=this.table.options.groupStartOpen),(!0===this.config.group||this.config.group.groupHeader)&&(data.groupHeader=this.table.options.groupHeader)),data},P.prototype.getPageConfig=function(){var t={};return this.config.page&&((!0===this.config.page||this.config.page.size)&&(t.paginationSize=this.table.modules.page.getPageSize()),(!0===this.config.page||this.config.page.page)&&(t.paginationInitialPage=this.table.modules.page.getPage())),t},P.prototype.parseColumns=function(t){var e=this,o=[];return t.forEach(function(t){var i,n={},s=t.getDefinition();t.isGroup?(n.title=s.title,n.columns=e.parseColumns(t.getColumns())):(n.field=t.getField(),!0===e.config.columns||void 0==e.config.columns?(i=Object.keys(s),i.push("width")):i=e.config.columns,i.forEach(function(e){switch(e){case"width":n.width=t.getWidth();break;case"visible":n.visible=t.visible;break;default:n[e]=s[e]}})),o.push(n)}),o},P.prototype.readers={local:function(t,e){var o=localStorage.getItem(t+"-"+e);return!!o&&JSON.parse(o)},cookie:function(t,e){var o,i=document.cookie,n=t+"-"+e,s=i.indexOf(n+"=");return s>-1&&(i=i.substr(s),o=i.indexOf(";"),o>-1&&(i=i.substr(0,o)),data=i.replace(n+"=","")),!!data&&JSON.parse(data)}},P.prototype.writers={local:function(t,e,o){localStorage.setItem(t+"-"+e,JSON.stringify(o))},cookie:function(t,e,o){var i=new Date;i.setDate(i.getDate()+1e4),document.cookie=t+"_"+e+"="+JSON.stringify(o)+"; expires="+i.toUTCString()}},u.prototype.registerModule("persistence",P);var B=function(t){this.table=t,this.element=!1,this.manualBlock=!1};B.prototype.initialize=function(){window.addEventListener("beforeprint",this.replaceTable.bind(this)),window.addEventListener("afterprint",this.cleanup.bind(this))},B.prototype.replaceTable=function(){this.manualBlock||(this.element=document.createElement("div"),this.element.classList.add("tabulator-print-table"),this.element.appendChild(this.table.modules.htmlTableExport.genereateTable(this.table.options.printConfig,this.table.options.printCopyStyle,this.table.options.printVisibleRows,"print")),this.table.element.style.display="none",this.table.element.parentNode.insertBefore(this.element,this.table.element))},B.prototype.cleanup=function(){document.body.classList.remove("tabulator-print-fullscreen-hide"),this.element&&this.element.parentNode&&(this.element.parentNode.removeChild(this.element),this.table.element.style.display="")},B.prototype.printFullscreen=function(t,e,o){var i,n,s=window.scrollX,r=window.scrollY,a=document.createElement("div"),l=document.createElement("div"),c=this.table.modules.htmlTableExport.genereateTable(void 0!==o?o:this.table.options.printConfig,void 0!==e?e:this.table.options.printCopyStyle,t,"print");this.manualBlock=!0,this.element=document.createElement("div"),this.element.classList.add("tabulator-print-fullscreen"),this.table.options.printHeader&&(a.classList.add("tabulator-print-header"),i="function"==typeof this.table.options.printHeader?this.table.options.printHeader.call(this.table):this.table.options.printHeader,"string"==typeof i?a.innerHTML=i:a.appendChild(i),this.element.appendChild(a)),this.element.appendChild(c),this.table.options.printFooter&&(l.classList.add("tabulator-print-footer"),n="function"==typeof this.table.options.printFooter?this.table.options.printFooter.call(this.table):this.table.options.printFooter,"string"==typeof n?l.innerHTML=n:l.appendChild(n),this.element.appendChild(l)),document.body.classList.add("tabulator-print-fullscreen-hide"),document.body.appendChild(this.element),this.table.options.printFormatter&&this.table.options.printFormatter(this.element,c),window.print(),this.cleanup(),window.scrollTo(s,r),this.manualBlock=!1},u.prototype.registerModule("print",B);var N=function(t){this.table=t,this.data=!1,this.blocked=!1,this.origFuncs={},this.currentVersion=0};N.prototype.watchData=function(t){var e,o=this;this.currentVersion++,e=this.currentVersion,o.unwatchData(),o.data=t,o.origFuncs.push=t.push,Object.defineProperty(o.data,"push",{enumerable:!1,configurable:!0,value:function(){var i=Array.from(arguments);return o.blocked||e!==o.currentVersion||i.forEach(function(t){o.table.rowManager.addRowActual(t,!1)}),o.origFuncs.push.apply(t,arguments)}}),o.origFuncs.unshift=t.unshift,Object.defineProperty(o.data,"unshift",{enumerable:!1,configurable:!0,value:function(){var i=Array.from(arguments);return o.blocked||e!==o.currentVersion||i.forEach(function(t){o.table.rowManager.addRowActual(t,!0)}),o.origFuncs.unshift.apply(t,arguments)}}),o.origFuncs.shift=t.shift,Object.defineProperty(o.data,"shift",{enumerable:!1,configurable:!0,value:function(){var i;return o.blocked||e!==o.currentVersion||o.data.length&&(i=o.table.rowManager.getRowFromDataObject(o.data[0]))&&i.deleteActual(),o.origFuncs.shift.call(t)}}),o.origFuncs.pop=t.pop,Object.defineProperty(o.data,"pop",{enumerable:!1,configurable:!0,value:function(){var i;return o.blocked||e!==o.currentVersion||o.data.length&&(i=o.table.rowManager.getRowFromDataObject(o.data[o.data.length-1]))&&i.deleteActual(),o.origFuncs.pop.call(t)}}),o.origFuncs.splice=t.splice,Object.defineProperty(o.data,"splice",{enumerable:!1,configurable:!0,value:function(){var i,n=Array.from(arguments),s=n[0]<0?t.length+n[0]:n[0],r=n[1],a=!!n[2]&&n.slice(2);if(!o.blocked&&e===o.currentVersion){if(a&&(i=!!t[s]&&o.table.rowManager.getRowFromDataObject(t[s]),i?a.forEach(function(t){o.table.rowManager.addRowActual(t,!0,i,!0)}):(a=a.slice().reverse(),a.forEach(function(t){o.table.rowManager.addRowActual(t,!0,!1,!0)}))),0!==r){var l=t.slice(s,void 0===n[1]?n[1]:s+r);l.forEach(function(t,e){var i=o.table.rowManager.getRowFromDataObject(t);i&&i.deleteActual(e!==l.length-1)})}(a||0!==r)&&o.table.rowManager.reRenderInPosition()}return o.origFuncs.splice.apply(t,arguments)}})},N.prototype.unwatchData=function(){if(!1!==this.data)for(var t in this.origFuncs)Object.defineProperty(this.data,t,{enumerable:!0,configurable:!0,writable:!0,value:this.origFuncs.key})},N.prototype.watchRow=function(t){var e=t.getData();this.blocked=!0;for(var o in e)this.watchKey(t,e,o);this.blocked=!1},N.prototype.watchKey=function(t,e,o){var i=this,n=Object.getOwnPropertyDescriptor(e,o),s=e[o],r=this.currentVersion;Object.defineProperty(e,o,{set:function(e){if(s=e,!i.blocked&&r===i.currentVersion){var a={};a[o]=e,t.updateData(a)}n.set&&n.set(e)},get:function(){return n.get&&n.get(),s}})},N.prototype.unwatchRow=function(t){var e=t.getData();for(var o in e)Object.defineProperty(e,o,{value:e[o]})},N.prototype.block=function(){this.blocked=!0},N.prototype.unblock=function(){this.blocked=!1},u.prototype.registerModule("reactiveData",N);var I=function(t){this.table=t,this.startColumn=!1,this.startX=!1,this.startWidth=!1,this.handle=null,this.prevHandle=null};I.prototype.initializeColumn=function(t,e,o){var i=this,n=!1,s=this.table.options.resizableColumns;if("header"===t&&(n="textarea"==e.definition.formatter||e.definition.variableHeight,e.modules.resize={variableHeight:n}),!0===s||s==t){var r=document.createElement("div");r.className="tabulator-col-resize-handle";var a=document.createElement("div");a.className="tabulator-col-resize-handle prev",r.addEventListener("click",function(t){t.stopPropagation()});var l=function(t){var o=e.getLastColumn();o&&i._checkResizability(o)&&(i.startColumn=e,i._mouseDown(t,o,r))};r.addEventListener("mousedown",l),r.addEventListener("touchstart",l,{passive:!0}),r.addEventListener("dblclick",function(t){var o=e.getLastColumn();o&&i._checkResizability(o)&&(t.stopPropagation(),o.reinitializeWidth(!0))}),a.addEventListener("click",function(t){t.stopPropagation()});var c=function(t){var o,n,s;(o=e.getFirstColumn())&&(n=i.table.columnManager.findColumnIndex(o),(s=n>0&&i.table.columnManager.getColumnByIndex(n-1))&&i._checkResizability(s)&&(i.startColumn=e,i._mouseDown(t,s,a)))};a.addEventListener("mousedown",c),a.addEventListener("touchstart",c,{passive:!0}),a.addEventListener("dblclick",function(t){var o,n,s;(o=e.getFirstColumn())&&(n=i.table.columnManager.findColumnIndex(o),(s=n>0&&i.table.columnManager.getColumnByIndex(n-1))&&i._checkResizability(s)&&(t.stopPropagation(),s.reinitializeWidth(!0)))}),o.appendChild(r),o.appendChild(a)}},I.prototype._checkResizability=function(t){return void 0!==t.definition.resizable?t.definition.resizable:this.table.options.resizableColumns},I.prototype._mouseDown=function(t,e,o){function i(t){e.setWidth(s.startWidth+((void 0===t.screenX?t.touches[0].screenX:t.screenX)-s.startX)),!s.table.browserSlow&&e.modules.resize&&e.modules.resize.variableHeight&&e.checkCellHeights()}function n(t){s.startColumn.modules.edit&&(s.startColumn.modules.edit.blocked=!1),s.table.browserSlow&&e.modules.resize&&e.modules.resize.variableHeight&&e.checkCellHeights(),document.body.removeEventListener("mouseup",n),document.body.removeEventListener("mousemove",i),o.removeEventListener("touchmove",i),o.removeEventListener("touchend",n),s.table.element.classList.remove("tabulator-block-select"),s.table.options.persistence&&s.table.modExists("persistence",!0)&&s.table.modules.persistence.config.columns&&s.table.modules.persistence.save("columns"),s.table.options.columnResized.call(s.table,e.getComponent())}var s=this;s.table.element.classList.add("tabulator-block-select"),t.stopPropagation(),s.startColumn.modules.edit&&(s.startColumn.modules.edit.blocked=!0),s.startX=void 0===t.screenX?t.touches[0].screenX:t.screenX,s.startWidth=e.getWidth(),document.body.addEventListener("mousemove",i),document.body.addEventListener("mouseup",n),o.addEventListener("touchmove",i,{passive:!0}),o.addEventListener("touchend",n)},u.prototype.registerModule("resizeColumns",I);var O=function(t){this.table=t,this.startColumn=!1,this.startY=!1,this.startHeight=!1,this.handle=null,this.prevHandle=null};O.prototype.initializeRow=function(t){var e=this,o=t.getElement(),i=document.createElement("div");i.className="tabulator-row-resize-handle";var n=document.createElement("div");n.className="tabulator-row-resize-handle prev",i.addEventListener("click",function(t){t.stopPropagation()});var s=function(o){e.startRow=t,e._mouseDown(o,t,i)};i.addEventListener("mousedown",s),i.addEventListener("touchstart",s,{passive:!0}),n.addEventListener("click",function(t){t.stopPropagation()});var r=function(o){var i=e.table.rowManager.prevDisplayRow(t);i&&(e.startRow=i,e._mouseDown(o,i,n))};n.addEventListener("mousedown",r),n.addEventListener("touchstart",r,{passive:!0}),o.appendChild(i),o.appendChild(n)},O.prototype._mouseDown=function(t,e,o){function i(t){e.setHeight(s.startHeight+((void 0===t.screenY?t.touches[0].screenY:t.screenY)-s.startY))}function n(t){document.body.removeEventListener("mouseup",i),document.body.removeEventListener("mousemove",i),o.removeEventListener("touchmove",i),o.removeEventListener("touchend",n),s.table.element.classList.remove("tabulator-block-select"),s.table.options.rowResized.call(this.table,e.getComponent())}var s=this;s.table.element.classList.add("tabulator-block-select"),t.stopPropagation(),s.startY=void 0===t.screenY?t.touches[0].screenY:t.screenY,s.startHeight=e.getHeight(),document.body.addEventListener("mousemove",i),document.body.addEventListener("mouseup",n),o.addEventListener("touchmove",i,{passive:!0}),o.addEventListener("touchend",n)},u.prototype.registerModule("resizeRows",O);var j=function(t){this.table=t,this.binding=!1,this.observer=!1};j.prototype.initialize=function(t){var e=this.table;"undefined"!=typeof ResizeObserver&&"virtual"===e.rowManager.getRenderMode()?(this.observer=new ResizeObserver(function(t){(!e.browserMobile||e.browserMobile&&!e.modules.edit.currentCell)&&e.redraw()}),this.observer.observe(e.element)):(this.binding=function(){(!e.browserMobile||e.browserMobile&&!e.modules.edit.currentCell)&&e.redraw()},window.addEventListener("resize",this.binding))},j.prototype.clearBindings=function(t){this.binding&&window.removeEventListener("resize",this.binding),this.observer&&this.observer.unobserve(this.table.element)},u.prototype.registerModule("resizeTable",j);var G=function(t){this.table=t,this.columns=[],this.hiddenColumns=[],this.mode="",this.index=0,this.collapseFormatter=[],this.collapseStartOpen=!0,this.collapseHandleColumn=!1};G.prototype.initialize=function(){var t=this,e=[];this.mode=this.table.options.responsiveLayout,this.collapseFormatter=this.table.options.responsiveLayoutCollapseFormatter||this.formatCollapsedData,this.collapseStartOpen=this.table.options.responsiveLayoutCollapseStartOpen,this.hiddenColumns=[],this.table.columnManager.columnsByIndex.forEach(function(o,i){o.modules.responsive&&o.modules.responsive.order&&o.modules.responsive.visible&&(o.modules.responsive.index=i,e.push(o),o.visible||"collapse"!==t.mode||t.hiddenColumns.push(o))}),e=e.reverse(),e=e.sort(function(t,e){return e.modules.responsive.order-t.modules.responsive.order||e.modules.responsive.index-t.modules.responsive.index}),this.columns=e,"collapse"===this.mode&&this.generateCollapsedContent();for(var o=this.table.columnManager.columnsByIndex,i=Array.isArray(o),n=0,o=i?o:o[Symbol.iterator]();;){var s;if(i){if(n>=o.length)break;s=o[n++]}else{if(n=o.next(),n.done)break;s=n.value}var r=s;if("responsiveCollapse"==r.definition.formatter){this.collapseHandleColumn=r;break}}this.collapseHandleColumn&&(this.hiddenColumns.length?this.collapseHandleColumn.show():this.collapseHandleColumn.hide())},G.prototype.initializeColumn=function(t){var e=t.getDefinition();t.modules.responsive={order:void 0===e.responsive?1:e.responsive,visible:!1!==e.visible}},G.prototype.initializeRow=function(t){var e;"calc"!==t.type&&(e=document.createElement("div"),e.classList.add("tabulator-responsive-collapse"),t.modules.responsiveLayout={element:e,open:this.collapseStartOpen},this.collapseStartOpen||(e.style.display="none"))},G.prototype.layoutRow=function(t){var e=t.getElement();t.modules.responsiveLayout&&(e.appendChild(t.modules.responsiveLayout.element),this.generateCollapsedRowContent(t))},G.prototype.updateColumnVisibility=function(t,e){t.modules.responsive&&(t.modules.responsive.visible=e,this.initialize())},G.prototype.hideColumn=function(t){var e=this.hiddenColumns.length;t.hide(!1,!0),"collapse"===this.mode&&(this.hiddenColumns.unshift(t),this.generateCollapsedContent(),this.collapseHandleColumn&&!e&&this.collapseHandleColumn.show())},G.prototype.showColumn=function(t){var e;t.show(!1,!0),t.setWidth(t.getWidth()),"collapse"===this.mode&&(e=this.hiddenColumns.indexOf(t),e>-1&&this.hiddenColumns.splice(e,1),this.generateCollapsedContent(),this.collapseHandleColumn&&!this.hiddenColumns.length&&this.collapseHandleColumn.hide())},G.prototype.update=function(){for(var t=this,e=!0;e;){var o="fitColumns"==t.table.modules.layout.getMode()?t.table.columnManager.getFlexBaseWidth():t.table.columnManager.getWidth(),i=(t.table.options.headerVisible?t.table.columnManager.element.clientWidth:t.table.element.clientWidth)-o;if(i<0){var n=t.columns[t.index];n?(t.hideColumn(n),t.index++):e=!1}else{var s=t.columns[t.index-1];s&&i>0&&i>=s.getWidth()?(t.showColumn(s),t.index--):e=!1}t.table.rowManager.activeRowsCount||t.table.rowManager.renderEmptyScroll()}},G.prototype.generateCollapsedContent=function(){var t=this;this.table.rowManager.getDisplayRows().forEach(function(e){t.generateCollapsedRowContent(e)})},G.prototype.generateCollapsedRowContent=function(t){var e,o;if(t.modules.responsiveLayout){for(e=t.modules.responsiveLayout.element;e.firstChild;)e.removeChild(e.firstChild);o=this.collapseFormatter(this.generateCollapsedRowData(t)),o&&e.appendChild(o)}},G.prototype.generateCollapsedRowData=function(t){var e,o=this,i=t.getData(),n=[];return this.hiddenColumns.forEach(function(s){var r=s.getFieldValue(i);s.definition.title&&s.field&&(s.modules.format&&o.table.options.responsiveLayoutCollapseUseFormatters?(e={value:!1,data:{},getValue:function(){return r},getData:function(){return i},getElement:function(){return document.createElement("div")},getRow:function(){return t.getComponent()},getColumn:function(){return s.getComponent()}},n.push({title:s.definition.title,value:s.modules.format.formatter.call(o.table.modules.format,e,s.modules.format.params)})):n.push({title:s.definition.title,value:r}))}),n},G.prototype.formatCollapsedData=function(t){var e=document.createElement("table"),o="";return t.forEach(function(t){var e=document.createElement("div");t.value instanceof Node&&(e.appendChild(t.value),t.value=e.innerHTML),o+="<tr><td><strong>"+t.title+"</strong></td><td>"+t.value+"</td></tr>"}),e.innerHTML=o,Object.keys(t).length?e:""},u.prototype.registerModule("responsiveLayout",G);var V=function(t){this.table=t,this.selecting=!1,this.lastClickedRow=!1,this.selectPrev=[],this.selectedRows=[],this.headerCheckboxElement=null};V.prototype.clearSelectionData=function(t){this.selecting=!1,this.lastClickedRow=!1,this.selectPrev=[],this.selectedRows=[],t||this._rowSelectionChanged()},V.prototype.initializeRow=function(t){var e=this,o=t.getElement(),i=function t(){setTimeout(function(){e.selecting=!1},50),document.body.removeEventListener("mouseup",t)};t.modules.select={selected:!1},e.table.options.selectableCheck.call(this.table,t.getComponent())?(o.classList.add("tabulator-selectable"),o.classList.remove("tabulator-unselectable"),e.table.options.selectable&&"highlight"!=e.table.options.selectable&&("click"===e.table.options.selectableRangeMode?o.addEventListener("click",function(o){if(o.shiftKey){e.table._clearSelection(),e.lastClickedRow=e.lastClickedRow||t;var i=e.table.rowManager.getDisplayRowIndex(e.lastClickedRow),n=e.table.rowManager.getDisplayRowIndex(t),s=i<=n?i:n,r=i>=n?i:n,a=e.table.rowManager.getDisplayRows().slice(0),l=a.splice(s,r-s+1);o.ctrlKey||o.metaKey?(l.forEach(function(o){o!==e.lastClickedRow&&(!0===e.table.options.selectable||e.isRowSelected(t)?e.toggleRow(o):e.selectedRows.length<e.table.options.selectable&&e.toggleRow(o))}),e.lastClickedRow=t):(e.deselectRows(),!0!==e.table.options.selectable&&l.length>e.table.options.selectable&&(l=l.slice(0,e.table.options.selectable)),e.selectRows(l)),e.table._clearSelection()}else o.ctrlKey||o.metaKey?(e.toggleRow(t),e.lastClickedRow=t):(e.deselectRows(),e.selectRows(t),e.lastClickedRow=t)}):(o.addEventListener("click",function(o){e.table.modExists("edit")&&e.table.modules.edit.getCurrentCell()||e.table._clearSelection(),e.selecting||e.toggleRow(t)}),o.addEventListener("mousedown",function(o){if(o.shiftKey)return e.table._clearSelection(),e.selecting=!0,e.selectPrev=[],document.body.addEventListener("mouseup",i),document.body.addEventListener("keyup",i),e.toggleRow(t),!1}),o.addEventListener("mouseenter",function(o){e.selecting&&(e.table._clearSelection(),e.toggleRow(t),e.selectPrev[1]==t&&e.toggleRow(e.selectPrev[0]))}),o.addEventListener("mouseout",function(o){e.selecting&&(e.table._clearSelection(),e.selectPrev.unshift(t))})))):(o.classList.add("tabulator-unselectable"),o.classList.remove("tabulator-selectable"))},V.prototype.toggleRow=function(t){this.table.options.selectableCheck.call(this.table,t.getComponent())&&(t.modules.select&&t.modules.select.selected?this._deselectRow(t):this._selectRow(t))},V.prototype.selectRows=function(t){var e,o=this;switch(void 0===t?"undefined":_typeof(t)){case"undefined":this.table.rowManager.rows.forEach(function(t){o._selectRow(t,!0,!0)}),this._rowSelectionChanged();break;case"string":e=this.table.rowManager.findRow(t),e?this._selectRow(e,!0,!0):this.table.rowManager.getRows(t).forEach(function(t){o._selectRow(t,!0,!0)}),this._rowSelectionChanged();break;default:Array.isArray(t)?(t.forEach(function(t){o._selectRow(t,!0,!0)}),this._rowSelectionChanged()):this._selectRow(t,!1,!0)}},V.prototype._selectRow=function(t,e,o){if(!isNaN(this.table.options.selectable)&&!0!==this.table.options.selectable&&!o&&this.selectedRows.length>=this.table.options.selectable){if(!this.table.options.selectableRollingSelection)return!1;this._deselectRow(this.selectedRows[0])}var i=this.table.rowManager.findRow(t);i?-1==this.selectedRows.indexOf(i)&&(i.modules.select||(i.modules.select={}),i.modules.select.selected=!0,i.modules.select.checkboxEl&&(i.modules.select.checkboxEl.checked=!0),i.getElement().classList.add("tabulator-selected"),this.selectedRows.push(i),e||(this.table.options.rowSelected.call(this.table,i.getComponent()),this._rowSelectionChanged())):e||console.warn("Selection Error - No such row found, ignoring selection:"+t)},V.prototype.isRowSelected=function(t){return-1!==this.selectedRows.indexOf(t)},V.prototype.deselectRows=function(t){var e,o=this;if(void 0===t){e=o.selectedRows.length;for(var i=0;i<e;i++)o._deselectRow(o.selectedRows[0],!0);o._rowSelectionChanged()}else Array.isArray(t)?(t.forEach(function(t){o._deselectRow(t,!0)}),o._rowSelectionChanged()):o._deselectRow(t)},V.prototype._deselectRow=function(t,e){var o,i=this,n=i.table.rowManager.findRow(t);n?(o=i.selectedRows.findIndex(function(t){return t==n}))>-1&&(n.modules.select||(n.modules.select={}),n.modules.select.selected=!1,n.modules.select.checkboxEl&&(n.modules.select.checkboxEl.checked=!1),n.getElement().classList.remove("tabulator-selected"),i.selectedRows.splice(o,1),e||(i.table.options.rowDeselected.call(this.table,n.getComponent()),i._rowSelectionChanged())):e||console.warn("Deselection Error - No such row found, ignoring selection:"+t)},V.prototype.getSelectedData=function(){var t=[];return this.selectedRows.forEach(function(e){t.push(e.getData())}),t},V.prototype.getSelectedRows=function(){var t=[];return this.selectedRows.forEach(function(e){t.push(e.getComponent())}),t},V.prototype._rowSelectionChanged=function(){this.headerCheckboxElement&&(0===this.selectedRows.length?(this.headerCheckboxElement.checked=!1,this.headerCheckboxElement.indeterminate=!1):this.table.rowManager.rows.length===this.selectedRows.length?(this.headerCheckboxElement.checked=!0,this.headerCheckboxElement.indeterminate=!1):(this.headerCheckboxElement.indeterminate=!0,this.headerCheckboxElement.checked=!1)),this.table.options.rowSelectionChanged.call(this.table,this.getSelectedData(),this.getSelectedRows())},V.prototype.registerRowSelectCheckbox=function(t,e){t._row.modules.select||(t._row.modules.select={}),t._row.modules.select.checkboxEl=e},V.prototype.registerHeaderSelectCheckbox=function(t){this.headerCheckboxElement=t},u.prototype.registerModule("selectRow",V);var W=function(t){this.table=t,this.sortList=[],this.changed=!1};W.prototype.initializeColumn=function(t,e){var o,i,n=this,s=!1;switch(_typeof(t.definition.sorter)){case"string":n.sorters[t.definition.sorter]?s=n.sorters[t.definition.sorter]:console.warn("Sort Error - No such sorter found: ",t.definition.sorter);break;case"function":s=t.definition.sorter}t.modules.sort={sorter:s,dir:"none",params:t.definition.sorterParams||{},startingDir:t.definition.headerSortStartingDir||"asc",tristate:void 0!==t.definition.headerSortTristate?t.definition.headerSortTristate:this.table.options.headerSortTristate},(void 0===t.definition.headerSort?!1!==this.table.options.headerSort:!1!==t.definition.headerSort)&&(o=t.getElement(),o.classList.add("tabulator-sortable"),i=document.createElement("div"),i.classList.add("tabulator-arrow"),e.appendChild(i),o.addEventListener("click",function(e){var o="",i=[],s=!1;if(t.modules.sort){if(t.modules.sort.tristate)o="none"==t.modules.sort.dir?t.modules.sort.startingDir:t.modules.sort.dir==t.modules.sort.startingDir?"asc"==t.modules.sort.dir?"desc":"asc":"none";else switch(t.modules.sort.dir){case"asc":o="desc";break;case"desc":o="asc";break;default:o=t.modules.sort.startingDir}n.table.options.columnHeaderSortMulti&&(e.shiftKey||e.ctrlKey)?(i=n.getSort(),s=i.findIndex(function(e){return e.field===t.getField()}),s>-1?(i[s].dir=o,s!=i.length-1&&(s=i.splice(s,1)[0],"none"!=o&&i.push(s))):"none"!=o&&i.push({column:t,dir:o}),n.setSort(i)):"none"==o?n.clear():n.setSort(t,o),n.table.rowManager.sorterRefresh(!n.sortList.length)}}))},W.prototype.hasChanged=function(){var t=this.changed;return this.changed=!1,t},W.prototype.getSort=function(){var t=this,e=[];return t.sortList.forEach(function(t){t.column&&e.push({column:t.column.getComponent(),field:t.column.getField(),dir:t.dir})}),e},W.prototype.setSort=function(t,e){var o=this,i=[];Array.isArray(t)||(t=[{column:t,dir:e}]),t.forEach(function(t){var e;e=o.table.columnManager.findColumn(t.column),e?(t.column=e,i.push(t),o.changed=!0):console.warn("Sort Warning - Sort field does not exist and is being ignored: ",t.column)}),o.sortList=i,this.table.options.persistence&&this.table.modExists("persistence",!0)&&this.table.modules.persistence.config.sort&&this.table.modules.persistence.save("sort")},W.prototype.clear=function(){this.setSort([])},W.prototype.findSorter=function(t){var e,o=this.table.rowManager.activeRows[0],i="string";if(o&&(o=o.getData(),t.getField()))switch(e=t.getFieldValue(o),void 0===e?"undefined":_typeof(e)){case"undefined":i="string";break;case"boolean":i="boolean";break;default:isNaN(e)||""===e?e.match(/((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+$/i)&&(i="alphanum"):i="number"}return this.sorters[i]},W.prototype.sort=function(t){var e,o=this;e=this.table.options.sortOrderReverse?o.sortList.slice().reverse():o.sortList,o.table.options.dataSorting&&o.table.options.dataSorting.call(o.table,o.getSort()),o.clearColumnHeaders(),o.table.options.ajaxSorting?e.forEach(function(t,e){o.setColumnHeader(t.column,t.dir)}):e.forEach(function(i,n){i.column&&i.column.modules.sort&&(i.column.modules.sort.sorter||(i.column.modules.sort.sorter=o.findSorter(i.column)),o._sortItem(t,i.column,i.dir,e,n)),o.setColumnHeader(i.column,i.dir)}),o.table.options.dataSorted&&o.table.options.dataSorted.call(o.table,o.getSort(),o.table.rowManager.getComponents("active"))},W.prototype.clearColumnHeaders=function(){this.table.columnManager.getRealColumns().forEach(function(t){t.modules.sort&&(t.modules.sort.dir="none",t.getElement().setAttribute("aria-sort","none"))})},W.prototype.setColumnHeader=function(t,e){t.modules.sort.dir=e,t.getElement().setAttribute("aria-sort",e)},W.prototype._sortItem=function(t,e,o,i,n){var s=this,r="function"==typeof e.modules.sort.params?e.modules.sort.params(e.getComponent(),o):e.modules.sort.params;t.sort(function(t,a){var l=s._sortRow(t,a,e,o,r);if(0===l&&n)for(var c=n-1;c>=0&&0===(l=s._sortRow(t,a,i[c].column,i[c].dir,r));c--);return l})},W.prototype._sortRow=function(t,e,o,i,n){var s,r,a="asc"==i?t:e,l="asc"==i?e:t;return t=o.getFieldValue(a.getData()),e=o.getFieldValue(l.getData()),t=void 0!==t?t:"",e=void 0!==e?e:"",s=a.getComponent(),r=l.getComponent(),o.modules.sort.sorter.call(this,t,e,s,r,o.getComponent(),i,n)},W.prototype.sorters={number:function(t,e,o,i,n,s,r){var a=r.alignEmptyValues,l=r.decimalSeparator||".",c=r.thousandSeparator||",",u=0;if(t=parseFloat(String(t).split(c).join("").split(l).join(".")),e=parseFloat(String(e).split(c).join("").split(l).join(".")),isNaN(t))u=isNaN(e)?0:-1;else{if(!isNaN(e))return t-e;u=1}return("top"===a&&"desc"===s||"bottom"===a&&"asc"===s)&&(u*=-1),u},string:function(t,e,o,i,n,s,r){var a,l=r.alignEmptyValues,c=0;if(t){if(e){switch(_typeof(r.locale)){case"boolean":r.locale&&(a=this.table.modules.localize.getLocale());break;case"string":a=r.locale}return String(t).toLowerCase().localeCompare(String(e).toLowerCase(),a)}c=1}else c=e?-1:0;return("top"===l&&"desc"===s||"bottom"===l&&"asc"===s)&&(c*=-1),c},date:function(t,e,o,i,n,s,r){return r.format||(r.format="DD/MM/YYYY"),this.sorters.datetime.call(this,t,e,o,i,n,s,r)},time:function(t,e,o,i,n,s,r){return r.format||(r.format="hh:mm"),this.sorters.datetime.call(this,t,e,o,i,n,s,r)},datetime:function(t,e,o,i,n,s,r){var a=r.format||"DD/MM/YYYY hh:mm:ss",l=r.alignEmptyValues,c=0;if("undefined"!=typeof moment){if(t=moment(t,a),e=moment(e,a),t.isValid()){if(e.isValid())return t-e;c=1}else c=e.isValid()?-1:0;return("top"===l&&"desc"===s||"bottom"===l&&"asc"===s)&&(c*=-1),c}console.error("Sort Error - 'datetime' sorter is dependant on moment.js")},boolean:function(t,e,o,i,n,s,r){return(!0===t||"true"===t||"True"===t||1===t?1:0)-(!0===e||"true"===e||"True"===e||1===e?1:0)},array:function(t,e,o,i,n,s,r){function a(t){switch(u){case"length":return t.length;case"sum":return t.reduce(function(t,e){return t+e});case"max":return Math.max.apply(null,t);case"min":return Math.min.apply(null,t);case"avg":return t.reduce(function(t,e){return t+e})/t.length}}var l=0,c=0,u=r.type||"length",d=r.alignEmptyValues,h=0;if(Array.isArray(t)){if(Array.isArray(e))return l=t?a(t):0,c=e?a(e):0,l-c;d=1}else d=Array.isArray(e)?-1:0;return("top"===d&&"desc"===s||"bottom"===d&&"asc"===s)&&(h*=-1),h},exists:function(t,e,o,i,n,s,r){return(void 0===t?0:1)-(void 0===e?0:1)},alphanum:function(t,e,o,i,n,s,r){var a,l,c,u,d,h=0,p=/(\d+)|(\D+)/g,m=/\d/,f=r.alignEmptyValues,g=0;if(t||0===t){if(e||0===e){if(isFinite(t)&&isFinite(e))return t-e;if(a=String(t).toLowerCase(),l=String(e).toLowerCase(),a===l)return 0;if(!m.test(a)||!m.test(l))return a>l?1:-1;for(a=a.match(p),l=l.match(p),d=a.length>l.length?l.length:a.length;h<d;)if(c=a[h],u=l[h++],c!==u)return isFinite(c)&&isFinite(u)?("0"===c.charAt(0)&&(c="."+c),"0"===u.charAt(0)&&(u="."+u),c-u):c>u?1:-1;return a.length>l.length}g=1}else g=e||0===e?-1:0;return("top"===f&&"desc"===s||"bottom"===f&&"asc"===s)&&(g*=-1),g}},u.prototype.registerModule("sort",W);var U=function(t){this.table=t};return U.prototype.initializeColumn=function(t){var e,o=this,i=[];t.definition.validator&&(Array.isArray(t.definition.validator)?t.definition.validator.forEach(function(t){(e=o._extractValidator(t))&&i.push(e)}):(e=this._extractValidator(t.definition.validator))&&i.push(e),t.modules.validate=!!i.length&&i)},U.prototype._extractValidator=function(t){var e,o,i;switch(void 0===t?"undefined":_typeof(t)){case"string":return i=t.indexOf(":"),i>-1?(e=t.substring(0,i),o=t.substring(i+1)):e=t,this._buildValidator(e,o);case"function":return this._buildValidator(t);case"object":return this._buildValidator(t.type,t.parameters)}},U.prototype._buildValidator=function(t,e){var o="function"==typeof t?t:this.validators[t];return o?{type:"function"==typeof t?"function":t,func:o,params:e}:(console.warn("Validator Setup Error - No matching validator found:",t),!1)},U.prototype.validate=function(t,e,o){var i=this,n=[];return t&&t.forEach(function(t){t.func.call(i,e,o,t.params)||n.push({type:t.type,parameters:t.params})}),!n.length||n},U.prototype.validators={integer:function(t,e,o){return""===e||null===e||void 0===e||"number"==typeof(e=Number(e))&&isFinite(e)&&Math.floor(e)===e},float:function(t,e,o){return""===e||null===e||void 0===e||"number"==typeof(e=Number(e))&&isFinite(e)&&e%1!=0},numeric:function(t,e,o){return""===e||null===e||void 0===e||!isNaN(e)},string:function(t,e,o){return""===e||null===e||void 0===e||isNaN(e)},max:function(t,e,o){return""===e||null===e||void 0===e||parseFloat(e)<=o},min:function(t,e,o){return""===e||null===e||void 0===e||parseFloat(e)>=o},minLength:function(t,e,o){return""===e||null===e||void 0===e||String(e).length>=o},maxLength:function(t,e,o){return""===e||null===e||void 0===e||String(e).length<=o},in:function(t,e,o){return""===e||null===e||void 0===e||("string"==typeof o&&(o=o.split("|")),""===e||o.indexOf(e)>-1)},regex:function(t,e,o){return""===e||null===e||void 0===e||new RegExp(o).test(e)},unique:function(t,e,o){if(""===e||null===e||void 0===e)return!0;var i=!0,n=t.getData(),s=t.getColumn()._getSelf();return this.table.rowManager.rows.forEach(function(t){var o=t.getData();o!==n&&e==s.getFieldValue(o)&&(i=!1)}),i},required:function(t,e,o){return""!==e&&null!==e&&void 0!==e}},u.prototype.registerModule("validate",U),u});
(function () {
    window.simplyEditorInterop = {

        setEditorContent: function (element, html) {
            window[`${element}`].root.innerHTML = html;
        },

        initEditor: function (element, dotNetRef) {
            var quill = new Quill(`#${element}`,
                {
                    theme: 'snow',
                    modules: {
                        toolbar: '#toolbar'
                    }
                });

            var quillHtml = quill.root.innerHTML;

            quill.on('text-change', function (delta, oldDelta, source) {

                //console.log("text-change before");
                //dotNetObjRef.invokeMethodAsync('textChange', source);
                //console.log("text-change after");

            });

            quill.on('selection-change', function (range, oldRange, source) {


                if (range == null && quillHtml != quill.root.innerHTML) {
                    console.log("editorValueChanged");
                    quillHtml = quill.root.innerHTML;
                    dotNetRef.invokeMethodAsync('EditorValueChanged', quill.root.innerHTML);
                }
                //console.log("text-change after");

            });

            window[`${element}`] = quill;
        }
    };

})();

(function () {
    window.simplyTagsInterop = {

        initTags: function (element) {
            new Tagify(element);
        }

    };

})();

(function () {
    window.simplyTypeaheadInterop = {

        initAutocompleteJs: function (element, dotNetObjRef) {

            new autoComplete({
                data: {                              // Data src [Array, Function, Async] | (REQUIRED)
                    src: () => fetch(`/api/lookup/country?s=${element.value}`).then(response => response.json()),
                    key: ["Value"],
                    cache: false
                },
                //query: {                               // Query Interceptor               | (Optional)
                //    manipulate: (query) => {
                //        return query.replace("pizza", "burger");
                //    }
                //},
                //sort: (a, b) => {                    // Sort rendered results ascendingly | (Optional)
                //    if (a.match < b.match) return -1;
                //    if (a.match > b.match) return 1;
                //    return 0;
                //},
                placeHolder: "",     // Place Holder text                 | (Optional)
                selector: () => element,           // Input field selector              | (Optional)
                threshold: 2,                        // Min. Chars length to start Engine | (Optional)
                debounce: 300,                       // Post duration for engine to start | (Optional)
                searchEngine: "strict",              // Search Engine type/mode           | (Optional)
                resultsList: {                       // Rendered results list object      | (Optional)
                    render: true,
                    container: source => {
                        //source.className = "list-group";
                        const resultsListID = "food_List";
                        return resultsListID;
                    },
                    destination: element,
                    position: "afterend",
                    element: "ul"
                },
                maxResults: 5,                         // Max. number of rendered results | (Optional)
                highlight: true,                       // Highlight matching results      | (Optional)
                resultItem: {                          // Rendered result item            | (Optional)
                    content: (data, source) => {
                        //source.className = "list-group-item";
                        source.innerHTML = data.match;
                        //element.value = data.match;
                    },
                    element: "li"
                },
                noResults: () => {                     // Action script on noResults      | (Optional)
                    const result = document.createElement("li");
                    result.setAttribute("class", "no_result");
                    result.setAttribute("tabindex", "1");
                    result.innerHTML = "No Results";
                    document.querySelector("#autoComplete_results_list").appendChild(result);
                },
                onSelection: feedback => {             // Action script onSelection event | (Optional)
                    console.log("selected");
                    //new { Key="", Value="" } //element.value = feedback.selection.value.Value;
                    dotNetObjRef.invokeMethodAsync('AutoCompleteSelected', feedback.selection.value);

                }
            });

        }

    };

})();

(function () {
    window.simplyUploadInterop = {

        saveFile: function (element) {
            //var id = { name: 'john', age: 34 };
            var formData = new FormData();
            var file = element.files[0];
            //Promise.all(files.map(f => fetch('/upload', { method: "POST", body: formData })));
            formData.append("File", file);
            //formData.append("Id", "123456");


            //formData.append("user", JSON.stringify(user));

            //try {

            return fetch('api/upload', { method: "POST", body: formData })
                .then(response => response.json());
                //.then((body) => console.log(body));
            //}
            //catch (e) {
            //    console.log('Huston we have problem...:', e);
            //}

        },

        initBsCustomFileInput: function () {
            bsCustomFileInput.init();
        }

    };

})();

(function () {
    window.simplyModalInterop = {

        showModal: function (element, dotNetRef) {

            var modal = new Modal(element);
            modal.show();

            const inputElements = element.getElementsByTagName('input');

            if (inputElements.length > 0) {
                inputElements.item(0).focus();
            }

            element.addEventListener('hidden.bs.modal', function (event) {
                // do something when this event triggers
                // event.target is the modal referenced in myModal
                // event.relatedTarget is the button referenced with myModalTriggerButton
                dotNetRef.invokeMethodAsync('OnModalVisibilityChange',false);

            }, false);

            element.addEventListener('shown.bs.modal', function (event) {
                // do something when this event triggers
                // event.target is the modal referenced in myModal
                // event.relatedTarget is the button referenced with myModalTriggerButton
                dotNetRef.invokeMethodAsync('OnModalVisibilityChange', true);

            }, false);


        },

        hideModal: function (element) {

            var modal = new Modal(element);
            modal.hide();

        }
    }

})();
(function () {
    window.simplyAlertInterop = {

        showAlert: function (element, dotNetRef) {

            var alert = new Alert(element);

            element.addEventListener('closed.bs.alert', function (event) {
                // do something when this event triggers
                // event.target is the modal referenced in myModal
                // event.relatedTarget is the button referenced with myModalTriggerButton
                dotNetRef.invokeMethodAsync('OnAlertClosed');

            }, false);
        },

        closeAlert: function (element) {

            var alert = new Alert(element);
            alert.close();

        }
    }


})();
(function () {
    window.simplySearchInterop = {

        init: function (element, id, dotNetRef, columns, index) {

            window[id] = new Tabulator(element, {

                index: index,
                placeholder: "No data...", //display message to user on empty table
                //pagination: "remote", //enable remote pagination
                ajaxProgressiveLoad: "scroll", //enable progressive loading
                ajaxProgressiveLoadScrollMargin: 300, //triger next ajax load when scroll bar is 300px or less from the bottom of the table.
                ajaxSorting: true, //send sort data to the server instead of processing locally
                //ajaxFiltering: true, 
                paginationSize: 20, //optional parameter to request a certain number of rows per page
                //paginationDataSent: {
                //    "page": "pageNumber", //change page request parameter to "pageNo"
                //    "size": "pageSize"
                //},
                //paginationDataReceived: {
                //    "last_page": "totalPages", //change last_page parameter name to "max_pages"
                //    "data" : "result"
                //},
                //ajaxURL: false,
                //ajaxConfig: "GET",
                //ajaxContentType: "json",
                //ajaxParams: {
                //    searchyFilters: []
                //    //key2: "value2"
                //}, //ajax parameters
                //ajaxURLGenerator: false, //function (url, config, params) {

                //const sortStr = params.sorters.map(s => `sort=${s.field}:${(s.dir == "asc") ? 1 : 2}`).join('&');

                //return url + `count=true&page=${params.page - 1}&size=${params.size}&${sortStr}`; //encode parameters as a json object
                //},
                ajaxResponse: function (url, params, response) {
                    //url - the URL of the request
                    //params - the parameters passed with the request
                    //response - the JSON object returned in the body of the response.

                    const rq = {
                        data: response.Result,
                        last_page: Math.ceil(response.TotalCount / 20)
                    };

                    return rq; //return the tableData property of a response json object
                },
                ajaxError: function (error) {

                    dotNetRef.invokeMethodAsync('ReportError', error);
                },
                //ajaxRequestFunc: (url, config, params) =>
                //{

                //    //url - the url of the request
                //    //config - the ajaxConfig object
                //    //params - the ajaxParams object

                //    const rq = {
                //        ...params,
                //        pageIndex: params.pageNumber - 1,
                //        countRows: true
                //    };
                //    return fetch(url,
                //        {
                //            method: 'POST', // *GET, POST, PUT, DELETE, etc.
                //            headers:
                //            {
                //                'Content-Type': 'application/json'
                //            },
                //            body: JSON.stringify(rq)
                //        }) // body data type must match "Content-Type" header
                //        .then(res => res.json())
                //        .then(json => ({
                //            ...json,
                //            totalPages: Math.ceil(json.totalCount / params.pageSize)
                //        })); //response type

                //    //return promise
                //    //return new Promise(function (resolve, reject) {
                //    //    //do some async data retrieval then pass the array of row data back into Tabulator
                //    //    resolve(data);

                //    //    //if there is an error call this function and pass the error message or object into it
                //    //    reject();
                //    //});
                //},
                height: 400, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
                data: [], //assign data to table
                layout: "fitColumns", //fit columns to width of table (optional)
                columns: columns,
                rowClick: function (e, row) { //trigger an alert message when the row is clicked
                    dotNetRef.invokeMethodAsync('RowClick', row._row.data[index]);
                },
            });

            //window[id].setData();

        },

        setFilter: function (id, filtersQueryString, url, jwt, correlationId) {

            var ajaxConfig = {
                headers: {
                    "Authorization": `Bearer ${jwt}`, //set specific content type
                    "request-correlation-id": correlationId
                },
            };

            window[id].setData(`${url}?${filtersQueryString}&`, {}, ajaxConfig);
            //window[id].setFilter(filters);
        }
    }

})();