"use client"

import { ChangeEvent, Suspense, useEffect, useRef, useState, useTransition } from "react"

export default function Page() {
    const [isPending, startTransition] = useTransition();
    const [input, setInput] = useState('');
    const [list, setList] = useState<string[]>([]);

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
        startTransition(() => {
            const l = [];
            for (let i = 0; i < 20000; i++) {
                l.push(e.target.value);
            }

            setList(l);
        })
    }

    return (
        <div>
            <input onChange={onChangeInput} value={input} />
            {isPending ? "loading.." : list.map((item, index) => <div key={index}>{item}</div>)}

        </div>
    )
}

/// useTransition
// 오래걸리는 작업을 우선순위를 뒤로 밀어준다.
