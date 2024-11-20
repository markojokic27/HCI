export const MapPin: React.FC<React.ComponentPropsWithoutRef<'svg'>> = ({
  ...rest
}) => (
  <svg
    {...rest}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.684 21.431a.497.497 0 0 0 .17.09.5.5 0 0 0-.254.179l-.143.19a31.613 31.613 0 0 1-3.644-3.475C5.807 16.161 3.75 13.1 3.75 10.001a8.25 8.25 0 1 1 16.5 0c0 3.099-2.057 6.16-4.063 8.416a31.624 31.624 0 0 1-3.644 3.475l-.141-.189-.002-.002a.5.5 0 0 0-.254-.178.497.497 0 0 0 .17-.09 31.089 31.089 0 0 0 3.497-3.348C17.807 15.84 19.75 12.9 19.75 10a7.75 7.75 0 1 0-15.5 0c0 2.901 1.943 5.84 3.937 8.084a31.097 31.097 0 0 0 3.497 3.347Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 7.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5ZM8.75 10a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
