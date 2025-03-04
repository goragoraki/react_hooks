import { ReactNode, useEffect, useState } from "react";

export default function List({
    getItems
}: {
    getItems: (num: number) => number[];
}) {
    const [items, setItems] = useState<number[]>([]);

    useEffect(() => {
        setItems(getItems(1));
        console.log("updating items");
    }, [getItems])

    return (
        <div>
            {items.map((item) => <div key={item}>{item}</div>)}
        </div>
    );
}