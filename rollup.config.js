import path from "path";
import fs from "fs";
import { builtinModules } from "module";
import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";

const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, "package.json")));
const node_modules = [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.devDependencies || {}), ...Object.keys(pkg.peerDependencies || {}), ...builtinModules]

export default {
	input: path.resolve(__dirname, "src", "index.ts"),
	external: node_modules,
	output: {
		format: "cjs",
		file: path.resolve(__dirname, "dist", "index.js"),
		sourcemap: true
	},
	plugins: [
		typescript({
			tsconfig: path.resolve(__dirname, "tsconfig.json")
		}),
		commonjs({
			extensions: [".js", ".ts"]
		})
	],
	watch: {
		clearScreen: true
	}
};
