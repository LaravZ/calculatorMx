/**
 * This file was generated from Calculator.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue, EditableValue } from "mendix";
import { Big } from "big.js";

export type BootstrapStyleEnum = "default" | "primary" | "success" | "info" | "inverse" | "warning" | "danger";

export type CalculatorTypeEnum = "badge" | "label";

export interface CalculatorContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    valueAttribute?: EditableValue<string | Big>;
    calculatorValue: string;
    bootstrapStyle: BootstrapStyleEnum;
    calculatorType: CalculatorTypeEnum;
    onClickAction?: ActionValue;
}

export interface CalculatorPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    valueAttribute: string;
    calculatorValue: string;
    bootstrapStyle: BootstrapStyleEnum;
    calculatorType: CalculatorTypeEnum;
    onClickAction: {} | null;
}
