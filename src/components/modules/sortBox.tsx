import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@heroui/react';
import React, { useState } from 'react';

const SortBox: React.FC = () => {
  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set(["price"]));

  return (
    <div className='box m-2 !justify-end'>
      <span className='span'>مرتب سازی بر اساس :</span>
      <Dropdown>
        <DropdownTrigger>
          <Button className="capitalize w-[120px] text-[12px]" variant="bordered">
            {selectedKeys.has("price") ? "بیشترین قیمت" : "جدید ترین محصول"}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          disallowEmptySelection
          aria-label="Single selection example"
          selectedKeys={selectedKeys}
          selectionMode="single"
          variant="flat"
          onSelectionChange={(keys) => setSelectedKeys(new Set(keys as Set<string>))}
        >
          <DropdownItem key="price">بیشترین قیمت</DropdownItem>
          <DropdownItem key="newest">جدید ترین محصول</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default SortBox;
