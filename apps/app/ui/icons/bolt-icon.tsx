import React from "react";

import type { Props } from "./types";

export const BoltIcon: React.FC<Props> = ({ width = "24", height = "24", className }) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.6002 21C10.4169 21 10.2752 20.9417 10.1752 20.825C10.0752 20.7083 10.0419 20.5583 10.0752 20.375L11.0002 13.95H7.3502C7.16686 13.95 7.03353 13.8667 6.9502 13.7C6.86686 13.5333 6.86686 13.375 6.9502 13.225L12.8752 3.325C12.9252 3.24167 13.0085 3.16667 13.1252 3.1C13.2419 3.03333 13.3585 3 13.4752 3C13.6585 3 13.8002 3.05833 13.9002 3.175C14.0002 3.29167 14.0335 3.44167 14.0002 3.625L13.0752 10.025H16.6752C16.8585 10.025 16.996 10.1083 17.0877 10.275C17.1794 10.4417 17.1835 10.6 17.1002 10.75L11.2002 20.675C11.1502 20.7583 11.0669 20.8333 10.9502 20.9C10.8335 20.9667 10.7169 21 10.6002 21V21Z" />
    </svg>
  );
};