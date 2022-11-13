import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.title}>
      <h1 className={styles.text}>HomePage</h1>
      <p className={styles.text}>Lorem, ipsum</p>
      <Link className={styles.btn} href='/ninjas'>See Ninja Listing</Link>
    </div>
  )
}
