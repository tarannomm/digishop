import { Badge, Chip } from '@heroui/react'
import React from 'react'
import { LuShoppingCart } from 'react-icons/lu';
import { useSelector } from 'react-redux';

const ShopBadge:React.FC=()=>{
    const cartItems = useSelector((state:any) => state.myArray.cartItem);
  return (
    <>
    <Badge className='bg-white border-1 border-light' placement="top-left"  content={cartItems?.length || 0}>
    <div className='bg-orangedark p-[3px] rounded-full flex items-center'>
    <div className='bg-white rounded-full p-[6px]'><LuShoppingCart size={14} /></div>
     <span className='px-1 text-lighten hidden lg:inline'>ddddd</span>
    </div>
    </Badge>
    </>
  )
}

export default ShopBadge
