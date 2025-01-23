export const YouTube: React.FC<React.ComponentPropsWithoutRef<"svg">> = ({
  ...rest
}) => (
  <svg
    {...rest}
    width="24"
    height="24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g
      clipPath="url(#a)"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22.54 6.795a2.78 2.78 0 0 0-1.94-2C19.02 5 12 5 12 5s-7.02 0-8.6.531a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1.5 12c-.012 1.787.142 3.571.459 5.33a2.78 2.78 0 0 0 1.94 1.92C6 20 12 20 12 20s7.02 0 8.6-.531a2.78 2.78 0 0 0 1.94-1.999c.313-1.732.469-3.49.459-5.25a29.002 29.002 0 0 0-.459-5.325Z" />
      <path d="m9.75 15.395 5.75-3.27-5.75-3.273v6.543Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path
          fill="currentColor"
          transform="translate(0 .375)"
          d="M0 0h24v24H0z"
        />
      </clipPath>
    </defs>
  </svg>
);
