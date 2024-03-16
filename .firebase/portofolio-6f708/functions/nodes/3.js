import * as universal from '../entries/pages/about/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/about/+page.js";
export const imports = ["_app/immutable/nodes/3.rb502GJE.js","_app/immutable/chunks/index.R8ovVqwX.js","_app/immutable/chunks/disclose-version.B5tPFymZ.js","_app/immutable/chunks/runtime.QCgSEibu.js","_app/immutable/chunks/each.HxRgVaxx.js","_app/immutable/chunks/Introduce.pihPoyp0.js","_app/immutable/chunks/main-client.D48dNy6I.js","_app/immutable/chunks/Title.D_z-uuK9.js"];
export const stylesheets = ["_app/immutable/assets/3.C4mX--jr.css","_app/immutable/assets/Introduce.CV1OxqmH.css","_app/immutable/assets/Title.CwUaG3P1.css"];
export const fonts = [];
