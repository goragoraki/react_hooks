"use client"
import { ChangeEvent, useEffect, useRef, useState } from "react"

export default function Page() {

    const [name, setName] = useState('');
    const prevNameRef = useRef('');
    const focusRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        prevNameRef.current = name;
        console.log(prevNameRef.current);
    }, [name]) // 브라우저의 렌더링이 이루어진 후 콜백함수 실행

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        //prevNameRef.current = name;
        // 똑같다 왜냐 ??? setter함수는 바로 값을 업데이트 하지 않는다.
        // 호출된 useState에서 일괄적으로 이루어지게 됨
    }

    const onClickFocus = () => {
        focusRef.current?.focus();
    }

    return (
        <div>
            <input ref={focusRef} value={name} onChange={onChangeInput} />
            <div>My name is {name} and previous name is {prevNameRef.current}</div>
            <button onClick={onClickFocus}>focus</button>
        </div>
    )
}

//useRef는 리렌더링을 발생시키지 않는다.