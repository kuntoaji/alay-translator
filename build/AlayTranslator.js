'use strict';

import { translate, NORMAL_TO_ALAY, ALAY_TO_NORMAL } from './translate.js';
const {
  useState
} = React;
function AlayTranslator() {
  const [text, setText] = useState('');
  const [direction, setDirection] = useState(NORMAL_TO_ALAY);
  const handleDirection = e => setDirection(e.target.value);
  return /*#__PURE__*/React.createElement("div", {
    className: "b-alay"
  }, /*#__PURE__*/React.createElement("form", {
    className: "b-alay__app"
  }, /*#__PURE__*/React.createElement("fieldset", {
    className: "b-alay__app__fieldset"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "b-alay__app__fieldset__list"
  }, /*#__PURE__*/React.createElement("li", {
    className: "b-alay__app__fieldset__list__checkbox"
  }, /*#__PURE__*/React.createElement("input", {
    id: "b-alay-normal-to-alay",
    checked: direction === NORMAL_TO_ALAY,
    type: "radio",
    name: "translator",
    value: NORMAL_TO_ALAY,
    onChange: handleDirection
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "b-alay-normal-to-alay"
  }, "Normal -> Alay")), /*#__PURE__*/React.createElement("li", {
    className: "b-alay__app__fieldset__list__checkbox b-alay__fieldset__list__checkbox--last"
  }, /*#__PURE__*/React.createElement("input", {
    id: "b-alay-alay-to-normal",
    checked: direction === ALAY_TO_NORMAL,
    type: "radio",
    name: "translator",
    value: ALAY_TO_NORMAL,
    onChange: handleDirection
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "b-alay-alay-to-normal"
  }, "Alay -> Normal")))), /*#__PURE__*/React.createElement("textarea", {
    rows: "10",
    cols: "50",
    placeholder: "Text...",
    "aria-label": "Text to translate",
    className: "b-alay__app__textarea",
    value: text,
    onChange: e => setText(e.target.value)
  }), /*#__PURE__*/React.createElement("textarea", {
    rows: "10",
    cols: "50",
    "aria-label": "Translated text",
    className: "b-alay__app__textarea",
    value: translate(text, direction),
    readOnly: true
  })));
}
export default AlayTranslator;