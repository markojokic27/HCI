export const Facebook: React.FC<React.ComponentPropsWithoutRef<"svg">> = ({
  ...rest
}) => (
  <svg
    {...rest}
    width="24"
    height="24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 2.375h-3a5 5 0 0 0-5 5v3h-3v4h3v8h4v-8h3l1.333-4h-4.333v-3A1 1 0 0 1 15 6.375h3V2.375Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
