import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { auth } from '../../../auth'
import { signOut } from 'next-auth/react'

async function Navbar() {

  // to check if user is logged in or not
  const session = await auth()

  return (
    <header className = "px-5 py-3 bg-white shadow-sm font-sans">
      <nav className = "flex justify-between items-center">
        <Link href = "/">
          <Image src = "/logo.png" alt = "logo" width={88} height={80}/>
        </Link>
        <div className = "flex items-center gap-5">
          {session && session?.user ?(
            <>
              <Link href="/startup/create">
                <span> Create </span>
              </Link>
              <button onClick={signOut}>
              <span>LogOut</span>
              </button>
            </>
          ) :
          (
            <>
                Placeholder
            </>
          )
          }
        </div>
      </nav>
      
    </header>
  )
}

export default Navbar
