import React from 'react'
import LottieWrapper from './lottieWrapper'
import { Link } from 'react-router-dom'
import { lottieDesignProps } from '../../types/AppTypes'

const LottieDesign:React.FC<lottieDesignProps> = ({text,link,animation,linkText}) => {
  return (
    <div>
        <div className='w-[40%] min-w-[300px] h-[400px] flex flex-col items-center m-auto my-20'>
        <h1 className='text-dark font-bold lg:text-lg '>{text}</h1>
        <LottieWrapper animationType={animation}/>
        <Link to={link} className="links hover:text-orange-600">{linkText}</Link>
    </div>
    </div>
  )
}

export default LottieDesign
