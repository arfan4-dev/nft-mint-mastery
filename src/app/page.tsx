"use client";
import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "@/Components/NavBar";
import MainPage from "@/Components/Bodycontent";
import MainPageTwo from "@/Components/BodycontentTow";
import MainPageThree from "@/Components/BodyContentTwo";
import Footer from "@/Components/Footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.body.style.background =
      "linear-gradient(to right,#112823, #112B26)";
    // Cleanup the style on unmount or if the component is re-rendered
    return () => {
      document.body.style.background = "";
    };
  }, []);

  return (
    <div className={styles.container}>
      <NavBar />
      <MainPage />
      <MainPageTwo />
      {/* <MainPageThree/> */}
      <Footer />
    </div>
  );
}
