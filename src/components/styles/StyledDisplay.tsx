import styled from "styled-components";

const StyledDisplay = styled.div`
    align-items: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    padding: 10px 20px;
    > div {
        background: darkgray;
        border-radius: 10px;
        flex: 1;
        font-family: "Lucida Console", Monaco, monospace;
        font-size: 30px;
        padding: 0px 8px;
        text-align: right;
        > p {
            font-size: large;
        }
    }
`;

export default StyledDisplay;
