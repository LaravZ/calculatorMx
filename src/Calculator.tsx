import { Component, ReactNode, createElement } from "react";

import { CalculatorContainerProps } from "../typings/CalculatorProps";
import "./ui/Calculator.css";

export interface State {
    inputNumber: number
    calculatorNumber: string
    calculatorString: string
    result: number
    previousValue: number
}

export class Calculator extends Component<CalculatorContainerProps> {
    private readonly onClickHandlerNumber = this.onClickNumber.bind(this);
    private readonly onClickHandlerPlus = this.onClickNumberPlus.bind(this);
    private readonly onClickHandlerCalculateResult = this.onClickCalculateResult.bind(this);
    private readonly onClickHandlerReset = this.onClickReset.bind(this);
    state: State = {
        inputNumber: 0,
        calculatorNumber: '',
        calculatorString: '',
        result: 0,
        previousValue: 0
    }

    render(): ReactNode {
        return (
            <div>
                <button onClick={() => this.onClickHandlerNumber(1)}>1</button>
                <button onClick={() => this.onClickHandlerNumber(2)}>2</button>
                <button onClick={() => this.onClickHandlerNumber(3)}>3</button>
                <button onClick={() => this.onClickHandlerNumber(4)}>4</button>
                <button onClick={() => this.onClickHandlerNumber(5)}>5</button>
                <button onClick={() => this.onClickHandlerNumber(6)}>6</button>
                <button onClick={() => this.onClickHandlerNumber(7)}>7</button>
                <button onClick={() => this.onClickHandlerNumber(8)}>8</button>
                <button onClick={() => this.onClickHandlerNumber(9)}>9</button>
                <button onClick={() => this.onClickHandlerNumber(0)}>0</button>
                <button onClick={() => this.onClickHandlerPlus()}>+</button>
                <button onClick={() => this.onClickHandlerCalculateResult()}>=</button>
                <button onClick={() => this.onClickHandlerReset()}>C</button>
                <div>input : {this.state.calculatorString}</div>
                <div>Result : {this.state.result}</div>
            </div>
        );
    }

    private onClickNumber(number: number): void {
        this.setState({
            calculatorNumber: this.state.calculatorNumber + number,
            calculatorString: this.state.calculatorString + number,
            calculateClicked: false
        })
    }

    private onClickNumberPlus(): void {
        this.setState({
            previousValue: Number(this.state.calculatorNumber),
            calculatorNumber: '',
            calculatorString: this.state.calculatorString + ' + '
        })
    }
    private onClickCalculateResult(): void {
        let resultOfCalculation = this.state.previousValue + Number(this.state.calculatorNumber);
        this.setState({
            calculateClicked: true,
            result: resultOfCalculation,
            previousValue: resultOfCalculation,
            calculatorNumber: '',
            calculatorString: this.state.calculatorString + ' = ' + resultOfCalculation
        })
    }
    private onClickReset(){
        this.setState({
            inputNumber: 0,
            calculatorNumber: '',
            calculatorString: '',
            result: 0,
            previousValue: 0
        })
    }

}


 //<input type = "number" value= {this.state.inputNumber} onChange={e => this.onTodoChange(Number(e.target.value))}/>
    // onTodoChange(value: number){
    //     this.setState({
    //          inputNumber: value
    //     });
    // }