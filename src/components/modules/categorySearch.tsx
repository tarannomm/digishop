import React, { useEffect, useState } from "react";
import DropDownCostum from "./dropDown";
import { useQueries, useQuery } from "@tanstack/react-query";
import { availableCategories } from "../../services/requests";
import { Spinner } from "@heroui/react";
import { filterprops } from "../../types/AppTypes";

const CategorySearch: React.FC<filterprops> = ({ state, setState }) => {
  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(
    new Set(["همه"])
  );
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: availableCategories,
  });
  const categoriesWithAll = data ? [{ _id: "", title: "همه" }, ...data] : [];

  useEffect(() => {
    if (selectedKeys) {
      const category = categoriesWithAll?.find(
        (item) => item.title === Array.from(selectedKeys)[0]
      );
      setState({ ...state, category: category?._id });
    }
  }, [selectedKeys]);

  return (
    <div className="box m-2 !p-3 !items-start flex-col w-full">
      <span className="span mb-3">فیلتر محصولات با دسته بندی :</span>
      {isLoading ? (
        <Spinner color="warning" className="w-full" />
      ) : (
        <DropDownCostum
          items={categoriesWithAll}
          state={selectedKeys}
          setState={setSelectedKeys}
        />
      )}
    </div>
  );
};
export default CategorySearch;
