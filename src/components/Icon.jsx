import React from "react";
import { twMerge } from "tailwind-merge";

export const Icon = ({ component: Component, className }) => {
  return (
    <div className={twMerge("inline-flex align-middle")}>
      <Component className={twMerge("", className)} />
    </div>
  );
};
