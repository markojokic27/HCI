export const Plus: React.FC<React.ComponentPropsWithoutRef<"svg">> = ({
  ...rest
}) => (
  <svg
    {...rest}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.25 18.813v-14h1.5v14h-1.5Z"
      fill="currentcolor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 12.563H5v-1.5h14v1.5Z"
      fill="currentcolor"
    />
  </svg>
);
