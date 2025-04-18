import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>RENKMEN D.O.O.</title>
        <meta name="description" content="AI-powered agents, automation systems, and code that build the future. Meet Renkmen D.O.O." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <header className={styles.navbar}>
          <div className={styles.logo}>RENKMEN</div>
          <nav className={styles.menu}>
            <a>About</a>
            <a>Services</a>
            <a>Projects</a>
            <a>🌐 EN</a>
          </nav>
        </header>
        <section className={styles.hero}>
          <div className={styles.textBlock}>
            <h1>We design<br/>thinking<br/>systems<br/>with AI</h1>
            <p>AI-powered agents, automation systems, and code that build the future. Meet Renkmen D.O.O.</p>
            <a href="#" className={styles.button}>Get in Touch</a>
          </div>
          <div className={styles.robot}>
            <img src="/robot.png" alt="Robot illustration" width="400" height="400" />
          </div>
        </section>
        <footer className={styles.footer}>
          <p>Renkmen D.O.O. · Podgorica, Montenegro · Email: info@renkmen.com</p>
          <p>Copyright © 2025</p>
        </footer>
      </main>
    </>
  )
}