'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextDivP = exports.P = exports.H3 = exports.H1 = exports.Box = exports.DivPhoneOnly = exports.DivPhabletOnly = exports.DivTabletOnly = exports.DivDesktopOnly = exports.DivHdOnly = exports.DivTabletMax = exports.DivPhabletMax = exports.DivDesktopMax = exports.DivPhabletMin = exports.DivTabletMin = exports.DivDesktopMin = exports.DivHdMin = exports.IBDivPhablet = exports.IBDivPhone = exports.IBDiv = exports.Paragraphs = exports.Separator = exports.Tag = exports.Li_underlined = exports.ParagraphLarge = exports.Paragraph = exports.SublineSmall = exports.Subline = exports.Headline6 = exports.Headline5 = exports.Headline4 = exports.Headline3 = exports.Headline2 = exports.Headline = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _styled, _styled2, _styled3, _styled4, _styled5, _styled6, _styled7, _styled8, _styled9, _styled10, _styled21, _styled22, _styled23, _styled24, _styled25, _styled26, _standardTextStyle;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = require('react-emotion');

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _colors = require('@time-with/colors');

var _mediaQueries = require('@time-with/media-queries');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var colorSelect = function colorSelect(props) {
  switch (props.color) {
    case 'white':
      return 'white';
    case 'grey':
      return grey;
    case 'blue':
      return _colors.blue;
    case 'green':
      return green;
    case 'orange':
      return orange;
    case 'grey_dark':
      return grey_dark;
    case 'grey_darker':
      return grey_darker;
    default:
      return grey;
  }
};

var Headline = /*#__PURE__*/exports.Headline = (0, _reactEmotion2.default)('h1', {
  target: 'e4u1u2g0'
})((_styled = {
  fontFamily: 'proxima-soft',
  color: _colors.grey_medium,
  fontSize: '64px',
  marginBottom: '10px',
  lineHeight: '110%'
}, _defineProperty(_styled, _mediaQueries.hd, { fontSize: '64px' }), _defineProperty(_styled, _mediaQueries.desktop, { fontSize: '50px' }), _defineProperty(_styled, _mediaQueries.tablet, { fontSize: '42px' }), _defineProperty(_styled, _mediaQueries.phablet, { fontSize: '36px' }), _defineProperty(_styled, _mediaQueries.phone, { fontSize: '32px' }), _styled));

var Headline2 = /*#__PURE__*/exports.Headline2 = (0, _reactEmotion2.default)('h2', {
  target: 'e4u1u2g1'
})((_styled2 = {
  fontFamily: 'proxima-soft',
  color: _colors.grey_medium,
  fontSize: '48px',
  margin: '0',
  lineHeight: '110%'
}, _defineProperty(_styled2, _mediaQueries.hd, { fontSize: '48px' }), _defineProperty(_styled2, _mediaQueries.desktop, { fontSize: '42px' }), _defineProperty(_styled2, _mediaQueries.tablet, { fontSize: '38px' }), _defineProperty(_styled2, _mediaQueries.phablet, { fontSize: '34px' }), _defineProperty(_styled2, _mediaQueries.phone, { fontSize: '28px' }), _styled2));

var Headline3 = /*#__PURE__*/exports.Headline3 = (0, _reactEmotion2.default)('h3', {
  target: 'e4u1u2g2'
})((_styled3 = {
  fontFamily: 'proxima-soft',
  color: _colors.grey_medium,
  fontSize: '38px',
  margin: '0',
  lineHeight: '110%'
}, _defineProperty(_styled3, _mediaQueries.hd, { fontSize: '38px' }), _defineProperty(_styled3, _mediaQueries.desktop, { fontSize: '32px' }), _defineProperty(_styled3, _mediaQueries.tablet, { fontSize: '24px' }), _defineProperty(_styled3, _mediaQueries.phablet, { fontSize: '20px' }), _defineProperty(_styled3, _mediaQueries.phone, { fontSize: '18px' }), _styled3));

var Headline4 = /*#__PURE__*/exports.Headline4 = (0, _reactEmotion2.default)('h4', {
  target: 'e4u1u2g3'
})((_styled4 = {
  fontFamily: 'proxima-soft',
  color: _colors.grey_medium,
  fontSize: '32px',
  margin: '0',
  lineHeight: '110%'
}, _defineProperty(_styled4, _mediaQueries.hd, { fontSize: '32px' }), _defineProperty(_styled4, _mediaQueries.desktop, { fontSize: '28px' }), _defineProperty(_styled4, _mediaQueries.tablet, { fontSize: '24px' }), _defineProperty(_styled4, _mediaQueries.phablet, { fontSize: '18px' }), _defineProperty(_styled4, _mediaQueries.phone, { fontSize: '16px' }), _styled4));

var Headline5 = /*#__PURE__*/exports.Headline5 = (0, _reactEmotion2.default)('h5', {
  target: 'e4u1u2g4'
})((_styled5 = {
  fontFamily: 'proxima-soft',
  color: _colors.grey_medium,
  fontSize: '28px',
  fontWeight: 'bold',
  margin: '0',
  lineHeight: '120%'
}, _defineProperty(_styled5, _mediaQueries.hd, { fontSize: '28px' }), _defineProperty(_styled5, _mediaQueries.desktop, { fontSize: '24px' }), _defineProperty(_styled5, _mediaQueries.tablet, { fontSize: '20px' }), _defineProperty(_styled5, _mediaQueries.phablet, { fontSize: '16px' }), _defineProperty(_styled5, _mediaQueries.phone, { fontSize: '14px' }), _styled5));

var Headline6 = /*#__PURE__*/exports.Headline6 = (0, _reactEmotion2.default)('h6', {
  target: 'e4u1u2g5'
})((_styled6 = {
  fontFamily: 'proxima-soft',
  color: _colors.grey_medium,
  fontSize: '20px',
  fontWeight: 'bold',
  margin: '0',
  lineHeight: '120%'
}, _defineProperty(_styled6, _mediaQueries.hd, { fontSize: '20px' }), _defineProperty(_styled6, _mediaQueries.desktop, { fontSize: '18px' }), _defineProperty(_styled6, _mediaQueries.tablet, { fontSize: '16px' }), _defineProperty(_styled6, _mediaQueries.phablet, { fontSize: '14px' }), _defineProperty(_styled6, _mediaQueries.phone, { fontSize: '12px' }), _styled6));

var Subline = /*#__PURE__*/exports.Subline = (0, _reactEmotion2.default)('h2', {
  target: 'e4u1u2g6'
})((_styled7 = {
  fontFamily: 'proxima-soft',
  fontSize: '36px',
  marginBottom: '10px',
  lineHeight: '38px',
  color: _colors.grey_medium
}, _defineProperty(_styled7, _mediaQueries.hd, { fontSize: '36px', marginBottom: '10px', lineHeight: '38px' }), _defineProperty(_styled7, _mediaQueries.desktop, { fontSize: '34px', marginBottom: '9px', lineHeight: '36px' }), _defineProperty(_styled7, _mediaQueries.tablet, { fontSize: '32px', marginBottom: '8px', lineHeight: '34px' }), _defineProperty(_styled7, _mediaQueries.phablet, { fontSize: '30px', marginBottom: '8px', lineHeight: '32px' }), _defineProperty(_styled7, _mediaQueries.phone, { fontSize: '24px', marginBottom: '8px', lineHeight: '30px' }), _styled7));

var SublineSmall = /*#__PURE__*/exports.SublineSmall = (0, _reactEmotion2.default)('h2', {
  target: 'e4u1u2g7'
})((_styled8 = {
  fontFamily: 'proxima-soft',
  fontSize: '36px',
  marginBottom: '10px',
  lineHeight: '38px',
  color: _colors.grey_medium
}, _defineProperty(_styled8, _mediaQueries.hd, { fontSize: '26px', marginBottom: '10px', lineHeight: '30px' }), _defineProperty(_styled8, _mediaQueries.desktop, { fontSize: '26px', marginBottom: '9px', lineHeight: '30px' }), _defineProperty(_styled8, _mediaQueries.tablet, { fontSize: '24px', marginBottom: '8px', lineHeight: '30px' }), _defineProperty(_styled8, _mediaQueries.phablet, { fontSize: '24px', marginBottom: '8px', lineHeight: '30px' }), _defineProperty(_styled8, _mediaQueries.phone, { fontSize: '24px', marginBottom: '8px', lineHeight: '30px' }), _styled8));

var Paragraph = /*#__PURE__*/exports.Paragraph = (0, _reactEmotion2.default)('p', {
  target: 'e4u1u2g8'
})((_styled9 = {
  fontFamily: 'proxima-soft',
  fontSize: '20px',
  lineHeight: '160%',
  marginBottom: '20px',
  color: _colors.grey_medium
}, _defineProperty(_styled9, _mediaQueries.hd, { fontSize: '20px', marginBottom: '20px' }), _defineProperty(_styled9, _mediaQueries.desktop, { fontSize: '19px', marginBottom: '18px' }), _defineProperty(_styled9, _mediaQueries.tablet, { fontSize: '18px', marginBottom: '17px' }), _defineProperty(_styled9, _mediaQueries.phablet, { fontSize: '17px', marginBottom: '16px' }), _defineProperty(_styled9, _mediaQueries.phone, { fontSize: '16px', marginBottom: '15px' }), _styled9));

var ParagraphLarge = /*#__PURE__*/exports.ParagraphLarge = (0, _reactEmotion2.default)('p', {
  target: 'e4u1u2g9'
})((_styled10 = {
  fontFamily: 'proxima-soft',
  fontSize: '26px',
  lineHeight: '160%',
  marginBottom: '20px',
  color: _colors.grey_medium
}, _defineProperty(_styled10, _mediaQueries.hd, { fontSize: '26px', marginBottom: '20px' }), _defineProperty(_styled10, _mediaQueries.desktop, { fontSize: '24px', marginBottom: '18px' }), _defineProperty(_styled10, _mediaQueries.tablet, { fontSize: '22px', marginBottom: '17px' }), _defineProperty(_styled10, _mediaQueries.phablet, { fontSize: '20px', marginBottom: '16px' }), _defineProperty(_styled10, _mediaQueries.phone, { fontSize: '18px', marginBottom: '15px' }), _styled10));

var Li_underlined = /*#__PURE__*/exports.Li_underlined = (0, _reactEmotion2.default)('li', {
  target: 'e4u1u2g10'
})({
  cursor: 'pointer',
  paddingTop: '13px',
  borderBottom: '1px solid #E8E8E8',
  ':last-child': {
    border: 'none'
  }
});

var Tag = /*#__PURE__*/exports.Tag = (0, _reactEmotion2.default)('div', {
  target: 'e4u1u2g11'
})(_defineProperty({
  border: '2px solid ' + _colors.blue,
  color: _colors.blue,
  display: 'inline-block',
  fontWeight: 'bold',
  fontSize: '16px',
  verticalAlign: 'top',
  padding: '6px 12px',
  cursor: 'pointer',
  background: 'transparent',
  borderRadius: '5px',
  marginRight: '6px',
  ':hover': {
    color: 'white',
    background: _colors.blue
  },
  ':last-child': {
    marginRight: '0'
  }
}, _mediaQueries.phablet_max, {
  fontSize: '14px'
}));

var Separator = exports.Separator = function (_Component) {
  _inherits(Separator, _Component);

  function Separator() {
    _classCallCheck(this, Separator);

    return _possibleConstructorReturn(this, (Separator.__proto__ || Object.getPrototypeOf(Separator)).apply(this, arguments));
  }

  _createClass(Separator, [{
    key: 'render',
    value: function render() {
      var style = { marginTop: '50px', marginBottom: '30px', width: '100%' };
      if (this.props.short) {
        style = { marginTop: '10px', marginBottom: '30px', width: '100%' };
      }
      if (this.props.noMargin) {
        style = { marginTop: '0', marginBottom: '0', width: '100%' };
      }
      return _react2.default.createElement('hr', { style: style });
    }
  }]);

  return Separator;
}(_react.Component);

var Paragraphs = exports.Paragraphs = function (_Component2) {
  _inherits(Paragraphs, _Component2);

  function Paragraphs() {
    _classCallCheck(this, Paragraphs);

    return _possibleConstructorReturn(this, (Paragraphs.__proto__ || Object.getPrototypeOf(Paragraphs)).apply(this, arguments));
  }

  _createClass(Paragraphs, [{
    key: 'render',
    value: function render() {
      var n = 0;
      var paragraph_els = this.props.paragraphs.map(function (paragraph_text) {
        return _react2.default.createElement(
          Paragraph,
          { key: n++ },
          ' ',
          paragraph_text,
          ' '
        );
      });
      return _react2.default.createElement(
        'div',
        null,
        ' ',
        paragraph_els,
        ' '
      );
    }
  }]);

  return Paragraphs;
}(_react.Component);

// inline-block div


var IBDiv = /*#__PURE__*/exports.IBDiv = (0, _reactEmotion2.default)('div', {
  target: 'e4u1u2g12'
})({
  display: 'inline-block',
  verticalAlign: 'top'
});
// becomes 100% width on phone
var IBDivPhone = /*#__PURE__*/exports.IBDivPhone = (0, _reactEmotion2.default)('div', {
  target: 'e4u1u2g13'
})(_defineProperty({
  display: 'inline-block',
  verticalAlign: 'top'
}, _mediaQueries.phablet_max, { display: 'block', width: '100%' }));
// becomes 100% width on phablet
var IBDivPhablet = /*#__PURE__*/exports.IBDivPhablet = (0, _reactEmotion2.default)('div', {
  target: 'e4u1u2g14'
})(_defineProperty({
  display: 'inline-block',
  verticalAlign: 'top'
}, _mediaQueries.tablet_max, { display: 'block', width: '100%' }));

var DivHdMin = /*#__PURE__*/exports.DivHdMin = (0, _reactEmotion2.default)('div', {
  target: 'e4u1u2g15'
})(_defineProperty({}, _mediaQueries.desktop_max, { display: 'none' }));
var DivDesktopMin = /*#__PURE__*/exports.DivDesktopMin = (0, _reactEmotion2.default)('div', {
  target: 'e4u1u2g16'
})(_defineProperty({}, _mediaQueries.tablet_max, { display: 'none' }));
var DivTabletMin = /*#__PURE__*/exports.DivTabletMin = (0, _reactEmotion2.default)('div', {
  target: 'e4u1u2g17'
})(_defineProperty({}, _mediaQueries.phablet_max, { display: 'none' }));
var DivPhabletMin = /*#__PURE__*/exports.DivPhabletMin = (0, _reactEmotion2.default)('div', {
  target: 'e4u1u2g18'
})(_defineProperty({}, _mediaQueries.phone_max, { display: 'none' }));

var DivDesktopMax = /*#__PURE__*/exports.DivDesktopMax = (0, _reactEmotion2.default)('div', {
  target: 'e4u1u2g19'
})(_defineProperty({}, _mediaQueries.hd_min, { display: 'none' }));
var DivPhabletMax = /*#__PURE__*/exports.DivPhabletMax = (0, _reactEmotion2.default)('div', {
  target: 'e4u1u2g20'
})(_defineProperty({}, _mediaQueries.tablet_min, { display: 'none' }));
var DivTabletMax = /*#__PURE__*/exports.DivTabletMax = (0, _reactEmotion2.default)('div', {
  target: 'e4u1u2g21'
})(_defineProperty({}, _mediaQueries.desktop_min, { display: 'none' }));

var DivHdOnly = /*#__PURE__*/exports.DivHdOnly = (0, _reactEmotion2.default)('div', {
  target: 'e4u1u2g22'
})((_styled21 = {}, _defineProperty(_styled21, _mediaQueries.hd, { display: 'block' }), _defineProperty(_styled21, _mediaQueries.desktop, { display: 'none' }), _defineProperty(_styled21, _mediaQueries.tablet, { display: 'none' }), _defineProperty(_styled21, _mediaQueries.phablet, { display: 'none' }), _defineProperty(_styled21, _mediaQueries.phone, { display: 'none' }), _styled21));
var DivDesktopOnly = /*#__PURE__*/exports.DivDesktopOnly = (0, _reactEmotion2.default)('div', {
  target: 'e4u1u2g23'
})((_styled22 = {}, _defineProperty(_styled22, _mediaQueries.hd, { display: 'none' }), _defineProperty(_styled22, _mediaQueries.desktop, { display: 'block' }), _defineProperty(_styled22, _mediaQueries.tablet, { display: 'none' }), _defineProperty(_styled22, _mediaQueries.phablet, { display: 'none' }), _defineProperty(_styled22, _mediaQueries.phone, { display: 'none' }), _styled22));
var DivTabletOnly = /*#__PURE__*/exports.DivTabletOnly = (0, _reactEmotion2.default)('div', {
  target: 'e4u1u2g24'
})((_styled23 = {}, _defineProperty(_styled23, _mediaQueries.hd, { display: 'none' }), _defineProperty(_styled23, _mediaQueries.desktop, { display: 'none' }), _defineProperty(_styled23, _mediaQueries.tablet, { display: 'block' }), _defineProperty(_styled23, _mediaQueries.phablet, { display: 'none' }), _defineProperty(_styled23, _mediaQueries.phone, { display: 'none' }), _styled23));
var DivPhabletOnly = /*#__PURE__*/exports.DivPhabletOnly = (0, _reactEmotion2.default)('div', {
  target: 'e4u1u2g25'
})((_styled24 = {}, _defineProperty(_styled24, _mediaQueries.hd, { display: 'none' }), _defineProperty(_styled24, _mediaQueries.desktop, { display: 'none' }), _defineProperty(_styled24, _mediaQueries.tablet, { display: 'none' }), _defineProperty(_styled24, _mediaQueries.phablet, { display: 'block' }), _defineProperty(_styled24, _mediaQueries.phone, { display: 'none' }), _styled24));
var DivPhoneOnly = /*#__PURE__*/exports.DivPhoneOnly = (0, _reactEmotion2.default)('div', {
  target: 'e4u1u2g26'
})((_styled25 = {}, _defineProperty(_styled25, _mediaQueries.hd, { display: 'none' }), _defineProperty(_styled25, _mediaQueries.desktop, { display: 'none' }), _defineProperty(_styled25, _mediaQueries.tablet, { display: 'none' }), _defineProperty(_styled25, _mediaQueries.phablet, { display: 'none' }), _defineProperty(_styled25, _mediaQueries.phone, { display: 'block' }), _styled25));

var Box = /*#__PURE__*/exports.Box = (0, _reactEmotion2.default)('div', {
  target: 'e4u1u2g27'
})((_styled26 = {
  padding: '40px'
}, _defineProperty(_styled26, _mediaQueries.tablet_max, {
  padding: '30px'
}), _defineProperty(_styled26, _mediaQueries.phablet_max, {
  padding: '25px'
}), _defineProperty(_styled26, _mediaQueries.phone_max, {
  padding: '15px'
}), _styled26), function (props) {
  return {
    backgroundColor: props.color ? colorSelect(props) : 'white',
    boxShadow: props.shadow ? '0 2px 4px 0 rgba(0,0,0,0.25)' : 'none',
    padding: props.noPadding ? '0 !important' : null
  };
});

var H1 = /*#__PURE__*/exports.H1 = (0, _reactEmotion2.default)('h1', {
  target: 'e4u1u2g28'
})({
  fontSize: '38px',
  lineHeight: '120%',
  fontWeight: 'bold',
  margin: '0'
}, function (props) {
  var _ref;

  return _ref = {
    color: colorSelect(props),
    fontSize: props.size === 'large' ? '40px' : '38px'
  }, _defineProperty(_ref, _mediaQueries.tablet_max, {
    fontSize: props.size === 'large' ? '36px' : '34px'
  }), _defineProperty(_ref, _mediaQueries.phablet_max, {
    fontSize: props.size === 'large' ? '32px' : '30px'
  }), _defineProperty(_ref, _mediaQueries.phone_max, {
    fontSize: props.size === 'large' ? '30px' : '26px'
  }), _ref;
});

var H3 = /*#__PURE__*/exports.H3 = (0, _reactEmotion2.default)('h3', {
  target: 'e4u1u2g29'
})({
  lineHeight: '140%',
  fontWeight: 'bold',
  margin: '0'
}, function (props) {
  var _ref2;

  return _ref2 = {
    color: colorSelect(props),
    fontSize: props.size === 'small' ? '20px' : '26px'
  }, _defineProperty(_ref2, _mediaQueries.tablet_max, {
    fontSize: props.size === 'small' ? '18px' : '23px'
  }), _defineProperty(_ref2, _mediaQueries.phablet_max, {
    fontSize: props.size === 'small' ? '17px' : '20px'
  }), _defineProperty(_ref2, _mediaQueries.phone_max, {
    fontSize: props.size === 'small' ? '16px' : '18px'
  }), _ref2;
});

var standardTextStyle = (_standardTextStyle = {
  fontSize: '20px',
  lineHeight: '140%',
  fontWeight: 'bold',
  margin: '0'
}, _defineProperty(_standardTextStyle, _mediaQueries.tablet_max, {
  fontSize: '18px'
}), _defineProperty(_standardTextStyle, _mediaQueries.phablet_max, {
  fontSize: '17px'
}), _defineProperty(_standardTextStyle, _mediaQueries.phone_max, {
  fontSize: '16px'
}), _standardTextStyle);

var P = /*#__PURE__*/exports.P = (0, _reactEmotion2.default)('p', {
  target: 'e4u1u2g30'
})(standardTextStyle, function (props) {
  return {
    color: colorSelect(props)
  };
});

var TextDivP = /*#__PURE__*/exports.TextDivP = (0, _reactEmotion2.default)('div', {
  target: 'e4u1u2g31'
})(standardTextStyle, function (props) {
  return {
    color: colorSelect(props)
  };
});
//# sourceMappingURL=index.js.map