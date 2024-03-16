import { c as create_anchor, a as attr, i as bind_props, p as pop, f as stringify, b as push } from "../../../chunks/index.js";
import "jsbarcode";
const video = "/_app/immutable/assets/Open-Door.4QwGsEBS.mp4";
const moonCrest = "/_app/immutable/assets/Van Sylvania Crest (Moon).BXsPontx.png";
const flowerCrest = "/_app/immutable/assets/Van Sylvania Crest (Flower).DnEJHrcJ.png";
function _page($$payload, $$props) {
  push(false);
  let form = $$props["form"];
  console.log(form);
  const anchor = create_anchor($$payload);
  $$payload.out += `<div class="container svelte-1wi5fie"><video id="video" class="svelte-1wi5fie"><source${attr("src", video, false)} type="video/mp4"> Your browser does not support the video tag.</video> <div class="absolute-rectangle svelte-1wi5fie"><button class="close-button svelte-1wi5fie">×</button> <div class="title-container svelte-1wi5fie"><img${attr("src", moonCrest, false)} class="svelte-1wi5fie"> <h1 class="title svelte-1wi5fie">Welcome</h1> <img${attr("src", flowerCrest, false)} class="svelte-1wi5fie"></div> <p class="description svelte-1wi5fie">You are about to enter the sanctum that governs the very essence of this realm, 'Zettai Ryouiki.' State your identity, for only those deemed worthy may tread within.</p> ${anchor}`;
  {
    $$payload.out += "<!--ssr:if:true-->";
    $$payload.out += `<div class="login-container svelte-1wi5fie"><form method="POST"><input type="id" name="id" placeholder="id" class="id-input svelte-1wi5fie"> <input type="password" name="password" placeholder="Password" class="password-input svelte-1wi5fie"> <button class="login-button svelte-1wi5fie" type="submit">login</button></form></div>`;
  }
  $$payload.out += `${anchor}</div> <section class="hologram-container svelte-1wi5fie"${attr("style", ` transition: opacity 1s ease-in-out; opacity: ${stringify(1)};`, false)}><h2 class="svelte-1wi5fie">Please Identify Yourself</h2> <div class="cricle svelte-1wi5fie"><div class="svelte-1wi5fie"><span class="cri cri-1 svelte-1wi5fie"></span> <span class="cri cri-2 svelte-1wi5fie"></span> <span class="cri cri-3 svelte-1wi5fie"></span></div> <div class="holo svelte-1wi5fie"><span class="holo-1 svelte-1wi5fie" style="--i: 1"></span> <span class="holo-1 svelte-1wi5fie" style="--i: 2"></span> <span class="holo-1 svelte-1wi5fie" style="--i: 3"></span> <span class="holo-1 svelte-1wi5fie" style="--i: 4"></span> <span class="holo-1 svelte-1wi5fie" style="--i: 5"></span> <span class="holo-1 svelte-1wi5fie" style="--i: 6"></span> <span class="holo-1 svelte-1wi5fie" style="--i: 7"></span> <span class="holo-1 svelte-1wi5fie" style="--i: 8"></span> <span class="holo-1 svelte-1wi5fie" style="--i: 9"></span> <span class="holo-1 svelte-1wi5fie" style="--i: 10"></span> <span class="holo-1 svelte-1wi5fie" style="--i: 11"></span> <span class="holo-1 svelte-1wi5fie" style="--i: 12"></span> <span class="holo-1 svelte-1wi5fie" style="--i: 13"></span> <span class="holo-1 svelte-1wi5fie" style="--i: 14"></span></div></div> <button class="btn svelte-1wi5fie" id="btn"><svg fill="#fff" height="40px" width="40px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 485 485" xml:space="preserve"><g><path d="M382.5,69.429c-7.441,0-14.5,1.646-20.852,4.573c-4.309-23.218-24.7-40.859-49.148-40.859
                    c-7.68,0-14.958,1.744-21.467,4.852C285.641,16.205,265.932,0,242.5,0c-23.432,0-43.141,16.206-48.533,37.995
                    c-6.508-3.107-13.787-4.852-21.467-4.852c-27.57,0-50,22.43-50,50v122.222c-6.129-2.686-12.891-4.187-20-4.187
                    c-27.57,0-50,22.43-50,50V354c0,72.233,58.766,131,131,131h118c72.233,0,131-58.767,131-131V119.429
                    C432.5,91.858,410.07,69.429,382.5,69.429z M402.5,354c0,55.691-45.309,101-101,101h-118c-55.691,0-101-45.309-101-101V251.178
                    c0-11.028,8.972-20,20-20s20,8.972,20,20v80h30V83.143c0-11.028,8.972-20,20-20s20,8.972,20,20v158.035h30V50
                    c0-11.028,8.972-20,20-20c11.028,0,20,8.972,20,20v191.178h30V83.143c0-11.028,8.972-20,20-20s20,8.972,20,20v158.035h30v-121.75
                    c0-11.028,8.972-20,20-20s20,8.972,20,20V354z"></path></g></svg></button></section></div>`;
  bind_props($$props, { form });
  pop();
}
export {
  _page as default
};
