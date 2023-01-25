import { useState } from 'react';

import { navLinks } from '~/constants';
import { cn } from '~/utils';
import { Button } from '~/components/ui/Button';

import Hamburger from '../Icons/Hamburger';

import Logo from './Logo';
import NavItem from './NavItem';
import MobileNav from './MobileNav';
import NavLink from './NavLink';

const Nav = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleMenu = () => setMenuIsOpen((prev) => !prev);

  return (
    <nav className='container z-10 px-6 md:px-8'>
      <ul
        className={cn(
          'relative flex h-12 items-center space-x-6 text-sm',
          'after:absolute after:bottom-0 after:h-[1px] after:w-full after:bg-white/[0.08]'
        )}
      >
        <Logo />

        {navLinks
          .filter((link) => link.isMobile !== true)
          .map(({ name, href, isInTablet }) => (
            <NavItem key={name} href={href} isInTablet={isInTablet}>
              {name}
            </NavItem>
          ))}

        <li className='!ml-auto'>
          <NavLink href='/'>Log in</NavLink>
        </li>
        <li>
          <Button href='/'>Sign up</Button>
        </li>

        <button onClick={handleMenu}>
          <Hamburger className='h-[1.8rem] w-[1.8rem]' />
        </button>
      </ul>

      {menuIsOpen && <MobileNav />}
    </nav>
  );
};

export default Nav;
