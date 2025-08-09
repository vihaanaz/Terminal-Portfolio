import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";
import { portfolioConfig } from "../../config/portfolio.config";

const Welcome: React.FC = () => {
  // 🎯 TEMPLATE CUSTOMIZATION: Edit welcome messages in src/config/portfolio.config.ts
  const { personal, portfolio, welcome } = portfolioConfig;
  
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {welcome.asciiArt.desktop}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {welcome.asciiArt.mobile}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to {personal.name}'s terminal portfolio. (Version {portfolio.version})</div>
        <Seperator>----</Seperator>
        {portfolio.isTemplate ? (
          <>
            <div>
              {welcome.messages.templateNotice}{" "}
              <Link href={welcome.messages.templateUrl}>
                {welcome.messages.templateCredit}
              </Link>
              {" "}{welcome.messages.templateReason}
            </div>
            <Seperator>----</Seperator>
            <div>
              {welcome.messages.encouragement}
            </div>
          </>
        ) : (
          <div>
            This project's source code can be found in this project's{" "}
            <Link href={portfolio.yourRepo || "#"}>
              GitHub repo
            </Link>
            .
          </div>
        )}
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
                       ,##,,eew,
                     ,##############C
                  a###############@##
                 7####^\`^"7W7^"@####
                 @#@b\`         ^@#@^
                  ##^,,,,   ,,,,^#^
                 ,,@######"#######=
                  .''555"\` '5555b|
                  T"@  ,,,^,mg,@,*
                     %p||\`~~'.#\`
                      ^Wp  ,#T
                     :b''@@b^}
                  ,^     \` 'b 3-
              .<\` 'p   ^v   #   b   *.
            {      }   #"GpGb   [
            C      3 * @#######Nl      \`
           '            ^@##b     ($    !
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
