import { Component, createElement, ReactNode } from "react";
import { CalculatorContainerProps } from "../typings/CalculatorProps";
import CalculatorStyle from "./components/styles/CalculatorStyle";
import Display from "./components/Display";
import Buttons from "./components/Buttons";

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

    handleClick = (value: number | string): void => {
        if (typeof value === "number") {
            this.onClickHandlerNumber(value);
        } else if (value === "+") {
            this.onClickHandlerPlus();
        } else if (value === "C") {
            this.onClickHandlerReset();
        } else if (value === "=") {
            this.onClickHandlerCalculateResult();
        } else {
            alert(`${value} not yet implemented`);
        }
    };

    render(): ReactNode {
        return (
            <CalculatorStyle>
                <Display calculatorString={this.state.calculatorString} result={this.state.result} />
                <Buttons handleClick={this.handleClick} />
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
