import * as server from '../entries/pages/sverdle/_page.server.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sverdle/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/sverdle/+page.server.js";
export const imports = ["_app/immutable/nodes/7.uHuicon_.js","_app/immutable/chunks/disclose-version.B5tPFymZ.js","_app/immutable/chunks/runtime.QCgSEibu.js","_app/immutable/chunks/each.HxRgVaxx.js","_app/immutable/chunks/if.DcFoSNuG.js","_app/immutable/chunks/store.DaqSqxOx.js","_app/immutable/chunks/entry.DEzs8AnO.js"];
export const stylesheets = ["_app/immutable/assets/7.CsK1kdSh.css"];
export const fonts = [];
