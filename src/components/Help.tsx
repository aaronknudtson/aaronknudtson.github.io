import styled from '@emotion/styled';
import { ReactElement } from "react";

function Help() {
const P = styled.p({
    margin: "0",
    paddingLeft: "5em",
    textIndent: "-5em"
});
    const HelpMsg = (cmd: string, text: string) => (
        <P>
            <strong>{cmd}</strong> - {text}
        </P>
    )
    const helpMsg: {[key: string]: ReactElement} = {
        theme: HelpMsg("theme", "Change theme. Valid themes - light, dark, material-light, material-dark, material-ocean, matrix, dracula, and gruvbox"),
        experience: HelpMsg("experience", "Outputs list of relevant job experience"),
        projects: HelpMsg("projects", "Outputs detailed list of projects"),
        education: HelpMsg("education", "Outputs degree information and additional education"),
    };
    return (<div>
        {Object.keys(helpMsg).map((cmd)=> helpMsg[cmd] as any)}
    </div>)
}
export default Help;
