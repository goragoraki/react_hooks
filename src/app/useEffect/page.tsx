"use client"
import { useEffect, useRef, useState } from "react";

export default function Page() {

    const [resourceType, setResourceType] = useState('posts');
    const [items, setItem] = useState([]);
    const [windowWith, setWindowWith] = useState(window.innerWidth);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then((response) => response.json())
            .then((json) => setItem(json));
    }, [resourceType])

    const handleResize = () => {
        setWindowWith(window.innerWidth);
    }

    useEffect(() => {
        console.log("add");
        window.addEventListener("resize", handleResize);
        return () => {
            console.log("remove");
            window.removeEventListener("resize", handleResize);
        }
    }, [])

    const onClickPost = () => {
        setResourceType('posts');
    }
    const onClickUsers = () => {
        setResourceType('users');
    }
    const onClickComments = () => {
        setResourceType('comments');
    }

    return (
        <div>
            <button onClick={onClickPost}>posts</button>
            <button onClick={onClickUsers}>users</button>
            <button onClick={onClickComments}>comments</button>
            <div>{windowWith}</div>
            <div>
                {resourceType}
            </div>
            <div>
                {items.map((item) => {
                    return <div key={(item as any).id}>{JSON.stringify(item)}</div>
                })}
            </div>
        </div>
    );
}