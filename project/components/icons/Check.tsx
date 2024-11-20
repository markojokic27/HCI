export const Check: React.FC<React.ComponentPropsWithoutRef<'svg'>> = ({
  ...rest
}) => (
  <svg
    {...rest}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.354 16.293 20 5.646l.354.354L9.177 17.177a.25.25 0 0 1-.354 0L3.646 12 4 11.646l4.646 4.647a.5.5 0 0 0 .708 0Z"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
);
