export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","favicon.png","faviconx.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.DqR8CiGR.js","app":"_app/immutable/entry/app.KjuUF6aP.js","imports":["_app/immutable/entry/start.DqR8CiGR.js","_app/immutable/chunks/entry.DEzs8AnO.js","_app/immutable/chunks/runtime.QCgSEibu.js","_app/immutable/entry/app.KjuUF6aP.js","_app/immutable/chunks/runtime.QCgSEibu.js","_app/immutable/chunks/disclose-version.B5tPFymZ.js","_app/immutable/chunks/if.DcFoSNuG.js","_app/immutable/chunks/main-client.D48dNy6I.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js'))
		],
		routes: [
			{
				id: "/shinsei-no-mon",
				pattern: /^\/shinsei-no-mon\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/sverdle",
				pattern: /^\/sverdle\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
