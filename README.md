# rollup-plugin-watch-external

A rollup plugin to add additional files to the rollup watch files list.

## Installation

```bash
# yarn
yarn add -D rollup-plugin-watch-external

# npm
npm install rollup-plugin-watch-external --save-dev
```

## Usage
```js
// rollup.config.js
import { watchExternal } from "rollup-plugin-watch-external";

export default {
	input: "src/index.js",
	output: {
		file: "dist/bundle.js",
		format: "iife"
	},
	plugins: [
		watchExternal({
			entries: ["public/**.js"]
		})
	]
}
```

### Configuration

The configuration options are:

#### entries

Type: `Array` | Default: `[]`

An array of string glob patterns for files to watch.

## Original Author

[Arpit Chakladar](https://github.com/arpitchakladar)

## License

MIT
