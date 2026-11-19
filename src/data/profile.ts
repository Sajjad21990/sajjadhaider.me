// Single source of truth for the site and the resume.
// Everything in this file is public. The private CV build (CV_FULL=1) reads
// the phone number and numeric bullet variants from cv/private.json, which is
// git-ignored and never deployed.

export const person = {
  name: 'Sajjad Haider Sayed',
  title: 'Full-Stack and Infrastructure Engineer',
  location: 'Mumbai, India',
  email: 'sajjadhaider21990@gmail.com',
  github: 'https://github.com/Sajjad21990',
  linkedin: 'https://www.linkedin.com/in/sajjad21990',
  x: 'https://x.com/Sajjad21990',
  intro:
    'I build web products end to end and run the cloud infrastructure under them. For the last five years that has meant TypeScript, React and Node.js on one side, and AWS, GCP and Terraform on the other.',
  now: 'I work at Reclaim Protocol (YC W21), where we build privacy-preserving verification on zkTLS. I write backend services and SDKs, look after the infrastructure and CI/CD, and serve as the team’s InfoSec officer.',
  cvSummary:
    'Software engineer with 5+ years building web products end to end and running the cloud infrastructure under them. At Reclaim Protocol (YC W21) I build backend services and SDKs for a zkTLS verification platform, run AWS and GCP with Terraform, and serve as InfoSec officer for a team of about 30 engineers.',
};

export type Bullet = { text: string };

export type Job = {
  role: string;
  company: string;
  url?: string;
  period: string;
  place: string;
  about?: string;
  bullets: Bullet[];
};

export const experience: Job[] = [
  {
    role: 'Software Developer',
    company: 'Reclaim Protocol (YC W21)',
    url: 'https://reclaimprotocol.org',
    period: 'May 2024 – Present',
    place: 'Remote',
    about: 'Privacy-preserving identity and data verification using zkTLS.',
    bullets: [
      {
        text: 'Leading the migration of production services from Elastic Beanstalk to ECS Fargate, with the infrastructure on AWS and GCP managed as code in OpenTofu/Terraform.',
      },
      {
        text: 'Built the shared CI/CD pipeline that the service repositories deploy through, with automated deploys and rollbacks on GitHub Actions.',
      },
      {
        text: 'Set up monitoring, alerting, autoscaling and external uptime checks for the production API.',
      },
      {
        text: 'InfoSec officer for a team of about 30 engineers: access control, audit evidence, security reviews and disaster-recovery drills.',
      },
      {
        text: 'Develop the core SDK backend in Node.js and TypeScript, and built the browser extension SDK that lets partners run verifications inside Chrome.',
      },
      {
        text: 'Built a full-stack loyalty status-matching product with Next.js and Firebase for airline partners, with admin roles, review workflows and scheduled exports.',
      },
    ],
  },
  {
    role: 'Software Developer',
    company: 'Nine Lights Technologies',
    period: 'Oct 2022 – May 2024',
    place: 'Remote',
    bullets: [
      {
        text: 'Built online multiplayer team-building games and their admin tools for Team Building Games Co (TBGC) with React, Next.js, TypeScript and Firebase, including The Mavericks, Squad Games and Now You Know Me, played by corporate clients including Fortune 500 companies.',
      },
      {
        text: 'Built AR and VR game experiences in the browser with A-Frame, MindAR and Three.js, and map-based hunts on the Google Maps API.',
      },
      {
        text: 'Built a browser-based video editor with React, Flask and FFmpeg compiled to WebAssembly.',
      },
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'TaskPro Services',
    period: 'Jan 2021 – Sep 2022',
    place: 'Mumbai',
    bullets: [
      {
        text: 'Worked on Beezer, a SaaS product for building progressive web apps that run on phones with native-app features.',
      },
      { text: 'Built interactive web front ends for client projects with designers in an Agile team.' },
    ],
  },
  {
    role: 'Freelance Web Developer',
    company: 'Self-employed',
    period: 'Oct 2020 – Oct 2021',
    place: 'Mumbai',
    bullets: [
      {
        text: 'Delivered 10+ websites for small businesses with WordPress, React and custom code, from design through hosting.',
      },
    ],
  },
];

export const volunteering: Job[] = [
  {
    role: 'Volunteer Developer',
    company: 'Anfaal Foundation',
    url: 'https://anfaalfoundation.com',
    period: '2026 – Present',
    place: 'Mumbai',
    bullets: [
      {
        text: 'Built Smart Portal, the NGO’s central portal for scholarship, ration and other aid services, covering family applications, committee review, finance and audit logs (Next.js, Firebase), and its mentorship portal.',
      },
    ],
  },
];

export type Project = {
  slug: string;
  name: string;
  event: string;
  oneLine: string;
  cvLine: string;
  problem: string;
  how: string[];
  stack: string[];
  links: { label: string; href: string }[];
  shots: { src: string; alt: string; width: number; height: number }[];
  credit?: string;
};

export const projects: Project[] = [
  {
    slug: 'botfare',
    name: 'BotFare',
    event: 'PayPal AI hackathon, 2026',
    oneLine: 'Websites charge AI agents a few cents a page through PayPal, while people keep reading free.',
    cvLine:
      'Lets websites charge AI agents a few cents per page through PayPal while people read free: Express middleware, HTTP 402 pricing, a double-entry Postgres ledger and signed receipts (Next.js, TypeScript).',
    problem:
      'AI answers take the clicks that used to pay for writing, and a normal card payment costs far more in fees than a two-cent page is worth.',
    how: [
      'A website adds one line of Express middleware and sets its prices in a dashboard.',
      'People read free. An AI agent gets an HTTP 402 response with the price and a free preview.',
      'The agent’s owner tops up a wallet once with PayPal and gives each agent a key with a budget.',
      'Every fare settles in a double-entry ledger, and the site is paid out through PayPal Payouts.',
      'Each payment, delivery and refund gets a signed receipt that anyone can check.',
    ],
    stack: ['Next.js', 'TypeScript', 'Express', 'Postgres', 'PayPal', 'MCP', 'Docker'],
    links: [
      { label: 'Live app', href: 'https://botfare-web.onrender.com/' },
      { label: 'Source on GitHub', href: 'https://github.com/Sajjad21990/botfare' },
    ],
    shots: [
      {
        src: '/shots/botfare-agent.jpg',
        alt: 'BotFare research agent page, showing an AI agent paying per page while answering a question',
        width: 1600,
        height: 1000,
      },
      {
        src: '/shots/botfare-dashboard.jpg',
        alt: 'BotFare publisher dashboard with earnings, withdrawals and pricing advice',
        width: 1600,
        height: 1000,
      },
      {
        src: '/shots/botfare-receipt.jpg',
        alt: 'BotFare page where anyone can check a signed payment receipt',
        width: 1600,
        height: 1000,
      },
    ],
  },
  {
    slug: 'gatepass',
    name: 'Gatepass',
    event: 'NEAR hackathon, 2026',
    oneLine: 'Pay, and get an SSH pass into a machine for exactly the minutes you paid for.',
    cvLine:
      'Pay-per-minute SSH access with no shared keys: a NEAR smart contract (Rust) issues an SSH certificate, signed by NEAR Chain Signatures only after payment.',
    problem:
      'Giving someone access to a server means sharing a key or a password. Keys get copied, never expire and are not tied to payment, and an AI agent cannot sign up for a rental account.',
    how: [
      'Each machine trusts one SSH certificate authority key, and no person holds that key.',
      'The renter sends a public key, a number of minutes and the payment to a NEAR smart contract.',
      'The contract builds the SSH certificate itself and asks NEAR Chain Signatures to sign it.',
      'The certificate forces the session to end when the paid time runs out.',
      'It works the same for a person at a terminal and for an AI agent.',
    ],
    stack: ['Rust', 'NEAR', 'Chain Signatures', 'TypeScript', 'OpenSSH', 'Docker'],
    links: [{ label: 'Source on GitHub', href: 'https://github.com/Sajjad21990/gatepass' }],
    shots: [
      {
        src: '/shots/gatepass-in-use.jpg',
        alt: 'Gatepass page showing a rented machine in use with a countdown, next to a logged-in terminal',
        width: 1600,
        height: 900,
      },
      {
        src: '/shots/gatepass-agent.jpg',
        alt: 'An AI agent renting a machine through Gatepass by itself and running a command on it',
        width: 1600,
        height: 900,
      },
    ],
  },
  {
    slug: 'paper-seal',
    name: 'Paper Seal',
    event: 'ETHGlobal Mumbai, 2026',
    oneLine: 'Keeps exam papers sealed until shortly before the exam, so no single person can leak them.',
    cvLine:
      'Leak-proof exam papers, built with one teammate: assembled inside a TEE, key split between a time lock and 8 of 10 key holders, hashes on-chain.',
    problem:
      'Exam papers leak because too many people have to be trusted with them. Leaks keep cancelling exams in India, and each one affects thousands of students.',
    how: [
      'Question setters send encrypted questions to a sealed machine, a trusted execution environment.',
      'The sealed machine picks the questions and builds one encrypted paper that no person has seen.',
      'The key is split in two. One half opens on its own at exam time; the other needs 8 of 10 key holders.',
      'File hashes are stored on-chain, so anyone can check that nothing was changed.',
    ],
    stack: ['TypeScript', 'TEE', 'Solidity', 'Threshold cryptography'],
    links: [
      { label: 'Source on GitHub', href: 'https://github.com/Sajjad21990/paperseal' },
    ],
    shots: [
      {
        src: '/shots/paperseal-home.jpg',
        alt: 'Paper Seal home page: a sealed envelope that opens shortly before the exam and takes the clock plus 8 of 10 key holders',
        width: 1600,
        height: 900,
      },
      {
        src: '/shots/paperseal-verifier.jpg',
        alt: 'Paper Seal public record for an exam, listing each step with its evidence, all checks passed',
        width: 1600,
        height: 900,
      },
      {
        src: '/shots/paperseal-evidence.jpg',
        alt: 'Paper Seal unlock evidence showing key holder releases and the published release log passing each check',
        width: 1600,
        height: 900,
      },
    ],
    credit: 'Built in about 30 hours with Abdul Rashid Reshamwala.',
  },
];

export const skills: Record<string, string[]> = {
  languages: ['TypeScript', 'JavaScript', 'Python', 'SQL'],
  frontend: ['React', 'Next.js', 'Tailwind CSS', 'A-Frame', 'Three.js', 'WebAssembly', 'Browser extensions'],
  backend: ['Node.js', 'Express', 'Flask', 'REST APIs', 'Webhooks', 'PostgreSQL', 'MongoDB', 'Firestore', 'Redis'],
  cloud: ['AWS (ECS Fargate, RDS, ALB, WAF, S3)', 'GCP', 'Firebase', 'Terraform / OpenTofu', 'Docker', 'GitHub Actions'],
  reliabilityAndSecurity: ['Monitoring and alerting', 'BC/DR drills', 'Access control', 'Audits', 'Vulnerability scanning'],
  web3: ['zkTLS proofs', 'TEEs', 'ethers.js', 'On-chain attestations'],
};

export const skillLabels: Record<string, string> = {
  languages: 'Languages',
  frontend: 'Front end',
  backend: 'Back end',
  cloud: 'Cloud and infra',
  reliabilityAndSecurity: 'Reliability and security',
  web3: 'Web3',
};

export const education = [
  { title: 'Executive PG Programme in Software Development (DevOps)', where: 'IIIT Bangalore', when: '2023' },
  { title: 'B.E. Computer Science', where: 'Rizvi College of Engineering, Mumbai', when: '2017 – 2021', note: 'CGPA 8.89' },
];

export const resumeFile = '/Sajjad-Haider-Sayed-Resume.pdf';

// The explorer tree. `href` is a real page, so the site works without JavaScript.
export type FileEntry = { name: string; href: string; lang: string; dir?: string; external?: boolean };

export const files: FileEntry[] = [
  { name: 'README.md', href: '/', lang: 'Markdown' },
  { name: 'experience.md', href: '/experience/', lang: 'Markdown' },
  ...projects.map((p) => ({ name: `${p.slug}.md`, href: `/projects/${p.slug}/`, lang: 'Markdown', dir: 'projects' })),
  { name: 'skills.json', href: '/skills/', lang: 'JSON' },
  { name: 'contact.md', href: '/contact/', lang: 'Markdown' },
];
