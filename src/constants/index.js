import projects1 from "../assets/project1.jpg";
import projects2 from "../assets/project2.jpg";
import projects3 from "../assets/project3.jpg";
import projects4 from "../assets/project4.jpg";
import projects5 from "../assets/project5.jpg";

import person1 from "../assets/person1.webp";
import person2 from "../assets/person2.webp";
import person3 from "../assets/person3.webp";
import person4 from "../assets/person4.webp";
import person5 from "../assets/person5.webp";
import person6 from "../assets/person6.webp";

export const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export const HERO_CONTENT = {
  greeting: "Hey there! 🖐️",
  introduction:
    "I’m Udavin Wijesundara, a creative developer as well as a photographer, I am passinate in trying new things and learning new skills.",
  description:
    "I am currenly a intern at a Software Company and also a Freelance worker",
  resumeLinkText: "View Github",
  resumeLink: "https://github.com/udavinw",
};

export const PROJECTS = [
  {
    name: "Online Photobooth",
    description: "A virtual photobooth experience",
    image: projects1,
    link: "https://github.com/udavinw/onlinephotobooth",
  },
  {
    name: "Strong Password Generator",
    description: "A secure password generator",
    image: projects2,
    link: "https://github.com/udavinw/Password-Generator",
  },
  {
    name: "Blog Website Using Laravel",
    description: "A blog website using Laravel Framework",
    image: projects3,
    link: "https://github.com/udavinw/Laravel-Blog",
  },
  {
    name: "Queen Spriky MD WhatsApp Bot",
    description:
      "WhatsApp Bot project to enhance the user experience.",
    image: projects4,
    link: "https://github.com/uwtechshow-official/Queen-Spriky-MD",
  },
  {
    name: "Github Profile Visializer",
    description: "A GitHub profile visualizer",
    image: projects5,
    link: "https://github.com/udavinw/GitHub-Profile-Visualizer",
  },
  // {
  //   name: "WellNest",
  //   description: "A wellness app for mental and physical health improvement",
  //   image: projects6,
  //   link: "https://github.com/your-github/wellnest",
  // },
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "I am a versatile developer with expertise in both frontend and backend technologies, crafting digital experiences that blend functionality with visual appeal. My frontend skills span HTML, CSS, JavaScript, and modern frameworks like React and Tailwind CSS, allowing me to build responsive and intuitive user interfaces. Currently, I'm expanding my knowledge in React and Flutter to create even more dynamic and cross-platform applications.",
    "On the backend, I work with databases such as MySQL and Firebase to create robust data management systems that power my applications. My dual focus on frontend aesthetics and backend functionality enables me to develop comprehensive solutions that deliver seamless user experiences while meeting technical requirements. Beyond coding, I bring a photographer's eye to my work, with a portfolio of thoughtful photography that influences my design sensibilities and attention to visual detail.",
  ],
};

export const EXPERIENCES = [
  {
    yearRange: "2024 — Now",
    title: "Intern at Enigma Solutions",
    location: "Sri Lanka",
    description: [
      "Web Application Development using Laravel Framework.",
    ],
  },
  {
    yearRange: "2023 — Now",
    title: "Photographer",
    location: "Sri Lanka",
    description: [
      "Portrait Photography.",
      "Event Photography.",
    ],
  },
  {
    yearRange: "2022 — Now",
    title: "Freelance Developer",
    location: "Remote",
    description: [
      "Full Stack Web App Development",
      "E-commerce Website Development",
      "Website Development",
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    title: "Frontend Engineer, Google",
    feedback:
      "Jason is one of the most talented developers I've had the pleasure of working with. His skills in frontend development are unparalleled, and his ability to solve complex problems with ease is truly impressive. His leadership and communication make him a standout developer in any team.",
    image: person1,
  },
  {
    name: "Michael Anderson",
    title: "Product Manager, Facebook",
    feedback:
      "Jason was instrumental in driving our product forward. His keen eye for detail and ability to work cross-functionally made him an invaluable asset. He consistently delivers top-quality work and elevates the projects he's involved in. He’s a natural leader, and his expertise in frontend technologies is outstanding.",
    image: person2,
  },
  {
    name: "Emily Davis",
    title: "Lead Designer, Amazon",
    feedback:
      "Working with Jason has been a phenomenal experience. His deep understanding of both design and development allowed us to push the boundaries of what we could achieve. His creative problem-solving abilities and commitment to quality are second to none.",
    image: person3,
  },
  {
    name: "David Lee",
    title: "Senior Developer, Microsoft",
    feedback:
      "Jason's contribution to our team was nothing short of amazing. His technical knowledge, combined with his passion for creating user-friendly and scalable applications, made a significant impact on the success of our product. He’s always willing to go the extra mile to ensure the best outcome.",
    image: person4,
  },
  {
    name: "Laura Martinez",
    title: "CTO, Shopify",
    feedback:
      "Jason brought a level of expertise and professionalism to our team that was greatly appreciated. His focus on scalability and clean code ensured that our platform could handle large traffic loads without compromising performance. His work ethic and collaboration skills are impeccable.",
    image: person5,
  },
  {
    name: "Chris Brown",
    title: "Co-founder, Stripe",
    feedback:
      "Jason combines technical proficiency with excellent leadership skills. He was a key part of our success, helping us build a robust and scalable product. His attention to detail and ability to manage teams made him an invaluable part of the company.",
    image: person6,
  },
];

export const CONTACT_CONTENT = {
  headline: "LET'S WORK ON SOMETHING GREAT",
  description:
    "I'm excited to collaborate on projects that push boundaries and create meaningful impact. Let's build something innovative and exceptional together.",
  email: "udavin@gmail.com",
  socialLinks: [
    {
      platform: "Instagram",
      url: "https://www.instagram.com/udavin_wijesundara?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      ariaLabel: "Follow me on Instagram",
      icon: "RiInstagramFill",
    },
    
    {
      platform: "GitHub",
      url: "https://github.com/udavinw",
      ariaLabel: "View my GitHub profile",
      icon: "RiGithubFill",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/udavin-wijesundara-a635201aa/",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiLinkedinFill",
    },
  ],
  footerText: `© ${new Date().getFullYear()} Udavin Wijesundara. All rights reserved.`,
};
