import React from "react";
import cn from "classnames";
import { dataTypes } from "./types";

const Container: React.FC<dataTypes> = ({ children, className }) => (
  <div className={cn("container flex justify-center py-4", className)}>
    <div className="w-[1200px] ">{children}</div>
  </div>
);
export default Container;
