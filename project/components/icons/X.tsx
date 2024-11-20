export const X: React.FC<React.ComponentPropsWithoutRef<'svg'>> = ({
  ...rest
}) => (
  <svg {...rest} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18.354 6 6 18.354 5.647 18 18 5.646l.354.354Z"
      fill="currentcolor"
      stroke="currentcolor"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <path
      d="M5.647 6 6 5.646 18.354 18l-.354.354L5.647 6Z"
      stroke="currentcolor"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
);
