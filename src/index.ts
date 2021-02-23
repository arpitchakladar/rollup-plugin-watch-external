import fg from "fast-glob";
import type { Plugin } from "rollup";
import type { RollupPluginWatchExternalOptions } from "../index";

export const watchExternal = (options?: RollupPluginWatchExternalOptions): Plugin => {
	const { entries = [] } = options || {};

	return {
		name: "watch-external",
		async buildStart() {
			const parsedEntries = fg.stream(entries, { dot: true });

			for await (const entry of parsedEntries) {
				this.addWatchFile(entry);
			}
		}
	};
};
