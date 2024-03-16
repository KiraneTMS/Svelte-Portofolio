import * as universal from '../entries/pages/shinsei-no-mon/_page.js';
import * as server from '../entries/pages/shinsei-no-mon/_page.server.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/shinsei-no-mon/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/shinsei-no-mon/+page.js";
export { server };
export const server_id = "src/routes/shinsei-no-mon/+page.server.js";
export const imports = ["_app/immutable/nodes/6.D72vjGLU.js","_app/immutable/chunks/disclose-version.B5tPFymZ.js","_app/immutable/chunks/runtime.QCgSEibu.js","_app/immutable/chunks/if.DcFoSNuG.js","_app/immutable/chunks/main-client.D48dNy6I.js"];
export const stylesheets = ["_app/immutable/assets/6.CDsET6IJ.css"];
export const fonts = [];
