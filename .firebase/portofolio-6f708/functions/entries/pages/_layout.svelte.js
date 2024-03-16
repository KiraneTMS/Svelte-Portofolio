import { a as attr, s as store_get, u as unsubscribe_stores, p as pop, f as stringify, b as push, c as create_anchor, j as slot, e as escape } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
const logo = "/_app/immutable/assets/Arine-W.Dw0udKi2.png";
function Header($$payload, $$props) {
  push(false);
  var $$store_subs;
  $$payload.out += `<header class="svelte-1715uo3"><nav${attr("class", `${stringify("nav affixed")} svelte-1715uo3`, false)}><div class="container svelte-1715uo3"><div class="logo svelte-1715uo3"><div class="logo-container no-hover svelte-1715uo3"><a href="/" class="svelte-1715uo3"><img${attr("src", logo, false)} class="svelte-1715uo3"></a></div></div> <div id="mainListDiv"${attr("class", `${stringify("main_list")} svelte-1715uo3`, false)}><ul class="navlinks svelte-1715uo3"><li${attr("aria-current", store_get($$store_subs ??= {}, "$page", page).url.pathname === "/about" ? "page" : void 0, false)} class="svelte-1715uo3"><a href="/about" class="svelte-1715uo3">About</a></li> <li${attr("aria-current", store_get($$store_subs ??= {}, "$page", page).url.pathname === "/portofolio" ? "page" : void 0, false)} class="svelte-1715uo3"><a href="/portofolio" class="svelte-1715uo3">Portfolio</a></li> <li${attr("aria-current", store_get($$store_subs ??= {}, "$page", page).url.pathname === "/contact" ? "page" : void 0, false)} class="svelte-1715uo3"><a href="/contact" class="svelte-1715uo3">Contact</a></li></ul></div> <span${attr("class", `${stringify("navTrigger")} svelte-1715uo3`, false)}><i class="svelte-1715uo3"></i> <i class="svelte-1715uo3"></i> <i class="svelte-1715uo3"></i></span></div></nav></header>`;
  if ($$store_subs)
    unsubscribe_stores($$store_subs);
  pop();
}
function _layout($$payload, $$props) {
  push(false);
  var $$store_subs;
  let currentPage;
  page.subscribe((value) => {
    currentPage = value;
  });
  const anchor = create_anchor($$payload);
  const anchor_2 = create_anchor($$payload);
  const anchor_3 = create_anchor($$payload);
  $$payload.out += `<div class="app svelte-1jeik2b">${anchor}`;
  if ((currentPage && currentPage.url)?.pathname !== "/zettai-ryouiki" && (currentPage && currentPage.url)?.pathname !== "/shinsei-no-mon") {
    $$payload.out += "<!--ssr:if:true-->";
    const anchor_1 = create_anchor($$payload);
    $$payload.out += `${anchor_1}`;
    Header($$payload);
    $$payload.out += `${anchor_1}`;
  } else {
    $$payload.out += "<!--ssr:if:false-->";
  }
  $$payload.out += `${anchor} <main class="svelte-1jeik2b">${anchor_2}`;
  slot($$payload, $$props.children, {}, null);
  $$payload.out += `${anchor_2}</main> ${anchor_3}`;
  if ((currentPage && currentPage.url)?.pathname !== "/zettai-ryouiki" && (currentPage && currentPage.url)?.pathname !== "/shinsei-no-mon") {
    $$payload.out += "<!--ssr:if:true-->";
    $$payload.out += `<footer>${escape(console.log("Footer rendering for:", currentPage?.url?.pathname))} <div class="container row svelte-1jeik2b"><div class="footer-col svelte-1jeik2b"><h4 class="svelte-1jeik2b">Pages</h4> <ul class="svelte-1jeik2b"><li${attr("aria-current", store_get($$store_subs ??= {}, "$page", page).url.pathname === "/" ? "page" : void 0, false)} class="svelte-1jeik2b"><a${attr("href", store_get($$store_subs ??= {}, "$page", page).url.pathname === "/" ? "/" : "/", false)} class="svelte-1jeik2b">Home</a></li> <li${attr("aria-current", store_get($$store_subs ??= {}, "$page", page).url.pathname === "/about" ? "page" : void 0, false)} class="svelte-1jeik2b"><a${attr("href", store_get($$store_subs ??= {}, "$page", page).url.pathname === "/about" ? "/about" : "/", false)} class="svelte-1jeik2b">About Me</a></li> <li${attr("aria-current", store_get($$store_subs ??= {}, "$page", page).url.pathname === "/portofolio" ? "page" : void 0, false)} class="svelte-1jeik2b"><a href="/portofolio" class="svelte-1jeik2b">Portfolio</a></li> <li${attr("aria-current", store_get($$store_subs ??= {}, "$page", page).url.pathname === "/contact" ? "page" : void 0, false)} class="svelte-1jeik2b"><a${attr("href", store_get($$store_subs ??= {}, "$page", page).url.pathname === "/contact" ? "/contact" : "/", false)} class="svelte-1jeik2b">Contact</a></li></ul></div> <div class="footer-col svelte-1jeik2b"><h4 class="svelte-1jeik2b">follow me</h4> <div class="social-links svelte-1jeik2b"><a href="https://www.deviantart.com/arinemir" data-title="DeviantArt" class="svelte-1jeik2b"><i class="fa-brands fa-deviantart"></i></a> <a href="https://twitter.com/_ArinEmir_" data-title="Twitter" class="svelte-1jeik2b"><i class="fa-brands fa-x-twitter"></i></a> <a href="#" data-title="Instagram" class="svelte-1jeik2b"><i class="fa-brands fa-instagram"></i></a> <a href="#" data-title="LinkedIn" class="svelte-1jeik2b"><i class="fa-brands fa-linkedin-in"></i></a></div></div></div></footer>`;
  } else {
    $$payload.out += "<!--ssr:if:false-->";
  }
  $$payload.out += `${anchor_3}</div>`;
  if ($$store_subs)
    unsubscribe_stores($$store_subs);
  pop();
}
export {
  _layout as default
};
