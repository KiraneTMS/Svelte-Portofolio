import * as universal from '../entries/pages/portofolio/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/portofolio/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/portofolio/+page.js";
export const imports = ["_app/immutable/nodes/5.CrDJzDUB.js","_app/immutable/chunks/index.R8ovVqwX.js","_app/immutable/chunks/disclose-version.B5tPFymZ.js","_app/immutable/chunks/runtime.QCgSEibu.js","_app/immutable/chunks/each.HxRgVaxx.js","_app/immutable/chunks/if.DcFoSNuG.js","_app/immutable/chunks/main-client.D48dNy6I.js"];
export const stylesheets = ["_app/immutable/assets/5.38CUMrry.css"];
export const fonts = [];
