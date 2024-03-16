import { p as pop, b as push, c as create_anchor } from "./index.js";
function Socials($$payload, $$props) {
  push(false);
  $$payload.out += `<div class="socialMediaBtn svelte-1es3ezq"><a href="https://www.deviantart.com/arinemir" class="svelte-1es3ezq"><div class="twitter hover svelte-1es3ezq"><i class="fa-brands fa-deviantart svelte-1es3ezq"></i> DeviantArt</div></a> <a href="https://github.com/KiraneTMS/" target="_blank" class="svelte-1es3ezq"><div class="github hover svelte-1es3ezq"><i class="fa-brands fa-github svelte-1es3ezq"></i> GitHub</div></a> <a href="https://www.linkedin.com/in/arsya-alifian-widiatmoko-847089190/" class="svelte-1es3ezq"><div class="linkedin hover svelte-1es3ezq"><i class="fa-brands fa-linkedin svelte-1es3ezq"></i> LinkedIn</div></a></div>`;
  pop();
}
function Title($$payload, $$props) {
  push(false);
  const anchor = create_anchor($$payload);
  $$payload.out += `<div class="wrap svelte-124gapx"><div class="shape svelte-124gapx"><h1 class="title svelte-124gapx" data-text="Arin Emir">Arin Emir</h1><br class="svelte-124gapx"> ${anchor}`;
  Socials($$payload);
  $$payload.out += `${anchor}</div> <div class="shape svelte-124gapx"></div> <div class="shape svelte-124gapx"></div></div>`;
  pop();
}
export {
  Title as T
};
