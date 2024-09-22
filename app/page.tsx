import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import SecondPart from "@/components/SecondPart";
import Testinomial from "@/components/Testinomial";
import Features from "@/components/Features";
import Advantage from "@/components/Advantage";
import FaqSections from "@/components/FaqSections";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
    <Header/>
    <SecondPart/>
    <Testinomial/>
    <Features/>
    <Advantage/>
    <FaqSections/>
    <Footer/>
    </div>
  );
}
