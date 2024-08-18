import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

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

export const ABOUT_TEXT = `A dedicated Software Engineer, currently developing robust server-side components using Java JRE 11, PostgreSQL, and Tomcat 9 at IpserLab. With over a year of professional experience, I possess proficiency in a wide range of engineering technologies. Passionate about problem-solving, I thrive on the challenge of breaking down complex issues into manageable solutions. My enthusiasm for technology drives me to continuously learn and adapt to new advancements.`;

export const EXPERIENCES = [
  {
    year: "June 2024 - Present",
    role: "Software Engineer",
    company: "IpserLab",
    description: `• Engineering server-side components utilizing Java JRE 11, PostgreSQL, Tomcat 9  
                  • Developing a robust E-Commerce website with ReactJS, HTML, CSS frontend and Stripe API `,
    technologies: ["Java", "React.js", "SQL", "HTML", "CSS"],
  },
  {
    year: "Apr 2021 - June 2022",
    role: "Software Engineer I",
    company: "Amazon",
    description: `• Developed and maintained scalable, high-performance software for Amazon's cloud-based services, focusing on optimizing system efficiency and reliability.
                  • Collaborated with cross-functional teams to design, develop, test, and deploy features improving user experience
                  • Utilized core Amazon Web Services (AWS) technologies, including EC2 and Lambda, to build applications and services. `,
    technologies: ["HTML", "CSS", "ReactJS", "Django", "AWS"],
  },
  {
    year: "Jul 2020 – Sep 2020",
    role: "Machine Learning Intern",
    company: "Indian Servers",
    description: `• Placed 1st in internal company contest on Mobile Price Range Prediction with accuracy of 97.5 percent against 172 interns 
                  • Led a team of 4 to construct a Real-Time Fatigue Detection System with OpenCV and Deep Learning as final project `,
    technologies: ["Python", "PyTorch", "OpenCV", "Numpy", "Pandas"],
  }
];

export const PROJECTS = [
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
  address: "1629 Commonwealth Ave, Boston, MA",
  phoneNo: "+1 (972)672-1506 ",
  email: "vijaykesari99@outlook.com",
};
