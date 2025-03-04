"use client"
import { useEffect, useMemo, useState } from "react"
import style from "@/components/functionContext.module.css"

export default function Page() {

    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    const doubleNumber = useMemo(() => {
        return slowFunction(number);
    }, [number])

    const onClickThemeButton = () => {
        setDark(prevDark => !prevDark);
    }

    const exampleObject = {
        id: 1,
        name: "ko",
    };

    const exampleObject2 = useMemo(() => {
        return {
            id: 1,
            name: "ko",
        }
    }, [dark])

    useEffect(() => {
        console.log("re-render");
    }, [exampleObject])

    useEffect(() => {
        console.log("re-render2");
    }, [exampleObject2])

    return (
        <div>
            <input type="number" value={number} onChange={(e) => setNumber(+(e.target.value))} />
            <button onClick={onClickThemeButton}>change theme</button>
            <div className={dark ? style.dark : style.white}>
                {doubleNumber}
            </div>
        </div>
    )
}

function slowFunction(num: number) {
    for (let i = 0; i < 1000000000; i++) {

    }
    return num * 2;
}

// {id:1, color:"dark"} 와 {id:1, color:"dark"} 는 다르다
// 객체 or array => 레퍼런스가 다르기때문에
// 그렇기 때문에 useMemo를 써주면 리렌더링을 막을 수 있다