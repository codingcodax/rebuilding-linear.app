import { Button } from '~/components/ui/Button';
import { navLinks } from '~/constants';

import Logo from './Logo';
import NavItem from './NavItem';
import MobileNav from './MobileNav';
import NavLink from './NavLink';

const Nav = () => {
  return (
    <nav className='container z-10 px-6 md:px-8'>
      <ul className='relative flex h-12 items-center space-x-6 text-sm after:absolute after:bottom-0 after:h-[1px] after:w-full after:bg-white/[0.08]'>
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
      </ul>

      <MobileNav />
    </nav>
  );
};

export default Nav;
