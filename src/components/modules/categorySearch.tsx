import React, { useState } from 'react'
import DropDownCostum from './dropDown';
import { useQueries, useQuery } from '@tanstack/react-query';
import { availableCategories } from '../../services/requests';
import { Spinner } from '@heroui/react';

function CategorySearch() {
    const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set([""]));
   const {data ,isLoading}=useQuery({
    queryKey:["categories"],
    queryFn:availableCategories
   })
   console.log(data);
   
   return (
     <div className='box !justify-end flex-col w-full'>
       <span className='span'>فیلتر  محصولات با دسته بندی :</span>
       {isLoading?
       <Spinner/>:
       <DropDownCostum items={data} defaultVal='' label="" state={selectedKeys} setState={setSelectedKeys}/>
       }
     </div> 
   );
 };
export default CategorySearch;