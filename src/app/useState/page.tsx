"use client"

import { useState } from "react";


function countInitial1() {
    console.log("run function1");
    return 4;
}

const countInitial2 = () => {
    console.log("run function2");
    return 4;
}

export default function Page() {

    //  countInitial1은 렌더링마다 계속 실행됨
    const [count, setCount] = useState(countInitial1());
    const [count2, setCount2] = useState(countInitial2);

    // +1만 적용
    // 이벤트 핸들러의 모든 코드가 실행 될때까지 기다리기때문에
    // state가 업데이트 되는 시점은 setter 호출이 완료된 후
    const onClickPlusA = () => {
        setCount(count + 1)
        setCount(count + 1)
    }
    // -2
    const onClickMinusA = () => {
        setCount2(prevCount => prevCount - 1)
        setCount2(prevCount => prevCount - 1)
    }

    const [state, setState] = useState({ count: 4, color: "blue" });

    const onClickChangeState = () => {
        setState({ ...state, count: state.count + 1 })
    }

    return (
        <div>
            <div>
                <button onClick={onClickMinusA}>-</button>
                &nbsp;
                <span>{count}</span>
                &nbsp;
                <span>{count2}</span>
                &nbsp;
                <button onClick={onClickPlusA}>+</button>
                <br></br>
                <span>{state.count} {state.color}</span>
                &nbsp;
                <button onClick={onClickChangeState}>change</button>
            </div>
        </div>
    );
}

// 1. 훅은 조건문 or 반복문에서 쓰지 않습니다.!
