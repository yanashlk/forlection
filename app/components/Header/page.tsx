"use client"
import React from 'react'


const Header = () => {
  console.log(process.env.ENV_WELCOME)
  return (
    <div>{process.env.NEXT_PUBLIC_HEADER_WELCOME}</div>
  )
}

export default Header