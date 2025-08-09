<<<<<<< HEAD
import { useContext } from "react";
import { checkRedirect, getCurrentCmdArry } from "../../utils/funcs";
import { termContext } from "../Terminal";
import { Wrapper } from "../styles/Output.styled";

const Resume: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command makes redirect ===== */
  if (checkRedirect(rerender, currentCommand, "resume")) {
    // Create a downloadable resume link
    const resumeData = `
VIHAAN - Full Stack Developer
Email: vihaan.dev@gmail.com
GitHub: https://github.com/vihaan-dev
LinkedIn: https://linkedin.com/in/vihaan-fullstack

SUMMARY
Self-taught full stack developer passionate about building web applications.
Currently learning modern web technologies and best practices.

TECHNICAL SKILLS
• Frontend: HTML5, CSS3, JavaScript, React.js, TypeScript
• Backend: Node.js, Express.js, RESTful APIs
• Databases: MongoDB, MySQL, PostgreSQL
• Tools: Git, VS Code, npm, Vite

PROJECTS
• Terminal Portfolio - React & TypeScript portfolio website
• Task Manager App - Full stack CRUD application
• Weather Dashboard - API integration with modern UI
• E-commerce Landing Page - Responsive design

EDUCATION & CERTIFICATIONS
• JavaScript Algorithms and Data Structures - freeCodeCamp
• Responsive Web Design - freeCodeCamp  
• React Complete Guide - Udemy
• CS50x - Harvard University
    `;
    
    const blob = new Blob([resumeData], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Vihaan_Resume.txt';
    link.click();
    window.URL.revokeObjectURL(url);
  }

  return (
    <Wrapper>
      <p>📄 Downloading resume...</p>
      <p>Resume downloaded as 'Vihaan_Resume.txt'</p>
      <p>
        💡 <strong>Tip:</strong> You can also view my projects with `projects` or 
        check my skills with `skills`
      </p>
    </Wrapper>
  );
};

export default Resume;
=======
import { useContext } from "react";
import { checkRedirect, getCurrentCmdArry } from "../../utils/funcs";
import { termContext } from "../Terminal";
import { Wrapper } from "../styles/Output.styled";

const Resume: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command makes redirect ===== */
  if (checkRedirect(rerender, currentCommand, "resume")) {
    // Create a downloadable resume link
    const resumeData = `
VIHAAN - Full Stack Developer
Email: vihaan.dev@gmail.com
GitHub: https://github.com/vihaan-dev
LinkedIn: https://linkedin.com/in/vihaan-fullstack

SUMMARY
Self-taught full stack developer passionate about building web applications.
Currently learning modern web technologies and best practices.

TECHNICAL SKILLS
• Frontend: HTML5, CSS3, JavaScript, React.js, TypeScript
• Backend: Node.js, Express.js, RESTful APIs
• Databases: MongoDB, MySQL, PostgreSQL
• Tools: Git, VS Code, npm, Vite

PROJECTS
• Terminal Portfolio - React & TypeScript portfolio website
• Task Manager App - Full stack CRUD application
• Weather Dashboard - API integration with modern UI
• E-commerce Landing Page - Responsive design

EDUCATION & CERTIFICATIONS
• JavaScript Algorithms and Data Structures - freeCodeCamp
• Responsive Web Design - freeCodeCamp  
• React Complete Guide - Udemy
• CS50x - Harvard University
    `;
    
    const blob = new Blob([resumeData], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Vihaan_Resume.txt';
    link.click();
    window.URL.revokeObjectURL(url);
  }

  return (
    <Wrapper>
      <p>📄 Downloading resume...</p>
      <p>Resume downloaded as 'Vihaan_Resume.txt'</p>
      <p>
        💡 <strong>Tip:</strong> You can also view my projects with `projects` or 
        check my skills with `skills`
      </p>
    </Wrapper>
  );
};

export default Resume;
>>>>>>> a22a5d5eecf2e572f313f84ed8878ea56704c8cb
