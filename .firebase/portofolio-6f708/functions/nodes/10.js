import * as universal from '../entries/pages/zettai-ryouiki/_page.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/zettai-ryouiki/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/zettai-ryouiki/+page.js";
export const imports = ["_app/immutable/nodes/10.Claret6a.js","_app/immutable/chunks/index.R8ovVqwX.js","_app/immutable/chunks/disclose-version.B5tPFymZ.js","_app/immutable/chunks/runtime.QCgSEibu.js"];
export const stylesheets = [];
export const fonts = [];
