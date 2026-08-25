export interface Screenshot {
  src: string;
  alt: string;
  caption?: string;
}

export interface StorySection {
  title: string;
  content: string[];
}

export interface Project {
  slug: string;

  title: string;

  subtitle: string;

  description: string;

  year: string;

  duration?: string;

  role?: string;

  organization?: string;

  status: "Completed" | "In Progress" | "Ongoing";

  github?: string;

  liveDemo?: string;

  techStack: string[];

  screenshots?: Screenshot[];

  overview: StorySection;

  challenge: StorySection;

  journey?: StorySection;

  solution: StorySection;

  architecture?: StorySection;

  features: string[];

  lessonsLearned: string[];

  futureImprovements: string[];
}


export const projects: Project[] = [
  {
    slug: "akic-cup-system",

    title: "AKIC Cup Management System",

    subtitle:
        "Digitizing the administration of Al-Khwarizmi College's annual intramural competition.",

    description:
        "A centralized web application that replaced manual event management with an integrated platform for participants, activities, announcements, tournament brackets, and house point tabulations.",

    year: "2024",

    duration: "4 Months",

    role: "Full Stack Developer",

    organization: "Al-Khwarizmi College",

    status: "Completed",

    github: "https://github.com/Pangandaman/akic-cup",

    techStack: [
        "PHP",
        "CodeIgniter 3",
        "MySQL",
        "Bootstrap",
        "JavaScript",
        "jQuery",
        "HTML",
        "CSS",
        "SweetAlert2"
    ],

    overview: {

        title: "Project Overview",

        content: [

            "AKIC Cup Management System was developed as my college capstone project for Al-Khwarizmi College.",

            "The objective was to digitize the annual AKIC Cup by replacing spreadsheets and paperwork with one centralized web application.",

            "The system manages students, houses, activities, participant assignments, advisers, announcements, tournament brackets, and point tabulations."

        ]

    },

    challenge: {

        title: "The Challenge",

        content: [

            "Managing an intramural competition turned out to be much more than simply recording scores.",

            "Every module depended on several others.",

            "Activities required participants.",

            "Participants required authentication.",

            "Rankings required point tabulations.",

            "Tournament brackets depended on participant assignments.",

            "The more I built, the larger the project became."

        ]

    },

    journey: {

        title: "My College Thesis: A Turning Point",

        content: [

            "I originally struggled to decide what my thesis project should be until one of my seniors suggested building an Intramural Management System—a project she had abandoned herself.",

            "I honestly believed it would be a small CRUD application.",

            "It quickly evolved into the largest project I had built at the time.",

            "Every completed feature uncovered new requirements that I hadn't anticipated.",

            "Because our college required us to use PHP and CodeIgniter 3, I learned the fundamentals of MVC architecture, relational databases, and software design instead of relying on modern abstractions.",

            "That experience completely changed the way I think about software development."

        ]

    },

    solution: {

        title: "The Solution",

        content: [

            "I developed a centralized management platform using PHP, CodeIgniter 3, MySQL, Bootstrap, and JavaScript.",

            "Administrators can manage participants, advisers, announcements, activities, tournament brackets, and overall house standings from one dashboard.",

            "The system significantly reduced repetitive administrative work while making information easier to organize and maintain."

        ]

    },

  architecture: {
  title: "Application Workflow",

  content: [
    "1. Create an AKIC Cup — An administrator starts by creating a new AKIC Cup for a specific academic year. This serves as the central event where all activities, participants, announcements, and rankings are stored.",

    "2. Configure the Event — The administrator sets up the competition by creating activities, defining participant limits, assigning point values, and preparing the event before registration begins.",

    "3. Register Students & Assign Houses — Students are added to the system and assigned to one of the four college houses. Once they log in, they automatically gain access to their assigned house and its information.",

    "4. Assign Participants — House advisers select students to represent their house in each activity while ensuring participant limits and event requirements are met.",

    "5. Manage the Competition — Throughout the AKIC Cup, administrators publish announcements, schedules, and important updates to keep participants informed.",

    "6. Record Results — After each activity, tabulators enter the official results. The system automatically calculates the corresponding points for each house.",

    "7. Generate Rankings — As scores are submitted, the leaderboard updates to display the current standings of all four houses throughout the competition.",

    "8. Close the AKIC Cup — Once all activities have concluded, the administrator closes the active Cup, preserving all activities, participants, announcements, and final rankings as historical records."
  ]

},

    features: [

        "Authentication",

        "Role-based Access",

        "Student Management",

        "House Management",

        "Activities CRUD",

        "Participant Assignment",

        "House Adviser Assignment",

        "Announcements",

        "Tournament Brackets",

        "House Point Tabulation",

        "Overall Rankings",

        "Administrative Dashboard"

    ],

   screenshots: [ 
   { src: "/assets/img/intramurals/dashboard.png", alt: "AKIC Dashboard", caption: "I wish I can access the system but due to legacy environment and PHP version dependencies, all I have is a screenshot of the dashboard.", }, 
   { src: "/assets/img/intramurals/hardbound.jpg", alt: "Hardbound", caption: "The hardbound thesis books in all its glory. 300 pages, 256 functions, countless revisions and dozens of diagrams later—it's finally done. Proof of the sleepless nights and relentless debugging that made this system a reality, I still can't believe I made it to the finish line! 🤣", }, 
   { src: "/assets/img/intramurals/award1.jpg", alt: "Hardbound", caption: "Programmer of the Year", }, 
   { src: "/assets/img/intramurals/award2.jpg", alt: "Hardbound", caption: "Best in Software Engineering Project", }, 

   ],
    lessonsLearned: [

        "Large projects are made up of many interconnected systems.",

        "A well-designed database makes future features much easier to implement.",

        "Building with CodeIgniter strengthened my understanding of MVC architecture.",

        "Legacy frameworks taught me the importance of understanding software fundamentals before using modern abstractions.",

        "Writing code is only one part of software development; understanding workflows and solving real problems is equally important."

    ],

    futureImprovements: [

        "Rebuild with Next.js and TypeScript.",

        "Use Supabase instead of MySQL.",

        "Create a custom tournament bracket engine.",

        "Implement real-time updates.",

        "Improve the mobile experience."

    ]

},
  {
   slug: "pickleball-court-management",

   title: "CourtFlow",

   subtitle:
     "A multi-tenant court booking and operations management system for badminton, pickleball, tennis, study hubs, and other rentable spaces.",

   description:
     "CourtFlow centralizes reservations, payments, inventory, customer management, and business analytics into a single platform designed for facilities that rent out courts, rooms, or spaces.",

   year: "2026",

   duration: "2025 – 2026",

   role: "Full Stack Developer",

   organization: "Personal Project",

   status: "Completed",

   techStack: [
     "Next.js",
     "TypeScript",
     "Tailwind CSS",
     "Supabase",
     "React",
     "Vercel"
   ],

   overview: {
     title: "Project Overview",
     content: [
       "CourtFlow is my transition from legacy PHP development to modern full-stack web development.",
       "It is a complete management platform for rentable facilities that simplifies reservations, inventory tracking, customer management, and payment processing.",
       "Built with a multi-tenant architecture, it can serve multiple businesses from a single deployment."
     ]
   },

   challenge: {
     title: "The Challenge",
     content: [
       "Managing a facility involves much more than booking a court.",
       "Court availability, rental equipment, customer information, payments, inventory, and reporting all need to work together.",
       "Designing a system where these modules communicate efficiently — while supporting multiple tenants — has been the biggest challenge."
     ]
   },

   journey: {
     title: "Why I Built It",
     content: [
       "After graduating, I wanted a project that would push me beyond PHP and CodeIgniter.",
       "Rather than following another tutorial, I decided to build something based on a real business workflow.",
       "This project allowed me to learn React, Next.js, TypeScript, and Supabase while solving practical problems."
     ]
   },

   solution: {
     title: "The Solution",
     content: [
       "CourtFlow provides a centralized dashboard where administrators can manage courts, bookings, equipment rentals, customers, and transactions.",
       "The platform supports real-time monitoring, session timers, check-in/out workflows, refunds, add-ons, and business-level analytics.",
       "Staff can be invited and assigned roles, and a full audit log tracks all actions for accountability."
     ]
   },

   architecture: {
     title: "Booking Flow",
     content: [
       "Customer → Select Court → Choose Date & Time → Add Rentals → Confirm Booking → Payment → Dashboard"
     ]
   },

   features: [
     "Full booking lifecycle (CRUD, check-in/out, extend, transfer, refund, add-ons)",
     "Court management with pricing, status, and maintenance tracking",
     "Customer profiles with inline creation and booking history",
     "Inventory system for consumables and rentals with low-stock alerts",
     "Transaction records with search and date filters",
     "Calendar views (month/day) with color-coded bookings",
     "Live monitor with real-time court cards and quick actions",
     "Dashboard with stats, pending alerts, active sessions, and court status",
     "Business settings and staff management with role-based invites",
     "Audit log with 17 action types, searchable and filterable"
   ],

   screenshots: [],

   lessonsLearned: [
     "Modern frameworks encourage reusable components and cleaner project structure.",
     "TypeScript significantly improves development by catching errors early.",
     "Planning the database before writing code saves time later.",
     "Multi-tenant architecture requires careful data isolation from day one.",
     "Building a real-world application is one of the best ways to learn a new technology stack."
   ],

   futureImprovements: [
     "Online payment gateway integration",
     "Email and SMS notifications",
     "QR code check-in",
     "Public booking portal for customers",
     "Mobile application"
   ]
 }
];
