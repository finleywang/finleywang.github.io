// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "GitHub profile and repositories of GestaltCog Lab",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-people",
          title: "People",
          description: "members of the lab or group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-innovation-one-amazing-review-about-metacity-is-accepted-by-the-innovation-congrats-to-all-sparkles",
          title: '[Innovation] One amazing review about MetaCity is accepted by The Innovation, congrats to...',
          description: "",
          section: "News",},{id: "news-news-dr-fei-wang-is-selected-as-youth-editor-of-the-innovation-sparkles",
          title: '[News] Dr. Fei Wang is selected as Youth Editor of The Innovation!:sparkles:',
          description: "",
          section: "News",},{id: "news-tkde-one-paper-is-accepted-by-tkde-congrats-to-all-sparkles",
          title: '[TKDE] One paper is accepted by TKDE，congrats to all!:sparkles:',
          description: "",
          section: "News",},{id: "news-icml-one-paper-is-accepted-by-icml-congrats-to-all-sparkles",
          title: '[ICML] One paper is accepted by ICML，congrats to all!:sparkles:',
          description: "",
          section: "News",},{id: "news-innovation-one-amazing-review-about-decision-intelligence-is-accepted-by-the-innovation-congrats-to-all-sparkles",
          title: '[Innovation] One amazing review about Decision Intelligence is accepted by The Innovation, congrats...',
          description: "",
          section: "News",},{id: "news-",
          title: '',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_0512/";
            },},{id: "news-kdd-two-papers-blast-and-merlin-are-accepted-by-kdd-congrats-to-zezhi-and-chengqing-sparkles",
          title: '[KDD] Two papers, BLAST and Merlin, are accepted by KDD, congrats to Zezhi...',
          description: "",
          section: "News",},{id: "news-",
          title: '',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_0620/";
            },},{id: "news-",
          title: '',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_0709/";
            },},{id: "news-",
          title: '',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_0715/";
            },},{id: "news-",
          title: '',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_0802/";
            },},{id: "news-",
          title: '',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_0919/";
            },},{id: "news-",
          title: '',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_1030/";
            },},{id: "news-",
          title: '',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_1108/";
            },},{id: "news-",
          title: '',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_1109/";
            },},{id: "news-",
          title: '',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_1115/";
            },},{id: "news-innovation-one-editoral-about-ai-impact-on-world-is-published-on-the-innovation-congrats-to-all-sparkles",
          title: '[Innovation] One editoral about AI impact on world is published on The Innovation,...',
          description: "",
          section: "News",},{id: "news-aaai-two-papers-are-accepted-by-aaai-congrats-to-all-sparkles",
          title: '[AAAI] Two papers are accepted by AAAI, congrats to all!:sparkles:',
          description: "",
          section: "News",},{id: "news-innovation-one-commentary-about-spatial-temporal-large-models-for-science-is-accepted-by-the-innovation-congrats-to-zezhi-sparkles",
          title: '[Innovation] One commentary about Spatial-Temporal Large Models for Science is accepted by The...',
          description: "",
          section: "News",},{id: "news-innovation-one-commentary-about-ai-in-autonomous-vehicles-is-accepted-by-the-innovation-congrats-to-all-sparkles",
          title: '[Innovation] One commentary about AI in autonomous vehicles is accepted by The Innovation,...',
          description: "",
          section: "News",},{id: "news-",
          title: '',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_20260113/";
            },},{id: "news-",
          title: '',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_20260114/";
            },},{id: "news-",
          title: '',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_20260414/";
            },},{id: "news-icml-our-three-papers-zeus-pulse-and-dropoutts-have-been-accepted-to-icml-2026-congrats-to-all",
          title: '/[ICML] Our three papers, Zeus, PULSE, and DropoutTS, have been accepted to ICML...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_20260501/";
            },},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=MuEc_JEAAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/finleywang", "_blank");
        },
      },{
        id: 'social-dblp',
        title: 'DBLP',
        section: 'Socials',
        handler: () => {
          window.open("https://dblp.org/pid/52/3194-14", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-3282-0535", "_blank");
        },
      },{
        id: 'social-semanticscholar',
        title: 'Semantic Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://www.semanticscholar.org/author/2148955026", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%77%61%6E%67%66%65%69@%69%63%74.%61%63.%63%6E", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
