import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>hooks main page</div>
      <br></br>
      <Link href={"useState"}>useState</Link>
      <br></br>
      <Link href={"useEffect"}>useEffect</Link>
      <br></br>
      <Link href={"useContext"}>useContext</Link>
      <br></br>
      <Link href={"useRef"}>useRef</Link>
      <br></br>
      <Link href={"useMemo"}>useMemo</Link>
      <br></br>
      <Link href={"useCallBack"}>useCallBack</Link>
      <br></br>
      <Link href={"useReducer"}>useReducer</Link>
      <br></br>
      <Link href={"useTransition"}>useTransition</Link>
    </div>
  );
}

// react hook은 조건문, 반복문엔 들어갈수 없다!