import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Menu from "../components/Menu/Menu";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Basic NextJS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Menu />
        <h1>Hello World!</h1>
      </main>

      <Footer/>
    </div>
  );
}
