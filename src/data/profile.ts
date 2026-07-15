export const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PHP",
  "CodeIgniter",
  "Tailwind CSS",
  "MySQL",
  "Supabase",
  "Git",
  "Docker",
];

export const currentlyExploring = [
  "React",
  "Next.js",
  "TypeScript",
  "AI-assisted Development",
  "Supabase",
  "Docker",
  "System Design",
  "Open Source",
];

export interface Experience {
  company: string;
  role: string;
  date: string;
  description: string;
}

export const experience: Experience[] = [
  {
    company: "Freelance",
    role: "Full-Stack Developer",
    date: "Present",
    description:
      "Currently dedicating my time to improve my technical growth by building diverse, real-world applications through paid freelance work and collaborative projects. I am focused on expanding my portfolio, mastering new frameworks, and identifying my niche within full-stack development.",
  },
  {
  company: "Concentrix, Razer 🐍",
  role: "Advisor I, Technical Support",
  date: "November 10, 2025 - April 17, 2026",
  description:
    "Delivered high-tier technical support and hardware troubleshooting for Razer's ecosystem of premium gaming peripherals, laptops, and software. Diagnosed complex device failures, guided users through firmware and driver updates, and managed end-to-end case resolutions. Balanced technical precision with deep empathy and communication to consistently maintain high customer satisfaction scores.",
},
  {
    company: "Al-Khwarizmi International College Foundation, Inc.",
    role: "Web Developer",
    date: "2023 - 2024",
    description:
  "Independently designed, built, and defended my capstone Intramural System to successfully fulfill my degree requirements. This individual milestone provided intensive, hands-on experience in relational database design, core MVC routing, and translating highly complex real-world requirements into clean, functional code.",
  },
];

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  file: string;
}

export const certificates: Certificate[] = [
  {
    title: "Security and Conectivity Support",
    issuer: "Cisco Networking Academy",
    date: "2025",
    file: "/assets/certificates/SecurityandConnectivitySupportv120260530-31-6k2fzh.pdf",
  },
  {
    title: "Hardware and Upgrade Support",
    issuer: "Cisco Networking Academy",
    date: "2025",
    file: "/assets/certificates/HardwareandUpgradeSupportv120251229-31-jizq2t.pdf",
  },
  {
    title: "IT Customer Support Basics",
    issuer: "Cisco Networking Academy",
    date: "2025",
    file: "/assets/certificates/ITCustomerSupportBasicsv120251225-30-qalu5o.pdf",
  },
  {
    title: "Operating Systems Support",
    issuer: "Cisco Networking Academy",
    date: "2025",
    file: "/assets/certificates/OperatingSystemsSupportv120251225-33-ni4ur7.pdf",
  },
];

export const socialLinks = {
  github: "https://github.com/Pangandaman",
  linkedin: "https://www.linkedin.com/in/pangandamanamr/",
  email: "pangandamanamr@gmail.com",
};
