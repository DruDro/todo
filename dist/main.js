webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _reactDom = __webpack_require__(7);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _app = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_app.App, document.getElementById('app'));

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.App = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(28);

var _header = __webpack_require__(29);

var _main = __webpack_require__(35);

var _footer = __webpack_require__(44);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import { Msg } from './msg'; 


var App = exports.App = _react2.default.createElement(
    'div',
    { className: 'container' },
    _react2.default.createElement(_header.Header, null),
    _react2.default.createElement(_main.Main, null),
    _react2.default.createElement(_footer.Footer, null)
);

/***/ }),
/* 28 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Header = __webpack_require__(30);

Object.keys(_Header).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Header[key];
    }
  });
});

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Header = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _navigation = __webpack_require__(31);

__webpack_require__(34);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = exports.Header = function Header() {
    return _react2.default.createElement(
        'header',
        { className: 'header' },
        _react2.default.createElement(_navigation.Navigation, null)
    );
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Navigation = __webpack_require__(32);

Object.keys(_Navigation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Navigation[key];
    }
  });
});

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Navigation = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(33);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navigation = exports.Navigation = function Navigation() {
    return _react2.default.createElement(
        'nav',
        { className: 'main-nav' },
        'nav'
    );
};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 34 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Main = __webpack_require__(36);

Object.keys(_Main).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Main[key];
    }
  });
});

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Main = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(37);

var _aside = __webpack_require__(38);

var _content = __webpack_require__(41);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Main = exports.Main = function Main() {
    return _react2.default.createElement(
        'section',
        { className: 'main' },
        _react2.default.createElement(_aside.Aside, null),
        _react2.default.createElement(_content.Article, null)
    );
};

/***/ }),
/* 37 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Aside = __webpack_require__(39);

Object.keys(_Aside).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Aside[key];
    }
  });
});

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Aside = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(40);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Aside = exports.Aside = function Aside() {
    return _react2.default.createElement(
        'aside',
        { className: 'sidebar' },
        _react2.default.createElement(
            'p',
            null,
            'sidebar'
        )
    );
};

/***/ }),
/* 40 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Article = __webpack_require__(42);

Object.keys(_Article).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Article[key];
    }
  });
});

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Article = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(43);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Article = exports.Article = function Article() {
    return _react2.default.createElement(
        'article',
        { className: 'main__content' },
        _react2.default.createElement(
            'p',
            null,
            'Lorem ipsum'
        )
    );
};

/***/ }),
/* 43 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Footer = __webpack_require__(45);

Object.keys(_Footer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Footer[key];
    }
  });
});

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Footer = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(46);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = exports.Footer = function Footer() {
    return _react2.default.createElement(
        'footer',
        { className: 'footer' },
        _react2.default.createElement(
            'p',
            null,
            'footer'
        )
    );
};

/***/ }),
/* 46 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[15]);
//# sourceMappingURL=main.js.map