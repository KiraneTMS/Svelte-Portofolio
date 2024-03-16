import { v as value_or_fallback, a as attr, e as escape, i as bind_props, p as pop, f as stringify, b as push, c as create_anchor, d as ensure_array_like, h as head } from "../../../chunks/index.js";
import { I as Introduce } from "../../../chunks/Introduce.js";
import { T as Title } from "../../../chunks/Title.js";
function Skills($$payload, $$props) {
  push(false);
  let cssVarStyles;
  let progress = $$props["progress"];
  let title = value_or_fallback($$props["title"], "Progress");
  let titleColor = "#fff";
  let progressColor = "#000";
  const angle = 360 * progress;
  const number = progress * 100;
  const background = `radial-gradient(white 50%, transparent 51%),
      conic-gradient(transparent 0deg ${angle}deg, gainsboro ${angle}deg 360deg),
      conic-gradient(#9d87ff 0deg, #3300ec 90deg, #3a005c 180deg, #1c002c);`;
  cssVarStyles = `--background:${background}`;
  $$payload.out += `<div class="card svelte-2kzip3" id="card-container"><span id="progress-text"${attr("style", `--title-color: ${stringify(titleColor)}`, false)} class="svelte-2kzip3">${escape(title)}</span> <div id="progress-circle"${attr("style", cssVarStyles, false)} class="svelte-2kzip3"><span id="skill-title"${attr("style", `--progress-color: ${stringify(progressColor)}`, false)} class="svelte-2kzip3">${escape(number.toFixed(0))}%</span></div></div>`;
  bind_props($$props, { progress, title });
  pop();
}
const programmingskillsData = [
  {
    title: "HTML",
    progress: 0.9
  },
  {
    title: "CSS",
    progress: 0.8
  },
  {
    title: "JavaScript",
    progress: 0.75
  },
  {
    title: "Java",
    progress: 0.85
  },
  {
    title: "Kotlin",
    progress: 0.8
  },
  {
    title: "Php",
    progress: 0.85
  }
];
const languageSkillsData = [
  {
    title: "English",
    progress: 0.75
  },
  {
    title: "Japanese",
    progress: 0.8
  }
];
const artSkillsData = [
  {
    title: "Digital Art",
    progress: 0.85
  },
  {
    title: "Character Design",
    progress: 0.8
  },
  {
    title: "Concept Art",
    progress: 0.8
  },
  {
    title: "Logo Design",
    progress: 0.85
  }
];
const data = {
  programmingskillsData,
  languageSkillsData,
  artSkillsData
};
function _page($$payload, $$props) {
  push(false);
  const anchor = create_anchor($$payload);
  const anchor_1 = create_anchor($$payload);
  const anchor_2 = create_anchor($$payload);
  const each_array = ensure_array_like(data.programmingskillsData);
  const anchor_5 = create_anchor($$payload);
  const each_array_1 = ensure_array_like(data.artSkillsData);
  const anchor_8 = create_anchor($$payload);
  const each_array_2 = ensure_array_like(data.languageSkillsData);
  head($$payload, ($$payload2) => {
    $$payload2.title = "<title>";
    $$payload2.title += `About</title>`;
    $$payload2.out += `<meta name="description" content="About this app">`;
  });
  $$payload.out += `${anchor}`;
  Title($$payload);
  $$payload.out += `${anchor} ${anchor_1}`;
  Introduce($$payload);
  $$payload.out += `${anchor_1} <h2 class="skills_type svelte-1y2izu0">Programming Skills</h2> <div style="display: flex; gap: 20px; justify-content: center; align-items: center; overflow-x: auto; white-space: nowrap; scrollbar-width: thin; scrollbar-color: #333 #ccc;">${anchor_2}`;
  for (let $$index = 0; $$index < each_array.length; $$index++) {
    const $$item = each_array[$$index];
    const { title, progress } = $$item;
    const anchor_3 = create_anchor($$payload);
    const anchor_4 = create_anchor($$payload);
    $$payload.out += `${anchor_3}${anchor_4}`;
    Skills($$payload, { progress, title });
    $$payload.out += `${anchor_4}${anchor_3}`;
  }
  $$payload.out += `${anchor_2}</div> <h2 class="skills_type svelte-1y2izu0">Visual Arts and Design</h2> <div style="display: flex; gap: 20px; justify-content: center; align-items: center; overflow-x: auto; white-space: nowrap; scrollbar-width: thin; scrollbar-color: #333 #ccc;">${anchor_5}`;
  for (let $$index_1 = 0; $$index_1 < each_array_1.length; $$index_1++) {
    const $$item = each_array_1[$$index_1];
    const { title, progress } = $$item;
    const anchor_6 = create_anchor($$payload);
    const anchor_7 = create_anchor($$payload);
    $$payload.out += `${anchor_6}${anchor_7}`;
    Skills($$payload, { progress, title });
    $$payload.out += `${anchor_7}${anchor_6}`;
  }
  $$payload.out += `${anchor_5}</div> <h2 class="skills_type svelte-1y2izu0">Language Skills</h2> <div style="display: flex; gap: 20px; justify-content: center; align-items: center; overflow-x: auto; white-space: nowrap; scrollbar-width: thin; scrollbar-color: #333 #ccc;">${anchor_8}`;
  for (let $$index_2 = 0; $$index_2 < each_array_2.length; $$index_2++) {
    const $$item = each_array_2[$$index_2];
    const { title, progress } = $$item;
    const anchor_9 = create_anchor($$payload);
    const anchor_10 = create_anchor($$payload);
    $$payload.out += `${anchor_9}${anchor_10}`;
    Skills($$payload, { progress, title });
    $$payload.out += `${anchor_10}${anchor_9}`;
  }
  $$payload.out += `${anchor_8}</div>`;
  pop();
}
export {
  _page as default
};
