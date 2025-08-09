import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";
import { portfolioConfig } from "../../config/portfolio.config";

const About: React.FC = () => {
  // 🎯 TEMPLATE CUSTOMIZATION: Edit personal info in src/config/portfolio.config.ts
  const { personal } = portfolioConfig;
  
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>{personal.name}</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>{personal.title}</HighlightAlt>
        {personal.location && ` based in ${personal.location}`}.
      </p>
      {personal.description.map((line, index) => (
        <p key={index}>
          {line}
        </p>
      ))}
    </AboutWrapper>
  );
};

export default About;
