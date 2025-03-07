import React, { useState } from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import { SelectProps } from "../../types/AppTypes";

const DropDownCostum: React.FC<SelectProps> = ({ items, state, setState }) => {
  return (
    <Dropdown className="w-full">
      <DropdownTrigger>
        <Button className="capitalize w-full text-[12px]" variant="bordered">
          {state}
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
        {items.map((item) => (
          <DropdownItem key={item.title}>{item.title}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropDownCostum;
