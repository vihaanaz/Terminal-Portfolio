import { useContext, useEffect } from "react";
import { ProjectsIntro } from "../styles/Projects.styled";
import { Cmd, CmdDesc, CmdList, HelpWrapper } from "../styles/Help.styled";
import {
  checkRedirect,
  generateTabs,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Socials: React.FC = () => {
  // 🎯 TEMPLATE CUSTOMIZATION: Update the 'socials' array below with your own social links
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command makes redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "socials")) {
      socials.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const validSocialIds = socials.map(s => s.id.toString());
  const checkArg = () =>
    isArgInvalid(arg, "go", validSocialIds) ? (
      <Usage cmd="socials" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <HelpWrapper data-testid="socials">
      <ProjectsIntro>Here are my social links</ProjectsIntro>
      {socials.map(({ id, title, url, tab }) => (
        <CmdList key={title}>
          <Cmd>{`${id}. ${title}`}</Cmd>
          {generateTabs(tab)}
          <CmdDesc>- {url}</CmdDesc>
        </CmdList>
      ))}
      <Usage cmd="socials" marginY />
    </HelpWrapper>
  );
};

// Social media links and contact information
const socials = [
  {
    id: 1,
    title: "GitHub",
    url: "https://github.com/vihaan-dev",
    tab: 3,
  },
  {
    id: 2,
    title: "LinkedIn",
    url: "https://linkedin.com/in/vihaan-fullstack",
    tab: 2,
  },
  {
    id: 3,
    title: "Twitter",
    url: "https://twitter.com/vihaan_codes",
    tab: 2,
  },
  {
    id: 4,
    title: "Dev.to",
    url: "https://dev.to/vihaandev",
    tab: 3,
  },
  {
    id: 5,
    title: "Portfolio",
    url: "https://vihaan.dev",
    tab: 1,
  },
  {
    id: 6,
    title: "CodePen",
    url: "https://codepen.io/vihaan",
    tab: 2,
  },
];

export default Socials;
