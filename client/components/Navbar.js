import Link from "next/link"

export const Navbar = () => {
  return (
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
  )
}
