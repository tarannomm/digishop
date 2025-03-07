import React, { useEffect, useState } from "react";
import DropDownCostum from "./dropDown";
import { filterprops } from "../../types/AppTypes";

const SortBox: React.FC<filterprops> = ({ state, setState }) => {
  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(
    new Set(["-----"])
  );
  const items = [
    { title: "-----", key: "" },
    { title: "بیشترین قیمت", key: "price" },
    { title: "جدید ترین محصول", key: "date" },
  ];

  useEffect(() => {
    if (selectedKeys) {
      const selected = items.filter(
        (item) => item.title == Array.from(selectedKeys)[0]
      );
      setState({ ...state, sort: selected && selected[0].key });
    }
  }, [selectedKeys]);

  return (
    <div className="box my-2 !p-[6px] !justify-end">
      <span className="span">مرتب سازی بر اساس :</span>
      <div className="w-[130px]">
        <DropDownCostum
          items={items}
          state={selectedKeys}
          setState={setSelectedKeys}
        />
      </div>
    </div>
  );
};

export default SortBox;
