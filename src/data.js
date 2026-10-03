export const profile = {
  name: 'Ishika Dumeer',
  role: 'Full-stack developer',
  headline: ['WHERE IDEAS', 'MEET EXECUTION'],
  tagline: 'Building seamless digital experiences',
  intro:
    "Hi, I'm Ishika. I turn small ideas into things people actually use, with React, Node.js and MongoDB.",
  about:
    "It usually starts with one question: who is this for? That's how a report that hides inside an ordinary photo, a leaf-photo doctor for farmers, and a clinic website that helps worried parents book a visit all came to life. I'm a full-stack developer with React on the front, Node.js and MongoDB behind it, and a stubborn belief that clean code should end up doing something kind. Between hackathon all-nighters and quiet debugging hours, I'm happiest being the person who ships the thing.",
  email: 'ishikadumeer@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ishika-dumeer/',
  github: 'https://github.com/Ishika1106',
}

export const stack = [
  'React', 'Node.js', 'MongoDB', 'Express', 'JavaScript', 'Tailwind', 'REST APIs', 'Git', 'AI / LLMs',
]

export const projects = [
  {
    id: 'awaaj',
    title: 'Awaaj',
    year: '2026',
    tag: 'Social good',
    blurb:
      "For someone who can't speak out loud. A report is written, then tucked invisibly inside an ordinary picture, so a survivor's story hides in plain sight. AI helps shape it, and a map points to the nearest NGO, police station or shelter.",
    stack: ['Next.js', 'FastAPI', 'MongoDB', 'Groq LLM', 'Steganography'],
    image: '/assets/awaaj.jpg',
    accent: '#ff7a3d',
    live: null,
    code: 'https://github.com/Ishika1106/Awaaj',
  },
  {
    id: 'blessings',
    title: 'Blessings Clinic',
    year: '2026',
    tag: 'Healthcare',
    blurb:
      "A calm, friendly home on the web for a pediatric clinic in Janakpuri, Delhi. Parents find services and vaccination info, check growth-checkup details, and book a visit online.",
    stack: ['React', 'Firebase', 'SEO'],
    image: '/assets/blessings.jpg',
    accent: '#7cc2f6',
    live: 'https://blessings-clinic.web.app/',
    code: null,
  },
  {
    id: 'krishva',
    title: 'Krishva',
    year: '2026',
    tag: 'AI for farmers',
    blurb:
      "A farmer photographs a sick leaf. Krishva names the disease, suggests a remedy and says it out loud in Hindi or English. Behind it sits a MobileNetV2 model trained on 20,000+ images across 15 diseases.",
    stack: ['React', 'FastAPI', 'TensorFlow', 'MobileNetV2'],
    image: '/assets/krishva.jpg',
    accent: '#a8e063',
    live: null,
    code: 'https://github.com/Ishika1106/Krishva',
  },
  {
    id: 'cedar-sage',
    title: 'Cedar & Sage',
    year: '2026',
    tag: 'Restaurant site',
    blurb:
      "A restaurant website that feels like walking in: a seasonal menu, table reservations, cooking classes and a blog, all in warm gold and serif type. Seven pages, built with React and Vite.",
    stack: ['React', 'Vite', 'React Router', 'CSS3'],
    image: '/assets/cedar-sage.jpg',
    accent: '#c9a96a',
    live: 'https://cedar-sage.vercel.app',
    code: 'https://github.com/Ishika1106/Cedar-Sage',
  },
]

export const services = [
  { icon: '</>', title: 'Full-Stack Web Apps', text: 'From the first database field to the last pixel.' },
  { icon: '{ }', title: 'Backend & APIs', text: 'Quiet, reliable Node.js services that just work.' },
  { icon: '✦', title: 'Interactive Experiences', text: 'Motion and small details that make a page feel alive.' },
  { icon: '⑂', title: 'Open Source & Collaboration', text: 'Readable code, thoughtful PRs, happy teammates.' },
  { icon: '◉', title: 'AI-Powered Products', text: 'Putting LLMs to work on problems that matter.' },
]

export const experience = [
  {
    title: 'IIM Bangalore Young Leadership Summit',
    org: 'Venix 2026',
    text: 'One of 30,774 people who applied, and one of those selected for Venix 2026.',
    stat: '30,774',
    statLabel: 'registrations',
    tags: [],
  },
  {
    title: 'IIT Delhi Campus Ambassador',
    org: 'eDC',
    text: 'Ranked in the top 1% of eDC ambassadors and earned a Letter of Recommendation along the way.',
    stat: 'Top 1%',
    statLabel: 'eDC performer',
    tags: [],
  },
  {
    title: 'Finalist, Avinya 2026 Eco-Innovate Challenge',
    org: 'Prakriti Club, IIT Guwahati',
    text: 'Out of 2000+ registrations, Team URJA reached the final round of the Eco-Innovate Challenge. URJA, "Where Every Watt Finds a Campus", is a peer-to-peer microgrid dashboard that helps campuses share renewable energy.',
    stat: 'Finalist',
    statLabel: '2000+ registrations',
    tags: ['Team URJA', 'Microgrid dashboard', 'IIT Guwahati'],
  },
  {
    title: 'Hardware Hackathon and Dakshinasya Darshini Exhibition',
    org: 'Team 0x04_ARC',
    text: 'Thirty-six hours and one idea. We placed in the top 30 of ~120 teams, then became one of 10 invited to exhibit at "Consciousness Through Science", where we demoed our Gesture Controlled Battlefield System to curious visitors.',
    stat: 'Top 10',
    statLabel: 'of ~120 teams',
    tags: ['Gesture control', 'Hardware', 'Live demos'],
  },
]

export const faqs = [
  { q: 'What kind of projects do you take on?', a: 'Full-stack web apps, APIs, interactive front ends and AI-powered products, especially the ones that help real people.' },
  { q: 'Do you take part in tech fests and hackathons?', a: 'Always. Nothing teaches faster than a deadline and a good team. The Avinya final at IIT Guwahati and a 36-hour hardware hackathon are recent favourites.' },
  { q: 'How do you approach coding?', a: 'Clean architecture, readable code, small PRs, and tests where they matter. Future me should be able to understand it.' },
  { q: 'Where can I see more of your work?', a: 'Scroll up for the projects, or visit my GitHub (Ishika1106) and LinkedIn.' },
  { q: 'Are you open to internships?', a: "Yes, I'd love to talk about internships and collaborations. Drop me a line." },
]
