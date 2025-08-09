import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Skills: React.FC = () => {
  return (
    <Wrapper data-testid="skills">
      <EduIntro>Here are my technical skills and technologies!</EduIntro>
      {skillCategories.map(({ category, skills }) => (
        <EduList key={category}>
          <div className="title">{category}</div>
          <div className="desc">{skills.join(" • ")}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const skillCategories = [
  {
    category: "Frontend Development",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "TypeScript", "Responsive Design", "Styled Components"],
  },
  {
    category: "Backend Development", 
    skills: ["Node.js", "Express.js", "RESTful APIs", "JSON", "Authentication", "Database Integration"],
  },
  {
    category: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Python", "HTML", "CSS", "SQL"],
  },
  {
    category: "Tools & Technologies",
    skills: ["Git & GitHub", "VS Code", "npm/yarn", "Vite", "Webpack", "Chrome DevTools"],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
  },
  {
    category: "Currently Learning",
    skills: ["GraphQL", "Docker", "AWS", "React Native", "Next.js", "Microservices"],
  },
  {
    category: "Soft Skills",
    skills: ["Problem Solving", "Self-Learning", "Team Collaboration", "Project Management", "Documentation"],
  },
];

export default Skills;
