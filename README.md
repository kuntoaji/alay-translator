# Alay Translator
Translate normal text to alay.
Alay Translator does not require Javascript bundler. It embraces the use of [JS modules feature from browsers][js_modules].

Demo: <https://tools.kaklabs.com/alay-translator.html>

## How To Run Alay Translator
* Clone repository - `git clone git@github.com:kuntoaji/alay-translator.git`
* Change directory - `cd alay-translator`
* Run web server. If your machine has python, you can run `python -m SimpleHTTPServer`.
* Open localhost from your browser. Example: `localhost:8000`.

## How To Build JS Modules
* Run `npm install`
* Run `npx babel modules --out-dir build --presets react-app/prod`
* If you want to run in watch mode `npx babel --watch modules --out-dir build --presets react-app/prod`

## License
Released under the MIT License, Copyright (c) 2015–ω Kunto Aji Kristianto.

[js_modules]: https://v8.dev/features/modules
