import styles from '@/styles/Home.module.css'
import {Header} from "@/components/Header"
import { Homepage } from './Homepage/home'
import SSRProvider from 'react-bootstrap/SSRProvider';

export default function Home() {
  return (
    <>
    <SSRProvider>
      <Header/>
      <Homepage />
    </SSRProvider>
    </>
  )
}
