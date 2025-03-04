import React from 'react'
import LottieWrapper from '../../utility/lotties/lottieWrapper'
import { Link } from 'react-router-dom'

const NotFound:React.FC = () => {
  return (
    <div className='w-[40%] min-w-[300px] h-[400px] flex flex-col items-center m-auto my-20'>
        <h1 className='text-dark font-bold lg:text-lg '>صفحه مورد نظر شما یافت نشد!</h1>
        <LottieWrapper animationType="notfound"/>
        <Link to="/" className="links hover:text-orange-600">انتقال به صفحه اصلی</Link>
    </div>
  )
}

export default NotFound
