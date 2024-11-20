export const ChevronUp: React.FC<React.ComponentPropsWithoutRef<"svg">> = ({
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
      d="m18.53 14.735-1.06 1.06-5.47-5.47-5.47 5.47-1.06-1.06L12 8.205l6.53 6.53Z"
      fill="currentColor"
    />
  </svg>
);
