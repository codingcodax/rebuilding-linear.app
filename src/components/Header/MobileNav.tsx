import { navLinks } from '~/constants';
import { cn } from '~/utils';

import NavItem from './NavItem';

interface Props {
  isOpen: boolean;
}

const MobileNav = ({ isOpen }: Props) => {
  return (
    <div
      className={cn(
        'bg-background',
        'transition-opacity duration-[400ms]',
        'md:hidden',
        isOpen ? 'opacity-100' : 'opacity-0'
      )}
    >
      <ul
        className={cn(
          'grid h-[var(--mobile-nav-height)] grid-flow-row grid-rows-[repeat(9,_4.8rem)] content-start divide-y divide-grey-dark px-6 text-md',
          'transition-transform duration-[400ms]',
          isOpen ? 'translate-y-0' : 'translate-y-3'
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
    </div>
  );
};

export default MobileNav;
