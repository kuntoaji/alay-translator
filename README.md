# Alay Translator
Alay Translator is a very simple React application to translate normal text to alay, and alay to normal text.
It loads React 18 from UMD builds and does not require a JavaScript bundler. It embraces the use of [JS modules feature from browsers][js_modules].

Demo: <https://tools.kaklabs.com/alay-translator.html>

## How To Run Alay Translator
* Clone repository - `git clone git@github.com:kuntoaji/alay-translator.git`
* Change directory - `cd alay-translator`
* Run a web server. If your machine has Python, you can run `python3 -m http.server`.
* Open localhost from your browser. Example: `localhost:8000`.

## How To Build JS Modules
* Run `npm install`
* Run `npm run build`
* If you want to run in watch mode, run `npm run watch`

## How To Run Tests
* Run `npm test`

## License
Released under the MIT License, Copyright (c) 2015–ω Kunto Aji Kristianto.

[js_modules]: https://v8.dev/features/modules
