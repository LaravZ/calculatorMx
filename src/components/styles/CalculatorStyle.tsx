import styled from "styled-components";

const CalculatorStyle = styled.main`
    align-items: center;
    border-radius: 10px 10px 50px 50px;
    display: flex;
    flex-flow: column nowrap;
    margin: 4rem auto 0 auto;
    padding: 50px;
    width: 450px;

    > header {
        align-self: flex-start;
        margin-bottom: 20px;
        font-size: 18px;
        font-weight: bold;
    }

    .display {
        margin-bottom: 50px;
        width: 100%;
    }
`;

export default CalculatorStyle;
