import Link from "next/link"



const Header = () => {
  return (
    <header className="header">
    <div className="container">
        <div className="logo">
        <Link href="/">Grace Media</Link>
        </div>
        <div className="links">
        <Link href="/about">About</Link>
        <Link href="/about/team">Our Team</Link>
        <Link href="/contact/repos">Contact</Link>
        </div>
    </div>
    </header>
  )
}

export default Header