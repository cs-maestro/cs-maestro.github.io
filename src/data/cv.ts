export interface TimeTableEntry {
  title: string;
  institution: string;
  year?: string;
  description?: string[];
}

export interface CvData {
  generalInfo: { name: string; label: string; value: string }[];
  education: TimeTableEntry[];
  experience: TimeTableEntry[];
  teaching: TimeTableEntry[];
  honors: string[];
  skills: { title: string; items: string[] }[];
  volunteering: string[];
}

export const cv: CvData = {
  generalInfo: [
    { name: "name", label: "Full Name", value: "Muhammad Danish" },
    { name: "languages", label: "Languages", value: "English, Urdu, Pashto" },
  ],
  education: [
    {
      title: "Ph.D. in Computer Science",
      institution: "University of New Mexico, Albuquerque, NM",
      year: "Aug 2025 – May 2028",
    },
    {
      title: "M.S. in Computer Science",
      institution: "University of New Mexico, Albuquerque, NM",
      year: "Aug 2025 – Jul 2026",
    },
    {
      title: "B.S. in Computer Science; Minor in Honors Interdisciplinary Liberal Arts",
      institution: "University of New Mexico, Albuquerque, NM",
      year: "Aug 2021 – May 2025",
    },
  ],
  experience: [
    {
      title: "Research Assistant (PI: Afsah Anwar)",
      institution: "University of New Mexico",
      year: "Dec 2023 – Present",
      description: [
        "Conducted large-scale AI, security & privacy research, resulting in multiple publications.",
        "Built end-to-end pipelines and reverse-engineered AI/web/mobile systems to uncover vulnerabilities.",
        "Characterized security & privacy issues in multiple systems (e.g., web, AI/ML) and proposed mitigation strategies.",
      ],
    },
    {
      title: "Student Programming Analyst",
      institution: "University of New Mexico",
      year: "Oct 2022 – Aug 2025",
      description: [
        "Automated cross-department administrative workflows using Microsoft Power Platform, Power Automate, and Boomi.",
        "Built regression-test suites and integrated them into Azure DevOps CI/CD pipelines, reducing testing time by ~50%.",
        "Delivered web applications and system integrations across multiple departments, supporting 20,000+ students.",
      ],
    },
  ],
  teaching: [
    {
      title: "Computer Science Teaching Assistant",
      institution: "University of New Mexico",
      description: [
        "Led weekly programming, networking, and security labs for 40+ students.",
        "Developed exercises, graded assignments and examinations, and provided individualized technical feedback.",
        "Fostered a collaborative learning environment via group discussions, one-on-one sessions, and YouTube.",
        "Courses: Introduction to Cybersecurity, Computer Networks, and Intro/Intermediate Programming",
      ],
    },
  ],
  honors: [
    "CRA Outstanding Undergraduate Researcher (North America)",
    "NMEF Scholar (New Mexico)",
    "Bug Bounty",
    "Distinguished Artifact Evaluator Award (IEEE S&P)",
    "Distinguished Artifact Evaluator Award (PETS)",
  ],
  skills: [
    {
      title: "Programming",
      items: ["Python (PyTorch and TensorFlow)", "Bash", "PowerShell", "Java", "JavaScript", "SQL", "MATLAB"],
    },
    {
      title: "Tools and Platforms",
      items: ["Linux/Windows", "Playwright", "Docker", "NMap", "Wireshark", "Burp Suite", "Kibana", "Metasploit", "Azure", "Git"],
    },
    {
      title: "Technical",
      items: ["Model compression", "Adversarial ML", "LLMs", "Agentic AI", "Web & API security", "Reverse engineering"],
    },
  ],
  volunteering: [
    "Peer Review (AEC member at top conferences e.g., IEEE S&P, ACM CCS, NDSS, PETS)",
    "Stanford Code in Place (Section Leader – Mentored diverse students in Python and CS fundamentals)",
  ],
};
