/**
 * ============================================================================
 *  SINGLE SOURCE OF TRUTH FOR ALL PERSONAL / PROFILE CONTENT
 * ============================================================================
 *
 *  Everything a non-developer needs to edit lives in this one file.
 *
 *  PLACEHOLDER CONVENTION
 *  ----------------------
 *  Any value wrapped in angle brackets like "<ADD_...>" is an intentional
 *  placeholder that MUST be filled in by the owner. The UI degrades
 *  gracefully (it never renders a broken or fabricated link) while a field
 *  is empty. Search this file for "ADD_" to find everything left to do.
 *
 *  Nothing in this file is invented. Project technologies and repository
 *  links were verified directly against the local repositories.
 * ============================================================================
 */

export const profile = {
  fullName: 'Harshvardhan Umesh Kamble',
  displayName: 'Harshvardhan Kamble',
  monogram: 'HK',
  role: 'Third-Year Computer Science Engineering Student',
  location: 'Solapur, Maharashtra, India',
  college: 'N. K. Orchid College of Engineering & Technology, Solapur',
  expectedGraduation: '2028',
  availability: 'Open to Internship Opportunities',

  /**
   * CONTACT — add the real values before publishing.
   * While `email` is empty the Contact section renders a clearly marked
   * "not configured" notice instead of a broken mailto link.
   */
  email: '', // <ADD_EMAIL> e.g. 'harshvardhan.kamble@example.com'

  /**
   * RESUME — drop your PDF into `public/resume/` and set the path here.
   * Example: 'resume/Harshvardhan-Kamble-Resume.pdf'
   * While empty, the "Download Resume" button shows a clear notice instead
   * of linking to a missing file.
   */
  resumeUrl: '', // <ADD_RESUME_PATH>

  socials: {
    github: 'https://github.com/harshukamble2607-commits',
    linkedin: 'https://www.linkedin.com/in/harshvardhan-kamble-36820132a/',
  },
}

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export const hero = {
  eyebrow: 'COMPUTER SCIENCE ENGINEERING · CLASS OF 2028',
  // The phrase wrapped in **double asterisks** is highlighted in accent blue.
  headingLead: 'Building practical software.',
  headingAccent: 'Exploring intelligent systems.',
  intro:
    "I'm Harshvardhan Kamble, a Computer Science Engineering student focused on Machine Learning and Full-Stack Development. I enjoy turning ideas into practical applications and exploring how AI can make software more useful.",
  primaryCta: { label: 'Explore My Work', target: 'projects' },
  secondaryCta: { label: "Let's Connect", target: 'contact' },
}

export const about = {
  heading: 'A little about me',
  intro:
    "I'm a Computer Science Engineering student interested in building reliable software and exploring intelligent applications. My interests span frontend development, backend systems, Machine Learning, and Generative AI. Through hands-on projects, I aim to strengthen my engineering fundamentals and create applications that solve practical problems.",
  blocks: [
    {
      icon: 'GraduationCap',
      label: 'Education',
      lines: [
        'Computer Science Engineering',
        'N. K. Orchid College of Engineering & Technology, Solapur',
      ],
    },
    {
      icon: 'Code2',
      label: 'Technical Focus',
      lines: ['Machine Learning · Full-Stack Development · Generative AI'],
    },
    {
      icon: 'Target',
      label: 'Current Goal',
      lines: ['Building practical projects and pursuing industry internship opportunities.'],
    },
  ],
}

/**
 * SKILLS — these are current skills and active learning areas.
 * No proficiency ratings or years-of-experience are shown by design.
 */
export const skills = {
  heading: 'Technical Skills',
  note: 'Current skills and areas I am actively learning.',
  categories: [
    {
      icon: 'Braces',
      title: 'Programming',
      items: ['Java', 'Python', 'JavaScript'],
    },
    {
      icon: 'Layout',
      title: 'Frontend',
      items: ['HTML5', 'CSS3', 'React.js', 'Vite', 'Tailwind CSS'],
    },
    {
      icon: 'Server',
      title: 'Backend',
      items: ['FastAPI', 'Node.js', 'Express.js', 'REST APIs'],
    },
    {
      icon: 'Database',
      title: 'Databases',
      items: ['PostgreSQL', 'MongoDB'],
    },
    {
      icon: 'Sparkles',
      title: 'Tools & AI',
      items: [
        'Git',
        'GitHub',
        'Docker',
        'Machine Learning fundamentals',
        'Generative AI',
        'LLM-based applications',
        'AI API integration',
      ],
    },
  ],
}

/**
 * PROJECTS
 * --------
 * `image` points at a file in `public/`. When `imageIsPlaceholder` is true the
 * card shows a small "Placeholder" tag so it is never mistaken for a real
 * screenshot. Replace the file (keep the filename) or update `image` to swap it.
 *
 * `repo` / `live` are only set where a link was actually verified. When a link
 * is empty the corresponding button is not rendered at all — nothing fake.
 */
export const projects = {
  heading: 'Featured Projects',
  intro:
    'A selection of practical projects spanning web development, Machine Learning, and AI-assisted applications.',
  allReposUrl: 'https://github.com/harshukamble2607-commits?tab=repositories',
  items: [
    {
      id: 'farmswift',
      index: '01',
      name: 'FarmSwift',
      tagline: 'Farm-fresh marketplace prototype',
      status: 'Prototype',
      description:
        'A web-based agriculture platform exploring digital services and connections between farmers and customers, with role-based dashboards for farmers, delivery partners, stores, and admins.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'REST API', 'JSON storage'],
      image: 'screenshots/farmswift.svg',
      imageIsPlaceholder: true,
      imageAlt: 'FarmSwift interface placeholder illustration',
      // Repository verified locally (git remote) — https://github.com/harshukamble2607-commits/farmswift-V1
      repo: 'https://github.com/harshukamble2607-commits/farmswift-V1',
      // Live demo URL provided by the project owner.
      live: 'https://harshukamble2607-commits.github.io/farmswift/',
    },
    {
      id: 'clinix',
      index: '02',
      name: 'Clinix',
      tagline: 'AI-assisted clinical documentation',
      status: 'Prototype · SIH 2026',
      description:
        'An AI-assisted clinical documentation project that captures consultation audio and drafts structured case histories for clinicians. Every AI output stays reviewable, editable, and requires explicit clinician approval — AI assists the clinician, who remains in control.',
      tech: [
        'React',
        'TypeScript',
        'Vite',
        'Tailwind CSS',
        'FastAPI',
        'PostgreSQL',
        'Docker',
        'Google Gemini',
        'Speech-to-text',
      ],
      image: 'screenshots/clinix-dashboard.png',
      imageIsPlaceholder: false,
      imageAlt: 'Clinix clinician dashboard showing consultations and patient overview',
      // Repository verified locally (git remote) — github.com/harshukamble2607-commits/Clinix
      repo: 'https://github.com/harshukamble2607-commits/Clinix',
      live: '', // <ADD_LIVE_DEMO_URL> (leave empty if there is no public demo)
    },
    {
      id: 'ai-interview-simulator',
      index: '03',
      name: 'AI Interview Simulator',
      tagline: 'Interview practice with AI feedback',
      status: 'In Progress',
      description:
        'An interview preparation application concept focused on practice sessions, structured questions, and AI-assisted feedback. Being built out as a full-stack app with real-time interaction.',
      tech: [
        'React',
        'Vite',
        'Tailwind CSS',
        'Node.js',
        'Express.js',
        'MongoDB',
        'MediaPipe',
        'LLM integration',
      ],
      image: 'screenshots/ai-interview-simulator.svg',
      imageIsPlaceholder: true,
      imageAlt: 'AI Interview Simulator placeholder illustration',
      repo: '', // <ADD_REPO_URL> when the repository is public
      live: '',
    },
    {
      id: 'stock-anomaly-detector',
      index: '04',
      name: 'Stock Anomaly Detector',
      tagline: 'Finding unusual patterns in market data',
      status: 'In Progress',
      description:
        'A Machine Learning project exploring unusual patterns in stock-market data through data processing and anomaly-detection methods.',
      tech: ['Python', 'Machine Learning', 'Data processing', 'Anomaly detection'],
      image: 'screenshots/stock-anomaly-detector.svg',
      imageIsPlaceholder: true,
      imageAlt: 'Stock Anomaly Detector placeholder illustration',
      repo: '', // <ADD_REPO_URL> when the repository is public
      live: '',
    },
  ],
}

/**
 * EXPERIENCE
 * ----------
 * Only verified entries are shown. The Saiket Systems Machine Learning
 * internship details below are intentionally left as placeholders — fill them
 * in from the offer letter and actual work. While `title`/`dates` are empty the
 * UI shows a clearly marked "details to be added" state rather than inventing
 * a role, date range, or completion status.
 */
export const experience = {
  heading: 'Experience & Learning',
  intro: 'Internships, training, and hands-on learning.',
  entries: [
    {
      id: 'saiket',
      organization: 'Saiket Systems',
      title: '<ADD_INTERNSHIP_TITLE>', // e.g. 'Machine Learning Intern'
      dates: '<ADD_START> – <ADD_END>', // e.g. 'Jun 2026 – Present'
      status: '<ADD_STATUS>', // e.g. 'Ongoing' | 'Completed'
      location: 'Remote',
      points: [
        '<ADD_VERIFIED_RESPONSIBILITY>',
        '<ADD_VERIFIED_RESPONSIBILITY>',
      ],
      configured: false,
    },
  ],
  // Optional extras — add rows only for things that are real and verifiable.
  extras: {
    title: 'Certifications, Hackathons & Training',
    // e.g. { label: 'Smart India Hackathon 2026', detail: 'Participant', url: '' }
    items: [],
  },
}

export const education = {
  heading: 'Education',
  school: 'N. K. Orchid College of Engineering & Technology, Solapur',
  degree: 'Computer Science Engineering',
  currentYear: 'Third Year',
  expectedGraduation: '2028',
  location: 'Solapur, Maharashtra, India',
}

export const contact = {
  heading: "Let's build something meaningful.",
  intro:
    "I'm open to relevant internship opportunities, collaborative software projects, and conversations about Machine Learning and Full-Stack Development.",
  /**
   * Contact form delivery.
   * The form is wired through `src/lib/contact.js`. By default `mode` is
   * 'unconfigured', which means the form validates input but does NOT pretend
   * to send anything. See README.md → "Connect the contact form" to enable a
   * real provider (EmailJS, Formspree, or your own endpoint).
   */
  form: {
    mode: 'unconfigured', // 'unconfigured' | 'emailjs' | 'endpoint'
    emailjs: {
      serviceId: '', // <ADD_EMAILJS_SERVICE_ID>
      templateId: '', // <ADD_EMAILJS_TEMPLATE_ID>
      publicKey: '', // <ADD_EMAILJS_PUBLIC_KEY>
    },
    endpoint: '', // <ADD_FORM_ENDPOINT_URL> for a custom backend
  },
}

export const footer = {
  credit: 'Designed and built by Harshvardhan Kamble.',
}
