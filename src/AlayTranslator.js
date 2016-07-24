import React, { Component } from 'react';
import logo from './logo.svg';
import './AlayTranslator.css';

class AlayTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {originalText: '', translatedText: '', translator: "0"};
  }

  handleTextChange(e) {
    this.translate(e.target.value);
  }

  handleTranslator(e) {
    this.setState({translator: e.target.value});
  }

  translate(originalText) {
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

    this.setState({originalText: originalText, translatedText: translatedText});
  }

  render() {
    return (
      <div className="b-alay">
        <header className="b-alay__header">
          <img src={logo} className="b-alay__header__logo" alt="logo" />
          <h1>Alay Translator</h1>
        </header>
        <form className='b-alay__app'>
          <fieldset className='b-alay__app__fieldset'>
            <ul className='b-alay__app__fieldset__list'>
              <li className='b-alay__app__fieldset__list__checkbox'>
                <input checked={this.state.translator === "0"} type="radio" name="translator" value="0" onChange={this.handleTranslator.bind(this)} /><label>Normal -> Alay</label>
              </li>

              <li className='b-alay__app__fieldset__list__checkbox b-alay__fieldset__list__checkbox--last'>
                <input checked={this.state.translator === "1"} type="radio" name="translator" value="1" onChange={this.handleTranslator.bind(this)} /><label>Alay -> Normal</label>
              </li>
            </ul>
          </fieldset>

          <textarea rows="10" cols="50" placeholder="Teks..." className='b-alay__app__textarea' onChange={this.handleTextChange.bind(this)}>
          </textarea>

          <textarea rows="10" cols="50" className='b-alay__app__textarea' value={this.state.translatedText} readOnly >
          </textarea>
        </form>
      </div>
    );
  }
}

export default AlayTranslator;
