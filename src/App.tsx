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
const H = styled.p({
    margin: "0"
})
const P = styled(H)({
    paddingLeft: "2em",
    textIndent: "-2em"
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
        experience: <div>
            <P>- Head of engineering at startup RillaFi: 1 year. Lead of Product Development, involves full stack.</P>
            <P>- Freelance Full Stack Developer: 6 months.</P>
            <P>- Graduate Research Assistant: 2.5 years. Ran simulations in Fortran and Matlab.</P>
            <br/>
            <P>See my resume for more details!</P>
        </div>,
        projects: <div>
            <P><b>asciifire</b> - A rust package (see on <a target="_blank" rel="noreferrer" href="https://github.com/aaronknudtson">crates.io</a>) that converts images into ascii text.</P>
            <P><b>LumberJacked</b> - A WIP website to log workouts and track progress. <a target="_blank" rel="noreferrer" href="https://github.com/aaronknudtson/LumberJacked">github</a></P>
            <br/>
            <P>See more on my <a target="_blank" rel="noreferrer" href="https://github.com/aaronknudtson">github</a></P>
        </div>,
        education: <div>
            <P>- Bachelor's in Mechanical Engineering from North Dakota State University (2019)</P>
            <P>- Master's degree in Mechanical Engineering from the University of Florida (2021)</P>
            <P>I have since received instruction and certification in various courses on Udemy, and try to engage in a new class every month at least.</P>
            <br/>
            <P>See my resume for more details!</P>
        </div>,
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
                        welcomeMessage={<H>Welcome to my homepage. This is very much a work in progress. Try entering "help" to learn more, or visit <a href="https://github.com/aaronknudtson/aaronknudtson.github.io">here</a> to view progress.</H>}
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
