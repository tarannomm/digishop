import React, { useState } from 'react'
import SortBox from '../modules/sortBox'
import ProductCard from '../modules/Card'
import { useQuery } from '@tanstack/react-query'
import { productsReq } from '../../services/requests'
import { filterType, ProductType } from '../../types/AppTypes'
import { Button, Spinner } from '@heroui/react'
import CategorySearch from '../modules/categorySearch'
import NameSerach from '../modules/nameSerach'
import LottieWrapper from '../../utility/lotties/lottieWrapper'

const ProductsList:React.FC=()=>{
    const[filter,setFilter]=useState<filterType>({})
    const {data ,isLoading}=useQuery<ProductType[]>({
        queryKey:["product",filter],
        queryFn:()=>productsReq(filter)

    })
   
  return (
    <div className='w-full flex flex-col lg:flex-row justify-between'>
         <div className='lg:w-[22%] flex lg:flex-col m-2'>
        <NameSerach state={filter} setState={setFilter}/>
        <CategorySearch state={filter} setState={setFilter}/>
        </div>
        <div className='w-full lg:w-[75%]'>
         <SortBox state={filter} setState={setFilter}/>
        
        {isLoading?
          <Spinner size='lg' className="text-5xl w-[400px]" variant="dots" />
           :
        data?.length ? <div className='m-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  ' >
            {data.map(product=>
            
            <ProductCard info={product}/> 
           
        )} </div>:
        <div className=' flex flex-col items-center w-[50%] min-w-[250px] max-w-[400px] !mx-auto !my-12'>
            <p className='links mb-8'>محصولی با این مشخصات یافت نشد !</p>
            <LottieWrapper animationType='search' />
            </div>} 
        
        </div >
      
       
    </div>
  )
}

export default ProductsList
