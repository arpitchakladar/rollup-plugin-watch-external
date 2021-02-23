import type { Plugin } from "rollup";

export interface RollupPluginWatchExternalOptions {
	entries: string[];
};

export const watchExternal = (options?: RollupPluginWatchExternalOptions) => Plugin;
