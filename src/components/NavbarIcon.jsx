import React from 'react';
import { twMerge } from 'tailwind-merge';

export const Icon = ({ component: Component, href = "#", className }) => {
  return (
    <a
      href={href}
      target="_blank"
      className={twMerge("group mx-4 mt-4 md:mt-0", className)}
    >
      <Component
        className={twMerge(
          " hover:fill-[#915eff] transition-colors duration-300"
        )}
      />
    </a>
  );
};
