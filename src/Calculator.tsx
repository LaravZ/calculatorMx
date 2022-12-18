import { Component, createElement, ReactNode } from "react";

import { CalculatorContainerProps } from "../typings/CalculatorProps";
import ButtonGrid from "./components/styles/ButtonGrid";
import StyledDisplay from "./components/styles/StyledDisplay";
import StyledButton from "./components/styles/StyledButton";
import CalculatorStyle from "./components/styles/CalculatorStyle";

export interface State {
    inputNumber: number;
    calculatorNumber: string;
    calculatorString: string;
    result: number;
    previousValue: number;
}

export class Calculator extends Component<CalculatorContainerProps> {
    private readonly onClickHandlerNumber = this.onClickNumber.bind(this);
    private readonly onClickHandlerPlus = this.onClickNumberPlus.bind(this);
    private readonly onClickHandlerCalculateResult = this.onClickCalculateResult.bind(this);
    private readonly onClickHandlerReset = this.onClickReset.bind(this);
    state: State = {
        inputNumber: 0,
        calculatorNumber: "",
        calculatorString: "",
        result: 0,
        previousValue: 0
    };

    render(): ReactNode {
        return (
            <CalculatorStyle>
                <StyledDisplay className="display">
                    <div>
                        <p>Input: {this.state.calculatorString !== "" ? this.state.calculatorString : "?"}</p>
                        <p>Result: {this.state.result}</p>
                    </div>
                </StyledDisplay>
                <ButtonGrid className="buttons">
                    <StyledButton onClick={() => this.onClickHandlerNumber(1)}>1</StyledButton>
                    <StyledButton onClick={() => this.onClickHandlerNumber(2)}>2</StyledButton>
                    <StyledButton onClick={() => this.onClickHandlerNumber(3)}>3</StyledButton>
                    <StyledButton onClick={() => this.onClickHandlerPlus()}>/</StyledButton>
                    <StyledButton onClick={() => this.onClickHandlerNumber(4)}>4</StyledButton>
                    <StyledButton onClick={() => this.onClickHandlerNumber(5)}>5</StyledButton>
                    <StyledButton onClick={() => this.onClickHandlerNumber(6)}>6</StyledButton>
                    <StyledButton onClick={() => this.onClickHandlerPlus()}>*</StyledButton>
                    <StyledButton onClick={() => this.onClickHandlerNumber(7)}>7</StyledButton>
                    <StyledButton onClick={() => this.onClickHandlerNumber(8)}>8</StyledButton>
                    <StyledButton onClick={() => this.onClickHandlerNumber(9)}>9</StyledButton>
                    <StyledButton onClick={() => this.onClickHandlerPlus()}>-</StyledButton>
                    <StyledButton onClick={() => this.onClickHandlerReset()}>C</StyledButton>
                    <StyledButton onClick={() => this.onClickHandlerNumber(0)}>0</StyledButton>
                    <StyledButton onClick={() => this.onClickHandlerCalculateResult()}>=</StyledButton>
                    <StyledButton onClick={() => this.onClickHandlerPlus()}>+</StyledButton>
                </ButtonGrid>
            </CalculatorStyle>
        );
    }

    private onClickNumber(number: number): void {
        const { state: clickstate } = this;
        this.setState({
            calculatorNumber: clickstate.calculatorNumber + number,
            calculatorString: clickstate.calculatorString + number,
            calculateClicked: false
        });
    }

    private onClickNumberPlus(): void {
        const { state: clickstate } = this;
        this.setState({
            previousValue: Number(clickstate.calculatorNumber),
            calculatorNumber: "",
            calculatorString: clickstate.calculatorString + " + "
        });
    }
    private onClickCalculateResult(): void {
        const { state: clickstate } = this;
        const resultOfCalculation = clickstate.previousValue + Number(clickstate.calculatorNumber);
        this.setState({
            calculateClicked: true,
            result: resultOfCalculation,
            previousValue: resultOfCalculation,
            calculatorNumber: "",
            calculatorString: clickstate.calculatorString + " = " + resultOfCalculation
        });
    }
    private onClickReset(): void {
        this.setState({
            inputNumber: 0,
            calculatorNumber: "",
            calculatorString: "",
            result: 0,
            previousValue: 0
        });
    }
}
