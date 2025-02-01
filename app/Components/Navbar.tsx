'use client'

import React, { useState } from 'react'
import close from '@/public/assets/close.svg'
import logo from '@/public/assets/logo.svg'
import menu from '@/public/assets/menu.svg'
import Image from 'next/image'
import { navLinks } from '@/data'

const Navbar = () => {

    const [active, setActive] = useState('Home')
    const [toggle, setToggle] = useState(false)

  return (
    <div className='w-full flex py-6 justify-between items-center navbar'>
      <Image src={logo} alt='hoobank' width={132} height={32}></Image>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <Image src={toggle? close : menu }
        alt='menu'
        className='w-[28px] h-[28px] object-contain cursor-pointer'
        onClick={()=>setToggle(!toggle)}/>

        <div
        className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
