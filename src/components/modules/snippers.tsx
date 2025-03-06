import { Spinner } from "@heroui/react";
import React from "react";

const Snippers: React.FC = () => {
  return (
    <div>
      <Spinner
        size="lg"
        className="snipper text-6xl !text-orangeLight  !w-full !h-[300px] mx-auto"
        variant="dots"
      />
    </div>
  );
};

export default Snippers;
