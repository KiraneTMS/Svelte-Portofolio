import { p as pop, b as push, c as create_anchor, h as head } from "../../../chunks/index.js";
import { T as Title } from "../../../chunks/Title.js";
function Contact($$payload, $$props) {
  push(false);
  $$payload.out += `<section class="svelte-14zuci"><h1 class="svelte-14zuci">Contact Me</h1> <form method="post" action="mailto:arsyaalifian4@gmail.com" class="svelte-14zuci"><div class="name-email svelte-14zuci"><div class="svelte-14zuci"><label for="name" class="svelte-14zuci">Name</label> <input type="text" name="nom" id="nom" maxlength="50" required class="svelte-14zuci"></div> <div class="svelte-14zuci"><label for="email" class="svelte-14zuci">email</label> <input type="email" name="email" id="email" maxlength="50" required class="svelte-14zuci"></div></div> <label for="message" class="svelte-14zuci">message</label> <textarea name="message" id="message" rows="10" maxlength="1000" required class="svelte-14zuci"></textarea> <input type="submit" value="Send" class="cta svelte-14zuci"></form></section>`;
  pop();
}
function _page($$payload, $$props) {
  push(false);
  const anchor = create_anchor($$payload);
  const anchor_1 = create_anchor($$payload);
  head($$payload, ($$payload2) => {
    $$payload2.title = "<title>";
    $$payload2.title += `Contact</title>`;
    $$payload2.out += `<meta name="description" content="About this app">`;
  });
  $$payload.out += `${anchor}`;
  Title($$payload);
  $$payload.out += `${anchor} ${anchor_1}`;
  Contact($$payload);
  $$payload.out += `${anchor_1}`;
  pop();
}
export {
  _page as default
};
