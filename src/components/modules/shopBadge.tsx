import { Badge, Chip } from '@heroui/react'
import React from 'react'
import { LuShoppingCart } from 'react-icons/lu'

function ShopBadge() {
  return (
    <>
    <Badge className='bg-white border-1 border-light' placement="top-left" content="5">
    <div className='bg-orangedark p-[1px] rounded-full flex items-center'>
    <div className='bg-white rounded-full p-2'><LuShoppingCart size={18} /></div>
     <span className='px-1 text-lighten'>ddddd</span>
    </div>
    </Badge>
    </>
  )
}

export default ShopBadge
