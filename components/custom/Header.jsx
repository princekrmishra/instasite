import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <div>
        <Image src={'/logo.png'} alt='Logo' width={40} height={40}/>
    </div>
  )
}

export default Header