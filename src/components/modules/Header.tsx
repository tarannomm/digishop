import React from 'react'
import ShopBadge from './shopBadge';
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg"

function Header() {
  return (
    <div className='box relative'>
     <h1 className='text-dark font-bold lg:text-xl px-5'> دیجی شاپ </h1>
     <img src="/logo.png" className='rounded-full w-14 absolute left-[48%] top-[20%] hidden lg:inline'/>
     <div className='flex items-center'>
    <Link className=" mx-5 flex items-center text-orangedark " to=""><CgProfile className='text-[40px] m-1' /><span className='hidden lg:inline'>ورود/ ثبت نام</span></Link>
     <ShopBadge/>
     </div>
    </div>
  )
}

export default Header
