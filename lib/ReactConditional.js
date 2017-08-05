(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes);
    global.ReactConditional = mod.exports;
  }
})(this, function (exports, _react, _propTypes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.If = If;
  exports.Else = Else;
  exports.Conditional = Conditional;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function render(props) {
    if (typeof props.children === 'function') {
      return props.children();
    }

    return props.children || null;
  }

  function If(props) {
    return render(props);
  }

  function Else(props) {
    return render(props);
  }

  If.propTypes = Else.propTypes = {
    children: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.object])
  };

  function Conditional(props) {
    var children = props.children;


    if (children == null) {
      return null;
    }

    var elem = [].concat(children).find(function (c) {
      return c.type.name === 'If' && c.props.condition;
    });
    if (elem) {
      return elem;
    } else {
      return [].concat(children).find(function (c) {
        return c.type.name === 'Else';
      }) || null;
    }
  }

  var IfOrElse = _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.instanceOf(If), _propTypes2.default.instanceOf(Else)]);

  If.propTypes = {
    condition: _propTypes2.default.bool.isRequired,
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(IfOrElse), IfOrElse])
  };

  Conditional.If = If;
  Conditional.Else = Else;

  exports.default = Conditional;
});