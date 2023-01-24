import { navLinks } from '~/constants';
import { cn } from '~/utils';

import NavItem from './NavItem';

const MobileNav = () => {
  return (
    <ul
      className={cn(
        'grid h-[var(--mobile-nav-height)] grid-flow-row grid-rows-[repeat(9,_4.8rem)] content-start divide-y divide-grey-dark text-md',
        'md:hidden'
      )}
    >
      {navLinks
        .filter((link) => link.isDropdown !== true)
        .map(({ name, href }) => (
          <NavItem key={name} href={href} isMobile={true}>
            {name}
          </NavItem>
        ))}
    </ul>
  );
};

export default MobileNav;
