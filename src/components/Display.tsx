import StyledDisplay from "./styles/StyledDisplay";
import { createElement, ReactElement } from "react";

const Display = ({ calculatorString, result }: { calculatorString: string; result: string }): ReactElement => {
    return (
        <StyledDisplay className="display">
            <div>
                <p>Input: {calculatorString !== "" ? calculatorString : "?"}</p>
                <p>Result: {result}</p>
            </div>
        </StyledDisplay>
    );
};

export default Display;
