import { v as value_or_fallback, c as create_anchor, d as ensure_array_like, a as attr, e as escape, i as bind_props, p as pop, f as stringify, b as push, h as head } from "../../../chunks/index.js";
import "vanilla-tilt";
function ImageCard($$payload, $$props) {
  push(false);
  let link = value_or_fallback($$props["link"], "");
  let title = value_or_fallback($$props["title"], "");
  let description = value_or_fallback($$props["description"], "");
  let tools = value_or_fallback($$props["tools"], []);
  let truncateDescription = (description2, maxLength) => {
    if (description2.length > maxLength) {
      return `${description2.slice(0, maxLength)}...`;
    } else {
      return description2;
    }
  };
  const anchor = create_anchor($$payload);
  const each_array = ensure_array_like(tools);
  $$payload.out += `<div class="art-product-container svelte-ctt5xw"${attr("style", `background: #7e7e7e url('${stringify(link)}');background-size: cover;background-position: center;`, false)}><div class="overlay svelte-ctt5xw"><h1 class="art-name svelte-ctt5xw">${escape(title)}</h1> <p class="art-description svelte-ctt5xw" style="line-height: 1.2;">${escape(truncateDescription(description, 50))}</p> ${anchor}`;
  for (let $$index = 0; $$index < each_array.length; $$index++) {
    const $$item = each_array[$$index];
    const { name, icon } = $$item;
    const anchor_1 = create_anchor($$payload);
    $$payload.out += `${anchor_1}<div class="small-image svelte-ctt5xw"${attr("style", `background: url('${stringify(icon)}'); background-size: cover;`, false)}></div>${anchor_1}`;
  }
  $$payload.out += `${anchor}</div></div>`;
  bind_props($$props, { link, title, description, tools });
  pop();
}
const software = [
  {
    name: "Portofolio Website",
    client: "-",
    image: "https://i.imgur.com/WAyRXjk.png",
    description: "My Portofolio Website",
    brief_description: "My Portofolio Website",
    purpose: "Personal",
    Platform: "Website",
    tech_stack: [
      {
        name: "CSS"
      },
      {
        name: "HTML"
      },
      {
        name: "JavaScript"
      },
      {
        name: "SvelteKit"
      },
      {
        name: "JSON"
      }
    ],
    source: "https://github.com/KiraneTMS/Svelte-Portofolio",
    position: "Fullstack Developer"
  },
  {
    name: "BoBy-Body Balancy",
    client: "-",
    image: "https://i.imgur.com/Or8HuyS.png",
    description: "Body management android application named BoBy \nApplication that can predict a person's obesity level and calorie needs based on the input of body weight, height, etc. then the system will recommend exercise according to the predicted results of calorie needs. Besides that in the system there are also features that can detect the calories produced by a food based on its type / category.",
    brief_description: "Body management android application named BoBy \nApplication that can predict a person's obesity level",
    purpose: "Academic",
    Platform: "Android",
    tech_stack: [
      {
        name: "Kotlin"
      },
      {
        name: "Retrofit"
      }
    ],
    source: "https://github.com/KiraneTMS/BodyBalancy",
    position: "Android Developer"
  }
];
const softwaresJson = {
  software
};
const Programming = [
  {
    title: "HTML",
    image: "/src/lib/images/ico/html/favicon-16x16.png"
  },
  {
    title: "CSS",
    image: "/src/lib/images/ico/css/favicon-16x16.png"
  },
  {
    title: "JavaScript",
    image: "/src/lib/images/ico/js/favicon-16x16.png"
  },
  {
    title: "Java",
    image: "/src/lib/images/ico/java/favicon-16x16.png"
  },
  {
    title: "Kotlin",
    image: "/src/lib/images/ico/kotlin/favicon-16x16.png"
  },
  {
    title: "PHP",
    image: "/src/lib/images/ico/php/favicon-16x16.png"
  },
  {
    title: "JSON",
    image: "/src/lib/images/ico/json/favicon-16x16.png"
  },
  {
    title: "SvelteKit",
    image: "/src/lib/images/ico/svelte/favicon-16x16.png"
  },
  {
    title: "NodeJS",
    image: "/src/lib/images/ico/nodejs/favicon-16x16.png"
  },
  {
    title: "Retrofit",
    image: "/src/lib/images/ico/retrofit/favicon-16x16.png"
  }
];
const Art = [
  {
    title: "Original Character",
    image: "url_for_original_character_image"
  },
  {
    title: "Digital Art",
    image: "url_for_digital_art_image"
  },
  {
    title: "Banner",
    image: "url_for_banner_image"
  },
  {
    title: "Logo",
    image: "url_for_logo_image"
  },
  {
    title: "Traditional Art",
    image: "url_for_traditional_art_image"
  },
  {
    title: "Illustration",
    image: "url_for_illustration_image"
  },
  {
    title: "Concept Art",
    image: "url_for_concept_art_image"
  },
  {
    title: "Sketch",
    image: "url_for_sketch_image"
  },
  {
    title: "Character",
    image: "url_for_sketch_image"
  },
  {
    title: "Mature",
    image: "url_for_sketch_image"
  }
];
const tagsJson = {
  Programming,
  Art
};
function ProgramCard($$payload, $$props) {
  push(false);
  let filteredProgram;
  let searchResult = value_or_fallback($$props["searchResult"], "");
  let activatedProgrammingTags = value_or_fallback($$props["activatedProgrammingTags"], []);
  let projectType = value_or_fallback($$props["projectType"], "");
  if (projectType !== "all") {
    projectType = "";
  }
  filteredProgram = softwaresJson.software.filter(({ name, purpose, description, tech_stack }) => {
    const includesSearchResult = name.toLowerCase().includes(searchResult.toLowerCase()) || description && description.toLowerCase().includes(searchResult.toLowerCase());
    const includesActivatedTags = activatedProgrammingTags.length === 0 || // activatedArtTags.some(tag => tags.some(imageTag => imageTag.toLowerCase() === tag.toLowerCase()));
    // activatedArtTags.every(tag => tags.includes(tag))
    activatedProgrammingTags.every((tag) => tech_stack.map((t) => t.name.toLowerCase()).includes(tag.toLowerCase()));
    const includesProjectType = projectType === "all" || // If projectType is 'all', include everything
    purpose.toLowerCase().includes(projectType.toLowerCase());
    return includesSearchResult && includesActivatedTags && includesProjectType;
  }).slice().reverse();
  const anchor = create_anchor($$payload);
  const each_array = ensure_array_like(filteredProgram);
  $$payload.out += `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha384-DLcjxQ8iJkqlNKn3P9gZPxCVIn+EGkLfd5k7ahFpsENuq+nbrk62Zekn5L/sW7t6" crossorigin="anonymous" class="svelte-1ipggzx"> ${anchor}`;
  for (let $$index_2 = 0; $$index_2 < each_array.length; $$index_2++) {
    const $$item = each_array[$$index_2];
    const {
      name,
      image,
      brief_description,
      purpose,
      Platform,
      tech_stack,
      source
    } = $$item;
    const anchor_1 = create_anchor($$payload);
    const anchor_2 = create_anchor($$payload);
    const each_array_1 = ensure_array_like(tech_stack);
    $$payload.out += `${anchor_1}<div class="card svelte-1ipggzx"><div class="profile-pic svelte-1ipggzx"><img${attr("src", image, false)} alt="Profile Pic" class="svelte-1ipggzx"></div> <div class="details svelte-1ipggzx"><div class="content svelte-1ipggzx"><h2 class="svelte-1ipggzx">${escape(name)}</h2> <p class="tag svelte-1ipggzx">${escape(Platform)} Application</p> <p class="about svelte-1ipggzx">${escape(brief_description)}</p></div> <div class="buttons svelte-1ipggzx"><div class="social svelte-1ipggzx">${anchor_2}`;
    for (let $$index_1 = 0; $$index_1 < each_array_1.length; $$index_1++) {
      const tech = each_array_1[$$index_1];
      const anchor_3 = create_anchor($$payload);
      const anchor_4 = create_anchor($$payload);
      const each_array_2 = ensure_array_like(tagsJson.Programming);
      $$payload.out += `${anchor_3}${anchor_4}`;
      for (let $$index = 0; $$index < each_array_2.length; $$index++) {
        const tag = each_array_2[$$index];
        const anchor_5 = create_anchor($$payload);
        const anchor_6 = create_anchor($$payload);
        $$payload.out += `${anchor_5}${anchor_6}`;
        if (tag.title === tech.name) {
          $$payload.out += "<!--ssr:if:true-->";
          $$payload.out += `<div class="tech svelte-1ipggzx"${attr("title", tag.title, false)}><img${attr("src", tag.image, false)}${attr("alt", tag.title, false)} class="svelte-1ipggzx"></div>`;
        } else {
          $$payload.out += "<!--ssr:if:false-->";
        }
        $$payload.out += `${anchor_6}${anchor_5}`;
      }
      $$payload.out += `${anchor_4}${anchor_3}`;
    }
    $$payload.out += `${anchor_2}</div> <a${attr("href", source, false)} class="link svelte-1ipggzx">Project ➜</a></div></div></div>${anchor_1}`;
  }
  $$payload.out += `${anchor}`;
  bind_props($$props, {
    searchResult,
    activatedProgrammingTags,
    projectType
  });
  pop();
}
const images = [
  {
    title: "Aurluna Concept Character",
    purpose: "Personal",
    link: "https://i.imgur.com/EJTwVZr.png",
    description: "Concept original character named Aurluna Van Sylvania",
    tools: [
      {
        name: "Clip Studio Paint",
        icon: "/src/lib/images/ico/csp/favicon-32x32.png"
      }
    ],
    tags: [
      "character",
      "concept art",
      "digital art",
      "original character"
    ]
  },
  {
    title: "Arine Logo",
    purpose: "Personal",
    link: "https://i.imgur.com/NmiMYcQ.png",
    description: "Logo for portfolio website",
    tools: [
      {
        name: "Clip Studio Paint",
        icon: "/src/lib/images/ico/csp/favicon-32x32.png"
      }
    ],
    tags: [
      "logo",
      "design",
      "digital art"
    ]
  },
  {
    title: "Sylvania Crest",
    purpose: "Personal",
    link: "https://i.imgur.com/wiCTMah.png",
    description: "Crest of Vampire Clan named Sylvania",
    tools: [
      {
        name: "Clip Studio Paint",
        icon: "/src/lib/images/ico/csp/favicon-32x32.png"
      }
    ],
    tags: [
      "logo",
      "design",
      "digital art",
      "concept art"
    ]
  },
  {
    title: "Aurluna Illustration",
    purpose: "Personal",
    link: "https://i.imgur.com/f2k6xP3.png",
    description: "Aurluna with sylvania logo as bakground",
    tools: [
      {
        name: "Clip Studio Paint",
        icon: "/src/lib/images/ico/csp/favicon-32x32.png"
      }
    ],
    tags: [
      "character",
      "digital art",
      "original Character",
      "Illustration"
    ]
  },
  {
    title: "Aurluna Onsen",
    purpose: "Personal",
    link: "https://i.imgur.com/7IsNof4.png",
    description: "Aurluna in Onsen",
    tools: [
      {
        name: "Clip Studio Paint",
        icon: "/src/lib/images/ico/csp/favicon-32x32.png"
      }
    ],
    tags: [
      "character",
      "digital art",
      "original Character",
      "Illustration",
      "mature"
    ]
  },
  {
    title: "Rajaki Onsen",
    purpose: "Personal",
    link: "https://i.imgur.com/4FqrXrH.png",
    description: "Rajaki in Onsen",
    tools: [
      {
        name: "Clip Studio Paint",
        icon: "/src/lib/images/ico/csp/favicon-32x32.png"
      }
    ],
    tags: [
      "character",
      "digital art",
      "Original Character",
      "Illustration",
      "mature"
    ]
  }
];
const artsJson = {
  images
};
const portofolio_types = [
  {
    title: "Art",
    image: "https://i.imgur.com/szQmpON.png",
    icon: "🖌",
    type: "1"
  },
  {
    title: "Programming",
    image: "https://i.imgur.com/qkmv8hh.jpeg",
    icon: "</>",
    type: "2"
  }
];
const typeJson = {
  portofolio_types
};
function _page($$payload, $$props) {
  push(false);
  let filteredImages;
  let portofolioMode;
  let projectType = "all";
  portofolioMode = 1;
  let arts = artsJson;
  let tags = tagsJson;
  let types = typeJson;
  let searchResult = "";
  let activatedArtTags = [];
  let activatedProgrammingTags = [];
  let sortedData = Object.fromEntries(Object.entries(tags).map(([key, value]) => [
    key,
    value.sort((a, b) => a.title.localeCompare(b.title))
  ]));
  filteredImages = arts.images.filter(({ title, description, tags: tags2, purpose }) => {
    const includesSearchResult = title.toLowerCase().includes(searchResult.toLowerCase()) || description && description.toLowerCase().includes(searchResult.toLowerCase());
    const includesActivatedTags = activatedArtTags.length === 0 || activatedArtTags.every((tag) => tags2.map((t) => t.toLowerCase()).includes(tag.toLowerCase()));
    const includesProjectType = projectType === "all";
    const isMatureContent = tags2.map((t) => t.toLowerCase()).includes("mature");
    return includesSearchResult && includesActivatedTags && includesProjectType && !isMatureContent;
  }).slice().reverse();
  const anchor = create_anchor($$payload);
  const anchor_2 = create_anchor($$payload);
  const each_array = ensure_array_like(types.portofolio_types);
  const anchor_4 = create_anchor($$payload);
  const anchor_10 = create_anchor($$payload);
  head($$payload, ($$payload2) => {
    $$payload2.title = "<title>";
    $$payload2.title += `Portofolio</title>`;
    $$payload2.out += `<meta name="description" content="All Project I've worked on" class="svelte-1ll2nzh">`;
  });
  $$payload.out += `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha384-DLcjxQ8iJkqlNKn3P9gZPxCVIn+EGkLfd5k7ahFpsENuq+nbrk62Zekn5L/sW7t6" crossorigin="anonymous" class="svelte-1ll2nzh"> <div id="modalContainer"${attr("class", `${stringify("hidden")} svelte-1ll2nzh`, false)}><div class="close-container svelte-1ll2nzh"><span class="close-icon svelte-1ll2nzh">✕</span> <span class="close-circle svelte-1ll2nzh"></span></div> ${anchor}`;
  {
    $$payload.out += "<!--ssr:if:false-->";
  }
  $$payload.out += `${anchor} <div class="prev svelte-1ll2nzh">&lt;</div> <div class="next svelte-1ll2nzh">></div></div> <div class="portofolio-body svelte-1ll2nzh"><div class="portofolio-filter svelte-1ll2nzh">${anchor_2}`;
  for (let $$index = 0; $$index < each_array.length; $$index++) {
    const $$item = each_array[$$index];
    const { title, image, icon, type } = $$item;
    const anchor_3 = create_anchor($$payload);
    $$payload.out += `${anchor_3}<button class="one svelte-1ll2nzh"${attr("data-text", type, false)}${attr("style", `background-image: linear-gradient(to bottom, #232324, rgba(122, 118, 126, 0.51)), url(${stringify(image)}); background-size: cover; background-position: center; color: white; padding: 20px; border: none; border-radius: 8px; cursor: pointer; font-size: 18px; font-weight: bold; position: relative;`, false)}><b class="svelte-1ll2nzh">${escape(title)}</b> Portofolio <style class="svelte-1ll2nzh">.one::before, .one::after { content: {icon}; position: absolute; font-size: 24px; top: 50%; transform: translateY(-20%); } .one::before { left: 10px; } .one::after { right: 10px; }</style></button>${anchor_3}`;
  }
  $$payload.out += `${anchor_2}</div> <div class="portofolio-content svelte-1ll2nzh"><form class="search-bar svelte-1ll2nzh"><input type="text" placeholder="Search anything" name="q"${attr("value", searchResult, false)} class="svelte-1ll2nzh"></form> <div class="svelte-1ll2nzh"><div class="project-type svelte-1ll2nzh"><label class="svelte-1ll2nzh"><input type="radio" name="projectType" value="all"${attr("checked", projectType === "all", true)} class="svelte-1ll2nzh"> All</label> <label class="svelte-1ll2nzh"><input type="radio" name="projectType" value="personal"${attr("checked", projectType === "personal", true)} class="svelte-1ll2nzh"> Personal</label> <label class="svelte-1ll2nzh"><input type="radio" name="projectType" value="academic"${attr("checked", projectType === "academic", true)} class="svelte-1ll2nzh"> Academic</label> <label class="svelte-1ll2nzh"><input type="radio" name="projectType" value="professional"${attr("checked", projectType === "professional", true)} class="svelte-1ll2nzh"> Professional</label></div></div> <div class="tags-container svelte-1ll2nzh">${anchor_4}`;
  if (portofolioMode == 1) {
    $$payload.out += "<!--ssr:if:true-->";
    const anchor_5 = create_anchor($$payload);
    const each_array_1 = ensure_array_like(sortedData.Art);
    $$payload.out += `<ul class="tags svelte-1ll2nzh"><li class="tag svelte-1ll2nzh" value="">All</li> ${anchor_5}`;
    for (let $$index_1 = 0; $$index_1 < each_array_1.length; $$index_1++) {
      const $$item = each_array_1[$$index_1];
      const { title } = $$item;
      const anchor_6 = create_anchor($$payload);
      $$payload.out += `${anchor_6}<li${attr(
        "class",
        `${stringify([
          "tag",
          activatedArtTags.includes(title) && "active-tag"
        ].filter(Boolean).join(" "))} svelte-1ll2nzh`,
        false
      )}${attr("value", title, false)}>${escape(title)}</li>${anchor_6}`;
    }
    $$payload.out += `${anchor_5}</ul>`;
  } else {
    $$payload.out += "<!--ssr:if:false-->";
    const anchor_7 = create_anchor($$payload);
    $$payload.out += `${anchor_7}`;
    if (portofolioMode == 2) {
      $$payload.out += "<!--ssr:if:true-->";
      const anchor_8 = create_anchor($$payload);
      const each_array_2 = ensure_array_like(sortedData.Programming);
      $$payload.out += `<ul class="tags svelte-1ll2nzh"><li class="tag svelte-1ll2nzh" value="">All</li> ${anchor_8}`;
      for (let $$index_2 = 0; $$index_2 < each_array_2.length; $$index_2++) {
        const $$item = each_array_2[$$index_2];
        const { title } = $$item;
        const anchor_9 = create_anchor($$payload);
        $$payload.out += `${anchor_9}<li${attr(
          "class",
          `${stringify([
            "tag",
            activatedProgrammingTags.includes(title) && "active-tag"
          ].filter(Boolean).join(" "))} svelte-1ll2nzh`,
          false
        )}${attr("value", title, false)}>${escape(title)}</li>${anchor_9}`;
      }
      $$payload.out += `${anchor_8}</ul>`;
    } else {
      $$payload.out += "<!--ssr:if:false-->";
    }
    $$payload.out += `${anchor_7}`;
  }
  $$payload.out += `${anchor_4}</div> <label${attr("class", `${stringify(portofolioMode == 2 ? "hide" : "")} svelte-1ll2nzh`, false)} for="toggle" style="color: white; font-size: 13px;">Show Mature Content</label> <div${attr("class", `toggle ${stringify(portofolioMode == 2 ? "hide" : "")} svelte-1ll2nzh`, false)}><input class="mature-input svelte-1ll2nzh" type="checkbox" id="btn"> <label for="btn" class="svelte-1ll2nzh"><span class="thumb svelte-1ll2nzh"><span class="shadow svelte-1ll2nzh"></span></span></label></div> <div class="image-gallery svelte-1ll2nzh">${anchor_10}`;
  if (portofolioMode == 1) {
    $$payload.out += "<!--ssr:if:true-->";
    const anchor_11 = create_anchor($$payload);
    const each_array_3 = ensure_array_like(filteredImages);
    $$payload.out += `${anchor_11}`;
    for (let index = 0; index < each_array_3.length; index++) {
      const $$item = each_array_3[index];
      const { title, link, tools, description } = $$item;
      const anchor_12 = create_anchor($$payload);
      const anchor_13 = create_anchor($$payload);
      $$payload.out += `${anchor_12}<div style="cursor: pointer;" class="svelte-1ll2nzh">${anchor_13}`;
      ImageCard($$payload, { title, description, link, tools });
      $$payload.out += `${anchor_13}</div>${anchor_12}`;
    }
    $$payload.out += `${anchor_11}`;
  } else {
    $$payload.out += "<!--ssr:if:false-->";
    const anchor_14 = create_anchor($$payload);
    $$payload.out += `${anchor_14}`;
    if (portofolioMode == 2) {
      $$payload.out += "<!--ssr:if:true-->";
      const anchor_15 = create_anchor($$payload);
      $$payload.out += `${anchor_15}`;
      ProgramCard($$payload, {
        searchResult,
        activatedProgrammingTags,
        projectType
      });
      $$payload.out += `${anchor_15}`;
    } else {
      $$payload.out += "<!--ssr:if:false-->";
    }
    $$payload.out += `${anchor_14}`;
  }
  $$payload.out += `${anchor_10}</div></div></div>`;
  pop();
}
export {
  _page as default
};
