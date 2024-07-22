import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `Problem Solver. Adaptive. Forever Student`;

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
    role: "Software Engineer",
    company: "Subhash AgroTech",
    description: `• Led the overhaul of the website, resulting in a 30% increase in website traffic within the first three months
                  • Integrated ReactJS with Django REST APIs, netting 40% improvement in load times, 25% increase in system reliability 
                  • Implemented microservices architecture with Kubernetes and Docker. Deployed on AWS EC2 cloud. `,
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
