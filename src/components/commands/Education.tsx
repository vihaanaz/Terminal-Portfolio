import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "Full Stack Web Development",
    desc: "Self-taught | 2023 - Present",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    desc: "freeCodeCamp Certification | 2023",
  },
  {
    title: "Responsive Web Design",
    desc: "freeCodeCamp Certification | 2023",
  },
  {
    title: "React - The Complete Guide",
    desc: "Udemy Course by Maximilian Schwarzmüller | 2023",
  },
  {
    title: "Node.js & Express.js Bootcamp",
    desc: "Online Learning Platform | 2023",
  },
  {
    title: "Computer Science Fundamentals",
    desc: "CS50x - Harvard University (Online) | 2023",
  },
];

export default Education;
