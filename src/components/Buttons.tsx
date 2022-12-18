import { createElement, ReactElement } from "react";
import ButtonGrid from "./styles/ButtonGrid";
import StyledButton from "./styles/StyledButton";

const Buttons = ({ handleClick }: { handleClick: (value: number | string) => void }): ReactElement => {
    return (
        <ButtonGrid className="buttons">
            <StyledButton onClick={() => handleClick(1)}>1</StyledButton>
            <StyledButton onClick={() => handleClick(2)}>2</StyledButton>
            <StyledButton onClick={() => handleClick(3)}>3</StyledButton>
            <StyledButton onClick={() => handleClick("/")}>/</StyledButton>
            <StyledButton onClick={() => handleClick(4)}>4</StyledButton>
            <StyledButton onClick={() => handleClick(5)}>5</StyledButton>
            <StyledButton onClick={() => handleClick(6)}>6</StyledButton>
            <StyledButton onClick={() => handleClick("*")}>*</StyledButton>
            <StyledButton onClick={() => handleClick(7)}>7</StyledButton>
            <StyledButton onClick={() => handleClick(8)}>8</StyledButton>
            <StyledButton onClick={() => handleClick(9)}>9</StyledButton>
            <StyledButton onClick={() => handleClick("-")}>-</StyledButton>
            <StyledButton onClick={() => handleClick("C")}>C</StyledButton>
            <StyledButton onClick={() => handleClick(0)}>0</StyledButton>
            <StyledButton onClick={() => handleClick("=")}>=</StyledButton>
            <StyledButton onClick={() => handleClick("+")}>+</StyledButton>
        </ButtonGrid>
    );
};

export default Buttons;
