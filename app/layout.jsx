import './globals.css'
import {  Poppins } from 'next/font/google'
import Header from './component/Header'

const poppins = Poppins({
weight: ['400', '700'],
subsets: ['latin-ext'],

 })


export const metadata = {
  title: 'Grace Media',
  description: 'Grace media is a media company that specializes in selling social media handles in the San Francisco Bay Area.Grace Media is a family owned business that has been in operation for over 20 years.',
  keywords: 'facebook, gmail,twitter, instagram, san francisco, bay area, california, usa',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className='container'>
        {children}
        </main>
        </body>
    </html>
  )
}
