import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>nam nam</title>
        <meta name="description" content="nam nam bio site." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.nam}>
            <Image className={styles.namnam} src="/nam.jpg" alt="nam nam" width={300} height={300}/>
            <div className={styles.info}>
              <h1 className={styles.title}>namnam</h1>
              <ul>
                <li>TZ: UTC+5</li>
                <li>Arch linux gang</li>
                <li>Gaming</li>
              </ul>
            </div>
          </div>
          <p>An amateur software developer. Learns Rust, HTML5, CSS3, JS, Next framework, React</p>
          <div className={styles.links}>
            <a target="blank" href="https://discordlookup.com/user/838402467858612224"><Image className={styles.linkimg} src={"/discord.svg"} width={50} height={50}/></a>
            <a target="blank" href="https://codeberg.org/namnam"><Image className={styles.linkimg} src={"/codeberg.svg"} width={50} height={50}/></a>
            <a target="blank" href="https://t.me/n4n4m"><Image className={styles.linkimg} src={"/telegram.svg"} width={50} height={50}/></a>
            <a target="blank" href="https://github.com/namnam1105"><Image className={styles.linkimg} src={"/github.svg"} width={50} height={50}/></a>
            <a target="blank" href="https://gitlab.com/namnam1105/"><Image className={styles.linkimg} src={"/gitlab.svg"} width={50} height={50}/></a>
            <a target="blank" href="https://matrix.to/#/@nonam:tchncs.de"><Image className={styles.linkimg} src={"/matrix.svg"} width={50} height={50}/></a>
          </div>
          <div className={styles.footer}>
            <a target="blank" href="https://keyoxide.org/aspe%3Akeyoxide.org%3AL2VCS63SYYAKJ76NPTR2RWY5EA">my keyoxide proofs</a>
            <a target="blank">source</a>
            <a target="blank" href="https://nextjs.org/">made with nextjs</a>
          </div>
        </div>
      </div>
    </>
  );
}
