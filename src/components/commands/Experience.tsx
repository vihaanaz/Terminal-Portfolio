import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Experience: React.FC = () => {
  return (
    <Wrapper data-testid="experience">
      <EduIntro>Here is my development experience and journey!</EduIntro>
      {experiences.map(({ title, desc, period }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
          <div style={{ fontSize: "0.9rem", color: "#888", marginTop: "4px" }}>{period}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const experiences = [
  {
    title: "Full Stack Developer (Self-Learning)",
    desc: "Building personal projects while learning modern web development. Focus on React, Node.js, and database integration.",
    period: "2023 - Present",
  },
  {
    title: "Personal Project Development",
    desc: "Developed 6+ web applications including terminal portfolio, task manager, and weather dashboard. Gained experience in full development lifecycle.",
    period: "2023 - Present",
  },
  {
    title: "Open Source Contributions",
    desc: "Contributing to open source projects on GitHub. Learning collaborative development and version control best practices.",
    period: "2023 - Present",
  },
  {
    title: "Daily Coding Practice",
    desc: "Solving coding challenges on platforms like LeetCode, HackerRank, and Codewars. Strengthening algorithmic thinking and problem-solving skills.",
    period: "2023 - Present",
  },
  {
    title: "Frontend Development Focus",
    desc: "Started web development journey with HTML, CSS, and JavaScript. Built responsive websites and learned modern CSS frameworks.",
    period: "Early 2023",
  },
];

export default Experience;
