import * as universal from '../entries/pages/contact/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/contact/+page.js";
export const imports = ["_app/immutable/nodes/4.DFSXvtMZ.js","_app/immutable/chunks/index.R8ovVqwX.js","_app/immutable/chunks/disclose-version.B5tPFymZ.js","_app/immutable/chunks/runtime.QCgSEibu.js","_app/immutable/chunks/Title.D_z-uuK9.js"];
export const stylesheets = ["_app/immutable/assets/4.Dh14ix_r.css","_app/immutable/assets/Title.CwUaG3P1.css"];
export const fonts = [];
