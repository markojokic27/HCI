export const CreditCard: React.FC<React.ComponentPropsWithoutRef<"svg">> = ({
  ...rest
}) => (
  <svg
    {...rest}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 5.25c-.9665 0-1.75.7835-1.75 1.75v1.75H2c-.0856 0-.1692.0086-.25.025V7c0-1.2426 1.0074-2.25 2.25-2.25h16c1.2426 0 2.25 1.0074 2.25 2.25v1.775A1.2565 1.2565 0 0 0 22 8.75h-.25V7c0-.9665-.7835-1.75-1.75-1.75H4Zm-2 4.5h.25v.5H2a.25.25 0 1 1 0-.5Zm1.25.5v-.5h17.5v.5H3.25Zm-1.25 1h.25V17c0 .9665.7835 1.75 1.75 1.75h16c.9665 0 1.75-.7835 1.75-1.75v-5.75H22c.0856 0 .1692-.0086.25-.025V17c0 1.2426-1.0074 2.25-2.25 2.25H4c-1.2426 0-2.25-1.0074-2.25-2.25v-5.775c.0808.0164.1644.025.25.025Zm20-1h-.25v-.5H22a.25.25 0 1 1 0 .5Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
