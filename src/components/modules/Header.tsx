import React from 'react'
import ShopBadge from './shopBadge';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className='box relative'>
     <h1 className='text-dark font-bold lg:text-xl px-5'> دیجی شاپ </h1>
     <img src="/logo.png" className='rounded-full w-14 absolute left-[48%] top-[20%]'/>
     <div className='flex items-center'>
    <Link className="links mx-5" to="">ورود/ثبت نام</Link>
     
     <ShopBadge/>
     </div>
   
    </div>
  )
}

export default Header
