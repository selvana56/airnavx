import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={'/'} className="text-xl font-bold ">
          <span>AirNav



          </span>
          <span className="text-2xl inline-block text-primary animate-wiggle">X</span>
        </Link>
  )
}

export default Logo