import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@heroui/react';
import React, { useState } from 'react';
import DropDownCostum from './dropDown';

const SortBox: React.FC = () => {
  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set(["price"]));
   const label= selectedKeys.has("price") ? "بیشترین قیمت" : "جدید ترین محصول";
  const items=[
    {title:"بیشترین قیمت",key:"price"},
    {title:"جدید ترین محصول",key:"date"},
  ]
  return (
    <div className='box m-2 !p-[6px] !justify-end'>
      <span className='span'>مرتب سازی بر اساس :</span>
       <DropDownCostum items={items} defaultVal='price' label={label} state={selectedKeys} setState={setSelectedKeys}/>
    </div> 
  );
};

export default SortBox;
