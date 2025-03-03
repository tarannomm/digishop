import React from 'react'
import SortBox from '../modules/sortBox'
import ProductCard from '../modules/Card'
import { useQuery } from '@tanstack/react-query'
import { productsReq } from '../../services/requests'
import { ProductType } from '../../types/AppTypes'
import { Spinner } from '@heroui/react'
import CategorySearch from '../modules/categorySearch'
import NameSerach from '../modules/nameSerach'

const ProductsList:React.FC=()=>{
    const {data ,isLoading}=useQuery<ProductType[]>({
        queryKey:["product"],
        queryFn:productsReq

    })
     
  return (
    <div className='w-full flex justify-between'> 
        <div className='w-[22%]'>
        <NameSerach/>
        <CategorySearch/>
        </div>
        <div className='w-full lg:w-[75%]'>
         <SortBox/>
        <div className='m-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ' >
            {isLoading?
          <Spinner size='lg' className="text-5xl w-[400px]" variant="dots" />
           :
        data!.map(product=>
            <ProductCard info={product}/> 
        )} 
        </div>
        </div >
      
       
    </div>
  )
}

export default ProductsList
