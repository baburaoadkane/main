import {
  Phone,
  Mail,
  Linkedin,
  Github,
  MessageCircle,
} from "lucide-react";

export const competencies = [
  "Manual Testing",
  "Automated Testing",
  "Functional Testing",
  "Integration Testing",
  "Regression Testing",
  "API Testing",
  "Mobile Testing",
  "Cross-browser Testing",
  "User Acceptance Testing",
  "Stress + Load Testing",
  "Compatibility Testing",
  "Website Development"
];

export const technicalSkills = [
  "Manual Testing",
  "Automated Testing",
  "API Testing",
  "Database Testing",
  "Performance Testing",
  "Security Testing",
  "Cross-browser Testing",
  "Integration Testing",
];

export const softSkills = [
  "Attention to Detail",
  "Analytical Thinking",
  "Communication",
  "Collaboration",
  "Continuous Learning",
  "Curious and Proactive",
  "Problem Solving",
  "Time Management",
  "Patience and Perseverance",
  "Adaptability",
  "Product Oriented",
  "Process Oriented"
];

export const experiences = [
  {
    id: 1,
    title: "QA and QC Enginner",
    company_name: "Expert Business Solutions",
    period: "March 2023 - Present",
    points: [
      "Designing, developing, and executing test cases to ensure software quality and compliance with business requirements.",
      "Collaborating with cross-functional teams including developers, and product managers to understand requirements and plan testing activities.",
      "Performing manual and automated testing.",
      "Identifying, logging, and tracking defects in issue management tool - Visual Studio Team Services.",
    ],
  },
  {
    id: 2,
    title: "Software Test Engineer",
    company_name: "WebRelier Software Solutions",
    period: "Aug 2020 - Feb 2023",
    points: [
      "Analyze Requirements/Stories.",
      "Identify test scenarios and create/update test cases.",
      "Environment Setup - test data and tools.",
      "Defect Reporting & Tracking.",
    ],
  },
  {
    id: 3,
    title: "Senior Officer",
    company_name: "YES Bank Ltd",
    period: "Mar 2017 - Jul 2020",
    points: [
      "Handle core banking operations.",
      "Processing the customer request.",
      "Processing the forex transactions like inward and outward remittances.",
      "Handling the gold loan sales and process.",
    ],
  },
  {
    id: 4,
    title: "Assistant Manager",
    company_name: "HDFC Bank Ltd",
    period: "Mar 2015 - Mar 2017",
    points: [
      "Handle the teller counter.",
      "Check and process the account opening form.",
      "Handle the branch audit.",
      "processing the NEFT/RTGS/Fund Transfer requests.",
    ],
  },
];

export const project = [
  {
    id: 1,
    name: "HRMS",
    description: "Enfinity HRMS, a user-friendly cloud-based HR software in MENA which simplifies HR management, from recruitment to retirement, helps you retain talent and build a high-performing workforce.",
    tags: ["hr core", "payroll", "self service", "attendance", "learning", "performance"],
    link: "https://www.onenfinity.com/hrms",
  },
  {
    id: 2,
    name: "ERP",
    description: "Enfinity ERP lies a comprehensive suite of applications, seamlessly integrating accounting, sales, purchase, inventory, fixed assets and service.",
    tags: ["accounting", "sales", "purchase", "inventory", "fixed asset", "service"],
    link: "https://www.onenfinity.com/erp",
  },
  {
    id: 3,
    name: "CRM",
    description: "Enfinity CRM is a cutting-edge customer relationship management solution. Enfinity CRM simplifies it, focusing on efficient customer engagement, streamlining business processes, and enhancing productivity.",
    tags: ["lead", "opportunity", "salesman"],
    link: "https://www.onenfinity.com/crm",
  },
  {
    id: 4,
    name: "Retail",
    description: "Enfinity Retail is a cutting-edge cloud-based retail Point of Sale (POS) system, meticulously crafted to simplify and enhance the operational efficiency of retailers.",
    tags: ["pos", "payment methods", "salesman"],
    link: "https://www.onenfinity.com/retail",
  },
  {
    id: 5,
    name: "Restaurant",
    description: "Enfinity Restaurant is a comprehensive Point-of-Sale (POS) and restaurant management system crafted to meet the diverse needs of modern restaurants.",
    tags: ["pos", "payment methods", "salesman"],
    link: "https://www.onenfinity.com/restaurant",
  },
  {
    id: 6,
    name: "Subscription",
    description: "Enfinity Subscription is a cloud-based software designed for businesses aiming to optimize their subscription billing processes.",
    tags: ["product", "plan","addon","coupon","charges", "billingfrequencies"],
    link: "https://www.onenfinity.com/subscription",
  },
  {
    id: 7,
    name: "Real-Estate",
    description: "Enfinity Real-Estate is a cutting-edge cloud-based solution tailored for property rental management. From seamless rent collection to intuitive analytics, we offer comprehensive tools that make managing real estate assets a breeze.",
    tags: ["property", "rent collection", "security deposit"],
    link: "https://www.onenfinity.com/real-estate",
  },
  {
    id: 8,
    name: "Loan Origination System",
    description: "Loan Origination System streamlines the end-to-end loan process with a task-based workflow and real-time alerts. It ensures faster and more efficient loan approvals.",
    tags: ["customer", "loan application", "repayment", "emi"],
    link: "https://www.ltfinance.com/personal-loan",
  },
];

export const projects = [
    {
      image: "/imgs/hrms.svg",
      video: "/videos/hrms.mp4",
      title: "HRMS",
      subtitle: "Enfinity HRMS, a user-friendly cloud-based HR software in MENA which simplifies HR management, from recruitment to retirement, helps you retain talent and build a high-performing workforce.",
      tags: ["hr core", "payroll", "self service", "attendance", "learning", "performance"],
      gradient: "linear-gradient(145deg,#4F46E5,#000)",
      url: "https://www.onenfinity.com/hrms",
    },
    {
      image: "/imgs/erp.svg",
      video: "/videos/erp.mp4",
      title: "ERP",
      subtitle: "Enfinity ERP lies a comprehensive suite of applications, seamlessly integrating accounting, sales, purchase, inventory, fixed assets and service.",
      tags: ["accounting", "sales", "purchase", "inventory", "fixed asset", "service"],
      gradient: "linear-gradient(210deg,#10B981,#000)",
      url: "https://www.onenfinity.com/erp",
    },
    {
      image: "/imgs/crm.svg",
      video: "/videos/crm.mp4",
      title: "CRM",
      subtitle: "Enfinity CRM is a cutting-edge customer relationship management solution. Enfinity CRM simplifies it, focusing on efficient customer engagement, streamlining business processes, and enhancing productivity.",
      tags: ["lead", "opportunity", "salesman"],
      gradient: "linear-gradient(165deg,#F59E0B,#000)",
      url: "https://www.onenfinity.com/crm",
    },
    {
      image: "/imgs/retail.svg",
      video: "/videos/retail.mp4",
      title: "RETAIL",
      subtitle: "Enfinity Retail is a cutting-edge cloud-based retail Point of Sale (POS) system, meticulously crafted to simplify and enhance the operational efficiency of retailers.",
      tags: ["pos", "payment methods", "salesman"],
      gradient: "linear-gradient(195deg,#EF4444,#000)",
      url: "https://www.onenfinity.com/retail",
    },
    {
      image: "/imgs/restaurant.svg",
      video: "/videos/restaurant.mp4",
      title: "RESTAURANT",
      subtitle: "Enfinity Restaurant is a comprehensive Point-of-Sale (POS) and restaurant management system crafted to meet the diverse needs of modern restaurants.",
      tags: ["pos", "payment methods", "salesman"],
      gradient: "linear-gradient(225deg,#8B5CF6,#000)",
      url: "https://www.onenfinity.com/restaurant",
    },
    {
      image: "/imgs/real-estate.svg",
      video: "/videos/subscription.mp4",
      title: "SUBSCRIPTION",
      subtitle: "Enfinity Subscription is a cloud-based software designed for businesses aiming to optimize their subscription billing processes.",
      tags: ["product", "plan","addon","coupon","charges", "billingfrequencies"],
      gradient: "linear-gradient(135deg,#06B6D4,#000)",
      url: "https://www.onenfinity.com/subscription",
    },
    {
      image: "/imgs/real-estate.svg",
      video: "/videos/realestate.mp4",
      title: "REAL-ESTATE",
      subtitle: "Enfinity Real-Estate is a cutting-edge cloud-based solution tailored for property rental management. From seamless rent collection to intuitive analytics, we offer comprehensive tools that make managing real estate assets a breeze.",
      tags: ["property", "rent collection", "security deposit"],
      gradient: "linear-gradient(135deg,#06B6D4,#000)",
      url: "https://www.onenfinity.com/real-estate",
    },
    {
      image: "/imgs/loan.webp",
      video: "/videos/loan.mp4",
      title: "LOAN ORIGINATION SYSTEM",
      subtitle: "Loan Origination System streamlines the end-to-end loan process with a task-based workflow and real-time alerts. It ensures faster and more efficient loan approvals.",
      tags: ["customer", "loan application", "repayment", "emi"],
      gradient: "linear-gradient(135deg,#06B6D4,#000)",
      url: "https://www.ltfinance.com/personal-loan",
    },
  ];

  export const competency = [
    { text: 'Skills', video: "/videos/skills.mp4" },
    { text: 'Consistency', video: "/videos/consistency.mp4" },
    { text: 'Expert', video: "/videos/expert.mp4" },
    { text: 'Scalable', video: "/videos/scalability.mp4" },
];

export const contact = [
  {
    id: 1,
    label: "Phone",
    value: "+91 9309732510",
    sublabel: "Call me",
    icon: Phone,
    link: "tel:+919309732510",
    image: "/imgs/phone.jpg",
  },  
  {
    id: 2,
    label: "Email",
    value: "connect2baburaoadkane@gmail.com",
    sublabel: "Send me an email",
    icon: Mail,
    link: "mailto:connect2baburaoadkane@gmail.com",
    image: "/imgs/email.jpg",
  },
  {
    id: 3,
    label: "WhatsApp",
    value: "+91 9309732510",
    sublabel: "	Message me",
    icon: MessageCircle,    
    link: "https://wa.me/919309732510?text=Hi%20Baburao%2C%20I%20found%20you%20via%20your%20portfolio!",
    image: "/imgs/whatsapp.png",
  },
  {
    id: 4,
    label: "LinkedIn",
    value: "linkedin.com/baburaoadkane",
    sublabel: "Connect me",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/baburao-adkane-443476250/",
    image: "/imgs/linkedIn.jpg",
  },
  {
    id: 5,
    label: "GitHub",
    value: "github.com/baburaoadkane",
    sublabel: "Visit",
    icon: Github,
    link: "https://github.com/baburaoadkane",
    image: "/imgs/github.png",
  },
];