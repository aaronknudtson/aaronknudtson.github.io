import styled from '@emotion/styled'
import Terminal from "./components/terminal"

const Container = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "50px 100px",
    width: "100%",
    float: "left",
    gap: "2rem",
});
const Name = styled.h1({
    fontFamily: "Helvetica Neue"
});

function App() {
    return (
        <Container>
            <Name>Aaron Knudtson</Name>
            <Terminal />
        </Container> 
    );
}

export default App;
