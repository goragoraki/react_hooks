// useMemo와의 차이점
// useMemo는 콜백함수의 리턴값을 저장하는반면
// useCallback은 콜백함수 자체를 저장하기때문에 파라미터도 전달할 수 있따!

"use client"
import { useCallback, useState } from "react";
import style from "@/components/functionContext.module.css";
import List from "@/components/list";

export default function Page() {
    const [dark, setDark] = useState(false);
    const [number, setNumber] = useState(0);

    const getItems = useCallback((increment: number): number[] => {
        return [number + increment, number + increment + 1, number + increment + 2];
    }, [number]);

    const onClickTheme = () => {
        setDark(prevDark => !prevDark)
    }

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNumber(+e.target.value);
    }

    return (
        <div>
            <input onChange={onChangeInput} />
            <button onClick={onClickTheme}>chage theme</button>
            <div className={dark ? style.dark : style.white}></div>
            <List getItems={getItems} />
        </div>
    )
}