import { h as head, p as pop, b as push } from "../../../chunks/index.js";
function _page($$payload, $$props) {
  push(false);
  head($$payload, ($$payload2) => {
    $$payload2.title = "<title>";
    $$payload2.title += `Image Comparison</title>`;
  });
  $$payload.out += `<body></body>`;
  pop();
}
export {
  _page as default
};
