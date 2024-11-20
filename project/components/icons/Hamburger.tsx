export const Hamburger: React.FC<React.ComponentPropsWithoutRef<'svg'>> = ({
  ...rest
}) => (
  <svg
    {...rest}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      fill="currentcolor"
      fillRule="evenodd"
      d="M2.25 5.25h19.5v1.5H2.25v-1.5Zm0 6h19.5v1.5H2.25v-1.5Zm0 6h19.5v1.5H2.25v-1.5Z"
      clipRule="evenodd"
    />
  </svg>
);
