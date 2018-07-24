'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DivPhoneOnly = exports.DivPhabletOnly = exports.DivTabletOnly = exports.DivDesktopOnly = exports.DivHdOnly = exports.DivTabletMax = exports.DivPhabletMax = exports.DivDesktopMax = exports.DivPhabletMin = exports.DivTabletMin = exports.DivDesktopMin = exports.DivHdMin = exports.IBDivPhablet = exports.IBDivPhone = exports.IBDiv = exports.Paragraphs = exports.Separator = exports.Tag = exports.Li_underlined = exports.ParagraphLarge = exports.Paragraph = exports.SublineSmall = exports.Subline = exports.Headline6 = exports.Headline5 = exports.Headline4 = exports.Headline3 = exports.Headline2 = exports.Headline = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _styled$h, _styled$h2, _styled$h3, _styled$h4, _styled$h5, _styled$h6, _styled$h7, _styled$h8, _styled$p, _styled$p2, _styled$div11, _styled$div12, _styled$div13, _styled$div14, _styled$div15;

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

var Headline = exports.Headline = _reactEmotion2.default.h1((_styled$h = {
  fontFamily: 'proxima-soft',
  color: _colors.grey_medium,
  fontSize: '64px',
  marginBottom: '10px',
  lineHeight: '110%'
}, _defineProperty(_styled$h, _mediaQueries.hd, { fontSize: '64px' }), _defineProperty(_styled$h, _mediaQueries.desktop, { fontSize: '50px' }), _defineProperty(_styled$h, _mediaQueries.tablet, { fontSize: '42px' }), _defineProperty(_styled$h, _mediaQueries.phablet, { fontSize: '36px' }), _defineProperty(_styled$h, _mediaQueries.phone, { fontSize: '32px' }), _styled$h));

var Headline2 = exports.Headline2 = _reactEmotion2.default.h2((_styled$h2 = {
  fontFamily: 'proxima-soft',
  color: _colors.grey_medium,
  fontSize: '48px',
  margin: '0',
  lineHeight: '110%'
}, _defineProperty(_styled$h2, _mediaQueries.hd, { fontSize: '48px' }), _defineProperty(_styled$h2, _mediaQueries.desktop, { fontSize: '42px' }), _defineProperty(_styled$h2, _mediaQueries.tablet, { fontSize: '38px' }), _defineProperty(_styled$h2, _mediaQueries.phablet, { fontSize: '34px' }), _defineProperty(_styled$h2, _mediaQueries.phone, { fontSize: '28px' }), _styled$h2));

var Headline3 = exports.Headline3 = _reactEmotion2.default.h3((_styled$h3 = {
  fontFamily: 'proxima-soft',
  color: _colors.grey_medium,
  fontSize: '38px',
  margin: '0',
  lineHeight: '110%'
}, _defineProperty(_styled$h3, _mediaQueries.hd, { fontSize: '38px' }), _defineProperty(_styled$h3, _mediaQueries.desktop, { fontSize: '32px' }), _defineProperty(_styled$h3, _mediaQueries.tablet, { fontSize: '24px' }), _defineProperty(_styled$h3, _mediaQueries.phablet, { fontSize: '20px' }), _defineProperty(_styled$h3, _mediaQueries.phone, { fontSize: '18px' }), _styled$h3));

var Headline4 = exports.Headline4 = _reactEmotion2.default.h4((_styled$h4 = {
  fontFamily: 'proxima-soft',
  color: _colors.grey_medium,
  fontSize: '32px',
  margin: '0',
  lineHeight: '110%'
}, _defineProperty(_styled$h4, _mediaQueries.hd, { fontSize: '32px' }), _defineProperty(_styled$h4, _mediaQueries.desktop, { fontSize: '28px' }), _defineProperty(_styled$h4, _mediaQueries.tablet, { fontSize: '24px' }), _defineProperty(_styled$h4, _mediaQueries.phablet, { fontSize: '18px' }), _defineProperty(_styled$h4, _mediaQueries.phone, { fontSize: '16px' }), _styled$h4));

var Headline5 = exports.Headline5 = _reactEmotion2.default.h5((_styled$h5 = {
  fontFamily: 'proxima-soft',
  color: _colors.grey_medium,
  fontSize: '28px',
  fontWeight: 'bold',
  margin: '0',
  lineHeight: '120%'
}, _defineProperty(_styled$h5, _mediaQueries.hd, { fontSize: '28px' }), _defineProperty(_styled$h5, _mediaQueries.desktop, { fontSize: '24px' }), _defineProperty(_styled$h5, _mediaQueries.tablet, { fontSize: '20px' }), _defineProperty(_styled$h5, _mediaQueries.phablet, { fontSize: '16px' }), _defineProperty(_styled$h5, _mediaQueries.phone, { fontSize: '14px' }), _styled$h5));

var Headline6 = exports.Headline6 = _reactEmotion2.default.h6((_styled$h6 = {
  fontFamily: 'proxima-soft',
  color: _colors.grey_medium,
  fontSize: '20px',
  fontWeight: 'bold',
  margin: '0',
  lineHeight: '120%'
}, _defineProperty(_styled$h6, _mediaQueries.hd, { fontSize: '20px' }), _defineProperty(_styled$h6, _mediaQueries.desktop, { fontSize: '18px' }), _defineProperty(_styled$h6, _mediaQueries.tablet, { fontSize: '16px' }), _defineProperty(_styled$h6, _mediaQueries.phablet, { fontSize: '14px' }), _defineProperty(_styled$h6, _mediaQueries.phone, { fontSize: '12px' }), _styled$h6));

var Subline = exports.Subline = _reactEmotion2.default.h2((_styled$h7 = {
  fontFamily: 'proxima-soft',
  fontSize: '36px',
  marginBottom: '10px',
  lineHeight: '38px',
  color: _colors.grey_medium
}, _defineProperty(_styled$h7, _mediaQueries.hd, { fontSize: '36px', marginBottom: '10px', lineHeight: '38px' }), _defineProperty(_styled$h7, _mediaQueries.desktop, { fontSize: '34px', marginBottom: '9px', lineHeight: '36px' }), _defineProperty(_styled$h7, _mediaQueries.tablet, { fontSize: '32px', marginBottom: '8px', lineHeight: '34px' }), _defineProperty(_styled$h7, _mediaQueries.phablet, { fontSize: '30px', marginBottom: '8px', lineHeight: '32px' }), _defineProperty(_styled$h7, _mediaQueries.phone, { fontSize: '24px', marginBottom: '8px', lineHeight: '30px' }), _styled$h7));

var SublineSmall = exports.SublineSmall = _reactEmotion2.default.h2((_styled$h8 = {
  fontFamily: 'proxima-soft',
  fontSize: '36px',
  marginBottom: '10px',
  lineHeight: '38px',
  color: _colors.grey_medium
}, _defineProperty(_styled$h8, _mediaQueries.hd, { fontSize: '26px', marginBottom: '10px', lineHeight: '30px' }), _defineProperty(_styled$h8, _mediaQueries.desktop, { fontSize: '26px', marginBottom: '9px', lineHeight: '30px' }), _defineProperty(_styled$h8, _mediaQueries.tablet, { fontSize: '24px', marginBottom: '8px', lineHeight: '30px' }), _defineProperty(_styled$h8, _mediaQueries.phablet, { fontSize: '24px', marginBottom: '8px', lineHeight: '30px' }), _defineProperty(_styled$h8, _mediaQueries.phone, { fontSize: '24px', marginBottom: '8px', lineHeight: '30px' }), _styled$h8));

var Paragraph = exports.Paragraph = _reactEmotion2.default.p((_styled$p = {
  fontFamily: 'proxima-soft',
  fontSize: '20px',
  lineHeight: '160%',
  marginBottom: '20px',
  color: _colors.grey_medium
}, _defineProperty(_styled$p, _mediaQueries.hd, { fontSize: '20px', marginBottom: '20px' }), _defineProperty(_styled$p, _mediaQueries.desktop, { fontSize: '19px', marginBottom: '18px' }), _defineProperty(_styled$p, _mediaQueries.tablet, { fontSize: '18px', marginBottom: '17px' }), _defineProperty(_styled$p, _mediaQueries.phablet, { fontSize: '17px', marginBottom: '16px' }), _defineProperty(_styled$p, _mediaQueries.phone, { fontSize: '16px', marginBottom: '15px' }), _styled$p));

var ParagraphLarge = exports.ParagraphLarge = _reactEmotion2.default.p((_styled$p2 = {
  fontFamily: 'proxima-soft',
  fontSize: '26px',
  lineHeight: '160%',
  marginBottom: '20px',
  color: _colors.grey_medium
}, _defineProperty(_styled$p2, _mediaQueries.hd, { fontSize: '26px', marginBottom: '20px' }), _defineProperty(_styled$p2, _mediaQueries.desktop, { fontSize: '24px', marginBottom: '18px' }), _defineProperty(_styled$p2, _mediaQueries.tablet, { fontSize: '22px', marginBottom: '17px' }), _defineProperty(_styled$p2, _mediaQueries.phablet, { fontSize: '20px', marginBottom: '16px' }), _defineProperty(_styled$p2, _mediaQueries.phone, { fontSize: '18px', marginBottom: '15px' }), _styled$p2));

var Li_underlined = exports.Li_underlined = _reactEmotion2.default.li({
  cursor: 'pointer',
  paddingTop: '13px',
  borderBottom: '1px solid #E8E8E8',
  ':last-child': {
    border: 'none'
  }
});

var Tag = exports.Tag = _reactEmotion2.default.div(_defineProperty({
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


var IBDiv = exports.IBDiv = _reactEmotion2.default.div({
  display: 'inline-block',
  verticalAlign: 'top'
});
// becomes 100% width on phone
var IBDivPhone = exports.IBDivPhone = _reactEmotion2.default.div(_defineProperty({
  display: 'inline-block',
  verticalAlign: 'top'
}, _mediaQueries.phablet_max, { display: 'block', width: '100%' }));
// becomes 100% width on phablet
var IBDivPhablet = exports.IBDivPhablet = _reactEmotion2.default.div(_defineProperty({
  display: 'inline-block',
  verticalAlign: 'top'
}, _mediaQueries.tablet_max, { display: 'block', width: '100%' }));

var DivHdMin = exports.DivHdMin = _reactEmotion2.default.div(_defineProperty({}, _mediaQueries.desktop_max, { display: 'none' }));
var DivDesktopMin = exports.DivDesktopMin = _reactEmotion2.default.div(_defineProperty({}, _mediaQueries.tablet_max, { display: 'none' }));
var DivTabletMin = exports.DivTabletMin = _reactEmotion2.default.div(_defineProperty({}, _mediaQueries.phablet_max, { display: 'none' }));
var DivPhabletMin = exports.DivPhabletMin = _reactEmotion2.default.div(_defineProperty({}, _mediaQueries.phone_max, { display: 'none' }));

var DivDesktopMax = exports.DivDesktopMax = _reactEmotion2.default.div(_defineProperty({}, _mediaQueries.hd_min, { display: 'none' }));
var DivPhabletMax = exports.DivPhabletMax = _reactEmotion2.default.div(_defineProperty({}, _mediaQueries.tablet_min, { display: 'none' }));
var DivTabletMax = exports.DivTabletMax = _reactEmotion2.default.div(_defineProperty({}, _mediaQueries.desktop_min, { display: 'none' }));

var DivHdOnly = exports.DivHdOnly = _reactEmotion2.default.div((_styled$div11 = {}, _defineProperty(_styled$div11, _mediaQueries.hd, { display: 'block' }), _defineProperty(_styled$div11, _mediaQueries.desktop, { display: 'none' }), _defineProperty(_styled$div11, _mediaQueries.tablet, { display: 'none' }), _defineProperty(_styled$div11, _mediaQueries.phablet, { display: 'none' }), _defineProperty(_styled$div11, _mediaQueries.phone, { display: 'none' }), _styled$div11));
var DivDesktopOnly = exports.DivDesktopOnly = _reactEmotion2.default.div((_styled$div12 = {}, _defineProperty(_styled$div12, _mediaQueries.hd, { display: 'none' }), _defineProperty(_styled$div12, _mediaQueries.desktop, { display: 'block' }), _defineProperty(_styled$div12, _mediaQueries.tablet, { display: 'none' }), _defineProperty(_styled$div12, _mediaQueries.phablet, { display: 'none' }), _defineProperty(_styled$div12, _mediaQueries.phone, { display: 'none' }), _styled$div12));
var DivTabletOnly = exports.DivTabletOnly = _reactEmotion2.default.div((_styled$div13 = {}, _defineProperty(_styled$div13, _mediaQueries.hd, { display: 'none' }), _defineProperty(_styled$div13, _mediaQueries.desktop, { display: 'none' }), _defineProperty(_styled$div13, _mediaQueries.tablet, { display: 'block' }), _defineProperty(_styled$div13, _mediaQueries.phablet, { display: 'none' }), _defineProperty(_styled$div13, _mediaQueries.phone, { display: 'none' }), _styled$div13));
var DivPhabletOnly = exports.DivPhabletOnly = _reactEmotion2.default.div((_styled$div14 = {}, _defineProperty(_styled$div14, _mediaQueries.hd, { display: 'none' }), _defineProperty(_styled$div14, _mediaQueries.desktop, { display: 'none' }), _defineProperty(_styled$div14, _mediaQueries.tablet, { display: 'none' }), _defineProperty(_styled$div14, _mediaQueries.phablet, { display: 'block' }), _defineProperty(_styled$div14, _mediaQueries.phone, { display: 'none' }), _styled$div14));
var DivPhoneOnly = exports.DivPhoneOnly = _reactEmotion2.default.div((_styled$div15 = {}, _defineProperty(_styled$div15, _mediaQueries.hd, { display: 'none' }), _defineProperty(_styled$div15, _mediaQueries.desktop, { display: 'none' }), _defineProperty(_styled$div15, _mediaQueries.tablet, { display: 'none' }), _defineProperty(_styled$div15, _mediaQueries.phablet, { display: 'none' }), _defineProperty(_styled$div15, _mediaQueries.phone, { display: 'block' }), _styled$div15));
//# sourceMappingURL=index.js.map