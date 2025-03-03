import React, { useState } from 'react';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@heroui/react';
import { SelectProps } from '../../types/AppTypes';

const DropDownCostum:React.FC<SelectProps>=({items,defaultVal,label,state,setState})=>{
  return (
    <div>
         <Dropdown>
        <DropdownTrigger>
          <Button className="capitalize w-[120px] text-[12px]" variant="bordered">
            {label}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          disallowEmptySelection
          aria-label="Single selection example"
          selectedKeys={state}
          selectionMode="single"
          variant="flat"
          onSelectionChange={(keys) => setState(new Set(keys as Set<string>))}
        >
            {items.map(item=>
              <DropdownItem key={item.key}>{item.title}</DropdownItem>
            )}
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}

export default DropDownCostum
