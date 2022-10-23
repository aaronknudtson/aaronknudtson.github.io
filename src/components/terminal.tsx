import styled from "@emotion/styled";

const TermBody = styled.div({
    width: "100%",
    height: "400px",
    backgroundColor: "black",
    padding: "40px",
    borderRadius: "1rem"
});

const TermText = styled.code({
    fontFamily: '"Fira Mono", monospace',
    color: "white",
});

function Terminal() {

    return <TermBody>
            <TermText>Welcome</TermText>
        </TermBody>;
};

export default Terminal;
