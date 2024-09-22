import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import SecondPart from "@/components/SecondPart";
import Testinomial from "@/components/Testinomial";

export default function Home() {
  return (
    <div className={styles.page}>
    <Header/>
    <SecondPart/>
    <Testinomial/>
    </div>
  );
}
