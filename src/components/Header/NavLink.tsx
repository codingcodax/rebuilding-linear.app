import Link, { type LinkProps } from 'next/link';

import { cn } from '~/utils';

interface Props extends LinkProps {
  children: React.ReactNode;
}

const NavLink = ({ children, ...restProps }: Props) => {
  return (
    <Link
      className={cn(
        'flex h-full items-center font-medium duration-[250ms]',
        'hover:text-[#8a8f98]'
      )}
      {...restProps}
    >
      {children}
    </Link>
  );
};

export default NavLink;
