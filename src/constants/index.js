import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Problem Solver. Adaptive. Forever Student`;

export const quotes = [
  '"May the Force be with you."',
  '"I\'m gonna make him an offer he can\'t refuse."',
  '"You can\'t handle the truth!"',
  '"I\'ll be back."',
  '"Life is like a box of chocolates. You never know what you\'re gonna get."',
  '"I see dead people."',
  '"Hasta la vista, baby."',
  '"Why so serious?"',
  '"Bond. James Bond."',
  '"I am your father." ',
  '"Houston, we have a problem."',
  '"Go ahead, make my day."',
  '"Here\'s Johnny!"',
  '"To infinity and beyond!"',
  '"I’ll take a potato chip... and eat it!"',
  '"Believe it!"',
  '"I am going to be King of the Pirates!"',
  '"I am justice!"',
  '"I don\'t know everything. I just know what I know"',
  '"Bang."',
  '"I am the hope of the universe. I am the answer to all living things that cry out for peace." ',
  '"People\'s lives don\'t end when they die, it ends when they lose faith."',
  '"I see now that the circumstances of one\'s birth are irrelevant. It is what you do with the gift of life that determines who you are."',
  '"I\'ll be back. Count on it."',
  '"In the name of the Moon, I will punish you!"',
  '"The moment you think of giving up, think of the reason why you held on so long."',
  '"A lesson without pain is meaningless. That’s because no one can gain without sacrificing something."',
];

export const ABOUT_TEXT = `I possess proficiency in a wide range of engineering technologies. Passionate about problem-solving, I thrive on the challenge of breaking down complex issues into manageable solutions. My enthusiasm for technology drives me to continuously learn and adapt to new advancements.`;

export const EXPERIENCES = [
  {
    year: "Feb 2024 - Feb 2025",
    role: "Software Engineer Intern",
    company: "Sony Electronics",
    description: `•	Built scalable backend microservices architecture including notification service for push alerts, user profile management service, content metadata service with proper service isolation, API versioning, and comprehensive documentation
                  •	Designed generative AI pipelines using vector embeddings and similarity search algorithms for semantic content matching, enabling intelligent game recommendations for PlayStation users
                  •	Developed MongoDB data processing workflows with optimized queries and indexing for high-performance analytics
                  •	Created MongoDB migration scripts and data validation processes for production deployments`,
    technologies: ["Python", "MongoDB", "SQL", "Node.js", "GenAI", "NLP"],
  },
  {
    year: "Apr 2021 - Aug 2022",
    role: "Software Engineer",
    company: "Cognizant",
    description: `•	Built payment processing microservice using C# and .NET Core, handling transaction validation and MongoDB data persistence for e-commerce platform serving 50K+ daily users
                  •	Developed user authentication API with JWT token management and role-based access control, integrating with existing Active Directory services
                  •	Optimized MongoDB aggregation pipelines for customer analytics dashboard, reducing query execution time from 8 seconds to 2 seconds through proper indexing strategies
                  •	Developed custom validation attributes for .NET controllers, eliminating 200+ lines of repetitive validation code across 15 API endpoints`,
    technologies: ["C#", ".NET Core", "MongoDB"],
  },
  {
    year: "Jul 2020 – Sep 2020",
    role: "Machine Learning Intern",
    company: "Indian Servers",
    description: `• Placed 1st in internal company contest on Mobile Price Range Prediction with accuracy of 97.5 percent against 172 interns 
                  • Led a team of 4 to construct a Real-Time Fatigue Detection System with OpenCV and Deep CNNs `,
    technologies: ["Python", "PyTorch", "OpenCV", "Numpy", "Pandas"],
  }
];

export const PROJECTS = [
  {
    title: "Spaces - A new social network!",
    image: project4,
    description:`• Architected and implemented a backend system using Django, enabling real-time features and WebSocket communication 
                 • Engineered RESTful APIs and WebSocket endpoints for messaging, live notifications using REST Framework and Django Channels 
                 • Integrated WebRTC technology for voice communication rooms with STUN/TURN server configuration for NAT traversal 
                 • Designed and implemented a scalable database architecture using PostgreSQL with Django ORM `,
    technologies: ["C#", "SwiftUI", "MongoDB", "Docker", "REST APIs", "Python"],
  },
  {
    title: "NCVS – Data Analysis to Identify Victims of Bullying in Children",
    image: project1,
    description:
      `• Boosted performance by 30% through exploratory data analysis and preprocessing techniques. Created multiple datasets for models by UpSampling and DownSampling using SMOTE and Caret libraries, increasing performance by 20% on average 
       • Commanded the execution of 7 different classification machine learning models including regression, clustering, Tree-based models to find best model with highest TPR value of 75.32%  `,
    technologies: ["R"],
  },
  {
    title: "Academix – Web-based Course Management System",
    image: project2,
    description:
    `• Architected and fine-tuned backend architecture using Django, encompassing models, views, and integral functionalities 
     • Adhered to Agile Software development life cycle 
     • Led a dynamic team of 6, articulating backend requirements to ensure synchronized frontend development `,
    technologies: ["HTML", "CSS", "ReactJS", "Django"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "• A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "ReactJS", "Tailwind CSS", "Framer-Motion"],
  },
];

export const CONTACT = {
  address: "Dallas, TX",
  phoneNo: "+1 (972)672-1506 ",
  email: "vkesari99@outlook.com",
};
