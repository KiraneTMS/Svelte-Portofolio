import * as universal from '../entries/pages/testing-ground/_page.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/testing-ground/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/testing-ground/+page.js";
export const imports = ["_app/immutable/nodes/9.B0GfRAjJ.js","_app/immutable/chunks/index.R8ovVqwX.js","_app/immutable/chunks/disclose-version.B5tPFymZ.js","_app/immutable/chunks/runtime.QCgSEibu.js"];
export const stylesheets = [];
export const fonts = [];
