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
    state: State = {
        inputNumber: 0,
        calculatorNumber: "",
        calculatorString: "",
        result: 0,
        previousValue: 0
    };

    handleClick = (value: number | string): void => {
        if (typeof value === "number") {
            this.onClickNumber(value);
        } else if (value === "+") {
            this.onClickNumberPlus();
        } else if (value === "C") {
            this.onClickReset();
        } else if (value === "=") {
            this.onClickCalculateResult();
        } else {
            alert(`${value} not yet implemented`);
        }
    };

    render(): ReactNode {
        const combinedResult: string = this.props.valueAttribute + this.state.result.toString();
        return (
            <CalculatorStyle>
                <Display calculatorString={this.state.calculatorString} result={combinedResult} />
                <Buttons handleClick={this.handleClick} />
            </CalculatorStyle>
        );
    }

    private onClickNumber(number: number): void {
        const { state: clickState } = this;
        this.setState({
            calculatorNumber: clickState.calculatorNumber + number,
            calculatorString: clickState.calculatorString + number,
            calculateClicked: false
        });
    }

    private onClickNumberPlus(): void {
        const { state: clickState } = this;
        this.setState({
            previousValue: Number(clickState.calculatorNumber),
            calculatorNumber: "",
            calculatorString: clickState.calculatorString + " + "
        });
    }
    private onClickCalculateResult(): void {
        const { state: clickState } = this;
        const resultOfCalculation = clickState.previousValue + Number(clickState.calculatorNumber);

        // Action to set Mendix value & trigger OCH event.
        this.props.valueAttribute?.setValue(resultOfCalculation.toString());
        if (this.props.onChange && this.props.onChange.canExecute) {
            this.props.onChange.execute();
        }

        this.setState({
            calculateClicked: true,
            result: resultOfCalculation,
            previousValue: resultOfCalculation,
            calculatorNumber: "",
            calculatorString: clickState.calculatorString + " = " + resultOfCalculation
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
