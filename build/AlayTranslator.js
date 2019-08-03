'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AlayTranslator = function (_React$Component) {
  _inherits(AlayTranslator, _React$Component);

  function AlayTranslator(props) {
    _classCallCheck(this, AlayTranslator);

    var _this = _possibleConstructorReturn(this, (AlayTranslator.__proto__ || Object.getPrototypeOf(AlayTranslator)).call(this, props));

    _this.state = { originalText: '', translatedText: '', translator: "0" };
    return _this;
  }

  _createClass(AlayTranslator, [{
    key: 'handleTextChange',
    value: function handleTextChange(e) {
      this.translate(e.target.value);
    }
  }, {
    key: 'handleTranslator',
    value: function handleTranslator(e) {
      this.setState({ translator: e.target.value });
    }
  }, {
    key: 'translate',
    value: function translate(originalText) {
      var translatedText = originalText;

      if (this.state.translator === "0") {
        translatedText = translatedText.replace(/a/gi, '4');
        translatedText = translatedText.replace(/b/gi, '13');
        translatedText = translatedText.replace(/d/gi, '@|');
        translatedText = translatedText.replace(/e/gi, '3');
        translatedText = translatedText.replace(/g/gi, '9');
        translatedText = translatedText.replace(/h/gi, '1-1');
        translatedText = translatedText.replace(/m/gi, '111');
        translatedText = translatedText.replace(/r/gi, '12');
        translatedText = translatedText.replace(/i/gi, '1');
        translatedText = translatedText.replace(/j/gi, ')');
        translatedText = translatedText.replace(/k/gi, '|<');
        translatedText = translatedText.replace(/l/gi, '|');
        translatedText = translatedText.replace(/n/gi, '/\\/');
        translatedText = translatedText.replace(/o/gi, '0');
        translatedText = translatedText.replace(/s/gi, '5');
        translatedText = translatedText.replace(/t/gi, '7');
        translatedText = translatedText.replace(/u/gi, '!_!');
      } else {
        translatedText = translatedText.replace(/4/gi, 'a');
        translatedText = translatedText.replace(/13/gi, 'b');
        translatedText = translatedText.replace(/@\|/gi, 'd');
        translatedText = translatedText.replace(/3/gi, 'e');
        translatedText = translatedText.replace(/9/gi, 'g');
        translatedText = translatedText.replace(/1-1/gi, 'h');
        translatedText = translatedText.replace(/111/gi, 'm');
        translatedText = translatedText.replace(/12/gi, 'r');
        translatedText = translatedText.replace(/1/gi, 'i');
        translatedText = translatedText.replace(/\)/gi, 'j');
        translatedText = translatedText.replace(/\|</gi, 'k');
        translatedText = translatedText.replace(/\|/gi, 'l');
        translatedText = translatedText.replace(/\/\\\//gi, 'n');
        translatedText = translatedText.replace(/0/gi, 'o');
        translatedText = translatedText.replace(/5/gi, 's');
        translatedText = translatedText.replace(/7/gi, 't');
        translatedText = translatedText.replace(/!_!/gi, 'u');
      }

      this.setState({ originalText: originalText, translatedText: translatedText });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'b-alay' },
        React.createElement(
          'header',
          { className: 'b-alay__header' },
          React.createElement('img', { src: 'logo.svg', className: 'b-alay__header__logo', alt: 'logo' }),
          React.createElement(
            'h1',
            null,
            'Alay Translator'
          )
        ),
        React.createElement(
          'form',
          { className: 'b-alay__app' },
          React.createElement(
            'fieldset',
            { className: 'b-alay__app__fieldset' },
            React.createElement(
              'ul',
              { className: 'b-alay__app__fieldset__list' },
              React.createElement(
                'li',
                { className: 'b-alay__app__fieldset__list__checkbox' },
                React.createElement('input', { checked: this.state.translator === "0", type: 'radio', name: 'translator', value: '0', onChange: this.handleTranslator.bind(this) }),
                React.createElement(
                  'label',
                  null,
                  'Normal -> Alay'
                )
              ),
              React.createElement(
                'li',
                { className: 'b-alay__app__fieldset__list__checkbox b-alay__fieldset__list__checkbox--last' },
                React.createElement('input', { checked: this.state.translator === "1", type: 'radio', name: 'translator', value: '1', onChange: this.handleTranslator.bind(this) }),
                React.createElement(
                  'label',
                  null,
                  'Alay -> Normal'
                )
              )
            )
          ),
          React.createElement('textarea', { rows: '10', cols: '50', placeholder: 'Text...', className: 'b-alay__app__textarea', onChange: this.handleTextChange.bind(this) }),
          React.createElement('textarea', { rows: '10', cols: '50', className: 'b-alay__app__textarea', value: this.state.translatedText, readOnly: true })
        )
      );
    }
  }]);

  return AlayTranslator;
}(React.Component);

export default AlayTranslator;