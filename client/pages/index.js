import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Head>
        <title>Upwork Clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <nav>
          <li>
            <ul>
              <Link href="/"> Home </Link>
            </ul>
            <ul>
              <Link href="/signup"> Signup </Link>
            </ul>
          </li>
        </nav>
      </main>
    </>
  )
}
