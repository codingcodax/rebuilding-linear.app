import { cn } from '~/utils';

import NavLink from './NavLink';

interface Props {
  href?: string;
  isInTablet?: boolean;
  isMobile?: boolean;
  children: React.ReactNode;
}

const NavItem = ({ href, isInTablet, isMobile = false, children }: Props) => {
  return (
    <li
      className={cn(
        !isMobile && 'hidden',
        isInTablet ? 'md:list-item' : 'lg:list-item'
      )}
    >
      {!href && <button>{children}</button>}

      {href && <NavLink href={href}>{children}</NavLink>}
    </li>
  );
};

export default NavItem;
