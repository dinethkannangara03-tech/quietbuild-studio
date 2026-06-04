// Edit this file to update the website content.
// Image paths start from the public folder, so "/images/example.png"
// points to "public/images/example.png".

export const siteData = {
  studio: {
    name: 'QuietBuild Studio',
    logoPath: 'public/images/quietbuild.png',
    email: 'dinethkannangara03@gmail.com',
    whatsappLink: 'https://wa.me/94719952251',
    githubLink: 'https://github.com/',
    socialLinks: [
      { label: 'Tiktok', url: 'https://www.tiktok.com/@quietbuild.studio' },
      { label: 'Instagram', url: 'https://www.instagram.com/quietbuild.studio?igsh=MW4zdGZkZ3VjeTdleA%3D%3D&utm_source=qr' },
      { label: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61590065537490' },
    ],
  },

  navigation: [
    { path: '/', label: 'Home' },
    { path: '/work', label: 'Work' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ],

  hero: {
    headline: 'Websites that make small businesses',
    highlightedHeadline: 'look bigger.',
    description: 'QuietBuild Studio creates clean, mobile-friendly websites and simple web systems for coaches, agencies, gyms, tutors, and service businesses.',
    heroImage: '/public/images/hero-forgefit.png',
    proofItems: ['Clean design', 'Mobile friendly', 'Useful systems','budgest friendly'],
    featureCards: [
      { icon: 'device', title: 'Mobile Friendly', description: 'Built for every screen' },
      { icon: 'bolt', title: 'Fast Loading', description: 'Performance focused' },
      { icon: 'shield', title: 'Simple Client Portals', description: 'Everything in one place' },
    ],
  },

  trustItems: [
    { icon: 'device', title: 'Responsive Design', description: 'Clear on every screen.' },
    { icon: 'bolt', title: 'Fast & Optimized', description: 'Built to feel effortless.' },
    { icon: 'shield', title: 'Clean & Reliable', description: 'Simple, stable, and useful.' },
  ],

  projects: [
    {
      slug: 'nova',
      title: 'Nova Social Client Portal',
      type: 'Concept Project',
      description: 'A calm, organized portal concept for managing client content and approvals. this got real login systems with google and emails. this is only a sample site this no real details',
      imagePath: '/public/images/nova-social.png',
      liveLink: 'https://nova-social-client-portal.vercel.app',
    },
    {
      slug: 'forgefit',
      title: 'ForgeFit Coaching Website',
      type: 'Concept Project',
      description: 'A focused fitness coaching website designed to turn interest into action.this is also just sample it does not connect to anything real',
      imagePath: '/public/images/forgefit.png',
      liveLink: 'https://dinethkannangara-aus.github.io/fitness-coach-website-demo/',
    },
    {
      slug: 'quietbuild',
      title: 'QuietBuild Studio Portfolio',
      type: 'Client Work',
      description: 'A premium studio portfolio built around clarity, confidence, and conversion.',
      imagePath: '/public/images/quietbuild.png',
      liveLink: 'https://dinethkannangara-aus.github.io/quietbuild-studio-official/',
    },
    {
      slug: 'exam',
      title: 'Exam Progress Tracker',
      type: 'Concept Project',
      description: 'A simple dashboard concept that makes study progress easy to understand.',
      imagePath: '/public/images/exam-tracker.png',
      liveLink: 'https://dinethkannangara-aus.github.io/exam-progress-tracker01/',
    },
  ],

  services: [
    { icon: 'window', title: 'Business Websites', description: 'Clear, professional websites that explain what you do and make it easy to take the next step.', suitable: 'Coaches, gyms, tutors, agencies, and service businesses' },
    { icon: 'layout', title: 'Portfolio Websites', description: 'Focused portfolios that present your work, thinking, and value with confidence.', suitable: 'Freelancers, creatives, and small studios' },
    { icon: 'device', title: 'Landing Pages', description: 'Single-purpose pages shaped around one offer, launch, or campaign.', suitable: 'New offers, campaigns, and lead generation' },
    { icon: 'shield', title: 'Client Portals', description: 'Simple private spaces where clients can find updates, files, and next steps.', suitable: 'Service businesses with repeatable client workflows' },
    { icon: 'shield', title: 'Login Systems', description: 'Straightforward login experiences for small protected tools and portals.', suitable: 'Simple member areas and internal tools' },
    { icon: 'layout', title: 'Full system', description: 'Useful interfaces that turn a  set of data into clear actions. You can custormize this.', suitable: 'Trackers, progress views, and focused admin tools' },
  ],

  process: {
    eyebrow: 'How it works',
    heading: 'Simple process. Strong results.',
    steps: [
      { number: '01', title: 'Tell me what you need', description: 'You share your ideas, goals, and requirements.' },
      { number: '02', title: 'I build a clean preview', description: 'I create a modern, responsive preview for your feedback.' },
      { number: '03', title: 'You review and change what need change', description: 'You review, and tell things that need to change, and I help you launch with confidence.' },
      { number: '04', title: 'You approve and launch', description: 'You review and approve it, then we lauch the website with cutormized domaines if you need'},
    ],
  },

  callToAction: {
    eyebrow: 'Ready when you are',
    heading: 'Need a website that looks professional?',
    description: "Let's build something clean, modern, and useful.",
  },

  pages: {
    work: {
      eyebrow: 'Our sample works',
      heading: 'Digital experiences built with purpose.',
      description: 'A collection of website and web-system concepts focused on clear design, mobile usability, and practical business goals.',
    },
    services: {
      heading: 'Practical digital work, built around your goal.',
      description: 'Focused websites and simple systems for businesses that need to look professional and work smoothly.',
    },
    about: {
      eyebrow: 'About who we are and what we do',
      heading: 'Quiet work. Clear thinking. Useful outcomes.',
      description: 'QuietBuild Studio helps small businesses present themselves with more confidence through clean websites and focused web systems.',
      missionEyebrow: 'The mission',
      missionHeading: 'Make professional digital work feel straightforward.',
      paragraphs: [
        'A good website should explain your business clearly, work well on a phone, and help visitors know what to do next. The goal is not to fill every inch of the screen. It is to build the right thing, with care.',
        'QuietBuild focuses on honest communication, thoughtful design, and practical systems. No inflated promises. No unnecessary complexity. Just a clear path from idea to launch.',
      ],
      values: [
        { icon: 'device', title: 'Mobile experience', description: 'Layouts are shaped for small screens from the start.' },
        { icon: 'bolt', title: 'Speed & clarity', description: 'Pages stay focused, lightweight, and easy to understand.' },
        { icon: 'shield', title: 'Useful systems', description: 'Features earn their place by solving a real problem.' },
        { icon: 'number', title: 'Simple process', description: 'Share the goal, review a clean preview, then launch confidently.' },
      ],
    },
    contact: {
      heading: 'Tell me what you want to build.',
      description: "Share your goal, timeline, and the kind of support you need. I'll help turn it into a clear next step.",
      detailsEyebrow: 'Contact details',
      detailsHeading: "Let's make your business look the part.",
      detailsDescription: 'Use the details below as placeholders until your real contact links are ready.',
      formNotice: 'This form will become functional when a backend is connected.',
    },
  },

  footer: {
    description: 'Clean websites and simple web systems built to help small businesses look professional.',
    copyright: 'QuietBuild Studio.',
    closingText: 'Built with clarity and care.',
  },
}

export default siteData
