import { c as create_anchor, h as head, p as pop, a as attr, b as push } from "../../chunks/index.js";
import { I as Introduce } from "../../chunks/Introduce.js";
import { T as Title } from "../../chunks/Title.js";
const logo = "/_app/immutable/assets/Arine-C.DYlqiHIH.png";
function _page($$payload, $$props) {
  push(false);
  const anchor = create_anchor($$payload);
  const anchor_1 = create_anchor($$payload);
  head($$payload, ($$payload2) => {
    $$payload2.title = "<title>";
    $$payload2.title += `Home</title>`;
    $$payload2.out += `<meta name="description" content="My Portofolio" class="svelte-1f0upwa"> <link rel="icon" type="image/png"${attr("href", logo, false)} class="svelte-1f0upwa">`;
  });
  $$payload.out += `<section class="svelte-1f0upwa">${anchor}`;
  Title($$payload);
  $$payload.out += `${anchor} ${anchor_1}`;
  Introduce($$payload);
  $$payload.out += `${anchor_1}</section>`;
  pop();
}
export {
  _page as default
};
