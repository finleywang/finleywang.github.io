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
            },},{id: "news-one-editoral-about-ai-impact-on-world-is-published-on-the-innovation-congrats-to-all-sparkles",
          title: 'One editoral about AI impact on world is published on The Innovation, congrats...',
          description: "",
          section: "News",},{id: "news-two-papers-are-accepted-by-aaai-congrats-to-all-sparkles",
          title: 'Two papers are accepted by AAAI, congrats to all!:sparkles:',
          description: "",
          section: "News",},{id: "news-one-commentary-about-spatial-temporal-large-models-for-science-is-accepted-by-the-innovation-congrats-to-zezhi-sparkles",
          title: 'One commentary about Spatial-Temporal Large Models for Science is accepted by The Innovation,...',
          description: "",
          section: "News",},{id: "news-one-commentary-about-ai-in-autonomous-vehicles-is-accepted-by-the-innovation-congrats-to-all-sparkles",
          title: 'One commentary about AI in autonomous vehicles is accepted by The Innovation, congrats...',
          description: "",
          section: "News",},{id: "news-one-amazing-review-about-metacity-is-accepted-by-the-innovation-congrats-to-all-sparkles",
          title: 'One amazing review about MetaCity is accepted by The Innovation, congrats to all!:sparkles:...',
          description: "",
          section: "News",},{id: "news-dr-fei-wang-is-selected-as-youth-editor-of-the-innovation-sparkles",
          title: 'Dr. Fei Wang is selected as Youth Editor of The Innovation!:sparkles:',
          description: "",
          section: "News",},{id: "news-one-paper-is-accepted-by-tkde-congrats-to-all-sparkles",
          title: 'One paper is accepted by TKDE，congrats to all!:sparkles:',
          description: "",
          section: "News",},{id: "news-one-paper-is-accepted-by-icml-congrats-to-all-sparkles",
          title: 'One paper is accepted by ICML，congrats to all!:sparkles:',
          description: "",
          section: "News",},{id: "news-one-amazing-review-about-decision-intelligence-is-accepted-by-the-innovation-congrats-to-all-sparkles",
          title: 'One amazing review about Decision Intelligence is accepted by The Innovation, congrats to...',
          description: "",
          section: "News",},{id: "news-review-of-foundation-model-and-decision-intelligence-is-selected-as-cover-paper",
          title: 'Review of Foundation Model and Decision Intelligence is selected as Cover Paper!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_0512/";
            },},{id: "news-two-papers-blast-and-merlin-are-accepted-by-kdd-congrats-to-zezhi-and-chengqing-sparkles",
          title: 'Two papers, BLAST and Merlin, are accepted by KDD, congrats to Zezhi and...',
          description: "",
          section: "News",},{id: "news-we-have-established-ieee-cis-task-force-on-ai-for-time-series-and-spatio-temporal-data",
          title: 'We have established IEEE CIS Task Force on AI for Time Series and...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_0620/";
            },},{id: "news-one-tutorial-about-mts-heterogeneity-has-been-accepted-by-sstd-2025",
          title: 'One Tutorial about MTS heterogeneity has been Accepted by SSTD 2025！',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_0709/";
            },},{id: "news-one-tkde-paper-about-mts-heterogeneity-has-entered-esi-high-cited-papers",
          title: 'One TKDE paper about MTS heterogeneity has entered ESI high cited papers！',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_0715/";
            },},{id: "news-dr-fei-wang-gives-a-talk-about-st-data-compact-learning-at-ndbc-2025",
          title: 'Dr. Fei Wang gives a talk about ST Data Compact Learning at NDBC...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_0802/";
            },},{id: "news-three-papers-have-been-accepted-by-neurips-2025-congrats-to-yisong-tangwen-and-all-coauthors",
          title: 'Three Papers have been accepted by NeurIPS 2025, congrats to Yisong, Tangwen and...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_0919/";
            },},{id: "news-our-basicts-has-now-been-upgraded-to-v1-0",
          title: 'Our BasicTS has now been upgraded to v1.0!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_1030/";
            },},{id: "news-our-paper-have-been-accepted-by-aaai-26-congrats-to-yujie-li-and-all-coauthors",
          title: 'Our Paper have been accepted by AAAI 26, congrats to Yujie Li and...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_1108/";
            },},{id: "news-one-workshop-webst-has-been-accepted-by-www-2026-welcome-to-submit-papers",
          title: 'One workshop WebST has been Accepted by WWW-2026, welcome to submit papers.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_1109/";
            },},{id: "news-one-tkde-paper-about-mts-heterogeneity-has-entered-esi-hot-papers",
          title: 'One TKDE paper about MTS heterogeneity has entered ESI hot papers！',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_1115/";
            },},{id: "news-one-vldb-paper-about-decoupled-spatial-temporal-framework-and-its-instantiation-has-entered-esi-high-cited-papers",
          title: 'One VLDB paper about Decoupled Spatial-Temporal Framework and its instantiation has entered ESI...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_20260114/";
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
