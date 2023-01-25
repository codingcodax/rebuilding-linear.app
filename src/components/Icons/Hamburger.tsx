const Hamburger = ({ className }: { className?: string }) => (
  <svg className={className} fill='none' viewBox='0 0 18 11'>
    <path d='M0 0h18v1H0V0Zm0 10h18v1H0v-1Z' fill='currentColor' />
  </svg>
);

export default Hamburger;
