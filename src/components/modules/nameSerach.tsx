import { Input } from '@heroui/react'
import React from 'react'

function NameSerach() {
  return (
    <div className='box !p-2  flex-col w-full'>
        <div className=' text-dark rounded-xl text-tiny'>فیلتر بر اساس اسم</div>
        <Input type="text" placeholder='نام محصول'/>
      
    </div>
  )
}
export default NameSerach
