'use strict';

import { translate, NORMAL_TO_ALAY, ALAY_TO_NORMAL } from './translate.js';

const { useState } = React;

function AlayTranslator() {
  const [text, setText] = useState('');
  const [direction, setDirection] = useState(NORMAL_TO_ALAY);

  const handleDirection = (e) => setDirection(e.target.value);

  return (
    <div className="b-alay">
      <form className="b-alay__app">
        <fieldset className="b-alay__app__fieldset">
          <ul className="b-alay__app__fieldset__list">
            <li className="b-alay__app__fieldset__list__checkbox">
              <input id="b-alay-normal-to-alay" checked={direction === NORMAL_TO_ALAY} type="radio" name="translator" value={NORMAL_TO_ALAY} onChange={handleDirection} />
              <label htmlFor="b-alay-normal-to-alay">Normal -&gt; Alay</label>
            </li>

            <li className="b-alay__app__fieldset__list__checkbox b-alay__fieldset__list__checkbox--last">
              <input id="b-alay-alay-to-normal" checked={direction === ALAY_TO_NORMAL} type="radio" name="translator" value={ALAY_TO_NORMAL} onChange={handleDirection} />
              <label htmlFor="b-alay-alay-to-normal">Alay -&gt; Normal</label>
            </li>
          </ul>
        </fieldset>

        <textarea rows="10" cols="50" placeholder="Text..." aria-label="Text to translate" className="b-alay__app__textarea" value={text} onChange={(e) => setText(e.target.value)} />

        <textarea rows="10" cols="50" aria-label="Translated text" className="b-alay__app__textarea" value={translate(text, direction)} readOnly />
      </form>
    </div>
  );
}

export default AlayTranslator;
