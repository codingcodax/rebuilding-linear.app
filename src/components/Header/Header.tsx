import Link from 'next/link';

import Icons from '~/components/Icons';
import { Button } from '~/components/ui/Button';

const Header = () => {
  return (
    <header className='container fixed top-0 left-0 right-0 z-20 w-full px-8'>
      <div className='before:pointer-events-none before:absolute before:-top-[1px] before:right-0 before:-bottom-1/2 before:left-0 before:select-none before:backdrop-blur-md before:[mask-image:linear-gradient(to_bottom,#000_4.8rem,transparent)]' />

      <nav>
        <ul className='relative flex h-12 items-center space-x-6 text-sm after:absolute after:bottom-0 after:h-[1px] after:w-full after:bg-white/[0.08]'>
          <li>
            <Link className='flex items-center text-md font-medium' href='/'>
              <Icons.Logo className='mr-2 h-[1.8rem] w-[1.8rem]' /> Linear
            </Link>
          </li>
          <li>
            <Link className='nav-link' href='#'>
              Features
            </Link>
          </li>
          <li>
            <Link className='nav-link' href='#'>
              Method
            </Link>
          </li>
          <li>
            <Link className='nav-link' href='#'>
              Customers
            </Link>
          </li>
          <li>
            <Link className='nav-link' href='#'>
              Changelog
            </Link>
          </li>
          <li>
            <Link className='nav-link' href='#'>
              Integrations
            </Link>
          </li>
          <li>
            <Link className='nav-link' href='#'>
              Pricing
            </Link>
          </li>
          <li>
            <Link className='nav-link' href='#'>
              Company
            </Link>
          </li>

          <li className='ml-[auto_!important]'>
            <Link className='nav-link' href='#'>
              Log in
            </Link>
          </li>
          <li>
            <Button href='#'>Sign up</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
