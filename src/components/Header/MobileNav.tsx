import { navLinks } from '~/constants';

import NavItem from './NavItem';

const MobileNav = () => {
  return (
    <ul className='grid h-[calc(100vh_-_4.8rem)] grid-flow-row grid-rows-[repeat(9,_4.8rem)] content-start divide-y divide-grey-dark text-md md:hidden'>
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
