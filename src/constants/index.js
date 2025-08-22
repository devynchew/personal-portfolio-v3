import {
  sit,
  singaporepoly,
  efusion,
  instagram,
  linkedin,
  githubsocial,
  instagram_dark,
  linkedin_dark,
  github_dark,
  musings,
  telegrambot,
  inventory_demand_homepage
} from "../assets";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "experience",
    title: "Experience",
  }
];

const social = [
  {
    id: "github",
    title: "github",
    icon: githubsocial,
    link: "https://www.github.com/devynchew"
  },
  {
    id: "linkedin",
    title: "linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/devyn-chew-798653126/"
  },
  {
    id: "instagram",
    title: "instagram",
    icon: instagram,
    link: "https://www.instagram.com/devyn_chew/",
  },
];

const social_dark = [
  {
    id: "github",
    title: "github",
    icon: github_dark,
    link: "https://www.github.com/devynchew"
  },
  {
    id: "linkedin",
    title: "linkedin",
    icon: linkedin_dark,
    link: "https://www.linkedin.com/in/devyn-chew-798653126/"
  },
  {
    id: "instagram",
    title: "instagram",
    icon: instagram_dark,
    link: "https://www.instagram.com/devyn_chew/",
  },
];


const experiences = [
  {
    title: "Bachelor in ICT majoring in Software Engineering ",
    company_name: "Singapore Institute of Technology",
    icon: sit,
    iconBg: "#FFF",
    date: "Aug 2023 - Present",
    points: [
      "Learnt how to work in teams to tackle challenging real-world projects utilising AGILE, git and sprint stand-up meetings.",
      "Picked up best practices for web projects such as W3C, WCAG for accessibility and responsive design.",
      "Honed interpersonal and web skills by freelancing web projects for clients on the side.",
    ],
  },
  {
    title: "Diploma in Applied AI & Analytics",
    company_name: "Singapore Polytechnic",
    icon: singaporepoly,
    iconBg: "#FFF",
    date: "Mar 2020 - Mar 2023",
    points: [
      "Picked up HTML, CSS and Javascript and learnt how to use React in one of my games store website.",
      "Learnt Python, data visualisation and how to apply machine learning and deep learning to solve problems.",
      "Created a full stack inventory demand forecast web app using Angular, D3.js and .NET.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "eFusion Technology Pte Ltd",
    icon: efusion,
    iconBg: "#FFF",
    date: "Mar 2023 - Aug 2023",
    points: [
      "Gained key insights into best practices for eCommerce websites such as SEO, hosting, CDN and CMS.",
      "Hands-on practice on Prestashop and Wordpress.",
      "Honed CSS skills by implementing responsive design and unique figma layouts.",
    ],
  },
];


const projects = [
  {
    name: "The Musings of Human",
    description:
      "A website to showcase the brand identity and services of Musings, using NextJS and Sanity to serve as a headless CMS.",
    tags: ["NextJS", "TailwindCSS", "Sanity", "Typescript"],
    image: musings,
    github_code: "no",
    livedemo: "https://www.themusingsofhuman.com/",
  },
  {
    name: "Inventory Demand Forecast Web App",
    description:
      "A full stack web app to display the inventory demand of a business for the next 6 months. Users can search through the inventory list to display forecast details for a specific product.",
    tags: ["Angular", "D3.js", ".NET", "EF Core", "SQL Server", "Typescript"],
    image: inventory_demand_homepage,
    github_code: "https://github.com/devynchew/inventory-demand-forecast-web-app",
    livedemo: "no"
  },
  {
    name: "Telegram Customer Support Bot",
    description:
      "Built with Python and Flask, this webhook bot acts as a middleman between a customer support group and customers, allowing the customer support to reply anonymously to incoming enquiries.",
    tags: ["Python", "Flask", "Google Cloud Functions"],
    image: telegrambot,
    github_code: "https://github.com/devynchew/telegram-bot-customer-support",
    livedemo: "no",
  },
];

export { navLinks, social, social_dark, projects, experiences };