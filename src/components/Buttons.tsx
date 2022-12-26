import { createElement, ReactElement } from "react";
import ButtonGrid from "./styles/ButtonGrid";
import StyledButton from "./styles/StyledButton";

const Buttons = ({ handleClick }: { handleClick: (value: number | string) => void }): ReactElement => {
    const values: Array<string | number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "/", "*", "-", "C", "=", "+"];
    const buttons: ReactElement[] = [];
    values.forEach((item: number | string) =>
        buttons.push(<StyledButton onClick={() => handleClick(item)}>{item}</StyledButton>)
    );
    return <ButtonGrid className="buttons">{buttons}</ButtonGrid>;
};

export default Buttons;
