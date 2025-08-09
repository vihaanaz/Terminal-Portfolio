import { useContext } from "react";
import _ from "lodash";
import { Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";

const Email: React.FC = () => {
  // 🎯 TEMPLATE CUSTOMIZATION: Update the email address below
  const { history, rerender } = useContext(termContext);
  
  // Professional email address
  const email = "vihaan.dev@gmail.com";

  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  if (rerender && currentCommand[0] === "email" && currentCommand.length <= 1) {
    window.open("mailto:" + email, "_self");
  }

  return (
    <Wrapper>
      <span>{email}</span>
    </Wrapper>
  );
};

export default Email;
