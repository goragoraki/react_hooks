"use client"
import { useTheme, useToggleTheme } from "./themeProvider";
import style from "./functionContext.module.css";

export default function FunctionContextComponent() {

    const darkTheme = useTheme();
    const toggleFunction = useToggleTheme();


    return (
        <div>
            <button onClick={toggleFunction}>toggle theme</button>
            <div className={darkTheme ? style.dark : style.white}>
                function theme
            </div>
        </div>
    )
}