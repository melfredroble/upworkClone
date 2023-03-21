import styles from '@/styles/Home.module.css'
import {Header} from "@/components/Header"
import { Homepage } from './Homepage/home'

export default function Home() {
  return (
    <>
      <Header/>
      <Homepage />
    </>
  )
}
