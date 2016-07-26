(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["Tooltip"] = factory(require("react"));
	else
		root["Tooltip"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _tooltip = __webpack_require__(1);
	
	var _tooltip2 = _interopRequireDefault(_tooltip);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = { Tooltip: _tooltip2.default };

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Tooltip = function (_React$Component) {
	  _inherits(Tooltip, _React$Component);
	
	  function Tooltip(props) {
	    _classCallCheck(this, Tooltip);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tooltip).call(this, props));
	
	    _this.styles = {
	      wrapper: {
	        position: 'relative',
	        zIndex: '998',
	        color: '#555',
	        cursor: 'help'
	      },
	      tooltip: {
	        position: 'absolute',
	        display: 'inline-block',
	        zIndex: '999',
	        bottom: '100%',
	        left: '50%',
	        transform: 'translateX(-50%)',
	        marginBottom: '10px',
	        padding: '5px',
	        width: '100%',
	        background: '#000'
	      },
	      content: {
	        background: '#000',
	        padding: '.3em 1em',
	        color: '#fff',
	        whiteSpace: 'normal',
	        overflow: 'auto'
	      },
	      arrow: {
	        borderLeft: 'solid transparent 5px',
	        borderRight: 'solid transparent 5px',
	        borderTop: 'solid #000 5px',
	        bottom: '-5px',
	        height: '0',
	        left: '50%',
	        marginLeft: '-5px',
	        position: 'absolute',
	        width: '0'
	      },
	      gap: {
	        bottom: '-20px',
	        display: 'block',
	        height: '20px',
	        left: '0',
	        position: 'absolute',
	        width: '100%'
	      }
	    };
	
	    _this.mergeStyles = function (userStyles) {
	      Object.keys(_this.styles).forEach(function (name) {
	        Object.assign(_this.styles[name], userStyles[name]);
	      });
	    };
	
	    _this.show = function () {
	      _this.setState(Object.assign({}, _this.state, {
	        visible: true
	      }));
	    };
	
	    _this.hide = function () {
	      _this.setState(Object.assign({}, _this.state, {
	        visible: false
	      }));
	    };
	
	    _this.state = {
	      visible: false
	    };
	    if (props.styles) _this.mergeStyles(props.styles);
	    return _this;
	  }
	
	  _createClass(Tooltip, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(props) {
	      if (props.styles) this.mergeStyles(props.styles);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var props = this.props;
	      var state = this.state;
	      var styles = this.styles;
	      var show = this.show;
	      var hide = this.hide;
	
	      return _react2.default.createElement(
	        'div',
	        {
	          onMouseEnter: show,
	          onMouseLeave: hide,
	          onTouchEnd: hide,
	          onTouchStart: show,
	          style: styles.wrapper },
	        props.children,
	        state.visible && _react2.default.createElement(
	          'div',
	          { style: styles.tooltip },
	          _react2.default.createElement(
	            'div',
	            { style: styles.content },
	            props.content
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: styles.arrow },
	            ' '
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: styles.gap },
	            ' '
	          )
	        )
	      );
	    }
	  }]);
	
	  return Tooltip;
	}(_react2.default.Component);
	
	Tooltip.propTypes = {
	  children: _react.PropTypes.any.isRequired,
	  content: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.array]),
	  styles: _react.PropTypes.object
	};
	exports.default = Tooltip;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=tooltip.js.map