import styled from '@emotion/styled';
import { useState } from 'react';
import { TerminalContextProvider, ReactTerminal } from "react-terminal";
import Help from './components/Help';

const Container = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "50px 100px",
    width: "100%",
    float: "left",
    gap: "2rem",
});

const Term = styled.div({
    textAlign: "center",
    height: "35rem",
    width: "46.6rem",
})

const Name = styled.h1({
    fontFamily: "Helvetica Neue"
});
const P = styled.p({
    margin: "0",
    paddingLeft: "5em",
    textIndent: "-5em"
});

function App() {
    const [theme, setTheme] = useState("gruvbox");

    const changeTheme = (theme: string) =>{
      const defaultThemes = [
        "light",
        "dark",
        "material-light",
        "material-dark",
        "material-ocean",
        "matrix",
        "dracula",
        "gruvbox",
      ];
      if (!defaultThemes.includes(theme)) {
        return `Theme ${theme} not valid. Try one of ${defaultThemes.join(", ")}`;
      }
      setTheme(theme);
    };


    const commands = {
        help: <Help />,
        theme: (theme: string) => changeTheme(theme),
        experience: (theme: string) => changeTheme(theme),
        projects: (theme: string) => changeTheme(theme),
        education: (theme: string) => changeTheme(theme),
    };

    const customThemes = {
        gruvbox: {
            themeBGColor: "#3c3836",
            themeToolbarColor: "#928374",
            themeColor: "#fbf1c7",
            themePromptColor: "#fb4934"
        }
    };
    return (
        <Container>
            <Name>Aaron Knudtson</Name>
            <TerminalContextProvider>
                <Term>
                    <ReactTerminal
                        welcomeMessage={<P>Welcome to my homepage. Try entering "help" to learn more.</P>}
                        theme={theme}
                        prompt=">>"
                        themes={customThemes}
                        commands={commands}
                        errorMessage={'ERROR: command not found. Try entering "help" to see a list of valid commands'}
                        />
                </Term>
            </TerminalContextProvider>
        </Container> 
    );
}

export default App;
