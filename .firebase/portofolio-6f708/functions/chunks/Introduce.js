import { e as escape, p as pop, b as push } from "./index.js";
function Introduce($$payload, $$props) {
  push(false);
  let typedText = "";
  $$payload.out += `<section class="about svelte-ecda1q" id="about"><div class="max-width svelte-ecda1q"><h2 class="title svelte-ecda1q">About Me</h2> <div class="about-content svelte-ecda1q"><div class="column right svelte-ecda1q"><div class="text svelte-ecda1q">I'm Arin Emir and I am a <span class="typing-2 svelte-ecda1q">${escape(typedText)}</span></div> <p class="svelte-ecda1q">Hi there! I'm a versatile individual with a knack for web development, Android programming, and a passion for bringing anime artistry to life. I've navigated the realms of coding and creative design, finding joy in the intersection of technology and artistic expression.</p> <br class="svelte-ecda1q"> <p style="font-style: italic;" class="svelte-ecda1q">Fun Fact: I was 1st winner at the Karutakana contest during Yamato Damashii XIV STBA YAPARI-ABA 2019</p></div></div></div></section>`;
  pop();
}
export {
  Introduce as I
};
